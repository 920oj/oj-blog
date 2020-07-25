<template>
  <article>
    <h1>{{data.title}}</h1>
    <nuxt-content :document="data"></nuxt-content>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const data = await $content('/', params.slug).fetch()
    return { data }
  },
  mounted() {
    console.log(this.data)
  },
  head() {
    return {
      title: this.data.title,
      meta: [
        { hid: 'description', name: 'description', content: this.data.title },
      ],
    }
  },
}
</script>

<style>
</style>