<script setup>
import ImageFB from "@/assets/img/fb.png";
import ImageFG from "@/assets/img/fg.png";
import ImageMastercard from "@/assets/img/payment/mastercard.png";
import ImageVisa from "@/assets/img/payment/visa.png";
import IconBonusHello from "@/components/Bonus/icons/IconBonusHello.vue";
import IconBonusStar from "@/components/Bonus/icons/IconBonusStar.vue";
import { ref } from "vue";
import IconBonusHelloBlue from "../assets/hello-bonuses/blue.svg";
import IconBonusHelloPurple from "../assets/hello-bonuses/purple.svg";
import IconBonusHelloYellow from "../assets/hello-bonuses/yellow.svg";

const emit = defineEmits(["success"]);
const isShowNoBanner = ref(false);
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
const helloBonuses = [
    {
        icon: IconBonusHelloYellow,
        from: "$150",
        get: "120%",
        fs: "50",
    },
    {
        icon: IconBonusHelloPurple,
        from: "$500",
        get: "150%",
        fs: "75",
    },
    {
        icon: IconBonusHelloBlue,
        from: "$900",
        get: "200%",
        fs: "100",
    },
];
</script>

<template>
    <div class="flex w-full shrink-0 flex-col bg-[#101113] px-[30px] pb-[30px] pt-[20px] md:w-[612px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="Другие методы" />
        </div>

        <div class="mt-[30px] flex items-center gap-2.5">
            <InputV2 :classes="{ base: 'h-[60px] w-full' }" label="Сумма" placeholder="$0.00" />

            <Select v-model="selectedMethod" :options="methods" :classes="{ base: 'h-[60px] w-full' }">
                <template #unSelectedOption>Валюта</template>
                <template #option="{ option }">{{ option.name }}</template>
                <template #selectedOption="{ option }">
                    <div class="flex items-center gap-[10px]">
                        <img class="h-[35px]" :src="option.img" :alt="option.name" />
                        <div class="flex flex-col items-start -space-y-1">
                            <span class="text-[15px] text-[#757678]">Метода вывода</span>
                            <span class="font-normal text-[#C9C9C9]">{{ option.name }}</span>
                        </div>
                    </div>
                </template>
            </Select>
        </div>

        <hr class="my-[15px] h-[1px] w-full border-[#191A1C]" />

        <div class="flex flex-col gap-[20px]">
            <h2 class="flex items-center text-[20px] font-normal text-[#E4E4E4]">
                <IconBonusHello />
                <span class="ml-[13px]">Приветственный бонус</span>

                <a href="#" class="ml-[20px] inline-flex shrink-0 items-center gap-[7px] text-sm font-normal leading-5 text-[#757678] [font-family:Stapel]">
                    <span>Подробнее</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                        <path d="M6 3.5L0.75 6.53109L0.75 0.468911L6 3.5Z" fill="#757678" />
                    </svg>
                </a>

                <div class="ml-auto flex items-center gap-2.5">
                    <span class="text-[15px] font-normal leading-[26px] text-[#757678] [font-family:Stapel]">Без бонуса</span>
                    <ButtonToggle />
                </div>
            </h2>

            <ul class="space-y-[10px]">
                <li v-for="(helloBonus, index) in helloBonuses" :key="index" class="flex items-center gap-2.5 text-[13px] font-[400] text-[#A8A9AB] [&>strong]:text-[#C9C9C9]">
                    <img :src="helloBonus.icon" />
                    <span>
                        Депозит от
                        <strong>{{ helloBonus.from }}</strong>
                        , получи
                        <strong>{{ helloBonus.get }}</strong>
                        на депозит и
                        <strong>{{ helloBonus.fs }}</strong>
                        фриспинов
                    </span>
                </li>
            </ul>
        </div>

        <hr class="my-[15px] h-[1px] w-full border-[#191A1C]" />

        <div class="flex flex-col gap-[20px]">
            <h2 @click="isShowNoBanner = !isShowNoBanner" class="flex items-center gap-[13px] text-[20px] font-medium text-[#E4E4E4]">
                <IconBonusStar />
                Специальные бонусы
            </h2>

            <div v-if="!isShowNoBanner" class="scrollbar-heavy flex w-full items-center gap-2.5 overflow-x-scroll pb-[5px] md:pb-[15px]">
                <BonusSpecialCard class="!w-[318px] border-[1px] border-[#FDF74B] !px-[15px]" :imgSrc="ImageFB" desc="100 фрибетов" />
                <BonusSpecialCard class="!w-[318px] !px-[15px]" :imgSrc="ImageFG" desc="100 фригеймс" />
            </div>

            <BonusSpecialNoBanner class="mb-[5px] h-[195px] md:mb-[10px]" v-if="isShowNoBanner" />
        </div>

        <button @click="$emit('success')" class="mt-[18px] flex h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#84FD4B] font-bold uppercase">
            Оплатить
        </button>
    </div>
</template>
