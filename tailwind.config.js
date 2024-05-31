/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ["Plus Jakarta Sans", "sans-serif"],
                body: ["Plus Jakarta Sans", "sans-serif"],
            },

            colors: {
                primarydark: "#0F0F16",
                primary: "#3239D1",
                primarylight: "#252529",
                textcolor: "#FFFFFF",
                accent: "#E868B7",
                muted: "#8C8C8C",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
