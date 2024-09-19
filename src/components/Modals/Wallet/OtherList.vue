<script setup>
import ImageVisa from "@/assets/img/payment/visa.png";
import ImageMastercard from "@/assets/img/payment/mastercard.png";
import ImageSBP from "@/assets/img/payment/sbp.svg";
import ImageMir from "@/assets/img/payment/mir.svg";
import ImagePiastrix from "@/assets/img/payment/piastrix.svg";
const { list } = defineProps(["list"]);
</script>

<template>
    <div class="relative flex items-center gap-[15px]">
        <img v-if="list.includes('visa')" class="h-[25px] w-[63px] shrink-0 object-contain" :src="ImageVisa" alt="visa" />
        <img v-if="list.includes('mastercard')" class="h-[35px] w-[39px] shrink-0 object-contain" :src="ImageMastercard" alt="mastercard" />
        <img v-if="list.includes('sbp')" class="h-[41px] w-[75px] shrink-0 object-contain" :src="ImageSBP" alt="sbp" />
        <img v-if="list.includes('mir')" class="h-[21px] w-[61px] shrink-0 object-contain" :src="ImageMir" alt="mir" />
        <img v-if="list.includes('piastrix')" class="h-[37px] w-[98px] shrink-0 object-contain" :src="ImagePiastrix" alt="piastrix" />
    </div>
</template>
