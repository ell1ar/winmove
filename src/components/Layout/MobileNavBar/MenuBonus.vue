<script setup>
import IconBonusHello from "@/components/Modules/Bonus/icons/IconBonusHello.vue";
import IconBonusRegular from "@/components/Modules/Bonus/icons/IconBonusRegular.vue";
import IconBonusStar from "@/components/Modules/Bonus/icons/IconBonusStar.vue";
const list = [
    {
        title: "Приветственный бонус",
        icon: IconBonusHello,
    },
    {
        title: "Регулярные бонусы",
        icon: IconBonusRegular,
    },
    {
        title: "Специальные бонусы",
        icon: IconBonusStar,
    },
];
</script>

<template>
    <div class="animate__animated animate__fadeIn flex gap-2 overflow-x-auto">
        <div
            v-for="(item, index) in list"
            :key="index"
            class="relative flex h-[60px] w-[164px] shrink-0 items-center overflow-hidden rounded-[10px] border-[1px] border-[#191A1C] bg-[#0F1012] px-[10px]"
        >
            <component :is="item.icon" />
            <p class="ml-[10px] text-[14px] text-[#E2E2E2]">{{ item.title }}</p>
            <div class="absolute bottom-2 right-2 flex h-[14px] items-center justify-center rounded-[6px] bg-[#BD52FD] px-2 text-[12px] text-[#151618]">3</div>

            <!-- Gradients -->
            <svg class="absolute left-0 top-0" xmlns="http://www.w3.org/2000/svg" width="127" height="60" viewBox="0 0 127 60" fill="none">
                <g opacity="0.3" filter="url(#filter0_f_1370_12923)">
                    <ellipse cx="90.0659" cy="46.2576" rx="90.0659" ry="46.2576" transform="matrix(0.916685 -0.399611 0.561821 0.827259 -133 -10.6403)" fill="#BD52FD" />
                </g>
                <defs>
                    <filter id="filter0_f_1370_12923" x="-175.228" y="-125.098" width="301.558" height="233.467" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="32.1" result="effect1_foregroundBlur_1370_12923" />
                    </filter>
                </defs>
            </svg>

            <svg class="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="164" height="60" viewBox="0 0 164 60" fill="none">
                <g opacity="0.3" filter="url(#filter0_f_1370_12922)">
                    <ellipse cx="90.1224" cy="46.2197" rx="90.1224" ry="46.2197" transform="matrix(0.936908 -0.349575 0.515493 0.856894 31 68.9108)" fill="#BD52FD" />
                </g>
                <defs>
                    <filter id="filter0_f_1370_12922" x="-35.9941" y="-61.0979" width="350.513" height="276.219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="43.75" result="effect1_foregroundBlur_1370_12922" />
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
</template>
