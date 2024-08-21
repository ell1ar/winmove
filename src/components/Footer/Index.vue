<script setup>
import wifiIcon from "@assets/img/wifi.svg";
import playIcon from "@assets/img/play.svg";
import communityIcon from "@assets/img/community.svg";
import payIcon from "@assets/img/pay.svg";
import telegram from "@assets/img/links/telegram.svg";
import discord from "@assets/img/links/discord.svg";
import vk from "@assets/img/links/vk.svg";
import youtube from "@assets/img/links/youtube.svg";
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
        <div class="flex w-full flex-col items-center rounded-[20px] border-[1px] border-[#222325] bg-[#101113] px-[25px] py-[30px] lg:py-[50px] lg:px-[50px]">
            <div class="flex w-full flex-col items-center justify-center gap-y-10 lg:flex-row lg:flex-wrap lg:justify-between">
                <ul class="grid w-full grid-cols-2 items-center gap-x-[30px] gap-y-[22px] md:flex md:flex-wrap lg:w-auto">
                    <li v-for="(stat, i) in stats" :key="i" class="flex items-cemter gap-[14px]">
                        <img :src="stat.img" alt="icon" class="w-[30px] md:w-[40px]" />

                        <div>
                            <h3 class="text-[16px] md:text-[18px] font-bold leading-none text-white">
                                {{ stat.value }}
                            </h3>
                            <span class="text-[14px] md:text-[16px] font-medium leading-[26px] text-[#4c4d4f]">
                                {{ stat.title }}
                            </span>
                        </div>
                    </li>
                </ul>

                <div class="flex gap-[17px]">
                    <a v-for="(social, index) in socials" :key="index" href=""><img :src="social.img" alt="socail" class="w-[37px]" /></a>
                </div>
            </div>

            <div class="mt-[50px] flex w-full flex-col items-center 2xl:flex-row 2xl:items-start 2xl:justify-between">
                <ul class="flex list-none flex-wrap justify-center gap-x-[30px] 2xl:order-2">
                    <li v-for="(link, index) in links" :key="index" class="text-center">
                        <a href="" class="whitespace-nowrap text-[14px] font-medium text-[#bcbcbc]">{{ link.title }}</a>
                    </li>
                </ul>

                <div class="mt-[25px] flex flex-col items-center 2xl:order-1 2xl:mt-0 2xl:items-start">
                    <h3 class="text-[12px] font-bold text-[#bcbcbc]">© 2018 – 2024 CSFail</h3>

                    <p class="text-center text-[12px] font-medium leading-[17px] text-[#4c4d4f] 2xl:text-start">
                        ITSFAIL LTD: Company number 13246765, 16 John Nicholas Crescent,<br />
                        Ellesmere Port, Cheshire, United Kingdom, CH65 2D
                    </p>
                </div>
            </div>
        </div>

        <ul class="flex list-none justify-between gap-2 lg:justify-center lg:gap-8">
            <li>
                <img src="../../assets/img/bitcoin.svg" alt="bitcoin" />
            </li>
            <li>
                <img src="../../assets/img/tether.svg" alt="tether" />
            </li>
            <li>
                <img src="../../assets/img/visa.svg" alt="visa" />
            </li>
            <li>
                <img src="../../assets/img/mastercard.svg" alt="mastercard" />
            </li>
            <li>
                <img src="../../assets/img/mir.svg" alt="mir" />
            </li>
        </ul>
    </footer>
</template>
