<script setup></script>

<template>
    <div class="rounded-[20px] bg-[#101113] px-5 py-5 lg:overflow-x-hidden">
        <Slider :breakpoints="{ 640: 2 }">
            <template #slides>
                <MainBannerCard1 />
                <MainBannerCard2 />
            </template>
        </Slider>
    </div>
</template>
