<script setup>
import { ref } from "vue";

const notifications = ref([
    {
        id: 1,
        type: "success",
        content: "Операция успешно выполнена. Нажмите на уведомление, чтобы узнать подробности",
    },
    {
        id: 2,
        type: "error",
        content: "Операция отклонена. Нажмите на уведомление, чтобы узнать подробности",
    },
    {
        id: 3,
        type: "warning",
        content: "Предупреждающее сообщение. Нажмите на уведомление, чтобы узнать подробности",
    },
    {
        id: 4,
        type: "info",
        content: "Информирующее сообщение. Нажмите на уведомление, чтобы узнать подробности",
    },
]);

const onClose = (id) => {
    const el = document.getElementById("notify-card" + id);
    el.classList.remove("animate__slideInRight");
    el.classList.add("animate__slideOutRight");
    setTimeout(() => {
        notifications.value = notifications.value.filter((notification) => notification.id !== id);
    }, 500);
};
</script>

<template>
    <div class="flex flex-col gap-1">
        <NotifyCard
            v-for="notification in notifications"
            :id="'notify-card' + notification.id"
            @click="onClose(notification.id)"
            @close="onClose(notification.id)"
            :key="notification.id"
            :type="notification.type"
            :content="notification.content"
        />
    </div>
</template>
