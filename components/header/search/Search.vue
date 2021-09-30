<template>
  <div class="md:ml-auto">
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
          class="w-5 h-5 text-gray-200"
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
        class="rounded-full w-58 h-10 pl-10 border border-gray-200 text-sm p-3"
      />
    </nav>
    <div class="md:hidden">
      <div class="mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
