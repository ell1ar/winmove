<script setup>
import ImageLevelCardLightLeft from "./assets/levelCardLightLeft.png";
import ImageLevelCardLightRight from "./assets/levelCardLightRight.png";
import ImageLevelBg from "./assets/levelBg.png";
import pattern2 from "./assets/pattern2.svg";
</script>

<template>
    <div
        class="relative flex h-[241px] lg:h-[340px] w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] xl:h-[235px] 2xl:h-full"
        :style="{
            backgroundColor: `#101114`,
            backgroundImage: `url(${pattern2})`,
        }"
    >
        <div class="relative -mt-11 flex items-center justify-center md:-mt-9 2xl:-mt-6">
            <span class="absolute z-10 text-[33px] font-bold text-[#151823]">9</span>
            <img :src="ImageLevelBg" alt="ImageLevelBg" />
        </div>
        <h2 class="-mt-7 text-[20px] font-bold text-[#EBEBEB]">Уровень</h2>

        <span class="mt-[20px] inline-flex items-center text-[15px] md:mt-[5px] 2xl:mt-[52px]">
            <span class="text-[#D6D6D7]">$326 /</span> <span class="text-[#A8A9AB]">$705</span>
        </span>
        <p class="mt-0.5 text-[14px] font-medium text-[#A8A9AB]">До нового уровня</p>

        <img class="absolute bottom-0 left-0 z-10 h-full w-full" :src="ImageLevelCardLightLeft" alt="ImageLevelCardLightLeft" />
        <img class="absolute right-0 top-0 z-10 h-full w-full" :src="ImageLevelCardLightRight" alt="ImageLevelCardLightRight" />
    </div>
</template>
