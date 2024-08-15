<script setup>
const { title, color } = defineProps(["title", "color"]);
const classes = {
    pink: {
        title: "text-[#BD52FD]",
        bg: "from-[#301f3d] via-[#17161b] to-[#141517]",
        winBg: "from-[#BD52FD] to-[#BD52FD]/50",
        winText: "text-[#9883B0]",
        count: "text-[#595063]",
        countFillColor: "#595063",
        price: "text-[#CEBCE3]",
    },
    yellow: {
        title: "text-[#FDF74B]",
        bg: "from-[#36361e] via-[#181918] to-[#141517]",
        winBg: "from-[#FDF74B] to-[#FDF74B]/50",
        winText: "text-[#B0AF83]",
        count: "text-[#636150]",
        countFillColor: "#636150",
        price: "text-[#E3DCBC]",
    },
    blue: {
        title: "text-[#91E2FD]",
        bg: "from-[#28363c] via-[#15181a] to-[#141517]",
        winBg: "from-[#91E2FD] to-[#91E2FD]/50",
        winText: "text-[#83A3B0]",
        count: "text-[#506063]",
        countFillColor: "#506063",
        price: "text-[#BCD7E3]",
    },
}[color];
</script>

<template>
    <div class="flex relative w-full pl-[50px] pr-[11px] items-center bg-gradient-to-r overflow-hidden rounded-[10px] h-[60px]" :class="[classes.bg]">
        <span class="absolute top-0 left-0">
            <slot name="image"></slot>
        </span>

        <div class="flex flex-col">
            <h1 class="text-[18px]" :class="[classes.title]">{{ title }}</h1>

            <span class="text-[13px] inline-flex gap-0.5 items-center" :class="[classes.count]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                    <path
                        d="M5.357 5.80482C5.93107 5.80482 6.49224 5.63459 6.96955 5.31564C7.44686 4.9967 7.81887 4.54338 8.03853 4.013C8.25819 3.48262 8.31564 2.89902 8.20361 2.33599C8.09158 1.77297 7.8151 1.25581 7.40914 0.849918C7.00318 0.444029 6.48597 0.167641 5.92292 0.0557085C5.35988 -0.0562243 4.77628 0.00132534 4.24595 0.22108C3.71561 0.440834 3.26235 0.812923 2.94349 1.29029C2.62463 1.76765 2.45449 2.32886 2.45459 2.90292C2.4554 3.67239 2.76146 4.41011 3.30561 4.95416C3.84976 5.49822 4.58753 5.80415 5.357 5.80482ZM9.15375 8.20242C8.41828 7.44804 7.47463 6.93003 6.44334 6.71454C5.41204 6.49906 4.33992 6.59589 3.36392 6.99266C2.38792 7.38944 1.55236 8.06815 0.963955 8.9421C0.375551 9.81605 0.0610229 10.8456 0.0605469 11.8991C0.0605469 12.0338 0.114053 12.163 0.209295 12.2582C0.304537 12.3535 0.433713 12.407 0.568405 12.407H10.1466C10.2813 12.407 10.4105 12.3535 10.5057 12.2582C10.601 12.163 10.6545 12.0338 10.6545 11.8991C10.6564 11.3606 10.5733 10.8252 10.4082 10.3126C10.1623 9.52012 9.73243 8.79706 9.15375 8.20242Z"
                        :fill="classes.countFillColor"
                    />
                    <path
                        d="M11.4875 6.05877C12.6796 6.05877 13.6459 5.09242 13.6459 3.90037C13.6459 2.70832 12.6796 1.74197 11.4875 1.74197C10.2954 1.74197 9.3291 2.70832 9.3291 3.90037C9.3291 5.09242 10.2954 6.05877 11.4875 6.05877Z"
                        :fill="classes.countFillColor"
                    />
                    <path
                        d="M11.4876 6.65289C10.8068 6.65545 10.1393 6.84085 9.55469 7.1897C9.66489 7.28822 9.77611 7.38523 9.88022 7.49188C10.5717 8.20265 11.0854 9.06682 11.3794 10.0139C11.4801 10.3257 11.5543 10.6454 11.6014 10.9697H14.7887C14.9234 10.9697 15.0525 10.9162 15.1478 10.8209C15.243 10.7257 15.2965 10.5965 15.2965 10.4618C15.2955 9.45197 14.8938 8.48377 14.1797 7.76969C13.4657 7.05561 12.4975 6.65397 11.4876 6.65289Z"
                        :fill="classes.countFillColor"
                    />
                </svg>
                <span>28</span>
            </span>
        </div>

        <div class="flex flex-col items-center ml-auto">
            <span class="text-[#CEBCE3]" :class="[classes.price]">$18.32</span>
            <div class="p-[1px] rounded-full flex items-center h-[21px] bg-gradient-to-r justify-center text-[#9883B0] text-[11px]" :class="[classes.winBg]">
                <div class="flex items-center justify-center bg-[#141517] rounded-full px-[13px]" :class="[classes.winText]">WIN</div>
            </div>
        </div>
    </div>
</template>
