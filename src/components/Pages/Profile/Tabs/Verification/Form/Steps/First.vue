<script setup>
import { ref } from "vue";
const emit = defineEmits(["complete"]);
const selectClass = "h-[55px] border-[1px] !border-[#1C1D1F] !bg-[#161719] font-medium";
const selectBirthDay = ref();
const selectBirthMonth = ref();
const selectBirthYear = ref();
const selectCountry = ref();
</script>

<template>
    <div class="mt-[25px] flex w-full grow flex-col sm:pb-[15px]">
        <p class="text-[14px] font-medium text-[#787878]">
            Чтобы лучше заботиться о вас и предоставлять внимательное обслуживание,
            <br />
            пожалуйста, заполните свою личную информацию.
        </p>

        <div class="mb-[30px] mt-[30px] grid w-full grid-cols-6 gap-[15px]">
            <UIInputV2 :classes="{ base: 'col-span-6 sm:col-span-3' }" placeholder="Имя" type="text" id="name" />
            <UIInputV2 :classes="{ base: 'col-span-6 sm:col-span-3' }" placeholder="Фамилия" type="text" />
            <UISelect
                v-model="selectBirthDay"
                :options="Array.from({ length: 31 }, (_, i) => i)"
                :classes="{
                    base: `${selectClass} col-span-6 sm:col-span-2 xl:col-span-3 2xl:col-span-2`,
                }"
            >
                <template #unSelectedOption>День рождения</template>
                <template #selectedOption="{ option }">{{ option }}</template>
                <template #option="{ option }">{{ option }}</template>
            </UISelect>
            <UISelect
                v-model="selectBirthMonth"
                :options="Array.from({ length: 12 }, (_, i) => i)"
                :classes="{
                    base: `${selectClass} col-span-6 sm:col-span-2 xl:col-span-3 2xl:col-span-2`,
                }"
            >
                <template #unSelectedOption>Месяц рождения</template>
                <template #selectedOption="{ option }">{{ option }}</template>
                <template #option="{ option }">{{ option }}</template>
            </UISelect>
            <UISelect
                v-model="selectBirthYear"
                :options="Array.from({ length: 100 }, (_, i) => 2024 - i)"
                :classes="{
                    base: `${selectClass} col-span-6 sm:col-span-2 xl:col-span-3 2xl:col-span-2`,
                }"
            >
                <template #unSelectedOption>Год рождения</template>
                <template #selectedOption="{ option }">{{ option }}</template>
                <template #option="{ option }">{{ option }}</template>
            </UISelect>
            <UISelect
                v-model="selectCountry"
                :options="['Finland', 'Russia']"
                :classes="{
                    base: `${selectClass} col-span-6 sm:col-span-2 xl:col-span-3 2xl:col-span-2`,
                }"
            >
                <template #unSelectedOption>Ваша страна</template>
                <template #selectedOption="{ option }">{{ option }}</template>
                <template #option="{ option }">{{ option }}</template>
            </UISelect>
            <UIInputV2 :classes="{ base: 'col-span-6 sm:col-span-2 xl:col-span-3 2xl:col-span-2' }" placeholder="Ваш город" type="text" />
            <UIInputV2 :classes="{ base: 'col-span-6 sm:col-span-2 xl:col-span-3 2xl:col-span-2' }" placeholder="Почтовый индекс" type="text" />
            <UIInputV2 :classes="{ base: 'col-span-6' }" placeholder="Жилой адрес" type="text" />
        </div>

        <div class="mt-auto flex flex-col-reverse gap-[15px] sm:flex-row sm:items-center sm:justify-between">
            <p class="text-center text-[12px] text-[#787878] sm:text-start sm:text-[14px]">Все данные надежно хранятся и зашифрованы.</p>
            <button @click="$emit('complete')" class="flex h-[40px] items-center justify-center rounded-[8px] bg-[#FDF74B] px-[39px] uppercase text-[#101010]">Отправить</button>
        </div>
    </div>
</template>
