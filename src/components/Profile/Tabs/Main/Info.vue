<script setup>
import InfoPattern from "./assets/infoPattern.svg";
</script>

<template>
    <div
        class="relative flex w-full flex-col overflow-hidden rounded-[20px] border-[1px] border-[#191A1C] bg-gradient-to-tr from-[#040404] to-[#18191C] px-[20px] pb-[20px] pt-[20px] 2xl:h-[225px] 2xl:px-[35px] 2xl:pb-[17px] 2xl:pt-[35px]"
        :style="{
            backgroundImage: 'url(' + InfoPattern + ')',
        }"
    >
        <div class="relative z-10 flex justify-between">
            <div class="flex items-center gap-5">
                <PlayerAvatar class="h-[70px] w-[70px]" :isShowLevel="false" color="yellow" />

                <div class="flex flex-col">
                    <div class="flex gap-[3px]">
                        <input
                            type="text"
                            class="w-[94px] rounded-[6px] border-[1px] border-white/[6%] bg-white/[5%] px-3 text-[13px] text-[#B9BABC] focus:outline-none"
                            value="462...wAM"
                        />
                        <button class="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] border-[1px] border-white/[6%] bg-white/[5%]">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.09156 0.366581L6.14522 1.31285L8.68705 3.85448L9.63339 2.90821C10.1222 2.41944 10.1222 1.62762 9.63339 1.13885L8.86302 0.366581C8.37421 -0.122194 7.58233 -0.122194 7.09352 0.366581H7.09156ZM5.70333 1.7547L1.14564 6.31399C0.942296 6.51732 0.793697 6.76953 0.711576 7.0452L0.019417 9.39719C-0.0294643 9.56337 0.0155065 9.74128 0.136732 9.8625C0.257958 9.98372 0.435886 10.0287 0.600127 9.98176L2.95229 9.28965C3.22799 9.20754 3.48021 9.05895 3.68356 8.85562L8.24516 4.29633L5.70333 1.7547Z"
                                    fill="#B9BABC"
                                />
                            </svg>
                        </button>
                    </div>

                    <p class="mt-[12px] flex items-center gap-[5px] text-[11px]">
                        <span class="text-[#525355]">ID:</span>
                        <strong class="text-[#A8A9AB]">2785622</strong>
                        <button class="-m-2 p-2">
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0005 1.37503C11.0005 1.01035 10.8556 0.660607 10.5977 0.402738C10.3398 0.144869 9.99008 0 9.62539 0L3.87507 0C3.51038 0 3.16063 0.144869 2.90275 0.402738C2.64487 0.660607 2.5 1.01035 2.5 1.37503V8.1252C2.5 8.48988 2.64487 8.83963 2.90275 9.0975C3.03044 9.22518 3.18202 9.32647 3.34886 9.39557C3.51569 9.46467 3.6945 9.50024 3.87507 9.50024H9.62539C9.99008 9.50024 10.3398 9.35537 10.5977 9.0975C10.8556 8.83963 11.0005 8.48988 11.0005 8.1252V1.37503ZM8.62533 7.25018H4.87513C4.77567 7.25018 4.68028 7.21067 4.60995 7.14034C4.53962 7.07001 4.50011 6.97463 4.50011 6.87517C4.50011 6.77571 4.53962 6.68033 4.60995 6.61C4.68028 6.53967 4.77567 6.50016 4.87513 6.50016H8.62533C8.72479 6.50016 8.82018 6.53967 8.89051 6.61C8.96084 6.68033 9.00035 6.77571 9.00035 6.87517C9.00035 6.97463 8.96084 7.07001 8.89051 7.14034C8.82018 7.21067 8.72479 7.25018 8.62533 7.25018ZM8.62533 5.75014H4.87513C4.77567 5.75014 4.68028 5.71063 4.60995 5.64031C4.53962 5.56998 4.50011 5.47459 4.50011 5.37513C4.50011 5.27568 4.53962 5.18029 4.60995 5.10996C4.68028 5.03963 4.77567 5.00012 4.87513 5.00012H8.62533C8.72479 5.00012 8.82018 5.03963 8.89051 5.10996C8.96084 5.18029 9.00035 5.27568 9.00035 5.37513C9.00035 5.47459 8.96084 5.56998 8.89051 5.64031C8.82018 5.71063 8.72479 5.75014 8.62533 5.75014ZM8.62533 4.25011H4.87513C4.77567 4.25011 4.68028 4.2106 4.60995 4.14027C4.53962 4.06994 4.50011 3.97456 4.50011 3.8751C4.50011 3.77564 4.53962 3.68025 4.60995 3.60992C4.68028 3.5396 4.77567 3.50009 4.87513 3.50009H8.62533C8.72479 3.50009 8.82018 3.5396 8.89051 3.60992C8.96084 3.68025 9.00035 3.77564 9.00035 3.8751C9.00035 3.97456 8.96084 4.06994 8.89051 4.14027C8.82018 4.2106 8.72479 4.25011 8.62533 4.25011Z"
                                    fill="#A8A9AB"
                                />
                                <path
                                    d="M3.87521 10.2502C3.3118 10.2496 2.77165 10.0255 2.37326 9.62708C1.97486 9.2287 1.75076 8.68857 1.75009 8.12517V1.375C1.75009 1.332 1.7601 1.292 1.7626 1.25H1.37507C1.01046 1.25026 0.660861 1.39522 0.403042 1.65303C0.145223 1.91084 0.000264883 2.26043 0 2.62503V10.6252C0.000264883 10.9898 0.145223 11.3394 0.403042 11.5972C0.660861 11.855 1.01046 12 1.37507 12.0003H7.3754C7.74001 12 8.08961 11.855 8.34743 11.5972C8.60525 11.3394 8.75021 10.9898 8.75047 10.6252V10.2502H3.87521Z"
                                    fill="#A8A9AB"
                                />
                            </svg>
                        </button>
                    </p>
                </div>
            </div>

            <ProfileTabsMainInfoButtons class="max-2xl:hidden" />
        </div>

        <div class="relative z-10 mt-6 flex items-start gap-8 2xl:mt-auto">
            <div class="relative hidden h-[68px] w-[68px] shrink-0 items-center justify-center p-1 2xl:flex">
                <span class="absolute text-[20px] font-bold text-black">9</span>
                <img src="./assets/refBG.png" class="h-full w-full object-contain" alt="ref_bg" />
            </div>

            <div class="flex w-full flex-col gap-[7px]">
                <div class="flex items-center justify-between font-medium">
                    <span class="text-[15px] text-[#91E2FD]">Level 9</span>
                    <span class="text-[15px] text-[#D7D7D7]">$326 / $705</span>
                </div>

                <div class="relative h-[7px] w-full overflow-hidden rounded-[2px] bg-[#323233]">
                    <div class="absolute left-0 top-0 h-full bg-[#91E2FD]" :style="{ width: '50%' }"></div>
                </div>
            </div>
        </div>

        <ProfileTabsMainInfoButtons class="realtive z-10 mt-[15px] 2xl:hidden" />

        <img class="absolute bottom-0 left-0 z-0 h-full w-full" src="./assets/infoLight.png" alt="promocodeLight" />
        <img class="absolute right-0 top-0 z-0 h-full w-full" src="./assets/infoLight2.png" alt="promocodeLight" />
    </div>
</template>
