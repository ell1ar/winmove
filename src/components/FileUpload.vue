<script setup>
import { ref } from "vue";

const { title } = defineProps(["title"]);
const uploadedFiles = ref([]);
const fileInput = ref(null);

const triggerFileUpload = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        uploadedFiles.value.push(files[i]);
    }
};

const handleDrop = (event) => {
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
        uploadedFiles.value.push(files[i]);
    }
};
</script>

<template>
    <div @dragover.prevent @drop.prevent="handleDrop">
        <input type="file" @change="handleFileUpload" ref="fileInput" style="display: none" />
        <button
            @click="triggerFileUpload"
            class="flex h-[211px] w-full flex-col items-center justify-center rounded-[15px] border-[3px] border-dashed border-[#1A1B1D] bg-[#0D0E10]"
        >
            <slot></slot>
            <p v-if="uploadedFiles.length === 0" class="mt-[30px] text-[15px] font-medium text-[#353638]">{{ title }}</p>
            <ul v-else class="mt-[30px] text-[15px] font-medium text-[#353638]">
                <li v-for="(file, index) in uploadedFiles" :key="index">{{ file.name }}</li>
            </ul>
        </button>
    </div>
</template>
