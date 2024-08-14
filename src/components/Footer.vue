<script setup>
import { ref } from "vue";
const props = defineProps(["foo"]);
const stats = ref([
    {
        value: 1289,
        title: "Онлайн",
        img: "../assets/main/wifi.svg",
    },
    {
        value: 1289,
        title: "Всего игр",
        img: "../assets/main/play.svg",
    },
    {
        value: 1293238,
        title: "Игроков",
        img: "../assets/main/community.svg",
    },
    {
        value: 312333,
        title: "Выйграно",
        img: "../assets/main/pay.svg",
    },
]);
</script>

<template>
    <footer class="w-full border border-[#222325] rounded-[20px] mx-auto mt-[100px] bg-[#101113] p-[50px]">
        <div class="flex justify-between items-center h-[50px] max-[768px]:block max-[768px]:justify-center max-[768px]:h-auto max-[768px]:items-center">
            <ul class="flex justify-between items-start max-w-[712px] w-full p-0 mb-0 max-[768px]:block">
                <li v-for="(stat, i) in stats" :key="i" class="flex max-[768px]:inline-block max-[768px]:w-[50%]">
                    <img :src="stat.img" alt="" class="w-[40px] max-[768px]:inline-block max-[768px]:align-top max-[768px]:mr-[15px]" />
                    <div class="ml-[18px] max-[768px]:ml-0 max-[768px]:inline-block">
                        <h3 class="font-bold text-[18px] leading-none text-white max-[768px]:text-[16px] max-[400px]:text-[11px]">
                            {{ stat.value }}
                        </h3>
                        <span class="font-medium text-[16px] leading-[26px] text-[#4c4d4f] max-[768px]:text-[14px] max-[400px]:text-[10px]">
                            {{ stat.title }}
                        </span>
                    </div>
                </li>
            </ul>

            <div class="flex max-[768px]:text-center max-[768px]:justify-evenly max-[768px]:my-[30px]">
                <a href=""><img src="../assets/main/telegram.svg" alt="" class="ml-[17px] w-[37px] max-[1250px]:w-[30px]" /></a>
                <a href=""><img src="../assets/main/vk.svg" alt="" class="ml-[17px] w-[37px] max-[1250px]:w-[30px]" /></a>
                <a href=""><img src="../assets/main/discord.svg" alt="" class="ml-[17px] w-[37px] max-[1250px]:w-[30px]" /></a>
                <a href=""><img src="../assets/main/youtube.svg" alt="" class="ml-[17px] w-[37px] max-[1250px]:w-[30px]" /></a>
            </div>
        </div>

        <div class="mt-[45px] flex justify-between max-[768px]:block max-[768px]:text-center">
            <h3 class="font-bold text-[12px] leading-[17px] text-[#bcbcbc]">© 2018 – 2024 CSFail</h3>
            <ul class="flex list-none max-[768px]:block max-[768px]:p-0 max-[768px]:mx-[25px] max-[768px]:mb-[15px]">
                <li class="ml-[30px] max-[768px]:ml-0 max-[768px]:mr-[15px] max-[768px]:inline-block text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Игры</a>
                </li>
                <li class="ml-[30px] max-[768px]:ml-0 max-[768px]:mr-[15px] max-[768px]:inline-block text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Ставки</a>
                </li>
                <li class="ml-[30px] max-[768px]:ml-0 max-[768px]:mr-[15px] max-[768px]:inline-block text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Поддежка</a>
                </li>
                <li class="ml-[30px] max-[768px]:ml-0 max-[768px]:mr-[15px] max-[768px]:inline-block text-center">
                    <a href="" class="font-medium text-[14px] leading-[17px] text-[#bcbcbc]">Политика конфиденциальности</a>
                </li>
            </ul>
        </div>

        <p class="font-medium text-[12px] leading-[17px] text-[#4c4d4f] mt-[5px] max-[768px]:text-center">
            ITSFAIL LTD: Company number 13246765, 16 John Nicholas Crescent,<br />
            Ellesmere Port, Cheshire, United Kingdom, CH65 2D
        </p>
    </footer>

    <div class="mt-[30px] mb-[23px] max-[768px]:mb-[100px]">
        <ul class="flex justify-center list-none max-[768px]:block max-[768px]:p-0 max-[768px]:text-center">
            <li class="mr-[32px] max-[768px]:inline-block max-[768px]:m-[10px]">
                <img src="../assets/main/bitcoin.svg" alt="" />
            </li>
            <li class="mr-[32px] max-[768px]:inline-block max-[768px]:m-[10px]">
                <img src="../assets/main/tether.svg" alt="" />
            </li>
            <li class="mr-[32px] max-[768px]:inline-block max-[768px]:m-[10px]">
                <img src="../assets/main/visa.svg" alt="" />
            </li>
            <li class="mr-[32px] max-[768px]:inline-block max-[768px]:m-[10px]">
                <img src="../assets/main/mastercard.svg" alt="" />
            </li>
            <li class="mr-[32px] max-[768px]:inline-block max-[768px]:m-[10px]">
                <img src="../assets/main/mir.svg" alt="" />
            </li>
        </ul>
    </div>
</template>
