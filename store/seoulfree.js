export const state = () => ({
  posts: [],
  postDetail: [],
  comments: [],
  replys: [],
})

export const mutations = {
  setPostList(state, response) {
    state.posts = response.data
  },
  setPostDetail(state, response) {
    state.postDetail = response.data[0]
  },
  setCommentList(state, response) {
    state.comments = response.data.filter((o) => o.parent_id === null)
  },
  setReplyList(state, response) {
    state.replys = response.data.filter((o) => o.parent_id !== null)
  },
}

export const actions = {
  async getPostList(context, param) {
    await this.$client.get('/api/seoulfree', param).then((response) => {
      context.commit('setPostList', response)
    })
  },
  async getPostDetail(context, postId) {
    await this.$client.get(`/api/seoulfree/${postId}`).then((response) => {
      context.commit('setPostDetail', response)
    })
  },
  async getCommentList(context, postId) {
    await this.$client
      .get(`/api/seoulfree/${postId}/comments`)
      .then((response) => {
        context.commit('setCommentList', response)
        context.commit('setReplyList', response)
      })
  },
}
