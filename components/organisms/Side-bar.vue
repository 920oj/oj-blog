<template>
  <div class="side-bar w-full">
    <Profile />
  </div>
</template>

<script>
import Profile from '~/components/molecules/Profile.vue'
export default {
  components: {
    Profile,
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