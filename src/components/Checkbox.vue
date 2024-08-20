<script setup>
import ImageCheck from "@/assets/img/check.svg";
const { checked } = defineProps(["checked"]);
</script>

<template>
    <span class="flex items-center gap-4">
        <button
            class="flex h-5 w-5 shrink-0 flex-col items-center justify-center rounded-md border"
            :class="[checked ? 'bg-primary border-primary' : 'bg-content-4 border-text-secondary']"
        >
            <input :id="id" :checked="checked" type="checkbox" class="hidden" @change="$emit('change', $event)" />

            <img class="ml-px w-2" :src="ImageCheck" />
        </button>

        <label class="flex cursor-pointer items-center justify-center" :for="id">
            <slot name="label"></slot>
        </label>
    </span>
</template>
