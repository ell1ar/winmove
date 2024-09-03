<script setup>
import { ref } from "vue";
import ImageDay1 from "./assets/1.png";
import ImageDay2 from "./assets/2.png";
import ImageDay3 from "./assets/3.png";
import ImageDay4 from "./assets/4.png";
const scrollContainer = ref(null);
</script>

<template>
    <div class="flex w-full flex-col bg-[#101113] p-[25px]">
        <div class="flex items-center gap-2.5">
            <ProfileTabsBonusesDayBanner class="h-[240px] w-[344px] shrink-0" />
            <div class="flex h-[240px] items-center gap-[7px] overflow-x-auto" ref="scrollContainer">
                <ProfileTabsBonusesDayCard day="1 день" :imgSrc="ImageDay1" />
                <ProfileTabsBonusesDayCard day="2 день" :imgSrc="ImageDay2" />
                <ProfileTabsBonusesDayCard day="3 день" :imgSrc="ImageDay3" />
                <ProfileTabsBonusesDayCard day="4 день" :imgSrc="ImageDay4" />
                <ProfileTabsBonusesDayCard day="4 день" :imgSrc="ImageDay4" />
                <ProfileTabsBonusesDayCard day="4 день" :imgSrc="ImageDay4" />
                <ProfileTabsBonusesDayCard day="4 день" :imgSrc="ImageDay4" />
                <ProfileTabsBonusesDayCard day="4 день" :imgSrc="ImageDay4" />
                <ProfileTabsBonusesDayCard day="4 день" :imgSrc="ImageDay4" />
            </div>
        </div>

        <div class="mt-[20px] flex items-center">
            <button class="flex h-[35px] shrink-0 items-center justify-center gap-1.5 rounded-[8px] bg-[#FDF74B] px-[22px] uppercase text-[#101010]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path
                        d="M13.3125 5.625H12.375V4.37499C12.375 1.9626 10.4124 0 8 0C5.58758 0 3.62501 1.9626 3.62501 4.37499V5.625H2.68751C2.64646 5.62497 2.60581 5.63304 2.56789 5.64873C2.52996 5.66443 2.4955 5.68745 2.46647 5.71647C2.43745 5.7455 2.41443 5.77996 2.39873 5.81789C2.38304 5.85581 2.37497 5.89646 2.375 5.93751V13.75C2.375 14.4394 2.9356 15 3.62501 15H12.375C13.0644 15 13.625 14.4394 13.625 13.75V5.93751C13.625 5.89646 13.617 5.85581 13.6013 5.81789C13.5856 5.77996 13.5626 5.7455 13.5335 5.71647C13.5045 5.68745 13.47 5.66443 13.4321 5.64873C13.3942 5.63304 13.3535 5.62497 13.3125 5.625ZM8.93568 12.153C8.94052 12.1967 8.93609 12.2409 8.92268 12.2828C8.90928 12.3246 8.88719 12.3632 8.85788 12.3959C8.82856 12.4287 8.79267 12.4549 8.75255 12.4728C8.71242 12.4907 8.66897 12.5 8.62502 12.5H7.37501C7.33106 12.5 7.28761 12.4907 7.24748 12.4728C7.20736 12.4549 7.17147 12.4287 7.14215 12.3959C7.11283 12.3632 7.09075 12.3246 7.07735 12.2828C7.06394 12.2409 7.05951 12.1967 7.06435 12.153L7.26148 10.3803C6.94136 10.1474 6.75002 9.77906 6.75002 9.375C6.75002 8.68562 7.31062 8.12499 8.00003 8.12499C8.68944 8.12499 9.25004 8.68559 9.25004 9.375C9.25004 9.77906 9.0587 10.1474 8.73857 10.3803L8.93568 12.153ZM10.5 5.625H5.50001V4.37499C5.50001 2.99651 6.62152 1.875 8 1.875C9.37848 1.875 10.5 2.99651 10.5 4.37499V5.625Z"
                        fill="#101010"
                    />
                </svg>
                <span>Доступ закрыт</span>
            </button>

            <button
                class="ml-[15px] flex h-[35px] shrink-0 items-center justify-center rounded-[8px] border-[1px] border-white/[2%] bg-white/[5%] px-[22px] uppercase text-[#7F8082]"
            >
                <span>Выполните условия</span>
            </button>

            <CustomScrollbar v-if="scrollContainer !== null" class="ml-[20px]" :target="scrollContainer" />
        </div>
    </div>
</template>
