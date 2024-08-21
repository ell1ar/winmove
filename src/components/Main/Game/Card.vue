<script setup>
import close from "@assets/img/close.svg";
const { figure, title, color, figureClass, isClosed, pattern } = defineProps(["figure", "title", "color", "figureClass", "isClosed", "pattern"]);
const classes = {
    pink: {
        title: "text-[#BD52FD]",
        button: "from-[#E6BDFF] to-[#BD52FD]",
        color: "#BD52FD",
        color2: "#D394F8",
    },
    yellow: {
        title: "text-[#FDF74B]",
        button: "from-[#FFFCB2] to-[#FDF74B]",
        color: "#FDF74B",
        color2: "#FDFAA8",
    },
    blue: {
        title: "text-[#91E2FD]",
        button: "from-[#B2ECFF] to-[#91E2FD]",
        color: "#91E2FD",
        color2: "#91E2FD",
    },
}[color];
</script>

<template>
    <a
        href="#"
        class="relative flex aspect-[557/225] h-full max-h-[225px] min-h-[188px] w-full grow flex-col overflow-hidden rounded-[20px] border-[1px] border-[#151619] bg-cover bg-no-repeat p-[22px] [background:linear-gradient(50deg,#020202,#202127)]"
        :class="[isClosed ? 'cursor-not-allowed' : '']"
    >
        <div class="relative z-[2] flex h-full w-fit flex-col justify-center">
            <div class="leading-5">
                <h2 class="text-[22px] uppercase" :class="classes.title">{{ title }}</h2>
                <p class="ml-0.5 text-[14px] font-light text-[#FFFFFF]">ONLINE: 345</p>
            </div>

            <button class="mt-auto h-[35.52px] w-[132px] rounded-[8px] bg-gradient-to-r text-[16px] font-bold uppercase" :class="classes.button">Играть</button>
        </div>

        <img class="absolute top-0 z-[1] h-full" :class="figureClass" :src="figure" alt="figure" />
        <img class="absolute left-0 top-0 z-0 h-full w-full object-cover mix-blend-normal" :src="pattern" alt="card-pattern" />

        <svg class="absolute left-0 top-0 z-0" xmlns="http://www.w3.org/2000/svg" width="218" height="226" viewBox="0 0 218 226" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_790_93827)">
                <ellipse cx="206.206" cy="106.832" rx="206.206" ry="106.832" transform="matrix(0.941227 -0.337774 0.493662 0.869654 -380.402 22.8062)" :fill="classes.color" />
            </g>
            <defs>
                <filter id="filter0_f_790_93827" x="-484.752" y="-220.061" width="702.35" height="532.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_790_93827" />
                </filter>
            </defs>
        </svg>

        <svg class="absolute bottom-0 right-0 z-0" xmlns="http://www.w3.org/2000/svg" width="398" height="226" viewBox="0 0 398 226" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_790_93855)">
                <ellipse cx="206.206" cy="106.832" rx="206.206" ry="106.832" transform="matrix(0.941227 -0.337774 0.493662 0.869654 104.996 219.49)" :fill="classes.color" />
            </g>
            <defs>
                <filter id="filter0_f_790_93855" x="0.646484" y="-23.3773" width="702.35" height="532.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_790_93855" />
                </filter>
            </defs>
        </svg>

        <div v-if="isClosed" class="absolute left-0 top-0 z-[3] flex h-full w-full items-center justify-center bg-[#08090C]/50 backdrop-blur-[2px]">
            <span class="inline-flex flex-col items-center justify-center">
                <img :src="close" class="h-[50px] w-[50px]" alt="close" />
                <span class="text-[20px] text-white/[18%]">Скоро</span>
            </span>
        </div>
    </a>
</template>
