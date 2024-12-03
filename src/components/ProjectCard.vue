<script setup lang="ts">
import type { Project } from '../types/portfolio';
import { useScrollAnimation } from '../composables/useScrollAnimation';

const props = defineProps<{
  project: Project;
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
        {{ project.title }}
      </h3>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        {{ project.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
        >
          {{ tech }}
        </span>
      </div>
      <div class="mt-4 flex space-x-4">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 animated-border"
        >
          GitHub
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 animated-border"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>