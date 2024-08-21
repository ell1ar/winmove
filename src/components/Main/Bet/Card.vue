<script setup>
import navi from "./assets/navi.png";
import navi2 from "./assets/navi2.png";
</script>

<template>
    <div class="flex grow flex-col items-center rounded-[20px] border-[1px] border-[#222325] p-[15px]">
        <div class="grid w-full grid-cols-3 place-content-stretch">
            <div class="flex flex-col items-center justify-between">
                <img :src="navi" alt="team image" />
                <p class="mt-auto text-center text-[13px] leading-4 text-[#ACACAC]">Natus Vincere</p>
            </div>

            <div class="flex flex-col items-center text-center">
                <h2 class="text-[14px] text-[#BCBCBC]">21:03 MSK</h2>
                <p class="text-[12px] text-[#4C4D4F]">30 июня 2024</p>
                <strong class="-mb-[5px] text-[22px] text-[#1E1E1E]">VS</strong>
            </div>

            <div class="flex flex-col items-center justify-between">
                <img :src="navi2" alt="team image" />
                <p class="mt-auto text-center text-[13px] leading-4 text-[#ACACAC]">Natus Vincere</p>
            </div>
        </div>

        <p class="mb-2.5 mt-[14px] text-center text-[12px] leading-4 text-[#4C4D4F]">PGL CS2 Major Copenhagen 2024</p>

        <button class="flex h-[40px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-b from-[#898630] to-[#36351f] p-[1.5px]">
            <div class="relative flex h-full w-full items-center justify-center rounded-[9px] bg-[#17181A] text-[14px] uppercase text-[#FDF74B]">
                <span>Сделать ставку</span>

                <svg class="absolute z-0" xmlns="http://www.w3.org/2000/svg" width="286" height="41" viewBox="0 0 286 41" fill="none">
                    <g filter="url(#filter0_f_1385_16107)">
                        <ellipse cx="145.5" cy="20.5" rx="74.5" ry="6.5" fill="#FDF74B" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1385_16107" x="0.5" y="-56.5" width="290" height="154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="35.25" result="effect1_foregroundBlur_1385_16107" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </button>
    </div>
</template>
