// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@formkit/auto-animate/nuxt'
  ],

  routeRules: {
    '/': { ssr: false }
  },

  googleFonts: {
    families: {
      'Chivo+Mono': [400, 500]
    }
  }
})
