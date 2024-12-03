<script setup lang="ts">
import { useThemeStore } from '../stores/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

const themeStore = useThemeStore();
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
    aria-label="Toggle theme"
  >
    <transition
      name="fade"
      mode="out-in"
      class="flex items-center justify-center"
    >
      <SunIcon v-if="themeStore.isDark" class="h-5 w-5 text-yellow-500" />
      <MoonIcon v-else class="h-5 w-5 text-gray-700" />
    </transition>
  </button>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>