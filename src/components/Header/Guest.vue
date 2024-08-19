<template>
    <div class="flex items-center gap-2.5 h-[35px] md:h-[53px]">
        <button @click="$emit('toggle-auth')" class="rounded-[8px] bg-[#1B1C1E] h-full px-2.5 text-[12px] uppercase text-[#A8A9AB] md:px-[27px] md:text-[17px]">
            Войти
        </button>
        <button class="rounded-[8px] bg-[#FDF74B] px-2.5 text-[12px] uppercase text-[#101010] h-full md:px-[27px] md:text-[17px]">Регистрация</button>
    </div>
</template>
