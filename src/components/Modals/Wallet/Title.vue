<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
    <h2 class="text-[17px] font-bold text-[#DFDFDF] md:text-[20px]">{{ title }}</h2>
</template>
