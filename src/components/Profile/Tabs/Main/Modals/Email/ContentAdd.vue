<script setup>
const emit = defineEmits(["next"]);
</script>

<template>
    <h2 class="mt-[21px] text-[20px] text-[#E5E5E5]">Добавить новую почту</h2>
    <p class="mt-[15px] px-[5px] text-center text-[14px] font-medium leading-5 text-[#999999]">Пожалуйста, введите и подтвердите новый адрес электронной почты ниже</p>
    <Input class="mt-[25px] h-[45px] border-[#1E1F21] bg-[#161719]" placeholder="Введите электронную почту" />
    <button @click="$emit('next')" class="mt-[10px] flex h-[35px] w-full items-center justify-center rounded-[8px] bg-[#84FD4B] uppercase text-[#101010]">Подтвердить Email</button>
</template>
