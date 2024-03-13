// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  
  runtimeConfig: { 
    API_URL: process.env.API_URL,
  
  },


  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'nuxt-og-image',
  ],

  plugins: ['@/plugins/chartjs.ts'],

  build: {
    transpile: ['vue-chartjs']
  },

  devtools: {
    enabled: true
  }


})

