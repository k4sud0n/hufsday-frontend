<template>
  <form
    class="min-h-screen flex justify-center items-center"
    @submit.prevent="formSubmit"
  >
    <div>
      <NuxtLink :to="{ name: 'login' }" class="flex justify-center">
        <img src="@/static/image/logo.svg" class="w-14 h-14" />
      </NuxtLink>
      <div class="mt-8 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">아이디</div>
        <input
          v-model="username"
          placeholder="최소 3자 이상, 영문자, 숫자, _만 입력 가능"
          class="
            rounded
            h-10
            px-4
            pt-11
            pb-6
            border border-gray-200
            focus:border-navy focus:outline-none
          "
          type="text"
          required
        />
      </div>
      <div class="mt-3 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">
          비밀번호
        </div>
        <input
          v-model="password"
          placeholder="4~16글자 이내"
          class="
            rounded
            h-10
            px-4
            pt-11
            pb-6
            border border-gray-200
            focus:border-navy focus:outline-none
          "
          type="password"
          required
        />
      </div>
      <div class="mt-3 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">닉네임</div>
        <input
          v-model="nickname"
          placeholder="공백없이 한글, 영문, 숫자만 입력 가능"
          class="
            rounded
            h-10
            px-4
            pt-11
            pb-6
            border border-gray-200
            focus:border-navy focus:outline-none
          "
          type="text"
          required
        />
      </div>
      <button
        class="
          w-full
          flex
          justify-center
          items-center
          mt-4
          text-sm
          rounded
          border border-gray-200
          bg-navy
          p-3
          cursor-pointer
        "
      >
        <div class="font-semibold text-white">회원가입</div>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    }
  },
  methods: {
    async formSubmit() {
      try {
        await this.$client
          .post('/api/auth/register', {
            username: this.username,
            password: this.password,
            nickname: this.nickname,
          })
          .then(() => {
            this.$toast.success('회원가입 성공!', { timeout: 3000 })
            this.$router.push({ name: 'login' })
          })
      } catch (error) {
        this.$toast.error(
          '중복된 아이디 또는 닉네임입니다. 다시 확인해주세요!',
          {
            timeout: 3000,
          }
        )
      }
    },
  },
}
</script>
