<script setup>
import { useDigitInput } from "@/composables/useDigitInput";
const { digits, digitRefs, onInput, onBackspace, onPaste } = useDigitInput();
const emit = defineEmits(["next"]);
</script>

<template>
    <h2 class="mt-[21px] text-center text-[20px] text-[#E5E5E5]">Подтвержденияе новой электронной почты</h2>

    <p class="mt-[15px] px-[15px] text-center text-[15px] font-medium leading-5 text-[#999999]">
        Пожалуйста введите код, полученный по электронной почте: <strong class="text-[#E2E2E2]">filup287@gmail.com</strong>
    </p>

    <div class="mt-[25px] flex w-full flex-nowrap justify-center gap-[7px]">
        <input
            v-for="(digit, index) in digits"
            :key="index"
            type="text"
            maxlength="1"
            class="h-[45px] w-[45px] rounded-[10px] bg-[#161719] p-[5px] text-center text-[20px] text-[#B5B5B5] focus:outline-none focus:ring-1 focus:ring-[#84FD4B]"
            v-model="digits[index]"
            @input="onInput(index)"
            @keydown.backspace="onBackspace(index)"
            @paste="onPaste($event)"
            ref="digitRefs"
        />
    </div>

    <button @click="$emit('next')" class="mt-[32px] flex h-[35px] w-full items-center justify-center rounded-[8px] bg-[#84FD4B] uppercase text-[#101010]">Подтвердить Email</button>

    <p class="mt-[15px] text-[13px] font-medium text-[#626262]">Не получили код? Отправить <strong class="text-[#C1C1C1]">еще</strong></p>
</template>
