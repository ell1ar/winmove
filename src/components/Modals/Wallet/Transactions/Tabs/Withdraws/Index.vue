<script setup>
import IconFail from "@/components/Transaction/icons/IconFail.vue";
import IconSuccess from "@/components/Transaction/icons/IconSuccess.vue";
import IconWait from "@/components/Transaction/icons/IconWait.vue";
import ImageBitcoin from "@/components/Transaction/assets/bitcoin.png";
import ImageTether from "@/components/Transaction/assets/tether.png";
import ImageMir from "@/components/Transaction/assets/mir.png";
import ImageMastercard from "@/components/Transaction/assets/mastercard.png";
import ImageVisa from "@/components/Transaction/assets/visa.png";
const rows = [
    {
        id: "48374921",
        method: ImageBitcoin,
        sum: "$113,8",
        status: "fail",
        statusIcon: IconFail,
    },
    {
        id: "48374922",
        method: ImageTether,
        sum: "$113,8",
        status: "success",
        statusIcon: IconSuccess,
    },
    {
        id: "48374923",
        method: ImageMir,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374924",
        method: ImageMastercard,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
    {
        id: "48374925",
        method: ImageVisa,
        sum: "$113,8",
        status: "wait",
        statusIcon: IconWait,
    },
];
</script>

<template>
    <div class="overflow-y-auto md:h-[554px] md:pr-[15px]">
        <div class="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2">
            <TransactionCard class="min-w-[290px]" v-for="row in rows" :key="row.id" :row="row" />
        </div>
    </div>
</template>
