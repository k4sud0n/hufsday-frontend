<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="flex md:mx-20 p-3 justify-between">
      <List />
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <Search />
    </div>
  </header>
</template>

<script>
import List from './list/List.vue'
import Logo from './logo/Logo.vue'
import Search from './search/Search.vue'

export default {
  components: {
    List,
    Logo,
    Search,
  },
}
</script>
