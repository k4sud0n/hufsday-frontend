<template>
  <form
    class="fixed z-10 inset-0 overflow-y-auto flex h-screen"
    @submit.prevent="formSubmit"
  >
    <div
      class="fixed inset-0 bg-gray-900 bg-opacity-20 transition-opacity"
      aria-hidden="true"
    ></div>
    <div
      class="m-auto w-auto bg-white rounded overflow-hidden shadow transform"
    >
      <div class="flex items-center justify-between px-6 py-4">
        <span class="text-navy font-semibold text-sm">쪽지</span>
        <span class="cursor-pointer" @click="closeMessageModal">
          <svg
            class="w-5 h-5 text-navy font-semibold text-sm"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </div>
      <div class="px-6 pt-1 pb-5">
        <textarea
          :value="content"
          required
          type="text"
          placeholder="내용을 입력해주세요."
          class="
            border border-gray-200
            rounded
            text-sm
            px-4
            py-3
            h-32
            resize-none
          "
          @input="changeContent"
        />
      </div>
      <div class="px-6 pb-4">
        <button class="rounded bg-navy text-white text-sm w-16 h-10">
          보내기
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    parentId: {
      type: Number,
      default: 0,
    },
    receiverId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      content: '',
    }
  },
  methods: {
    closeMessageModal() {
      this.$parent.openMessageModal()
    },
    changeContent(e) {
      this.content = e.target.value
    },
    async formSubmit() {
      await this.$client
        .post(`/api/message/create`, {
          parent_id: this.parentId,
          receiver_id: await this.receiverId,
          content: this.content,
        })
        .then((result) => {
          if (this.$route.name === 'user-message-id') {
            this.$router.push(`/user/message/${this.parentId}`)
          } else {
            this.$router.push(`/user/message/${result.data[0]}`)
          }
          this.$toast.success('쪽지를 보냈습니다.', { timeout: 3000 })
          this.$parent.$fetch()
          this.closeMessageModal()
        })
    },
  },
}
</script>
