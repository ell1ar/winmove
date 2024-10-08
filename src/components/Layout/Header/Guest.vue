<template>
    <div class="flex h-[35px] items-center gap-2.5 md:h-[53px]">
        <button @click="$emit('auth')" class="h-full rounded-[8px] bg-[#1B1C1E] px-2.5 text-[12px] uppercase text-[#A8A9AB] md:px-[27px] md:text-[17px]">Войти</button>

        <button @click="$emit('modal-register')" class="h-full rounded-[8px] bg-[#FDF74B] px-2.5 text-[12px] uppercase text-[#101010] md:px-[27px] md:text-[17px]">
            Регистрация
        </button>
    </div>
</template>
