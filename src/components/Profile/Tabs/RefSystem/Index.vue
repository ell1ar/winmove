<script setup>
import IconStatPayment from "./icons/IconStatPayment.vue";
import IconStatPercent from "./icons/IconStatPercent.vue";
import IconStatUsers from "./icons/IconStatUsers.vue";
</script>

<template>
    <div class="flex w-full flex-col gap-5">
        <div class="grid w-full gap-5 [grid-template-columns:267px_1fr_1fr_1fr] [grid-template-rows:164px_136px]">
            <ProfileTabsRefSystemLevelCard class="row-span-2" />
            <ProfileTabsRefSystemLinkCard class="col-span-2" />
            <ProfileTabsRefSystemChangeCard />
            <ProfileTabsRefSystemStatCard value="$0.00" title="Пополнений" :icon="IconStatPayment" />
            <ProfileTabsRefSystemStatCard value="9%" title="Процент" :icon="IconStatPercent" />
            <ProfileTabsRefSystemStatCard value="0" title="Приглашено пользователей" :icon="IconStatUsers" />
        </div>

        <ProfileTabsRefSystemTable />
    </div>
</template>
