// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@pinia/nuxt'],

  /*
  ** Headers of the page
  */
  app: {
    head: {
      title: 'Email Templates',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt 3 Email Templates Project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Barlow:400,600|Playfair+Display:700'
        }
      ]
    }
  },

  css: ['~/assets/main.css'],

  /*
  ** Loading indicator
  */
  loading: { color: '#3e64ea' },

  ssr: false,

  compatibilityDate: '2024-04-14'
});
