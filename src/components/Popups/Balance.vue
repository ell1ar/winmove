<script setup>
import { ref } from "vue";
import usd from "./assets/usd.svg";
import wincoin from "./assets/wincoin.png";
import freegame from "./assets/freegame.png";
const activeButton = ref(0);
const buttons = [
    {
        cur: "USD",
        value: "$1 283.93208",
        icon: usd,
    },
    {
        cur: "Wincoin",
        value: "21.93 шт",
        icon: wincoin,
    },
    {
        cur: "Freegame",
        value: "20 шт",
        icon: freegame,
    },
];
</script>

<template>
    <div class="animate__animated animate__fadeIn flex w-[250px] flex-col gap-2 rounded-[15px] bg-[#161719] p-[15px] sm:w-[310px]">
        <button
            v-for="(button, i) in buttons"
            :key="i"
            @click="activeButton = i"
            class="flex h-[50px] items-center justify-between rounded-[10px] border-[1px] px-[15px] transition-colors duration-300"
            :class="[activeButton === i ? 'border-[#242527] bg-[#1D1E20]' : 'border-[#191A1C] bg-[#191A1C]']"
        >
            <div class="flex items-center gap-2">
                <img class="h-[25px w-[25px]" :src="button.icon" :alt="button.cu" />
                <span class="text-[14px] uppercase text-[#D4D4D4] sm:text-[16px]">{{ button.cur }}</span>
            </div>

            <span class="text-[14px] text-[#AFB0B2] sm:text-[16px]">{{ button.value }}</span>
        </button>
    </div>
</template>
