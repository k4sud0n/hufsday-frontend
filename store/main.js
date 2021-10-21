export const state = () => ({
  seoulfreePosts: [],
})

export const mutations = {
  setSeoulfreePostList(state, response) {
    state.seoulfreePosts = response.data.seoulfree
  },
}

export const actions = {
  async getSeoulfreePostList(context) {
    await this.$client.get('/api/main').then((response) => {
      context.commit('setSeoulfreePostList', response)
    })
  },
}
