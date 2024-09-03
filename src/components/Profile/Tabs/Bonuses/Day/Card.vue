<script setup>
const { day, imgSrc } = defineProps(["day", "imgSrc"]);
</script>

<template>
    <div
        class="flex h-full w-[173px] shrink-0 flex-col items-center justify-center rounded-[20px] px-6 pb-5 pt-6 [background:linear-gradient(180deg,#1F2022_-22.08%,#121315_110.83%)]"
    >
        <img :src="imgSrc" class="mb-[45px] mt-auto" alt="image" />

        <div class="flex h-[40px] w-full items-center justify-center whitespace-nowrap rounded-[10px] bg-white/[3%] text-[#7F8082]">
            {{ day }}
        </div>
    </div>
</template>
