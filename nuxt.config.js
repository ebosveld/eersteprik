export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eerste Prik',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tracker om bij te houden hoeveel volwassenen in Nederland een eerste Coronavaccinatie hebben gehad.' },
      {
        hid: "og:type",
        property: "og:type",
        content: 'website',
      },
      {
        hid: "og:url",
        property: "og:url",
        content: 'https://www.eersteprik.nl',
      },
      {
        hid: "og:title",
        property: "og:title",
        content: 'Eerste Prik',
      },
      {
        hid: "og:description",
        property: "og:description",
        content: 'Tracker om bij te houden hoeveel volwassenen in Nederland een eerste Coronavaccinatie hebben gehad.'
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: 'https://www.eersteprik.nl',
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: 'Eerste Prik',
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: 'Tracker om bij te houden hoeveel volwassenen in Nederland een eerste Coronavaccinatie hebben gehad.',
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: '@eersteprik',
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: 'summary_large_image',
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    middleware: 'data'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-numeral-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Moment module configuration
  moment: {
    defaultLocale: 'nl',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-numeral-filter'],
  },
}
