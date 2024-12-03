import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Project, Experience, Skill } from '../types/portfolio';

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref<Project[]>([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      technologies: ['Vue.js', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/example/ecommerce',
      liveUrl: 'https://example-ecommerce.com'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/example/task-manager'
    }
  ]);

  const experiences = ref<Experience[]>([
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      period: '2020 - Present',
      description: 'Leading development of cloud-native applications',
      technologies: ['Vue.js', 'AWS', 'Node.js']
    },
    {
      id: 2,
      company: 'Digital Innovations Ltd',
      position: 'Software Engineer',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple web applications',
      technologies: ['React', 'Python', 'PostgreSQL']
    }
  ]);

  const skills = ref<Skill[]>([
    { id: 1, name: 'Vue.js', category: 'Frontend', level: 90 },
    { id: 2, name: 'React', category: 'Frontend', level: 85 },
    { id: 3, name: 'Node.js', category: 'Backend', level: 80 },
    { id: 4, name: 'Python', category: 'Backend', level: 75 },
    { id: 5, name: 'AWS', category: 'Cloud', level: 70 }
  ]);

  return {
    projects,
    experiences,
    skills
  };
});