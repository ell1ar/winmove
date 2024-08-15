<script setup>
const { link } = defineProps(["link"]);
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="w-[36px] h-[36px] rounded-full p-2">
            <img class="w-full h-full object-contain" :src="link.img" :alt="link.title" />
        </div>
        <span class="text-[11px] text-[#717171] font-extrabold">{{ link.title }}</span>
    </div>
</template>
