<script setup>
import IconFail from "../../icons/IconFail.vue";
import IconSuccess from "../../icons/IconSuccess.vue";
import IconWait from "../../icons/IconWait.vue";
import ImageBitcoin from "../../assets/bitcoin.png";
import ImageTether from "../../assets/tether.png";
import ImageMir from "../../assets/mir.png";
import ImageMastercard from "../../assets/mastercard.png";
import ImageVisa from "../../assets/visa.png";
const rows = [
    {
        id: "48374927",
        method: ImageBitcoin,
        sum: "$113,8",
        bonus: "2x",
        date: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        status: IconFail,
    },
    {
        id: "48374927",
        method: ImageTether,
        sum: "$113,8",
        bonus: "2x",
        date: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        status: IconSuccess,
    },
    {
        id: "48374927",
        method: ImageMir,
        sum: "$113,8",
        bonus: "2x",
        date: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        status: IconWait,
    },
    {
        id: "48374927",
        method: ImageMastercard,
        sum: "$113,8",
        bonus: "2x",
        date: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        status: IconWait,
    },
    {
        id: "48374927",
        method: ImageVisa,
        sum: "$113,8",
        bonus: "2x",
        date: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        status: IconWait,
    },
];
</script>

<template>
    <div class="overflow-x-auto">
        <table class="w-full shrink-0 text-start [border-collapse:separate] [border-spacing:0px_5px]">
            <thead class="mb-1">
                <tr class="h-[45px] whitespace-nowrap bg-[#161719] text-left text-[#4C4D4F] [&>th]:px-[15px]">
                    <th class="rounded-l-[10px] 2xl:!pl-[90px]">ID</th>
                    <th>Метод</th>
                    <th>Сумма</th>
                    <th>Бонус</th>
                    <th>Дата</th>
                    <th class="rounded-r-[10px]">Статус</th>
                </tr>
            </thead>

            <tbody class="text-[#BCBCBC]">
                <tr class="h-[56px] whitespace-nowrap bg-[#161719] last-of-type:rounded-r-[10px] [&>td]:px-[15px]" v-for="(row, i) in rows" :key="i">
                    <td class="rounded-l-[10px] 2xl:!pl-[74px]" v-html="row.id"></td>
                    <td><img :src="row.method" alt="" /></td>
                    <td v-html="row.sum"></td>
                    <td v-html="row.bonus"></td>
                    <td v-html="row.date"></td>
                    <td class="rounded-r-[10px]">
                        <component :is="row.status" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
