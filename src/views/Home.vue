<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import ProjectCard from '../components/ProjectCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
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

const personalInfo = {
  name: 'Abdulalim Mohamed',
  title: 'Software Engineer',
  description: 'Passionate software engineer with expertise in web development and cloud technologies.',
  location: 'San Francisco, CA',
  email: 'john.doe@example.com',
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe'
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          {{ personalInfo.name }}
        </h1>
        <p class="mt-3 text-xl text-gray-600 dark:text-gray-300">
          {{ personalInfo.title }}
        </p>
        <p class="mt-3 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          {{ personalInfo.description }}
        </p>
        <div class="mt-8 flex justify-center space-x-4">
          <a
            :href="personalInfo.github"
            target="_blank"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            :href="personalInfo.linkedin"
            target="_blank"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-gray-100 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            v-for="project in portfolioStore.projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <div class="space-y-6">
          <ExperienceCard
            v-for="experience in portfolioStore.experiences"
            :key="experience.id"
            :experience="experience"
          />
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 bg-gray-100 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  </div>
</template>