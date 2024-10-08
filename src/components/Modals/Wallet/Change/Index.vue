<script setup>
import ImageUSD from "@/assets/img/currency/usd.svg";
import ImageWM from "@/assets/img/wm.png";
</script>

<template>
    <div class="flex w-full grow flex-col bg-[#101113] px-[15px] pb-[15px] pt-[15px] md:w-[600px] md:px-[30px] md:pb-[30px] md:pt-[20px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="Обмен" />
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
