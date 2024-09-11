<script setup>
import { ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
import { useDigitInput } from "@/composables/useDigitInput";
import ImageQR from "./aseets/qr.png";
const { digits, digitRefs, onInput, onBackspace, onPaste } = useDigitInput();
const isOpen = defineModel();
const options = ref({
    overlayTransition: "vfm-fade",
    contentTransition: "vfm-fade",
});
const emit = defineEmits(["close"]);
const isCheckedSave = ref(true);
</script>

<template>
    <VueFinalModal
        v-model="isOpen"
        overlay-class="bg-[#08090C]/[75%]"
        swipe-to-close="down"
        :overlay-transition="options.overlayTransition"
        :content-transition="options.contentTransition"
    >
        <div class="flex w-full flex-col items-center rounded-t-[25px] bg-[#1B1C1E] pb-[15px] sm:pb-[30px] pl-[12.5px] sm:pl-[25px] pr-[6.25px] sm:pr-[12.5px] pt-[12.5px] sm:pt-[25px] sm:rounded-b-[25px] sm:rounded-t-[25px]">
            <div class="flex w-full justify-between pr-[12.5px]">
                <h2 class="upperc text-[20px] text-[#E5E5E5]">2FA активация</h2>

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

            <div class="flex h-[550px] w-full flex-col overflow-y-auto pr-[12.5px]">
                <p class="mt-[20px] text-[15px] font-medium text-[#D7D7D7]">
                    Установите <a href="" class="text-[#91E2FD] underline">Google Authenticator</a> или аналогичное приложение. Активируйте 2FA, чтобы защитить свою учетную запись
                    и данные.
                </p>

                <p class="mt-[8px] w-full text-left text-[12px] font-medium text-[#656565] underline">Как настроить и использовать 2FA?</p>

                <div class="mt-[20px] rounded-[15px] bg-[#141517] p-[15px]">
                    <h3 class="text-[#D7D7D7]">Отсканируйте QR-код с помощью приложения или введите секретный ключ вручную</h3>

                    <div class="mt-[18px] flex flex-col items-center gap-[15px] sm:flex-row">
                        <div class="flex flex-col gap-[15px] sm:h-[133px] sm:justify-between">
                            <div class="flex h-[40px] shrink-0 gap-[34px] rounded-[10px] border-[1px] border-[#1D1E20] bg-[#090A0C] px-[15px]">
                                <input
                                    readonly
                                    class="h-full w-full bg-transparent text-[12px] font-medium text-[#B5B5B5] focus:outline-none"
                                    type="text"
                                    value="MIUXKPTOENHDYMSOK4XCMXJ6IZK..."
                                />
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                                        <path
                                            d="M14.9974 1.87503C14.9974 1.37774 14.7998 0.900822 14.4482 0.549185C14.0966 0.197548 13.6196 0 13.1223 0L5.28128 0C4.78399 0 4.30707 0.197548 3.95543 0.549185C3.6038 0.900822 3.40625 1.37774 3.40625 1.87503V11.0797C3.40625 11.577 3.6038 12.054 3.95543 12.4056C4.12955 12.5797 4.33625 12.7178 4.56374 12.8121C4.79123 12.9063 5.03505 12.9548 5.28128 12.9548H13.1223C13.6196 12.9548 14.0966 12.7572 14.4482 12.4056C14.7998 12.054 14.9974 11.577 14.9974 11.0797V1.87503ZM11.7587 9.88655H6.64495C6.50932 9.88655 6.37925 9.83267 6.28335 9.73677C6.18745 9.64087 6.13357 9.5108 6.13357 9.37517C6.13357 9.23955 6.18745 9.10948 6.28335 9.01358C6.37925 8.91768 6.50932 8.8638 6.64495 8.8638H11.7587C11.8943 8.8638 12.0244 8.91768 12.1203 9.01358C12.2162 9.10948 12.2701 9.23955 12.2701 9.37517C12.2701 9.5108 12.2162 9.64087 12.1203 9.73677C12.0244 9.83267 11.8943 9.88655 11.7587 9.88655ZM11.7587 7.84105H6.64495C6.50932 7.84105 6.37925 7.78718 6.28335 7.69128C6.18745 7.59537 6.13357 7.4653 6.13357 7.32968C6.13357 7.19406 6.18745 7.06399 6.28335 6.96808C6.37925 6.87218 6.50932 6.81831 6.64495 6.81831H11.7587C11.8943 6.81831 12.0244 6.87218 12.1203 6.96808C12.2162 7.06399 12.2701 7.19406 12.2701 7.32968C12.2701 7.4653 12.2162 7.59537 12.1203 7.69128C12.0244 7.78718 11.8943 7.84105 11.7587 7.84105ZM11.7587 5.79556H6.64495C6.50932 5.79556 6.37925 5.74168 6.28335 5.64578C6.18745 5.54988 6.13357 5.41981 6.13357 5.28419C6.13357 5.14856 6.18745 5.01849 6.28335 4.92259C6.37925 4.82669 6.50932 4.77281 6.64495 4.77281H11.7587C11.8943 4.77281 12.0244 4.82669 12.1203 4.92259C12.2162 5.01849 12.2701 5.14856 12.2701 5.28419C12.2701 5.41981 12.2162 5.54988 12.1203 5.64578C12.0244 5.74168 11.8943 5.79556 11.7587 5.79556Z"
                                            fill="#292A2C"
                                        />
                                        <path
                                            d="M5.28419 13.9777C4.51593 13.9768 3.77939 13.6712 3.23614 13.1279C2.6929 12.5847 2.38731 11.8481 2.38641 11.0799V1.87517C2.38641 1.81653 2.40004 1.76199 2.40345 1.70471H1.87503C1.37786 1.70507 0.901143 1.90274 0.549584 2.2543C0.198025 2.60585 0.000361191 3.08257 0 3.57975V14.489C0.000361191 14.9862 0.198025 15.4629 0.549584 15.8145C0.901143 16.166 1.37786 16.3637 1.87503 16.3641H10.057C10.5542 16.3637 11.0309 16.166 11.3825 15.8145C11.734 15.4629 11.9317 14.9862 11.932 14.489V13.9777H5.28419Z"
                                            fill="#292A2C"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <p class="text-[12px] font-medium leading-4 text-[#717274]">
                                <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path
                                        d="M14.4707 12.1038L8.49292 1.74875C8.28592 1.39175 7.91392 1.17725 7.49992 1.17725C7.08592 1.17725 6.71392 1.39175 6.50692 1.74875L0.529125 12.1038C0.323625 12.4638 0.323625 12.8928 0.529125 13.2513C0.629154 13.4261 0.773815 13.571 0.948297 13.6715C1.12278 13.7719 1.32081 13.8241 1.52212 13.8228H13.4777C13.8932 13.8228 14.2637 13.6083 14.4707 13.2513C14.6762 12.8928 14.6762 12.4638 14.4707 12.1038ZM7.49992 12.5118C7.08442 12.5118 6.74392 12.1728 6.74392 11.7558C6.74392 11.3403 7.08442 10.9998 7.49992 10.9998C7.91542 10.9998 8.25592 11.3403 8.25592 11.7558C8.25592 12.1728 7.91542 12.5118 7.49992 12.5118ZM8.23252 9.4316C8.21722 9.8264 7.89472 10.1351 7.49992 10.1351C7.10512 10.1351 6.78262 9.8264 6.76597 9.4316L6.62138 5.9006C6.61588 5.78219 6.63463 5.6639 6.67646 5.55299C6.7183 5.44208 6.78235 5.34088 6.86467 5.2556C7.03282 5.0804 7.25662 4.9844 7.49992 4.9844C7.74322 4.9844 7.96702 5.0804 8.13517 5.25545C8.2175 5.34073 8.28155 5.44193 8.32338 5.55284C8.36522 5.66375 8.38397 5.78203 8.37847 5.90045L8.23252 9.4316Z"
                                        fill="#F33D48"
                                    />
                                </svg>
                                Сохраните этот код, это будет единственный способ восстановить доступ к аккаунту, если доступа к аутентификатору не будет
                            </p>

                            <Checkbox v-model="isCheckedSave">
                                <template #label>
                                    <span class="text-[13px] font-medium text-[#D7D7D7] sm:text-[15px]">Я сохранил код восстановления</span>
                                </template>
                            </Checkbox>
                        </div>

                        <div class="mb-[10px] h-[133px] w-[133px] shrink-0 rounded-[15px] bg-[#E5E5E5] p-[5px] sm:mb-0">
                            <img :src="ImageQR" class="h-full w-full rounded-[13px] object-contain" alt="qк" />
                        </div>
                    </div>
                </div>

                <p class="mt-[15px] w-full text-left text-[15px] font-medium text-[#D7D7D7]">Код подтверждения</p>

                <div class="mt-[15px] flex w-full flex-nowrap justify-center gap-[7px] px-[1px]">
                    <input
                        v-for="(digit, index) in digits"
                        :key="index"
                        type="text"
                        maxlength="1"
                        class="h-[45px] w-full rounded-[10px] bg-[#161719] p-[5px] text-center text-[20px] text-[#B5B5B5] focus:outline-none focus:ring-1 focus:ring-[#FDF74B]"
                        v-model="digits[index]"
                        @input="onInput(index)"
                        @keydown.backspace="onBackspace(index)"
                        @paste="onPaste($event)"
                        ref="digitRefs"
                    />
                </div>

                <button class="mt-[20px] flex h-[40px] w-full shrink-0 items-center justify-center rounded-[8px] bg-[#FDF74B] uppercase text-[#101010]">Включить 2FA</button>

                <p class="mt-2.5 text-[13px] font-medium leading-4 text-[#626262]">
                    Если у вас возникли вопросы или затруднения, обратитесь в нашу Службу поддержки за помощью в <a class="text-[#C1C1C1]" href="">Live чат</a>
                </p>
            </div>
        </div>
    </VueFinalModal>
</template>
