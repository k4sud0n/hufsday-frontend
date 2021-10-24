<template>
  <div>
    <form
      class="
        flex
        text-xs
        mt-4
        ml-7
        -mb-2
        rounded
        border border-gray-200
        overflow-hidden
      "
      @submit.prevent="formSubmit"
    >
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

export default {
  props: {
    postId: {
      type: Number,
      default: 0,
    },
    parentId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      content: '',
    }
  },
  methods: {
    changeContent: _.debounce(function (e) {
      this.content = e.target.value
    }, 150),
    async formSubmit() {
      await this.$client
        .post(`/api/seoulfree/${this.postId}/comments/create`, {
          parentId: this.parentId,
          postCreatorId: this.postCreatorId,
          content: this.content,
        })
        .then(() => {
          this.content = ''
          this.$parent.$fetch()
        })
    },
  },
}
</script>
