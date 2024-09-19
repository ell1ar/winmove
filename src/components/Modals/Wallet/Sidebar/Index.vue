<script setup>
import { ref } from "vue";
import IconDeposit from "@/components/Modals/Wallet/Sidebar/assets/deposit.svg";
import IconWithdraw from "@/components/Modals/Wallet/Sidebar/assets/withdraw.svg";
import IconChange from "@/components/Modals/Wallet/Sidebar/assets/change.svg";
import IconHistory from "@/components/Modals/Wallet/Sidebar/assets/history.svg";
const activeTab = defineModel();
const tabs = ref([
    {
        title: "Депозит",
        img: IconDeposit,
    },
    {
        title: "Вывести",
        img: IconWithdraw,
    },
    {
        title: "Обмен",
        img: IconChange,
    },
    {
        title: "История платежей",
        img: IconHistory,
    },
]);
</script>

<template>
    <div class="flex w-[242px] shrink-0 flex-col bg-[#161719] p-[25px]">
        <h2 class="text-[23px] text-white">Кошелек</h2>

        <ul class="mt-[34px] flex w-full flex-col gap-y-2.5">
            <li class="w-full" v-for="(tab, index) in tabs" :key="tab.title">
                <button
                    class="flex h-[45px] w-full shrink-0 items-center gap-2.5 rounded-[10px] border-[1px] px-[12px] font-bold"
                    :class="[activeTab === index ? 'border-[#FDF74B] bg-[#FDF74B] text-[#101010]' : 'border-[#242527] bg-[#1C1D1F] text-[#A8A9AB]']"
                    @click="activeTab = index"
                >
                    <img :src="tab.img" :alt="tab.title" />
                    <span class="whitespace-nowrap text-[14px]">{{ tab.title }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>
