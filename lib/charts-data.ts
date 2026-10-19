// Данные таблиц и схем из презентации эфира «Стратегии сентября» (07.09–07.10.2026).

export type Element = "wood" | "fire" | "earth" | "metal" | "water"

export const elementLabel: Record<Element, string> = {
  wood: "Дерево",
  fire: "Огонь",
  earth: "Земля",
  metal: "Металл",
  water: "Вода",
}

type Glyph = { char: string; element: Element; name: string }

// --- Ба Цзы месяца ---------------------------------------------------------

export const baziMonth = {
  pillars: [
    {
      label: "Час",
      stem: { char: "乙", element: "wood", name: "Дерево-Инь" },
      branch: { char: "亥", element: "water", name: "Свинья · Вода-Инь" },
      hidden: [
        { char: "壬", element: "water" },
        { char: "甲", element: "wood" },
      ],
    },
    {
      label: "День",
      stem: { char: "甲", element: "wood", name: "Дерево-Ян" },
      branch: { char: "申", element: "metal", name: "Обезьяна · Металл-Ян" },
      hidden: [
        { char: "庚", element: "metal" },
        { char: "壬", element: "water" },
        { char: "戊", element: "earth" },
      ],
    },
    {
      label: "Месяц",
      stem: { char: "丁", element: "fire", name: "Огонь-Инь" },
      branch: { char: "酉", element: "metal", name: "Петух · Металл-Инь" },
      hidden: [{ char: "辛", element: "metal" }],
    },
    {
      label: "Год",
      stem: { char: "丙", element: "fire", name: "Огонь-Ян" },
      branch: { char: "午", element: "fire", name: "Лошадь · Огонь-Ян" },
      hidden: [
        { char: "丁", element: "fire" },
        { char: "己", element: "earth" },
      ],
    },
  ] satisfies {
    label: string
    stem: Glyph
    branch: Glyph
    hidden: { char: string; element: Element }[]
  }[],
  balance: [
    { element: "fire", status: "крайне силён", tone: "strong" },
    { element: "wood", status: "усиливает Огонь", tone: "strong" },
    { element: "water", status: "очень слабая — ресурсы и коммуникации", tone: "weak" },
    { element: "earth", status: "отсутствует — деньги и результат", tone: "weak" },
  ] satisfies { element: Element; status: string; tone: "strong" | "weak" }[],
  notes: [
    "Очень сильное Самовыражение при отсутствии Денег — Земли",
    "Мало поддержки, но Петух — Благородный человек года и месяца: просите о помощи",
    "Контроль и проверки, нет стабильности",
    "Ошибки из-за спешки",
    "На первом плане — отношения",
  ],
  body: "Слабые места в теле: ЖКТ, лёгкие, травматизм",
  focus: "Фокус на глубине и осознанности",
  year: [
    "Месяц Грабителя богатства для года — финансовые потери",
    "Самонаказание в Самовыражении — непродуманные действия",
    "Сильный Ресурс в Огне — пропаганда, проблемы с интернетом",
    "Нет Воды — нет мудрости и глубокого погружения",
    "Деньги никак не проявлены",
  ],
}

export const interactions = [
  {
    signs: [
      { char: "辰", name: "Дракон", element: "earth" },
      { char: "丑", name: "Бык", element: "earth" },
      { char: "巳", name: "Змея", element: "fire" },
    ],
    relation: "Комбинация",
    reaction: "Внешнее раздражение, потеря контроля",
    action: "Спокойно реагируйте на провокации, выбирайте связи",
  },
  {
    signs: [
      { char: "申", name: "Обезьяна", element: "metal" },
      { char: "戌", name: "Собака", element: "earth" },
    ],
    relation: "Комбинация",
    reaction: "Внутреннее раздражение, потеря контроля",
    action: "Разберитесь, откуда раздражение; ищите баланс",
  },
  {
    signs: [{ char: "子", name: "Крыса", element: "water" }],
    relation: "Разрушение",
    reaction: "Страх быть брошенным, отвергнутым",
    action: "Не торопитесь, сохраняйте холодную голову",
  },
  {
    signs: [{ char: "卯", name: "Кролик", element: "wood" }],
    relation: "Столкновение",
    reaction: "Окончания, изменения",
    action: "Инициируйте изменения сами",
  },
  {
    signs: [{ char: "戌", name: "Собака", element: "earth" }],
    relation: "Вред",
    reaction: "Заниженная самооценка, «делаю во вред себе»",
    action: "Оценивайте полезность и адекватность действий",
  },
  {
    signs: [{ char: "酉", name: "Петух", element: "metal" }],
    relation: "Самонаказание",
    reaction: "Желание успеть, спешка",
    action: "Взвешивайте слова и действия",
  },
] satisfies {
  signs: { char: string; name: string; element: Element }[]
  relation: string
  reaction: string
  action: string
}[]

export const transformations = {
  merges: [
    { formula: "丁 + 壬", result: { char: "木", element: "wood" } },
    { formula: "酉 + 辰", result: { char: "金", element: "metal" } },
  ] satisfies { formula: string; result: { char: string; element: Element } }[],
  clashes: ["丁 ↔ 癸", "酉 ↔ 卯", "酉 + 酉"],
  effects: [
    { title: "Столкновение небесных стволов", text: "повышенные эмоции, нервозность" },
    { title: "Столкновение земных ветвей", text: "травмы" },
    { title: "Наказание", text: "самоуверенность, невоздержанность" },
  ],
  warning: "Особая осторожность, если в вашей карте есть столп 癸卯",
}

export const hiddenPillar = {
  stem: { char: "壬", element: "water", name: "Вода-Ян" } satisfies Glyph,
  branch: { char: "辰", element: "earth", name: "Дракон · Земля-Ян" } satisfies Glyph,
  rows: [
    { element: "wood", gives: ["Самовыражение", "Власть", "Ресурс", "Богатство"] },
    { element: "fire", gives: ["Друзья (Грабители)", "Богатство", "Власть", "Самовыражение"] },
    { element: "earth", gives: ["Ресурс", "Самовыражение", "Богатство", "Друзья (Грабители)"] },
    { element: "metal", gives: ["Власть", "Друзья (Грабители)", "Самовыражение", "Ресурс"] },
    { element: "water", gives: ["Богатство", "Ресурс", "Друзья (Грабители)", "Власть"] },
  ] satisfies { element: Element; gives: string[] }[],
}

// --- Гексаграмма месяца ----------------------------------------------------

export const hexagram = {
  number: 31,
  title: "Влияние / Соощущение",
  trigrams: "Гэнь и Дуй — Гора и Озеро",
  // сверху вниз: true — сплошная черта (Ян), false — прерванная (Инь)
  lines: [false, true, true, true, false, false],
  strategy: "Стратегия установления контакта",
  rules: [
    "Не торопите события — дайте ситуации развиваться естественно",
    "Больше общайтесь, договаривайтесь, ищите точки соприкосновения",
    "Не давите на людей — мягкое влияние работает лучше принуждения",
    "Будьте искренними: скрытые мотивы разрушают доверие",
    "Смотрите не только на слова, но и на поступки",
    "Не действуйте на первом импульсе — почувствуйте, куда ведёт ситуация",
  ],
  summary:
    "Результат зависит не от силы давления, а от умения выстраивать контакт и создавать взаимный интерес.",
}

// --- Календарь месяца ------------------------------------------------------

export type DayRisk = "destroyer" | "punishment" | "divider" | "noWealth" | "loss"

export const riskLabel: Record<DayRisk, string> = {
  destroyer: "Разрушитель месяца",
  punishment: "Наказание",
  divider: "Разделитель",
  noWealth: "День без богатства",
  loss: "День Потери",
}

export type Activation = { combo: string; sector: string; flagged?: boolean }

export type CalendarDay = {
  day: number
  month: 9 | 10
  risk?: { type: DayRisk; hours?: string }
  activation?: Activation
}

const risks: Record<string, { type: DayRisk; hours?: string }> = {
  "8.9": { type: "punishment", hours: "17:00–19:00" },
  "14.9": { type: "destroyer", hours: "05:00–07:00, 17:00–19:00" },
  "20.9": { type: "punishment", hours: "17:00–19:00" },
  "22.9": { type: "divider" },
  "26.9": { type: "destroyer", hours: "05:00–07:00, 17:00–19:00" },
  "27.9": { type: "noWealth" },
  "28.9": { type: "noWealth" },
  "2.10": { type: "punishment", hours: "17:00–19:00" },
  "7.10": { type: "loss" },
}

const activations: Record<string, Activation> = {
  "7.9": { combo: "4-1", sector: "СВ" },
  "8.9": { combo: "4-9", sector: "СВ" },
  "12.9": { combo: "9-1", sector: "ЮВ" },
  "13.9": { combo: "9-9", sector: "ЮВ" },
  "16.9": { combo: "4-1", sector: "СВ" },
  "17.9": { combo: "4-9", sector: "СВ" },
  "18.9": { combo: "9-4", sector: "ЮВ" },
  "22.9": { combo: "9-9", sector: "ЮВ" },
  "25.9": { combo: "4-1", sector: "СВ", flagged: true },
  "27.9": { combo: "9-4", sector: "ЮВ" },
  "30.9": { combo: "9-1", sector: "ЮВ" },
  "1.10": { combo: "9-9", sector: "ЮВ" },
  "4.10": { combo: "4-1", sector: "СВ", flagged: true },
  "5.10": { combo: "4-9", sector: "СВ", flagged: true },
}

// Месяц Петуха: 07.09.2026 (понедельник) — 07.10.2026.
export const calendarDays: CalendarDay[] = Array.from({ length: 31 }, (_, index) => {
  const inSeptember = index < 24
  const day = inSeptember ? 7 + index : index - 23
  const month = inSeptember ? 9 : 10
  const key = `${day}.${month}`
  return { day, month, risk: risks[key], activation: activations[key] }
})

export const calendarNotes = {
  risk: "Повышенная осторожность людям, рождённым в годы Кролика и Петуха, особенно с острыми предметами.",
  flagged: "В дне есть неблагоприятный фактор",
}

// --- Ци Мэнь ---------------------------------------------------------------

export const qimenOverview = [
  {
    title: "Ци Мэнь года: сентябрь",
    badge: "Гексаграмма «Рост»",
    points: [
      "Время решительных действий и больших проектов",
      "Помогайте другим: через сотрудничество рост сильнее",
      "Ранение + Белый Тигр — скорость и энергия, но и ошибки с людьми",
      "Опирайтесь на помощь, но не доверяйте слепо",
    ],
  },
  {
    title: "Ци Мэнь месяца: сентябрь",
    badge: "Гексаграмма «Болото»",
    points: [
      "Юг: Врата Ужас + Небесный Столп + Великий Инь",
      "Новости, слухи и слова влияют сильнее обычного",
      "Многое решается за кулисами, мотивы людей неочевидны",
      "Выход из неясных ситуаций — через единомышленников",
    ],
  },
]

export type Direction = {
  id: string
  name: string
  tags: string[]
  focus: string[]
}

// Порядок как на карте Ци Мэнь: Юг сверху.
export const qimenCompass: (Direction | { id: "center" })[] = [
  {
    id: "se",
    name: "Юго-Восток",
    tags: ["Романтика", "Уволить людей"],
    focus: ["Время что-то поменять в жизни", "Недвижимость и отношения", "Внимание к здоровью"],
  },
  {
    id: "s",
    name: "Юг",
    tags: ["Обучение", "Романтика"],
    focus: ["Проработать страхи, спорт", "Не конфликтовать и не осуждать", "Не вовлекаться в политику"],
  },
  {
    id: "sw",
    name: "Юго-Запад",
    tags: ["Карьера"],
    focus: ["Новая работа, лидерская позиция", "Доводить дела до конца", "Не стать жертвой обмана"],
  },
  {
    id: "e",
    name: "Восток",
    tags: ["Презентации"],
    focus: ["Яркость, проявление, реклама", "Личный бренд", "Физическая активность"],
  },
  { id: "center" },
  {
    id: "w",
    name: "Запад",
    tags: ["Помощь, любые желания"],
    focus: ["Не перенапрягаться, отдых", "Семейные вопросы", "Не сидеть дома — общаться"],
  },
  {
    id: "ne",
    name: "Северо-Восток",
    tags: ["Обучение", "Подготовка к новому"],
    focus: ["Не начинать новое", "Повышение квалификации", "Не манипулировать людьми"],
  },
  {
    id: "n",
    name: "Север",
    tags: ["Деньги"],
    focus: ["Решать быстро, но с чётким расчётом", "Забота о других", "Благотворительность"],
  },
  {
    id: "nw",
    name: "Северо-Запад",
    tags: ["Деньги"],
    focus: ["Масштабирование, доп. доход", "Общение с успешными людьми", "Порядок в финансах"],
  },
]

export const qimenReference = [
  {
    id: "spirits",
    title: "Духи — уровень энергии и мотивации",
    items: [
      { char: "符", name: "Главный Дух", text: "помощь и защита, подлинность; помощь в опасности" },
      { char: "天", name: "9 Небес", text: "стратег и планировщик: видеть конечную цель" },
      { char: "地", name: "9 Земель", text: "доброта; создавать и сохранять капитал; исцеление" },
      { char: "陰", name: "Великий Инь", text: "знания, мудрость, секретная информация, ясность" },
      { char: "合", name: "6 Гармоний", text: "связи и коммуникации, объединение людей, масштаб" },
      { char: "蛇", name: "Летящий Змей", text: "интуиция, поиск объектов, умение чувствовать Ци" },
      { char: "武", name: "Тёмный Воин", text: "распознавать мотивы, влиять на убеждения" },
      { char: "虎", name: "Белый Тигр", text: "энергия, сила, смелость; физическая угроза" },
    ],
  },
  {
    id: "gates",
    title: "Врата — уровень возможностей",
    items: [
      { char: "生", name: "Рождение", text: "отличные возможности", good: true },
      { char: "休", name: "Отдых", text: "отличные возможности", good: true },
      { char: "開", name: "Открытие", text: "отличные возможности", good: true },
      { char: "景", name: "Вид", text: "публичность, но не всегда соответствует реальности" },
      { char: "杜", name: "Тайник", text: "не время действовать — подготовьтесь" },
      { char: "驚", name: "Ужас", text: "неожиданные события — держите запасной план" },
      { char: "傷", name: "Ранение", text: "быстрота и опережение, нужна подстраховка" },
      { char: "死", name: "Смерть", text: "остановка, стагнация, перезагрузка" },
    ],
  },
  {
    id: "stars",
    title: "Звёзды — есть ли поддержка Неба",
    items: [
      { char: "輔", name: "Небесный Помощник", text: "помощь, обучение, новые навыки", good: true },
      { char: "心", name: "Небесное Сердце", text: "глубина, специализация, лидерство", good: true },
      { char: "任", name: "Небесный Чиновник", text: "Благородные люди, команда, правила", good: true },
      { char: "冲", name: "Небесный Агрессор", text: "перемены, новое, быстрые действия" },
      { char: "英", name: "Небесный Герой", text: "ваша ценность, личный бренд" },
      { char: "芮", name: "Небесный Рис", text: "активы: используйте то, что есть" },
      { char: "柱", name: "Небесный Столп", text: "делиться идеями, но не торопиться" },
      { char: "蓬", name: "Небесная Трава", text: "находчивость, ресурсы через связи" },
    ],
  },
] satisfies {
  id: string
  title: string
  items: { char: string; name: string; text: string; good?: boolean }[]
}[]

// --- Фэншуй ---------------------------------------------------------------

export const flyingStars = [
  { id: "se", name: "ЮВ", stars: "9-9", text: "рост, процветание, известность", tone: "good" },
  { id: "s", name: "Юг", stars: "5-5", text: "препятствия, неожиданные проблемы, потери", tone: "bad" },
  { id: "sw", name: "ЮЗ", stars: "7-7", text: "общение с острыми гранями", tone: "neutral" },
  { id: "e", name: "Восток", stars: "8-8", text: "деньги, активы, стабильный прогресс", tone: "good" },
  { id: "c", name: "Центр", stars: "1-1", text: "", tone: "neutral" },
  { id: "w", name: "Запад", stars: "3-3", text: "споры и конкуренция", tone: "neutral" },
  { id: "ne", name: "СВ", stars: "4-4", text: "обучение, творчество, идеи", tone: "neutral" },
  { id: "n", name: "Север", stars: "6-6", text: "полезные люди и власть", tone: "good" },
  { id: "nw", name: "СЗ", stars: "2-2", text: "фокус на здоровье и энергии", tone: "bad" },
] satisfies { id: string; name: string; stars: string; text: string; tone: "good" | "bad" | "neutral" }[]

export const wealthCombos = [
  { combo: "4-1", text: "наставничество, новые навыки, творчество, помощь Благородных людей", activator: "Вода", sector: "СВ", dates: ["07.09", "16.09", "25.09*", "04.10*"] },
  { combo: "4-9", text: "решает задачи с навыками, творчеством, продвижением", activator: "Вода или Огонь", sector: "СВ", dates: ["08.09", "17.09", "05.10*"] },
  { combo: "9-1", text: "деньги, финансовые навыки, инвестиции, продвижение", activator: "Огонь", sector: "ЮВ", dates: ["12.09", "30.09"] },
  { combo: "9-4", text: "деньги, финансовые навыки, инвестиции, продвижение", activator: "Огонь", sector: "ЮВ", dates: ["18.09", "27.09"] },
  { combo: "9-9", text: "деньги, финансовые навыки, инвестиции, продвижение", activator: "Огонь", sector: "ЮВ", dates: ["13.09", "22.09", "01.10"] },
  { combo: "1-4, 1-9", text: "помощь Благородных людей, инвестор, романтика", activator: "—", sector: "—", dates: [] },
]

export const activationRules = [
  "Вода — ведро с насосом, Огонь — свеча",
  "Ставится на весь день: с 05:00 до 23:00",
  "Натальные и годовые звёзды не учитываются",
  "Активатор ставят по большому тай-чи квартиры, можно в санузел",
  "Если сектор попал в помещение с пятёркой года или месяца — активатор не ставят",
]
