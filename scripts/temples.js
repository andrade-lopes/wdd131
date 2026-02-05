// ---------- Footer Dynamic Content ----------
const yearSpan = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ---------- Hamburger Menu ----------
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});