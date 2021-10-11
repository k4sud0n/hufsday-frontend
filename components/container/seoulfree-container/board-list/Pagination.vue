<template>
  <div class="flex justify-center mt-4">
    <nav
      class="relative z-0 inline-flex rounded -space-x-px"
      aria-label="Pagination"
    >
      <div v-if="pageNumber === 1">
        <button
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
      </div>
      <div v-else>
        <button
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
      </div>
      <div v-for="page in totalPages" :key="page">
        <div v-if="page === pageNumber">
          <button
            class="
              z-10
              bg-green-50
              border-green-500
              text-green-900
              relative
              inline-flex
              items-center
              px-4
              py-2
              border
              text-sm
              font-medium
            "
            @click="moveToPage(page)"
          >
            {{ page }}
          </button>
        </div>
        <div v-else>
          <button
            class="
              bg-white
              border-gray-200
              text-gray-500
              hover:bg-gray-50
              relative
              inline-flex
              items-center
              px-4
              py-2
              border
              text-sm
              font-medium
            "
            @click="moveToPage(page)"
          >
            {{ page }}
          </button>
        </div>
      </div>
      <div v-if="pageNumber === totalPages">
        <button
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
      </div>
      <div v-else>
        <button
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
      </div>
    </nav>
  </div>
</template>
