<script setup>
import { ref } from "vue";
import ImageMastercard from "@/assets/img/payment/mastercard.png";
import ImageVisa from "@/assets/img/payment/visa.png";

const emit = defineEmits(["success"]);
const selectedMethod = ref(null);
const methods = [
    {
        name: "Mastercard",
        img: ImageMastercard,
    },
    {
        name: "VISA",
        img: ImageVisa,
    },
];
</script>

<template>
    <div class="flex w-full shrink-0 flex-col bg-[#101113] px-[30px] pb-[30px] pt-[20px] md:w-[453px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="Вывод средств" />
        </div>

        <UISelect v-model="selectedMethod" :options="methods" :classes="{ base: 'h-[60px] mt-[30px] w-full' }">
            <template #unSelectedOption>Выберите метод</template>
            <template #option="{ option }">{{ option.name }}</template>
            <template #selectedOption>
                <div class="flex items-center gap-[10px]">
                    <img class="h-[35px]" :src="selectedMethod.img" :alt="selectedMethod.name" />
                    <div class="flex flex-col items-start -space-y-1">
                        <span class="text-[15px] text-[#757678]">Метода вывода</span>
                        <span class="font-normal text-[#C9C9C9]">{{ selectedMethod.name }}</span>
                    </div>
                </div>
            </template>
        </UISelect>

        <hr class="my-[15px] h-[1px] w-full border-[#191A1C]" />

        <div class="grid grid-cols-12 gap-[5px]">
            <UIInputV2 label="Номер карты" placeholder="1234 5678 9087 6543" :classes="{ base: 'col-span-12 !h-[60px] !rounded-[15px] !px-[15px]', input: '' }" id="card" />
            <UIInputV2 label="Имя Фамилия" placeholder="IVAN IVANOV" :classes="{ base: 'col-span-7 !h-[60px] !rounded-[15px] !px-[15px]' }" />
            <UIInputV2 label="Срок действия" placeholder="ММ/ГГ" :classes="{ base: 'col-span-5 !h-[60px] !rounded-[15px] !px-[15px]' }" />
        </div>

        <hr class="my-[15px] h-[1px] w-full border-[#191A1C]" />

        <UIInputV2 label="Сумма" placeholder="$0.00" :classes="{ base: 'col-span-1 !h-[60px] !rounded-[15px] !px-[15px]' }" />

        <button @click="$emit('success')" class="mt-[18px] flex h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#84FD4B] font-bold uppercase">
            Подтвердить вывод
        </button>

        <p class="mt-[17px] text-center text-[13px] font-normal leading-[26px] text-[#757678] [font-family:Stapel]">
            Мин сумма вывода
            <strong class="text-[#C9C9C9]">$10</strong>
        </p>
    </div>
</template>
