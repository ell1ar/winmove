<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted, ref } from "vue";

const carousel = ref();
const currentSlide = ref(0);
const breakpoints = {
    375: {
        itemsToShow: 1,
        snapAlign: "center",
    },
    768: {
        itemsToShow: 2,
        snapAlign: "start",
    },
};

onMounted(() => {
    window.addEventListener("resize", carousel.value.updateSlideWidth);
});

function next() {
    carousel.value.next();
}

function prev() {
    carousel.value.prev();
}
</script>

<template>
    <div class="h-[268px] rounded-[20px] bg-[#101113] px-3 py-5 md:h-[281px] lg:h-[344px] lg:overflow-x-hidden xl:h-[250px] 2xl:h-[270px]">
        <Carousel ref="carousel" :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000" v-model="currentSlide">
            <Slide class="px-2" :key="1"><MainBannerCard1 /></Slide>
            <Slide class="px-2" :key="2"><MainBannerCard2 /></Slide>
        </Carousel>

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
