<script setup>
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";
import IconDeposit from "./assets/deposit.svg";
import IconWithdraw from "./assets/withdraw.svg";
import IconChange from "./assets/change.svg";
import IconHistory from "./assets/history.svg";
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
const tabs = ref([
    {
        title: "Депозит",
        img: IconDeposit,
    },
    {
        title: "Вывести",
        img: IconWithdraw,
    },
    {
        title: "Обмен",
        img: IconChange,
    },
    {
        title: "История платежей",
        img: IconHistory,
    },
]);
const activeTab = ref(1);
</script>

<template>
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        swipe-to-close="down"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="relative flex overflow-hidden rounded-[20px]">
            <button @click="$emit('close')" class="absolute right-[20px] top-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <g clip-path="url(#clip0_1618_130402)">
                        <path
                            d="M1.23234 12.8986C0.913628 12.9171 0.600176 12.8113 0.358078 12.6035C-0.119359 12.124 -0.119359 11.3495 0.358078 10.87L10.8124 0.431857C11.309 -0.0320863 12.0882 -0.00629599 12.5528 0.489511C12.973 0.937867 12.9975 1.627 12.6102 2.10394L2.09427 12.6035C1.85532 12.8083 1.54687 12.9139 1.23234 12.8986Z"
                            fill="#2E2F31"
                        />
                        <path
                            d="M11.6744 12.8986C11.3514 12.8972 11.0418 12.7692 10.8124 12.5421L0.3581 2.10389C-0.0842202 1.58816 -0.0240844 0.81202 0.492443 0.370345C0.953457 -0.0238389 1.63336 -0.0238389 2.09433 0.370345L12.6102 10.8085C13.1067 11.2725 13.1324 12.0506 12.6676 12.5463C12.6491 12.566 12.63 12.5851 12.6102 12.6035C12.4828 12.7141 12.334 12.7974 12.173 12.8482C12.0121 12.8989 11.8423 12.9161 11.6744 12.8986Z"
                            fill="#2E2F31"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1618_130402">
                            <rect width="13" height="12.9798" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>

            <div class="flex w-[242px] flex-col bg-[#161719] p-[25px]">
                <h2 class="text-[23px] text-white">Кошелек</h2>

                <ul class="mt-[34px] flex w-full flex-col gap-y-2.5">
                    <li class="w-full" v-for="(tab, index) in tabs" :key="tab.title">
                        <button
                            class="flex h-[45px] w-full shrink-0 items-center gap-2.5 rounded-[10px] border-[1px] px-[12px] font-bold"
                            :class="[activeTab === index + 1 ? 'border-[#FDF74B] bg-[#FDF74B] text-[#101010]' : 'border-[#242527] bg-[#1C1D1F] text-[#A8A9AB]']"
                            @click="activeTab = index + 1"
                        >
                            <img :src="tab.img" :alt="tab.title" />
                            <span class="whitespace-nowrap text-[14px]">{{ tab.title }}</span>
                        </button>
                    </li>
                </ul>
            </div>

            <ModalsPaymentContentDepositMenu @crypto="activeTab = 2" @other="activeTab = 3" v-if="activeTab === 1" />
            <ModalsPaymentContentDepositCrypto @back="activeTab = 1" v-if="activeTab === 2" />
            <ModalsPaymentContentDepositOther @back="activeTab = 1" v-if="activeTab === 3" />
        </div>
    </VueFinalModal>
</template>
