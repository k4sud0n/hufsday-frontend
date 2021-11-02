export const state = () => ({
  seoulfreePosts: [],
  globalfreePosts: [],
})

export const mutations = {
  setSeoulfreePostList(state, response) {
    state.seoulfreePosts = response.data.seoulfree
  },
  setGlobalfreePostList(state, response) {
    state.globalfreePosts = response.data.globalfree
  },
}

export const actions = {
  async getSeoulfreePostList(context) {
    await this.$client.get('/api/main').then((response) => {
      context.commit('setSeoulfreePostList', response)
    })
  },
  async getGlobalfreePostList(context) {
    await this.$client.get('/api/main').then((response) => {
      context.commit('setGlobalfreePostList', response)
    })
  },
}
