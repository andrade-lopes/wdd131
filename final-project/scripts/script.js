document.addEventListener("DOMContentLoaded", () => {
  displayWelcomeMessage();
  initializePlaces();
  setupSaveButton();
  setupMobileMenu();
  setupContactForm();
});

const mindeloPlaces = [
  {
    name: "Laginha Beach",
    description: "A popular city beach with crystal-clear waters.",
    image: "images/laginha.webp"
  },
  {
    name: "Belem Tower",
    description: "Replica of the Lisbon tower by the sea.",
    image: "images/torre.jpeg"
  },
  {
    name: "Monte Cara",
    description: "Iconic mountain shaped like a human face.",
    image: "images/monte-cara.webp"
  }
];

function displayWelcomeMessage() {
  const user = localStorage.getItem("user") || prompt("What's your name?");
  if (user) {
    localStorage.setItem("user", user);
    const greeting = document.getElementById("boas-vindas");
    if (greeting) greeting.textContent = `👋 Welcome back, ${user}! Discover Mindelo with us.`;
  }
}

function initializePlaces() {
  const container = document.getElementById("lugares");
  if (container) {
    container.innerHTML = mindeloPlaces
      .map(place => `
        <div class="card">
          <img src="${place.image}" alt="${place.name}" loading="lazy">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
        </div>
      `).join("");
  }
}

function savePlaces() {
  localStorage.setItem("savedPlaces", JSON.stringify(mindeloPlaces));
  alert("📌 Places saved successfully!");
}

function setupSaveButton() {
  const button = document.getElementById("btn-salvar");
  if (button) {
    button.addEventListener("click", savePlaces);
  }
}

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name && email && message) {
        status.textContent = `✅ Thank you, ${name}, your message has been sent!`;
        form.reset();
      } else {
        status.textContent = `⚠️ Please fill in all fields.`;
      }
    });
  }
}