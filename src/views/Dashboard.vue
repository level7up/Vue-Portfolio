<script setup lang="ts">
import { usePortfolioStore } from '../stores/portfolio';
import { useThemeStore } from '../stores/theme';
import { ref } from 'vue';
import type { Project, Experience, Skill } from '../types/portfolio';

const portfolioStore = usePortfolioStore();
const themeStore = useThemeStore();

// Form states
const newProject = ref<Partial<Project>>({
  title: '',
  description: '',
  technologies: [],
  githubUrl: '',
  liveUrl: ''
});

const newExperience = ref<Partial<Experience>>({
  company: '',
  position: '',
  period: '',
  description: '',
  technologies: []
});

const newSkill = ref<Partial<Skill>>({
  name: '',
  category: '',
  level: 0
});

// Form handlers
const addProject = () => {
  if (newProject.value.title && newProject.value.description) {
    portfolioStore.projects.push({
      id: Date.now(),
      title: newProject.value.title!,
      description: newProject.value.description!,
      technologies: newProject.value.technologies || [],
      githubUrl: newProject.value.githubUrl,
      liveUrl: newProject.value.liveUrl
    });
    newProject.value = { technologies: [] };
  }
};

const addExperience = () => {
  if (newExperience.value.company && newExperience.value.position) {
    portfolioStore.experiences.push({
      id: Date.now(),
      company: newExperience.value.company!,
      position: newExperience.value.position!,
      period: newExperience.value.period!,
      description: newExperience.value.description!,
      technologies: newExperience.value.technologies || []
    });
    newExperience.value = { technologies: [] };
  }
};

const addSkill = () => {
  if (newSkill.value.name && newSkill.value.category) {
    portfolioStore.skills.push({
      id: Date.now(),
      name: newSkill.value.name!,
      category: newSkill.value.category!,
      level: newSkill.value.level || 0
    });
    newSkill.value = {};
  }
};

const removeProject = (id: number) => {
  const index = portfolioStore.projects.findIndex(p => p.id === id);
  if (index !== -1) portfolioStore.projects.splice(index, 1);
};

const removeExperience = (id: number) => {
  const index = portfolioStore.experiences.findIndex(e => e.id === id);
  if (index !== -1) portfolioStore.experiences.splice(index, 1);
};

const removeSkill = (id: number) => {
  const index = portfolioStore.skills.findIndex(s => s.id === id);
  if (index !== -1) portfolioStore.skills.splice(index, 1);
};
</script>

<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h2>
    
    <!-- Theme Settings -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Theme Settings</h3>
      <div class="flex items-center space-x-4">
        <span class="text-gray-700 dark:text-gray-300">Dark Mode</span>
        <button
          @click="themeStore.toggleTheme"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          {{ themeStore.isDark ? 'Disable' : 'Enable' }}
        </button>
      </div>
    </div>

    <!-- Projects Management -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Projects</h3>
      
      <!-- Add Project Form -->
      <form @submit.prevent="addProject" class="mb-6">
        <div class="grid grid-cols-1 gap-4">
          <input
            v-model="newProject.title"
            placeholder="Project Title"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            v-model="newProject.description"
            placeholder="Description"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
          <input
            v-model="newProject.technologies"
            placeholder="Technologies (comma-separated)"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <button type="submit" class="btn-primary">Add Project</button>
        </div>
      </form>

      <!-- Projects List -->
      <div class="space-y-4">
        <div
          v-for="project in portfolioStore.projects"
          :key="project.id"
          class="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md"
        >
          <span class="text-gray-900 dark:text-white">{{ project.title }}</span>
          <button
            @click="removeProject(project.id)"
            class="text-red-600 hover:text-red-800 dark:text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Experience Management -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h3>
      
      <!-- Add Experience Form -->
      <form @submit.prevent="addExperience" class="mb-6">
        <div class="grid grid-cols-1 gap-4">
          <input
            v-model="newExperience.company"
            placeholder="Company"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            v-model="newExperience.position"
            placeholder="Position"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            v-model="newExperience.period"
            placeholder="Period"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            v-model="newExperience.description"
            placeholder="Description"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
          <button type="submit" class="btn-primary">Add Experience</button>
        </div>
      </form>

      <!-- Experience List -->
      <div class="space-y-4">
        <div
          v-for="experience in portfolioStore.experiences"
          :key="experience.id"
          class="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md"
        >
          <span class="text-gray-900 dark:text-white">
            {{ experience.position }} at {{ experience.company }}
          </span>
          <button
            @click="removeExperience(experience.id)"
            class="text-red-600 hover:text-red-800 dark:text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Skills Management -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
      
      <!-- Add Skill Form -->
      <form @submit.prevent="addSkill" class="mb-6">
        <div class="grid grid-cols-1 gap-4">
          <input
            v-model="newSkill.name"
            placeholder="Skill Name"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            v-model="newSkill.category"
            placeholder="Category"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            v-model="newSkill.level"
            type="number"
            min="0"
            max="100"
            placeholder="Level (0-100)"
            class="rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          <button type="submit" class="btn-primary">Add Skill</button>
        </div>
      </form>

      <!-- Skills List -->
      <div class="space-y-4">
        <div
          v-for="skill in portfolioStore.skills"
          :key="skill.id"
          class="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md"
        >
          <span class="text-gray-900 dark:text-white">
            {{ skill.name }} ({{ skill.category }}) - {{ skill.level }}%
          </span>
          <button
            @click="removeSkill(skill.id)"
            class="text-red-600 hover:text-red-800 dark:text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>