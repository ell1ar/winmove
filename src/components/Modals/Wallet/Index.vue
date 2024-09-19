<script setup>
import { VueFinalModal } from "vue-final-modal";
import { ref } from "vue";
import IconClose from "@/components/icons/IconClose.vue";
const isOpen = defineModel();
const activeTab = ref(0);
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
</script>

<template>
    <VueFinalModal v-model="isOpen" overlay-class="bg-[#08090C]/[75%]" :overlay-transition="options.overlayTransition" :content-transition="options.contentTransition">
        <div class="relative flex overflow-hidden rounded-[20px]">
            <button @click="$emit('close')" class="absolute right-[20px] top-[20px]"><IconClose /></button>
            <ModalsWalletSidebarIndex v-model="activeTab" />
            <ModalsWalletDepositIndex v-if="activeTab === 0" />
            <ModalsWalletWithdrawIndex v-if="activeTab === 1" />
            <ModalsWalletChangeIndex v-if="activeTab === 2" />
            <ModalsWalletTransactionsIndex v-if="activeTab === 3" />
        </div>
    </VueFinalModal>
</template>
