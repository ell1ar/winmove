<script setup>
import IconLightLOther from "./assets/light-l-other.png";
import IconLightROther from "./assets/light-r-other.png";
import IconLightLCrypto from "./assets/light-l-crypto.png";
import IconLightRCrypto from "./assets/light-r-crypto.png";
const emit = defineEmits(["crypto", "other"]);
</script>

<template>
    <div class="flex w-[544px] flex-col bg-[#101113] px-[30px] py-[25px]">
        <h2 class="text-[23px] text-white">Варианты депозита</h2>

        <div class="mt-[34px] flex flex-col gap-5">
            <ModalsPaymentContentMenuItem @click="$emit('crypto')" title="Крипто депозит" class="gap-[15px]">
                <ModalsPaymentCryptoList />
                <img class="absolute bottom-0 left-0 h-full w-full" :src="IconLightLCrypto" alt="light" />
                <img class="absolute bottom-0 right-0 h-full w-full" :src="IconLightRCrypto" alt="light" />
            </ModalsPaymentContentMenuItem>

            <ModalsPaymentContentMenuItem @click="$emit('other')" title="Другие методы" class="gap-[15px]">
                <ModalsPaymentOtherList />
                <img class="absolute bottom-0 left-0 h-full w-full" :src="IconLightLOther" alt="light" />
                <img class="absolute bottom-0 right-0 h-full w-full" :src="IconLightROther" alt="light" />
            </ModalsPaymentContentMenuItem>
        </div>
    </div>
</template>
