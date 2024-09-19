<script setup>
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";
import IconClose from "@/components/icons/IconClose.vue";
import IconDeposit from "@/components/Modals/Wallet/Sidebar/assets/deposit.svg";
import IconWithdraw from "@/components/Modals/Wallet/Sidebar/assets/withdraw.svg";
import IconChange from "@/components/Modals/Wallet/Sidebar/assets/change.svg";
import IconHistory from "@/components/Modals/Wallet/Sidebar/assets/history.svg";

const isOpen = defineModel();
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
const activeTab = ref(tabs.value[0]);
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
</script>

<template>
    <VueFinalModal v-model="isOpen" overlay-class="bg-[#08090C]/[75%]" :overlay-transition="options.overlayTransition" :content-transition="options.contentTransition">
        <div class="relative flex w-full flex-col overflow-hidden rounded-t-[20px] md:flex-row md:rounded-b-[20px]">
            <button @click="$emit('close')" class="absolute right-[20px] top-[20px]"><IconClose /></button>
            <ModalsWalletSidebarIndex v-model="activeTab" :tabs="tabs" />
            <div class="flex h-full max-h-[500px] w-full flex-col overflow-y-auto">
                <ModalsWalletDepositIndex v-if="activeTab === tabs[0]" />
                <ModalsWalletWithdrawIndex v-if="activeTab === tabs[1]" />
                <ModalsWalletChangeIndex v-if="activeTab === tabs[2]" />
                <ModalsWalletTransactionsIndex v-if="activeTab === tabs[3]" />
            </div>
        </div>
    </VueFinalModal>
</template>
