<script setup>
import ImageDay1 from "./assets/1.png";
import ImageDay2 from "./assets/2.png";
import ImageDay3 from "./assets/3.png";
import ImageDay4 from "./assets/4.png";
</script>

<template>
    <div class="scrollbar-heavy flex h-full items-center gap-[7px] overflow-x-auto pb-[25px]">
        <PagesProfileTabsBonusDayCard day="1 день" :imgSrc="ImageDay1" />
        <PagesProfileTabsBonusDayCard day="2 день" :imgSrc="ImageDay2" />
        <PagesProfileTabsBonusDayCard day="3 день" :imgSrc="ImageDay3" />
        <PagesProfileTabsBonusDayCard day="4 день" :imgSrc="ImageDay4" />
        <PagesProfileTabsBonusDayCard day="4 день" :imgSrc="ImageDay4" />
        <PagesProfileTabsBonusDayCard day="4 день" :imgSrc="ImageDay4" />
        <PagesProfileTabsBonusDayCard day="4 день" :imgSrc="ImageDay4" />
        <PagesProfileTabsBonusDayCard day="4 день" :imgSrc="ImageDay4" />
        <PagesProfileTabsBonusDayCard day="4 день" :imgSrc="ImageDay4" />
    </div>
</template>
