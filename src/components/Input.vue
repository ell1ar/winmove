<script setup>
const { id } = defineProps(["id"]);
const model = defineModel();
</script>

<template>
    <input
        v-model="model"
        class="h-[45px] w-full rounded-[10px] bg-[#161719] px-[25px] text-white placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#FDF74B]"
    />
</template>
