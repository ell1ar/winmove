<script setup>
import IconFail from "@/components/Modules/Transaction/icons/IconFail.vue";
import IconSuccess from "@/components/Modules/Transaction/icons/IconSuccess.vue";
import IconWait from "@/components/Modules/Transaction/icons/IconWait.vue";
import ImageBitcoin from "@/components/Modules/Transaction/assets/bitcoin.png";
import ImageTether from "@/components/Modules/Transaction/assets/tether.png";
import ImageMir from "@/components/Modules/Transaction/assets/mir.png";
import ImageMastercard from "@/components/Modules/Transaction/assets/mastercard.png";
import ImageVisa from "@/components/Modules/Transaction/assets/visa.png";
import { ref } from "vue";

const isEmpty = ref(false);
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
        <UIBannerEmpty v-if="isEmpty" @click="isEmpty = false" title="Нет транзакции" />

        <div v-if="!isEmpty" @click="isEmpty = true" class="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2">
            <ModulesTransactionCard class="min-w-[290px]" v-for="row in rows" :key="row.id" :row="row" />
        </div>
    </div>
</template>
