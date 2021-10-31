<template>
  <form
    class="min-h-screen flex justify-center items-center"
    @submit.prevent="formSubmit"
  >
    <div>
      <div class="flex justify-center">
        <img src="@/static/image/logo.svg" class="w-14 h-14" />
      </div>
      <div
        class="
          mt-8
          rounded
          text-xs
          p-4
          border border-gray-200
          bg-white
          border-green-900
          overflow-auto
        "
        style="width: 21rem"
      >
        <div class="font-semibold text-green-900 text-sm">인증 안내</div>
        <div class="mt-1.5">
          HUFSDAY는
          <a href="http://wis.hufs.ac.kr" class="text-green-900">
            종합정보시스템(WIS)
          </a>
          으로 인증을 받으셔야 이용할 수 있습니다.
        </div>
        <div class="mt-1.5">
          회원님이 입력하신 종합정보시스템 아이디와 비밀번호는 절대 HUFSDAY
          서버에 저장되지 않습니다. 입력하신 정보는 회원님의 학번, 학부, 캠퍼스
          정보를 확인하는데 사용됩니다.
        </div>
      </div>
      <div class="mt-5 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">
          종합정보시스템 아이디
        </div>
        <input
          v-model="wis_id"
          placeholder="20XXXXXXX"
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
          required
        />
      </div>
      <div class="mt-3 text-sm">
        <div class="absolute px-4 py-3 font-semibold text-gray-500">
          종합정보시스템 비밀번호
        </div>
        <input
          v-model="wis_password"
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
          required
        />
      </div>
      <button
        class="
          w-full
          flex
          justify-center
          items-center
          mt-5
          text-sm
          rounded
          border border-gray-200
          bg-green-900
          p-3
          cursor-pointer
        "
      >
        <div class="font-semibold text-white">인증하기</div>
      </button>
      <div class="flex justify-center mt-5 text-xs text-gray-500">
        회원님, 인증에 문제가 있나요?
        <a
          href="mailto:contact@hufsday.com?subject=HUFSDAY 인증 문의"
          class="ml-0.5 text-green-900"
        >
          문의하기
        </a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      wis_id: '',
      wis_password: '',
    }
  },
  methods: {
    async formSubmit() {
      try {
        this.$nuxt.$loading.start()
        await this.$client
          .post('/api/auth/authorization', {
            wis_id: this.wis_id,
            wis_password: this.wis_password,
          })
          .then((result) => {
            if (result.data === 'success') {
              this.$nuxt.$loading.finish()
              this.$toast.success('인증 성공! 다시 로그인 해 주세요.', {
                timeout: 3000,
              })
              this.$auth.logout('local')
            }
          })
      } catch (error) {
        if (error.response.data === 'student_id_duplicate') {
          this.$nuxt.$loading.finish()
          this.$toast.error('이미 가입된 계정이 있습니다. 다시 확인해주세요.', {
            timeout: 3000,
          })
        } else {
          this.$nuxt.$loading.finish()
          this.$toast.error('인증 실패. 다시 시도해 주세요.', {
            timeout: 3000,
          })
        }
      }
    },
  },
}
</script>
