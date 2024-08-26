<script setup>
import avatar from "@assets/img/avatar.png";
import badgeBlue from "@assets/badgeBlue.svg";
import badgeOrange from "@assets/badgeOrange.svg";
import badgePurple from "@assets/badgePurple.svg";
import badgeWhite from "@assets/badgeWhite.svg";
import badgeYellow from "@assets/badgeYellow.svg";
const { color, classNames, isShowLevel } = defineProps({
    color: {
        type: String,
        default: "blue",
    },
    classNames: {
        type: Object,
    },
    isShowLevel: { type: Boolean, default: true },
});
</script>

<template>
    <div
        class="relative flex h-[40px] w-[40px] shrink-0 justify-center rounded-[8px] border-[1px] bg-white/10 bg-contain bg-center bg-no-repeat"
        :class="[
            color === 'blue' && 'border-[#91E2FD]',
            color === 'orange' && 'border-[#F7BE4A]',
            color === 'yellow' && 'border-[#FDF74B]',
            color === 'purple' && 'border-[#BD52FD]',
            color === 'white' && 'border-[#F1F1F1]',
        ]"
        :style="{ 'background-image': 'url(' + avatar + ')' }"
    >
        <div v-if="isShowLevel" class="absolute -bottom-3.5 flex items-center justify-center" :class="[classNames?.badge ?? '']">
            <img v-if="color === 'blue'" :src="badgeBlue" alt="badgeBlue" />
            <img v-if="color === 'orange'" :src="badgeOrange" alt="badgeOrange" />
            <img v-if="color === 'purple'" :src="badgePurple" alt="badgePurple" />
            <img v-if="color === 'white'" :src="badgeWhite" alt="badgeWhite" />
            <img v-if="color === 'yellow'" :src="badgeYellow" alt="badgeYellow" />
            <span class="absolute mb-2 text-[9px] font-bold text-[black]/80">10</span>
        </div>
    </div>
</template>
