<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
const emit = defineEmits(["close"]);
const style = {
    "background-image":
        "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%23333' stroke-width='1' stroke-dasharray='12%2c4' stroke-dashoffset='22' stroke-linecap='butt'/%3e%3c/svg%3e\")",
};
</script>

<template>
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        swipe-to-close="down"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="flex w-full flex-col items-center rounded-[25px] bg-[#1B1C1E] px-[15px] lg:px-[55px] py-[42px]">
            <div
                class="flex h-[291px] w-full flex-col items-center justify-center rounded-[15px] bg-[#191A1C] px-[18px]"
                :style="{
                    'background-image': style['background-image'],
                }"
            >
                <p class="text-[14px] lg:text-[15px] font-normal text-[#999999] text-center">Выберите файл или перетащите сюда</p>
                <p class="text-[14px] lg:text-[15px] font-medium text-[#999999] text-center mt-[15px] lg:mt-0">Формат PNG/JPEG/JPG и максимальный размер 5 МБ.</p>
                <button class="mt-[30px] h-[35px] text-[#101010] px-[27.5px] shrink-0 uppercase bg-[#FDF74B] rounded-[8px]">Выбрать файл </button>
            </div>
        </div>
    </VueFinalModal>
</template>
