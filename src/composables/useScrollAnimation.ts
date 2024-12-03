import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const target = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (!target.value) return;

    gsap.from(target.value, {
      scrollTrigger: {
        trigger: target.value,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  });

  return {
    target
  };
}