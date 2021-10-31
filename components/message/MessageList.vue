<template>
  <div class="bg-white rounded border border-gray-200">
    <div class="flex justify-between items-center border-b border-gray-200">
      <div class="px-6 py-4 text-sm font-semibold text-navy">
        내 쪽지 목록
      </div>
      <div
        class="px-6 py-4 text-sm text-navy cursor-pointer"
        @click="deleteAllMessage"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </div>
    </div>

    <div
      v-if="messages.length === 0 || messages[0] === null"
      class="px-6 py-4 text-sm"
    >
      쪽지가 없습니다.
    </div>

    <NuxtLink
      v-for="(message, index) in messages"
      v-else
      :key="message.id"
      :to="{
        name: 'user-message-id',
        params: {
          id: message.parent_id === 0 ? message.id : message.parent_id,
        },
      }"
    >
      <div
        :class="[
          'text-sm px-6 py-4 hover:bg-gray-50 cursor-pointer',
          index == messages.length - 1 ? null : 'border-b border-gray-200',
        ]"
      >
        <div class="flex items-center">
          <span class="font-semibold">익명의 컴공생</span>:
          <span class="ml-0.5">{{ message.content }}</span>
          <div
            v-if="message.unreaded === '1'"
            class="
              ml-0.5
              p-2
              flex
              rounded-full
              h-3
              w-3
              items-center
              justify-center
              bg-red-500
              text-white text-xs
            "
          >
            N
          </div>
        </div>
        <div class="mt-0.5">
          <span class="text-gray-500">
            {{ $dayjs(message.created).format('YYYY/MM/DD HH:mm') }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    }
  },
  async fetch() {
    await this.$client.get('/api/message').then((response) => {
      this.$store.dispatch('message/getMessageLength')
      this.messages = response.data
    })
  },
  methods: {
    async deleteAllMessage() {
      try {
        await this.$client.delete('/api/message/delete').then(() => {
          this.$fetch()
          this.$toast.success('모든 쪽지를 삭제했습니다.', { timeout: 3000 })
        })
      } catch (e) {
        if (e.response.status === 404) {
          this.$toast.info('현재 준비중인 기능입니다. 불편을 드려서 죄송합니다.', { timeout: 3000 })
        }
      }
    },
  },
}
</script>
