/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                15: "repeat(15, minmax(0, 1fr))",
            },
            keyframes: {
                "spin-reverse": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(-360deg)" },
                },
            },
            animation: {
                "spin-reverse-slow": "spin-reverse 3s linear infinite",
            },
        },
    },
    plugins: [],
};
