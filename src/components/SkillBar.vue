<script setup lang="ts">
import type { Skill } from '../types/portfolio';

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <div class="mb-4">
    <div class="flex justify-between mb-1">
      <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
      <span class="text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
    </div>
    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        class="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
        :style="{ width: `${skill.level}%` }"
      ></div>
    </div>
  </div>
</template>