// DOM interaction and localStorage
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMe");
    if (button) {
        button.addEventListener("click", () => {
            const message = "Hello from JavaScript!";
            alert(message);
            localStorage.setItem("greeting", message);
        });
    }

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            console.log(`Message received: ${JSON.stringify(formData)}`);
            localStorage.setItem("contactForm", JSON.stringify(formData));
            alert(`Thanks, ${formData.name}! Your message has been sent.`);
            form.reset();
        });
    }
});