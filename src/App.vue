<script setup>
import { ref } from "vue";
const isMobile = window.innerWidth < 1024;
const isShowChat = ref(!isMobile);
const isShowSidebar = ref(!isMobile);
const isFullSidebar = ref(true);
const isAuth = ref(false);
</script>

<template>
    <HeaderIndex class="fixed left-0 right-0 top-0" @toggle-sidebar="isFullSidebar = !isFullSidebar" @toggle-auth="isAuth = !isAuth" :isAuth="isAuth" />

    <div class="flex h-full grow pt-[65px] lg:pt-[90px]">
        <SidebarIndex
            v-if="isShowSidebar"
            class="fixed bottom-[88px] left-2.5 top-[75px] z-50 lg:relative lg:bottom-0 lg:left-0 lg:top-0"
            :isShowSidebar="isShowSidebar"
            :isFull="isFullSidebar"
        />

        <main class="mx-auto flex h-full w-full max-w-[1588px] grow flex-col overflow-y-auto px-0 pb-[90px] pt-[35px] lg:px-[35px] lg:pb-[35px]">
            <router-view></router-view>
            <FooterIndex class="mt-[25px] px-[15px] lg:px-0 2xl:mt-[80px]" />
        </main>

        <ChatIndex
            v-if="isShowChat"
            @toggle-chat="isShowChat = !isShowChat"
            class="fixed bottom-[88px] left-2.5 right-2.5 top-[75px] lg:relative lg:bottom-0 lg:left-0 lg:right-0 lg:top-0"
        />
    </div>

    <MobileNavBarIndex @toggle-sidebar="isShowSidebar = !isShowSidebar" class="fixed bottom-[9px] left-[15px] right-[15px] z-[9999] lg:hidden" />
</template>

<style scoped></style>
