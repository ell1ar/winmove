<script setup></script>

<template>
    <div class="flex gap-2.5 overflow-x-auto 2xl:grid 2xl:grid-cols-1">
        <MainBetCard class="w-[318px] shrink-0 2xl:w-full" v-for="i in 5" :key="i" />
    </div>
</template>
