<template>
  <div class="sns-share flex justify-center bg-red-300 h-12">
    <a
      :href="`https://twitter.com/share?text=${link_title}&url=${url}&via=920OJ&related=920OJ`"
      rel="nofollow"
      target="_blank"
      class="tw w-full flex justify-center items-center h-full"
    >
      <img src="~assets/icon/sns-share/twitter.svg" alt="Tweet" class="h-8" />
    </a>
    <a
      :href="`http://www.facebook.com/share.php?u=${url}`"
      rel="nofollow"
      target="_blank"
      class="fb w-full h-full flex justify-center items-center"
    >
      <img src="~assets/icon/sns-share/facebook.svg" alt="Tweet" class="h-8" />
    </a>
    <a
      :href="`https://social-plugins.line.me/lineit/share?url=${url}`"
      rel="nofollow"
      target="_blank"
      class="ln w-full flex justify-center items-center"
    >
      <img src="~assets/icon/sns-share/line.svg" alt="Tweet" class="h-8" />
    </a>
    <a
      :href="`http://getpocket.com/edit?url=${url}&title=${link_title}`"
      rel="nofollow"
      target="_blank"
      class="pk w-full flex justify-center items-center"
    >
      <img src="~assets/icon/sns-share/pocket.svg" alt="Tweet" class="h-8" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['title', 'slug'],
  computed: {
    link_title() {
      return encodeURIComponent(`${this.title} - OJ Blog`)
    },
    url() {
      return encodeURIComponent(`https://b.920oj.net/${this.slug}`)
    },
  },
}
</script>

<style>
.sns-share .tw {
  background-color: #55acee;
}

.sns-share .fb {
  background-color: #3b5998;
}

.sns-share .pk {
  background-color: #d24f59;
}

.sns-share .ln {
  background-color: #00b900;
}
</style>