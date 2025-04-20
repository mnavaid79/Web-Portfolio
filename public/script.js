// Select the toggle button and icon
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Function to toggle theme
function toggleTheme() {
    // Check if dark mode is currently enabled
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (isDarkMode) {
        // Switch to light mode
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark:bg-dark-background", "dark:text-white");
        themeIcon.textContent = "dark_mode"; // Change icon to moon
    } else {
        // Switch to dark mode
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark:bg-dark-background", "dark:text-white");
        themeIcon.textContent = "light_mode"; // Change icon to sun
    }
}

// Add event listener to toggle button
themeToggle.addEventListener("click", toggleTheme);

// Select the contact form
const contactForm = document.getElementById("contactForm");

// Form submission event listener
contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Extract form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    // Simulate form submission (you can replace with real API integration)
    try {
        // Show loading state
        const submitButton = contactForm.querySelector("button[type='submit']");
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        // Simulated delay for submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Example: Send data to an API (commented as placeholder)
        // await fetch("https://your-api-endpoint.com/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ name, email, message }),
        // });

        // Success feedback
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    } catch (error) {
        // Error handling
        alert("Oops! Something went wrong. Please try again later.");
    } finally {
        // Reset button state
        const submitButton = contactForm.querySelector("button[type='submit']");
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
    }
});

// Select the terminal text element
const terminalText = document.getElementById("terminalText");

// The text to type out (your GitHub repository link)
const githubLink = "https://github.com/mnavaid79";

// Typing animation variables
let index = 0;
const typingSpeed = 100; // Adjust this for faster/slower typing

// Typing animation function
function typeText() {
    if (index < githubLink.length) {
        terminalText.textContent += githubLink.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed); // Recursively type the next character
    }
}

// Start the animation when the page loads
window.onload = () => {
    terminalText.textContent = ""; // Clear the text content
    typeText();
};