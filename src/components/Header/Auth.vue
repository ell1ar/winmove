<script setup>
import avatar from "@assets/img/avatar.png";
import { ref } from "vue";
const isShowModalProfile = ref(false);
const isShowModalBalance = ref(false);
</script>

<template>
    <div class="flex gap-2.5 h-[35px] md:h-[53px]">
        <button
            @click="isShowModalBalance = !isShowModalBalance"
            class="relative flex h-full items-center justify-center rounded-[10px] bg-[#1B1C1E] pl-[14px] pr-[7px] "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <g clip-path="url(#clip0_790_90682)">
                    <path
                        d="M12.5 24.707C19.2418 24.707 24.707 19.2418 24.707 12.5C24.707 5.75824 19.2418 0.292969 12.5 0.292969C5.75824 0.292969 0.292969 5.75824 0.292969 12.5C0.292969 19.2418 5.75824 24.707 12.5 24.707Z"
                        fill="url(#paint0_linear_790_90682)"
                    />
                    <path
                        d="M13.9113 18.7388V20.0224H11.1748V18.7463C8.94365 18.3394 7.56152 16.8716 7.56152 14.6496H11.0633C11.0633 15.4786 11.7408 15.8926 12.4988 15.8926C13.2097 15.8926 13.8872 15.5308 13.8872 14.8988C13.8872 14.1315 12.9367 13.909 11.7713 13.621C9.99189 13.1788 7.72627 12.6294 7.72627 9.83677C7.72627 7.8482 8.95879 6.55801 11.0518 6.18375V4.97769H13.7883V6.1963C15.8684 6.60206 17.041 7.97281 17.041 10.0132L13.6407 10.0209C13.6407 9.30181 13.0653 8.95059 12.3623 8.95059C11.7514 8.95059 11.1682 9.20201 11.1682 9.73184C11.1682 10.4339 12.0899 10.664 13.2573 10.96C15.0706 11.4281 17.4384 12.022 17.4384 14.8312C17.4382 17.0245 16.0219 18.3477 13.9113 18.7388Z"
                        fill="#1B1C1E"
                    />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_790_90682" x1="0.292969" y1="12.5" x2="24.707" y2="12.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#96E3FD" />
                        <stop offset="0.5" stop-color="#91E2FD" />
                        <stop offset="1" stop-color="#53D4FF" />
                    </linearGradient>
                    <clipPath id="clip0_790_90682">
                        <rect width="25" height="25" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <span class="ml-[15px] text-[13px] text-[#AFB0B2] lg:text-[16px]">1 283.93208</span>

            <svg class="ml-[15px] lg:ml-[30px]" xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                <path d="M4.70039 8L0.630072 0.95L8.77071 0.95L4.70039 8Z" fill="#A8A9AB" />
            </svg>

            <div class="ml-[14px] flex h-[25px] w-[25px] items-center justify-center rounded-[8px] bg-[#91E2FD] lg:h-[39px] lg:w-[39px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L8 14M2 8H5.9H14" stroke="#1B1C1E" stroke-width="3" stroke-linecap="round" />
                </svg>
            </div>

            <ModalsBalance v-if="isShowModalBalance" class="absolute right-0 top-[calc(100%+38px)] z-[9999] lg:right-[auto]" />
        </button>

        <button @click="isShowModalProfile = !isShowModalProfile" class="relative hidden h-full w-[90px] items-center rounded-[10px] bg-[#1B1C1E] p-[7px] md:flex">
            <div
                class="h-[39px] w-[39px] rounded-[10px] border-[1px] border-[#FDF74B] bg-[#1B1C1E] bg-contain bg-center bg-no-repeat"
                :style="{ 'background-image': 'url(' + avatar + ')' }"
            ></div>

            <div class="flex grow items-center justify-center">
                <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.70039 8L0.630072 0.95L8.77071 0.95L4.70039 8Z" fill="#A8A9AB" />
                </svg>
            </div>

            <ModalsProfile v-if="isShowModalProfile" class="absolute right-0 top-[calc(100%+38px)] z-[9999]" />
        </button>
    </div>
</template>
