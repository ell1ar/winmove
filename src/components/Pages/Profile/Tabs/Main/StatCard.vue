<script setup>
import statCardPattern from "./assets/statCardPattern.svg";
const { icon, value, title } = defineProps(["icon", "value", "title"]);
</script>

<template>
    <div
        class="relative flex h-[75px] w-full flex-row items-center gap-[15px] rounded-[20px] border-[1px] border-[#191A1C] p-[15px] md:h-[160px] md:flex-col md:justify-center md:gap-0"
        :style="{
            background: `url(${statCardPattern}),linear-gradient(45deg, #131417 0%, #0f1013 50%, #17181b 100%)`,
        }"
    >
        <div class="relative z-10 h-[60px] w-[60px] rounded-[13px] border-[1px] border-white/[3%] bg-white/[5%] p-4">
            <component :is="icon"></component>
        </div>

        <div class="flex flex-col justify-center md:mt-[16px] md:items-center">
            <span class="relative z-10 text-[17px] font-bold text-[#D7D7D7]">{{ value }}</span>
            <p class="relative z-10 mt-[2px] text-[14px] font-medium text-[#A8A9AB]">{{ title }}</p>
        </div>
    </div>
</template>
