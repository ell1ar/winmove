<script setup>
const { color } = defineProps(["color"]);
</script>

<template>
    <p
        class="text-[10px] sm:text-[15px]"
        :class="[
            color === 'blue' && 'text-[#91E2FD]',
            color === 'orange' && 'text-[#F7BE4A]',
            color === 'yellow' && 'text-[#FDF74B]',
            color === 'purple' && 'text-[#BD52FD]',
            color === 'white' && 'text-[#F1F1F1]',
        ]"
    >
        RakshaSallan
    </p>
</template>
