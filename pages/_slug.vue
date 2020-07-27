<template>
  <div
    class="index w-full bg-gray-200 md:px-4 lg:px-8 xl:px-32 flex flex-col lg:flex-row box-border"
  >
    <ArticleContent :data="article" />
    <Sidebar />
  </div>
</template>

<script>
import ArticleContent from '~/components/organisms/Article-content.vue'
import Sidebar from '~/components/organisms/Side-bar.vue'
import fetchData from '~/lib/fetch'

export default {
  data() {
    return {
      article: '',
    }
  },
  components: {
    ArticleContent,
    Sidebar,
  },
  async fetch() {
    console.log(this.$route.params.slug)
    this.article = await fetchData.getArticle(
      this.$content,
      this.$route.params.slug
    )
  },
  head() {
    return {
      title: this.article.title + ' - OJ Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.title,
        },
      ],
    }
  },
}
</script>

<style>
</style>