<script setup>
import ImageCheck from "@/assets/img/check.svg";
const { id } = defineProps(["id"]);
const model = defineModel();
</script>

<template>
    <label :for="id" class="flex cursor-pointer items-center gap-3">
        <span
            class="flex h-5 w-5 shrink-0 flex-col items-center justify-center rounded-md border-[1px]"
            :class="[model ? 'border-[#84FD4B] bg-[#84FD4B]' : 'border-[#1E1F21] bg-[#161719]']"
        >
            <input :id="id" type="checkbox" class="hidden" v-model="model" />
            <img v-show="model" class="w-3" :src="ImageCheck" />
        </span>

        <slot name="label"></slot>
    </label>
</template>
