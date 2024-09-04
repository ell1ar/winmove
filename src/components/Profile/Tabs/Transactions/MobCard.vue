<script setup>
import ImageFailMob from "./assets/failMob.png";
import ImageSuccessMob from "./assets/successMob.png";
const { row } = defineProps(["row"]);
const imageColorSrc = {
    success: ImageSuccessMob,
    fail: ImageFailMob,
    wait: null,
}[row.status];
</script>

<template>
    <div class="relative h-[109px] w-full overflow-hidden rounded-[10px] bg-[#161719] p-[15px]">
        <div class="flex h-full flex-col">
            <div class="flex w-full grow items-start justify-between">
                <span class="inline-flex items-center gap-2.5 text-[#E3E3E3]">
                    <h2>ID {{ row.id }}</h2>
                    <component class="h-[15px] w-[15px]" :is="row.statusIcon" />
                </span>

                <div class="flex items-center">
                    <span class="mr-5 text-[11px] font-medium text-[#E3E3E3] opacity-[45%]" v-if="row.bonus">Бонус {{ row.bonus }}</span>
                    <span class="text-[15px] font-medium text-[#E3E3E3] opacity-80">{{ row.sum }}</span>
                </div>
            </div>

            <h1 class="h-[1px] w-full bg-[#E3E3E3] opacity-[3%]"></h1>

            <div class="flex w-full grow items-end justify-between">
                <span class="text-[11px] text-[#E3E3E3] opacity-30">20:27 27.06.24</span>
                <img class="h-[20px] opacity-30" :src="row.method" alt="method" />
            </div>
        </div>

        <img class="absolute left-0 top-0 h-full w-full" v-if="imageColorSrc !== null" :src="imageColorSrc" alt="image color src" />
    </div>
</template>
