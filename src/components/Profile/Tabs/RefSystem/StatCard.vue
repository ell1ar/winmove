<script setup>
import pattern1 from "./assets/pattern1.svg";
import statCardLightLeft from "./assets/statCardLightLeft.png";
import statCardLightRight from "./assets/statCardLightRight.png";
const { icon, value, title } = defineProps(["icon", "value", "title"]);
</script>

<template>
    <div
        class="relative flex h-[75px] w-full flex-row items-center gap-[15px] overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] p-[15px] max-md:[background-color:#121316] md:h-[134px] md:flex-col md:justify-center md:gap-0 lg:h-[164px] xl:h-[136px]"
        :style="{
            backgroundImage: 'url(' + pattern1 + ')',
        }"
    >
        <div class="relative z-10 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[13px] border-[1px] border-white/[2%] bg-white/[3%]">
            <component :is="icon"></component>
        </div>

        <div class="flex flex-col justify-center md:mt-[16px] md:items-center">
            <span class="relative z-10 text-[15px] font-bold text-[#D7D7D7] md:text-[17px]">{{ value }}</span>
            <p class="relative z-10 mt-[2px] text-[12px] font-medium text-[#A8A9AB] md:text-[14px]">{{ title }}</p>
        </div>

        <img class="absolute bottom-0 left-0 z-0 h-full w-full" :src="statCardLightLeft" alt="" />
        <img class="absolute right-0 top-0 z-0 h-full w-full" :src="statCardLightRight" alt="" />
    </div>
</template>
