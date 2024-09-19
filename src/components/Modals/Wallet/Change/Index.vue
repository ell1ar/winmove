<script setup>
import IconChange from "@/components/icons/IconChange.vue";
import ImageWM from "@/assets/img/wm.png";
import ImageUSD from "@/assets/img/currency/usd.svg";
</script>

<template>
    <div class="flex w-full flex-col bg-[#101113] px-[30px] pb-[30px] pt-[20px] md:w-[600px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <h2 class="text-[20px] font-bold text-[#DFDFDF]">Обмен</h2>
        </div>

        <div class="mt-[20px] flex flex-col items-center gap-[7px] md:mt-[30px] md:flex-row">
            <ModalsWalletChangeInput class="w-full" title="Количество">
                <template #left>
                    <img class="mr-[15px] w-[30px] object-contain" :src="ImageWM" alt="wm" />
                </template>
                <template #right>
                    <button class="ml-auto flex h-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[#17181A] px-[12px] text-[13px] uppercase text-[#C9C9C9]">
                        <span>Макс</span>
                    </button>
                </template>
            </ModalsWalletChangeInput>

            <IconChange class="max-md:rotate-[90deg]" />

            <ModalsWalletChangeInput class="w-full" title="Вы получите">
                <template #left>
                    <img class="mr-[15px] w-[30px] object-contain" :src="ImageUSD" alt="usd" />
                </template>
            </ModalsWalletChangeInput>
        </div>

        <button class="mt-[20px] flex h-[40px] items-center justify-center rounded-[8px] bg-[#84FD4B] text-[16px] uppercase text-[#101010]">Совершить обмен</button>
    </div>
</template>
