<script setup>
const { isShowSidebar } = defineProps(["isShowSidebar"]);
import { ref } from "vue";
import avatar from "@assets/img/avatar.png";
import iconBet from "./assets/iconBet.svg";
import iconBonus from "./assets/iconBonus.svg";
import iconGame from "./assets/iconGame.svg";
import iconMenu from "./assets/iconMenu.svg";
const isShowModalProfile = ref(false);
const isShowModalNotifications = ref(false);
const activeLink = ref(null);
const handleNotifications = () => {
    isShowModalProfile.value = false;
    isShowModalNotifications.value = true;
};

const handleClickMenu = (link) => {
    if (activeLink.value === link) {
        activeLink.value = null;
        return;
    }

    activeLink.value = link;
};
</script>

<template>
    <div class="flex h-[70px]">
        <div class="relative z-10 flex h-full w-full items-center justify-between rounded-[55px] border-[1px] border-[#232426] bg-[#1A1B1D] px-[22px]">
            <MobileNavBarItem :isActive="isShowSidebar" @click="$emit('toggle-sidebar')" :link="{ title: 'Меню', img: iconMenu }" />
            <MobileNavBarItem :isActive="activeLink === 'bonuses'" @click="() => handleClickMenu('bonuses')" :link="{ title: 'Бонусы', img: iconBonus }" />
            <MobileNavBarItem :isActive="activeLink === 'games'" @click="() => handleClickMenu('games')" :link="{ title: 'Игры', img: iconGame }" />
            <MobileNavBarItem :isActive="activeLink === 'bets'" @click="() => handleClickMenu('bets')" :link="{ title: 'Ставки', img: iconBet }" />

            <button @click="isShowModalProfile = !isShowModalProfile" class="flex flex-col items-center">
                <div
                    class="h-[36px] w-[36px] rounded-full border-[0.5px] border-[#FDF74B] bg-contain bg-center bg-no-repeat"
                    :style="{ 'background-image': 'url(' + avatar + ')' }"
                ></div>

                <span class="text-[11px] font-extrabold text-[#717171]">Профиль</span>
            </button>
        </div>

        <!-- Mobile menu -->
        <MobileNavBarMenuBonus v-if="activeLink === 'bonuses'" class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-0" />

        <!-- Mobile modals -->
        <ModalsProfile @notifications="handleNotifications" v-if="isShowModalProfile" class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-0" />
        <ModalsNotifications @close="isShowModalNotifications = false" v-if="isShowModalNotifications" class="absolute bottom-1/2 left-0 right-0 z-0" />
    </div>
</template>
