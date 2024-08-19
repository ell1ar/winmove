<script setup></script>

<template>
    <div
        class="relative h-[167px] md:h-[201px] w-[318px] shrink-0 select-none overflow-hidden rounded-[20px] bg-white/10 bg-gradient-to-b from-[#1D2025] to-[#111111] p-[20px] sm:w-full sm:shrink xl:h-[176px] 2xl:h-[213px]"
    >
        <div class="relative z-20 flex h-full w-fit flex-col">
            <h2 class="text-[22px] leading-6 md:leading-normal text-white">
                Подпишись <br />
                и забирай <br />
                бонус
            </h2>

            <button class="mt-auto flex h-[32px] w-fit items-center justify-center rounded-[8px] bg-[#83DBF9] px-[22px] text-[16px] uppercase text-[#101010]">Подписаться</button>
        </div>

        <img class="absolute right-0 top-0 z-10 h-full" src="./assets/rightCard2.png" alt="right-Card" />
        <img class="absolute left-0 top-0 z-0 h-full w-full object-cover" src="./assets/rightCard2pattern.svg" alt="right-Card" />
        <!-- Gradients -->
        <div class="absolute -left-12 -top-4 z-0 h-[100px] w-[200px] -rotate-[35deg] rounded-full bg-[#91E2FD] opacity-70 blur-2xl"></div>
        <div class="absolute right-0 top-0 z-0 h-full w-1/2 bg-gradient-to-l from-[#91E2FD] opacity-40 blur-2xl"></div>
    </div>
</template>

<style scoped></style>
