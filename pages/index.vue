<template>
  <div class="index bg-gray-200 md:px-4 lg:px-8 xl:px-32 flex flex-col lg:flex-row">
    <Articlelist />
    <Sidebar />
  </div>
</template>

<script>
import Articlelist from '~/components/organisms/Article-list.vue'
import Sidebar from '~/components/organisms/Side-bar.vue'
export default {
  components: {
    Articlelist,
    Sidebar,
  },
  head() {
    return {
      title: 'OJ Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'OJのブログです。Web技術のことや、日常のことを書きます。',
        },
        { hid: 'og:title', name: 'og:title', content: 'OJ Blog' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'OJのブログです。Web技術のことや、日常のことを書きます。',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/oj920/image/upload/v1595786485/blog/eyecatch_j1g4gg.jpg',
        },
        { hid: 'og:url', name: 'og:url', content: 'https://b.920oj.net/' },
        { hid: 'og:site_name', name: 'og_site_name', content: 'OJ Blog' },
        { hid: 'og:locale', name: 'og:locale', content: 'ja_JP' },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@920OJ' },
      ],
    }
  },
}
</script>

<style>
</style>
