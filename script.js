
/* =====================================
   DEBORAH MADU — PORTFOLIO INTERACTIONS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. MOBILE NAVIGATION
    const header = document.querySelector(".site-header");
    const navigation = document.querySelector(".navigation");

    if (header && navigation) {
        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.textContent = "MENU";
        menuButton.setAttribute("aria-label", "Toggle navigation");
        menuButton.setAttribute("aria-expanded", "false");

        header.insertBefore(menuButton, navigation);

        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.textContent = isOpen ? "CLOSE" : "MENU";
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "MENU";
            });
        });
    }

    // 2. REVEAL SECTIONS AS THEY ENTER VIEW
    const revealElements = document.querySelectorAll(
        ".about, .work, .research, .contact, .work-item"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            element.classList.add("reveal");
            observer.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }

    // 3. AUTOMATIC FOOTER YEAR
    const footerYear = document.querySelector(".footer-year");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

});
