<script setup>
const { figure, title, color, figureClass } = defineProps(["figure", "title", "color", "figureClass"]);
const classes = {
    pink: {
        title: "text-[#BD52FD]",
        button: "from-[#E6BDFF] to-[#BD52FD]",
    },
    yellow: {
        title: "text-[#FDF74B]",
        button: "from-[#FFFCB2] to-[#FDF74B]",
    },
    blue: {
        title: "text-[#91E2FD]",
        button: "from-[#B2ECFF] to-[#91E2FD]",
    },
}[color];
</script>

<template>
    <div class="min-h-[188px] relative grow w-full overflow-hidden flex flex-col rounded-[20px] border-[1px] border-[#151619] bg-gradient-to-tr from-[#020202] to-[#202127] p-[22px] bg-no-repeat bg-cover">
        <div class="flex-col leading-5 inline-flex">
            <h2 class="text-[22px] uppercase" :class="classes.title">{{ title }}</h2>
            <p class="text-[14px] text-[#FFFFFF] font-light ml-0.5">ONLINE: 345</p>
        </div>

        <img class="absolute top-0 right-0 h-full" :class="figureClass" :src="figure" alt="figure" />

        <button class="mt-auto h-[35.52px] w-[132px] rounded-[8px] bg-gradient-to-r text-[16px] uppercase font-bold" :class="classes.button">Играть</button>
    </div>
</template>
