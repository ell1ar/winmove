<script setup>
import telegram from "@assets/img/links/telegram.svg";
import discord from "@assets/img/links/discord.svg";
import vk from "@assets/img/links/vk.svg";
import youtube from "@assets/img/links/youtube.svg";
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
