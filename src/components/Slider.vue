<template>
    <section class="relative mx-auto w-full overflow-hidden">
        <div class="overflow-hidden" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <div ref="slides" class="ease flex justify-between transition-transform duration-[0.5s]" :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }">
                <slot name="slides"></slot>
            </div>
        </div>

        <div class="mx-auto mt-[12px] flex items-center justify-center gap-4">
            <button @click="prevSlide">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L1 5.5L6 10" stroke="#1B1C1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="flex items-center gap-2.5">
                <button
                    v-for="dot in dotCount"
                    :key="dot"
                    :class="currentIndex === dot - 1 ? 'w-[30px] bg-[#606060]' : 'w-[14px] bg-[#1B1C1E]'"
                    class="ease h-[5px] rounded-[30px] transition-all duration-300"
                    @click="goToSlide(index)"
                ></button>
            </div>

            <button @click="nextSlide">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5.5L1 10" stroke="#1B1C1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        breakpoints: {
            type: Object,
        },
    },
    data() {
        return {
            currentIndex: 0,
            startX: 0,
            slidesPerView: 1,
            slideWidth: 100,
            slideCount: 0,
        };
    },
    computed: {
        dotCount() {
            return Math.ceil(this.slideCount / this.slidesPerView);
        },
    },
    mounted() {
        this.slideCount = this.$refs.slides.children.length;
        this.$nextTick(() => {
            this.updateSlidesPerView();
            window.addEventListener("resize", this.updateSlidesPerView);
        });
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateSlidesPerView);
    },
    methods: {
        touchStart(event) {
            this.startX = event.touches[0].clientX;
        },
        touchMove(event) {
            this.endX = event.touches[0].clientX;
        },
        touchEnd() {
            const diffX = this.startX - this.endX;
            if (diffX > 50) this.nextSlide();
            if (diffX < -50) this.prevSlide();
            this.startX = 0;
            this.endX = 0;
        },
        updateSlidesPerView() {
            this.slidesPerView = 1;
            this.breakpoints &&
                Object.keys(this.breakpoints).forEach((key) => {
                    if (window.innerWidth >= parseInt(key)) this.slidesPerView = this.breakpoints[key];
                });
            this.slideWidth = 100 / this.slidesPerView;
            const kof = this.slidesPerView === 1 ? 1 : 0.98;
            for (let slide of this.$refs.slides.children) {
                slide.style.width = `${this.slideWidth * kof}%`;
                slide.style.flexShrink = 0;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                return;
            }
            this.currentIndex = this.dotCount - 1;
        },
        nextSlide() {
            if (this.currentIndex < this.dotCount - 1) {
                this.currentIndex++;
                return;
            }
            this.currentIndex = 0;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
    },
};
</script>
