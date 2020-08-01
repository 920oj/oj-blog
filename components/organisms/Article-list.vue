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
    <div class="text-center py-4" v-if="!isAllLoaded">
      <div
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer"
        @click="loadPage(articleNumber)"
      >さらに読み込む</div>
    </div>
  </div>
</template>

<script>
import fetchData from '~/lib/fetch'
import ArticleBox from '~/components/molecules/Article-box.vue'
export default {
  data() {
    return {
      all_article_number: 0,
      article_list: [],
      now_page: 1,
    }
  },
  computed: {
    articleNumber() {
      return this.article_list.length
    },
    pageNumber() {
      return Math.ceil(this.all_article_number / 10)
    },
    isAllLoaded() {
      return this.now_page == this.pageNumber
    },
  },
  components: {
    ArticleBox,
  },
  methods: {
    async loadPage(skip) {
      const add_data = await fetchData.getArticleList(this.$content, skip, 10)
      this.article_list = this.article_list.concat(add_data)
      this.now_page += 1
    },
  },
  async fetch() {
    await Promise.all([
      fetchData.getArticleNumber(this.$content),
      fetchData.getArticleList(this.$content, 0, 10),
    ]).then((values) => {
      this.all_article_number = values[0]
      this.article_list = values[1]
    })
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .article-list {
    flex: 5;
    height: fit-content;
  }
}
</style>