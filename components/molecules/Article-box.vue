<template>
  <div>
    <nuxt-link :to="'/' + slug" class="flex py-4 flex-col md:flex-row">
      <div class="box-img">
        <img :src="eyecatch" class="w-full py-2 md:py-0 rounded-lg" />
      </div>
      <div class="box-detail md:mx-4">
        <p>
          <Label>{{category}}</Label>
          {{postDate}}
        </p>
        <p class="font-bold text-2xl my-2">{{title}}</p>
        <p class="text-gray-600">{{description}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import Label from '~/components/atoms/Label.vue'
import convertDate from '~/lib/date.js'
export default {
  props: ['eyecatch', 'title', 'description', 'category', 'slug', 'createdAt'],
  components: {
    Label,
  },
  computed: {
    postDate() {
      return convertDate.dateToMonthDay(this.createdAt)
    },
  },
}
</script>

<style>
@media (min-width: 768px) {
  .box-img {
    flex-basis: 30%;
  }

  .box-detail {
    flex-basis: 70%;
  }
}
</style>