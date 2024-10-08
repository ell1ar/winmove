<script setup>
import telegram from "@/assets/img/social/telegram.svg";
import discord from "@/assets/img/social/discord.svg";
import vk from "@/assets/img/social/vk.svg";
import youtube from "@/assets/img/social/youtube.svg";
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
            <a href="">
                <img :src="social.img" alt="social" />
            </a>
        </li>
    </ul>
</template>
