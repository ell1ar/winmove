<script setup></script>

<template>
    <div
        class="relative flex h-[213px] select-none items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5 lg:h-[270px] xl:h-[213px] 2xl:h-[213px]"
    >
        <div class="relative z-10 flex flex-col items-center -space-y-5">
            <p class="text-[22px] uppercase text-white">Бонус</p>

            <div class="relative flex flex-nowrap font-['Stapel_Expanded'] text-[70px] text-white">
                <div class="relative flex items-center justify-center">
                    <span>5</span>
                </div>
                <div class="relative flex items-center justify-center">
                    <span>0</span>
                    <img class="absolute z-[2]" src="./assets/diamond.svg" alt="" />
                    <span class="absolute z-0 h-10 w-10 rounded-full bg-white"></span>
                </div>
                <div class="relative flex items-center justify-center">
                    <span>0</span>
                    <img class="absolute z-[2]" src="./assets/diamond.svg" alt="" />
                    <span class="absolute z-0 h-10 w-10 rounded-full bg-white"></span>
                </div>
                <div class="relative flex items-center justify-center">
                    <span>%</span>
                </div>
            </div>

            <p class="font-light text-white">на первый депозит</p>
        </div>

        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card2pattern.svg" alt="card-pattern" />
        <!-- Gradients -->
        <img class="absolute left-0 top-0 z-[1] h-full" src="./assets/card1light1.png" alt="card1light" />
        <img class="absolute bottom-0 right-0 z-[1] h-full" src="./assets/card1light.png" alt="card1light" />
    </div>
</template>
