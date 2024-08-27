<script setup>
import { ref } from "vue";
import avatar from "@assets/img/avatar.png";
import iconBet from "./assets/iconBet.svg";
import iconBetActive from "./assets/iconBetActive.svg";
import iconBonus from "./assets/iconBonus.svg";
import iconBonusActive from "./assets/iconBonusActive.svg";
import iconGame from "./assets/iconGame.svg";
import iconGameActive from "./assets/iconGameActive.svg";
import iconMenu from "./assets/iconMenu.svg";
import iconProfile from "./assets/iconProfile.svg";

const { isShowSidebar, isAuth } = defineProps(["isShowSidebar", "isAuth"]);
const emit = defineEmits(["toggle-sidebar", "auth", "logout", "toggle-chat"]);
const isShowModalProfile = ref(false);
const isShowModalNotifications = ref(false);
const activeLink = ref(null);

const handleClickMenuItem = (link) => {
    if (activeLink.value === link) {
        activeLink.value = null;
        return;
    }
    activeLink.value = link;
};

const handleClickGuestProfileMenu = () => {
    emit("auth");
};

const handleClickAuthProfileMenu = () => {
    isShowModalNotifications.value = false;
    isShowModalProfile.value = !isShowModalProfile.value;
};

const handleOpenNotifications = () => {
    isShowModalProfile.value = false;
    isShowModalNotifications.value = true;
};

const handleLogout = () => {
    emit("logout");
};
</script>

<template>
    <div class="flex h-[70px]">
        <div class="relative z-10 flex h-full w-full items-center justify-between rounded-[55px] border-[1px] border-[#232426] bg-[#1A1B1D] px-[22px]">
            <MobileNavBarItem :isActive="isShowSidebar" @click="emit('toggle-sidebar')" :link="{ title: 'Меню', img: iconMenu }" />

            <div v-click-outside="() => (activeLink === 'bonuses' ? (activeLink = null) : '')">
                <MobileNavBarItem
                    :isActive="activeLink === 'bonuses'"
                    @click="() => handleClickMenuItem('bonuses')"
                    :link="{ title: 'Бонусы', img: activeLink === 'bonuses' ? iconBonusActive : iconBonus }"
                />
                <MobileNavBarMenuBonus v-if="activeLink === 'bonuses'" class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-0" />
            </div>

            <div v-click-outside="() => (activeLink === 'games' ? (activeLink = null) : '')">
                <MobileNavBarItem
                    classIcon="bg-[#FDF74B]/[8%]"
                    :isActive="activeLink === 'games'"
                    @click="() => handleClickMenuItem('games')"
                    :link="{ title: 'Игры', img: activeLink === 'games' ? iconGameActive : iconGame }"
                />
                <MobileNavBarMenuGames v-if="activeLink === 'games'" class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-0" />
            </div>

            <div v-click-outside="() => (activeLink === 'bets' ? (activeLink = null) : '')">
                <MobileNavBarItem
                    :isActive="activeLink === 'bets'"
                    @click="() => handleClickMenuItem('bets')"
                    :link="{ title: 'Ставки', img: activeLink === 'bets' ? iconBetActive : iconBet }"
                />
                <MobileNavBarMenuBets v-if="activeLink === 'bets'" class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-0" />
            </div>

            <MobileNavBarItem
                v-if="!isAuth"
                :isActive="activeLink === 'profile'"
                @click="handleClickGuestProfileMenu"
                :link="{ title: 'Профиль', img: activeLink === 'profile' ? iconProfileActive : iconProfile }"
            />

            <div v-if="isAuth" v-click-outside="() => (isShowModalProfile = isShowModalNotifications = false)">
                <button @click="handleClickAuthProfileMenu" class="relative flex h-full flex-col items-center justify-between py-[7px]">
                    <div
                        class="relative flex h-[36px] w-[36px] justify-center rounded-full border-[0.5px] border-[#FDF74B] bg-contain bg-center bg-no-repeat"
                        :style="{ 'background-image': 'url(' + avatar + ')' }"
                    >
                        <div class="absolute -bottom-[6px] flex h-[11px] items-center justify-center rounded-[6px] bg-[#84FD4B] px-2 text-[10px] text-[#151618]">10</div>
                    </div>
                    <span class="text-[11px] font-extrabold text-[#717171]">Профиль</span>
                </button>

                <PopupsProfile
                    v-if="isShowModalProfile"
                    @close="isShowModalProfile = false"
                    class="absolute bottom-[calc(100%+8px)] left-0 right-0 z-0"
                    @logout="handleLogout"
                    @open-notifications="handleOpenNotifications"
                />
                <PopupsNotifications v-if="isShowModalNotifications" class="absolute bottom-full left-0 right-0 z-10" @close="isShowModalNotifications = false" />
            </div>
        </div>

        <!-- Buttons -->
        <div class="absolute bottom-[calc(100%+10px)] right-0 flex flex-col gap-2">
            <button
                @click="$emit('toggle-chat')"
                class="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1px] border-[#454545]/[37%] bg-[#151618]/70 backdrop-blur-sm"
            >
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.4854 0.600052H2.24413C1.30656 0.600052 0.549805 1.34374 0.549805 2.2651V8.92528C0.549805 9.84657 1.30656 10.5903 2.24413 10.5903H2.8089V12.2554C2.8089 12.6564 3.23139 12.9467 3.64477 12.7438C3.65606 12.7327 3.67869 12.7327 3.68999 12.7215C6.79685 10.6741 6.10056 11.1306 6.79625 10.6791C6.88657 10.6236 6.98823 10.5903 7.10119 10.5903H12.4854C13.4229 10.5903 14.1797 9.84657 14.1797 8.92528V2.2651C14.1797 1.34374 13.4229 0.600052 12.4854 0.600052ZM7.96717 7.26023H3.37368C2.62919 7.26023 2.62614 6.1502 3.37368 6.1502H7.96717C8.71166 6.1502 8.71471 7.26023 7.96717 7.26023ZM11.3558 5.04017H3.37368C2.62919 5.04017 2.62614 3.93014 3.37368 3.93014H11.3558C12.1003 3.93014 12.1034 5.04017 11.3558 5.04017Z"
                        fill="#B4B4B4"
                    />
                    <path
                        d="M18.1338 5.0417H15.3099V8.92681C15.3099 10.4587 14.0448 11.7019 12.4861 11.7019H7.27131L6.19824 12.4012V13.3669C6.19824 14.2882 6.955 15.032 7.89257 15.032H13.4461L16.6879 17.1632C17.1304 17.4046 17.569 17.111 17.569 16.697V15.032H18.1338C19.0714 15.032 19.8281 14.2882 19.8281 13.3669V6.70675C19.8281 5.78542 19.0714 5.0417 18.1338 5.0417Z"
                        fill="#B4B4B4"
                    />
                </svg>
            </button>

            <button class="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1px] border-[#454545]/[37%] bg-[#151618]/70 backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.599609 8.49686V12.2572C0.599609 14.1219 2.19667 15.6342 4.16956 15.6415H4.38303C4.64708 15.6415 4.90032 15.5425 5.08703 15.3662C5.27374 15.1899 5.37864 14.9507 5.37864 14.7014V9.06077C5.37864 8.81144 5.27374 8.57233 5.08703 8.39603C4.90032 8.21973 4.64708 8.12069 4.38303 8.12069H4.17149C3.05054 8.12415 2.05088 8.61376 1.39621 9.37777V8.49686C1.39621 8.11286 1.42841 7.73613 1.49012 7.3687H2.34766C2.55841 7.36855 2.76368 7.30528 2.93393 7.18798C3.10417 7.07068 3.23061 6.90541 3.29506 6.71594C4.08067 4.47472 6.3216 2.85602 8.96286 2.85602C10.2174 2.85609 11.4401 3.2291 12.4576 3.92215C13.4751 4.6152 14.2356 5.59311 14.6314 6.71721C14.6961 6.90569 14.8224 7.06998 14.9921 7.1865C15.1618 7.30302 15.3663 7.36578 15.5761 7.36578C15.8461 7.36742 16.187 7.36815 16.4348 7.36815C16.4973 7.73923 16.5295 8.1165 16.5295 8.49668V9.37758C15.8748 8.61358 14.875 8.12396 13.7542 8.1205H13.5427C13.2786 8.1205 13.0254 8.21955 12.8387 8.39585C12.652 8.57215 12.5471 8.81126 12.5471 9.06058V15.2651C12.5471 15.5645 12.4212 15.8514 12.1971 16.0627C12.0862 16.1675 11.9546 16.2507 11.8097 16.3074C11.6647 16.3641 11.5094 16.3933 11.3525 16.3933H10.4878C10.4054 16.1734 10.2528 15.9829 10.051 15.8483C9.8492 15.7136 9.60816 15.6413 9.36106 15.6413H8.56466C8.40776 15.6413 8.2524 15.6705 8.10744 15.7271C7.96248 15.7838 7.83076 15.8669 7.71981 15.9716C7.60886 16.0764 7.52085 16.2007 7.4608 16.3376C7.40076 16.4745 7.36985 16.6212 7.36985 16.7693V16.77C7.3699 17.069 7.49572 17.3558 7.71963 17.5672C7.94354 17.7786 8.24722 17.8974 8.56388 17.8975H9.36183C9.60883 17.8975 9.84975 17.8251 10.0514 17.6905C10.2531 17.5558 10.4055 17.3654 10.4878 17.1455H11.3523C11.8805 17.1455 12.387 16.9472 12.7606 16.5949C13.0364 16.334 13.2251 16.0025 13.3034 15.6413H13.7419C15.7215 15.6413 17.3261 14.1262 17.3261 12.257V8.49686C17.3262 7.45982 17.1099 6.43292 16.6895 5.47482C16.2692 4.51673 15.6531 3.64622 14.8763 2.91301C14.0998 2.17967 13.1779 1.59795 12.1633 1.20108C11.1486 0.80422 10.0611 0.599987 8.96286 0.600052C4.34408 0.600052 0.599609 4.1355 0.599609 8.49686Z"
                        fill="#B4B4B4"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
