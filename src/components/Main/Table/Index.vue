<script setup></script>

<template>
    <div class="h-[633px] grow bg-[#101113] rounded-[20px] p-5 flex flex-col overflow-y-auto gap-[5px]">
        <div class="h-[45px] shrink-0 bg-[#161719] rounded-[10px] place-content-center grid grid-cols-12 w-full text-[#4C4D4F]">
            <div class="col-span-4 pl-[30px]"><span>Пользователь</span></div>
            <div class="col-span-4"><span>Время</span></div>
            <div class="col-span-2"><span>Выигрыш</span></div>
        </div>

        <MainTableRow v-for="i in 12" :key="i" />
    </div>
</template>
