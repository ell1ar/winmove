<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
    <button class="relative flex h-[105px] flex-col items-center justify-between overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] bg-[#141517] p-[15px] md:h-[119px]">
        <h3 class="text-[14px] md:text-[18px] text-[#C9C9C9]">{{ title }}</h3>
        <slot></slot>
    </button>
</template>
