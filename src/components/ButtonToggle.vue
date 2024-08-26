<script setup>
const model = defineModel();
</script>

<template>
    <label class="relative inline-flex h-[20px] w-[41px] items-center rounded-full p-[1px]">
        <input type="checkbox" v-model="model" class="peer h-0 w-0 opacity-0" />
        <span class="duration-400 z-[1] absolute inset-[1px] cursor-pointer rounded-full bg-[#777777] transition peer-checked:bg-[#5BC32A]"></span>
        <span class="duration-400 z-[1] absolute left-1 h-[15px] w-[15px] rounded-full pointer-events-none bg-white shadow-md transition-transform peer-checked:translate-x-[18px] peer-checked:transform"></span>
        <div class="absolute inset-0 w-full rounded-full h-full z-0 from-[#c1c1c1] to-[#383838] peer-checked:from-[#c5fbab] peer-checked:to-[#347216] bg-gradient-to-b "></div>
    </label>
</template>
