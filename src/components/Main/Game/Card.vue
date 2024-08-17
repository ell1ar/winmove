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
    <div
        class="relative flex aspect-[557/225] h-full max-h-[225px] min-h-[188px] w-full grow flex-col overflow-hidden rounded-[20px] border-[1px] border-[#151619] bg-cover bg-no-repeat p-[22px] [background:linear-gradient(50deg,#020202,#202127)]"
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
        
        <div
            class="absolute left-0 top-0 z-0 h-[200px] w-[200px] -translate-x-[50%] -translate-y-[50%] rounded-full opacity-30 blur-3xl"
            :style="[{ backgroundColor: classes.color2 }]"
        ></div>

        <div
            class="absolute right-0 top-0 z-0 h-[200px] w-[300px] translate-x-[20%] translate-y-[60%] rounded-full opacity-50 blur-3xl"
            :style="[{ backgroundColor: classes.color }]"
        ></div>

        <div v-if="isClosed" class="absolute left-0 top-0 z-[3] flex h-full w-full items-center justify-center bg-[#08090C]/50 backdrop-blur-[2px]">
            <span class="inline-flex flex-col items-center justify-center">
                <img :src="close" class="h-[50px] w-[50px]" alt="close" />
                <span class="text-[20px] text-white/[18%]">Скоро</span>
            </span>
        </div>
    </div>
</template>
