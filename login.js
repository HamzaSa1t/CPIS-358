document.addEventListener("DOMContentLoaded", () => {
    // LOGIN FORM
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const username = document.getElementById("name").value;
            const password = document.getElementById("password").value;

            try {
                const res = await fetch("https://localhost:7146/api/AuthApi/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password })
                });

                const result = await res.json();

                if (res.ok) {
                    alert("Login successful!");
                    localStorage.setItem("username", username);
                    window.location.href = "home.html";
                } else {
                    alert("Login failed: " + result.message);
                }

            } catch (err) {
                console.error("Login failed:", err);
                alert("Could not connect to backend.");
            }
        });
    }

    // REGISTER FORM
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const firstName = document.getElementById("first").value;
            const lastName = document.getElementById("last").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const res = await fetch("https://localhost:7146/api/AuthApi/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ firstName, lastName, email, password })
                });

                const result = await res.json();

                if (res.ok) {
                    alert("Registration successful!");
                    window.location.href = "login.html";
                } else {
                    alert("Registration failed: " + result.message);
                }

            } catch (err) {
                console.error("Registration failed:", err);
                alert("Could not connect to backend.");
            }
        });
    }
});
