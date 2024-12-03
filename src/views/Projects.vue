<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import ProjectCard from '../components/ProjectCard.vue';

const portfolioStore = usePortfolioStore();
</script>

<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in portfolioStore.projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>