export const state = () => ({
  posts: [],
})

export const mutations = {
  setPostList(state, response) {
    state.posts = response.data
  },
}

export const actions = {
  async getPostList(context, param) {
    await this.$client.get('/api/seoulfree', param).then((response) => {
      context.commit('setPostList', response)
    })
  },
}
