<script setup></script>

<template>
    <div class="mt-[34px] flex flex-col gap-5 transition-all md:mt-0 2xl:flex-row">
        <div class="contents gap-5 xl:flex-col 2xl:flex">
            <PagesMainBannerList class="order-1" />
            <PagesMainGameWidget class="hidden xl:order-2 xl:flex" />
            <PagesMainTableIndex class="order-4 mx-[15px] lg:mx-0 xl:order-3" />
        </div>

        <div class="contents shrink-0 flex-col gap-5 xl:w-[clamp(409px,37%,525px)] 2xl:flex">
            <PagesMainBannerRightList class="order-2 xl:order-1" />
            <PagesMainBetWidget class="order-3 xl:order-2" />
        </div>
    </div>
</template>
