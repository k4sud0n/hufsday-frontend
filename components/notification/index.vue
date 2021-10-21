<template>
  <div class="flex-grow">
    <div class="bg-white rounded border border-gray-200">
      <div class="flex justify-between items-center border-b border-gray-200">
        <div class="px-6 py-4 text-sm font-semibold text-green-900">
          내 알림 목록
        </div>
        <div
          class="px-6 py-4 text-sm text-green-900 cursor-pointer"
          @click="deleteNotification"
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

      <div v-if="notifications.length == 0" class="px-6 py-4 text-sm">
        알림이 없습니다.
      </div>

      <div
        v-for="(notification, index) in notifications"
        :key="notification.id"
        :class="[
          'text-sm px-6 py-4 hover:bg-gray-50 cursor-pointer',
          index == notifications.length - 1 ? null : 'border-b border-gray-200',
        ]"
        @click="
          readNotification(
            notification.readed,
            notification.id,
            notification.post_id
          )
        "
      >
        <div>
          <span class="font-semibold">익명의 컴퓨터공학부</span>님이
          <span class="font-semibold">"{{ notification.content }}"</span>라고
          알림을 보냈습니다.
        </div>
        <div class="mt-0.5">
          <span class="text-gray-500">
            {{ new Date(notification.created).toLocaleDateString('ko-KR') }}
          </span>
          <span v-if="!notification.readed" class="ml-0.5 text-red-500">
            읽지 않음
          </span>
          <span v-else class="ml-0.5 text-blue-500">읽음</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [],
    }
  },
  async fetch() {
    await this.$client.get('/api/notification').then((response) => {
      this.$store.dispatch('notification/getNotificationLength')
      this.notifications = response.data
    })
  },
  methods: {
    async readNotification(readed, commentId, postId) {
      if (!readed) {
        await this.$client.patch(`/api/notification/${commentId}`).then(() => {
          this.$router.push(`/seoulfree/${postId}`)
        })
      } else {
        this.$router.push(`/seoulfree/${postId}`)
      }
    },
    async deleteNotification() {
      await this.$client.delete(`/api/notification`).then(() => {
        this.$fetch()
        this.$toast.success('알림을 삭제했습니다.', { timeout: 3000 })
      })
    },
  },
}
</script>
