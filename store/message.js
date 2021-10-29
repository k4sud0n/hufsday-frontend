export const state = () => ({
  messageLength: 0,
})

export const mutations = {
  setMessageLength(state, response) {
    state.messageLength = response.data[0]['count(`id`)']
  },
}

export const actions = {
  async getMessageLength(context) {
    await this.$client.get('/api/message/count').then((response) => {
      context.commit('setMessageLength', response)
    })
  },
}
