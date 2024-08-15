<script setup>
const { color, title } = defineProps(["color", "title"]);

const classes = {
    blue: {
        color: "#91E2FD",
    },
    yellow: {
        color: "#FDF74B",
    },
}[color];
</script>

<template>
    <div class="h-[60px] relative w-full rounded-[10px] border-[1px] border-[#191A1C] bg-[#141517] flex items-center overflow-hidden">
        <span class="w-[60px] h-full flex items-center justify-center z-10 relative">
            <slot name="image"></slot>
        </span>
        <span class="text-[#ffffff] uppercase text-[15px] font-bold">{{ title }}</span>
        <div class="w-[120px] h-[60px] absolute z-[0] -left-10 opacity-25 rounded-full blur-[20px]" :style="{ background: `radial-gradient(${classes.color}, #141517)` }"></div>
        <div class="w-[100px] h-[70px] absolute z-[0] -right-10 -bottom-10 opacity-25 rounded-full blur-[40px]" :style="{ 'background-color': classes.color }"></div>
    </div>
</template>
