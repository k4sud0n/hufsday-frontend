<template>
  <div class="flex-1 bg-white rounded border border-gray-200 overflow-hidden">
    <div
      class="flex px-3 py-2 border-b border-gray-200 text-navy font-semibold"
    >
      <div class="mt-1 text-sm">글로벌캠 자유게시판</div>
      <NuxtLink class="ml-auto" :to="{ name: 'globalfree' }">
        <button
          class="
            rounded
            bg-transparent
            border border-navy
            hover:bg-navy hover:text-white
            active:bg-navy
            text-navy
            font-semibold
            px-3
            py-1
            text-sm
          "
        >
          더보기
        </button>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        v-for="(post, index) in posts"
        :key="post.id"
        :to="{
          name: 'globalfree-id',
          params: { id: post.id },
          query: { page: 1 },
        }"
      >
        <div
          :class="[
            'px-3 py-2.5 text-sm hover:bg-gray-50',
            index == posts.length - 1 ? null : 'border-b border-gray-200',
          ]"
        >
          {{ post.title }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('main/getGlobalfreePostList').then(() => {
      this.posts = this.$store.state.main.globalfreePosts
    })
  },
}
</script>
