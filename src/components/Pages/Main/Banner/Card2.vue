<script setup></script>

<template>
    <div
        class="relative flex h-[213px] select-none items-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5 lg:h-[270px] xl:h-[213px] 2xl:h-[213px]"
    >
        <div class="relative z-20 flex h-full w-fit flex-col justify-center">
            <p class="text-start text-[22px] font-bold leading-6 text-white">
                Обнови <br />
                Steam аватар <br />
                и получай <br />
                ежедневные <br />
                выплаты
            </p>

            <button class="mt-auto flex h-[32px] w-fit items-center justify-center rounded-[8px] bg-[#BD52FD] px-[22px] text-[16px] uppercase text-[#101010]">Начать</button>
        </div>

        <img class="absolute right-0 top-0 z-10 h-full w-[165px] object-contain lg:w-auto" src="./assets/card1.png" alt="card-1" />
        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card1pattern.svg" alt="card-pattern" />
        <!-- Gradients -->
        <img class="absolute left-0 top-0 z-[1] h-full" src="./assets/card2light1.png" alt="card1light" />
        <img class="absolute left-0 top-0 z-[1] h-full" src="./assets/card2light.png" alt="card1light" />
    </div>
</template>
