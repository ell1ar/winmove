<script setup>
import ImageNetworkTrc from "@/assets/img/network/trc.png";
import ImageCurrencyUSDT from "@/assets/img/currency/usdt.png";
import ImageCurrencyBTC from "@/assets/img/currency/btc.png";
import ImageCurrencyETH from "@/assets/img/currency/eth.png";
import ImageCurrencyLTC from "@/assets/img/currency/lite.png";
import ImageCurrencyBNB from "@/assets/img/currency/bnb.png";
import { ref } from "vue";

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
</script>

<template>
    <div class="flex w-full shrink-0 flex-col bg-[#101113] px-[30px] pb-[30px] pt-[20px] md:w-[612px]">
        <div class="flex items-center gap-[15px]">
            <ModalsWalletButtonBack @click="$emit('back')" />
            <ModalsWalletTitle title="Вывод средств" />
        </div>

        <div class="mt-[30px] flex items-center gap-2.5">
            <Select v-model="selectedCurrency" :options="currencies" :classes="{ base: 'h-[60px] w-full' }">
                <template #unSelectedOption>Валюта</template>
                <template #selectedOption>
                    <div class="flex items-center gap-[10px]">
                        <img class="h-[35px]" :src="selectedCurrency.img" :alt="selectedCurrency.name" />
                        <div class="flex flex-col items-start -space-y-1">
                            <span class="text-[15px] text-[#757678]">Валюта</span>
                            <span class="font-normal text-[#C9C9C9]">{{ selectedCurrency.name }}</span>
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
                <template #selectedOption>
                    <div class="flex items-center gap-[10px]">
                        <img class="h-[35px]" :src="selectedNetwork.img" :alt="selectedNetwork.name" />
                        <div class="flex flex-col items-start -space-y-1">
                            <span class="text-[15px] text-[#757678]">Сеть</span>
                            <span class="font-normal text-[#C9C9C9]">{{ selectedNetwork.name }}</span>
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

        <div class="space-y-2.5">
            <InputV2 label="Ваш адрес кошелька" placeholder="0x0000000000000000000000000000000000000000" :classes="{ base: 'col-span-1 !h-[60px] !rounded-[15px] !px-[15px]' }" />
            <InputV2 label="Сумма" placeholder="$0.00" :classes="{ base: 'col-span-1 !h-[60px] !rounded-[15px] !px-[15px]' }" />
        </div>

        <button class="mt-[18px] flex h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#84FD4B] font-bold uppercase">Подтвердить вывод</button>
    </div>
</template>
