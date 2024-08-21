<template>
    <div class="flex grow flex-col gap-[5px] overflow-y-auto p-0 lg:rounded-[20px] lg:bg-[#101113] lg:p-5">
        <MainTableRowWrapper class="h-[45px]">
            <div class="flex w-[40%] justify-start pl-[15px] sm:w-[40%] lg:pl-[30px]"><span>Пользователь</span></div>
            <div class="flex w-[20%] justify-center sm:w-[40%] sm:justify-start"><span>Время</span></div>
            <div class="flex w-[40%] justify-end pr-[15px] sm:w-[20%] sm:justify-start"><span>Выигрыш</span></div>
        </MainTableRowWrapper>

        <template v-for="i in 2">
            <MainTableRowWrapper class="h-[56px]" v-for="i in 5" :key="i">
                <div class="flex w-[40%] items-center justify-start gap-2.5 pl-[15px] sm:w-[40%] lg:pl-[30px]">
                    <PlayerAvatar :color="['blue', 'orange', 'purple', 'white', 'yellow'][i - 1]" />
                    <PlayerName class="text-[10px] sm:text-[15px]" :color="['blue', 'orange', 'purple', 'white', 'yellow'][i - 1]" />
                </div>

                <div class="flex w-[20%] flex-col items-center text-[15px] text-[#5E5E5E] sm:w-[40%] sm:flex-row sm:justify-start sm:gap-2">
                    <strong class="text-[#BDBDBD]">20:27</strong>
                    <!-- <span class="text-[12px] sm:text-[15px]">27.06.24</span> -->
                </div>

                <div class="flex w-[40%] items-center justify-end gap-2 pr-[15px] text-[15px] text-[#5E5E5E] sm:w-[20%] sm:justify-start">
                    <strong class="text-[#BDBDBD]">$56.90</strong>
                </div>
            </MainTableRowWrapper>
        </template>
    </div>
</template>
