export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-auth",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "@/assets/favicons/favicon.ico"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/css/styles.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/axios"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Bulma
    "@nuxtjs/bulma",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/auth"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_AUTH_URL
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // ENV Variables
  publicRuntimeConfig: {
    baseURL: process.env.API_AUTH_URL
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  },

  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/local.html#options
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/local",
            method: "post",
            propertyName: "jwt"
          },
          user: {
            url: "users/me",
            method: "get",
            propertyName: false
          },
          logout: false
        }
      }
    }
  },
  generate: {
    fallback: true
  }
};
