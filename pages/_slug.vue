<template>
  <div
    class="index w-full bg-gray-200 md:px-4 lg:px-8 xl:px-32 flex flex-col lg:flex-row box-border"
  >
    <ArticleContent :data="article" />
    <Sidebar />
  </div>
</template>

<script>
import ArticleContent from '~/components/organisms/Article-content.vue'
import Sidebar from '~/components/organisms/Side-bar.vue'
import fetchData from '~/lib/fetch'

export default {
  data() {
    return {
      article: '',
    }
  },
  computed: {
    jsonld() {
      return {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://b.920oj.net/${this.$route.params.slug}/`,
        },
        headline: this.article.title,
        image: [this.article.eyecatch],
        datePublished: this.article.createdAt,
        dateModified: this.article.updatedAt,
        author: {
          '@type': 'Person',
          name: '920OJ',
        },
        publisher: {
          '@type': 'Organization',
          name: 'OJ Blog',
          logo: {
            '@type': 'ImageObject',
            url: 'https://920oj.net/img/logo.png',
          },
        },
        description: this.article.description,
      }
    },
  },
  components: {
    ArticleContent,
    Sidebar,
  },
  async fetch() {
    this.article = await fetchData.getArticle(
      this.$content,
      this.$route.params.slug
    )
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      title: this.article.title + ' - OJ Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        { hid: 'og:title', name: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.description,
        },
        { hid: 'og:image', name: 'og:image', content: this.article.eyecatch },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://b.920oj.net/' + this.article.slug,
        },
        { hid: 'og:site_name', name: 'og_site_name', content: 'OJ Blog' },
        { hid: 'og:locale', name: 'og:locale', content: 'ja_JP' },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@920OJ' },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          hid: 'article:modified_time',
          name: 'article:modified_time',
          content: this.article.updatedAt,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld, null, 2),
        },
      ],
    }
  },
}
</script>

<style>
</style>