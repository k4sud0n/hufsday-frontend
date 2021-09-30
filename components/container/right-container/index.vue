<template>
  <div class="hidden lg:block lg:flex-none lg:w-56">
    <UserInfo />
    <MyMenu />
    <Popular />
    <Advertisement />
  </div>
</template>

<script>
import UserInfo from './user-info/UserInfo.vue'
import MyMenu from './my-menu/MyMenu.vue'
import Popular from './popular/Popular.vue'
import Advertisement from './advertisement/Advertisement.vue'

export default {
  components: {
    UserInfo,
    MyMenu,
    Popular,
    Advertisement,
  },
}
</script>
