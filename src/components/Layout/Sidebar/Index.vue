<script setup>
import ruflag from "@/assets/img/ruflag.png";
const emit = defineEmits(["close", "toggle-modal-lang", "toggle-modal-settings"]);
const { isFull } = defineProps(["isFull"]);
const toggleModalLang = () => {
    emit("toggle-modal-lang");
    emit("close");
};

const toggleModalSettings = () => {
    emit("toggle-modal-settings");
    emit("close");
};
</script>

<template>
    <aside
        class="flex shrink-0 select-none flex-col overflow-y-auto rounded-[20px] border-[1px] border-[#151619] bg-[#0D0E11] px-[12px] py-[12px] transition-all duration-300 lg:py-[35px] xl:rounded-none"
    >
        <LayoutSidebarMenuList :isFull="isFull" />

        <div class="mt-auto flex w-full flex-col gap-2.5">
            <LayoutSidebarLinkList :isFull="isFull" />
            <LayoutSidebarSocialList v-if="isFull" class="mt-[15px]" />
        </div>

        <div class="mt-5 flex h-[35px] w-full gap-1 md:hidden">
            <button @click="toggleModalLang" class="flex h-full grow items-center rounded-[8px] bg-[#1B1C1E] p-[10px]">
                <img class="flex h-[15px] w-[15px] rounded-full object-cover" :src="ruflag" alt="flag" />
                <div class="mx-[10px] h-[20px] w-[1px] bg-[#212224]"></div>
                <span class="text-[11px] font-bold text-[#717171]">Язык</span>
            </button>

            <button @click="toggleModalSettings" class="flex h-full grow items-center rounded-[8px] bg-[#1B1C1E] p-[10px]">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3923 8.94852C12.9287 8.68145 12.6408 8.18389 12.6408 7.64946C12.6408 7.11527 12.9287 6.61772 13.391 6.35091C13.8654 6.07815 14.0628 5.51141 13.86 5.00344C13.6059 4.3618 13.2599 3.76249 12.8341 3.22194C12.4948 2.79156 11.9055 2.67885 11.4311 2.95336C10.9688 3.22194 10.393 3.22275 9.92941 2.95538C9.46714 2.68802 9.18059 2.18966 9.18195 1.65427C9.18195 1.10656 8.78996 0.652014 8.24796 0.573622C7.56572 0.474889 6.87277 0.475569 6.19073 0.575641C5.65006 0.654581 5.2581 1.10887 5.25942 1.65548C5.25942 2.19021 4.97285 2.68828 4.5106 2.95538C4.04697 3.22246 3.47253 3.22191 3.00892 2.95362C2.5345 2.67911 1.94518 2.79237 1.60591 3.22275C1.39345 3.49284 1.20058 3.77777 1.02876 4.07537C0.857088 4.37261 0.707053 4.68417 0.580004 5.00085C0.375891 5.50962 0.573256 6.07717 1.04768 6.35062C1.51131 6.61743 1.79921 7.11525 1.79921 7.64943C1.79921 8.18361 1.51131 8.68101 1.04903 8.94823C0.574611 9.22102 0.377275 9.78747 0.580004 10.2953C0.833698 10.9358 1.17929 11.536 1.60591 12.0769C1.94518 12.5073 2.5345 12.62 3.00892 12.3455C3.4712 12.0769 4.047 12.0764 4.5106 12.3435C4.97285 12.6108 5.25942 13.1092 5.25942 13.6446C5.25807 14.1921 5.65139 14.6467 6.19206 14.7253C6.53001 14.7742 6.87106 14.7988 7.21254 14.7988C7.55858 14.7988 7.9046 14.7736 8.24926 14.7232C8.78993 14.6441 9.18189 14.1902 9.18189 13.6436C9.18053 13.1086 9.46708 12.6105 9.92936 12.3435C10.393 12.0764 10.9674 12.0769 11.431 12.3452C11.9055 12.6197 12.4948 12.5067 12.834 12.0761C13.0464 11.806 13.2393 11.5212 13.4112 11.2237C13.5815 10.9265 13.7343 10.6149 13.86 10.298C14.0641 9.78923 13.8668 9.22154 13.3923 8.94852ZM9.05894 8.71144C8.77643 9.20265 8.31822 9.5542 7.76947 9.701C7.22206 9.84778 6.64894 9.7725 6.15828 9.48864C5.14455 8.9031 4.79582 7.60187 5.38108 6.58744C5.77307 5.907 6.48944 5.52612 7.22338 5.52612C7.58428 5.52612 7.94789 5.61749 8.28174 5.81024C9.29547 6.39564 9.6442 7.69727 9.05894 8.71144Z"
                        fill="#A8A9AB"
                    />
                </svg>
                <div class="mx-[10px] h-[20px] w-[1px] bg-[#212224]"></div>
                <span class="text-[11px] font-bold text-[#717171]">Настройки</span>
            </button>
        </div>
    </aside>
</template>
