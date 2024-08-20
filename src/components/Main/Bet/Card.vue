<script setup>
import navi from "./assets/navi.png";
import navi2 from "./assets/navi2.png";
</script>

<template>
    <div class="rounded-[20px] flex flex-col items-center grow p-[15px] border-[1px] border-[#222325]">
        <div class="grid grid-cols-3 w-full place-content-stretch">
            <div class="flex flex-col items-center justify-between">
                <img :src="navi" alt="team image" />
                <p class="text-[13px] text-[#ACACAC] mt-auto text-center leading-4">Natus Vincere</p>
            </div>

            <div class="flex flex-col items-center text-center">
                <h2 class="text-[#BCBCBC] text-[14px]">21:03 MSK</h2>
                <p class="text-[#4C4D4F] text-[12px] ">30 июня 2024</p>
                <strong class="text-[22px] text-[#1E1E1E] -mb-[5px]">VS</strong>
            </div>

            <div class="flex flex-col items-center justify-between">
                <img :src="navi2" alt="team image" />
                <p class="text-[13px] text-[#ACACAC] mt-auto text-center leading-4">Natus Vincere</p>
            </div>
        </div>

        <p class="text-[12px] text-[#4C4D4F] mt-[14px] mb-2.5 text-center leading-4">PGL CS2 Major Copenhagen 2024</p>

        <button class="h-[40px] w-full flex items-center justify-center rounded-[10px] overflow-hidden p-[1.5px] bg-gradient-to-b from-[#898630] to-[#36351f]">
            <div class="w-full h-full relative flex items-center justify-center rounded-[9px] text-[14px] bg-[#17181A] text-[#FDF74B] uppercase">
                <span>Сделать ставку</span>
                <div class="absolute z-0 bg-[#FDF74B] blur-lg opacity-20 rounded-[100%] w-2/3 h-2/3"></div>
            </div>
        </button>
    </div>
</template>
