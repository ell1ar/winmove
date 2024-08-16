<template>
    <div class="flex items-center gap-2.5">
        <button @click="$emit('toggle-auth')" class="h-[35px] rounded-[8px] bg-[#1B1C1E] px-2.5 text-[12px] uppercase text-[#A8A9AB] lg:h-[53px] lg:px-[27px] lg:text-[17px]">
            Войти
        </button>
        <button class="h-[35px] rounded-[8px] bg-[#FDF74B] px-2.5 text-[12px] uppercase text-[#101010] lg:h-[53px] lg:px-[27px] lg:text-[17px]">Регистрация</button>
    </div>
</template>
