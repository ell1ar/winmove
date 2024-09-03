<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
    <div class="flex h-[55px] items-center justify-between rounded-[10px] bg-[#141517] pl-[25px] pr-[8px]">
        <span class="text-[18px] text-[#BCBCBC]">{{ title }}</span>
        <slot name="right"></slot>
    </div>
</template>
