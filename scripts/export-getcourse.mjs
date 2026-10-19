// Экспорт лендинга в набор HTML-блоков для конструктора GetCourse.
//
// Берёт статическую страницу, которую собрал `next build`, и раскладывает её
// на независимые блоки: 00 — общие стили, дальше по блоку на каждую секцию.
// Все стили привязаны к обёртке .kn и не задевают остальную страницу GetCourse.
//
// Запуск: npm run export:getcourse

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises"
import { join } from "node:path"

import * as cheerio from "cheerio"
import postcss from "postcss"
import sharp from "sharp"

const ROOT = process.cwd()
const OUT = join(ROOT, "getcourse")
const SCOPE = ".kn"

const FONTS_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com">' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@600;700&display=swap">'

// Порядок и имена блоков. Селектор — где секция лежит в собранной странице.
const BLOCKS = [
  { file: "01-menu.html", title: "Меню", selector: "body > header" },
  { file: "02-hero.html", title: "Первый экран", selector: "main > section#top" },
  { file: "03-riski.html", title: "Риски месяца", selector: "main > section#problem" },
  { file: "04-tri-sistemy.html", title: "Три системы", selector: "main > section#systems" },
  { file: "05-ba-tszy.html", title: "Ба Цзы", selector: "main > section#bazi" },
  { file: "06-algoritm.html", title: "Алгоритм 3 шага", selector: "main > section#plan" },
  { file: "07-kalendar.html", title: "Календарь месяца", selector: "main > section#calendar" },
  { file: "08-tsi-men.html", title: "Ци Мэнь по сферам", selector: "main > section#spheres" },
  { file: "09-fenshui.html", title: "Фэншуй", selector: "main > section#fengshui" },
  { file: "10-otzyvy.html", title: "Отзывы", selector: 'main > section[aria-labelledby="proof-title"]' },
  { file: "11-faq.html", title: "Вопросы", selector: "main > section#faq" },
  { file: "12-final.html", title: "Финальный призыв", selector: 'main > section[aria-labelledby="final-cta-title"]' },
  { file: "13-podval.html", title: "Подвал", selector: "body > footer" },
]

// --- CSS -------------------------------------------------------------------

const ROOT_SELECTORS = new Set([":root", ":host", "html", "body"])

function scopeSelector(selector) {
  const sel = selector.trim()
  if (ROOT_SELECTORS.has(sel)) return SCOPE
  for (const root of ROOT_SELECTORS) {
    if (sel.startsWith(`${root} `)) return `${SCOPE} ${sel.slice(root.length + 1)}`
  }
  if (/^\.kn(?![\w-])/.test(sel)) return sel
  return `${SCOPE} ${sel}`
}

const scopePlugin = {
  postcssPlugin: "getcourse-scope",
  Once(root) {
    // 1. Шрифты Next.js лежат на его сервере — в GetCourse их заменяет Google Fonts.
    root.walkAtRules("font-face", (rule) => {
      if (rule.toString().includes("url(")) rule.remove()
    })
    // 2. Классы next/font с переменными шрифтов — переменные заданы ниже на .kn.
    root.walkRules((rule) => {
      if (/_variable$/.test(rule.selector)) rule.remove()
    })
    // 3. Разворачиваем @layer: стили в слоях проигрывают любым стилям платформы.
    root.walkAtRules("layer", (rule) => {
      if (rule.nodes) rule.replaceWith(rule.nodes)
      else rule.remove()
    })
    // 4. Привязываем каждое правило к .kn (кроме кадров анимаций).
    //    Класс .hidden переименован: в Bootstrap 3 есть .hidden{display:none!important}.
    root.walkRules((rule) => {
      const parent = rule.parent
      if (parent?.type === "atrule" && /keyframes$/.test(parent.name)) return
      rule.selectors = rule.selectors.map((selector) =>
        scopeSelector(selector.replace(HIDDEN_CLASS_IN_SELECTOR, ".kn-hidden")),
      )
    })
    // 5. rem → px: платформа может менять размер шрифта у html (Bootstrap 3 ставит 10px).
    root.walkDecls((decl) => {
      if (decl.value.includes("rem")) {
        decl.value = decl.value.replace(REM_VALUE, (_, number) => `${+(number * 16).toFixed(4)}px`)
      }
    })
    root.walkAtRules((rule) => {
      if (rule.params.includes("rem")) {
        rule.params = rule.params.replace(REM_VALUE, (_, number) => `${+(number * 16).toFixed(4)}px`)
      }
    })
  },
}

const HIDDEN_CLASS_IN_SELECTOR = /\.hidden(?![\w\\-])/g
const REM_VALUE = /(-?\d*\.?\d+)rem\b/g

// Защита от стилей платформы, которые задают цвет и маркеры прямо тегам.
const GUARD_CSS =
  `${SCOPE} :is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,th,td,figcaption,blockquote,summary,caption){color:inherit}` +
  `${SCOPE} li{list-style:inherit}`

async function buildCss(cssPath) {
  const css = await readFile(cssPath, "utf8")
  const result = await postcss([scopePlugin]).process(css, { from: undefined })
  const base =
    `html{scroll-behavior:smooth}` +
    `${SCOPE}{--font-inter:"Inter","Inter Fallback",Arial,sans-serif;` +
    `--font-lora:"Lora","Lora Fallback",Georgia,serif;font-size:16px;text-align:left}` +
    GUARD_CSS
  return base + result.css
}

// --- HTML ------------------------------------------------------------------

async function heroImageDataUri() {
  const webp = await sharp(join(ROOT, "public/images/fire-rooster.jpg"))
    .resize({ width: 560 })
    .webp({ quality: 65 })
    .toBuffer()
  return `data:image/webp;base64,${webp.toString("base64")}`
}

function cleanBlock($, el, imageUri) {
  const block = $(el).clone()

  // Кнопка мобильного меню работает на React — в GetCourse она бесполезна.
  block.find('[aria-haspopup="dialog"]').remove()
  block.find("script, template, link, noscript").remove()
  block.find("[hidden]").remove()

  // Картинка: встраиваем в блок, чтобы не загружать файл отдельно.
  block.find("img").each((_, img) => {
    const $img = $(img)
    $img.attr("src", imageUri)
    for (const attr of ["srcset", "sizes", "style", "data-nimg", "fetchpriority"]) {
      $img.removeAttr(attr)
    }
    $img.attr("loading", "eager")
    $img.attr("decoding", "async")
  })

  // Класс hidden переименован — см. HIDDEN_CLASS_IN_SELECTOR.
  block
    .find(".hidden")
    .addBack(".hidden")
    .removeClass("hidden")
    .addClass("kn-hidden")

  // Служебные комментарии React.
  block
    .find("*")
    .addBack()
    .contents()
    .filter((_, node) => node.type === "comment")
    .remove()

  return `<div class="kn">${$.html(block)}</div>`
}

// --- main ------------------------------------------------------------------

async function main() {
  const htmlPath = join(ROOT, ".next/server/app/index.html")
  const html = await readFile(htmlPath, "utf8").catch(() => {
    throw new Error("Нет собранной страницы. Сначала выполните: npm run build")
  })
  const $ = cheerio.load(html)

  const cssHref = $('link[rel="stylesheet"]').first().attr("href")
  if (!cssHref) throw new Error("В собранной странице не найден CSS")
  const cssFile = cssHref.split("/").pop()
  const chunks = await readdir(join(ROOT, ".next/static/chunks"))
  if (!chunks.includes(cssFile)) throw new Error(`Не найден файл стилей ${cssFile}`)
  const css = await buildCss(join(ROOT, ".next/static/chunks", cssFile))

  const imageUri = await heroImageDataUri()

  // Удаляем только прошлые блоки — README.md с инструкцией остаётся.
  await mkdir(OUT, { recursive: true })
  for (const file of await readdir(OUT)) {
    if (file.endsWith(".html")) await rm(join(OUT, file))
  }

  const stylesBlock =
    `<!-- Блок 00 · Общие стили лендинга. Вставьте ПЕРВЫМ HTML-блоком на странице. -->\n` +
    `${FONTS_LINK}\n<style>${css}</style>\n`
  await writeFile(join(OUT, "00-stili.html"), stylesBlock)

  const parts = [stylesBlock]
  const report = [["00-stili.html", "Общие стили", stylesBlock.length]]

  for (const block of BLOCKS) {
    const el = $(block.selector)
    if (el.length !== 1) throw new Error(`Блок «${block.title}» не найден: ${block.selector}`)
    const body = `<!-- Блок ${block.file.slice(0, 2)} · ${block.title} -->\n${cleanBlock($, el[0], imageUri)}\n`
    await writeFile(join(OUT, block.file), body)
    parts.push(body)
    report.push([block.file, block.title, body.length])
  }

  // Вся страница одним файлом — чтобы проверить блоки без Next.js.
  const preview =
    `<!doctype html><html lang="ru"><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width, initial-scale=1">` +
    `<title>Предпросмотр блоков для GetCourse</title></head><body style="margin:0">\n` +
    parts.join("\n") +
    `</body></html>\n`
  await writeFile(join(OUT, "preview.html"), preview)

  for (const [file, title, size] of report) {
    console.log(`${file.padEnd(22)} ${title.padEnd(20)} ${(size / 1024).toFixed(1)} КБ`)
  }
  console.log(`\nГотово: ${report.length} блоков в папке getcourse/`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
