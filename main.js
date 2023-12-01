const footerYear = document.querySelector("#footer-year")
const navBtn = document.querySelector(".navBtn")
const navigation = document.querySelector(".nav")
const navItems = document.querySelector(".navItems")

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}
currentYear()

const toggleNav = () => {
	navigation.classList.toggle("navMobileActive")
	navItems.classList.toggle("itemsActive")
	if (document.body.style.overflow === "hidden") {
		document.body.style.overflow = ""
	} else {
		document.body.style.overflow = "hidden"
	}
	navItems.querySelectorAll("a").forEach(link => {
		link.addEventListener("click", () => {
			if (navigation.classList.contains("navMobileActive")) {
				toggleNav()
			}
		})
	})
}

navBtn.addEventListener("click", toggleNav)
const handleResize = () => {
	if (window.innerWidth >= 1024) {
		navigation.classList.remove("navMobileActive")
		navItems.classList.remove("itemsActive")
		document.body.style.overflow = ""
	}
}

window.addEventListener("resize", handleResize)
document.addEventListener("DOMContentLoaded", () => {
	handleResize()
})
