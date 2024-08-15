<script setup>
import { ref } from "vue";
import wifiIcon from "@assets/main/wifi.svg";
import playIcon from "@assets/main/play.svg";
import communityIcon from "@assets/main/community.svg";
import payIcon from "@assets/main/pay.svg";
const props = defineProps(["foo"]);
const stats = ref([
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
]);
</script>

<template>
    <footer class="w-full border-[1px] border-[#222325] rounded-[20px] mx-auto mt-[80px] bg-[#101113] p-[50px] mb-[25px]">
        <div class="flex justify-between items-center h-[50px]">
            <ul class="flex justify-between items-start max-w-[712px] w-full p-0 mb-0">
                <li v-for="(stat, i) in stats" :key="i" class="flex max-[768px]:w-[50%]">
                    <img :src="stat.img" alt="icon" class="w-[40px] max-[768px]:align-top" />
                    <div class="ml-[18px]">
                        <h3 class="font-bold text-[18px] leading-none text-white">
                            {{ stat.value }}
                        </h3>
                        <span class="font-medium text-[16px] leading-[26px] text-[#4c4d4f]">
                            {{ stat.title }}
                        </span>
                    </div>
                </li>
            </ul>

            <div class="flex">
                <a href=""><img src="../../assets/main/telegram.svg" alt="" class="ml-[17px] w-[37px]" /></a>
                <a href=""><img src="../../assets/main/vk.svg" alt="" class="ml-[17px] w-[37px]" /></a>
                <a href=""><img src="../../assets/main/discord.svg" alt="" class="ml-[17px] w-[37px]" /></a>
                <a href=""><img src="../../assets/main/youtube.svg" alt="" class="ml-[17px] w-[37px]" /></a>
            </div>
        </div>

        <div class="mt-[45px] flex justify-between">
            <h3 class="font-bold text-[12px] leading-[17px] text-[#bcbcbc]">© 2018 – 2024 CSFail</h3>
            <ul class="flex list-none">
                <li class="ml-[30px] text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Игры</a>
                </li>
                <li class="ml-[30px] text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Ставки</a>
                </li>
                <li class="ml-[30px] text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Поддежка</a>
                </li>
                <li class="ml-[30px] text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Политика конфиденциальности</a>
                </li>
            </ul>
        </div>

        <p class="font-medium text-[12px] leading-[17px] text-[#4c4d4f] mt-[5px]">
            ITSFAIL LTD: Company number 13246765, 16 John Nicholas Crescent,<br />
            Ellesmere Port, Cheshire, United Kingdom, CH65 2D
        </p>
    </footer>

    <ul class="flex justify-center list-none gap-8">
        <li>
            <img src="../../assets/main/bitcoin.svg" alt="" />
        </li>
        <li>
            <img src="../../assets/main/tether.svg" alt="" />
        </li>
        <li>
            <img src="../../assets/main/visa.svg" alt="" />
        </li>
        <li>
            <img src="../../assets/main/mastercard.svg" alt="" />
        </li>
        <li>
            <img src="../../assets/main/mir.svg" alt="" />
        </li>
    </ul>
</template>
