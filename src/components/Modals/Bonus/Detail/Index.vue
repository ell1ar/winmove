<script setup>
import { VueFinalModal } from "vue-final-modal";
import { useWindowSize } from "@vueuse/core";
import { ref } from "vue";
import ImageCurrencyUSDT from "@/assets/img/currency/usdt.png";

const { width } = useWindowSize();
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
</script>

<template>
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        :swipe-to-close="width < 1024 ? 'down' : 'none'"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="shrink-0 rounded-[25px] bg-[#141517] p-[15px] sm:w-[430px] sm:p-10">
            <h2 class="mb-[15px] text-[22px] font-normal leading-[26px] text-white [font-family:Stapel]">Детали бонуса</h2>

            <div v-for="i in 3" :key="i" class="mt-[20px] flex flex-col">
                <div class="flex justify-between">
                    <span class="text-[#707173]">
                        Депозит от
                        <strong class="text-[15px] font-bold text-[#D2D2D2]">$30,00</strong>
                    </span>

                    <div class="flex items-center gap-1">
                        <img class="h-[16px]" :src="ImageCurrencyUSDT" alt="usdt" />
                        <span class="text-[#D2D2D2]">30.0000000</span>
                    </div>
                </div>

                <div
                    class="mt-2.5 flex h-10 w-full shrink-0 items-center rounded-[10px] border border-solid border-[#232426] px-[15px] text-[#707173] [background:#1D1E20]"
                >
                    <span>
                        1.
                        <strong class="font-bold text-white">100%</strong>
                        на депозит
                    </span>
                </div>

                <div
                    class="mt-[5px] flex h-[59px] w-full shrink-0 flex-col justify-center rounded-[10px] border border-solid border-[#232426] px-[15px] text-[#707173] [background:#1D1E20]"
                >
                    <span>
                        2.
                        <strong class="font-bold text-white">25 фрибетов</strong>
                    </span>

                    <span>
                        Ставка на игру:
                        <strong class="font-bold text-white">$0,2</strong>
                    </span>
                </div>
            </div>

            <div class="mt-[25px] flex justify-between">
                <span class="font-bold text-[#707173]">Макс бонус на депозит</span>
                <span class="font-bold text-white">$2500</span>
            </div>
        </div>
    </VueFinalModal>
</template>
