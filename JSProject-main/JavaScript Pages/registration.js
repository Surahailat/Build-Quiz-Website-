// Select form elements
const registerForm = document.getElementById("registerForm");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Regex for validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Live validation for email
emailInput.addEventListener("input", () => {
    emailError.textContent = emailRegex.test(emailInput.value)
        ? ""
        : "Invalid email format.";
});

// Live validation for password
passwordInput.addEventListener("input", () => {
    passwordError.textContent = passwordRegex.test(passwordInput.value)
        ? ""
        : "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
});

// Live validation for password confirmation
confirmPasswordInput.addEventListener("input", () => {
    confirmPasswordError.textContent =
        confirmPasswordInput.value === passwordInput.value
            ? ""
            : "Passwords do not match.";
});

// Handle form submission
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check if all validations pass
    if (
        emailRegex.test(emailInput.value) &&
        passwordRegex.test(passwordInput.value) &&
        confirmPasswordInput.value === passwordInput.value
    ) {
        // Retrieve existing user data from localStorage
        const storedUserData = JSON.parse(localStorage.getItem("users")) || [];

        // Check if a user with the same email already exists
        const userExists = storedUserData.some((user) => user.email === emailInput.value);

        if (userExists) {
            alert("User already exists!");
        } else {
            // Create the new user object
            const newUser = {
                fname: fnameInput.value, // First name
                lname: lnameInput.value, // Last name
                email: emailInput.value, // Email
                password: passwordInput.value, // Password
            };

            // Add the new user to the stored data
            storedUserData.push(newUser);

            // Save updated user data to localStorage
            localStorage.setItem("users", JSON.stringify(storedUserData));

            // Save the new user's data to sessionStorage for the current session
            sessionStorage.setItem("loggedInUser", JSON.stringify(newUser));

            alert("Registration successful! Redirecting to profile...");
            window.location.href = "login.html"; // Redirect to the profile page
        }
    } else {
        alert("Please fix the errors in the form.");
    }
});
