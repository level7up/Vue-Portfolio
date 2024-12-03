<script setup lang="ts">
import type { Experience } from '../types/portfolio';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const props = defineProps<{
  experience: Experience;
}>();

const { target } = useScrollAnimation();
</script>

<template>
  <div
    ref="target"
    class="card hover-lift"
  >
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white animated-border inline-block">
        {{ experience.position }}
      </h3>
      <p class="text-lg text-gray-700 dark:text-gray-300">{{ experience.company }}</p>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ experience.period }}</p>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        {{ experience.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in experience.technologies"
          :key="tech"
          class="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>