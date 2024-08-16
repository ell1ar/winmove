<script setup>
const { link, isActive } = defineProps(["link", "isActive"]);
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="h-[36px] w-[36px] rounded-full p-2" :class="[isActive ? 'bg-[#FDF74B]' : 'bg-transparent']">
            <img class="h-full w-full object-contain" :src="link.img" :alt="link.title" />
        </div>

        <span class="text-[11px] font-extrabold text-[#717171]">{{ link.title }}</span>
    </div>
</template>
