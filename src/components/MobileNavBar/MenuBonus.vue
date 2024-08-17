<script setup>
const { isShowSidebar } = defineProps(["isShowSidebar"]);
import { ref } from "vue";
import iconHelloBonus from "./assets/iconHelloBonus.svg";
import iconRegularBonus from "./assets/iconRegularBonus.svg";
import iconBonusStar from "./assets/iconBonusStar.svg";
const list = [
    {
        title: "Приветственный бонус",
        img: iconHelloBonus,
    },
    {
        title: "Регулярные бонусы",
        img: iconRegularBonus,
    },
    {
        title: "Специальные бонусы",
        img: iconBonusStar,
    },
];
</script>

<template>
    <div class="flex gap-2 overflow-x-auto">
        <div v-for="(item, index) in list" :key="index" class="relative flex h-[60px] w-[164px] shrink-0 items-center overflow-hidden rounded-[10px] bg-[#0F1012] px-[10px]">
            <img :src="item.img" alt="iconRegularBonus" />
            <p class="ml-[10px] text-[14px] text-[#E2E2E2]">{{ item.title }}</p>
            <div class="absolute bottom-2 right-2 flex h-[14px] items-center justify-center rounded-[6px] bg-[#BD52FD] px-2 text-[12px] text-[#151618]">3</div>

            <div class="absolute bottom-0 right-0 h-10 w-20 translate-x-4 translate-y-2 -rotate-[35deg] rounded-full bg-[#BD52FD] opacity-50 blur-xl"></div>
            <div class="absolute left-0 top-0 h-12 w-24 -translate-x-4 -translate-y-2 -rotate-[35deg] rounded-full bg-[#BD52FD] opacity-70 blur-2xl"></div>
        </div>
    </div>
</template>
