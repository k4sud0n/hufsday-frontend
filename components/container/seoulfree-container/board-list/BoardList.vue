<template>
  <div>
    <div class="bg-white mt-4 rounded border border-gray-200 overflow-hidden">
      <div class="p-4 border-b border-gray-200">
        <div class="text-sm font-semibold text-green-900">
          서울캠 자유게시판
        </div>
        <div class="text-xs text-gray-500">
          한국외대 서울캠퍼스 자유게시판입니다.
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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

          <NuxtLink :to="{ name: 'seoulfree-create' }">
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div class="text-sm">
        <div v-if="$fetchState.pending">
          <div
            v-for="(post, index) in 20"
            :key="index"
            :class="[
              'px-4 py-3.5 border-b border-gray-200',
              index == posts.length - 1 ? null : 'border-b border-gray-200',
            ]"
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
        <NuxtLink
          v-for="(post, index) in posts"
          v-else
          :key="post.id"
          :to="{
            name: 'seoulfree-id',
            params: { id: post.id },
            query: { page: pageNumber },
          }"
        >
          <div
            :class="[
              'px-4 py-3 hover:bg-gray-50',
              post.id == routerId ? 'bg-gray-50' : 'bg-white',
              index == posts.length - 1 ? null : 'border-b border-gray-200',
            ]"
          >
            <div>
              <span class="break-all">{{ post.title }}</span>
              <span
                v-if="post.number_of_comments > 0"
                class="-mr-0.5 font-semibold text-green-900"
              >
                ({{ post.number_of_comments }})
              </span>
            </div>
            <div class="flex mt-1 items-center">
              <div class="text-xs mr-1.5">익명의 컴공생</div>
              <div class="text-xs text-gray-500 mr-1.5">
                {{ $dayjs(post.created).fromNow() }}
              </div>
              <div class="flex items-center text-xs text-gray-500 mr-1.5">
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
                {{ post.view_count }}
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
                {{ post.thumbs_up }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- pagination -->
    <div class="flex justify-center mt-4">
      <nav
        class="relative z-0 inline-flex rounded -space-x-px"
        aria-label="Pagination"
      >
        <button
          v-if="pageNumber == 1"
          class="
            bg-gray-50
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-l-md
            border border-gray-200
            bg-white
            text-sm
            font-medium
            text-gray-500
          "
          disabled
          @click="previousPage"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          v-else
          class="
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-l-md
            border border-gray-200
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="previousPage"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          v-if="posts.length !== 20"
          class="
            bg-gray-50
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-r-md
            border border-gray-200
            bg-white
            text-sm
            font-medium
            text-gray-500
          "
          disabled
          @click="nextPage"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          v-else
          class="
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-r-md
            border border-gray-200
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click="nextPage"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
    <!-- pagination end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerId: this.$route.params.id,
      posts: [],
      commentsCount: 0,
      pageNumber: this.$route.query.page || 1,
      fetchOnServer: false,
    }
  },
  async fetch() {
    const param = {
      params: {
        page: this.pageNumber,
      },
    }

    await this.$store.dispatch('seoulfree/getPostList', param).then(() => {
      this.posts = this.$store.state.seoulfree.posts
    })
  },
  methods: {
    nextPage() {
      this.pageNumber += 1
      this.$router.push(`?page=${parseInt(this.pageNumber)}`)
      this.$fetch()
    },
    previousPage() {
      if (this.pageNumber !== 1) {
        this.pageNumber -= 1
        this.$router.push(`?page=${parseInt(this.pageNumber)}`)
        this.$fetch()
      }
    },
  },
}
</script>
