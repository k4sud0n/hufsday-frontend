<template>
  <div
    class="rounded border-t border-l border-r border-gray-200 overflow-hidden"
  >
    <div class="bg-green-900 text-white p-2.5">
      <svg
        class="w-5 h-5 float-left"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
      <div class="ml-6 text-sm">메뉴</div>
    </div>

    <div class="p-2 bg-green-100">
      <div class="text-green-900 font-medium text-sm">COMMUNITY</div>
    </div>

    <div
      v-for="menu in splitedCommunityMenus"
      :key="menu"
      class="p-1.5 bg-white border-b border-gray-200"
    >
      <svg
        class="w-4 h-4 text-green-900 float-left mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <div class="text-sm">{{ menu.title }}</div>
    </div>

    <div class="p-2 bg-green-100">
      <div class="text-green-900 font-medium text-sm">LIFE</div>
    </div>

    <div
      v-for="menu in splitedLifeMenus"
      :key="menu"
      class="p-1.5 bg-white border-b border-gray-200"
    >
      <svg
        class="w-4 h-4 text-green-900 float-left mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <div class="text-sm">{{ menu.title }}</div>
    </div>

    <div class="p-2 bg-green-100">
      <div class="text-green-900 font-medium text-sm">STUDY</div>
    </div>

    <div
      v-for="menu in splitedStudyMenus"
      :key="menu"
      class="p-1.5 bg-white border-b border-gray-200"
    >
      <svg
        class="w-4 h-4 text-green-900 float-left mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <div class="text-sm">{{ menu.title }}</div>
    </div>

    <div class="p-2 bg-green-100">
      <div class="text-green-900 font-medium text-sm">HOBBY</div>
    </div>

    <div
      v-for="menu in splitedHobbyMenus"
      :key="menu"
      class="p-1.5 bg-white border-b border-gray-200"
    >
      <svg
        class="w-4 h-4 text-green-900 float-left mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <div class="text-sm">{{ menu.title }}</div>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.json'

export default {
  data() {
    return {
      menus: MenuItem,
    }
  },
  computed: {
    splitedCommunityMenus() {
      return this.menus.slice(0, 7)
    },
    splitedLifeMenus() {
      return this.menus.slice(7, 12)
    },
    splitedStudyMenus() {
      return this.menus.slice(12, 17)
    },
    splitedHobbyMenus() {
      return this.menus.slice(17, 22)
    },
  },
}
</script>
