<template>
  <div class="side-bar w-full flex flex-col">
    <Profile />
    <NewArticle />
  </div>
</template>

<script>
import Profile from '~/components/molecules/Profile.vue'
import NewArticle from '~/components/molecules/New-article.vue'
export default {
  components: {
    Profile,
    NewArticle,
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .side-bar {
    flex: 2;
  }
}
</style>