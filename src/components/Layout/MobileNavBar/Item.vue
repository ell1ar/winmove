<script setup>
const { link, isActive, classIcon } = defineProps(["link", "isActive", "classIcon"]);
</script>

<template>
    <div class="flex h-full flex-col items-center justify-between py-[7px]">
        <div class="h-[36px] w-[36px] rounded-full p-2 transition-all duration-300" :class="[isActive ? '!bg-[#FDF74B]' : '', classIcon]">
            <img class="h-full w-full object-contain" :src="link.img" :alt="link.title" />
        </div>

        <span class="text-[11px] font-extrabold text-[#717171]">{{ link.title }}</span>
    </div>
</template>
