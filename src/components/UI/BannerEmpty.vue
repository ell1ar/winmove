<script setup>
const { title } = defineProps({
    title: String,
});
</script>

<template>
    <div class="flex h-[207px] items-center justify-center rounded-[20px] border-[1px] border-[#191A1C] bg-[#121315]">
        <span class="text-[18px] text-[#696A6C] font-[400]">{{ title }}</span>
    </div>
</template>
