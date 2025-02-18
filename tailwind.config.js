/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			black: '#000',
			white: '#fff',
			gray: '#838383',
			lightGray: '#eaeaea',
			red: '#df6464',
			orange: '###ffa542',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '769px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
}
