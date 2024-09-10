<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
const emit = defineEmits(["close"]);
const isShowPassword1 = ref(false);
const isShowPassword2 = ref(false);
</script>

<template>
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        swipe-to-close="down"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="flex w-full flex-col items-center rounded-[25px] bg-[#1B1C1E] p-[25px]">
            <div class="flex w-full justify-end">
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

            <h2 class="text-[20px] text-[#E5E5E5]">Установить пароль</h2>

            <div class="relative mt-[25px] flex w-full items-center">
                <Input placeholder="Введите пароль" :type="isShowPassword1 ? 'text' : 'password'" />

                <button @click="isShowPassword1 = !isShowPassword1" class="absolute right-[16px] -m-3 p-3" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path
                            d="M8.9977 8.85962C10.5282 8.85962 11.7688 7.58009 11.7688 6.00171C11.7688 4.42333 10.5282 3.1438 8.9977 3.1438C7.46724 3.1438 6.22656 4.42333 6.22656 6.00171C6.22656 7.58009 7.46724 8.85962 8.9977 8.85962Z"
                            fill="#454545"
                        />
                        <path
                            d="M17.7239 5.20997C15.5938 2.55533 12.3694 0 9.00005 0C5.63 0 2.40484 2.55712 0.276161 5.20997C-0.0920537 5.66867 -0.0920537 6.33456 0.276161 6.79326C0.811337 7.46022 1.9333 8.74771 3.43179 9.87265C7.2057 12.706 10.7861 12.7122 14.5683 9.87265C16.0668 8.74771 17.1888 7.46022 17.7239 6.79326C18.0911 6.33545 18.093 5.67017 17.7239 5.20997ZM9.00005 2.00054C11.1394 2.00054 12.8796 3.79531 12.8796 6.00161C12.8796 8.20792 11.1394 10.0027 9.00005 10.0027C6.86073 10.0027 5.12045 8.20792 5.12045 6.00161C5.12045 3.79531 6.86073 2.00054 9.00005 2.00054Z"
                            fill="#454545"
                        />
                    </svg>
                </button>
            </div>

            <div class="relative mt-[10px] flex w-full items-center">
                <Input placeholder="Повторите пароль" :type="isShowPassword2 ? 'text' : 'password'" />

                <button @click="isShowPassword2 = !isShowPassword2" class="absolute right-[16px] -m-3 p-3" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path
                            d="M8.9977 8.85962C10.5282 8.85962 11.7688 7.58009 11.7688 6.00171C11.7688 4.42333 10.5282 3.1438 8.9977 3.1438C7.46724 3.1438 6.22656 4.42333 6.22656 6.00171C6.22656 7.58009 7.46724 8.85962 8.9977 8.85962Z"
                            fill="#454545"
                        />
                        <path
                            d="M17.7239 5.20997C15.5938 2.55533 12.3694 0 9.00005 0C5.63 0 2.40484 2.55712 0.276161 5.20997C-0.0920537 5.66867 -0.0920537 6.33456 0.276161 6.79326C0.811337 7.46022 1.9333 8.74771 3.43179 9.87265C7.2057 12.706 10.7861 12.7122 14.5683 9.87265C16.0668 8.74771 17.1888 7.46022 17.7239 6.79326C18.0911 6.33545 18.093 5.67017 17.7239 5.20997ZM9.00005 2.00054C11.1394 2.00054 12.8796 3.79531 12.8796 6.00161C12.8796 8.20792 11.1394 10.0027 9.00005 10.0027C6.86073 10.0027 5.12045 8.20792 5.12045 6.00161C5.12045 3.79531 6.86073 2.00054 9.00005 2.00054Z"
                            fill="#454545"
                        />
                    </svg>
                </button>
            </div>

            <button class="mb-[20px] mt-[15px] flex h-[35px] w-full items-center justify-center rounded-[8px] bg-[#84FD4B] uppercase text-[#101010]">Сохранить</button>
        </div>
    </VueFinalModal>
</template>
