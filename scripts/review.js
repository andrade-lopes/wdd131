let count = localStorage.getItem("reviewCount");

if (!count) {
    count = 0;
}

count++;

localStorage.setItem("reviewCount", count);

document.querySelector("#reviewCount").textContent = count;
document.querySelector("#year").textContent = new Date().getFullYear();