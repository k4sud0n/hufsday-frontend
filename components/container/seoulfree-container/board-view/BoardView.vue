<template>
  <div>
    <div
      class="bg-white rounded mt-4 border-t border-l border-r border-gray-200"
    >
      <div class="p-5 border-b border-gray-200">
        <div v-if="$fetchState.pending">
          <div class="animate-pulse bg-green-100 rounded w-2/4 h-7"></div>
        </div>
        <div v-else-if="$fetchState.error">이런! 에러가 발생했습니다</div>
        <div class="text-xl font-bold">{{ post.title }}</div>
        <div class="flex justify-between mt-3">
          <div class="flex">
            <div class="flex items-center text-xs mr-1.5 font-semibold">
              익명
            </div>
            <div class="flex items-center text-xs mr-1.5 text-gray-500">
              1분 전
            </div>
            <div class="flex items-center text-xs mr-1.5 text-gray-500">
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              100
            </div>
            <div class="flex items-center text-xs mr-1.5 text-gray-500">
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                ></path>
              </svg>
              100
            </div>
            <div class="flex items-center text-xs text-gray-500">
              <svg
                class="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              10
            </div>
          </div>
          <div class="flex text-xs">
            <div class="text-xs text-gray-500 mr-2">쪽지</div>
            <div class="text-xs text-gray-500">신고</div>
          </div>
        </div>
      </div>
      <div class="mt-5 p-5">
        <Advertisement />
      </div>
      <div class="mt-3 p-5 text-sm border-b border-gray-200">
        <div v-if="$fetchState.pending">
          <div class="animate-pulse bg-green-100 rounded w-2/4 h-4 mb-2"></div>
          <div class="animate-pulse bg-green-100 rounded w-3/4 h-4 mb-2"></div>
          <div class="animate-pulse bg-green-100 rounded w-1/4 h-4 mb-2"></div>
          <div class="animate-pulse bg-green-100 rounded w-2/4 h-4"></div>
        </div>
        <div v-else-if="$fetchState.error">
          관리자에게 알려주시면 감사하겠습니다. 코딩 싫어요 ㅠ
        </div>
        <div>
          {{ post.body }}
        </div>
        <div class="flex justify-center mt-8">
          <div
            class="
              flex
              items-center
              px-5
              py-2
              rounded
              bg-transparent
              border border-green-900
              hover:bg-green-900 hover:text-white
              active:bg-green-800
              text-green-900
              mr-2
            "
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
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              ></path>
            </svg>
            <div class="ml-1">10</div>
          </div>
          <div
            class="
              flex
              items-center
              px-5
              py-2
              rounded
              bg-transparent
              border border-green-900
              hover:bg-green-900 hover:text-white
              active:bg-green-800
              text-green-900
            "
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
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              ></path>
            </svg>
            <div class="ml-1">5</div>
          </div>
        </div>
      </div>
      <div class="text-sm px-5 py-4 flex items-center border-b border-gray-200">
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
        <div class="ml-1">댓글</div>
        <div class="ml-1 text-green-900 font-semibold">10</div>
        <div>개</div>
      </div>
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="p-5 border-b border-gray-200"
      >
        <div class="flex justify-between">
          <div class="flex">
            <div class="text-xs font-semibold">익명</div>
            <div class="text-xs ml-1 text-gray-500">1분 전</div>
          </div>
          <div class="flex">
            <div class="text-xs text-gray-500 mr-2">답글</div>
            <div class="text-xs text-gray-500 mr-2">추천</div>
            <div class="text-xs text-gray-500 mr-2">쪽지</div>
            <div class="text-xs text-gray-500">신고</div>
          </div>
        </div>
        <div class="text-sm mt-1.5">
          {{ comment.body }}
        </div>
        <div class="flex text-xs mt-1.5 text-green-900">
          <div class="flex items-center mr-1">
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              ></path>
            </svg>
            <div class="ml-0.5">5</div>
          </div>
        </div>
      </div>
    </div>
    <BoardList />
  </div>
</template>

<script>
import Advertisement from '../../../advertisement/index.vue'
import BoardList from '../board-list/BoardList.vue'

export default {
  components: {
    Advertisement,
    BoardList,
  },
  data() {
    return {
      id: this.$route.params.id,
      post: [],
      comments: [],
    }
  },
  async fetch() {
    const postResponse = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.id}`
    )
    this.post = postResponse.data

    const commentResponse = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${this.id}`
    )
    this.comments = commentResponse.data
  },
}
</script>
