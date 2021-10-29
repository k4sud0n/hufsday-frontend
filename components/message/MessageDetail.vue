<template>
  <div class="flex-grow">
    <div class="bg-white rounded border border-gray-200">
      <div class="flex justify-between items-center border-b border-gray-200">
        <div class="px-5 py-3 text-sm flex items-center">
          <svg
            class="w-5 h-5 text-green-900 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span class="font-semibold text-green-900">안내</span>
        </div>

        <div class="px-5 py-3 text-sm text-green-900 flex items-center">
          <div @click="openMessageModal">
            <svg
              class="w-5 h-5 cursor-pointer mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <svg
            class="w-5 h-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="px-5 py-3">
        <span class="text-sm">
          쪽지 이용 시 개인정보 및 금융정보 보호에 유의해주시기 바랍니다. 광고,
          스팸, 사기 등의 쪽지를 받으셨을 경우 스팸 신고를 눌러주세요.
        </span>
      </div>
    </div>

    <div
      v-for="message in messageDetail"
      :key="message.id"
      class="bg-white rounded border border-gray-200 mt-5"
    >
      <MessageModal
        v-show="messageModal"
        :parent-id="message.parent_id === 0 ? message.id : message.parent_id"
        :receiver-id="
          message.receiver_id === user_id
            ? message.sender_id
            : message.receiver_id
        "
      />

      <div class="flex justify-between items-center border-b border-gray-200">
        <div class="px-5 py-3 text-sm">
          <span
            v-if="message.sender_id === user_id"
            class="font-semibold text-green-600"
          >
            보낸 쪽지
          </span>
          <span v-else class="font-semibold text-green-900">받은 쪽지</span>
        </div>
        <div class="px-5 py-3 text-xs text-gray-500">
          {{ $dayjs(message.created).format('YYYY/MM/DD HH:mm') }}
        </div>
      </div>

      <div class="px-5 pb-3 -mt-3.5">
        <span class="text-sm whitespace-pre-line">
          {{ message.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MessageModal from './MessageModal.vue'

export default {
  components: {
    MessageModal,
  },
  data() {
    return {
      user_id: this.$auth.user.id,
      messageId: this.$route.params.id,
      messageDetail: [],
      messageModal: false,
    }
  },
  async fetch() {
    try {
      await this.$client
        .get(`/api/message/${this.messageId}`)
        .then((response) => {
          this.messageDetail = response.data
          this.$store.dispatch('message/getMessageLength')
        })
    } catch (e) {
      if (e.response.status === 404) {
        return this.$nuxt.error({
          statusCode: 404,
          message: '쪽지를 찾을 수 없습니다.',
        })
      }
    }
  },
  mounted() {
    if (Number.isInteger(this.messageDetail)) {
      this.$router.push(`/user/message/${this.messageDetail}`)
    }
  },
  methods: {
    openMessageModal() {
      this.messageModal = !this.messageModal
    },
  },
}
</script>
