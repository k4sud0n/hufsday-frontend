<template>
  <div class="flex-1 bg-white rounded border border-gray-200">
    <div
      class="
        flex
        px-3
        py-2
        border-b border-gray-200
        text-green-900
        font-semibold
      "
    >
      <div class="mt-1 text-sm">서울캠 자유게시판</div>
      <NuxtLink class="ml-auto" :to="{ name: 'seoulfree' }">
        <button
          class="
            rounded
            bg-transparent
            border border-green-900
            hover:bg-green-900 hover:text-white
            active:bg-green-800
            text-green-900
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
      <div class="border-b border-gray-200 px-3 py-2.5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adi..
      </div>
      <div class="border-b border-gray-200 px-3 py-2.5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adi..
      </div>
      <div class="border-b border-gray-200 px-3 py-2.5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adi..
      </div>
      <div class="px-3 py-2.5 text-sm">
        Lorem ipsum dolor sit amet, consectetur adi..
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
