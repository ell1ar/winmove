<script setup>
</script>

<template>
    <div class="flex overflow-x-auto xl:grid xl:grid-cols-2 2xl:grid-cols-1 gap-2.5">
        <MainBetCard class="w-[318px] xl:w-full shrink-0" v-for="i in 5" :key="i" />
    </div>
</template>
