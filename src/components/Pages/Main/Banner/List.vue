<script setup></script>

<template>
    <div class="rounded-[20px] bg-[#101113] px-5 py-5 lg:overflow-x-hidden">
        <UISlider :breakpoints="{ 640: 2 }">
            <template #slides>
                <PagesMainBannerCard1 />
                <PagesMainBannerCard2 />
            </template>
        </UISlider>
    </div>
</template>
