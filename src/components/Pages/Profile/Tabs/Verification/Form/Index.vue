<script setup>
import { reactive, ref } from "vue";

const steps = reactive([
    {
        value: 1,
        isCompleted: false,
    },
    {
        value: 2,
    },
    {
        value: 3,
    },
    {
        value: 4,
    },
]);
const activeStep = ref(steps[0]);
</script>

<template>
    <div class="flex w-full flex-col rounded-[20px] bg-[#101113] px-[15px] py-[30px] sm:px-[25px] sm:py-[25px]">
        <PagesProfileTabsVerificationFormStepsIndex v-model="activeStep" :steps="steps" />
        <PagesProfileTabsVerificationFormStepsFirst @complete="steps[0].isCompleted = true" v-if="activeStep.value === 1 && activeStep.isCompleted === false" />
        <PagesProfileTabsVerificationFormStepsFirstCompleted v-if="activeStep.value === 1 && activeStep.isCompleted === true" />
        <PagesProfileTabsVerificationFormStepsSecond v-if="activeStep.value === 2" />
        <PagesProfileTabsVerificationFormStepsThird v-if="activeStep.value === 3" />
        <PagesProfileTabsVerificationFormStepsFour v-if="activeStep.value === 4" />
    </div>
</template>
