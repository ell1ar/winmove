<script setup>
import { ref } from "vue";
import { ModalsContainer } from "vue-final-modal";
import { useResponsive } from "./composables/useResponsive";
const sizes = useResponsive();
const isShowChat = ref(!sizes.isMobile.value);
const isShowSidebar = ref(!sizes.isMobile.value);
const isShowModalSettings = ref(false);
const isShowModalLang = ref(false);
const isFullSidebar = ref(true);
const isShowModalRegister = ref(false);
const isAuth = ref(false);
</script>

<template>
    <HeaderIndex
        class="fixed left-0 right-0 top-0 z-[9999]"
        @toggle-chat="isShowChat = !isShowChat"
        @toggle-sidebar="isFullSidebar = !isFullSidebar"
        @auth="isAuth = true"
        @logout="isAuth = false"
        @modal-register="isShowModalRegister = true"
        :isAuth="isAuth"
    />

    <div class="flex pt-[65px] md:pt-[77px] lg:h-full 2xl:pt-[90px]">
        <SidebarIndex
            class="fixed bottom-[88px] left-2.5 top-[75px] z-50 transition-all duration-300 md:top-[80px] xl:relative xl:bottom-0 xl:left-0 xl:top-0"
            :class="[{ 'translate-x-[-120%]': !isShowSidebar }, { 'translate-x-0': isShowSidebar }]"
            :isFull="isFullSidebar"
            @close="isShowSidebar = false"
            @toggle-modal-settings="isShowModalSettings = !isShowModalSettings"
            @toggle-modal-lang="isShowModalLang = !isShowModalLang"
        />

        <main
            class="mx-auto w-full max-w-full px-0 pb-[100px] pt-0 md:px-[16px] md:pt-[16px] lg:overflow-y-auto lg:px-[20px] lg:pt-[20px] xl:max-w-[calc(100%/1.5)] xl:px-[24px] xl:pb-[35px] xl:pt-[24px] 2xl:max-w-[1588px] 2xl:px-[35px] 2xl:pt-[35px]"
        >
            <router-view></router-view>
            <FooterIndex class="mt-[25px] px-[15px] lg:px-0 2xl:mt-[80px]" />
        </main>

        <ChatIndex
            class="fixed bottom-[84px] left-2.5 right-2.5 top-[70px] z-[9998] transition-all duration-300 xl:relative xl:bottom-0 xl:left-0 xl:right-0 xl:top-0"
            :class="[{ 'translate-x-[120%]': !isShowChat }, { 'translate-x-0': isShowChat }]"
            @toggle-chat="isShowChat = !isShowChat"
        />
    </div>

    <MobileNavBarIndex
        class="fixed bottom-[9px] left-[15px] right-[15px] z-[9997] xl:hidden"
        :isAuth="isAuth"
        :isShowSidebar="isShowSidebar"
        @auth="isAuth = true"
        @logout="isAuth = false"
        @toggle-sidebar="isShowSidebar = !isShowSidebar"
        @toggle-chat="isShowChat = !isShowChat"
    />

    <PopupsSettings v-if="isShowModalSettings" @close="isShowModalSettings = false" class="fixed bottom-0 left-[15px] right-[15px] z-[9999]" />
    <PopupsLang v-if="isShowModalLang" @close="isShowModalLang = false" class="fixed bottom-0 left-[15px] right-[15px] z-[9999]" />

    <ModalsRegister v-model="isShowModalRegister" />
    <ModalsContainer />
</template>
