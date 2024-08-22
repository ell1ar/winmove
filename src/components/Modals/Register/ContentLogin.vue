<template>
    <form action="#" class="space-y-[10px] text-[14px] font-medium">
        <Input placeholder="Email" autocomplete type="email" />

        <div class="relative flex w-full items-center">
            <Input placeholder="Пароль" autocomplete type="password" />

            <button class="absolute right-[16px]" type="button">
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
    </form>

    <p class="mt-[10px] text-[13px] text-[#848587] font-medium">Забыли пароль?</p>

    <button class="mt-[20px] h-[35px] w-full rounded-[8px] bg-[#FDF74B] text-[16px] uppercase text-[#101010]">Войти</button>

    <p class="mt-[34px] text-[11px] sm:text-[13px] text-[#626262]">
        Заходя на сайт, вы подтверждаете, что вам исполнилось 18 лет, и соглашаетесь с <a href="" class="text-[#C1C1C1]">Условия предоставления услуг</a>
    </p>
</template>
