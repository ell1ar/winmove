<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
    <div class="flex h-[47px] items-center justify-between rounded-[10px] bg-[#141517] pl-[15px] pr-[8px] md:h-[55px] md:pl-[25px]">
        <span class="text-[14px] font-medium text-[#BCBCBC] md:text-[18px]">{{ title }}</span>
        <slot name="right"></slot>
    </div>
</template>
