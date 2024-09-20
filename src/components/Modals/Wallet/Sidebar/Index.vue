<script setup>
const activeTab = defineModel();
const { tabs } = defineProps(["tabs"]);
</script>

<template>
    <div class="flex w-full shrink-0 flex-col bg-[#161719] p-[15px] md:w-[242px] md:p-[25px]">
        <h2 class="mb-[15px] text-[20px] text-white md:mb-[34px] md:text-[23px]">Кошелек</h2>

        <ul class="hidden w-full flex-col gap-y-2.5 md:flex">
            <li class="w-full" v-for="tab in tabs" :key="tab.title">
                <button
                    class="flex h-[45px] w-full shrink-0 items-center gap-2.5 rounded-[10px] border-[1px] px-[12px] font-bold"
                    :class="[activeTab === tab ? 'border-[#FDF74B] bg-[#FDF74B] text-[#101010]' : 'border-[#242527] bg-[#1C1D1F] text-[#A8A9AB]']"
                    @click="activeTab = tab"
                >
                    <img :src="tab.img" :alt="tab.title" />
                    <span class="whitespace-nowrap text-[14px]">{{ tab.title }}</span>
                </button>
            </li>
        </ul>

        <Select
            v-model="activeTab"
            :options="tabs"
            :classes="{
                base: '!h-[45px] flex md:hidden w-full bg-[#1D1E20] border-[1px] border-[#252628]',
                optionWrapper: 'bg-[#191A1C] w-[70%] right-0',
                option: 'h-[45px] border-[1px] border-[#252628]',
                activeOption: 'bg-[#FDF74B] !text-[#101010] !font-bold',
            }"
        >
            <template #unSelectedOption>Валюта</template>
            <template #selectedOption="{ option }">
                <div class="flex items-center gap-[10px]">
                    <img class="h-[21px] object-contain" :src="option.img" :alt="option.title" />
                    <span class="text-[14px] font-normal text-[#C9C9C9]">{{ option.title }}</span>
                </div>
            </template>
            <template #option="{ option }">
                <img class="h-[20px] w-[20px] object-contain" :src="option.img" :alt="option.title" />
                <span class="capitalize">{{ option.title }}</span>
            </template>
        </Select>
    </div>
</template>
