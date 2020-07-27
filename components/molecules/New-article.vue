<template>
  <div class="new-article m-4 p-4 bg-white rounded-md flex flex-col items-center shadow-md">
    <p class="my-2 font-bold">新着記事</p>
    <div class="w-full text-left">
      <div v-for="elem in article_list" :key="elem.id" class="my-2">
        <nuxt-link :to="'/' + elem.slug">
          <Label>{{elem.category}}</Label>
          {{elem.title}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from '~/lib/fetch'
import Label from '~/components/atoms/Label.vue'
export default {
  data() {
    return {
      article_list: [],
    }
  },
  components: {
    Label,
  },
  async fetch() {
    this.article_list = await fetchData.getArticleList(this.$content, 0, 5)
  },
  methods: {},
}
</script>

<style>
</style>