<script setup>
import ImageCircleBlue from "./assets/circle-blue.svg";
import ImageCirclePurple from "./assets/circle-purple.svg";
import ImageCircleYellow from "./assets/circle-yellow.svg";
import ImageTicketBlue from "./assets/ticket-blue.svg";
import ImageTicketPurple from "./assets/ticket-purple.svg";
import ImageTicketYellow from "./assets/ticket-yellow.svg";
import ImageLeftLightYellow from "./assets/light-r-yellow.png";
import ImageRightLightYellow from "./assets/light-l-yellow.png";
import ImageLeftLightPurple from "./assets/light-r-purple.png";
import ImageRightLightPurple from "./assets/light-l-purple.png";
import ImageLeftLightBlue from "./assets/light-r-blue.png";
import ImageRightLightBlue from "./assets/light-l-blue.png";
const { color } = defineProps(["color"]);
const percent = 15;
const classes = {
    yellow: {
        circle: ImageCircleYellow,
        ticket: ImageTicketYellow,
        leftLight: ImageLeftLightYellow,
        rightLight: ImageRightLightYellow,
        color: "#FDF74B",
        bg: "bg-[#FDF74B]",
        text: "text-[#FDF74B]",
    },
    purple: {
        circle: ImageCirclePurple,
        ticket: ImageTicketPurple,
        leftLight: ImageLeftLightPurple,
        rightLight: ImageRightLightPurple,
        color: "#BD52FD",
        bg: "bg-[#BD52FD]",
        text: "text-[#BD52FD]",
    },
    blue: {
        circle: ImageCircleBlue,
        ticket: ImageTicketBlue,
        leftLight: ImageLeftLightBlue,
        rightLight: ImageRightLightBlue,
        color: "#91E2FD",
        bg: "bg-[#91E2FD]",
        text: "text-[#91E2FD]",
    },
}[color];
</script>

<template>
    <div
        class="relative flex h-[244px] w-[318px] shrink-0 grow flex-col overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] bg-[#101114] px-[15px] pb-5 pt-5 sm:w-[344px] sm:px-6 sm:pt-6 2xl:w-fit"
    >
        <div class="relative z-10 grid grid-cols-2">
            <div class="flex flex-col">
                <h2 class="text-[14px] text-[#A8A9AB]">Приз</h2>
                <strong class="text-[35px] font-bold text-[#EBEBEB]">$15</strong>
                <div class="flex items-center gap-0.5 text-[14px] text-[#A8A9AB]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                        <path
                            d="M5.29646 5.80482C5.87052 5.80482 6.43169 5.63459 6.909 5.31564C7.38631 4.9967 7.75832 4.54338 7.97798 4.013C8.19764 3.48262 8.25509 2.89902 8.14306 2.33599C8.03103 1.77297 7.75455 1.25581 7.34859 0.849918C6.94263 0.444029 6.42542 0.167641 5.86238 0.0557085C5.29933 -0.0562243 4.71574 0.00132534 4.1854 0.22108C3.65506 0.440834 3.2018 0.812923 2.88294 1.29029C2.56408 1.76765 2.39394 2.32886 2.39404 2.90292C2.39485 3.67239 2.70092 4.41011 3.24506 4.95416C3.78921 5.49822 4.52698 5.80415 5.29646 5.80482ZM9.09321 8.20242C8.35774 7.44804 7.41409 6.93003 6.38279 6.71454C5.35149 6.49906 4.27937 6.59589 3.30338 6.99266C2.32738 7.38944 1.49181 8.06815 0.903408 8.9421C0.315004 9.81605 0.000476059 10.8456 0 11.8991C0 12.0338 0.0535063 12.163 0.148748 12.2582C0.24399 12.3535 0.373166 12.407 0.507858 12.407H10.0861C10.2208 12.407 10.3499 12.3535 10.4452 12.2582C10.5404 12.163 10.5939 12.0338 10.5939 11.8991C10.5959 11.3606 10.5128 10.8252 10.3476 10.3126C10.1017 9.52012 9.67188 8.79706 9.09321 8.20242Z"
                            fill="#A8A9AB"
                        />
                        <path
                            d="M11.426 6.05877C12.618 6.05877 13.5844 5.09242 13.5844 3.90037C13.5844 2.70832 12.618 1.74197 11.426 1.74197C10.2339 1.74197 9.26758 2.70832 9.26758 3.90037C9.26758 5.09242 10.2339 6.05877 11.426 6.05877Z"
                            fill="#A8A9AB"
                        />
                        <path
                            d="M11.427 6.65289C10.7463 6.65545 10.0787 6.84085 9.49414 7.1897C9.60435 7.28822 9.71557 7.38523 9.81968 7.49188C10.5112 8.20265 11.0249 9.06682 11.3189 10.0139C11.4196 10.3257 11.4938 10.6454 11.5408 10.9697H14.7281C14.8628 10.9697 14.992 10.9162 15.0872 10.8209C15.1825 10.7257 15.236 10.5965 15.236 10.4618C15.2349 9.45197 14.8333 8.48377 14.1192 7.76969C13.4051 7.05561 12.4369 6.65397 11.427 6.65289Z"
                            fill="#A8A9AB"
                        />
                    </svg>
                    <span>164</span>
                </div>
            </div>

            <div class="relative flex items-center justify-center">
                <img :src="classes.ticket" class="absolute z-10" alt="ticket" />
                <img class="motion-safe:animate-spin-reverse-slow" :src="classes.circle" alt="circle" />
            </div>
        </div>

        <div class="relative z-10 mt-auto flex flex-col gap-[5px]">
            <div class="flex items-center justify-between text-[15px]">
                <span :class="classes.text">$14</span>
                <span class="text-[#ACACAC]">$30</span>
            </div>

            <div class="relative h-[7px] w-full overflow-hidden rounded-[2px] bg-white/[11%]">
                <div
                    :class="classes.bg"
                    class="absolute left-0 top-0 h-full"
                    :style="{
                        width: `${percent}%`,
                    }"
                ></div>
            </div>
        </div>

        <button
            :class="classes.bg"
            class="relative z-10 mt-3 flex h-[40px] w-full items-center justify-center rounded-[8px] bg-white/[5%] text-[14px] font-bold uppercase text-[#ACACAC]"
        >
            Принять участие
        </button>

        <img class="absolute bottom-0 left-0 z-0 h-full w-full" :src="classes.leftLight" alt="leftLight" />
        <img class="absolute right-0 top-0 z-0 h-full w-full" :src="classes.rightLight" alt="leftLight" />
    </div>
</template>
