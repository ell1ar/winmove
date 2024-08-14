<script setup></script>

<template>
    <div class="flex grow gap-5 items-stretch">
        <div class="grow flex flex-col gap-5">
            <MainBannerList />
            <MainGameList />
            <MainTableIndex />
        </div>

        <div class="w-[37%] gap-5 flex flex-col">
            <MainBannerRightList />
            <MainBetList />
        </div>
    </div>
</template>
