<script setup>
import ImageProtect from "../assets/protect.png";
const emit = defineEmits(["close", "next"]);
</script>

<template>
    <div class="h-[153px] w-[153px]">
        <img :src="ImageProtect" class="h-full w-full scale-[1.5] object-cover" alt="ImageProtect" />
    </div>

    <h2 class="mt-[10px] text-[20px] text-[#E5E5E5]">Ограничения аккаунта</h2>

    <p class="mt-[15px] px-[15px] text-center text-[15px] font-medium leading-5 text-[#999999]">
        Чтобы защитить безопасность вашего аккаунта, мы отключим ваши выплаты в течение 24 часов после изменения вашей электронной почты.
    </p>

    <div class="mt-[40px] flex w-full gap-2.5">
        <button @click="$emit('close')" class="flex h-[35px] w-full items-center justify-center rounded-[8px] bg-[#333333] uppercase text-[#C0C0C0]">Отмена</button>
        <button @click="$emit('next')" class="flex h-[35px] w-full items-center justify-center rounded-[8px] bg-[#84FD4B] uppercase text-[#101010]">Продолжить</button>
    </div>
</template>
