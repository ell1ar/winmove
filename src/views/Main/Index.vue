<script setup></script>

<template>
    <div class="duraction-300 flex flex-col gap-5 transition-all 2xl:flex-row mt-[34px] md:mt-0">
        <div class="contents flex-col gap-5 xl:flex">
            <MainBannerList class="order-1" />
            <MainGameWidget class="hidden xl:order-2 xl:flex" />
            <MainTableIndex class="order-4 mx-[15px] lg:mx-0 xl:order-3" />
        </div>

        <div class="contents shrink-0 flex-col gap-5 2xl:flex xl:w-[clamp(409px,37%,525px)]">
            <MainBannerRightList class="order-2 xl:order-1" />
            <MainBetWidget class="order-3 xl:order-2" />
        </div>
    </div>
</template>
