<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex gap-2.5 flex-col lg:flex-row px-[15px] md:px-0">
        <ProfileTabsVerificationSidebar class="w-full lg:w-[338px]" />
        <ProfileTabsVerificationFormIndex />
    </div>
</template>
