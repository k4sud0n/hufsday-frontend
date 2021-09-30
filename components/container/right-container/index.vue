<template>
  <div class="hidden lg:block lg:flex-none lg:w-56">
    <UserInfo />
    <MyMenu />
    <Popular />
    <Advertisement />
    <Copyright />
  </div>
</template>

<script>
import UserInfo from './user-info/UserInfo.vue'
import MyMenu from './my-menu/MyMenu.vue'
import Popular from './popular/Popular.vue'
import Advertisement from './advertisement/Advertisement.vue'
import Copyright from './copyright/Copyright.vue'

export default {
  components: {
    UserInfo,
    MyMenu,
    Popular,
    Advertisement,
    Copyright,
  },
}
</script>
