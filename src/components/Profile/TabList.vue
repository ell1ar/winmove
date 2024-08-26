<script setup>
import { reactive, ref } from "vue";
import IconBonus from "./icons/bonus.vue";
import IconHistory from "./icons/history.vue";
import IconProfile from "./icons/profile.vue";
import IconRef from "./icons/ref.vue";
import IconTransaction from "./icons/transaction.vue";
import IconVerify from "./icons/verify.vue";

const tabs = [
    {
        icon: IconProfile,
        title: "Профиль",
    },
    {
        icon: IconHistory,
        title: "История игр",
    },
    {
        icon: IconTransaction,
        title: "Транзакции",
    },
    {
        icon: IconBonus,
        title: "Бонусы",
    },
    {
        icon: IconRef,
        title: "Реферальная система",
    },
    {
        icon: IconVerify,
        title: "Верификация",
    },
];
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex h-[61px] overflow-x-auto w-full rounded-[13px] bg-[#101113] p-2">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTabIndex = index"
            class="flex h-full items-center gap-2.5 rounded-[10px] px-[14px]"
            :class="[activeTabIndex === index ? 'bg-[#1B1C1E] text-[#A8A9AB]' : 'text-[#7F8082]']"
        >
            <component :is="tab.icon"></component>
            <span class="text-[15px] font-medium whitespace-nowrap">{{ tab.title }}</span>
        </button>
    </div>
</template>
