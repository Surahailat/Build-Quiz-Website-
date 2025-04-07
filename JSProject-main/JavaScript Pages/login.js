// Select form elements
const loginForm = document.getElementById("loginForm"); // The login form element
const usernameInput = document.getElementById("username"); // Input for the username or email
const passwordInput = document.getElementById("password"); // Input for the password
const usernameError = document.getElementById("usernameError"); // Element to display username validation error messages
const passwordError = document.getElementById("passwordError"); // Element to display password validation error messages

// Regex for validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
// Regular expression to validate email format (e.g., user@example.com)

// Event listeners for live validation
usernameInput.addEventListener("input", () => {
    if (emailRegex.test(usernameInput.value)) { // Check if the email format is valid
        usernameError.textContent = ""; // Clear error if valid
    } else {
        usernameError.textContent = "Invalid email format."; // Show error if invalid
    }
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from reloading the page upon submission

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("users")) || []; 
    // Parse the user data from localStorage or initialize an empty array if no data exists

    // Check if there is a matching user in the stored data
    const user = storedUserData.find(
        (user) => user.email === usernameInput.value && user.password === passwordInput.value
    );

    if (user) {
        // If a match is found, log the user in
        sessionStorage.setItem("loggedInUser", JSON.stringify(user)); 
        // Save the logged-in user's data in sessionStorage for the current session
        alert("Login successful! Redirecting...");
        // Redirect the user to the home page
        window.location.href = "homeP.html";
    } else {
        // If no match is found, show an error message
        alert("Invalid username or password. Please try again.");
    }
});

// Example Registration Logic
function registerUser(email, password) {
    // Retrieve existing user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("users")) || []; 
    // Parse the data or initialize an empty array

    // Check if the email is already registered
    const userExists = storedUserData.some((user) => user.email === email);

    if (userExists) {
        alert("User already exists!"); // Alert if email is already registered
        return false; // Return false to indicate failure
    }

    // Add the new user's data to the array
    storedUserData.push({ email, password });
    // Save the updated user data back to localStorage
    localStorage.setItem("users", JSON.stringify(storedUserData));
    alert("Registration successful!"); // Alert the user of successful registration
    return true; // Return true to indicate success
}
