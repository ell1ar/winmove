<script setup>
import ruflag from "@/assets/img/ruflag.png";
</script>

<template>
    <div class="animate__animated flex flex-col gap-2 rounded-[15px] bg-[#161719] p-[15px] md:w-[310px]">
        <div class="mb-[20px] flex w-full items-center justify-between lg:hidden">
            <h2 class="text-[18px] text-white">Язык</h2>

            <button @click="$emit('close')">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.23234 12.9186C0.913628 12.9371 0.600176 12.8312 0.358078 12.6231C-0.119359 12.1428 -0.119359 11.3671 0.358078 10.8868L10.8124 0.432494C11.309 -0.0321695 12.0882 -0.00633913 12.5528 0.490238C12.973 0.939289 12.9975 1.62949 12.6102 2.10717L2.09427 12.6231C1.85532 12.8282 1.54687 12.9339 1.23234 12.9186Z"
                        fill="#2E2F31"
                    />
                    <path
                        d="M11.6739 12.9186C11.3509 12.9173 11.0413 12.789 10.812 12.5615L0.357612 2.10716C-0.0847085 1.59063 -0.0245726 0.813287 0.491955 0.370926C0.952969 -0.0238699 1.63287 -0.0238699 2.09385 0.370926L12.6097 10.8253C13.1062 11.2901 13.1319 12.0693 12.6671 12.5658C12.6486 12.5855 12.6295 12.6046 12.6097 12.6231C12.4824 12.7339 12.3335 12.8173 12.1726 12.8681C12.0116 12.919 11.8418 12.9361 11.6739 12.9186Z"
                        fill="#2E2F31"
                    />
                </svg>
            </button>
        </div>

        <div class="flex h-[50px] items-center gap-2 rounded-[10px] border-[1px] border-[#242527] bg-[#1D1E20] px-[15px]">
            <img class="flex h-[23px] w-[23px] rounded-full object-cover" :src="ruflag" alt="flag" />
            <span class="text-[16px] text-[#D2D2D2]">Русский</span>
        </div>

        <div class="flex h-[50px] items-center gap-2 rounded-[10px] bg-[#191A1C] px-[15px]">
            <img class="flex h-[23px] w-[23px] rounded-full object-cover" :src="ruflag" alt="flag" />
            <span class="text-[16px] text-[#D2D2D2]">English</span>
        </div>

        <div class="flex h-[50px] items-center gap-2 rounded-[10px] bg-[#191A1C] px-[15px]">
            <img class="flex h-[23px] w-[23px] rounded-full object-cover" :src="ruflag" alt="flag" />
            <span class="text-[16px] text-[#D2D2D2]">German</span>
        </div>
    </div>
</template>
