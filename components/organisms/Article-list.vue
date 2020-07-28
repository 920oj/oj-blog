<template>
  <div
    class="article-list w-auto bg-white my-4 md:mx-4 p-4 rounded-md shadow-md box-border divide-y divide-gray-400"
  >
    <ArticleBox
      v-for="elem in article_list"
      :key="elem.id"
      :eyecatch="elem.eyecatch"
      :title="elem.title"
      :description="elem.description"
      :category="elem.category"
      :slug="elem.slug"
      :createdAt="elem.createdAt"
    />
  </div>
</template>

<script>
import fetchData from '~/lib/fetch'
import ArticleBox from '~/components/molecules/Article-box.vue'
export default {
  data() {
    return {
      article_number: 0,
      article_list: [],
    }
  },
  computed: {
    pageNumber() {
      return Math.floor(this.article_number / 10) + 1
    },
  },
  components: {
    ArticleBox,
  },
  async fetch() {
    await Promise.all([
      fetchData.getArticleNumber(this.$content),
      fetchData.getArticleList(this.$content, 0, 10),
    ]).then((values) => {
      this.article_number = values[0]
      this.article_list = values[1]
    })
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .article-list {
    flex: 5;
  }
}
</style>