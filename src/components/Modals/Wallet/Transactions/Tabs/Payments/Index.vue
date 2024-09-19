<script setup>
import IconFail from "@/components/Transaction/icons/IconFail.vue";
import IconSuccess from "@/components/Transaction/icons/IconSuccess.vue";
import IconWait from "@/components/Transaction/icons/IconWait.vue";
import ImageBitcoin from "@/components/Transaction/assets/bitcoin.png";
import ImageMastercard from "@/components/Transaction/assets/mastercard.png";
import ImageMir from "@/components/Transaction/assets/mir.png";
import ImageTether from "@/components/Transaction/assets/tether.png";
import ImageVisa from "@/components/Transaction/assets/visa.png";
const rows = [
    {
        id: "48374927",
        method: ImageBitcoin,
        sum: "$113,8",
        bonus: "$1",
        status: "fail",
        statusIcon: IconFail,
    },
    {
        id: "48374927",
        method: ImageTether,
        sum: "$113,8",
        bonus: "$1",
        status: "success",
        statusIcon: IconSuccess,
    },
    {
        id: "48374927",
        method: ImageMir,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageMastercard,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "$1",
        status: "wait",
        statusIcon: IconWait,
    },
];
</script>

<template>
    <div class="h-[554px] overflow-y-auto pr-[15px]">
        <div class="grid w-full grid-cols-2 gap-2.5">
            <TransactionCard class="min-w-[290px]" v-for="row in rows" :key="row.id" :row="row" />
        </div>
    </div>
</template>
