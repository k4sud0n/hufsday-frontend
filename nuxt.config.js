export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HUFSDAY',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap',
      },
    ],
  },

  router: {
    middleware: ['auth'],
  },

  loading: '~/components/loading/index.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/dayjs'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs',
    'nuxt-socket-io',
    'vue-toastification/nuxt',
  ],

  auth: {
    strategies: {
      local: {
        user: {
          property: '',
        },
        cookie: {
          name: 'access_token',
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/check', method: 'get' },
        },
      },
    },
  },

  // io: {
  //   sockets: [
  //     {
  //       name: 'main',
  //       url: 'http://localhost:3000',
  //     },
  //   ],
  // },

  dayjs: {
    locales: ['ko'],
    defaultLocale: 'ko',
    defaultTimeZone: 'Asia/Seoul',
    plugins: ['timezone', 'relativeTime', 'updateLocale'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': 'http://localhost:4000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
