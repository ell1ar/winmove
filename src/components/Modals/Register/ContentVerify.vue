<script setup>
import { nextTick, ref } from "vue";
const digits = ref(Array(6).fill(""));
const digitRefs = ref([]);
const emit = defineEmits(["login"]);
const checked = ref(false);

const onInput = (index) => {
    if (digits.value[index].length === 1 && index < digits.value.length - 1) {
        nextTick(() => {
            digitRefs.value[index + 1].focus();
        });
    }
};

const onBackspace = (index) => {
    if (digits.value[index] === "" && index > 0) {
        nextTick(() => {
            digitRefs.value[index - 1].focus();
        });
    }
};
</script>

<template>
    <div class="flex items-center gap-[15px]">
        <button @click="$emit('login')" class="flex h-[35px] w-[35px] items-center justify-center rounded-[8px] bg-[#202123]">
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.18557e-07 5L7.5 9.33013L7.5 0.669872L2.18557e-07 5Z" fill="#4B4C4E" />
            </svg>
        </button>

        <h2 class="text-[18px] text-white">
            Подтверждения <br />
            электронной почты
        </h2>
    </div>

    <p class="mt-[25px] text-[14px] text-[#787878]">Пожалуйста введите код, полученный по электронной почте: <strong class="text-[#E2E2E2]">filup287@gmail.com</strong></p>

    <div class="mt-[20px] flex flex-nowrap gap-[7px] sm:gap-[10px]">
        <input
            v-for="(digit, index) in digits"
            :key="index"
            type="text"
            maxlength="1"
            class="h-[45px] w-[45px] rounded-[10px] bg-[#161719] p-[5px] text-center text-[20px] text-[#B5B5B5] focus:outline-none focus:ring-1 focus:ring-[#FDF74B] sm:h-[50px] sm:w-[50px]"
            v-model="digits[index]"
            @input="onInput(index)"
            @keydown.backspace="onBackspace(index)"
            ref="digitRefs"
        />
    </div>

    <Checkbox id="verify-checkbox" v-model="checked" class="mt-[20px]">
        <template #label>
            <span class="text-[12px] text-[#626262]">Я хочу получать рекламные письма</span>
        </template>
    </Checkbox>

    <button @click="$emit('verify')" type="button" class="mt-[20px] h-[35px] w-full rounded-[8px] bg-[#FDF74B] text-[16px] uppercase text-[#101010]">Подтвердить Email</button>

    <p class="mt-[20px] text-[13px] font-medium text-[#626262]">Не получили код? Отправить <a href="" class="text-[#C1C1C1]">еще</a></p>
</template>
