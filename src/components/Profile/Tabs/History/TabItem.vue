<script setup>
import close from "@assets/img/close.svg";
import ImageTabItemLight from "./assets/tab-item-light.png";
const { img, title, isClosed } = defineProps(["img", "title", "isClosed"]);
</script>

<template>
    <div class="relative flex h-[60px] w-[172px] shrink-0 items-center overflow-hidden rounded-[10px] border-[1px] border-[#191A1C] bg-[#101113] px-[20px] grayscale">
        <h2 class="fonr-bold text-[18px] text-[#B5B5B3]">{{ title }}</h2>
        <img class="absolute right-0" :src="img" alt="img" />

        <div v-if="isClosed" class="absolute left-0 top-0 z-[3] flex h-full w-full items-center justify-center bg-[#08090C]/50 backdrop-blur-[2px]">
            <span class="inline-flex items-center justify-center gap-[7px]">
                <img :src="close" class="h-[23px] w-[23px]" alt="close" />
                <span class="text-[16px] font-bold text-white/[25%]">Скоро</span>
            </span>
        </div>

        <img class="absolute right-0 h-full w-full" :src="ImageTabItemLight" alt="ImageTabItemLight" />
    </div>
</template>
