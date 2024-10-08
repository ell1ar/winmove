<script setup>
import avatar from "@/assets/img/avatar.png";
const colors = ["orange", "white", "purple"];
</script>

<template>
    <div id="chat-head" class="mb-[20px] flex w-full gap-[5px]">
        <div class="flex h-[35px] w-full grow items-center rounded-[7px] bg-[#1B1C1E] px-[13px]">
            <div class="mr-1 h-1 w-1 rounded-full bg-[#A8A9AB]"></div>
            <span class="text-[13px] text-[#A8A9AB]">261</span>

            <div class="ml-auto flex items-center -space-x-[10px]">
                <div
                    v-for="i in 3"
                    :key="i"
                    class="h-[22px] w-[22px] rounded-full border-[1px] bg-[#0d0e11] bg-contain bg-center bg-no-repeat"
                    :class="[
                        colors[i - 1] === 'blue' && 'border-[#91E2FD]',
                        colors[i - 1] === 'orange' && 'border-[#F7BE4A]',
                        colors[i - 1] === 'yellow' && 'border-[#FDF74B]',
                        colors[i - 1] === 'purple' && 'border-[#BD52FD]',
                        colors[i - 1] === 'white' && 'border-[#F1F1F1]',
                    ]"
                    :style="{ 'background-image': 'url(' + avatar + ')' }"
                ></div>
            </div>
        </div>

        <button class="flex h-[35px] w-full items-center justify-center rounded-[7px] bg-[#1B1C1E] px-[30px] xl:w-[101px]">
            <span class="text-[14px] text-[#A8A9AB]">Правила</span>
        </button>

        <button @click="$emit('toggle-chat')" class="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[7px] bg-[#1B1C1E]">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="35.4326" height="35.4326" rx="7" fill="#1B1C1E" />
                <path d="M15.2324 22.6845L20.2006 17.7163L15.2324 12.7481" stroke="#A8A9AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>
