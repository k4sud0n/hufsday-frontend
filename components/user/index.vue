<template>
  <div class="flex-grow">
    <div class="bg-white rounded border border-gray-200">
      <div class="flex justify-between items-center border-b border-gray-200">
        <div class="px-6 py-4 text-sm font-semibold text-green-900">
          내 정보
        </div>
      </div>

      <div class="flex justify-center items-center mt-8 mb-8">
        <div class="space-y-16">
          <div
            class="
              w-96
              h-56
              m-auto
              bg-red-100
              rounded-xl
              relative
              text-white
              shadow-2xl
              transition-transform
              transform
              hover:scale-110
            "
          >
            <img
              class="relative object-cover w-full h-full rounded-xl"
              src="@/static/image/user-info-bg.png"
            />

            <div class="w-full px-8 absolute top-8">
              <div class="flex justify-between">
                <div class="">
                  <p class="font-light">닉네임</p>
                  <p class="font-medium tracking-widest">{{ user.nickname }}</p>
                </div>
                <img class="w-14 h-14" src="@/static/image/school-logo.png" />
              </div>
              <div class="pt-1">
                <p class="font-light">학과</p>
                <p class="font-medium tracking-more-wider">{{ user.major }}</p>
              </div>
              <div class="pt-6 pr-6">
                <div class="flex justify-between">
                  <div class="">
                    <p class="font-light text-xs text-xs">캠퍼스</p>
                    <p class="font-medium tracking-wider text-sm">
                      {{ user.campus }}
                    </p>
                  </div>
                  <div class="">
                    <p class="font-light text-xs">학번</p>
                    <p class="font-medium tracking-wider text-sm">{{ user.class_of }}학번</p>
                  </div>

                  <div class="">
                    <p class="font-light text-xs">가입일</p>
                    <p class="font-bold tracking-more-wider text-sm">
                      {{ $dayjs(user.created).format('YYYY/MM/DD') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user,
    }
  },
}
</script>
