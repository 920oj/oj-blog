<template>
  <div class="profile m-4 p-4 bg-white rounded-md flex flex-col items-center shadow-md">
    <p class="my-2 font-bold">書いている人</p>
    <img src="/img/icon.jpg" alt="おーじぇいアイコン" class="w-1/2 rounded-md" />
    <p class="my-2 font-bold text-2xl">おーじぇい</p>
    <Snslink />
    <p class="my-2">横浜の大学に通う大学生。Web Developerを目指しています。五目ご飯が大好き。</p>
  </div>
</template>

<script>
import Snslink from '~/components/atoms/Sns-link.vue'
export default {
  components: {
    Snslink,
  },
}
</script>

<style>
</style>