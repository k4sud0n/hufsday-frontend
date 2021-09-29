<template>
  <div>
    <div class="mt-4 flex space-x-4">
      <SeoulFree />
      <GlobalFree />
    </div>
    <div class="mt-4 flex space-x-4">
      <Wall />
      <Freshman />
    </div>
    <div class="mt-4 flex space-x-4">
      <Graduate />
      <Humor />
    </div>
    <div class="mt-4 flex space-x-4">
      <Issue />
      <Club />
    </div>
    <div class="mt-4 flex space-x-4">
      <Promotion />
      <SellAndBuy />
    </div>
    <div class="mt-4 flex space-x-4">
      <Book />
    </div>
  </div>
</template>

<script>
import SeoulFree from './seoul-free/SeoulFree.vue'
import GlobalFree from './global-free/GlobalFree.vue'
import Wall from './wall/Wall.vue'
import Freshman from './freshman/Freshman.vue'
import Graduate from './graduate/Graduate.vue'
import Humor from './humor/Humor.vue'
import Issue from './issue/Issue.vue'
import Club from './club/Club.vue'
import Promotion from './promotion/Promotion.vue'
import SellAndBuy from './sell-and-buy/SellAndBuy.vue'
import Book from './book/Book.vue'

export default {
  components: {
    SeoulFree,
    GlobalFree,
    Wall,
    Freshman,
    Graduate,
    Humor,
    Issue,
    Club,
    Promotion,
    SellAndBuy,
    Book,
  },
}
</script>
