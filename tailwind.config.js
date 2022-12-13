/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				header: ["Poppins", "sans-serif"],
				body: ["Plus Jakarta Sans", "sans-serif"],
			},

			colors: {
				primarydark: "#141417",
				primary: "#18181B",
				primarylight: "#252529",
				textcolor: "#EBEBEB",
				accent: "#E141AB",
				muted: "#8C8C8C",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
