<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="mt-[25px] md:mt-0 md:px-0">
        <ProfileTabList class="mb-5" v-model="activeTabIndex" />
        <ProfileTabsMainIndex v-if="activeTabIndex === 0" />
        <ProfileTabsHistoryIndex v-if="activeTabIndex === 1" />
        <ProfileTabsTransactionsIndex v-if="activeTabIndex === 2" />
        <ProfileTabsBonusesIndex v-if="activeTabIndex === 3" />
        <ProfileTabsRefSystemIndex v-if="activeTabIndex === 4" />
        <ProfileTabsVerificationIndex v-if="activeTabIndex === 5" />
    </div>
</template>
