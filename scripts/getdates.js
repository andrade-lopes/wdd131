// Set current year in the footer
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModifiedPara = document.getElementById("lastModified");
lastModifiedPara.textContent = "Last Modified: " + document.lastModified;