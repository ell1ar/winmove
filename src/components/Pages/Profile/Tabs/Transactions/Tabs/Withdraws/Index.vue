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
];
</script>

<template>
    <div class="hidden overflow-x-auto md:block">
        <UIBannerEmpty v-if="isEmpty" @click="isEmpty = false" title="Нет выводов" />

        <table v-if="!isEmpty" @click="isEmpty = true" class="w-full shrink-0 text-start [border-collapse:separate] [border-spacing:0px_5px]">
            <thead class="mb-1">
                <tr class="h-[45px] whitespace-nowrap bg-[#161719] text-left text-[#4C4D4F] [&>th]:px-[15px]">
                    <th class="rounded-l-[10px] 2xl:!pl-[74px]">ID</th>
                    <th>Метод</th>
                    <th>Сумма</th>
                    <th>Дата</th>
                    <th class="rounded-r-[10px]">Статус</th>
                </tr>
            </thead>

            <tbody class="text-[#BCBCBC]">
                <tr class="h-[56px] whitespace-nowrap bg-[#161719] last-of-type:rounded-r-[10px] [&>td]:px-[15px]" v-for="(row, i) in rows" :key="i">
                    <td class="rounded-l-[10px] 2xl:!pl-[74px]" v-html="row.id"></td>
                    <td><img :src="row.method" alt="method" /></td>
                    <td v-html="row.sum"></td>
                    <td>
                        <span class="flex flex-col items-start">
                            <span>20:27</span>
                            <strong class="text-[13px] text-[#5E5E5E]">27.06.2024</strong>
                        </span>
                    </td>
                    <td class="rounded-r-[10px]">
                        <component :is="row.statusIcon" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="flex w-full flex-col gap-2 md:hidden">
        <ModulesTransactionCard v-for="row in rows" :key="row.id" :row="row" />
    </div>
</template>
