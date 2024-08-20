<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/core";
import "@splidejs/vue-splide/css";
import { ref } from "vue";
const currentSlide = ref(0);
const options = ref({
    rewind: true,
    arrows: false,
    pagination: false,
    gap: "16px",
    perPage: 2,
    breakpoints: {
        640: {
            perPage: 1,
        },
    },
});
</script>

<template>
    <div class="rounded-[20px] bg-[#101113] px-5 py-5 lg:overflow-x-hidden">
        <Splide :options="options" aria-label="My Favorite Images">
            <SplideSlide>
                <MainBannerCard1 />
            </SplideSlide>

            <SplideSlide>
                <MainBannerCard2 />
            </SplideSlide>
        </Splide>

        <div class="mx-auto mt-[12px] flex items-center justify-center gap-4">
            <button @click="prev">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L1 5.5L6 10" stroke="#1B1C1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="flex items-center gap-2.5">
                <div
                    v-for="i in 2"
                    :key="i"
                    class="h-[5px] rounded-[30px] transition-all duration-300"
                    :class="[currentSlide === i - 1 ? 'w-[30px] bg-[#606060]' : 'w-[14px] bg-[#1B1C1E]']"
                ></div>
            </div>

            <button @click="next">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5.5L1 10" stroke="#1B1C1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>
