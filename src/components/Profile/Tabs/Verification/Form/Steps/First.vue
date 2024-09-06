<script setup>
const emit = defineEmits(["complete"]);
const inputClass = "h-[55px] border-[1px] border-[#18191B] bg-[#0B0C0E] font-medium placeholder:text-[#757678]";
const selectClass = "h-[55px] border-[1px] border-[#1C1D1F] bg-[#161719] font-medium";
</script>

<template>
    <div class="mt-[25px] flex w-full grow flex-col pb-[15px]">
        <p class="text-[14px] font-medium text-[#787878]">
            Чтобы лучше заботиться о вас и предоставлять внимательное обслуживание, <br />
            пожалуйста, заполните свою личную информацию.
        </p>

        <div class="mb-[15px] mt-[30px] grid w-full grid-cols-6 gap-[15px]">
            <Input :class="inputClass" class="col-span-6 sm:col-span-3" placeholder="Имя" type="text" />
            <Input :class="inputClass" class="col-span-6 sm:col-span-3" placeholder="Фамилия" type="text" />
            <Select :class="selectClass" class="col-span-6 sm:col-span-2" text="День рождения" />
            <Select :class="selectClass" class="col-span-6 sm:col-span-2" text="Месяц рождения" />
            <Select :class="selectClass" class="col-span-6 sm:col-span-2" text="Год рождения" />
            <Select :class="selectClass" class="col-span-6 sm:col-span-2 !bg-[#131416] text-[#424345] border-[#191A1C]" text="Ваша страна" />
            <Input :class="inputClass" class="col-span-6 sm:col-span-2" placeholder="Ваш город" type="text" />
            <Input :class="inputClass" class="col-span-6 sm:col-span-2" placeholder="Почтовый индекс" type="text" />
            <Input :class="inputClass" class="col-span-6" placeholder="Жилой адрес" type="text" />
        </div>

        <div class="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p class="text-[14px] text-[#787878]">Все данные надежно хранятся и зашифрованы.</p>
            <button @click="$emit('complete')" class="flex h-[40px] items-center justify-center rounded-[8px] bg-[#FDF74B] px-[39px] uppercase text-[#101010]">Отправить</button>
        </div>
    </div>
</template>
