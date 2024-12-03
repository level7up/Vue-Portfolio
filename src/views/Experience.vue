<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import ExperienceCard from '../components/ExperienceCard.vue';

const portfolioStore = usePortfolioStore();
</script>

<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
    <div class="space-y-6">
      <ExperienceCard
        v-for="experience in portfolioStore.experiences"
        :key="experience.id"
        :experience="experience"
      />
    </div>
  </div>
</template>