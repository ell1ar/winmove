<script setup>
import { ref } from "vue";
const buttons = [
    {
        title: "Live",
    },
    {
        title: "Предстоящие",
    },
];
const slectedTab = ref(0);
</script>

<template>
    <div class="flex grow flex-col gap-2.5 rounded-[20px] bg-[#101113] p-5">
        <div class="mb-[25px] flex items-center">
            <h3 class="text-[18px] text-[#BDBDBD]">Матчи</h3>

            <div class="ml-auto flex items-center gap-[7px]">
                <div class="relative flex h-[40px] rounded-[10px] bg-[#161719]">
                    <button
                        v-for="(button, index) in buttons"
                        class="text-[16px] text-[#BDBDBD] flex items-center justify-center px-[19px]"
                        :class="[slectedTab === index ? 'rounded-[10px] border-[1px] border-[#262729] bg-[#1B1C1E]' : '']"
                        :key="index"
                        @click="slectedTab = index"
                    >
                        <span>{{ button.title }}</span>
                    </button>
                </div>

                <button class="flex h-[40px] w-[40px] items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="10" fill="#1B1C1E" />
                        <path
                            d="M25.6835 23.0717C25.1951 22.6597 24.8027 22.146 24.5337 21.5665C24.2647 20.987 24.1256 20.3557 24.1261 19.7168V17.8917C24.1261 15.588 22.4149 13.6811 20.1983 13.3616V12.6546C20.1983 12.481 20.1294 12.3145 20.0066 12.1917C19.8838 12.069 19.7173 12 19.5437 12C19.3701 12 19.2036 12.069 19.0808 12.1917C18.9581 12.3145 18.8891 12.481 18.8891 12.6546V13.3616C16.6719 13.6811 14.9613 15.588 14.9613 17.8917V19.7168C14.9616 20.357 14.8218 20.9895 14.5517 21.5699C14.2817 22.1504 13.8879 22.6648 13.3981 23.077C13.221 23.2296 13.0948 23.4326 13.0364 23.6589C12.978 23.8853 12.9901 24.124 13.0711 24.3433C13.1522 24.5625 13.2982 24.7518 13.4898 24.8857C13.6814 25.0196 13.9093 25.0918 14.143 25.0926H24.9444C25.5761 25.0926 26.09 24.5787 26.09 23.947C26.09 23.6118 25.944 23.295 25.6835 23.0717ZM19.5437 28.4015C20.1093 28.4007 20.6574 28.205 21.0955 27.8472C21.5336 27.4895 21.835 26.9917 21.9488 26.4376H17.1386C17.2525 26.9917 17.5538 27.4895 17.9919 27.8472C18.4301 28.205 18.9781 28.4007 19.5437 28.4015Z"
                            fill="#A8A9AB"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <PagesMainBetList />
    </div>
</template>
