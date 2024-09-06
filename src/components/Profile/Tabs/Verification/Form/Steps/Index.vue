<script setup>
const activeStep = defineModel();
const {steps} = defineProps(['steps'])
</script>


<template>
    <div class="flex justify-between gap-[15px] items-center flex-col lg:flex-row">
        <div class="flex gap-2.5 w-full">
            <button
                @click="activeStep = step"
                v-for="step in steps"
                :key="step.value"
                :class="activeStep === step ? (activeStep.value === 1 ? 'bg-[#FDF74B] text-[#101010] !font-bold' : 'bg-[#202123] text-[#A8A9AB]') : 'bg-[#161719] text-[#3F4042]', step.value < activeStep.value  || step.isCompleted ? '!bg-[#84FD4B] !font-bold' : ''"
                class="h-[40px] rounded-[10px] w-full lg:w-fit lg:px-[28px] font-medium"
            >
                Шаг {{ step.value }}
            </button>
        </div>

        <p v-if="(activeStep.value === 1 && activeStep.isCompleted === false) || [2,3,4].includes(activeStep.value)" class="whitespace-nowrap flex items-center gap-1.5 text-[13px] font-medium text-[#F33D48]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                    d="M13.5076 11.2968L7.92829 1.63203C7.73509 1.29883 7.38789 1.09863 7.00149 1.09863C6.61509 1.09863 6.26789 1.29883 6.07469 1.63203L0.495412 11.2968C0.303613 11.6328 0.303613 12.0332 0.495412 12.3678C0.588773 12.5309 0.72379 12.6662 0.88664 12.7599C1.04949 12.8536 1.23432 12.9024 1.42221 12.9012H12.5808C12.9686 12.9012 13.3144 12.701 13.5076 12.3678C13.6994 12.0332 13.6994 11.6328 13.5076 11.2968ZM7.00149 11.6776C6.61369 11.6776 6.29589 11.3612 6.29589 10.972C6.29589 10.5842 6.61369 10.2664 7.00149 10.2664C7.38929 10.2664 7.70709 10.5842 7.70709 10.972C7.70709 11.3612 7.38929 11.6776 7.00149 11.6776ZM7.68525 8.80269C7.67097 9.17117 7.36997 9.45929 7.00149 9.45929C6.63301 9.45929 6.33201 9.17117 6.31647 8.80269L6.18151 5.50709C6.17639 5.39658 6.19388 5.28618 6.23293 5.18266C6.27198 5.07914 6.33175 4.98469 6.40859 4.90509C6.56553 4.74157 6.77441 4.65197 7.00149 4.65197C7.22857 4.65197 7.43745 4.74157 7.59439 4.90495C7.67123 4.98455 7.73101 5.079 7.77005 5.18252C7.8091 5.28604 7.8266 5.39644 7.82147 5.50695L7.68525 8.80269Z"
                    fill="#F33D48"
                />
            </svg>
            <span>Необходимое действие</span>
        </p>

        <p v-if="activeStep.value === 1 && activeStep.isCompleted === true" class="whitespace-nowrap flex items-center gap-1.5 text-[13px] font-medium text-[#84FD4B]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33203 9.33333L5.48736 10.95C5.62494 11.0532 5.79705 11.0992 5.96774 11.0784C6.13843 11.0577 6.29451 10.9718 6.40336 10.8387L11.9987 4" stroke="#84FD4B" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>Завершено</span>
        </p>
    </div>
</template>