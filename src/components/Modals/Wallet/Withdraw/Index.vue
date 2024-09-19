<script setup>
import { ref } from "vue";
const activeContent = ref(1);
</script>

<template>
    <ModalsWalletWithdrawMenu @crypto="activeContent = 2" @other="activeContent = 3" v-if="activeContent === 1" />
    <ModalsWalletWithdrawCrypto @back="activeContent = 1" v-if="activeContent === 2" />
    <ModalsWalletWithdrawOther @success="activeContent = 4" @back="activeContent = 1" v-if="activeContent === 3" />
    <ModalsWalletWithdrawSuccess @wait="activeContent = 5" @back="activeContent = 1" v-if="activeContent === 4" />
    <ModalsWalletWithdrawWait @error="activeContent = 6" @back="activeContent = 1" v-if="activeContent === 5" />
    <ModalsWalletWithdrawError @back="activeContent = 1" v-if="activeContent === 6" />
</template>
