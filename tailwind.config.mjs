/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				gothicBold:['ZenMaruGothicold','sans-serif'],
				gothicMed:['ZenMaruGothick-Medium','sans-serif'],
			},
			screens: {
				'xs': '359px',
			},
			borderWidth:{
				'1':'1px',
				'2':'2px',
			},
		},
	},
	plugins: [],
}
