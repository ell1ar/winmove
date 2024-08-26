<script setup>
import IconGamepad from "./icons/gamepad.vue";
import IconWallet from "./icons/wallet.vue";
import IconTop from "./icons/top.vue";
const list = [
    {
        icon: IconGamepad,
        value: "0",
        title: "Игр сыграно",
    },
    {
        icon: IconWallet,
        value: "$6 983",
        title: " Сумма выигрышей",
    },
    {
        icon: IconTop,
        value: "$980",
        title: " Топ выигрыш",
    },
];
</script>

<template>
    <div class="grid w-full grid-cols-12 gap-2 md:gap-5 2xl:flex">
        <ProfileStatCard
            class="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-6"
            v-for="item in list"
            :key="item.title"
            :icon="item.icon"
            :value="item.value"
            :title="item.title"
        />
        <ProfilePromocodeCard class="col-span-12 mt-3 md:col-span-12 md:mt-0 lg:col-span-3 xl:col-span-6 2xl:min-w-[338px]" />
    </div>
</template>
