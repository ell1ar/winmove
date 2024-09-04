<script setup>
import { ref } from "vue";
import ImageFB from "../assets/fb.png";
import ImageFG from "../assets/fg.png";
const isShowNoBanner = ref(false);
</script>

<template>
    <div class="flex flex-col rounded-[20px] bg-[#101113] px-[15px] pb-[10px] pt-[15px] md:px-[25px] md:pb-[15px] md:pt-[25px]">
        <h2 @click="isShowNoBanner = !isShowNoBanner" class="fonr-medium flex items-center gap-[13px] text-[20px] text-[#E4E4E4]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M19.4413 9.08988C19.9481 8.59609 20.127 7.87136 19.9082 7.19886C19.6899 6.52609 19.1192 6.04496 18.4189 5.9432L14.0952 5.31496C13.9871 5.29921 13.8845 5.25744 13.7961 5.19324C13.7078 5.12904 13.6363 5.04433 13.588 4.9464L11.6543 1.02812C11.3413 0.393945 10.7073 0 9.99996 0C9.29262 0 8.65867 0.393945 8.34559 1.02812L6.41195 4.94636C6.36364 5.04427 6.29226 5.12896 6.20395 5.19316C6.11565 5.25736 6.01307 5.29915 5.90504 5.31492L1.58106 5.94316C0.880747 6.04496 0.310083 6.52609 0.0918414 7.19851C-0.127026 7.87136 0.0518414 8.59613 0.558521 9.08976L3.68735 12.1399C3.76551 12.2161 3.82399 12.3101 3.85774 12.4138C3.89149 12.5176 3.89951 12.628 3.8811 12.7356L3.14235 17.0424C3.02297 17.7396 3.30418 18.431 3.87625 18.8465C4.44844 19.2623 5.19297 19.3161 5.81938 18.9871L9.68664 16.9538C9.78323 16.9031 9.89071 16.8765 9.99983 16.8765C10.1089 16.8765 10.2164 16.903 10.313 16.9537L14.1806 18.9871C14.807 19.3162 15.5516 19.2623 16.1237 18.8465C16.6958 18.4309 16.977 17.7396 16.8577 17.0424L16.1189 12.7358C16.1004 12.6282 16.1084 12.5177 16.1422 12.4139C16.176 12.31 16.2345 12.216 16.3127 12.1398L19.4413 9.08988Z"
                    fill="#E4E4E4"
                />
            </svg>
            Специальные бонусы
        </h2>

        <div v-if="!isShowNoBanner" class="mt-[30px] flex items-center gap-2.5 overflow-x-auto pb-[5px] md:gap-5 md:pb-[10px]">
            <ProfileTabsBonusesSpecialCard :imgSrc="ImageFB" desc="100 фрибетов" />
            <ProfileTabsBonusesSpecialCard :imgSrc="ImageFG" desc="100 фригеймс" />
        </div>

        <ProfileTabsBonusesSpecialNoBanner class="mt-[30px] mb-[5px] md:mb-[10px]" v-if="isShowNoBanner" />
    </div>
</template>
