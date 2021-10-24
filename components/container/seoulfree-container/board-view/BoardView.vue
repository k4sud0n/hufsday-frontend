<template>
  <div>
    <div class="bg-white rounded mt-4 border border-gray-200 overflow-hidden">
      <div class="p-5 border-b border-gray-200">
        <div v-if="$fetchState.pending" class="flex">
          <div class="animate-pulse bg-green-100 rounded w-8 h-7 mr-1.5"></div>
          <div class="animate-pulse bg-green-100 rounded w-16 h-7 mr-1.5"></div>
          <div class="animate-pulse bg-green-100 rounded w-8 h-7 mr-1.5"></div>
          <div class="animate-pulse bg-green-100 rounded w-1/3 h-7"></div>
        </div>
        <div v-else-if="$fetchState.error" class="text-xl font-bold">
          이런! 에러가 발생했습니다
        </div>
        <div v-else class="text-xl font-bold">{{ postDetail.title }}</div>
        <div class="flex justify-between mt-3">
          <div class="flex">
            <div class="flex items-center text-xs mr-1.5 font-semibold">
              익명의 컴공생
            </div>
            <div class="flex items-center text-xs mr-1.5 text-gray-500">
              {{ $dayjs(postDetail.created).fromNow() }}
            </div>
            <div class="flex items-center text-xs mr-1.5 text-gray-500">
              <svg
                class="w-3.5 h-3.5 mr-0.5"
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
              {{ postDetail.view_count }}
            </div>
            <div class="flex items-center text-xs mr-1.5 text-gray-500">
              <svg
                class="w-3.5 h-3.5 mr-0.5"
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
              {{ postThumbsUp }}
            </div>
            <div class="flex items-center text-xs text-gray-500">
              <svg
                class="w-3.5 h-3.5 mr-0.5"
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
              {{ postDetail.number_of_comments }}
            </div>
          </div>
          <div v-if="postDetail.user_id !== user_id" class="flex text-xs">
            <div class="text-xs text-gray-500 mr-2">쪽지</div>
            <div class="text-xs text-gray-500">신고</div>
          </div>
          <div v-else class="flex text-xs">
            <div
              class="text-xs text-gray-500 mr-2 cursor-pointer"
              @click="updatePost"
            >
              수정
            </div>
            <div
              class="text-xs text-gray-500 cursor-pointer"
              @click="deletePost"
            >
              삭제
            </div>
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
        <div v-else-if="$fetchState.error">관리자에게 문의해주세요.</div>
        <span v-else class="whitespace-pre-line">
          {{ postDetail.content }}
        </span>
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
              cursor-pointer
            "
            @click="thumbsUp"
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
            <div class="ml-1">
              {{ postThumbsUp }}
            </div>
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
              cursor-pointer
            "
            @click="thumbsDown"
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
            <div class="ml-1">
              {{ postThumbsDown }}
            </div>
          </div>
        </div>
      </div>
      <Comment :post-id="id" :post-creator-id="postDetail.user_id" />
    </div>
    <BoardList />
  </div>
</template>

<script>
import Advertisement from '../../../advertisement/index.vue'
import BoardList from '../board-list/BoardList.vue'
import Comment from './Comment.vue'

export default {
  components: {
    Advertisement,
    Comment,
    BoardList,
  },
  data() {
    return {
      user_id: this.$auth.user.id,
      id: parseInt(this.$route.params.id),
      postDetail: [],
      postThumbsUp: 0,
      postThumbsDown: 0,
    }
  },
  async fetch() {
    await this.$store.dispatch('seoulfree/getPostDetail', this.id).then(() => {
      this.postDetail = this.$store.state.seoulfree.postDetail
      this.postThumbsUp = this.$store.state.seoulfree.postDetail.thumbs_up
      this.postThumbsDown = this.$store.state.seoulfree.postDetail.thumbs_down
    })
  },
  methods: {
    async updatePost() {
      await this.$router.push(`/seoulfree/${this.id}/update`)
    },
    async deletePost() {
      await this.$client.delete(`/api/seoulfree/${this.id}/delete`).then(() => {
        this.$toast.success('삭제 성공!', { timeout: 3000 })
        this.$router.push({ name: 'seoulfree' })
      })
    },
    async thumbsUp() {
      try {
        await this.$client
          .post(`/api/seoulfree/${this.id}/thumbs_up`)
          .then(() => {
            this.$store
              .dispatch('seoulfree/getPostDetail', this.id)
              .then(() => {
                this.postThumbsUp =
                  this.$store.state.seoulfree.postDetail.thumbs_up
              })
            this.$toast.success('글을 추천했습니다', { timeout: 3000 })
          })
      } catch (error) {
        if (error.response.data === 'thumbs_up_duplicate') {
          this.$toast.error('이미 추천했습니다.', {
            timeout: 3000,
          })
        } else {
          this.$toast.error('자신의 글을 추천할 수 없습니다.', {
            timeout: 3000,
          })
        }
      }
    },
    async thumbsDown() {
      try {
        await this.$client
          .post(`/api/seoulfree/${this.id}/thumbs_down`)
          .then(() => {
            this.$store
              .dispatch('seoulfree/getPostDetail', this.id)
              .then(() => {
                this.postThumbsDown =
                  this.$store.state.seoulfree.postDetail.thumbs_down
              })
            this.$toast.success('글을 비추천했습니다', { timeout: 3000 })
          })
      } catch (error) {
        if (error.response.data === 'thumbs_down_duplicate') {
          this.$toast.error('이미 비추천했습니다.', {
            timeout: 3000,
          })
        } else {
          this.$toast.error('자신의 글을 비추천할 수 없습니다.', {
            timeout: 3000,
          })
        }
      }
    },
  },
}
</script>
