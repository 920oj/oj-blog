
export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    fallback: '404.html',
    routes: ['/']
  },
  css: [
  ],
  plugins: [
  ],
  components: false,
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', { id: 'UA-119155278-4' }]
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {
    apiPrefix: 'api',
  },
}
