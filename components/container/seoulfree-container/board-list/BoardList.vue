<template>
  <div class="bg-white rounded mt-4 border-t border-l border-r border-gray-200">
    <div class="p-4 border-b border-gray-200">
      <div class="text-sm font-semibold text-green-900">서울캠 자유게시판</div>
      <div class="text-xs text-gray-500">
        한국외대 서울캠퍼스 자유게시판입니다.
      </div>
      <div class="flex mt-2">
        <svg
          class="w-5 h-5 text-green-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        <svg
          class="w-5 h-5 ml-2 text-green-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="text-sm">
      <div v-if="$fetchState.pending">
        <div
          v-for="(post, index) in 20"
          :key="index"
          class="px-4 py-3 border-b border-gray-200"
        >
          <div class="animate-pulse bg-green-100 rounded w-3/5 h-4"></div>
          <div class="flex mt-1">
            <div
              class="animate-pulse bg-green-100 rounded w-8 h-4 mr-1.5"
            ></div>
            <div
              class="animate-pulse bg-green-100 rounded w-6 h-4 mr-1.5"
            ></div>
            <div
              class="animate-pulse bg-green-100 rounded w-6 h-4 mr-1.5"
            ></div>
            <div class="animate-pulse bg-green-100 rounded w-6 h-4"></div>
          </div>
        </div>
      </div>
      <div v-else-if="$fetchState.error" class="px-4 py-3">
        목록을 불러올 수 없습니다! 관리자에게 문의해주세요.
      </div>
      <div
        v-for="post in posts"
        v-else
        :key="post.id"
        class="px-4 py-3 border-b border-gray-200"
      >
        <div>{{ post.title }}</div>
        <div class="flex mt-1">
          <div class="text-xs mr-1.5">익명</div>
          <div class="text-xs text-gray-500 mr-1.5">1분 전</div>
          <div class="text-xs text-gray-500 mr-1.5">조회 100</div>
          <div class="text-xs text-gray-500">추천 100</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: {},
    }
  },
  async fetch() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = res.data.slice(0, 20)
  },
  methods: {
    fetchPost() {
      this.$fetch()
    },
  },
  fetchOnServer: false,
}
</script>
