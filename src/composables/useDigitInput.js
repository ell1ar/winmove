import { nextTick, ref } from "vue";

export function useDigitInput() {
    const digits = ref(Array(6).fill(""));
    const digitRefs = ref([]);

    const onInput = (index) => {
        if (digits.value[index].length === 1 && index < digits.value.length - 1) {
            nextTick(() => {
                digitRefs.value[index + 1].focus();
            });
        }
    };

    const onBackspace = (index) => {
        if (digits.value[index] === "" && index > 0) {
            nextTick(() => {
                digitRefs.value[index - 1].focus();
            });
        }
    };

    const onPaste = (event) => {
        const pastedData = event.clipboardData.getData("text");
        if (/^\d{6}$/.test(pastedData)) {
            digits.value = pastedData.split("");
            nextTick(() => {
                digitRefs.value[5].focus(); // Фокусируемся на последнем input
            });
        }
        event.preventDefault(); // Предотвращаем вставку, чтобы не дублировать данные
    };

    return {
        digits,
        digitRefs,
        onInput,
        onBackspace,
        onPaste,
    };
}
