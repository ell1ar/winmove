<script setup>
const { isFull, color, title } = defineProps(["isFull", "color", "title"]);

const classes = {
    blue: {
        color: "#91E2FD",
    },
    yellow: {
        color: "#FDF74B",
    },
}[color];
</script>

<template>
    <a
        href="#"
        class="relative flex w-full items-center overflow-hidden rounded-[10px] border-[1px] border-[#191A1C] bg-[#141517]"
        :class="[isFull ? 'h-[60px]' : 'h-[50px] w-[50px] justify-center']"
    >
        <span class="relative z-10 flex h-full items-center justify-center" :class="[isFull ? 'w-[60px]' : 'w-[30px]']">
            <slot name="image"></slot>
        </span>

        <template v-if="isFull">
            <span class="relative z-10 text-[15px] font-medium uppercase text-[#ffffff]">{{ title }}</span>
            <svg class="absolute bottom-0 right-0 z-[1]" xmlns="http://www.w3.org/2000/svg" width="189" height="61" viewBox="0 0 189 61" fill="none">
                <g opacity="0.5" filter="url(#filter0_f_1517_21525)">
                    <ellipse cx="183.75" cy="95.0481" rx="183.75" ry="95.0481" transform="matrix(0.979357 0.202139 -0.0321688 0.999482 154.062 43.649)" :fill="classes.color" />
                </g>
                <defs>
                    <filter id="filter0_f_1517_21525" x="0.977539" y="-76.2383" width="659.967" height="504.059" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1517_21525" />
                    </filter>
                </defs>
            </svg>
        </template>

        <svg class="absolute left-0 top-0 z-[1]" xmlns="http://www.w3.org/2000/svg" width="159" height="61" viewBox="0 0 159 61" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_1517_21524)">
                <ellipse cx="183.728" cy="95.086" rx="183.728" ry="95.086" transform="matrix(0.941403 -0.337283 0.494275 0.869306 -391 52.2696)" :fill="classes.color" />
            </g>
            <defs>
                <filter id="filter0_f_1517_21524" x="-500.318" y="-180.354" width="658.559" height="506.628" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1517_21524" />
                </filter>
            </defs>
        </svg>

        <span class="absolute left-0 top-0 z-0 h-full w-full">
            <slot name="pattern"></slot>
        </span>
    </a>
</template>
