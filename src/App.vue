<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import GalaxyBackground from './components/GalaxyBackground.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
    <GalaxyBackground />
    <div class="relative z-10">
      <Navigation />
      <main>
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>