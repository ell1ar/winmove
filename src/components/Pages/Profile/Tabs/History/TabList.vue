<script setup>
import TabWinItem from "./TabWinItem.vue";
import TabItem from "./TabItem.vue";
import ImageFigure1 from "./assets/figure1.png";
import ImageFigure2 from "./assets/figure2.png";
const activeTabIndex = defineModel();
const tabs = [
    {
        props: {},
        component: TabWinItem,
    },
    {
        props: { title: "Mines", img: ImageFigure1, isClosed: true },
        component: TabItem,
    },
    {
        props: { title: "Double", img: ImageFigure2, isClosed: true },
        component: TabItem,
    },
    {
        props: { title: "Mines", img: ImageFigure1, isClosed: true },
        component: TabItem,
    },
];
</script>

<template>
    <div class="flex w-full gap-[15px] overflow-x-auto pb-3">
        <button v-for="(tab, index) in tabs" :key="index" @click="activeTabIndex = index">
            <component :is="tab.component" v-bind="tab.props"></component>
        </button>
    </div>
</template>
