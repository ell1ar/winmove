<script setup>
import telegram from "@assets/main/telegram.svg";
import discord from "@assets/main/discord.svg";
import vk from "@assets/main/vk.svg";
import youtube from "@assets/main/youtube.svg";
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
</script>

<template>
    <ul class="flex justify-between px-3">
        <li v-for="(social, index) in socials" :key="index">
            <img :src="social.img" alt="social" />
        </li>
    </ul>
</template>
