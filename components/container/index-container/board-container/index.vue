<template>
  <div>
    <div class="mt-4 md:flex md:space-x-4">
      <SeoulFree />
      <GlobalFree />
    </div>
    <div class="mt-4 md:flex md:space-x-4">
      <Wall />
      <Freshman />
    </div>
    <div class="mt-4 md:flex md:space-x-4">
      <Graduate />
      <Humor />
    </div>
    <div class="mt-4 md:flex md:space-x-4">
      <Issue />
      <Club />
    </div>
    <div class="bg-white rounded p-3 border border-gray-200 mt-4">
      <Advertisement />
    </div>
    <div class="mt-4 md:flex md:space-x-4">
      <Promotion />
      <BuyAndSell />
    </div>
    <div class="mt-4 md:flex md:space-x-4">
      <Book />
    </div>
  </div>
</template>

<script>
import Advertisement from '../../../advertisement/index.vue'
import SeoulFree from './seoulfree/SeoulFree.vue'
import GlobalFree from './globalfree/GlobalFree.vue'
import Wall from './wall/Wall.vue'
import Freshman from './freshman/Freshman.vue'
import Graduate from './graduate/Graduate.vue'
import Humor from './humor/Humor.vue'
import Issue from './issue/Issue.vue'
import Club from './club/Club.vue'
import Promotion from './promotion/Promotion.vue'
import BuyAndSell from './buyandsell/BuyAndSell.vue'
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
    Advertisement,
    Promotion,
    BuyAndSell,
    Book,
  },
}
</script>
