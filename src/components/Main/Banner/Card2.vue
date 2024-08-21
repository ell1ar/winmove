<script setup></script>

<template>
    <div
        class="relative flex h-[213px] select-none items-center overflow-hidden rounded-[20px] bg-gradient-to-b from-[#1D2025] to-[#111111] p-5 lg:h-[270px] xl:h-[213px] 2xl:h-[213px]"
    >
        <div class="relative z-20 flex h-full w-fit flex-col justify-center">
            <p class="text-start text-[22px] font-bold leading-6 text-white">
                Обнови <br />
                Steam аватар <br />
                и получай <br />
                ежедневные <br />
                выплаты
            </p>

            <button class="mt-auto flex h-[32px] w-fit items-center justify-center rounded-[8px] bg-[#BD52FD] px-[22px] text-[16px] uppercase text-[#101010]">Начать</button>
        </div>

        <img class="absolute right-0 top-0 z-10 h-full w-[165px] object-contain lg:w-auto" src="./assets/card1.png" alt="card-1" />
        <img class="absolute left-0 top-0 z-[1] h-full w-full object-cover" src="./assets/card1pattern.svg" alt="card-pattern" />
        <!-- Gradients -->
        <svg class="absolute left-0 top-0 z-[1] h-full" xmlns="http://www.w3.org/2000/svg" width="205" height="221" viewBox="0 0 205 221" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_1889_125250)">
                <ellipse cx="-112" cy="106" rx="199" ry="111" transform="rotate(180 -112 106)" fill="#BD52FD" />
            </g>
            <defs>
                <filter id="filter0_f_1889_125250" x="-428.3" y="-122.3" width="632.6" height="456.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="58.65" result="effect1_foregroundBlur_1889_125250" />
                </filter>
            </defs>
        </svg>

        <svg class="absolute bottom-0 right-0 z-[1] h-full" xmlns="http://www.w3.org/2000/svg" width="384" height="221" viewBox="0 0 384 221" fill="none">
            <g opacity="0.6" filter="url(#filter0_f_1889_125249)">
                <ellipse cx="277" cy="196.5" rx="87.5" ry="91" transform="rotate(-90 277 196.5)" fill="#BD52FD" />
            </g>
            <defs>
                <filter id="filter0_f_1889_125249" x="0.399994" y="-76.6002" width="553.2" height="546.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="92.8" result="effect1_foregroundBlur_1889_125249" />
                </filter>
            </defs>
        </svg>
    </div>
</template>
