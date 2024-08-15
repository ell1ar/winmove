<script setup>
import avatar from "@assets/img/avatar.png";
const { message } = defineProps(["message"]);
</script>

<template>
    <div class="flex gap-2.5 w-full">
        <div class="w-[40px] shrink-0 h-[40px] rounded-[8px] bg-white/10 bg-no-repeat bg-contain bg-center" :style="{ 'background-image': 'url(' + avatar + ')' }"></div>

        <div class="flex flex-col grow">
            <div class="flex justify-between">
                <h2 v-if="!message.isModerator" class="text-[14px] text-[#7C7C7C]">{{ message.player.name }}</h2>
                <h2 v-if="message.isModerator" class="text-[11px] font-bold text-[#FDF74B] uppercase">Moderator</h2>
                <span class="text-[#3D3F43] text-[13px]">{{ message.time }}</span>
            </div>
            <p class="text-[#BCBCBC] text-[15px] font-[400]" v-html="message.text"></p>
        </div>
    </div>
</template>

<style scoped></style>
