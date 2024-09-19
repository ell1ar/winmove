<script setup>
const { title } = defineProps(["title"]);
</script>

<template>
    <div class="relative flex h-[60px] grow items-center rounded-[15px] border-[1px] border-[#1D1E20] bg-[#090A0C] pl-[15px] pr-[10px]">
        <slot name="left"></slot>
        <div class="flex flex-col -space-y-1">
            <span class="text-[14px] text-[#757678]">{{ title }}</span>
            <input v-bind="$attrs" class="w-2/3 bg-transparent text-[15px] font-bold text-[#C9C9C9] focus:outline-none" type="number" value="12" />
        </div>
        <slot name="right"></slot>
    </div>
</template>
