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
  async asyncData({ $store, $content, params }) {
    const article_list = await $content('/')
      .only(['title', 'description', 'category', 'eyecatch'])
      .fetch()
    return { article_list }
  },
  mounted() {
    console.log(this.article_list)
  },
}
</script>

<style>
</style>
