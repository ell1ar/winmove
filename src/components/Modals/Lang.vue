<script setup>
import ruflag from "@assets/img/ruflag.png";
</script>

<template>
    <div class="flex w-[310px] flex-col gap-2 rounded-[15px] bg-[#161719] p-[15px]">
        <div class="flex h-[50px] items-center gap-2 rounded-[10px] border-[1px] border-[#242527] bg-[#1D1E20] px-[15px]">
            <img class="flex h-[23px] w-[23px] rounded-full object-cover" :src="ruflag" alt="flag" />
            <span class="text-[16px] text-[#D2D2D2]">Русский</span>
        </div>

        <div class="flex h-[50px] items-center gap-2 rounded-[10px] bg-[#191A1C] px-[15px]">
            <img class="flex h-[23px] w-[23px] rounded-full object-cover" :src="ruflag" alt="flag" />
            <span class="text-[16px] text-[#D2D2D2]">English</span>
        </div>

        <div class="flex h-[50px] items-center gap-2 rounded-[10px] bg-[#191A1C] px-[15px]">
            <img class="flex h-[23px] w-[23px] rounded-full object-cover" :src="ruflag" alt="flag" />
            <span class="text-[16px] text-[#D2D2D2]">German</span>
        </div>
    </div>
</template>
