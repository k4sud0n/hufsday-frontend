<template>
  <form
    class="fixed z-10 inset-0 overflow-y-auto flex h-screen"
    @submit.prevent="formSubmit"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>
    <div
      class="m-auto w-auto bg-white rounded overflow-hidden shadow-xl transform"
    >
      <div class="flex items-center justify-between px-6 py-4">
        <span class="text-green-900 font-semibold text-sm"
          >서울캠 자유게시판 검색</span
        >
        <span class="cursor-pointer" @click="modalCancel">
          <svg
            class="w-5 h-5 text-green-900 font-semibold text-sm"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </div>
      <div class="px-6 pt-1 pb-5">
        <input
          :value="search"
          type="text"
          placeholder="검색어를 입력해주세요."
          class="border border-gray-200 rounded text-sm px-4 py-3"
          @input="changeSearch"
        />
      </div>
      <div class="px-6 pb-4">
        <button class="rounded bg-green-900 text-white text-sm w-16 h-10">
          검색
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    modalCancel() {
      this.$parent.openSearchModal()
    },
    changeSearch(e) {
      this.search = e.target.value
    },
    formSubmit() {
      this.$router.push(`/seoulfree/search/${this.search}`)
    },
  },
}
</script>
