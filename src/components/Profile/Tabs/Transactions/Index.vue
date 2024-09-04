<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex w-full flex-col rounded-[15px] bg-[#101113] p-[15px] md:p-[25px]">
        <ProfileTabsTransactionsTabList v-model="activeTabIndex" class="mb-[15px]" />
        <ProfileTabsTransactionsTabsPaymentsIndex v-if="activeTabIndex === 0" />
        <ProfileTabsTransactionsTabsWithdrawsIndex v-if="activeTabIndex === 1" />
    </div>
</template>
