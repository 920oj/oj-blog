export const state = () => ({
  article_list: [],
  article: ''
})

export const mutations = {
  setArticleList(state, payload) {
    state.article_list = payload
  },
  setArticle(state, payload) {
    state.article = payload
  }
}

export const actions = {
  async getArticleList({ commit }, { $content, limit }) {
    const article_list = await $content('/')
      .only(['title', 'description', 'category', 'eyecatch'])
      .limit(limit)
      .fetch()
    commit('setArticleList', article_list)
  },
  async getArticle({ commit }, { $content, slug }) {
    const article = await $content('/', slug).fetch()
    commit('setArticle', article)
  }
}

export const getters = {
  article_list_data(state) {
    return state.article_list
  },
  article_data(state) {
    return state.article
  }
}