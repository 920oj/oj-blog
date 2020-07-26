<template>
  <div class="header bg-white shadow-lg">
    <Snslink />
    <div class="header-title text-center py-8">
      <h1 class="text-3xl font-bold">OJ Blog</h1>
      <p class="text-sm my-4">おーじぇいのブログ</p>
    </div>
  </div>
</template>

<script>
import Snslink from '~/components/molecules/Sns-link.vue'
export default {
  components: {
    Snslink,
  },
}
</script>

<style>
</style>