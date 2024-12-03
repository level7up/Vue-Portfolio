<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const stars = ref<Star[]>([]);
const container = ref<HTMLDivElement | null>(null);
let animationFrame: number;

const createStar = (): Star => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size: Math.random() * 2 + 1,
  opacity: Math.random(),
  speed: Math.random() * 0.5 + 0.1
});

const initStars = () => {
  stars.value = Array.from({ length: 150 }, createStar);
};

const updateStars = () => {
  stars.value = stars.value.map(star => ({
    ...star,
    y: star.y + star.speed,
    opacity: star.y > window.innerHeight ? 0 : star.opacity
  }));

  stars.value = stars.value.map(star => 
    star.y > window.innerHeight ? { ...createStar(), y: -10 } : star
  );

  animationFrame = requestAnimationFrame(updateStars);
};

const handleMouseMove = (e: MouseEvent) => {
  if (!container.value) return;
  
  const rect = container.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  stars.value = stars.value.map(star => {
    const dx = x - star.x;
    const dy = y - star.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 100) {
      const angle = Math.atan2(dy, dx);
      return {
        ...star,
        x: star.x - Math.cos(angle) * 2,
        y: star.y - Math.sin(angle) * 2,
        opacity: Math.max(0, star.opacity - 0.1)
      };
    }
    return star;
  });
};

onMounted(() => {
  initStars();
  updateStars();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div
    ref="container"
    class="fixed inset-0 pointer-events-auto overflow-hidden z-0"
    @mousemove="handleMouseMove"
  >
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="absolute rounded-full bg-white transition-opacity duration-300"
      :style="{
        left: `${star.x}px`,
        top: `${star.y}px`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        transform: `scale(${1 + star.opacity * 0.5})`,
        boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.5})`
      }"
    ></div>
  </div>
</template>

<style scoped>
.star-container {
  background: linear-gradient(to bottom, #0f172a, #1e293b);
}
</style>