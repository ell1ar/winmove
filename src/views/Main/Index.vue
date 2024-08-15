<script setup></script>

<template>
    <div class="flex grow gap-5 items-stretch transition-all duraction-300">
        <div class="grow flex flex-col gap-5">
            <MainBannerList />
            <MainGameWidget />
            <MainTableIndex />
        </div>

        <div class="w-[37%] min-w-[409px] max-w-[525px] w-full gap-5 flex flex-col">
            <MainBannerRightList />
            <MainBetList />
        </div>
    </div>
</template>
