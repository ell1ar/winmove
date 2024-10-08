<script setup>
import wifiIcon from "@/assets/img/wifi.svg";
import playIcon from "@/assets/img/play.svg";
import communityIcon from "@/assets/img/community.svg";
import payIcon from "@/assets/img/pay.svg";
import telegram from "@/assets/img/social/telegram.svg";
import discord from "@/assets/img/social/discord.svg";
import vk from "@/assets/img/social/vk.svg";
import youtube from "@/assets/img/social/youtube.svg";
const props = defineProps(["foo"]);
const stats = [
    {
        value: 1293238,
        title: "Онлайн",
        img: wifiIcon,
    },
    {
        value: 1293238,
        title: "Всего игр",
        img: playIcon,
    },
    {
        value: 1293238,
        title: "Игроков",
        img: communityIcon,
    },
    {
        value: 1293238,
        title: "Выйграно",
        img: payIcon,
    },
];
const socials = [
    {
        img: telegram,
    },
    {
        img: vk,
    },
    {
        img: discord,
    },
    {
        img: youtube,
    },
];
const links = [
    {
        title: "Игры",
    },
    {
        title: "Ставки",
    },
    {
        title: "Поддежка",
    },
    {
        title: "Политика конфиденциальности",
    },
];
</script>

<template>
    <footer class="flex w-full grow flex-col gap-[25px]">
        <div class="flex w-full flex-col items-center rounded-[20px] border-[1px] border-[#222325] bg-[#101113] px-[25px] py-[30px] 2xl:px-[50px] 2xl:py-[50px]">
            <div class="flex w-full flex-col items-center justify-center lg:flex-row lg:justify-between xl:flex-col 2xl:flex-row">
                <!-- Statistics -->
                <ul class="grid w-full grid-cols-2 items-center justify-between gap-x-[30px] gap-y-[22px] sm:flex lg:justify-start xl:justify-between 2xl:justify-start">
                    <li v-for="(stat, i) in stats" :key="i" class="items-cemter flex gap-[14px]">
                        <img :src="stat.img" alt="icon" class="w-[30px] sm:w-[35px]" />

                        <div>
                            <h3 class="text-[16px] font-bold leading-none text-white md:text-[18px]">
                                {{ stat.value }}
                            </h3>

                            <span class="text-[14px] font-medium leading-[26px] text-[#4c4d4f] md:text-[16px]">
                                {{ stat.title }}
                            </span>
                        </div>
                    </li>
                </ul>

                <!-- Social links -->
                <div
                    class="mt-[35px] flex w-full justify-center gap-[17px] sm:mt-[24px] sm:justify-start lg:mt-0 lg:w-auto xl:mt-[28px] xl:w-full xl:justify-start 2xl:mt-0 2xl:w-auto"
                >
                    <a v-for="(social, index) in socials" :key="index" href="" class="w-[37px] shrink-0"><img :src="social.img" alt="socail" /></a>
                </div>
            </div>

            <div class="mt-[50px] flex w-full flex-col items-center sm:mt-[24px] sm:items-start 2xl:flex-row 2xl:items-start 2xl:justify-between">
                <!-- Page links -->
                <ul class="flex w-full list-none flex-wrap justify-center gap-x-[30px] sm:justify-start 2xl:order-2">
                    <li v-for="(link, index) in links" :key="index" class="text-center">
                        <a href="" class="whitespace-nowrap text-[14px] font-medium text-[#bcbcbc]">{{ link.title }}</a>
                    </li>
                </ul>

                <!-- Copyright -->
                <div class="mt-[25px] flex w-full flex-col items-center sm:items-start 2xl:order-1 2xl:mt-0 2xl:items-start">
                    <h3 class="text-[12px] font-bold text-[#bcbcbc]">© 2018 – 2024 CSFail</h3>

                    <p class="text-center text-[12px] font-medium leading-[17px] text-[#4c4d4f] sm:text-start 2xl:text-start">
                        ITSFAIL LTD: Company number 13246765, 16 John Nicholas Crescent,
                        <br />
                        Ellesmere Port, Cheshire, United Kingdom, CH65 2D
                    </p>
                </div>
            </div>
        </div>

        <ul class="flex list-none justify-between gap-2 lg:justify-center lg:gap-8">
            <li>
                <img src="./assets/bitcoin.svg" alt="bitcoin" />
            </li>
            <li>
                <img src="./assets/tether.svg" alt="tether" />
            </li>
            <li>
                <img src="./assets/visa.svg" alt="visa" />
            </li>
            <li>
                <img src="./assets/mastercard.svg" alt="mastercard" />
            </li>
            <li>
                <img src="./assets/mir.svg" alt="mir" />
            </li>
        </ul>
    </footer>
</template>
