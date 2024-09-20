<script setup>
import ImageBTC from "@/assets/img/payment/btc.png";
import ImageTether from "@/assets/img/payment/tether.png";
import ImageETH from "@/assets/img/payment/eth.png";
import ImageTron from "@/assets/img/payment/tron.png";
import ImageBNB from "@/assets/img/payment/bnb.png";
import ImageSolana from "@/assets/img/payment/solana.png";
</script>

<template>
    <div class="relative flex items-center -space-x-[5px] md:-space-x-[10px]">
        <img class="aspect-square w-[28px] md:w-[38px] shrink-0 object-contain" :src="ImageBTC" alt="btc" />
        <img class="aspect-square w-[28px] md:w-[38px] shrink-0 object-contain" :src="ImageTether" alt="tether" />
        <img class="aspect-square w-[28px] md:w-[38px] shrink-0 object-contain" :src="ImageETH" alt="eth" />
        <img class="aspect-square w-[28px] md:w-[38px] shrink-0 object-contain" :src="ImageTron" alt="tron" />
        <img class="aspect-square w-[28px] md:w-[38px] shrink-0 object-contain" :src="ImageBNB" alt="bnb" />
        <img class="aspect-square w-[28px] md:w-[38px] shrink-0 object-contain" :src="ImageSolana" alt="solana" />

        <span class="absolute -right-5 z-10 text-[18px] font-medium text-[#91E2FD]">30+</span>
        <div class="absolute right-0 top-0 z-0 h-full w-24 bg-gradient-to-l from-[#141517]"></div>
    </div>
</template>
