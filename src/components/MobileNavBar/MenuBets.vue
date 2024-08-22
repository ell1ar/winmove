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
            <svg class="absolute left-0 top-0" xmlns="http://www.w3.org/2000/svg" width="124" height="60" viewBox="0 0 124 60" fill="none">
                <g opacity="0.3" filter="url(#filter0_f_1283_47938)">
                    <ellipse cx="90.3073" cy="46.7865" rx="90.3073" ry="46.7865" transform="matrix(0.914235 -0.405185 0.555469 0.831537 -157 -21.8176)" fill="#FDF74B" />
                </g>
                <defs>
                    <filter id="filter0_f_1283_47938" x="-220.628" y="-158.513" width="344.358" height="278.018" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="42.8" result="effect1_foregroundBlur_1283_47938" />
                    </filter>
                </defs>
            </svg>

            <svg class="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="164" height="60" viewBox="0 0 164 60" fill="none">
                <g opacity="0.3" filter="url(#filter0_f_1283_47941)">
                    <ellipse cx="90.3073" cy="46.7865" rx="90.3073" ry="46.7865" transform="matrix(0.914235 -0.405185 0.555469 0.831537 20 88.1824)" fill="#FDF74B" />
                </g>
                <defs>
                    <filter id="filter0_f_1283_47941" x="-43.6283" y="-48.513" width="344.358" height="278.018" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="42.8" result="effect1_foregroundBlur_1283_47941" />
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
</template>
