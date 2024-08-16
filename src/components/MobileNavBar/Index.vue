<script setup>
const { isShowSidebar } = defineProps(["isShowSidebar"]);
import { ref } from "vue";
import avatar from "@assets/img/avatar.png";
import iconBet from "./assets/iconBet.svg";
import iconBonus from "./assets/iconBonus.svg";
import iconGame from "./assets/iconGame.svg";
import iconMenu from "./assets/iconMenu.svg";
const isShowModalProfile = ref(false);
const isShowModalSettings = ref(false);
const isShowModalLang = ref(false);
const isShowModalNotifications = ref(false);
</script>

<template>
    <div class="flex h-[70px] items-center justify-between rounded-[55px] border-[1px] border-[#232426] bg-[#1A1B1D] px-[22px]">
        <MobileNavBarItem :isActive="isShowSidebar" @click="$emit('toggle-sidebar')" :link="{ title: 'Меню', img: iconMenu }" />
        <MobileNavBarItem :link="{ title: 'Бонусы', img: iconBonus }" />
        <MobileNavBarItem :link="{ title: 'Игры', img: iconGame }" />
        <MobileNavBarItem :link="{ title: 'Ставки', img: iconBet }" />

        <button @click="isShowModalProfile = !isShowModalProfile" class="flex flex-col items-center">
            <div
                class="h-[36px] w-[36px] rounded-full border-[0.5px] border-[#FDF74B] bg-contain bg-center bg-no-repeat"
                :style="{ 'background-image': 'url(' + avatar + ')' }"
            ></div>

            <span class="text-[11px] font-extrabold text-[#717171]">Профиль</span>
        </button>

        <!-- Mobile modals -->
        <ModalsProfile v-if="isShowModalProfile" class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-[9999]" />
        <ModalsSettings v-if="isShowModalSettings" class="absolute bottom-[87px] z-[9999]" />
    </div>
</template>
