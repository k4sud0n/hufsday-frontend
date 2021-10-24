<template>
  <div
    class="
      mt-5
      ml-7
      rounded
      bg-gray-50
      border border-gray-200
      text-xs
      px-5
      py-3.5
    "
  >
    <div class="flex justify-between">
      <div class="flex">
        <div v-if="reply.content !== '삭제된 댓글입니다.'" class="flex">
          <div
            v-if="postCreatorId == reply.user_id"
            class="text-xs font-semibold text-green-900"
          >
            익명의 컴공생(글쓴이)
          </div>
          <div v-else class="text-xs font-semibold">익명의 컴공생</div>
          <div class="text-xs ml-1 text-gray-500">
            {{ $dayjs(reply.created).fromNow() }}
          </div>
        </div>
        <div v-else class="flex">
          <div class="text-xs font-semibold">(삭제)</div>
        </div>
      </div>

      <div v-if="reply.content !== '삭제된 댓글입니다.'">
        <div v-if="reply.user_id === user_id" class="flex">
          <div
            class="cursor-pointer text-xs text-gray-500"
            @click="deleteReply(reply.id)"
          >
            삭제
          </div>
        </div>
        <div v-else class="flex">
          <div
            class="cursor-pointer text-xs text-gray-500 mr-2"
            @click="thumbsUp(reply.id)"
          >
            추천
          </div>
          <div class="text-xs text-gray-500">신고</div>
        </div>
      </div>
    </div>
    <div class="text-sm mt-1.5">{{ reply.content }}</div>
    <div
      v-if="reply.thumbs_up > 0 && reply.content !== '삭제된 댓글입니다.'"
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
        <div class="ml-0.5">{{ reply.thumbs_up }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postId: {
      type: Number,
      default: 0,
    },
    postCreatorId: {
      type: Number,
      default: 0,
    },
    reply: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      user_id: this.$auth.user.id,
    }
  },
  methods: {
    async thumbsUp(commentId) {
      try {
        await this.$client
          .post(`/api/seoulfree/${this.postId}/comments/${commentId}/thumbs_up`)
          .then(() => {
            this.$parent.$fetch()
          })
      } catch (error) {
        if (error.response.data === 'thumbs_up_own') {
          this.$toast.error('자신의 댓글을 추천할 수 없습니다.', {
            timeout: 3000,
          })
        }
        if (error.response.data === 'thumbs_up_duplicate') {
          this.$toast.error('이미 추천했습니다.', {
            timeout: 3000,
          })
        }
      }
    },
    async deleteReply(commentId) {
      await this.$client
        .patch(`/api/seoulfree/${this.postId}/comments/${commentId}/delete`)
        .then(() => {
          this.$toast.success('삭제 성공!', { timeout: 3000 })
          this.$parent.$fetch()
        })
    },
  },
}
</script>
