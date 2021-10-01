<template>
  <div class="hidden lg:block lg:flex-none lg:w-56">
    <UserInfo />
    <MyMenu />
    <Popular />
    <div class="bg-white rounded p-3 border border-gray-200 mt-4">
      <Advertisement />
    </div>
    <LectureEval />
    <Copyright />
  </div>
</template>

<script>
import Advertisement from '../../advertisement/index.vue'
import UserInfo from './user-info/UserInfo.vue'
import MyMenu from './my-menu/MyMenu.vue'
import Popular from './popular/Popular.vue'
import LectureEval from './lecture-eval/LectureEval.vue'
import Copyright from './copyright/Copyright.vue'

export default {
  components: {
    UserInfo,
    MyMenu,
    Popular,
    Advertisement,
    LectureEval,
    Copyright,
  },
}
</script>
