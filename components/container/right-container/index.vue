<template>
  <div class="invisible md:visible sm:invisible md:flex-none md:w-56">
    <UserInfo />
  </div>
</template>

<script>
import UserInfo from './user-info/UserInfo.vue'

export default {
  components: {
    UserInfo,
  },
}
</script>
