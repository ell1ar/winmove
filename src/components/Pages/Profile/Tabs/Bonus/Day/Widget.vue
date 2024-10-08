<script setup></script>

<template>
    <div class="flex w-full flex-col gap-5 rounded-[20px] bg-[#101113] p-[15px] md:p-[25px] md:flex-row">
        <div class="contents flex-col gap-2.5 md:flex">
            <PagesProfileTabsBonusDayBanner class="h-[160px] w-full shrink-0 max-md:order-1 md:h-[240px] md:w-[380px]" />
            <div class="contents gap-3 md:flex">
                <PagesProfileTabsBonusDayButtonAccess class="w-full max-md:order-2 md:w-fit" />
                <PagesProfileTabsBonusDayButtonConditional class="w-full max-md:order-5 md:w-fit" />
            </div>
        </div>
        <PagesProfileTabsBonusDayList class="max-md:order-3" />
    </div>
</template>
