import { onBeforeMount, onMounted, onUnmounted, reactive, ref, toRefs } from "vue";

export function useResponsive() {
    const isMobile = ref(false);

    const browserResized = () => {
        isMobile.value = window.innerWidth < 1280;
    };

    onBeforeMount(() => {
        browserResized();
    });

    onMounted(() => {
        window.addEventListener("resize", browserResized);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", browserResized);
    });

    return {
        isMobile,
    };
}
