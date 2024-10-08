<script setup>
const { id, classes, label } = defineProps(["id", "classes", "label"]);
const model = defineModel();
</script>

<template>
    <div
        :class="[classes?.base ?? []]"
        class="relative flex h-[55px] w-full flex-col justify-center -space-y-1.5 rounded-[10px] border-[1px] border-[#18191B] bg-[#0B0C0E] px-[25px] font-medium focus-within:outline-none focus-within:ring-1 focus-within:ring-[#FDF74B]"
    >
        <span v-if="label" class="text-[14px] font-normal leading-[26px] text-[#757678] [font-family:Stapel]" for="">{{ label }}</span>

        <input
            :id="id"
            v-bind="$attrs"
            v-model="model"
            :class="[{ 'h-full': !label }, classes?.input ?? []]"
            class="w-full rounded-[10px] bg-transparent text-white [vertical-align:bottom] placeholder:text-[#2D2E30] focus:outline-none"
        />

        <slot name="right"></slot>
    </div>
</template>
