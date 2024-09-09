<script setup>
import ImageTg from "@/assets/img/auth/telegram.svg";
import ImageVk from "@/assets/img/auth/vk.svg";
import ImageGoogle from "@/assets/img/auth/google.svg";
import ImageSteam from "@/assets/img/auth/steam.svg";
import ImageRegisterLogo from "../assets/register-logo.png";
import ImageLightRegister from "../assets/light-register.svg";
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});

const links = [
    {
        img: ImageGoogle,
    },
    {
        img: ImageTg,
    },
    {
        img: ImageVk,
    },
    {
        img: ImageSteam,
    },
];

const tabs = ref([
    {
        title: "Регистрация",
    },
    {
        title: "Вход",
    },
]);
const slectedTab = ref(0);
</script>

<template>
    <VueFinalModal v-model="isOpen" swipe-to-close="down" :overlay-transition="options.overlayTransition" :content-transition="options.contentTransition">
        <div
            class="relative flex w-full items-center overflow-hidden rounded-t-[25px] bg-[#1B1C1E] px-[20px] pb-[20px] pt-[20px] xl:w-[770px] xl:rounded-b-[25px] xl:px-[50px] xl:pb-[50px] xl:pt-[58px]"
        >
            <img class="absolute left-0 top-0 hidden xl:block" :src="ImageLightRegister" alt="light register" />
            <img class="absolute left-5 hidden aspect-square w-[285px] xl:block" :src="ImageRegisterLogo" alt="logo" />

            <div class="flex h-full w-full flex-col xl:ml-auto xl:w-[372px]">
                <template v-if="[0, 1].includes(slectedTab)">
                    <div class="mb-[20px] flex justify-end xl:hidden">
                        <button @click="isOpen = false">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.23234 12.9185C0.913628 12.9371 0.600176 12.8311 0.358078 12.623C-0.119359 12.1427 -0.119359 11.3671 0.358078 10.8868L10.8124 0.432433C11.309 -0.0322305 12.0882 -0.00640016 12.5528 0.490176C12.973 0.939228 12.9975 1.62943 12.6102 2.10711L2.09427 12.623C1.85532 12.8281 1.54687 12.9339 1.23234 12.9185Z"
                                    fill="#2E2F31"
                                />
                                <path
                                    d="M11.6739 12.9186C11.3509 12.9172 11.0413 12.789 10.812 12.5615L0.357612 2.1071C-0.0847085 1.59057 -0.0245726 0.813226 0.491955 0.370865C0.952969 -0.0239309 1.63287 -0.0239309 2.09385 0.370865L12.6097 10.8252C13.1062 11.29 13.1319 12.0692 12.6671 12.5657C12.6486 12.5855 12.6295 12.6045 12.6097 12.623C12.4824 12.7338 12.3335 12.8172 12.1726 12.8681C12.0116 12.9189 11.8418 12.9361 11.6739 12.9186Z"
                                    fill="#2E2F31"
                                />
                            </svg>
                        </button>
                    </div>

                    <div class="mb-[20px] flex h-[40px] w-full rounded-[10px] bg-[#212224]">
                        <button
                            v-for="(button, index) in tabs"
                            class="flex w-full items-center justify-center px-[34px] text-[15px] uppercase xl:px-[48px]"
                            :class="[slectedTab === index ? 'rounded-[10px] border-[1px] border-[#313234] bg-[#292A2C] text-white' : 'text-[#848587]']"
                            :key="index"
                            @click="slectedTab = index"
                        >
                            <span>{{ button.title }}</span>
                        </button>
                    </div>

                    <div class="grid grid-cols-4 gap-2">
                        <a href="#" v-for="(link, index) in links" :key="index" class="flex h-[40px] w-full items-center justify-center rounded-[9px] bg-[#212224]">
                            <img :src="link.img" alt="social" />
                        </a>
                    </div>

                    <div class="my-[10px] flex items-center gap-[15px]">
                        <div class="h-[1px] grow bg-[#262729]"></div>
                        <span class="text-[13px] font-medium text-[#626262] sm:text-[15px]">или</span>
                        <div class="h-[1px] grow bg-[#262729]"></div>
                    </div>
                </template>

                <ModalsRegisterContentRegister @verify="slectedTab = 2" v-if="slectedTab === 0" />
                <ModalsRegisterContentLogin v-if="slectedTab === 1" />
                <ModalsRegisterContentVerify @close="isOpen = false" @login="slectedTab = 0" v-if="slectedTab === 2" />
            </div>
        </div>
    </VueFinalModal>
</template>
