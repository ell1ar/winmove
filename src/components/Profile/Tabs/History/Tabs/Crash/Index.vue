<script setup>
const rows = [
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: "$113,8",
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
    {
        time: `<span class="flex flex-col items-start"><span>20:27</span><strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong></span>`,
        bet: "$56.90",
        coef: "2x",
        result: `<strong class="text-[#5E5E5E]">$0</strong>`,
    },
];
</script>

<template setup>
    <table class="w-full shrink-0 text-start [border-collapse:separate] [border-spacing:0px_5px]">
        <thead class="mb-1">
            <tr class="h-[45px] whitespace-nowrap bg-[#161719] text-left text-[#4C4D4F] [&>th]:px-[15px]">
                <th class="rounded-l-[10px] 2xl:!pl-[90px]">Время</th>
                <th>Сумма ставки</th>
                <th>Коэффициент</th>
                <th class="rounded-r-[10px]">Результат</th>
            </tr>
        </thead>

        <tbody class="text-[#BCBCBC]">
            <tr class="mb-1 h-[56px] whitespace-nowrap bg-[#161719] last-of-type:rounded-r-[10px] [&>td]:px-[15px]" v-for="(row, i) in rows" :key="i">
                <td class="rounded-l-[10px] 2xl:!pl-[90px]" v-html="row.time"></td>
                <td v-html="row.bet"></td>
                <td v-html="row.coef"></td>
                <td class="rounded-r-[10px]" v-html="row.result"></td>
            </tr>
        </tbody>
    </table>
</template>
