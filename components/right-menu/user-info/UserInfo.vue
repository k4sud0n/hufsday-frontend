<template>
  <div class="rounded bg-white border border-gray-200">
    <div class="p-4">
      <div class="flex justify-center">
        <div class="rounded bg-gray-200 w-16 h-16 overflow-hidden">
          <img
            class="mt-0.5"
            :src="
              'https://avatars.dicebear.com/api/big-smile/' + nickname + '.svg'
            "
          />
        </div>
      </div>
      <div class="flex justify-center text-sm mt-2">
        {{ nickname }}
      </div>
      <div class="flex justify-center text-sm text-gray-500">{{ major }}</div>
      <div class="flex justify-center">
        <button
          class="
            rounded
            border border-gray-200
            text-xs
            mt-2.5
            text-gray-500
            p-1
            hover:bg-gray-50
          "
          @click="logout"
        >
          로그아웃
        </button>
      </div>
    </div>
    <div class="flex border-t border-gray-200">
      <NuxtLink
        :to="{ name: 'user-notification' }"
        class="flex flex-auto justify-center p-2 hover:bg-gray-50"
      >
        <div
          v-if="$nuxt.$store.state.notification.notificationLength"
          class="
            absolute
            ml-2
            p-2
            -mt-1
            flex
            rounded-full
            h-3.5
            w-3.5
            items-center
            justify-center
            bg-red-500
            text-white text-xs
          "
        >
          {{ $nuxt.$store.state.notification.notificationLength }}
        </div>
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
      </NuxtLink>

      <div class="border-r border-gray-200"></div>
      <NuxtLink
        :to="{ name: 'user-message' }"
        class="flex flex-auto justify-center p-2 hover:bg-gray-50"
      >
        <div
          v-if="$nuxt.$store.state.message.messageLength"
          class="
            absolute
            ml-2
            p-2
            -mt-1
            flex
            rounded-full
            h-3.5
            w-3.5
            items-center
            justify-center
            bg-red-500
            text-white text-xs
          "
        >
          {{ $nuxt.$store.state.message.messageLength }}
        </div>
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </NuxtLink>
      <div class="border-r border-gray-200"></div>
      <NuxtLink
        :to="{ name: 'user' }"
        class="flex flex-auto justify-center p-2 hover:bg-gray-50"
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      major: this.$auth.user.major,
      nickname: this.$auth.user.nickname,
    }
  },
  async fetch() {
    await this.$store.dispatch('notification/getNotificationLength')
    await this.$store.dispatch('message/getMessageLength')
  },
  methods: {
    async logout() {
      await this.$auth.logout('local').then(() => {
        this.$toast.success('로그아웃 성공!', { timeout: 3000 })
        this.$router.push({ name: 'login' })
      })
    },
  },
}
</script>
