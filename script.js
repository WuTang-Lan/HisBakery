// ==========================
// IMAGE SLIDER SYSTEM
// ==========================
const slides = [
    {
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        title: "Welcome to Bakery System",
        text: "Freshly baked management solutions"
    },
    {
        img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
        title: "Manage Your Bakery",
        text: "Track orders, sales and inventory"
    },
    {
        img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",
        title: "Smart & Simple",
        text: "Built for modern bakery owners"
    }
];

let index = 0;

const slider = document.getElementById("slider");
const headline = document.getElementById("headline");
const subtext = document.getElementById("subtext");

function updateSlide() {
    slider.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % slides.length;

        slider.style.backgroundImage = `url(${slides[index].img})`;
        headline.textContent = slides[index].title;
        subtext.textContent = slides[index].text;

        slider.style.opacity = 1;
    }, 500);
}

// Initial load
slider.style.backgroundImage = `url(${slides[0].img})`;

setInterval(updateSlide, 4000);


// ==========================
// AUTH SYSTEM (SIMULATED)
// ==========================
const users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "staff", password: "0000", role: "staff" }
];

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    const userId = document.getElementById("userId");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    // Reset styles
    userId.classList.remove("error", "success");
    password.classList.remove("error", "success");

    // Validation
    if (!userId.value || !password.value) {
        message.textContent = "Please fill all fields";
        message.style.color = "orange";

        if (!userId.value) userId.classList.add("error");
        if (!password.value) password.classList.add("error");
        return;
    }

    // Check user
    const foundUser = users.find(
        user => user.username === userId.value && user.password === password.value
    );

    if (foundUser) {
        message.textContent = "Login successful!";
        message.style.color = "lightgreen";

        userId.classList.add("success");
        password.classList.add("success");

        // Save session (simulated)
        localStorage.setItem("user", JSON.stringify(foundUser));

        // Redirect
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.textContent = "Invalid credentials";
        message.style.color = "red";

        userId.classList.add("error");
        password.classList.add("error");
    }
}
