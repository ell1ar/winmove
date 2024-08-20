<script setup>
import ImageTg from "@/assets/img/auth/telegram.svg";
import ImageVk from "@/assets/img/auth/vk.svg";
import ImageGoogle from "@/assets/img/auth/google.svg";
import ImageSteam from "@/assets/img/auth/steam.svg";
import ImageRegisterLogo from "./assets/register-logo.png";
import ImageLightRegister from "./assets/light-register.svg";
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";
const isShowModalRegister = defineModel();

const options = ref({
    teleportTo: "body",
    displayDirective: "if",
    hideOverlay: false,
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
    clickToClose: true,
    escToClose: true,
    background: "non-interactive",
    lockScroll: true,
    reserveScrollBarGap: true,
    swipeToClose: "none",
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

const slectedTab = ref(0);
const tabs = [
    {
        title: "Регистрация",
    },
    {
        title: "Вход",
    },
];
</script>

<template>
    <VueFinalModal
        v-model="isShowModalRegister"
        :teleport-to="options.teleportTo"
        :display-directive="options.displayDirective"
        :hide-overlay="options.hideOverlay"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
        :click-to-close="options.clickToClose"
        :esc-to-close="options.escToClose"
        :background="options.background"
        :lock-scroll="options.lockScroll"
        :reserve-scroll-bar-gap="options.reserveScrollBarGap"
        :swipe-to-close="options.swipeToClose"
        class="!z-[10000] flex items-center justify-center"
    >
        <div class="relative flex h-[504px] w-[770px] items-center overflow-hidden rounded-[25px] bg-[#1B1C1E] px-[50px] pb-[50px] pt-[58px]">
            <img class="absolute left-0 top-0" :src="ImageLightRegister" alt="light register" />
            <img class="absolute left-5 aspect-square w-[285px]" :src="ImageRegisterLogo" alt="logo" />

            <div class="ml-auto flex h-full w-[372px] flex-col">
                <div class="mb-[20px] flex h-[40px] w-full rounded-[10px] bg-[#212224]">
                    <button
                        v-for="(button, index) in tabs"
                        class="flex w-full items-center justify-center px-[48px] text-[15px] uppercase"
                        :class="[slectedTab === index ? 'rounded-[10px] border-[1px] border-[#262729] bg-[#313234] text-white' : 'text-[#848587]']"
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

                <div class="mt-[10px] flex items-center gap-[15px]">
                    <div class="h-[1px] grow bg-[#262729]"></div>
                    <span class="text-[15px] font-medium text-[#626262]">или</span>
                    <div class="h-[1px] grow bg-[#262729]"></div>
                </div>

                <form action="#" class="space-y-[10px]">
                    <input
                        placeholder="Email"
                        type="email"
                        class="h-[45px] w-full rounded-[10px] bg-[#161719] px-[25px] text-white placeholder:text-[#999999] focus-visible:outline-none"
                    />

                    <div class="relative flex w-full items-center">
                        <input
                            placeholder="Пароль"
                            type="password"
                            class="h-[45px] w-full rounded-[10px] bg-[#161719] px-[25px] text-white placeholder:text-[#999999] focus-visible:outline-none"
                        />

                        <button class="absolute right-[16px]" type="button">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.99965 8.59058C10.5301 8.59058 11.7708 7.3499 11.7708 5.81945C11.7708 4.28899 10.5301 3.04831 8.99965 3.04831C7.4692 3.04831 6.22852 4.28899 6.22852 5.81945C6.22852 7.3499 7.4692 8.59058 8.99965 8.59058Z"
                                    fill="#454545"
                                />
                                <path
                                    d="M17.7239 5.05178C15.5938 2.47774 12.3694 0 9.00005 0C5.63 0 2.40484 2.47947 0.276161 5.05178C-0.0920537 5.49655 -0.0920537 6.14222 0.276161 6.58699C0.811337 7.23371 1.9333 8.4821 3.43179 9.57289C7.2057 12.3202 10.7861 12.3263 14.5683 9.57289C16.0668 8.4821 17.1888 7.23371 17.7239 6.58699C18.0911 6.14309 18.093 5.498 17.7239 5.05178ZM9.00005 1.9398C11.1394 1.9398 12.8796 3.68007 12.8796 5.81939C12.8796 7.9587 11.1394 9.69898 9.00005 9.69898C6.86073 9.69898 5.12045 7.9587 5.12045 5.81939C5.12045 3.68007 6.86073 1.9398 9.00005 1.9398Z"
                                    fill="#454545"
                                />
                            </svg>
                        </button>
                    </div>

                    <input
                        placeholder="Реферальный код (необязательно)"
                        type="text"
                        class="h-[45px] w-full rounded-[10px] bg-[#161719] px-[25px] text-white placeholder:text-[#999999] focus-visible:outline-none"
                    />
                </form>

                <button class="mt-auto h-[35px] w-full rounded-[8px] bg-[#FDF74B] text-[16px] uppercase text-[#101010]">Создать аккаунт</button>
            </div>
        </div>
    </VueFinalModal>
</template>
