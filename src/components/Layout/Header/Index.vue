<script setup>
import { RouterLink } from "vue-router";

const { isAuth } = defineProps(["isAuth"]);
</script>

<template>
    <header class="flex shrink-0 items-center justify-between border-[1px] border-[#191A1C] bg-[#111214] px-[15px]">
        <div class="flex lg:gap-[42px]">
            <button @click="$emit('toggle-sidebar')" class="hidden h-[53px] w-[53px] items-center justify-center rounded-[8px] bg-[#141517] xl:flex">
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.200196 5.30012L8.1502 9.89006L8.1502 0.710187L0.200196 5.30012Z" fill="#3B3C3E" />
                </svg>
            </button>

            <RouterLink to="/">
                <svg class="w-[49px] lg:w-[72px]" width="72" height="51" viewBox="0 0 72 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M71.9997 19.936V51H64.7103V34.3957L57.928 50.986H49.5225L49.0548 34.0796L41.8418 50.986H33.1816L47.4038 19.936H55.7908L56.2191 37.1982L63.4622 19.936H71.9997Z"
                        fill="#FDF74B"
                    />
                    <path
                        d="M27.0388 32.4759H33.0755L24.5959 50.986H16.2089L15.7805 33.7284L8.53747 50.986H0V19.9219H7.28938V36.5286L14.0717 19.936H22.4748L22.9449 36.847L30.1578 19.936H39.4363L27.0388 32.4759Z"
                        fill="#FDF74B"
                    />
                    <path d="M40.5195 4.64743V4.87219H35.9277V0H36.3793C36.9767 1.55929 38.2294 3.91461 40.5195 4.64743Z" fill="#FDF74B" />
                    <path d="M40.5195 4.87219V5.09461C38.2294 5.82977 36.9744 8.1851 36.3793 9.74205H35.9277V4.87219H40.5195Z" fill="#FDF74B" />
                    <path d="M35.9277 4.87219V9.74205H35.4762C34.8811 8.1851 33.626 5.82977 31.3359 5.09461V4.87219H35.9277Z" fill="#FDF74B" />
                    <path d="M35.9277 0V4.87219H31.3359V4.64743C33.626 3.91461 34.8787 1.55929 35.4762 0L35.9277 0Z" fill="#FDF74B" />
                </svg>
            </RouterLink>
        </div>

        <div class="flex gap-2.5">
            <LayoutHeaderAuth @modal-wallet="$emit('modal-wallet')" @logout="$emit('logout')" v-if="isAuth" />
            <LayoutHeaderGuest @auth="$emit('auth')" @modal-register="$emit('modal-register')" v-if="!isAuth" />
            <LayoutHeaderButtonList
                class="hidden md:flex"
                @toggle-chat="$emit('toggle-chat')"
                @modal-notifications="$emit('modal-notifications')"
                @modal-wallet="$emit('modal-wallet')"
            />
        </div>
    </header>
</template>
