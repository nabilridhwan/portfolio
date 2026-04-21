import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
	...nextVitals,
	{
		ignores: [".next/**", ".yarn/**", "node_modules/**"],
	},
];

export default config;
