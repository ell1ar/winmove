<script setup>
import IconChange from "@/components/Modals/Wallet/Sidebar/assets/change.svg";
import IconDeposit from "@/components/Modals/Wallet/Sidebar/assets/deposit.svg";
import IconHistory from "@/components/Modals/Wallet/Sidebar/assets/history.svg";
import IconWithdraw from "@/components/Modals/Wallet/Sidebar/assets/withdraw.svg";
import { useWindowSize } from "@vueuse/core";
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";

const { width } = useWindowSize();
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
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        :swipe-to-close="width < 1024 ? 'down' : 'none'"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="relative flex w-full flex-col overflow-hidden rounded-t-[20px] md:flex-row md:rounded-b-[20px]">
            <button @click="$emit('close')" class="absolute right-[20px] top-[20px]"><IconClose /></button>
            <ModalsWalletSidebarIndex v-model="activeTab" :tabs="tabs" />
            <div class="flex w-full flex-col max-md:max-h-[500px] max-md:overflow-y-auto">
                <ModalsWalletDepositIndex v-if="activeTab === tabs[0]" />
                <ModalsWalletWithdrawIndex v-if="activeTab === tabs[1]" />
                <ModalsWalletChangeIndex @back="activeTab = tabs[0]" v-if="activeTab === tabs[2]" />
                <ModalsWalletTransactionsIndex @back="activeTab = tabs[0]" v-if="activeTab === tabs[3]" />
            </div>
        </div>
    </VueFinalModal>
</template>
