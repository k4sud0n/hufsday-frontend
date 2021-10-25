<template>
  <div
    class="
      opacity-90
      flex
      justify-around
      md:hidden
      sticky
      bottom-0
      bg-white
      border-t border-gray-200
      text-sm
    "
  >
    <NuxtLink :to="{ name: 'index' }" class="py-4">
      <svg
        class="w-6 h-6 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        ></path>
      </svg>
    </NuxtLink>
    <NuxtLink :to="{ name: 'user-notification' }" class="py-4">
      <svg
        class="w-6 h-6 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
        ></path>
      </svg>
    </NuxtLink>
    <NuxtLink :to="{ name: 'user-message' }" class="py-4">
      <svg
        class="w-6 h-6 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        ></path>
        <path
          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
        ></path>
      </svg>
    </NuxtLink>
    <NuxtLink :to="{ name: 'user' }" class="py-3">
      <div
        class="
          rounded-full
          bg-gray-200
          h-8
          w-8
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img class="object-cover" :src="profileImageSrc" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import ProfileImage from '../../static/image/profile/profile.png'

export default {
  data() {
    return {
      profileImageSrc: ProfileImage,
    }
  },
}
</script>
