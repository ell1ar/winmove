<script setup></script>

<template>
    <div class="flex gap-5 transition-all duraction-300">
        <div class="flex flex-col gap-5">
            <MainBannerList />
            <MainGameWidget />
            <MainTableIndex />
        </div>

        <div class="min-w-[409px] max-w-[525px] gap-5 flex flex-col">
            <MainBannerRightList />
            <MainBetList />
        </div>
    </div>
</template>
