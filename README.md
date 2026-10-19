# Konspekt_strat_sentbr

Лендинг-конспект эфира «Сентябрь Огненного Петуха» (Ба Цзы · Ци Мэнь · Фэншуй).
Все CTA ведут на Telegram-канал.

Стек: Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · lucide-react.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшн-сборка
```

## Перед публикацией замените плейсхолдеры

| Что | Где |
|---|---|
| Название бренда, имя спикера, опыт, ссылка на Telegram, число подписчиков, домен | `lib/site.ts` |
| 3 отзыва участников (сейчас заглушки) | `lib/content.ts` → `socialProof.testimonials` |
| Что публикуется в канале (FAQ, последний вопрос) | `lib/content.ts` → `faq.items` |
| Цвет бренда (`--primary`) | `app/globals.css` |

## Структура

- `app/layout.tsx`: шрифты, metadata, OG, JSON-LD
- `app/page.tsx`: порядок секций
- `app/opengraph-image.tsx`: генерация OG-картинки
- `components/sections/*`: секции страницы
- `lib/content.ts`: весь текст конспекта
