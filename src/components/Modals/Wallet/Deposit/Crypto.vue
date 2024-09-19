<script setup>
import ImageNetworkTrc from "@/assets/img/network/trc.png";
import ImageCurrencyUSDT from "@/assets/img/currency/usdt.png";
import ImageCurrencyBTC from "@/assets/img/currency/btc.png";
import ImageCurrencyETH from "@/assets/img/currency/eth.png";
import ImageCurrencyLTC from "@/assets/img/currency/lite.png";
import ImageCurrencyBNB from "@/assets/img/currency/bnb.png";
import ImageFB from "@/assets/img/fb.png";
import ImageFG from "@/assets/img/fg.png";
import ImageQR from "@/assets/img/qr.png";
import IconBonusHello from "@/components/Bonus/icons/IconBonusHello.vue";
import IconBonusStar from "@/components/Bonus/icons/IconBonusStar.vue";
import IconCopy from "@/components/icons/IconCopy.vue";
import IconDanger from "@/components/icons/IconDanger.vue";
import { ref } from "vue";
import IconBonusHelloBlue from "../assets/hello-bonuses/blue.svg";
import IconBonusHelloPurple from "../assets/hello-bonuses/purple.svg";
import IconBonusHelloYellow from "../assets/hello-bonuses/yellow.svg";

const isShowNoBanner = ref(false);
const selectedNetwork = ref(null);
const networks = [
    {
        img: ImageNetworkTrc,
        name: "TRC-20",
    },
];
const selectedCurrency = ref(null);
const currencies = [
    {
        img: ImageCurrencyUSDT,
        name: "USDT",
    },
    {
        img: ImageCurrencyBTC,
        name: "BTC",
    },
    {
        img: ImageCurrencyETH,
        name: "ETH",
    },
    {
        img: ImageCurrencyLTC,
        name: "LTC",
    },
    {
        img: ImageCurrencyBNB,
        name: "BNB",
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
            <ModalsWalletTitle title="Крипто депозит" />
        </div>

        <div class="mt-[30px] flex items-center gap-2.5">
            <Select v-model="selectedCurrency" :options="currencies" :classes="{ base: 'h-[60px] w-full' }">
                <template #unSelectedOption>Валюта</template>
                <template #selectedOption="{ option }">
                    <div class="flex items-center gap-[10px]">
                        <img class="h-[35px]" :src="option.img" :alt="option.name" />
                        <div class="flex flex-col items-start -space-y-1">
                            <span class="text-[15px] text-[#757678]">Валюта</span>
                            <span class="font-normal text-[#C9C9C9]">{{ option.name }}</span>
                        </div>
                    </div>
                </template>
                <template #optionContent>
                    <div class="flex h-[50px] shrink-0 items-center gap-2.5 rounded-[10px] border border-solid border-[#242527] bg-[#121315] px-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <g clip-path="url(#clip0_1618_142129)">
                                <path
                                    d="M15.2026 13.933L10.8822 9.66741C11.719 8.6468 12.2229 7.34993 12.2229 5.93745C12.2229 2.66373 9.52492 0 6.2091 0C2.89328 0 0.195312 2.6637 0.195312 5.93742C0.195312 9.21114 2.89331 11.8749 6.20913 11.8749C7.63977 11.8749 8.95332 11.3774 9.98705 10.5511L14.3075 14.8167C14.4309 14.9386 14.593 14.9999 14.7551 14.9999C14.9171 14.9999 15.0792 14.9386 15.2026 14.8167C15.4501 14.5724 15.4501 14.1774 15.2026 13.933ZM6.20913 10.6249C3.5909 10.6249 1.46139 8.52241 1.46139 5.93742C1.46139 3.35244 3.5909 1.24997 6.20913 1.24997C8.82736 1.24997 10.9569 3.35244 10.9569 5.93742C10.9569 8.52241 8.82733 10.6249 6.20913 10.6249Z"
                                    fill="#515151"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1618_142129">
                                    <rect width="15.1929" height="15" fill="white" transform="translate(0.195312)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <input class="bg-transparent placeholder:text-[#585858] focus:outline-none" type="text" placeholder="Поиск" />
                    </div>
                </template>
                <template #option="{ option }">
                    <img class="h-[20px] w-[20px] object-contain" :src="option.img" :alt="option.name" />
                    <span>{{ option.name }}</span>
                </template>
            </Select>

            <Select v-model="selectedNetwork" :options="networks" :classes="{ base: 'h-[60px] w-full' }">
                <template #unSelectedOption>Сеть</template>
                <template #selectedOption="{ option }">
                    <div class="flex items-center gap-[10px]">
                        <img class="h-[35px]" :src="option.img" :alt="option.name" />
                        <div class="flex flex-col items-start -space-y-1">
                            <span class="text-[15px] text-[#757678]">Сеть</span>
                            <span class="font-normal text-[#C9C9C9]">{{ option.name }}</span>
                        </div>
                    </div>
                </template>
                <template #option="{ option }">
                    <img class="h-[20px] w-[20px] object-contain" :src="option.img" :alt="option.name" />
                    <span>{{ option.name }}</span>
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

        <hr class="my-[15px] h-[1px] w-full border-[#191A1C]" />

        <div class="flex flex-col items-center gap-[15px] sm:flex-row">
            <div class="flex w-full flex-col sm:justify-between">
                <div class="relative flex h-[64px] w-full shrink-0 flex-col justify-center rounded-[10px] border-[1px] border-[#1D1E20] bg-[#090A0C] px-[15px]">
                    <span class="text-sm font-normal leading-[26px] text-[#757678] [font-family:Stapel]">Ваш адрес депозита USDT</span>
                    <input readonly class="w-full bg-transparent text-[15px] font-bold text-[#C9C9C9] focus:outline-none" type="text" value="TGmhoeUhbrX...uBUUFv1a5Vs5Fj" />
                    <button class="absolute right-[15px]"><IconCopy /></button>
                </div>

                <p class="mt-2 text-[13px] text-[#757678]">
                    Мин сумма депозита
                    <strong class="text-[#C9C9C9]">0.5 USDT</strong>
                </p>

                <p class="mt-3 flex gap-2.5 text-[12px] leading-4 text-[#A8A9AB]">
                    <IconDanger />
                    <span>Только отправка USDT по этому адресу</span>
                </p>
            </div>

            <div class="h-[125px] w-[125px] shrink-0 rounded-[15px] bg-[#E5E5E5] p-[5px]">
                <img :src="ImageQR" class="h-full w-full rounded-[13px] object-contain" alt="qr" />
            </div>
        </div>
    </div>
</template>
