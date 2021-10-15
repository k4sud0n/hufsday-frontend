<template>
  <form
    class="p-6 bg-white rounded border border-gray-200"
    @submit="formSubmit"
  >
    <div class="font-semibold text-green-900">서울캠 자유게시판 글쓰기</div>
    <input
      class="px-4 py-2.5 mt-6 rounded border border-gray-200 text-sm w-full"
      type="text"
      placeholder="제목"
      :value="title"
      @input="changeTitle"
    />
    <textarea
      class="
        p-4
        mt-4
        rounded
        border border-gray-200
        text-sm
        p-2
        w-full
        resize-none
      "
      style="height: 30rem"
      placeholder="HUFSDAY는 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 전 커뮤니티 이용규칙 전문을 반드시 확인하시기 바랍니다. ※ 정치·사회 관련 행위 금지 - 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위 - 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위 - 성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위 - 위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위 * 해당 게시물은 시사·이슈 게시판에만 작성 가능합니다. ※ 홍보 및 판매 관련 행위 금지 - 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위 - 위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위 * 해당 게시물은 홍보게시판에만 작성 가능합니다. ※ 그 밖의 규칙 위반 - 타인의 권리를 침해하거나 불쾌감을 주는 행위 - 범죄, 불법 행위 등 법령을 위반하는 행위 - 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위 - 음란물, 성적 수치심을 유발하는 행위 - 스포일러, 공포, 속임, 놀라게 하는 행위 "
      :value="content"
      @input="changeContent"
    ></textarea>
    <button
      class="
        flex
        mt-4
        justify-center
        items-center
        px-4
        py-2
        rounded
        bg-transparent
        border border-green-900
        hover:bg-green-900 hover:text-white
        active:bg-green-800
        text-green-900
      "
    >
      <svg
        class="w-5 h-5"
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
      <div class="ml-1">쓰기</div>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      nickname: '',
    }
  },
  methods: {
    changeTitle(e) {
      this.title = e.target.value
    },
    changeContent(e) {
      this.content = e.target.value
    },
    async formSubmit(e) {
      e.preventDefault()

      await this.$client
        .get('/api/auth/check')
        .then((response) => {
          this.nickname = response.data.nickname
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.$router.push({ name: 'login' })
          }
        })

      await this.$client
        .post('/api/seoulfree/create', {
          title: this.title,
          content: this.content,
          nickname: this.nickname,
        })
        .then((response) => {
          this.$toast.success('글이 작성되었습니다.')
          this.$router.push(`/seoulfree/${response.data[0]}`)
        })
    },
  },
}
</script>
