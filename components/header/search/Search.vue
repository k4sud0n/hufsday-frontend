<template>
  <form class="md:ml-auto" @submit.prevent="formSubmit">
    <nav
      class="
        hidden
        md:block md:ml-auto
        flex flex-wrap
        items-center
        text-base
        justify-center
      "
    >
      <div class="absolute mt-2.5 ml-3.5">
        <svg
          class="w-5 h-5 text-gray-200 focus:text-navy"
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
      </div>
      <input
        placeholder="검색"
        type="text"
        class="
          rounded-full
          w-58
          h-10
          pl-10
          border border-gray-200
          text-sm
          p-3
          focus:border-navy focus:outline-none
        "
      />
    </nav>
    <div class="md:hidden">
      <div class="mt-2" @click="formSubmit">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    formSubmit() {
      this.$toast.info('현재 준비중인 기능입니다. 불편을 드려서 죄송합니다.', {
        timeout: 3000,
      })
    },
  },
}
</script>
