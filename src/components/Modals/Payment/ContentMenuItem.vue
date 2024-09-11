<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
    <button class="relative flex h-[119px] overflow-hidden flex-col items-center justify-center rounded-[20px] border-[1px] border-[#191A1C] bg-[#141517] p-[15px]">
        <h3 class="text-[18px] text-[#C9C9C9]">{{ title }}</h3>
        <slot></slot>
    </button>
</template>
