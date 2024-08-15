<script setup>
import avatar from "@assets/img/avatar.png";
</script>

<template>
    <div class="grid grid-cols-12 bg-[#161719] rounded-[10px] h-[56px] shrink-0 place-content-center">
        <div class="col-span-4 flex items-center gap-2.5 px-[15px] lg:pl-[30px]">
            <div class="w-[40px] h-[40px] rounded-[8px] bg-white/10 bg-no-repeat bg-contain bg-center" :style="{ 'background-image': 'url(' + avatar + ')' }"></div>
            <p class="text-[#BDBDBD] text-[15px]">RakshaSallan</p>
        </div>
        <div class="text-[#5E5E5E] col-span-4 flex items-center gap-2"><strong class="text-[#BDBDBD]">20:27</strong><span>27.06.2024</span></div>
        <div class="text-[#5E5E5E] col-span-2 flex items-center gap-2"><strong class="text-[#BDBDBD]">$56.90</strong></div>
    </div>
</template>
