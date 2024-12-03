<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import SkillBar from '../components/SkillBar.vue';
import { computed } from 'vue';

const portfolioStore = usePortfolioStore();

const skillsByCategory = computed(() => {
  const categories: Record<string, typeof portfolioStore.skills> = {};
  portfolioStore.skills.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });
  return categories;
});
</script>

<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(skills, category) in skillsByCategory" :key="category">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {{ category }}
        </h3>
        <SkillBar
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
        />
      </div>
    </div>
  </div>
</template>