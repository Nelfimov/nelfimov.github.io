export const SUPPORTED_LOCALES = ['en', 'ru'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const TRANSLATIONS = {
  en: {
    meta: {
      title: 'Portfolio: Nikita Elfimov, Web Dev',
      applicationName: 'Nikita Elfimov Web Dev portfolio',
    },
    nav: {
      me: 'me',
      about: 'about',
      projects: 'projects',
      github: 'github',
      switchTo: 'RU',
      switchAriaLabel: 'Switch language to Russian',
      menuAlt: 'menu',
    },
    hero: {
      firstName: 'Nikita',
      lastName: 'Elfimov',
      roleFirst: 'Web',
      roleSecond: 'Developer',
      imageAlt: 'profile',
    },
    about: {
      title: 'About me',
      html: `A radiophysics student currently employed as Procurement Manager passionately learning Web Development.<br /><br />My journey started as a Back-End Dev student of <a href="https://practicum.yandex.ru/">Yandex Practicum</a>. I felt out of place since most of the students with whom I had to cooperate for some tasks did not show same interest and motivation.<br /><br />I decided to leave and proceed on my own. My first personal pet project was ecommerce site built with Django. However I lacked some fundamental knowledge of CSS, JS.<br /><br />This is where I stumbled across <a href="https://theodinproject.com">The Odin Project</a>. This helped me so much in understanding Web Dev and I continue forward in learning new things with it!`,
    },
    projects: {
      title: 'My projects',
      items: [
        'Ecommerce shop',
        'Ecommerce shop 2',
        'Where is Waldo game',
        'Battleship game',
        'Todo app',
        'Memory card game',
        'Tic-tac-toe game',
      ],
    },
    footer: {
      builtWith: 'Built with:',
    },
  },
  ru: {
    meta: {
      title: 'Портфолио: Никита Елфимов, веб-разработчик',
      applicationName: 'Портфолио Никиты Елфимова',
    },
    nav: {
      me: 'обо мне',
      about: 'опыт',
      projects: 'проекты',
      github: 'github',
      switchTo: 'EN',
      switchAriaLabel: 'Переключить язык на английский',
      menuAlt: 'меню',
    },
    hero: {
      firstName: 'Никита',
      lastName: 'Елфимов',
      roleFirst: 'Веб',
      roleSecond: 'Разработчик',
      imageAlt: 'профиль',
    },
    about: {
      title: 'Обо мне',
      html: `Я студент радиофизики и сейчас работаю менеджером по закупкам, параллельно увлеченно изучаю веб-разработку.<br /><br />Мой путь начался с обучения на бэкенд-разработчика в <a href="https://practicum.yandex.ru/">Яндекс Практикуме</a>. Но я почувствовал, что мне не хватает среды, где у людей такой же интерес и мотивация.<br /><br />Я решил продолжить самостоятельно. Моим первым pet-проектом стал интернет-магазин на Django. Тогда я понял, что мне не хватает фундаментальной базы по CSS и JS.<br /><br />Так я пришел в <a href="https://theodinproject.com">The Odin Project</a>. Этот путь сильно прокачал мое понимание веб-разработки, и я продолжаю учиться дальше.`,
    },
    projects: {
      title: 'Мои проекты',
      items: [
        'Интернет-магазин',
        'Интернет-магазин 2',
        'Игра Где Уолдо',
        'Игра Морской бой',
        'Todo-приложение',
        'Игра Memory Card',
        'Игра Крестики-нолики',
      ],
    },
    footer: {
      builtWith: 'Сделано с помощью:',
    },
  },
} as const
