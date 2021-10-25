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
        {{ comments.length + replys.length }}
      </div>
      <div>개</div>
    </div>
    <div
      v-for="(comment, index) in comments"
      :key="comment.id"
      class="p-5 border-b border-gray-200"
    >
      <div class="flex justify-between">
        <div v-if="comment.content !== '삭제된 댓글입니다.'" class="flex">
          <div
            v-if="postCreatorId == comment.user_id"
            class="text-xs font-semibold text-green-900"
          >
            익명의 컴공생(글쓴이)
          </div>
          <div v-else class="text-xs font-semibold">익명의 컴공생</div>
          <div class="text-xs ml-1 text-gray-500">
            {{ $dayjs(comment.created).fromNow() }}
          </div>
        </div>
        <div v-else class="text-xs font-semibold">(삭제)</div>
        <div v-if="comment.content !== '삭제된 댓글입니다.'">
          <div v-if="comment.user_id !== user_id" class="flex">
            <div
              class="text-xs text-gray-500 mr-2 cursor-pointer"
              @click="selectItem(index)"
            >
              답글
            </div>
            <div
              class="cursor-pointer text-xs text-gray-500 mr-2"
              @click="thumbsUp(comment.id)"
            >
              추천
            </div>
            <div class="text-xs text-gray-500 mr-2">쪽지</div>
            <div class="text-xs text-gray-500">신고</div>
          </div>
          <div v-else class="flex">
            <div
              class="text-xs text-gray-500 mr-2 cursor-pointer"
              @click="selectItem(index)"
            >
              답글
            </div>
            <div
              class="cursor-pointer text-xs text-gray-500"
              @click="deleteComment(comment.id)"
            >
              삭제
            </div>
          </div>
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
      <div v-for="reply in replys" :key="reply.parent_id">
        <Reply
          v-if="comment.id === reply.parent_id"
          :reply="reply"
          :post-id="postId"
          :post-creator-id="postCreatorId"
        />
      </div>
      <ReplyToggle
        :post-id="postId"
        :parent-id="comment.id"
        :class="{ hidden: index !== activeItem }"
      />
    </div>

    <form class="flex text-xs" @submit.prevent="formSubmit">
      <input
        :value="content"
        class="px-5 py-3.5 w-full bg-gray-50 focus:outline-none"
        placeholder="댓글을 입력하세요."
        required
        @input="changeContent"
      />
      <button
        class="px-4 border-l border-gray-200 bg-green-900 overflow-hidden"
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
import _ from 'lodash'

import Reply from './Reply.vue'
import ReplyToggle from './ReplyToggle.vue'

export default {
  components: {
    Reply,
    ReplyToggle,
  },
  props: {
    postId: {
      type: Number,
      default: 0,
    },
    postCreatorId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      user_id: this.$auth.user.id,
      comments: [],
      replys: [],
      content: '',
      activeItem: null,
    }
  },
  async fetch() {
    await this.$store
      .dispatch('seoulfree/getCommentList', this.postId)
      .then(() => {
        this.comments = this.$store.state.seoulfree.comments
        this.replys = this.$store.state.seoulfree.replys
        this.$store.dispatch('notification/getNotificationLength')
      })
  },
  methods: {
    selectItem(i) {
      this.activeItem = i
    },
    changeContent: _.debounce(function (e) {
      this.content = e.target.value
    }, 150),
    async formSubmit() {
      await this.$client
        .post(`/api/seoulfree/${this.postId}/comments/create`, {
          postCreatorId: this.postCreatorId,
          content: this.content,
        })
        .then(() => {
          this.content = ''
          this.$fetch()
        })
    },
    async deleteComment(commentId) {
      await this.$client
        .patch(`/api/seoulfree/${this.postId}/comments/${commentId}/delete`)
        .then(() => {
          this.$toast.success('삭제 성공!', { timeout: 3000 })
          this.$fetch()
        })
    },
    async thumbsUp(commentId) {
      try {
        await this.$client
          .post(`/api/seoulfree/${this.postId}/comments/${commentId}/thumbs_up`)
          .then(() => {
            this.$fetch()
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
  },
}
</script>
