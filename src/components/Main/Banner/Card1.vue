<script setup>
import diamond from "./assets/diamond.svg";
</script>

<template>
    <div class="relative flex h-[213px] w-full select-none items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5">
        <div class="relative z-10 flex flex-col items-center -space-y-5">
            <p class="uppercase text-white">Бонус</p>
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
        <div class="absolute left-0 z-0 h-[200px] w-[200px] -translate-x-[50%] rounded-full bg-[#91E2FD] opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 z-0 h-[200px] w-[300px] translate-x-[20%] translate-y-[40%] rounded-full bg-[#91E2FD] opacity-50 blur-3xl"></div>
    </div>
</template>

<style scoped></style>
