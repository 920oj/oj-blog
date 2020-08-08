<template>
  <article class="article-content w-auto bg-white my-4 md:mx-4 p-4 rounded-md shadow-md box-border">
    <p>
      <Label>{{data.category}}</Label>
      {{postDate}}
    </p>
    <h1 class="font-bold text-3xl">{{data.title}}</h1>
    <img :src="data.eyecatch" :alt="data.title" class="my-6" />
    <SnsShare :title="data.title" :slug="data.slug" />
    <nuxt-content :document="data"></nuxt-content>
    <SnsShare :title="data.title" :slug="data.slug" />
  </article>
</template>

<script>
import Label from '~/components/atoms/Label.vue'
import convertDate from '~/lib/date.js'
import SnsShare from '~/components/molecules/Sns-share.vue'

export default {
  props: ['data'],
  components: { Label, SnsShare },
  computed: {
    postDate() {
      return convertDate.dateToMonthDay(this.data.createdAt)
    },
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .article-content {
    flex: 5;
    overflow: hidden;
  }
}

.nuxt-content {
  font-family: -apple-system, Helvetica Neue, Helvetica, 'メイリオ', Meiryo,
    sans-serif;
  margin: 1.8em 0;
  @screen md {
    @apply text-lg;
    line-height: 1.9;
  }
}

.nuxt-content h2 {
  @apply border-b-2;
  @apply text-2xl;
  @apply font-bold;
  @apply my-6;

  @screen md {
    @apply text-4xl;
  }
}

.nuxt-content h3 {
  @apply text-lg;
  @apply font-bold;
  @apply my-4;

  @screen md {
    @apply text-2xl;
  }
}

.nuxt-content p {
  @apply my-4;
}

.nuxt-content code {
  @apply bg-gray-200;
  @apply text-pink-500;
  @apply px-2;
  @apply rounded;
}

.nuxt-content ul {
  @apply list-disc;
  @apply list-inside;
  @apply ml-2;
}

.nuxt-content li {
  @apply my-2;
}

.nuxt-content a {
  @apply text-blue-600;
  @apply border-b-2;
  @apply border-blue-600;
}

.nuxt-content img {
  @apply text-center;
  @apply my-4;
  @apply mx-auto;
  max-height: 630px;
}
</style>