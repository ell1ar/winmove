<script setup>
const rows = [
    {
        level: 1,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 2,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 3,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 4,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 5,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 6,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 7,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 8,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 9,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
    {
        level: 10,
        payments: "$0.00",
        percent: "1%",
        ref: "5% к депозиту",
    },
];
</script>

<template>
    <div class="flex w-full flex-col gap-5 rounded-[15px] bg-[#101113] p-[25px]">
        <h2 class="text-[16px] text-[#4C4D4F]">Уровни реферальной системы</h2>
        <table class="w-full shrink-0 text-start [border-collapse:separate] [border-spacing:0px_5px]">
            <thead class="mb-1">
                <tr class="h-[45px] whitespace-nowrap bg-[#161719] text-left text-[#4C4D4F] [&>th]:px-[15px]">
                    <th class="rounded-l-[10px] !pl-[90px]">Уровень</th>
                    <th>Пополнений рефералами</th>
                    <th>Процент от пополнений</th>
                    <th class="rounded-r-[10px]">Реферал получит</th>
                </tr>
            </thead>

            <tbody class="text-[#BCBCBC]">
                <tr class="h-[76px] whitespace-nowrap bg-[#161719] last-of-type:rounded-r-[10px] [&>td]:px-[15px]" v-for="(row, i) in rows" :key="i">
                    <td class="rounded-l-[10px] !pl-[100px]">
                        <ProfileTabsRefSystemLevel class="w-[45px]" :level="row.level" />
                    </td>
                    <td v-html="row.payments"></td>
                    <td v-html="row.percent"></td>
                    <td class="rounded-r-[10px]" v-html="row.ref"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
