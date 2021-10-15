<template>
  <form
    class="min-h-screen flex justify-center items-center"
    @submit="formSubmit"
  >
    <div>
      <div class="flex justify-center">
        <img src="@/static/image/logo.svg" class="w-14 h-14" />
      </div>
      <div class="mt-8 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">아이디</div>
        <input
          v-model="user_id"
          placeholder="ILOVEHUFSDAY"
          class="
            rounded
            h-10
            px-4
            pt-11
            pb-6
            border border-gray-200
            focus:border-green-900 focus:outline-none
          "
          type="text"
        />
      </div>
      <div class="mt-3 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">
          비밀번호
        </div>
        <input
          v-model="password"
          placeholder="•••••••••"
          class="
            rounded
            h-10
            px-4
            pt-11
            pb-6
            border border-gray-200
            focus:border-green-900 focus:outline-none
          "
          type="password"
        />
      </div>
      <div class="flex justify-between text-xs mt-1 p-2 text-gray-500">
        <div class="flex">
          <svg
            class="w-4 h-4 mr-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path></svg
          >로그인 유지
        </div>
        <div class="flex">
          <div class="mr-1.5">문의하기</div>
          <div>ID/PW 찾기</div>
        </div>
      </div>
      <button
        class="
          w-full
          flex
          justify-center
          items-center
          mt-3
          text-sm
          rounded
          border border-gray-200
          bg-green-900
          p-3
          cursor-pointer
        "
      >
        <div class="font-semibold text-white">로그인</div>
      </button>
      <div class="flex justify-center mt-5 text-xs text-gray-500">
        아직 HUFSDAY 계정이 없으신가요?
        <div class="ml-0.5 text-green-900">회원가입하기</div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async formSubmit(e) {
      e.preventDefault()

      try {
        await this.$client
          .post('/api/auth/login', {
            user_id: this.user_id,
            password: this.password,
          })
          .then((response) => {
            this.$toast.success('로그인 성공!')
            this.$router.push({ name: 'index' })
          })
      } catch (error) {
        this.$toast.error('아이디 또는 비밀번호를 다시 확인해주세요.')
      }
    },
  },
}
</script>
