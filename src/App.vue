<script setup></script>

<template>
    <HeaderIndex />

    <div class="flex grow h-[calc(100vh-90px)]">
        <SidebarIndex />

        <div class="flex flex-col grow p-[35px] overflow-y-auto h-[calc(100vh-90px)]">
            <router-view></router-view>
            <FooterIndex />
        </div>

        <ChatIndex />
    </div>
</template>

<style scoped></style>
