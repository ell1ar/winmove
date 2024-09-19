<script setup>
import IconChange from "@/components/icons/IconChange.vue";
</script>

<template>
    <div class="flex w-[600px] flex-col bg-[#101113] px-[30px] pb-[30px] pt-[20px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <h2 class="text-[20px] font-bold text-[#DFDFDF]">Обмен</h2>
        </div>

        <div class="mt-[30px] flex items-center gap-[7px]">
            <ModalsWalletChangeInput title="Количество" />
            <IconChange />
            <ModalsWalletChangeInput title="Вы получите" />
        </div>

        <button class="mt-[20px] flex h-[40px] items-center justify-center rounded-[8px] bg-[#84FD4B] text-[16px] uppercase text-[#101010]">Совершить обмен</button>
    </div>
</template>
