<script setup>
import ImageError from "@/assets/img/shields/error.png";
</script>

<template>
    <div class="flex w-full shrink-0 flex-col bg-[#101113] px-[15px] pb-[15px] pt-[15px] md:w-[612px] md:px-[30px] md:pb-[30px] md:pt-[20px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="Крипто депозит" />
        </div>

        <div class="relative mt-[20px] flex flex-col items-center overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] p-[15px] md:mt-[30px] md:p-[30px]">
            <img class="-mt-14 aspect-square w-[300px] object-contain" :src="ImageError" alt="fail" />
            <h2 class="-mt-5 text-center text-[25px] font-normal text-[#F33D48]">Упс...</h2>
            <p class="text-center text-base font-normal text-[#948181]">Кажется что-то пошло не так!!</p>
            <button
                @click="$emit('error')"
                class="relative z-10 mt-[30px] flex h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#F33D48] font-bold uppercase"
            >
                Попробовать снова
            </button>
            <div class="absolute inset-0 z-0 opacity-10 [background:linear-gradient(180deg,rgba(18,19,21,0.00)_-35.87%,#F33D48_306.89%)]"></div>
        </div>
    </div>
</template>
