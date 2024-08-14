<script setup>
import { ref } from "vue";
</script>

<template>
    <aside class="w-[300px] overflow-y-auto bg-[#0D0E11] border-[1px] border-[#151619] flex items-center flex-col px-[15px] py-[35px]">
        <div class="flex gap-[5px] w-full mb-[20px] grow">
            <div class="grow h-[35px] rounded-[7px] bg-[#1B1C1E]"></div>
            <div class="w-[101px] rounded-[7px] h-[35px] bg-[#1B1C1E]"></div>
            <div class="w-[35px] shrink-0 rounded-[7px] h-[35px] bg-[#1B1C1E]"></div>
        </div>

        <div class="flex flex-col w-full gap-[18px] mb-[20px] overflow-y-auto">
            <ChatMessageCard />
            <ChatMessageCard />
            <ChatMessageCard />
            <ChatMessageCard />
            <ChatMessageCard />
            <ChatMessageCard />
        </div>

        <textarea class="rounded-[15px] border-[1px] shrink-0 border-[#222325] bg-transparent w-full" name="" id="" rows="5"> </textarea>
    </aside>
</template>
