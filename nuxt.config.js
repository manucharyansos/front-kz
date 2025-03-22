export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'oracle-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:3333',
    baseURL: 'https://belgraderental.space',
    proxy: true,
    withCredentials: true,
  },

  proxy: {
    '/api/v1': {
      // target: 'http://localhost:3333/api/v1',
      target: 'https://belgraderental.space/api/v1',
      // pathRewrite: { '^/api/v1': '' },
      pathRewrite: { '': '' },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  runtimeConfig: {
    TELEGRAM_TOKEN: "7567503159:AAEcvhmFAqvJ4kAMuV76GAZ8gwFtrr2j5hU",
  }
}
