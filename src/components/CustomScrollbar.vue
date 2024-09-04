<template>
    <div class="scrollbar-container h-[5px] w-full cursor-pointer rounded-[2px] bg-white/[11%] sm:h-2" ref="scrollbarContainer" @mousedown="startDrag">
        <div class="scrollbar-thumb h-full rounded-[2px] bg-[#7F8082]" :style="thumbStyle"></div>
    </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";
const props = defineProps({
    target: {
        type: Object,
        required: true,
    },
});

const target = reactive(props.target);
const scrollbarContainer = ref(null);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const targetScrollLeft = ref(0);
const scrollbarContainerWidth = ref(0);

const thumbStyle = computed(() => ({
    width: `${thumbWidth.value}px`,
    transform: `translateX(${thumbPosition.value}px)`,
}));

const thumbWidth = computed(() => {
    if (target && scrollbarContainerWidth.value) {
        const rat = target.scrollWidth / target.offsetWidth;
        return scrollbarContainerWidth.value / rat;
    }
    return 0;
});

const thumbPosition = computed(() => {
    if (target && scrollbarContainerWidth.value) {
        const rat = target.scrollWidth / scrollbarContainerWidth.value;
        return targetScrollLeft.value / rat;
    }
    return 0;
});

const startDrag = (event) => {
    isDragging.value = true;
    startX.value = event.clientX;
    scrollLeft.value = target.scrollLeft;
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
};

const onDrag = (event) => {
    if (!isDragging.value) return;
    const x = event.clientX - startX.value;
    const walk = (x / scrollbarContainerWidth.value) * target.scrollWidth;
    target.scrollLeft = scrollLeft.value + walk;
    targetScrollLeft.value = target.scrollLeft;
};

const stopDrag = () => {
    isDragging.value = false;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
};

onMounted(() => {
    nextTick(() => {
        scrollbarContainerWidth.value = scrollbarContainer.value.offsetWidth;
    });
});
</script>

<style scoped></style>
