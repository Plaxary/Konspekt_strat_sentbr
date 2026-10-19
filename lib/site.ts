// Всё, что нужно заменить перед публикацией, собрано здесь.
// Значения в квадратных скобках — плейсхолдеры.
export const site = {
  brand: "[Название бренда]",
  speaker: "[Имя спикера]",
  speakerInitials: "ИС",
  speakerRole: "[Специалист по Ба Цзы, Ци Мэнь и Фэншуй]",
  speakerExperience: "[N] лет практики · [N] разобранных карт",
  telegramUrl: "https://t.me/your_channel",
  subscribers: "[N]",
  url: "https://example.com",
  year: 2026,
  title: "Сентябрь Огненного Петуха — конспект эфира по Ба Цзы, Ци Мэнь и Фэншуй",
  description:
    "Конспект мастер-класса: 5 выводов месяца, 7 вопросов перед решением и стратегии для 6 сфер — бизнес, карьера, отношения, здоровье, финансы, общение.",
} as const

export const navLinks = [
  { href: "#problem", label: "Риски" },
  { href: "#systems", label: "Системы" },
  { href: "#plan", label: "Алгоритм" },
  { href: "#spheres", label: "Сферы" },
  { href: "#faq", label: "FAQ" },
] as const
