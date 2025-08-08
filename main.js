// Main.js

// Typewriter Text Setup
let i = 0;
const typewriterText = "Welcome to Qemb — Pioneering AI, Quantum, and Futuristic Tech Solutions.";
const speed = 80; // milliseconds per letter
const typewriterElement = document.querySelector(".typewriter");

// Clear text before typing starts
typewriterElement.innerHTML = "";

function typeWriter() {
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});

