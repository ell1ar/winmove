<script setup>
import { ref } from "vue";
const isMobile = window.innerWidth < 1024;
const isShowChat = ref(!isMobile);
const isShowSidebar = ref(!isMobile);
const isShowModalSettings = ref(false);
const isShowModalLang = ref(false);
const isFullSidebar = ref(true);
const isAuth = ref(false);
</script>

<template>
    <HeaderIndex class="fixed left-0 right-0 top-0 z-[9999]" @toggle-sidebar="isFullSidebar = !isFullSidebar" @toggle-auth="isAuth = !isAuth" :isAuth="isAuth" />

    <div class="flex pt-[65px] lg:h-full lg:pt-[90px]">
        <SidebarIndex
            v-if="isShowSidebar"
            class="fixed bottom-[88px] left-2.5 top-[75px] z-50 lg:relative lg:bottom-0 lg:left-0 lg:top-0"
            :isFull="isFullSidebar"
            @close="isShowSidebar = false"
            @toggle-modal-settings="isShowModalSettings = !isShowModalSettings"
            @toggle-modal-lang="isShowModalLang = !isShowModalLang"
        />

        <main class="w-full px-0 pb-[100px] pt-[35px] lg:mx-auto lg:max-w-[1588px] lg:overflow-y-auto lg:px-[35px] lg:pb-[35px]">
            <router-view></router-view>
            <FooterIndex class="mt-[25px] px-[15px] lg:px-0 2xl:mt-[80px]" />
        </main>

        <ChatIndex
            v-if="isShowChat"
            class="fixed bottom-[88px] left-2.5 right-2.5 top-[75px] z-[9998] lg:relative lg:bottom-0 lg:left-0 lg:right-0 lg:top-0"
            @toggle-chat="isShowChat = !isShowChat"
        />
    </div>

    <MobileNavBarIndex
        class="fixed bottom-[9px] left-[15px] right-[15px] z-[9998] lg:hidden"
        :isShowSidebar="isShowSidebar"
        @toggle-sidebar="isShowSidebar = !isShowSidebar"
    />

    <ModalsSettings v-if="isShowModalSettings" @close="isShowModalSettings = false" class="fixed bottom-0 left-[15px] right-[15px] z-[9999]" />
    <ModalsLang v-if="isShowModalLang" @close="isShowModalLang = false" class="fixed bottom-0 left-[15px] right-[15px] z-[9999]" />
</template>

<style scoped></style>
