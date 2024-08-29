<script setup>
import { ref } from "vue";
import IconPayment from "./icons/IconPayment.vue";
import IconWithdraw from "./icons/IconWithdraw.vue";
const tabs = [
    {
        icon: IconPayment,
        title: "История пополнений",
    },
    {
        icon: IconWithdraw,
        title: "История выводов",
    },
];
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex w-full flex-col rounded-[15px] bg-[#101113] p-[25px]">
        <div class="mb-[25px] flex h-[40px] rounded-[10px]">
            <button
                @click="activeTabIndex = index"
                v-for="(tab, index) in tabs"
                :key="index"
                class="flex items-center gap-[9px] rounded-[10px] px-[18px]"
                :class="{
                    'bg-[#1B1C1E] text-[#A8A9AB]': activeTabIndex === index,
                    'text-[#7F8082]': activeTabIndex !== index,
                }"
            >
                <component :is="tab.icon" />
                <span v-html="tab.title"></span>
            </button>
        </div>

        <ProfileTabsTransactionsTabsPaymentsIndex v-if="activeTabIndex === 0" />
        <ProfileTabsTransactionsTabsWithdrawsIndex v-if="activeTabIndex === 1" />
    </div>
</template>
