<template>
  <span>
    <div
      class="
        fixed
        flex
        top-0
        h-screen
        z-50
        left-0
        flex-row-reverse
        bg-white
        overflow-hidden
      "
    >
      <div
        class="
          w-60
          h-auto
          transition-all
          duration-500
          border-r border-gray-200
          overflow-auto
        "
        :class="[open ? 'max-w-lg' : 'max-w-0']"
      >
        <NuxtLink
          :to="{ name: 'index' }"
          class="flex justify-center p-7"
          @click.native="closeMobileMenu"
        >
          <img src="@/static/image/logo.svg" class="w-9 h-9" />
        </NuxtLink>

        <div
          :class="[
            'flex items-center justify-between px-5 py-3 border-t border-gray-200 text-sm hover:bg-gray-50 font-semibold',
            communityChevron ? 'border-b' : null,
          ]"
          @click="rotateCommunityChevron"
        >
          <span><span class="text-red-600">C</span>OMMUNITY</span>
          <div
            :class="[
              'transform transition duration-500 ease-in-out',
              communityChevron ? 'rotate-180' : null,
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div v-show="communityChevron" class="py-3">
          <div v-for="menu in splitedCommunityMenus" :key="menu.id">
            <NuxtLink
              :to="menu.link"
              @click.native="closeMobileMenu('community')"
            >
              <div
                :class="[
                  'text-sm px-9 p-2 hover:bg-gray-50',
                  communityChevron ? 'animate-fade-in-down' : null,
                ]"
              >
                {{ menu.title }}
              </div>
            </NuxtLink>
          </div>
        </div>

        <div
          :class="[
            'flex items-center justify-between px-5 py-3 border-t border-gray-200 text-sm hover:bg-gray-50 font-semibold',
            lifeChevron ? 'border-b' : null,
          ]"
          @click="rotateLifeChevron"
        >
          <span><span class="text-yellow-600">L</span>IFE</span>
          <span
            :class="[
              'transform transition duration-500 ease-in-out',
              lifeChevron ? 'rotate-180' : null,
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>

        <div v-show="lifeChevron" class="py-3">
          <div v-for="menu in splitedLifeMenus" :key="menu.id">
            <NuxtLink :to="menu.link" @click.native="closeMobileMenu('life')">
              <div
                :class="[
                  'text-sm px-9 p-2 hover:bg-gray-50',
                  lifeChevron ? 'animate-fade-in-down' : null,
                ]"
              >
                {{ menu.title }}
              </div>
            </NuxtLink>
          </div>
        </div>

        <div
          :class="[
            'flex items-center justify-between px-5 py-3 border-t border-gray-200 text-sm hover:bg-gray-50 font-semibold',
            studyChevron ? 'border-b' : null,
          ]"
          @click="rotateStudyChevron"
        >
          <span><span class="text-green-600">S</span>TUDY</span>
          <span
            :class="[
              'transform transition duration-500 ease-in-out',
              studyChevron ? 'rotate-180' : null,
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>

        <div v-show="studyChevron" class="py-3">
          <div v-for="menu in splitedStudyMenus" :key="menu.id">
            <NuxtLink :to="menu.link" @click.native="closeMobileMenu('study')">
              <div
                :class="[
                  'text-sm px-9 p-2 hover:bg-gray-50',
                  studyChevron ? 'animate-fade-in-down' : null,
                ]"
              >
                {{ menu.title }}
              </div>
            </NuxtLink>
          </div>
        </div>

        <div
          :class="[
            'flex items-center justify-between px-5 py-3 border-t border-gray-200 text-sm hover:bg-gray-50 font-semibold',
            hobbyChevron ? 'border-b' : null,
          ]"
          @click="rotateHobbyChevron"
        >
          <span><span class="text-blue-600">H</span>OBBY</span>
          <span
            :class="[
              'transform transition duration-500 ease-in-out',
              hobbyChevron ? 'rotate-180' : null,
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>

        <div v-show="hobbyChevron" class="py-3">
          <div v-for="menu in splitedHobbyMenus" :key="menu.id">
            <NuxtLink :to="menu.link" @click.native="closeMobileMenu('hobby')">
              <div
                :class="[
                  'text-sm px-9 p-2 hover:bg-gray-50',
                  hobbyChevron ? 'animate-fade-in-down' : null,
                ]"
              >
                {{ menu.title }}
              </div>
            </NuxtLink>
          </div>
        </div>

        <div
          :class="[
            'flex items-center justify-between px-5 py-3 border-t border-b border-gray-200 text-sm hover:bg-gray-50 font-semibold',
          ]"
          @click="rotateLinksChevron"
        >
          <span><span class="text-purple-600">L</span>INKS</span>
          <span
            :class="[
              'transform transition duration-500 ease-in-out',
              linksChevron ? 'rotate-180' : null,
            ]"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>

        <div v-show="linksChevron" class="py-3">
          <div v-for="menu in quicklinks" :key="menu.id">
            <a :href="menu.link" target="_blank">
              <div
                :class="[
                  'text-sm px-9 p-2 hover:bg-gray-50',
                  linksChevron ? 'animate-fade-in-down' : null,
                ]"
              >
                {{ menu.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-gray-900 bg-opacity-20 transition-opacity z-40"
        aria-hidden="true"
        @click="toggle()"
      ></div>
    </transition>
  </span>
</template>

<script>
import MenuItem from '@/components/left-menu/menu/MenuItem.json'
import QuickLinkItem from '@/components/left-menu/quick-link/QuickLinkItem.json'

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menus: MenuItem,
      quicklinks: QuickLinkItem,
      communityChevron: false,
      lifeChevron: false,
      studyChevron: false,
      hobbyChevron: false,
      linksChevron: false,
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
      return this.menus.slice(12, 18)
    },
    splitedHobbyMenus() {
      return this.menus.slice(18, 23)
    },
  },
  methods: {
    toggle() {
      this.$parent.toggle()
    },
    closeMobileMenu(menu) {
      if (menu === 'community') {
        this.rotateCommunityChevron()
      } else if (menu === 'life') {
        this.rotateLifeChevron()
      } else if (menu === 'study') {
        this.rotateStudyChevron()
      } else if (menu === 'hobby') {
        this.rotateHobbyChevron()
      } else if (menu === 'links') {
        this.rotateLinksChevron()
      }

      this.toggle()
    },
    rotateCommunityChevron() {
      this.communityChevron = !this.communityChevron
    },
    rotateLifeChevron() {
      this.lifeChevron = !this.lifeChevron
    },
    rotateStudyChevron() {
      this.studyChevron = !this.studyChevron
    },
    rotateHobbyChevron() {
      this.hobbyChevron = !this.hobbyChevron
    },
    rotateLinksChevron() {
      this.linksChevron = !this.linksChevron
    },
  },
}
</script>
