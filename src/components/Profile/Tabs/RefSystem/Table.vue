<script setup>
const rows = [
    {
        level: 1,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 2,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 3,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 4,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 5,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 6,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 7,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block xl:block" /> депозиту`,
    },
    {
        level: 8,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 9,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
    {
        level: 10,
        payments: "$0.00",
        percent: "1%",
        ref: `5% к <br class="block lg:hidden xl:block" /> депозиту`,
    },
];
</script>

<template>
    <div class="flex w-full flex-col gap-5 rounded-[15px] bg-[#101113] p-[15px] md:p-[25px]">
        <h2 class="hidden text-[16px] text-[#4C4D4F] md:block">Уровни реферальной системы</h2>

        <table class="w-full shrink-0 text-start text-[12px] [border-collapse:separate] [border-spacing:0px_5px] md:text-[16px]">
            <thead class="mb-1">
                <tr class="h-[45px] whitespace-nowrap bg-[#161719] text-left text-[#4C4D4F] [&>th]:px-[8px] [&>th]:text-center [&>th]:leading-4 md:[&>th]:px-[15px]">
                    <th class="rounded-l-[10px] 2xl:!pl-[90px]">Уровень</th>
                    <th>
                        Пополнений <br class="lg:hidden xl:block 2xl:hidden" />
                        рефералами
                    </th>
                    <th>
                        Процент от <br class="lg:hidden xl:block 2xl:hidden" />
                        пополнений
                    </th>
                    <th class="rounded-r-[10px]">
                        Реферал <br class="lg:hidden xl:block 2xl:hidden" />
                        получит
                    </th>
                </tr>
            </thead>

            <tbody class="text-[#BCBCBC]">
                <tr
                    class="h-[56px] whitespace-nowrap bg-[#161719] last-of-type:rounded-r-[10px] md:h-[76px] [&>td]:px-[8px] [&>td]:text-center md:[&>td]:px-[15px]"
                    v-for="(row, i) in rows"
                    :key="i"
                >
                    <td class="rounded-l-[10px] 2xl:!pl-[90px]"><ProfileTabsRefSystemLevel class="mx-auto w-[30px] md:w-[45px]" :level="row.level" /></td>
                    <td v-html="row.payments"></td>
                    <td v-html="row.percent"></td>
                    <td class="rounded-r-[10px]" v-html="row.ref"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
