<script setup>
const { color, name } = defineProps(["color", "name"]);
</script>

<template>
    <p
        :class="[
            color === 'blue' && 'text-[#91E2FD]',
            color === 'orange' && 'text-[#F7BE4A]',
            color === 'yellow' && 'text-[#FDF74B]',
            color === 'purple' && 'text-[#BD52FD]',
            color === 'white' && 'text-[#F1F1F1]',
        ]"
    >
        {{ name ?? "RakshaSallan" }}
    </p>
</template>
