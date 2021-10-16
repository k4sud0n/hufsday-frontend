<template>
  <div>
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
      <div class="ml-1 text-green-900 font-semibold">
        {{ comments.length }}
      </div>
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
          <div class="text-xs ml-1 text-gray-500">
            {{ new Date(comment.created).toLocaleDateString('ko-KR') }}
          </div>
        </div>
        <div class="flex">
          <div class="text-xs text-gray-500 mr-2">답글</div>
          <div class="text-xs text-gray-500 mr-2 cursor-pointer" @click="commentThumbsUp(comment.id)">
            추천
          </div>
          <div class="text-xs text-gray-500 mr-2">쪽지</div>
          <div class="text-xs text-gray-500">신고</div>
        </div>
      </div>
      <div class="text-sm mt-1.5">
        {{ comment.content }}
      </div>
      <div
        v-if="comment.thumbs_up > 0"
        class="flex text-xs mt-1.5 text-green-900"
      >
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
          <div class="ml-0.5">{{ comment.thumbs_up }}</div>
        </div>
      </div>
    </div>

    <form
      class="flex border-b border-gray-200 text-xs"
      @submit.prevent="formSubmit"
    >
      <input
        :value="content"
        class="px-5 py-3.5 w-full bg-gray-50"
        placeholder="댓글을 입력하세요."
        required
        @input="changeContent"
      />
      <button
        class="
          px-4
          rounded-br
          border-l border-gray-200
          bg-green-900
          overflow-hidden
        "
      >
        <svg
          class="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    postId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      comments: [],
      content: '',
      nickname: this.$auth.user.nickname,
    }
  },
  async fetch() {
    await this.$client
      .get(`api/seoulfree/${this.postId}/comment`)
      .then((response) => {
        this.comments = response.data
      })
  },
  methods: {
    changeContent(e) {
      this.content = e.target.value
    },
    async formSubmit() {
      await this.$client
        .post(`api/seoulfree/${this.postId}/comment/create`, {
          content: this.content,
          nickname: this.nickname,
        })
        .then(() => {
          this.content = ''
          this.$fetch()
        })
    },
    async commentThumbsUp(commentId) {
      await this.$client
        .post(`api/seoulfree/${this.postId}/comment/${commentId}/thumbs_up`)
        .then(() => {
          this.$fetch()
        })
    },
  },
}
</script>
