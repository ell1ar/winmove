<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
const step = ref(1);
const emit = defineEmits(["close"]);
const back = () => {
    step.value > 1 ? step.value-- : emit("close");
};
</script>

<template>
    <VueFinalModal
        overlay-class="bg-[#08090C]/[75%]"
        v-model="isOpen"
        swipe-to-close="down"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
        teleport-to="body"
    >
        <div class="flex w-[380px] flex-col items-center rounded-[20px] bg-[#1B1C1E] px-[25px] pb-[30px] pt-[23px]">
            <div class="flex w-full justify-between text-[13px] font-medium text-[#393A3C]">
                <button @click="back" class="flex items-center gap-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2.18557e-07 5L7.5 9.33013L7.5 0.669872L2.18557e-07 5Z" fill="#393A3C" />
                    </svg>
                    <span>Назад</span>
                </button>

                <button @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <g clip-path="url(#clip0_1833_102380)">
                            <path
                                d="M1.23234 12.9186C0.913628 12.9371 0.600176 12.8311 0.358078 12.623C-0.119359 12.1428 -0.119359 11.3671 0.358078 10.8868L10.8124 0.432464C11.309 -0.0322 12.0882 -0.00636964 12.5528 0.490207C12.973 0.939259 12.9975 1.62946 12.6102 2.10714L2.09427 12.623C1.85532 12.8281 1.54687 12.9339 1.23234 12.9186Z"
                                fill="#2E2F31"
                            />
                            <path
                                d="M11.6749 12.9186C11.3519 12.9172 11.0423 12.789 10.8129 12.5615L0.358589 2.1071C-0.0837319 1.59057 -0.0235961 0.813226 0.492931 0.370865C0.953945 -0.0239309 1.63385 -0.0239309 2.09482 0.370865L12.6107 10.8252C13.1072 11.29 13.1328 12.0692 12.6681 12.5657C12.6496 12.5855 12.6305 12.6045 12.6107 12.623C12.4833 12.7338 12.3345 12.8172 12.1735 12.8681C12.0125 12.9189 11.8428 12.9361 11.6749 12.9186Z"
                                fill="#2E2F31"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1833_102380">
                                <rect width="13" height="13" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            <ProfileTabsMainModalsEmailContentProtect @next="step = 2" v-if="step === 1" />
            <ProfileTabsMainModalsEmailContentAdd @next="step = 3" v-if="step === 2" />
            <ProfileTabsMainModalsEmailContentConfirm v-if="step === 3" />
        </div>
    </VueFinalModal>
</template>
