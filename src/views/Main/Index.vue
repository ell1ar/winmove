<script setup></script>

<template>
    <div class="duraction-300 flex flex-col gap-5 transition-all 2xl:flex-row">
        <div class="contents flex-col gap-5 2xl:flex">
            <MainBannerList class="order-1" />
            <MainGameWidget class="hidden 2xl:order-2 2xl:flex" />
            <MainTableIndex class="order-4 mx-[15px] lg:mx-0 2xl:order-3" />
        </div>

        <div class="contents shrink-0 flex-col gap-5 2xl:flex 2xl:w-[clamp(409px,409px,525px)]">
            <MainBannerRightList class="order-2 2xl:order-1" />
            <MainBetWidget class="order-3 2xl:order-2" />
        </div>
    </div>
</template>
