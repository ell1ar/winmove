<script setup>
import { computed, ref } from "vue";
import { ModalsContainer } from "vue-final-modal";
const MOBILE_WIDTH = 1280;
const isShowChat = ref(window.innerWidth >= MOBILE_WIDTH);
const isShowSidebar = ref(window.innerWidth >= MOBILE_WIDTH);
const isShowModalSettings = ref(false);
const isShowModalLang = ref(false);
const isFullSidebar = ref(true);
const isShowModalRegister = ref(false);
const isAuth = ref(false);
const isShowSidebarBackdrop = computed(() => isShowSidebar.value && window.innerWidth <= MOBILE_WIDTH);

const handleOutsideChat = () => {
    if (window.innerWidth < MOBILE_WIDTH) isShowChat.value = false;
};
</script>

<template>
    <HeaderIndex
        class="fixed left-0 right-0 top-0 z-[999] h-[65px] md:h-[77px] 2xl:h-[90px]"
        @toggle-chat="isShowChat = !isShowChat"
        @toggle-sidebar="isFullSidebar = !isFullSidebar"
        @auth="isAuth = true"
        @logout="isAuth = false"
        @modal-register="isShowModalRegister = true"
        :isAuth="isAuth"
    />

    <div class="flex pt-[65px] md:pt-[77px] lg:h-full 2xl:pt-[90px]">
        <SidebarIndex
            class="fixed bottom-[88px] left-2.5 top-[75px] z-[999] transition-all duration-300 md:top-[77px] xl:bottom-0 xl:left-0 2xl:top-[90px]"
            :class="[{ 'translate-x-[-120%]': !isShowSidebar }, { 'translate-x-0': isShowSidebar }, { 'w-[234px]': isFullSidebar }, { 'w-[80px]': !isFullSidebar }]"
            :isFull="isFullSidebar"
            @close="isShowSidebar = false"
            @toggle-modal-settings="isShowModalSettings = !isShowModalSettings"
            @toggle-modal-lang="isShowModalLang = !isShowModalLang"
        />
        <div v-if="isShowSidebarBackdrop" @click="isShowSidebar = false" class="fixed z-[998] h-full w-full"></div>

        <main
            class="mx-auto h-fit w-full max-w-[2034px] pb-[100px] pl-0 pr-0 pt-0 md:pl-[16px] md:pr-[16px] md:pt-[16px] lg:pt-[20px] xl:pb-[35px] xl:pl-[calc(234px+24px)] xl:pr-[calc(342px+16px)] xl:pt-[24px] 2xl:pl-[calc(234px+35px)] 2xl:pr-[calc(300px+35px)] 2xl:pt-[35px]"
        >
            <RouterView />
            <FooterIndex class="mt-[25px] px-[15px] lg:px-0 2xl:mt-[80px]" />
        </main>

        <ChatIndex
            v-click-outside="handleOutsideChat"
            class="fixed bottom-[84px] right-2.5 top-[70px] z-[998] transition-all duration-300 md:top-[77px] xl:bottom-0 xl:right-0 xl:w-[342px] 2xl:top-[90px] 2xl:w-[300px]"
            :class="[{ 'translate-x-[120%]': !isShowChat }, { 'translate-x-0': isShowChat }]"
            @toggle-chat="isShowChat = !isShowChat"
        />
    </div>

    <MobileNavBarIndex
        class="fixed bottom-[9px] left-[15px] right-[15px] z-[997] md:mx-auto md:w-2/3 xl:hidden"
        :isAuth="isAuth"
        :isShowSidebar="isShowSidebar"
        @auth="isAuth = true"
        @logout="isAuth = false"
        @toggle-sidebar="isShowSidebar = !isShowSidebar"
        @close-sidebar="isShowSidebar = false"
        @toggle-chat="isShowChat = !isShowChat"
    />

    <PopupsSettings
        v-if="isShowModalSettings"
        v-click-outside="() => (isShowModalSettings = false)"
        @close="isShowModalSettings = false"
        class="animate__fadeInUp fixed bottom-0 left-[15px] right-[15px] z-[999]"
    />
    <PopupsLang
        v-if="isShowModalLang"
        v-click-outside="() => (isShowModalLang = false)"
        @close="isShowModalLang = false"
        class="animate__fadeInUp fixed bottom-0 left-[15px] right-[15px] z-[999]"
    />

    <ModalsRegisterIndex
        v-model="isShowModalRegister"
        class="flex items-end justify-center xl:items-center"
        content-class="md:mx-auto md:w-2/3 left-[15px] fixed xl:relative right-[15px] xl:w-fit xl:left-none xl:right-none"
    />
    <ModalsContainer />
</template>
