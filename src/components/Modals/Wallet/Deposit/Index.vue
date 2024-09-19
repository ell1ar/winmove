<script setup>
import { ref } from "vue";
const activeContent = ref(1);
</script>

<template>
    <ModalsWalletDepositMenu @crypto="activeContent = 2" @other="activeContent = 3" v-if="activeContent === 1" />
    <ModalsWalletDepositCrypto @back="activeContent = 1" v-if="activeContent === 2" />
    <ModalsWalletDepositOther @back="activeContent = 1" @success="activeContent = 4" v-if="activeContent === 3" />
    <ModalsWalletDepositSuccess @wait="activeContent = 5" @back="activeContent = 1" v-if="activeContent === 4" />
    <ModalsWalletDepositWait @error="activeContent = 6" @back="activeContent = 1" v-if="activeContent === 5" />
    <ModalsWalletDepositError @back="activeContent = 1" v-if="activeContent === 6" />
</template>
