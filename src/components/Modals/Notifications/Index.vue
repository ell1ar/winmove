<script setup>
import { VueFinalModal } from "vue-final-modal";
import { useWindowSize } from "@vueuse/core";
import { ref } from "vue";

const { width } = useWindowSize();
const isOpen = defineModel();
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
        <PopupsNotificationsIndex @close="isOpen = false" />
    </VueFinalModal>
</template>
