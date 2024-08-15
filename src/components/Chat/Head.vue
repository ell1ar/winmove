<script setup>
import avatar from "@assets/img/avatar.png";
</script>

<template>
    <div class="flex gap-[5px] w-full mb-[20px]">
        <div class="grow h-[35px] rounded-[7px] bg-[#1B1C1E] flex items-center px-[13px]">
            <div class="rounded-full w-1 h-1 mr-1 bg-[#A8A9AB]"></div>
            <span class="text-[#A8A9AB] text-[13px]">261</span>

            <div class="flex items-center -space-x-[10px] ml-auto">
                <div v-for="i in 3" :key="i" class="rounded-full w-[22px] h-[22px] bg-no-repeat bg-contain bg-center bg-white/10" :style="{ 'background-image': 'url(' + avatar + ')' }"></div>
            </div>
        </div>

        <div class="w-[101px] rounded-[7px] h-[35px] bg-[#1B1C1E] flex items-center justify-center">
            <span class="text-[#A8A9AB] text-[14px]">Правила</span>
        </div>

        <div class="w-[35px] shrink-0 rounded-[7px] h-[35px] bg-[#1B1C1E] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="35.4326" height="35.4326" rx="7" fill="#1B1C1E" />
                <path d="M15.2324 22.6845L20.2006 17.7163L15.2324 12.7481" stroke="#A8A9AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>
