<script setup></script>

<template>
    <div class="flex flex-col 2xl:flex-row gap-5 transition-all duraction-300">
        <div class="2xl:flex flex-col gap-5 contents">
            <MainBannerList class="order-1" />
            <MainGameWidget class="hidden 2xl:flex 2xl:order-2" />
            <MainTableIndex class="order-4 2xl:order-3 mx-[15px] lg:mx-0" />
        </div>

        <div class="2xl:min-w-[409px] 2xl:max-w-[525px] gap-5 contents 2xl:flex flex-col">
            <MainBannerRightList class="order-2 2xl:order-1" />
            <MainBetWidget class="order-3 2xl:order-2" />
        </div>
    </div>
</template>
