<script setup>
import { ref } from "vue";
const isMobile = window.innerWidth < 1024;
const isShowChat = ref(!isMobile);
const isShowSidebar = ref(!isMobile);
const isFullSidebar = ref(true);
</script>

<template>
    <HeaderIndex class="fixed top-0 left-0 right-0" @toggle-sidebar="isFullSidebar = !isFullSidebar" />

    <div class="flex grow pt-[65px] lg:pt-[90px] h-full">
        <SidebarIndex
            v-if="isShowSidebar"
            class="fixed z-50 left-2.5 top-[75px] bottom-[88px] lg:left-0 lg:top-0 lg:bottom-0 lg:relative"
            :isShowSidebar="isShowSidebar"
            :isFull="isFullSidebar"
        />

        <main class="flex flex-col grow pb-[90px] lg:pb-[35px] px-0 pt-[35px] lg:px-[35px] overflow-y-auto h-full max-w-[1588px] mx-auto w-full">
            <router-view></router-view>
            <FooterIndex class="mx-[15px] lg:mx-0 mt-[25px] 2xl:mt-[80px]" />
        </main>

        <ChatIndex
            v-if="isShowChat"
            @toggle-chat="isShowChat = !isShowChat"
            class="fixed lg:relative top-[75px] left-2.5 right-2.5 bottom-[88px] lg:left-0 lg:right-0 lg:top-0 lg:bottom-0"
        />
    </div>

    <MobileNavBarIndex @toggle-sidebar="isShowSidebar = !isShowSidebar" class="lg:hidden fixed bottom-[9px] left-[15px] right-[15px] z-[9999]" />
</template>

<style scoped></style>
