<script setup>
const { isFull } = defineProps(["isFull"]);
</script>

<template>
    <aside class="shrink-0 overflow-y-auto bg-[#0D0E11] border-[1px] border-[#151619] flex flex-col px-[12px] py-[35px] transition-all duration-300" :class="[isFull ? 'w-[234px] ' : 'w-[80px]']">
        <SidebarMenuList :isFull="isFull" />
        <div class="flex flex-col gap-2.5 w-full mt-auto">
            <SidebarLinkList :isFull="isFull" />
            <SidebarSocialList v-if="isFull" class="mt-[15px]" />
        </div>
    </aside>
</template>

<style scoped></style>
