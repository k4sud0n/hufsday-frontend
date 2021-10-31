<template>
  <form
    class="min-h-screen flex justify-center items-center"
    @submit.prevent="formSubmit"
  >
    학교인증
    <input v-model="wis_id" type="text" />
    <input v-model="wis_password" type="text" />
    <button>enter</button>
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
          this.$toast.error('이미 가입한 계정이 있습니다. 다시 확인해주세요.', {
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
