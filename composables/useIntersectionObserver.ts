import { ref, onMounted, onUnmounted, type Ref } from 'vue';

/**
 * Composable para manejar IntersectionObserver de forma reutilizable
 * Sigue principios SOLID: Single Responsibility Principle
 *
 * @param elementRef - Referencia al elemento DOM a observar
 * @param options - Opciones para el IntersectionObserver
 * @returns isVisible - Estado reactivo que indica si el elemento es visible
 */
export function useIntersectionObserver(
  elementRef: Ref<HTMLElement | null>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  const setupObserver = (): void => {
    if (!elementRef.value) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
      });
    }, options);

    observer.observe(elementRef.value);
  };

  const cleanupObserver = (): void => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
      observer.disconnect();
      observer = null;
    }
  };

  onMounted(setupObserver);
  onUnmounted(cleanupObserver);

  return {
    isVisible,
  };
}
