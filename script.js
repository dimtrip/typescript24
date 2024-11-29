const form = document.getElementById("login-register-form");
const submitButton = document.getElementById("submit-btn");
const toggleFormLink = document.getElementById("toggle-to-register");
const formTitle = document.getElementById("form-title");

let isRegistering = false;

// Toggle between Login and Register forms
toggleFormLink.addEventListener("click", function () {
    if (isRegistering) {
        formTitle.textContent = "Login";
        submitButton.textContent = "Login";
        toggleFormLink.textContent = "Don't have an account? Register";
    } else {
        formTitle.textContent = "Register";
        submitButton.textContent = "Register";
        toggleFormLink.textContent = "Already have an account? Login";
    }
    isRegistering = !isRegistering;
});

// Form submission handling
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isRegistering) {
        // Register user and store in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert("User already exists!");
        } else {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful! You can now login.");
            isRegistering = false;
            formTitle.textContent = "Login";
            submitButton.textContent = "Login";
            toggleFormLink.textContent = "Don't have an account? Register";
        }
    } else {
        // Login check
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!");
            // Redirect or take user to their dashboard, for example:
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    }
});
