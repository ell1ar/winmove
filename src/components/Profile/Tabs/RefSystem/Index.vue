<script setup>
import IconStatPayment from "./icons/IconStatPayment.vue";
import IconStatPercent from "./icons/IconStatPercent.vue";
import IconStatUsers from "./icons/IconStatUsers.vue";
</script>

<template>
    <div class="flex w-full flex-col">
        <div
            class="hidden w-full gap-3 md:grid md:grid-cols-6 lg:grid-cols-15 xl:grid-cols-6 xl:gap-5 2xl:[grid-template-columns:267px_1fr_1fr_1fr] 2xl:[grid-template-rows:164px_136px]"
        >
            <ProfileTabsRefSystemLevelCard
                class="md:order-1 md:col-span-3 lg:order-1 lg:col-span-6 lg:row-span-2 xl:order-1 xl:col-span-3 xl:row-span-1 2xl:col-span-1 2xl:row-span-2"
            />
            <ProfileTabsRefSystemLinkCard 
                class="md:order-3 md:col-span-6 lg:order-3 lg:col-span-9 lg:row-span-1 xl:order-3 xl:col-span-6 2xl:order-2 2xl:col-span-2" 
            />
            <ProfileTabsRefSystemChangeCard 
                class="md:order-2 md:col-span-3 lg:order-2 lg:col-span-9 lg:row-span-1 xl:order-2 xl:col-span-3 2xl:order-3 2xl:col-span-1" 
            />
            <ProfileTabsRefSystemStatCard
                class="md:order-4 md:col-span-2 lg:order-4 lg:col-span-5 xl:order-4 xl:col-span-2 2xl:col-span-1"
                value="$0.00"
                title="Пополнений"
                :icon="IconStatPayment"
            />
            <ProfileTabsRefSystemStatCard
                class="md:order-5 md:col-span-2 lg:order-5 lg:col-span-5 xl:order-5 xl:col-span-2 2xl:col-span-1"
                value="9%"
                title="Процент"
                :icon="IconStatPercent"
            />
            <ProfileTabsRefSystemStatCard
                class="md:order-6 md:col-span-2 lg:order-6 lg:col-span-5 xl:order-6 xl:col-span-2 2xl:col-span-1"
                value="0"
                title="Приглашено пользователей"
                :icon="IconStatUsers"
            />
        </div>

        <div class="flex flex-col gap-[25px] md:hidden">
            <div class="flex flex-col gap-[15px] rounded-[25px] bg-[#101113] p-[15px]">
                <ProfileTabsRefSystemLevelCard />
            </div>

            <div class="flex flex-col gap-[15px] rounded-[25px] bg-[#101113] p-[15px]">
                <ProfileTabsRefSystemLinkCard />
                <ProfileTabsRefSystemChangeCard />
            </div>

            <div class="flex flex-col gap-2 rounded-[25px] bg-[#101113] p-[15px]">
                <ProfileTabsRefSystemStatCard value="$0.00" title="Пополнений" :icon="IconStatPayment" />
                <ProfileTabsRefSystemStatCard value="9%" title="Процент" :icon="IconStatPercent" />
                <ProfileTabsRefSystemStatCard value="0" title="Приглашено пользователей" :icon="IconStatUsers" />
            </div>
        </div>

        <ProfileTabsRefSystemTable class="mt-[25px]" />
    </div>
</template>
