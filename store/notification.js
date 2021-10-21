export const state = () => ({
  notificationLength: 0,
})

export const mutations = {
  setNotificationLength(state, response) {
    state.notificationLength = response.data.length
  },
}

export const actions = {
  async getNotificationLength(context) {
    await this.$client.get('/api/notification/count').then((response) => {
      context.commit('setNotificationLength', response)
    })
  },
}
