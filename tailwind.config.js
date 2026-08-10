/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        "./app/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#171F2A',
                surface: '#1D2124',
                primary: '#2179DA',
                'primary-hover': '#327CC5',
                accent: '#F2C94C',
                muted: '#9CA3AF',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};