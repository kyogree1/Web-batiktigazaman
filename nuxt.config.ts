// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': false,
    },
  },
  devtools: { enabled: true },
})
