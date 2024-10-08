<script setup>
const { message } = defineProps(["message"]);
</script>

<template>
    <div class="flex w-full gap-2.5 select-text">
        <ModulesPlayerAvatarIndex :color="message.color" />

        <div class="flex grow flex-col">
            <div class="flex justify-between">
                <ModulesPlayerNameIndex class="text-[15px]" :color="message.color" v-if="!message.isModerator" :name="message.player.nam" />
                <h2 v-if="message.isModerator" class="text-[11px] font-bold uppercase text-[#FDF74B]">Moderator</h2>
                <span class="text-[13px] text-[#3D3F43]">{{ message.time }}</span>
            </div>

            <p class="text-[15px] font-medium text-[#BCBCBC]" v-html="message.text"></p>
        </div>
    </div>
</template>
