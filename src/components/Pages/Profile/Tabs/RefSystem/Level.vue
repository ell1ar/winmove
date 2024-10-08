<script setup>
const { level } = defineProps(["level"]);
const imageUrl = new URL(`./assets/ref/${level}.png`, import.meta.url).href;
</script>

<template>
    <img :src="imageUrl" />
</template>
