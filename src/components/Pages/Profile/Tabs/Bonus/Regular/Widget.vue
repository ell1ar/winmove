<template>
    <div class="flex flex-col rounded-[20px] bg-[#101113] p-[15px] md:p-[25px]">
        <h2 class="mb-[35px] flex items-center gap-[13px] text-[20px] font-medium text-[#E4E4E4]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path
                    d="M2.86523 11.0512C2.86523 14.9941 6.06638 18.1562 9.97021 18.1562C13.874 18.1562 17.0752 14.9551 17.0752 11.0512C17.0752 7.10837 13.9131 3.90723 9.97021 3.90723C6.02734 3.90723 2.86523 7.10837 2.86523 11.0512ZM9.18944 10.6609V6.87414C9.18944 6.44472 9.54078 6.09337 9.97021 6.09337C10.3996 6.09337 10.751 6.48375 10.751 6.87414V10.4266H13.0152C13.4446 10.4266 13.796 10.778 13.796 11.2074C13.796 11.6368 13.4056 11.9882 13.0152 11.9882H9.97021C9.54078 11.9882 9.18944 11.6368 9.18944 11.2074V10.6609Z"
                    fill="#E4E4E4"
                />
                <path
                    d="M19.535 8.00602C18.3639 4.29738 15.0846 1.64277 11.2589 1.09624C11.2979 0.979121 11.337 0.862006 11.337 0.78393C11.337 0.471623 11.1418 0.198355 10.9075 0.0812401C10.5952 -0.0749131 10.2829 0.00316356 10.0097 0.237393L9.18985 0.940083C9.07274 1.0572 8.91658 1.13527 8.83851 1.25239C8.76043 1.3695 8.72139 1.52566 8.72139 1.68181C8.72139 2.03316 8.95562 2.22835 9.15081 2.50161C9.38504 2.77488 9.61927 3.08719 9.89254 3.36046C10.322 3.86796 11.2198 3.47757 11.2198 2.85296V2.69681C13.9916 3.12623 16.451 4.88295 17.7002 7.45948C19.1056 10.3874 18.6371 14.057 16.5291 16.5164C14.421 19.0148 11.0247 20.1079 7.86255 19.2881C4.73948 18.4683 2.35815 15.8918 1.73353 12.7687C0.91373 8.86486 3.09988 4.96103 6.65236 3.32142C7.04274 3.16527 7.12082 2.57969 6.92563 2.26739C6.6914 1.877 6.26198 1.79893 5.87159 1.99412C2.16296 3.67276 -0.21838 7.5766 0.0158495 11.6756C0.250079 15.5404 2.67045 18.9367 6.22294 20.4202C9.81446 21.9037 14.0306 21.1229 16.8414 18.5073C19.6131 15.8137 20.7062 11.6756 19.535 8.00602Z"
                    fill="#E4E4E4"
                />
            </svg>
            Регулярные бонусы

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                        d="M6.5 0C2.91581 0 0 2.91581 0 6.5C0 10.0842 2.91581 13 6.5 13C10.0842 13 13 10.0842 13 6.5C13 2.91578 10.0842 0 6.5 0ZM6.5 11.7C3.63276 11.7 1.3 9.36724 1.3 6.5C1.3 3.63276 3.63276 1.3 6.5 1.3C9.36724 1.3 11.7 3.63276 11.7 6.5C11.7 9.36724 9.36724 11.7 6.5 11.7ZM7.15 3.9C7.15 4.25895 6.859 4.55 6.5 4.55C6.141 4.55 5.85 4.25897 5.85 3.9C5.85 3.541 6.141 3.25 6.5 3.25C6.859 3.25 7.15 3.541 7.15 3.9ZM7.15 5.85V9.1C7.15 9.45897 6.85897 9.75 6.5 9.75C6.14105 9.75 5.85 9.45897 5.85 9.1V5.85C5.85 5.49105 6.14105 5.2 6.5 5.2C6.85897 5.2 7.15 5.49103 7.15 5.85Z"
                        fill="#5A5B5D"
                    />
                </svg>
            </button>
        </h2>

        <div class="flex w-full flex-col">
            <PagesProfileTabsBonusRegularCategory class="mb-2.5 md:mb-5" title="Каждый час">
                <template #right>
                    <div
                        class="flex h-[31px] items-center justify-center rounded-[10px] border-[1px] border-[#1E1F21] bg-[#191A1C] px-4 text-[12px] text-[#8E8F91] md:h-[40px] md:text-[15px]"
                    >
                        55 : 27
                    </div>
                </template>
            </PagesProfileTabsBonusRegularCategory>
            <div class="mb-[5px] flex items-center gap-2.5 overflow-x-auto pb-[5px] md:mb-2.5 md:gap-5 md:pb-2.5">
                <PagesProfileTabsBonusRegularCard color="yellow" />
                <PagesProfileTabsBonusRegularCard color="purple" />
                <PagesProfileTabsBonusRegularCard color="blue" />
            </div>

            <PagesProfileTabsBonusRegularCategory class="mb-2.5 md:mb-5" title="Каждый день">
                <template #right>
                    <div
                        class="flex h-[31px] items-center justify-center rounded-[10px] border-[1px] border-[#1E1F21] bg-[#191A1C] px-4 text-[12px] text-[#8E8F91] md:h-[40px] md:text-[15px]"
                    >
                        02 : 55 : 27
                    </div>
                </template>
            </PagesProfileTabsBonusRegularCategory>
            <div class="mb-[5px] flex items-center gap-2.5 overflow-x-auto pb-[5px] md:mb-2.5 md:gap-5 md:pb-2.5">
                <PagesProfileTabsBonusRegularCard color="yellow" />
                <PagesProfileTabsBonusRegularCard color="purple" />
                <PagesProfileTabsBonusRegularCard color="blue" />
            </div>

            <PagesProfileTabsBonusRegularCategory class="mb-2.5 md:mb-5" title="Каждая неделя">
                <template #right>
                    <div class="flex items-center gap-[5px]">
                        <div
                            class="flex h-[31px] items-center justify-center rounded-[10px] border-[1px] border-[#1E1F21] bg-[#1D1E20] px-[17px] text-[12px] font-bold text-[#999A9C] md:h-[40px] md:text-[15px]"
                        >
                            2 дня
                        </div>
                        <div
                            class="flex h-[31px] items-center justify-center rounded-[10px] border-[1px] border-[#1E1F21] bg-[#191A1C] px-4 text-[12px] text-[#8E8F91] md:h-[40px] md:text-[15px]"
                        >
                            02 : 55 : 27
                        </div>
                    </div>
                </template>
            </PagesProfileTabsBonusRegularCategory>
            <div class="mb-[5px] flex items-center gap-2.5 overflow-x-auto pb-[5px] md:mb-2.5 md:gap-5 md:pb-2.5">
                <PagesProfileTabsBonusRegularCard color="yellow" />
                <PagesProfileTabsBonusRegularCard color="purple" />
                <PagesProfileTabsBonusRegularCard color="blue" />
            </div>

            <PagesProfileTabsBonusRegularCategory class="mb-2.5 md:mb-5" title="Каждый месяц">
                <template #right>
                    <div class="flex items-center gap-[5px]">
                        <div
                            class="flex h-[31px] items-center justify-center rounded-[10px] border-[1px] border-[#1E1F21] bg-[#1D1E20] px-[11px] text-[12px] font-bold text-[#999A9C] md:h-[40px] md:px-[17px] md:text-[15px]"
                        >
                            17 дней
                        </div>
                        <div
                            class="flex h-[31px] items-center justify-center rounded-[10px] border-[1px] border-[#1E1F21] bg-[#191A1C] px-4 text-[12px] text-[#8E8F91] md:h-[40px] md:text-[15px]"
                        >
                            02 : 55 : 27
                        </div>
                    </div>
                </template>
            </PagesProfileTabsBonusRegularCategory>
            <div class="mb-[5px] flex items-center gap-2.5 overflow-x-auto pb-[5px] md:mb-2.5 md:gap-5 md:pb-2.5">
                <PagesProfileTabsBonusRegularCard color="yellow" />
                <PagesProfileTabsBonusRegularCard color="purple" />
                <PagesProfileTabsBonusRegularCard color="blue" />
            </div>
        </div>
    </div>
</template>
