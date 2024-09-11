<script setup>
import ImageVisa from "@/assets/img/payment/visa.png";
import ImageMastercard from "@/assets/img/payment/mastercard.png";
import ImageSBP from "@/assets/img/payment/sbp.svg";
import ImageMir from "@/assets/img/payment/mir.svg";
import ImagePiastrix from "@/assets/img/payment/piastrix.svg";
</script>

<template>
    <div class="relative flex items-center gap-[15px]">
        <img class="w-[63px] h-[25px] shrink-0 object-contain" :src="ImageVisa" alt="visa" />
        <img class="w-[39px] h-[35px] shrink-0 object-contain" :src="ImageMastercard" alt="mastercard" />
        <img class="w-[75px] h-[41px] shrink-0 object-contain" :src="ImageSBP" alt="sbp" />
        <img class="w-[61px] h-[21px] shrink-0 object-contain" :src="ImageMir" alt="mir" />
        <img class="w-[98px] h-[37px] shrink-0 object-contain" :src="ImagePiastrix" alt="piastrix" />
    </div>
</template>
