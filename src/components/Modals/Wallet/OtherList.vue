<script setup>
import ImageVisa from "@/assets/img/payment/visa.png";
import ImageMastercard from "@/assets/img/payment/mastercard.png";
import ImageSBP from "@/assets/img/payment/sbp.svg";
import ImageMir from "@/assets/img/payment/mir.svg";
import ImagePiastrix from "@/assets/img/payment/piastrix.svg";
const { list } = defineProps(["list"]);
</script>

<template>
    <div class="relative flex items-center gap-[9px] md:gap-[15px]">
        <img v-if="list.includes('visa')" class="h-[19px] w-[45px] shrink-0 object-contain md:h-[25px] md:w-[63px]" :src="ImageVisa" alt="visa" />
        <img v-if="list.includes('mastercard')" class="h-[23px] w-[29px] shrink-0 object-contain md:h-[35px] md:w-[39px]" :src="ImageMastercard" alt="mastercard" />
        <img v-if="list.includes('sbp')" class="h-[29px] w-[54px] shrink-0 object-contain md:h-[41px] md:w-[75px]" :src="ImageSBP" alt="sbp" />
        <img v-if="list.includes('mir')" class="h-[17px] w-[42px] shrink-0 object-contain md:h-[21px] md:w-[61px]" :src="ImageMir" alt="mir" />
        <img v-if="list.includes('piastrix')" class="h-[25px] w-[70px] shrink-0 object-contain md:h-[37px] md:w-[98px]" :src="ImagePiastrix" alt="piastrix" />
    </div>
</template>
