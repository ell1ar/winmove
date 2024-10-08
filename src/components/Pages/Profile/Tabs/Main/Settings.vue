<script setup>
import { computed, reactive, ref } from "vue";

const settingsPrivacy = reactive({
    first: false,
    second: false,
});

const selected = ref();
const sessions = ref([
    {
        browser: "Chrome",
        region: "FI, Helsinki",
        ip: "77.91.70.247",
        last: "52 мин назад",
    },
    {
        browser: "Chrome",
        region: "FI, Helsinki",
        ip: "77.91.70.247",
        last: `20:27 <strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong>`,
    },
    {
        browser: "Chrome",
        region: "FI, Helsinki",
        ip: "77.91.70.247",
        last: `13:48 <strong class="text-[#5E5E5E] text-[13px]">27.06.2024</strong>`,
    },
]);

const isNeedSave = computed(() => {
    return settingsPrivacy.first || settingsPrivacy.second;
});

const isShowModalEmail = ref(false);
const isShowModal2FA = ref(false);
const isShowModalPassword = ref(false);
</script>

<template>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-2 2xl:grid-cols-12">
        <div class="col-span-1 flex flex-col rounded-[20px] bg-[#101113] p-[25px] lg:col-span-4 xl:col-span-1 2xl:col-span-4">
            <!-- Head -->
            <div class="flex w-full justify-between">
                <h2 class="flex items-center gap-2.5 text-[17px] font-bold text-[#D7D7D7]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.52066 9.22919C9.35065 9.33335 9.15939 9.37502 8.98937 9.37502C8.81936 9.37502 8.6281 9.33335 8.45809 9.22919L0 4.16695V10.8958C0 12.3332 1.19008 13.4998 2.65643 13.4998H15.3436C16.8099 13.4998 18 12.3332 18 10.8958V4.16695L9.52066 9.22919Z"
                            fill="#D7D7D7"
                        />
                        <path
                            d="M15.3435 0.5H2.65639C1.40255 0.5 0.339979 1.37495 0.0849609 2.54156L9.01058 7.87462L17.915 2.54156C17.6599 1.37495 16.5974 0.5 15.3435 0.5Z"
                            fill="#D7D7D7"
                        />
                    </svg>
                    Мой емейл
                </h2>

                <p class="flex items-center gap-2 text-[13px] text-[#84FD4B]">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.33301 6.33333L3.48834 7.95C3.62591 8.05315 3.79802 8.09916 3.96872 8.07842C4.13941 8.05767 4.29549 7.97177 4.40434 7.83867L9.99967 1"
                            stroke="#84FD4B"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                    <span>Верифицировано</span>
                </p>
            </div>
            <!-- Content -->
            <p class="mt-[15px] text-[14px] font-medium leading-5 text-[#595959]">
                Настройте адрес электронной почты, чтобы иметь доступ к вашей учетной записи в любое время. Используйте этот адрес электронной почты, чтобы открыть платформу на
                любом устройстве.
            </p>

            <UICheckbox class="mb-[20px] mt-[18px]">
                <template #label>
                    <span class="text-[15px] font-medium text-[#D7D7D7]">Получать промо-акции по почте</span>
                </template>
            </UICheckbox>

            <div class="mt-auto flex h-[45px] items-center justify-between rounded-[10px] border-[1px] border-[#191A1D] bg-[#08090C] py-2 pl-5 pr-2">
                <input type="text" class="h-full w-full bg-transparent text-[14px] text-[#D7D7D7] placeholder:text-[#595959] focus:outline-none" placeholder="Email" />
                <button
                    @click="isShowModalEmail = !isShowModalEmail"
                    class="ml-2 flex h-full items-center justify-center rounded-[7px] bg-[#FDF74B] px-3 font-bold uppercase text-[#101010]"
                >
                    Edit
                </button>
                <PagesProfileTabsMainModalsEmailIndex
                    v-model="isShowModalEmail"
                    class="flex items-center justify-center"
                    content-class="sm:mx-auto sm:w-2/3 left-[15px] fixed sm:relative right-[15px] sm:w-[380px] sm:left-none sm:right-none"
                    @close="isShowModalEmail = false"
                />
            </div>
        </div>

        <div class="col-span-1 flex flex-col rounded-[20px] bg-[#101113] p-[25px] lg:col-span-4 xl:col-span-1 2xl:col-span-4">
            <!-- Head -->
            <div class="flex w-full justify-between">
                <h2 class="flex items-center gap-2.5 text-[17px] font-bold text-[#D7D7D7]">
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.25 7.66667H11.6667V5.33334C11.6667 2.75967 9.57367 0.666672 7 0.666672C4.42633 0.666672 2.33333 2.75967 2.33333 5.33334V7.66667H1.75C1.28606 7.66729 0.8413 7.85186 0.513245 8.17992C0.18519 8.50797 0.000617352 8.95273 0 9.41667V17.5833C0 18.5486 0.785556 19.3333 1.75 19.3333H12.25C13.2144 19.3333 14 18.5486 14 17.5833V9.41667C14 8.45145 13.2144 7.66667 12.25 7.66667ZM3.88889 5.33334C3.88889 3.61756 5.28422 2.22223 7 2.22223C8.71578 2.22223 10.1111 3.61756 10.1111 5.33334V7.66667H3.88889V5.33334ZM7.77778 13.6727V15.4444C7.77778 15.6507 7.69583 15.8486 7.54997 15.9944C7.40411 16.1403 7.20628 16.2222 7 16.2222C6.79372 16.2222 6.59589 16.1403 6.45003 15.9944C6.30417 15.8486 6.22222 15.6507 6.22222 15.4444V13.6727C5.75944 13.4028 5.44444 12.9066 5.44444 12.3333C5.44444 11.4754 6.14211 10.7778 7 10.7778C7.85789 10.7778 8.55556 11.4754 8.55556 12.3333C8.55556 12.9066 8.24056 13.4028 7.77778 13.6727Z"
                            fill="#D7D7D7"
                        />
                    </svg>

                    Пароль
                </h2>

                <p class="flex items-center gap-2 text-[13px] text-[#F33D48]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.68609 8.17104C10.1046 8.58958 10.1046 9.26812 9.68609 9.68666C9.47682 9.89543 9.20268 10 8.92853 10C8.65439 10 8.38024 9.89539 8.17097 9.68666L4.99998 6.5152L1.82903 9.6867C1.61976 9.89547 1.34561 10.0001 1.07147 10.0001C0.797322 10.0001 0.523177 9.89543 0.313906 9.6867C-0.104635 9.26816 -0.104635 8.58962 0.313906 8.17108L3.48486 5.00009L0.313906 1.82913C-0.104635 1.41059 -0.104635 0.73201 0.313906 0.313468C0.732447 -0.104571 1.41049 -0.104571 1.82903 0.313468L4.99998 3.48497L8.17093 0.313468C8.58947 -0.104571 9.26751 -0.104571 9.68605 0.313468C10.1046 0.73201 10.1046 1.41059 9.68605 1.82913L6.5151 5.00009L9.68609 8.17104Z"
                            fill="#F33D48"
                        />
                    </svg>

                    <span>Пароль не установлен</span>
                </p>
            </div>
            <!-- Content -->
            <p class="mb-[20px] mt-[51px] text-[14px] font-medium leading-5 text-[#595959]">Должно содержать не менее 8 символов: сочетание букв и символов.</p>

            <button
                @click="isShowModalPassword = true"
                class="mt-auto flex h-[40px] items-center justify-center rounded-[8px] bg-[#91E2FD] px-3 font-bold uppercase text-[#101010]"
            >
                Добавить
            </button>

            <PagesProfileTabsMainModalsPasswordIndex
                v-model="isShowModalPassword"
                class="flex items-center justify-center"
                content-class="sm:mx-auto sm:w-2/3 left-[15px] fixed sm:relative right-[15px] sm:w-[380px] sm:left-none sm:right-none"
                @close="isShowModalPassword = false"
            />
        </div>

        <div class="col-span-1 flex flex-col rounded-[20px] bg-[#101113] p-[25px] lg:col-span-4 xl:col-span-1 2xl:col-span-4">
            <!-- Head -->
            <div class="flex w-full justify-between">
                <h2 class="flex items-center gap-2.5 text-[17px] font-bold text-[#D7D7D7]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.98918 10.8775L3.36263 13.2165L1.07258 13.2649C0.388195 11.9955 0 10.5432 0 8.99983C0 7.50741 0.362953 6.10004 1.00631 4.86082H1.0068L3.04559 5.2346L3.9387 7.26115C3.75177 7.8061 3.64989 8.3911 3.64989 8.99983C3.64996 9.66049 3.76963 10.2935 3.98918 10.8775Z"
                            fill="#FBBB00"
                        />
                        <path
                            d="M17.8429 7.31851C17.9462 7.86294 18.0001 8.4252 18.0001 8.99982C18.0001 9.64417 17.9324 10.2727 17.8033 10.879C17.3652 12.942 16.2204 14.7435 14.6346 16.0183L14.6341 16.0179L12.0661 15.8868L11.7027 13.618C12.755 13.0009 13.5773 12.0351 14.0105 10.879H9.198V7.31851H17.8429Z"
                            fill="#518EF8"
                        />
                        <path
                            d="M14.6336 16.018L14.6341 16.0185C13.0917 17.2582 11.1325 18 8.99968 18C5.57227 18 2.59239 16.0843 1.07227 13.2651L3.98886 10.8776C4.74891 12.9061 6.70567 14.35 8.99968 14.35C9.98571 14.35 10.9095 14.0835 11.7021 13.6182L14.6336 16.018Z"
                            fill="#28B446"
                        />
                        <path
                            d="M14.745 2.07197L11.8293 4.45894C11.009 3.94615 10.0392 3.64992 9.00028 3.64992C6.65434 3.64992 4.66098 5.16013 3.93901 7.26131L1.00708 4.86098H1.00659C2.50446 1.97307 5.52192 0 9.00028 0C11.184 0 13.1863 0.777867 14.745 2.07197Z"
                            fill="#F14336"
                        />
                    </svg>

                    2FA
                </h2>

                <p class="flex items-center gap-2 text-[13px] text-[#F33D48]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.68609 8.17104C10.1046 8.58958 10.1046 9.26812 9.68609 9.68666C9.47682 9.89543 9.20268 10 8.92853 10C8.65439 10 8.38024 9.89539 8.17097 9.68666L4.99998 6.5152L1.82903 9.6867C1.61976 9.89547 1.34561 10.0001 1.07147 10.0001C0.797322 10.0001 0.523177 9.89543 0.313906 9.6867C-0.104635 9.26816 -0.104635 8.58962 0.313906 8.17108L3.48486 5.00009L0.313906 1.82913C-0.104635 1.41059 -0.104635 0.73201 0.313906 0.313468C0.732447 -0.104571 1.41049 -0.104571 1.82903 0.313468L4.99998 3.48497L8.17093 0.313468C8.58947 -0.104571 9.26751 -0.104571 9.68605 0.313468C10.1046 0.73201 10.1046 1.41059 9.68605 1.82913L6.5151 5.00009L9.68609 8.17104Z"
                            fill="#F33D48"
                        />
                    </svg>
                    <span>2FA не активирован</span>
                </p>
            </div>
            <!-- Content -->
            <p class="mb-[20px] mt-[15px] text-[14px] font-medium leading-5 text-[#595959]">
                Второй уровень безопасности вашей учетной записи BetFury. Установите 2FA для защиты вашей учетной записи (доступно только при регистрации через Google или если
                установлены адрес электронной почты и пароль)..
            </p>

            <button @click="isShowModal2FA = true" class="mt-auto flex h-[40px] items-center justify-center rounded-[8px] bg-[#FDF74B] px-3 font-bold uppercase text-[#101010]">
                Активировать
            </button>

            <PagesProfileTabsMainModals2FAIndex
                v-model="isShowModal2FA"
                class="flex items-end justify-center sm:items-center"
                content-class="sm:mx-auto sm:w-[538px] left-[15px] fixed sm:relative right-[15px] sm:left-none sm:right-none"
                @close="isShowModal2FA = false"
            />
        </div>

        <div class="col-span-1 flex flex-col rounded-[20px] bg-[#101113] p-[25px] lg:col-span-6 xl:col-span-1 2xl:col-span-6">
            <!-- Head -->
            <div class="flex w-full justify-between">
                <h2 class="text-[17px] font-bold text-[#D7D7D7]">Конфиденциальность</h2>
            </div>

            <!-- Content -->
            <div class="mt-[35px] flex flex-col">
                <p class="flex items-center gap-4">
                    <UIButtonToggle v-model="settingsPrivacy.first" />
                    <span class="text-[15px] font-medium text-[#D7D7D7]">Скрыть имя пользователя в общем списке</span>
                </p>

                <p class="text-[13px] font-medium text-[#595959]">Ваше имя пользователя не будет отображаться в общем списке ставок и предварительном просмотре ставок.</p>
            </div>

            <div class="mb-[20px] mt-[20px] flex flex-col">
                <p class="flex items-center gap-4">
                    <UIButtonToggle v-model="settingsPrivacy.second" />
                    <span class="text-[15px] font-medium text-[#D7D7D7]">Скрыть статистику от других пользователей</span>
                </p>

                <p class="mt-1 text-[13px] font-medium leading-4 text-[#595959]">Ваши статистические данные не будут отображаться в предварительном просмотре профиля</p>
            </div>

            <button
                :disabled="!isNeedSave"
                class="mt-auto flex h-[40px] w-fit items-center justify-center rounded-[8px] bg-[#FDF74B] px-5 font-bold uppercase text-[#101010] transition-all duration-300"
                :class="[isNeedSave ? '' : 'opacity-30']"
            >
                Сохранить изменения
            </button>
        </div>

        <div class="col-span-1 flex flex-col rounded-[20px] bg-[#101113] p-[25px] md:col-span-2 lg:col-span-6 xl:col-span-2 2xl:col-span-6">
            <!-- Head -->
            <div class="flex w-full justify-between">
                <h2 class="text-[17px] font-bold text-[#D7D7D7]">Мои сессии</h2>

                <UISelect
                    v-model="selected"
                    :options="[1, 2]"
                    :classes="{
                        base: `h-[40px] w-[145px]`,
                    }"
                >
                    <template #unSelectedOption>Все</template>
                    <template #selectedOption="{ option }">{{ option }}</template>
                    <template #option="{ option }">{{ option }}</template>
                </UISelect>
            </div>

            <!-- Content -->
            <div class="profile-settings-table mt-5 flex flex-col overflow-x-auto">
                <table class="w-full shrink-0 text-start [border-collapse:separate] [border-spacing:0px_8px]">
                    <thead class="mb-1">
                        <tr class="h-[45px] whitespace-nowrap bg-[#121315] text-left text-[#4C4D4F] [&>th]:px-[15px]">
                            <th class="rounded-l-[10px]">Браузер</th>
                            <th>Регион</th>
                            <th>Адрес ІР</th>
                            <th class="rounded-r-[10px]">Последняя ІР</th>
                        </tr>
                    </thead>

                    <tbody class="text-[#BCBCBC]">
                        <tr class="mb-1 h-[45px] whitespace-nowrap bg-[#141517] last-of-type:rounded-r-[10px] [&>td]:px-[15px]" v-for="(session, i) in sessions" :key="i">
                            <td class="rounded-l-[10px]">{{ session.browser }}</td>
                            <td>{{ session.region }}</td>
                            <td>{{ session.ip }}</td>
                            <td class="rounded-r-[10px]" v-html="session.last"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-3 flex justify-center gap-5 text-[14px] text-[#4C4D4F]">
                <a href="">Назад</a>
                <a href="">Вперед</a>
            </div>
        </div>
    </div>
</template>
