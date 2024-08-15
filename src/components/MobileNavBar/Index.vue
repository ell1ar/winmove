<script setup>
import iconMenu from "./assets/iconMenu.svg";
import iconBonus from "./assets/iconBonus.svg";
import iconGame from "./assets/iconGame.svg";
import iconBet from "./assets/iconBet.svg";
import avatar from "@assets/img/avatar.png";
</script>

<template>
    <div class="h-[70px] bg-[#1A1B1D] flex items-center justify-between rounded-[55px] border-[1px] border-[#232426] px-[22px]">
        <MobileNavBarItem @click="$emit('toggle-sidebar')" :link="{ title: 'Меню', img: iconMenu }" />
        <MobileNavBarItem :link="{ title: 'Бонусы', img: iconBonus }" />
        <MobileNavBarItem :link="{ title: 'Игры', img: iconGame }" />
        <MobileNavBarItem :link="{ title: 'Ставки', img: iconBet }" />

        <div class="flex flex-col items-center">
            <div class="w-[36px] h-[36px] rounded-full border-[0.5px] border-[#FDF74B] bg-center bg-no-repeat bg-contain" :style="{ 'background-image': 'url(' + avatar + ')' }"></div>

            <span class="text-[11px] text-[#717171] font-extrabold">Профиль</span>
        </div>
    </div>
</template>
