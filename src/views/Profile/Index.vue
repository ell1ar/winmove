<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="mt-[25px] md:mt-0 md:px-0">
        <PagesProfileTabList class="mb-5" v-model="activeTabIndex" />
        <PagesProfileTabsMainIndex @modal-wallet="$emit('modal-wallet')" v-if="activeTabIndex === 0" />
        <PagesProfileTabsHistoryIndex v-if="activeTabIndex === 1" />
        <PagesProfileTabsTransactionsIndex v-if="activeTabIndex === 2" />
        <PagesProfileTabsBonusIndex v-if="activeTabIndex === 3" />
        <PagesProfileTabsRefSystemIndex v-if="activeTabIndex === 4" />
        <PagesProfileTabsVerificationIndex v-if="activeTabIndex === 5" />
    </div>
</template>
