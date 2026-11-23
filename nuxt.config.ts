// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    // Fade antar halaman; CSS-nya di main.css (.page-*), mati saat prefers-reduced-motion.
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Komunitas Batik Tiga Zaman',
      meta: [
        {
          name: 'description',
          content: 'Ruang kolaborasi pecinta, perajin, dan masyarakat untuk menjaga dan memperkenalkan batik bersama enam gerai batik di Kalimantan Timur.',
        },
        { name: 'theme-color', content: '#193f2d' },
      ],
      // Simbol logo Komunitas Batik Tiga Zaman di latar krem (paper).
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=2' },
      ],
    },
  },
  // URL lama Bulau Sayang (sebelum route disamakan dengan Batik Shaho).
  routeRules: {
    '/mitra/bulau-sayang-maps': { redirect: { to: '/mitra/bulau-sayang/maps', statusCode: 301 } },
    '/mitra/bulau-sayang-date': { redirect: { to: '/mitra/bulau-sayang/date', statusCode: 301 } },
    '/mitra/bulau-sayang-photo': { redirect: { to: '/mitra/bulau-sayang/photo', statusCode: 301 } },
    '/mitra/bulau-sayang-motif': { redirect: { to: '/mitra/bulau-sayang/motif', statusCode: 301 } },
    '/mitra/bulau-sayang-motif/**': { redirect: { to: '/mitra/bulau-sayang/motif-detail/**', statusCode: 301 } },
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': false,
    },
  },
  devtools: { enabled: true },
})
