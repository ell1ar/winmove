<script setup>
import { ref } from "vue";
const { options, classes } = defineProps(["options", "classes"]);
const model = defineModel();
const isOptionWrapperVisible = ref(false);
const select = (option) => {
    isOptionWrapperVisible.value = false;
    model.value = option;
};
</script>

<template>
    <div
        v-click-outside="() => (isOptionWrapperVisible = false)"
        :class="classes?.base ?? []"
        class="relative flex w-full items-center rounded-[8px] border-[1px] border-[#17181A] bg-[#121315] text-[#ABABAB]"
    >
        <button @click="isOptionWrapperVisible = !isOptionWrapperVisible" class="flex h-full w-full items-center px-[15px]">
            <template v-if="model"><slot name="selectedOption" :option="model"></slot></template>
            <template v-else><slot name="unSelectedOption"></slot></template>

            <span class="absolute right-4">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5002 7L8.2241 0.55L0.776286 0.55L4.5002 7Z" fill="#4E4F51" />
                </svg>
            </span>
        </button>

        <div v-if="isOptionWrapperVisible" :class="classes?.optionWrapper ?? []" class="absolute top-[calc(100%+10px)] z-20 w-full overflow-hidden">
            <slot name="optionContent" />
            <div :class="classes?.optionList ?? []">
                <button class="w-full" @click="select(option)" v-for="option in options" :key="option">
                    <slot name="option" :option="option"></slot>
                </button>
            </div>
        </div>
    </div>
</template>
