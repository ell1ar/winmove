<script setup></script>

<template>
    <aside class="w-[234px] overflow-y-auto bg-[#0D0E11] border-[1px] border-[#151619] flex flex-col px-[12px] py-[35px]">
        <div class="flex flex-col w-full gap-2.5">
            <div class="flex flex-col w-full bg-[#141517] rounded-[10px]">
                <div class="h-[60px] [background-image:url(../assets/main/bg-crush.svg)] bg-no-repeat"></div>
            </div>

            <div class="flex flex-col w-full bg-[#141517] rounded-[10px]">
                <div class="h-[60px] [background-image:url(../assets/main/bg-crush.svg)] bg-no-repeat"></div>
            </div>

            <div class="flex flex-col w-full bg-[#141517] rounded-[10px]">
                <div class="h-[60px] [background-image:url(../assets/main/bg-crush.svg)] bg-no-repeat"></div>
            </div>
        </div>

        <div class="flex flex-col gap-2.5 w-full mt-auto">
            <div class="h-[60px] w-full rounded-[10px] bg-white/10"></div>
            <div class="h-[60px] w-full rounded-[10px] bg-white/10"></div>
            <ul class="flex justify-between px-3">
                <li v-for="i in 4" :key="i">
                    <img src="../assets/main/discord.svg" alt="" />
                </li>
            </ul>
        </div>
    </aside>
</template>

<style scoped></style>
