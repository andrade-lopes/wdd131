// ---------- Footer Dynamic Content ----------
const yearSpan = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ---------- Hamburger Menu ----------
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    // Toggle icon ☰ / ✖
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});