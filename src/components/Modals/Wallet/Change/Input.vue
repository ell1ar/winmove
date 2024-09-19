<script setup>
const { title, ...props } = defineProps(["title"]);
</script>

<template>
    <div class="h-[60px] grow rounded-[15px] border-[1px] border-[#1D1E20] bg-[#090A0C] flex items-center pl-[15px] pr-[10px]">
        <slot name="left"></slot>
        <div class="flex flex-col">
            <span class="text-[14px] text-[#757678]">{{ title }}</span>
            <input v-bind="props" class="bg-transparent text-[15px] font-bold text-[#C9C9C9] focus:outline-none" type="number" value="12" />
        </div>
        <slot name="right"></slot>
    </div>
</template>
