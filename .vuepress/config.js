/*
module.exports = {
  title: 'KodKarate',
  description:
    'Kod Karate is an open source supporting languages like c python c++ and much more',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: 'auto',
  },
};
*/

module.exports = {
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'About Me',
            link: '/about/',
          },
          {
            text: 'External',
            link: 'https://google.com',
          },
        ],
        sidebar: 'auto',
      },
      '/hi/': {
        selectText: 'हिन्दी', //Here write in Hindi Languages
        label: 'हिन्दी', //Write in Hindi here Hindi
        nav: [
          {
            text: 'होम ',
            link: '/hi/',
          },
          {
            text: 'मेरे बारे में',
            link: '/hi/abouthindi/',
          },
        ],
        sidebar: 'auto',
      },
    },
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.

    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'KodKarate',
      description: 'KodKarate documentation in English',
    },

    '/hi/': {
      lang: 'hi-IN',
      title: 'Kodkarate',
      description: 'KodKarate documentation in Hindi',
    },
  },
};
