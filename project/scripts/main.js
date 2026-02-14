// Hamburger Menu
const menuButton = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Welcome Message with localStorage

const welcomeMessage = document.querySelector("#welcome-message");

function displayWelcome() {
    const lastVisit = localStorage.getItem("lastVisit");

    const now = Date.now();

    if (lastVisit) {
        const daysBetween = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        welcomeMessage.textContent = `Welcome back! It has been ${daysBetween} day(s) since your last visit.`;
    } else {
        welcomeMessage.textContent = "Welcome! We hope you enjoy our delicious daily meals.";
    }

    localStorage.setItem("lastVisit", now);
}

displayWelcome();

// Menu Items Array (Objects)

const menuItems = [

    {
        name: "Grilled Chicken Plate",
        price: 650,
        category: "meat",
        description: "Grilled chicken served with rice, fries, and salad."
    },

    {
        name: "Fish Stew Plate",
        price: 700,
        category: "fish",
        description: "Traditional fish stew with vegetables and rice."
    },

    {
        name: "Beef Steak Plate",
        price: 750,
        category: "meat",
        description: "Beef steak served with fries and fresh salad."
    },

    {
        name: "Vegetarian Plate",
        price: 600,
        category: "vegetarian",
        description: "Fresh vegetables, rice, and beans."
    }

];

// Display Menu Function

const menuContainer = document.querySelector("#menu-container");

function displayMenuItems(items) {

    if (!menuContainer) return;

    menuContainer.innerHTML = items.map(item => `

    <div class="menu-item">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>Price: ${item.price} CVE</strong></p>
    </div>

  `).join("");

}

// Filter Function

function filterMenu(category) {

    if (category === "all") {
        displayMenuItems(menuItems);
    }
    else {

        const filtered = menuItems.filter(item => item.category === category);

        displayMenuItems(filtered);
    }

}

// Event Listeners

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        filterMenu(category);

    });

});

// Initial Display

displayMenuItems(menuItems);

// Contact Form

const contactForm = document.querySelector("#contact-form");
const formResponse = document.querySelector("#form-response");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value;

        localStorage.setItem("userName", name);

        formResponse.textContent = `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();

    });

}