// ---------- Footer Dynamic Content ----------
const yearSpan = document.querySelector("#currentYear");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// ---------- Hamburger Menu ----------
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// ---------- Temple Data ----------
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // ➕ REQUIRED ADDITIONAL TEMPLES (3+)
    {
        templeName: "Praia Cape Verde",
        location: "Praia, Cape Verde",
        dedicated: "2022-06-19",
        area: 8500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/praia-cape-verde/400x250/praia_cape_verde_temple-main.jpeg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 40000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
    }
];

// ---------- Display Logic ----------
const container = document.querySelector("#temples-container");
const filterTitle = document.querySelector("#filter-title");

function displayTemples(templeList) {
    container.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        card.append(name, location, dedicated, area, img);
        container.appendChild(card);
    });
}

// ---------- Filters ----------
document.querySelector("#home").addEventListener("click", e => {
    e.preventDefault();
    filterTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", e => {
    e.preventDefault();
    filterTitle.textContent = "Old Temples";
    const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", e => {
    e.preventDefault();
    filterTitle.textContent = "New Temples";
    const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", e => {
    e.preventDefault();
    filterTitle.textContent = "Large Temples";
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", e => {
    e.preventDefault();
    filterTitle.textContent = "Small Temples";
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// ---------- Initial Load ----------
displayTemples(temples);