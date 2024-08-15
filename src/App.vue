<script setup>
import { ref } from "vue";
const isShowChat = ref(true);
const isFullSidebar = ref(true);
</script>

<template>
    <HeaderIndex @toggle-sidebar="isFullSidebar = !isFullSidebar" />

    <div class="flex grow h-[calc(100vh-90px)]">
        <SidebarIndex :isFull="isFullSidebar" />

        <div class="flex flex-col grow p-[35px] overflow-y-auto h-[calc(100vh-90px)] max-w-[1588px] mx-auto w-full">
            <router-view></router-view>
            <FooterIndex />
        </div>

        <ChatIndex @close="isShowChat = false" v-if="isShowChat" />
    </div>
</template>

<style scoped></style>
