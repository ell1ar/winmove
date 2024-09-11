<script setup>
import { ref } from "vue";
const activeTabIndex = ref(0);
</script>

<template>
    <div class="flex flex-col gap-2.5 px-[15px] md:px-0 lg:flex-row xl:flex-col 2xl:flex-row">
        <ProfileTabsVerificationSidebar class="w-full lg:w-[338px] xl:w-full 2xl:w-[338px]" />
        <ProfileTabsVerificationFormIndex />
    </div>
</template>
