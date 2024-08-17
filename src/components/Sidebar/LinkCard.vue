<script setup>
const { isFull, color, title } = defineProps(["isFull", "color", "title"]);

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
    <div
        class="relative flex w-full items-center overflow-hidden rounded-[10px] border-[1px] border-[#191A1C] bg-[#141517]"
        :class="[isFull ? 'h-[60px]' : 'h-[50px] w-[50px] justify-center']"
    >
        <span class="relative z-10 flex h-full items-center justify-center" :class="[isFull ? 'w-[60px]' : 'w-[30px]']">
            <slot name="image"></slot>
        </span>

        <template v-if="isFull">
            <span class="text-[15px] font-bold uppercase text-[#ffffff]">{{ title }}</span>
            <div class="absolute -left-10 z-[0] h-[60px] w-[120px] rounded-full opacity-25 blur-[20px]" :style="{ background: `radial-gradient(${classes.color}, #141517)` }"></div>
            <div class="absolute -bottom-10 -right-10 z-[0] h-[70px] w-[100px] rounded-full opacity-25 blur-[40px]" :style="{ 'background-color': classes.color }"></div>
        </template>

        <template v-if="!isFull">
            <div class="absolute -left-10 z-[0] h-[60px] w-[120px] rounded-full opacity-25 blur-[20px]" :style="{ background: `radial-gradient(${classes.color}, #141517)` }"></div>
        </template>
    </div>
</template>
