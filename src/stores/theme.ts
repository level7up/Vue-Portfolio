import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { usePreferredDark } from '@vueuse/core';

export const useThemeStore = defineStore('theme', () => {
  const preferredDark = usePreferredDark();
  const isDark = ref(preferredDark.value);

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  }

  function toggleTheme() {
    isDark.value = !isDark.value;
    updateTheme();
  }

  function updateTheme() {
    document.documentElement.classList.toggle('dark', isDark.value);
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  }

  // Watch for system theme changes
  watch(preferredDark, (newValue) => {
    if (localStorage.getItem('theme') === null) {
      isDark.value = newValue;
      updateTheme();
    }
  });

  // Initial theme application
  updateTheme();

  return {
    isDark,
    toggleTheme
  };
});