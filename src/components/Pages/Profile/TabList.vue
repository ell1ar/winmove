<script setup>
import IconBonus from "./icons/IconBonus.vue";
import IconHistory from "./icons/IconHistory.vue";
import IconProfile from "./icons/IconProfile.vue";
import IconRef from "./icons/IconRef.vue";
import IconTransaction from "./icons/IconTransaction.vue";
import IconVerify from "./icons/IconVerify.vue";

const activeTabIndex = defineModel();
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
</script>

<template>
    <div class="flex h-[61px] w-full overflow-x-auto rounded-[13px] bg-[#101113] p-2">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTabIndex = index"
            class="flex h-full items-center gap-2.5 rounded-[10px] px-[14px]"
            :class="[activeTabIndex === index ? 'bg-[#1B1C1E] text-[#A8A9AB]' : 'text-[#7F8082]']"
        >
            <component :is="tab.icon"></component>
            <span class="whitespace-nowrap text-[15px] font-medium">{{ tab.title }}</span>
        </button>
    </div>
</template>
