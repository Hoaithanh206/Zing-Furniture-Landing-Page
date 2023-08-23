const primaryNav = document.querySelector(".primary-nav");
const menuItems = Array.from(
	primaryNav.querySelectorAll(".nav-menu-item .nav-menu-item-link")
);
const sections = document.querySelectorAll("section.main-section");
const filterProducts = document.querySelectorAll(
	".filter-products .filter-item"
);
const products = document.querySelectorAll(".products-grid .product-item");

window.addEventListener("scroll", () => {
	document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
		? primaryNav.classList.add("sticky-nav")
		: primaryNav.classList.remove("sticky-nav");
	sections.forEach((sec, index) => {
		if (sec.offsetTop - window.scrollY <= 350) {
			const menuActive = primaryNav.querySelector(
				".nav-menu-item .nav-menu-item-link.active"
			);
			if (menuActive) {
				menuActive.classList.remove("active");
			}
			menuItems[index].classList.add("active");
		}
	});
});

filterProducts.forEach((item) => {
	item.addEventListener("click", () => {
		const dataFilter = item.dataset.filter;
		filterProducts.forEach((item) => {
			item.classList.remove("active");
		});
		item.classList.add("active");
		products.forEach((p) => {
			if (!p.dataset.filter.includes(dataFilter) && dataFilter !== "all") {
				p.classList.add("hide");
			} else {
				p.classList.remove("hide");
			}
		});
	});
});
