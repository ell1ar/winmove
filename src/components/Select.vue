<script setup>
import { ref, useSlots } from "vue";
const visible = ref(false);
const props = defineProps({
    text: { type: String, default: "Toggle dropdown" },
    options: Array,
});
const model = defineModel();
const options = ref({});
const emit = defineEmits(["update:modelValue"]);
const $slots = useSlots();
const vnodeCB = (vnode) => {
    options.value[vnode.props.value] = vnode.children.default;
    Object.assign((vnode.props ??= {}), { onClick: () => select(vnode.props.value) }, vnode.props ?? {});
    return vnode;
};
const renderOptions = () => {
    return $slots.default().map((vnode) => {
        if (Array.isArray(vnode.children)) return vnode.children.map(vnodeCB);
        return vnodeCB(vnode);
    });
};

const select = (option) => {
    visible.value = false;
    model.value = option;
};
</script>

<template>
    <div v-click-outside="() => (visible = false)" class="relative flex items-center rounded-[8px] border-[1px] border-[#17181A] bg-[#121315] text-[#ABABAB]">
        <button @click="visible = !visible" class="flex h-full w-full items-center px-[15px]">
            <component v-if="model" :is="options[model]" />
            <template v-else>{{ text }}</template>

            <span class="absolute right-4">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5002 7L8.2241 0.55L0.776286 0.55L4.5002 7Z" fill="#ABABAB" />
                </svg>
            </span>
        </button>

        <div v-if="visible" class="absolute top-[calc(100%+10px)] z-10 max-h-[150px] w-full overflow-hidden overflow-y-auto rounded-[8px] bg-[#121315]">
            <render-options></render-options>
        </div>
    </div>
</template>
