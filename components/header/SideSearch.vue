<template>
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <button
      class="absolute"
      style="margin-top: 0.05rem; margin-left: -4.5rem"
    >
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
    </button>
    <input
      placeholder="검색"
      type="text"
      class="rounded-full w-48 h-10 pl-10 border border-gray-200 text-sm p-3"
    />
  </nav>
</template>

<script>
export default {}
</script>
