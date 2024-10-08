<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex w-full flex-col bg-[#101113] px-[15px] pb-[15px] pt-[15px] md:px-[30px] md:pb-[30px] md:pt-[20px]">
        <div class="mb-[15px] flex items-center gap-[15px] md:mb-[34px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="История платежей" />
        </div>

        <ModalsWalletTransactionsTabList v-model="activeTabIndex" class="mb-[15px]" />
        <ModalsWalletTransactionsTabsPaymentsIndex v-if="activeTabIndex === 0" />
        <ModalsWalletTransactionsTabsWithdrawsIndex v-if="activeTabIndex === 1" />
    </div>
</template>
