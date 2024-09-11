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
        <ProfileTabsVerificationFormStepsIndex v-model="activeStep" :steps="steps" />
        <ProfileTabsVerificationFormStepsFirst @complete="steps[0].isCompleted = true" v-if="activeStep.value === 1 && activeStep.isCompleted === false" />
        <ProfileTabsVerificationFormStepsFirstCompleted v-if="activeStep.value === 1 && activeStep.isCompleted === true" />
        <ProfileTabsVerificationFormStepsSecond v-if="activeStep.value === 2" />
        <ProfileTabsVerificationFormStepsThird v-if="activeStep.value === 3" />
        <ProfileTabsVerificationFormStepsFour v-if="activeStep.value === 4" />
    </div>
</template>
