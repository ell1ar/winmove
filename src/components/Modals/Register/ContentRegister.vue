<script setup>
import { ref } from "vue";
const checked = ref(false);
const isShowPassword = ref(false);
const emit = defineEmits(["verify"]);
</script>

<template>
    <form action="#" class="space-y-[10px] text-[14px] font-medium">
        <UIInput placeholder="Email" autocomplete type="email" />

        <div class="relative flex w-full items-center">
            <UIInput placeholder="Пароль" autocomplete :type="isShowPassword ? 'text' : 'password'" />

            <button @click="isShowPassword = !isShowPassword" class="absolute right-[16px] -m-3 p-3" type="button">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.99965 8.59058C10.5301 8.59058 11.7708 7.3499 11.7708 5.81945C11.7708 4.28899 10.5301 3.04831 8.99965 3.04831C7.4692 3.04831 6.22852 4.28899 6.22852 5.81945C6.22852 7.3499 7.4692 8.59058 8.99965 8.59058Z"
                        fill="#454545"
                    />
                    <path
                        d="M17.7239 5.05178C15.5938 2.47774 12.3694 0 9.00005 0C5.63 0 2.40484 2.47947 0.276161 5.05178C-0.0920537 5.49655 -0.0920537 6.14222 0.276161 6.58699C0.811337 7.23371 1.9333 8.4821 3.43179 9.57289C7.2057 12.3202 10.7861 12.3263 14.5683 9.57289C16.0668 8.4821 17.1888 7.23371 17.7239 6.58699C18.0911 6.14309 18.093 5.498 17.7239 5.05178ZM9.00005 1.9398C11.1394 1.9398 12.8796 3.68007 12.8796 5.81939C12.8796 7.9587 11.1394 9.69898 9.00005 9.69898C6.86073 9.69898 5.12045 7.9587 5.12045 5.81939C5.12045 3.68007 6.86073 1.9398 9.00005 1.9398Z"
                        fill="#454545"
                    />
                </svg>
            </button>
        </div>

        <UIInput placeholder="Реферальный код (необязательно)" type="text" />

        <UICheckbox id="register-checkbox" v-model="checked">
            <template #label>
                <span class="text-[11px] text-[#626262] sm:text-[12px]">
                    Я подтверждаю, что мне 18 лет и я прочитал(а) <br />
                    <a href="" class="text-[#C1C1C1]">Условия предоставления услуг</a>
                </span>
            </template>
        </UICheckbox>
    </form>

    <button @click="$emit('verify')" type="button" class="mt-[20px] h-[35px] w-full rounded-[8px] bg-[#FDF74B] text-[16px] uppercase text-[#101010]">Создать аккаунт</button>
</template>
