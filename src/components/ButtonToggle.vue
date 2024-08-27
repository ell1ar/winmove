<script setup>
const model = defineModel();
</script>

<template>
    <label class="relative inline-flex h-[20px] w-[41px] shrink-0 items-center rounded-full p-[1px]">
        <input type="checkbox" v-model="model" class="peer h-0 w-0 opacity-0" />
        <span class="duration-400 absolute inset-[1px] z-[1] cursor-pointer rounded-full bg-[#777777] transition peer-checked:bg-[#5BC32A]"></span>
        <span
            class="duration-400 pointer-events-none absolute left-1 z-[1] h-[15px] w-[15px] rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-[18px] peer-checked:transform"
        ></span>
        <div class="absolute inset-0 z-0 h-full w-full rounded-full bg-gradient-to-b from-[#c1c1c1] to-[#383838] peer-checked:from-[#c5fbab] peer-checked:to-[#347216]"></div>
    </label>
</template>
