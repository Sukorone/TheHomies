// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/app.scss'],
  runtimeConfig: {
    public: {
      API_BASE_URL:'https://8ab2474b12f91aff0d6.izvne-design.com'
    }
  },
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/th-components',
    ]
  },
  modules: ['nuxt-icons','nuxt-swiper','@pinia/nuxt'],
})
