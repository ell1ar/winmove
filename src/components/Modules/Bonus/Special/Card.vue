<script setup>
import ImageLightL from "./assets/light-l.png";
const { imgSrc, desc } = defineProps(["imgSrc", "desc"]);
</script>

<template>
    <div
        class="relative flex h-[207px] w-[318px] shrink-0 overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] bg-[#121315] p-[15px] md:w-[344px] md:p-6"
    >
        <div class="relative z-10 flex w-full flex-col">
            <div class="flex items-center gap-[13px] md:-mt-[9px]">
                <img class="h-[55px]" :src="imgSrc" alt="" />

                <div class="-mt-1 flex flex-col">
                    <h2 class="text-[13px] font-medium text-[#A8A9AB]">Signup bonus</h2>
                    <span class="text-[17px] text-[#E8E8E8]">{{ desc }}</span>
                </div>
            </div>

            <div class="mt-auto flex flex-col gap-[5px] text-[13px] text-[#8B8C8E]">
                <div class="flex justify-between">
                    <span>Минимальный депозит</span>
                    <span>$10</span>
                </div>

                <div class="flex justify-between">
                    <span>Максимальная ставка</span>
                    <span>$0.2</span>
                </div>
            </div>

            <div class="mt-[18px] grid grid-cols-2 gap-2.5">
                <button class="flex h-[32px] w-full items-center justify-center rounded-[8px] bg-[#FDF74B] text-[16px] font-bold uppercase text-[#101010]">
                    Депозит
                </button>
                <div class="flex h-[32px] w-full items-center justify-center rounded-[8px] border-white/[2%] bg-white/[3%] text-[13px] text-[#7F8082]">
                    5 дней 02:28:48
                </div>
            </div>
        </div>

        <button class="absolute right-[24px] top-[21px] z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                    d="M6.5 0C2.91581 0 0 2.91581 0 6.5C0 10.0842 2.91581 13 6.5 13C10.0842 13 13 10.0842 13 6.5C13 2.91578 10.0842 0 6.5 0ZM6.5 11.7C3.63276 11.7 1.3 9.36724 1.3 6.5C1.3 3.63276 3.63276 1.3 6.5 1.3C9.36724 1.3 11.7 3.63276 11.7 6.5C11.7 9.36724 9.36724 11.7 6.5 11.7ZM7.15 3.9C7.15 4.25895 6.859 4.55 6.5 4.55C6.141 4.55 5.85 4.25897 5.85 3.9C5.85 3.541 6.141 3.25 6.5 3.25C6.859 3.25 7.15 3.541 7.15 3.9ZM7.15 5.85V9.1C7.15 9.45897 6.85897 9.75 6.5 9.75C6.14105 9.75 5.85 9.45897 5.85 9.1V5.85C5.85 5.49105 6.14105 5.2 6.5 5.2C6.85897 5.2 7.15 5.49103 7.15 5.85Z"
                    fill="#57585A"
                />
            </svg>
        </button>

        <img class="absolute left-0 top-0 z-0 h-full w-full" :src="ImageLightL" alt="light" />
    </div>
</template>
