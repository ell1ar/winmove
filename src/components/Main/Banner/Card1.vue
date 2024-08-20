<script setup>
import diamond from "./assets/diamond.svg";
import card1light from "./assets/card1light.svg";
</script>

<template>
    <div
        class="relative flex h-[213px] w-full select-none items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5 lg:h-[270px] xl:h-[176px] 2xl:h-[213px]"
    >
        <div class="relative z-10 flex flex-col items-center -space-y-5">
            <p class="uppercase text-white text-[22px]">Бонус</p>
            <div class="relative flex flex-nowrap font-['Stapel_Expanded'] text-[70px] text-white">
                <span>5</span>
                <span class="relative inline-flex items-center justify-center"
                    >0 <img class="absolute z-[2] mt-1" :src="diamond" alt="" /> <span class="absolute z-0 mt-1 h-10 w-10 rounded-full bg-white"></span>
                </span>
                <span class="relative inline-flex items-center justify-center"
                    >0 <img class="absolute z-[2] mt-1" :src="diamond" alt="" /> <span class="absolute z-0 mt-1 h-10 w-10 rounded-full bg-white"></span>
                </span>
                <span>%</span>
            </div>
            <p class="font-light text-white">на первый депозит</p>
        </div>

        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card2pattern.svg" alt="card-pattern" />
        <!-- Gradients -->
        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card1light.svg" alt="card-light" />
    </div>
</template>


