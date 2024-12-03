<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const isMenuOpen = ref(false);

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Dashboard', path: '/dashboard' }
];

const isCurrentRoute = computed(() => (path: string) => route.path === path);
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="hidden md:flex space-x-8">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
            :class="[
              isCurrentRoute(item.path)
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
          >
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>

        <div class="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden"
    >
      <div class="pt-2 pb-3 space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          class="block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-200"
          :class="[
            isCurrentRoute(item.path)
              ? 'bg-indigo-50 dark:bg-indigo-900 border-l-4 border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-l-4 border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          ]"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>