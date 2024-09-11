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
const activeTab = ref(tabs[0]);
</script>

<template>
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        swipe-to-close="down"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="flex overflow-hidden rounded-[20px]">
            <div class="flex w-[242px] flex-col bg-[#161719] p-[25px]">
                <h2 class="text-[23px] text-white">Кошелек</h2>

                <ul class="mt-[34px] flex w-full flex-col gap-y-2.5">
                    <li class="w-full" v-for="tab in tabs" :key="tab.title">
                        <button
                            class="flex h-[45px] w-full shrink-0 items-center gap-2.5 rounded-[10px] border-[1px] px-[12px] font-bold"
                            :class="[activeTab === tab ? 'border-[#FDF74B] bg-[#FDF74B] text-[#101010]' : 'border-[#242527] bg-[#1C1D1F] text-[#A8A9AB]']"
                            @click="activeTab = tab"
                        >
                            <img :src="tab.img" :alt="tab.title" />
                            <span class="whitespace-nowrap text-[14px]">{{ tab.title }}</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div class="flex w-[544px] flex-col bg-[#101113] px-[30px] py-[25px]">
                <h2 class="text-[23px] text-white">Варианты депозита</h2>

                <div class="mt-[34px] flex flex-col gap-5">
                    <ModalsPaymentContentMenuItem>
                        <div>
                            
                        </div>
                    </ModalsPaymentContentMenuItem>
                </div>
            </div>
        </div>
    </VueFinalModal>
</template>
