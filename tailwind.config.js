/** @type {import('tailwindcss').Config} */
export default {
	content: ["index.html"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: ".5rem",
				margin: "1rem",
			},
			colors: {
				main: "#F0F2F8",
				lighter: "#A1AEB7",
				white: "#ffffff",
				dark: "#505D68",
				purple:"#495270"
			},
			fontFamily: {
				headerFont: ["Bad Script", "cursive"],
				mainFont: ["Montserrat", "sans-serif"],
			},
			backgroundImage: {
				'header-image': 'url("img/header.jpg")',
			},
		},
	},
	plugins: [],
}
