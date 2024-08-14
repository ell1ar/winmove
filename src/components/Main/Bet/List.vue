<script setup></script>

<template>
    <div class="bg-[#101113] rounded-[20px] flex flex-col grow p-5 gap-2.5">
        <MainBetCard v-for="i in 5" :key="i" />
    </div>
</template>
