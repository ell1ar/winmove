<script setup></script>

<template>
    <div
        class="relative flex h-[213px] select-none items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5 lg:h-[270px] xl:h-[213px] 2xl:h-[213px]"
    >
        <div class="relative z-10 flex flex-col items-center -space-y-5">
            <p class="text-[22px] uppercase text-white">Бонус</p>

            <div class="relative flex flex-nowrap font-['Stapel_Expanded'] text-[70px] text-white">
                <div class="relative flex items-center justify-center">
                    <span>5</span>
                </div>
                <div class="relative flex items-center justify-center">
                    <span>0</span>
                    <img class="absolute z-[2]" src="./assets/diamond.svg" alt="" />
                    <span class="absolute z-0 h-10 w-10 rounded-full bg-white"></span>
                </div>
                <div class="relative flex items-center justify-center">
                    <span>0</span>
                    <img class="absolute z-[2]" src="./assets/diamond.svg" alt="" />
                    <span class="absolute z-0 h-10 w-10 rounded-full bg-white"></span>
                </div>
                <div class="relative flex items-center justify-center">
                    <span>%</span>
                </div>
            </div>

            <p class="font-light text-white">на первый депозит</p>
        </div>

        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card2pattern.svg" alt="card-pattern" />
        <!-- Gradients -->
        <svg class="absolute left-0 top-0 z-[1] h-full" xmlns="http://www.w3.org/2000/svg" width="203" height="213" viewBox="0 0 203 213" fill="none">
            <g opacity="0.3" filter="url(#filter0_f_1257_42369)">
                <ellipse cx="-197.5" cy="120" rx="293.5" ry="206" transform="rotate(180 -197.5 120)" fill="#91E2FD" />
            </g>
            <defs>
                <filter id="filter0_f_1257_42369" x="-597.8" y="-192.8" width="800.6" height="625.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="53.4" result="effect1_foregroundBlur_1257_42369" />
                </filter>
            </defs>
        </svg>

        <svg class="absolute bottom-0 right-0 z-[1] h-full" xmlns="http://www.w3.org/2000/svg" width="295" height="213" viewBox="0 0 295 213" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_1257_42370)">
                <ellipse cx="422" cy="225" rx="242" ry="170" transform="rotate(180 422 225)" fill="#91E2FD" />
            </g>
            <defs>
                <filter id="filter0_f_1257_42370" x="0.399994" y="-124.6" width="843.2" height="699.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="89.8" result="effect1_foregroundBlur_1257_42370" />
                </filter>
            </defs>
        </svg>
    </div>
</template>
