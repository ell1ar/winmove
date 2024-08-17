<script setup>
const { isShowSidebar } = defineProps(["isShowSidebar"]);
import cs from "./assets/cs.svg";
import dota2 from "./assets/dota2.svg";
const list = [
    {
        content: `<img src="${cs}" alt="cs" />`,
    },
    {
        content: `<img src="${dota2}" alt="cs" />`,
    },
    {
        content: `История ставок`,
    },
];
</script>

<template>
    <div class="animate__animated animate__fadeIn flex gap-2 overflow-x-auto">
        <div
            v-for="(item, index) in list"
            :key="index"
            class="relative flex h-[60px] w-[164px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#1B1C1E] px-[10px]"
        >
            <span class="realtive z-10 text-[14px] text-[#E2E2E2]" v-html="item.content"></span>

            <!-- Gradients -->
            <div class="absolute left-0 top-0 h-12 w-24 -translate-x-8 -translate-y-8 -rotate-[35deg] rounded-full bg-[#FDF74B] opacity-60 blur-2xl"></div>
            <div class="absolute bottom-0 right-0 h-10 w-20 translate-x-4 translate-y-2 -rotate-[35deg] rounded-full bg-[#FDF74B] opacity-30 blur-xl"></div>
        </div>
    </div>
</template>
