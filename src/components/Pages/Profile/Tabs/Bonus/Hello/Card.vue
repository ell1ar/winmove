<script setup>
import ImageFB from "@/assets/img/fb.png";
import ImageFG from "@/assets/img/fg.png";
import ImagePattern from "./assets/pattern.svg";
import { ref } from "vue";

const isOpenModalBonusDetail = ref(false);
const { isDisabled } = defineProps(["isDisabled"]);
</script>

<template>
    <div
        class="flex h-[207px] w-[318px] shrink-0 grow flex-col rounded-[20px] border-[1px] border-[#191A1C] p-6 md:w-[344px] 2xl:w-fit"
        :style="{
            background: `url(${ImagePattern}), linear-gradient(247deg, #27282B -50.72%, rgba(16, 17, 20, 0.93) 34.85%, rgba(16, 17, 20, 0.93) 69.18%, #26272A 213.38%)`,
        }"
    >
        <div class="grid grid-cols-2">
            <div class="flex flex-col">
                <h2 class="inline-flex items-center gap-[5px] text-[14px] text-[#A8A9AB]">
                    Первый депозит

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path
                                d="M6.5 0C2.91581 0 0 2.91581 0 6.5C0 10.0842 2.91581 13 6.5 13C10.0842 13 13 10.0842 13 6.5C13 2.91578 10.0842 0 6.5 0ZM6.5 11.7C3.63276 11.7 1.3 9.36724 1.3 6.5C1.3 3.63276 3.63276 1.3 6.5 1.3C9.36724 1.3 11.7 3.63276 11.7 6.5C11.7 9.36724 9.36724 11.7 6.5 11.7ZM7.15 3.9C7.15 4.25895 6.859 4.55 6.5 4.55C6.141 4.55 5.85 4.25897 5.85 3.9C5.85 3.541 6.141 3.25 6.5 3.25C6.859 3.25 7.15 3.541 7.15 3.9ZM7.15 5.85V9.1C7.15 9.45897 6.85897 9.75 6.5 9.75C6.14105 9.75 5.85 9.45897 5.85 9.1V5.85C5.85 5.49105 6.14105 5.2 6.5 5.2C6.85897 5.2 7.15 5.49103 7.15 5.85Z"
                                fill="#57585A"
                            />
                        </svg>
                    </button>
                </h2>

                <strong class="text-[38px] font-bold text-[#EBEBEB]">150%</strong>

                <span class="text-[14px] text-[#A8A9AB]">бонус</span>
            </div>

            <div class="flex flex-col items-end gap-3">
                <div class="flex items-center gap-2">
                    <img class="w-[30px]" :src="ImageFB" alt="fg" />
                    <span class="whitespace-nowrap text-[13px] text-[#A8A9AB]">+25 фрибетов</span>
                </div>
                <div class="flex items-center gap-2">
                    <img class="w-[30px]" :src="ImageFG" alt="fg" />
                    <span class="whitespace-nowrap text-[13px] text-[#A8A9AB]">+25 фригеймс</span>
                </div>
            </div>
        </div>

        <div class="mt-auto flex gap-2.5">
            <button
                @click="isOpenModalBonusDetail = true"
                :class="isDisabled ? 'cursor-not-allowed opacity-50' : ''"
                class="flex h-[32px] w-full items-center justify-center rounded-[8px] bg-[#FDF74B] text-[16px] font-bold uppercase text-[#101010]"
                :disabled="isDisabled"
            >
                Депозит
            </button>

            <ModalsBonusDetailIndex
                v-model="isOpenModalBonusDetail"
                class="flex items-end justify-center md:items-center"
                content-class="sm:mx-auto left-[15px] fixed sm:relative right-[15px] sm:w-fit sm:left-none sm:right-none"
                @close="isOpenModalBonusDetail = false"
            />

            <div
                v-if="!isDisabled"
                class="flex h-[32px] w-full items-center justify-center rounded-[8px] border-white/[2%] bg-white/[3%] text-[13px] text-[#7F8082]"
            >
                5 дней 02:28:48
            </div>
        </div>
    </div>
</template>
