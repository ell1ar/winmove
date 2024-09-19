<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex w-full flex-col rounded-[15px] bg-[#101113] px-[15px] md:px-[30px] md:pb-[30px] md:pt-[20px]">
        <div class="mb-[34px] flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <h2 class="text-[20px] font-bold text-[#DFDFDF]">История платежей</h2>
        </div>

        <ModalsWalletTransactionsTabList v-model="activeTabIndex" class="mb-[15px]" />
        <ModalsWalletTransactionsTabsPaymentsIndex v-if="activeTabIndex === 0" />
        <ModalsWalletTransactionsTabsWithdrawsIndex v-if="activeTabIndex === 1" />
    </div>
</template>
