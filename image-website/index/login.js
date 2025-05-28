// login.js
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const cancelLoginBtn = document.getElementById("cancelLoginBtn");
const loginForm = document.getElementById("loginForm");

// Array of login credentials with associated redirects
const validCredentials = [
    { username: "admin", password: "123", redirectLink: "krishnagopal.html" },
    { username: "user1", password: "1", redirectLink: "Debu.html" },
    { username: "user2", password: "2", redirectLink: "Pinkimasi.html" },
];

// Open the login modal when login button is clicked
loginBtn.addEventListener("click", () => {
    loginModal.classList.remove("hidden");
});

// Close the login modal when cancel button is clicked
cancelLoginBtn.addEventListener("click", () => {
    loginModal.classList.add("hidden");
});

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find the user from the validCredentials array based on username and password
    const user = validCredentials.find(
        (cred) => cred.username === username && cred.password === password
    );

    if (user) {
        // Successful login, redirect to the user's specific link
        alert("Login Successful!");
        window.location.href = user.redirectLink;  // Redirect based on user's credentials
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
