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
}
</script>

<style>
</style>
