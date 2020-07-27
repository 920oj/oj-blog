const fetch_article = {
  getArticleNumber($content) {
    return new Promise(async (resolve, reject) => {
      const article_number = await $content('/').fetch().length
      resolve(article_number)
    })
  },
  getArticleList($content, skip, limit) {
    return new Promise(async (resolve, reject) => {
      const article_list = await $content('/')
        .only(['title', 'description', 'category', 'slug', 'eyecatch'])
        .skip(skip)
        .limit(limit)
        .fetch()
      resolve(article_list)
    })
  },
  async getArticle($content, slug) {
    const article = await $content('/', slug).fetch()
    commit('setArticle', article)
  }
}

export default fetch_article