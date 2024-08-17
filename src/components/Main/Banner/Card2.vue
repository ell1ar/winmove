<script setup></script>

<template>
    <div class="relative flex h-[213px] w-full select-none items-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5">
        <div class="relative z-20 flex h-full w-fit flex-col justify-center">
            <p class="text-[22px] font-bold leading-6 text-white">
                Обнови <br />
                Steam аватар <br />
                и получай <br />
                ежедневные <br />
                выплаты
            </p>

            <button class="mt-auto flex h-[32px] w-fit items-center justify-center rounded-[8px] bg-[#BD52FD] px-[22px] text-[16px] uppercase text-[#101010]">Начать</button>
        </div>

        <img class="absolute right-0 top-0 z-10 h-full" src="./assets/card1.png" alt="card-1" />
        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card1pattern.svg" alt="card-pattern" />
        <!-- Gradients -->
        <div class="absolute left-0 z-0 h-[200px] w-[200px] -translate-x-[50%] rounded-full bg-[#BD52FD] opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 z-0 h-[200px] w-[300px] translate-x-[20%] translate-y-[40%] rounded-full bg-[#BD52FD] opacity-50 blur-3xl"></div>
    </div>
</template>

<style scoped></style>
