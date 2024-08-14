<script setup></script>

<template>
    <Header />

    <div class="flex grow h-[calc(100vh-90px)]">
        <LeftSidebar />

        <div class="flex flex-col grow p-[35px] overflow-y-auto h-[calc(100vh-90px)]">
            <router-view></router-view>
            <Footer class="mt-auto" />
        </div>

        <ChatIndex />
    </div>
</template>

<style scoped></style>
