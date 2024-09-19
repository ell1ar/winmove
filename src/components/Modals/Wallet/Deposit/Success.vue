<script setup>
import ImageSuccess from "@/assets/img/shields/success.png";

const emit = defineEmits(["wait"]);
</script>

<template>
    <div class="flex w-full shrink-0 flex-col bg-[#101113] px-[30px] pb-[30px] pt-[20px] md:w-[612px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="Крипто депозит" />
        </div>

        <div class="relative mt-[30px] flex flex-col items-center overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] p-[30px]">
            <img class="-mt-14 aspect-square w-[300px] object-contain" :src="ImageSuccess" alt="success" />
            <h2 class="-mt-5 text-center text-[25px] font-normal text-[#84FD4B]">Успешно</h2>
            <p class="text-center text-base font-normal text-[#869481]">Депозит выполнен успешно!</p>
            <button
                @click="$emit('wait')"
                class="relative z-10 mt-[30px] flex h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#84FD4B] font-bold uppercase"
            >
                Далее
            </button>
            <div class="absolute inset-0 z-0 opacity-10 [background:linear-gradient(180deg,rgba(18,19,21,0.00)_-35.87%,#6EFF2A_306.89%)]"></div>
        </div>
    </div>
</template>
