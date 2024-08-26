<template>
    <div class="mt-[34px] grid grid-cols-12 gap-5 px-[15px] transition-all md:mt-0 md:px-0 lg:grid-cols-8 2xl:grid-cols-11">
        <ProfileTabList class="col-span-12 lg:col-span-8 2xl:col-span-11" />
        <ProfileBanner
            class="order-2 col-span-12 h-[213px] md:order-1 md:col-span-6 md:h-[224px] lg:col-span-3 lg:h-[224px] xl:col-span-4 xl:h-[213px] 2xl:col-span-4 2xl:h-[225px]"
        />
        <ProfileInfo class="order-1 col-span-12 md:order-2 md:col-span-6 md:h-[224px] lg:col-span-5 lg:h-[224px] xl:col-span-4 xl:h-[213px] 2xl:col-span-7 2xl:h-[225px]" />
        <ProfileStatList class="order-3 col-span-12 lg:col-span-8 2xl:col-span-11" />
        <ProfileSettings class="order-4 col-span-12 lg:col-span-8 2xl:col-span-11 2xl:mt-12" />
    </div>
</template>
