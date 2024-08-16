<script setup>
import wifiIcon from "@assets/main/wifi.svg";
import playIcon from "@assets/main/play.svg";
import communityIcon from "@assets/main/community.svg";
import payIcon from "@assets/main/pay.svg";
import telegram from "@assets/main/telegram.svg";
import discord from "@assets/main/discord.svg";
import vk from "@assets/main/vk.svg";
import youtube from "@assets/main/youtube.svg";
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
    <footer class="flex flex-col w-full grow gap-[25px]">
        <div class="flex flex-col w-full items-center border-[1px] border-[#222325] rounded-[20px] bg-[#101113] p-[30px]">
            <div class="flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-between w-full items-center gap-y-10">
                <ul class="w-full lg:w-auto grid grid-cols-2 justify-center md:flex md:flex-wrap gap-y-[22px] gap-x-[30px] items-center">
                    <li v-for="(stat, i) in stats" :key="i" class="flex gap-[14px]">
                        <img :src="stat.img" alt="icon" class="w-[40px]" />

                        <div>
                            <h3 class="font-bold text-[18px] leading-none text-white">
                                {{ stat.value }}
                            </h3>
                            <span class="font-medium text-[16px] leading-[26px] text-[#4c4d4f]">
                                {{ stat.title }}
                            </span>
                        </div>
                    </li>
                </ul>

                <div class="flex gap-[17px]">
                    <a v-for="(social, index) in socials" :key="index" href=""><img :src="social.img" alt="socail" class="w-[37px]" /></a>
                </div>
            </div>

            <div class="mt-[50px] flex flex-col 2xl:flex-row w-full 2xl:justify-between items-center 2xl:items-start">
                <ul class="flex list-none flex-wrap gap-x-[30px] 2xl:order-2 justify-center">
                    <li v-for="(link, index) in links" :key="index" class="text-center">
                        <a href="" class="font-medium text-[14px] text-[#bcbcbc] whitespace-nowrap">{{ link.title }}</a>
                    </li>
                </ul>

                <div class="flex flex-col mt-[25px] 2xl:mt-0 items-center 2xl:items-start 2xl:order-1">
                    <h3 class="font-bold text-[12px] text-[#bcbcbc]">© 2018 – 2024 CSFail</h3>

                    <p class="font-medium text-[12px] leading-[17px] text-[#4c4d4f] text-center 2xl:text-start">
                        ITSFAIL LTD: Company number 13246765, 16 John Nicholas Crescent,<br />
                        Ellesmere Port, Cheshire, United Kingdom, CH65 2D
                    </p>
                </div>
            </div>
        </div>

        <ul class="flex justify-between lg:justify-center gap-2 list-none lg:gap-8">
            <li>
                <img src="../../assets/main/bitcoin.svg" alt="bitcoin" />
            </li>
            <li>
                <img src="../../assets/main/tether.svg" alt="tether" />
            </li>
            <li>
                <img src="../../assets/main/visa.svg" alt="visa" />
            </li>
            <li>
                <img src="../../assets/main/mastercard.svg" alt="mastercard" />
            </li>
            <li>
                <img src="../../assets/main/mir.svg" alt="mir" />
            </li>
        </ul>
    </footer>
</template>
