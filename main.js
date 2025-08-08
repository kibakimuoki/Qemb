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

    // Dynamic Content Switching for Navigation and Buttons
    const navLinks = document.querySelectorAll(".nav-link");
    const sectorButtons = document.querySelectorAll(".sector-card");
    const heroButtons = document.querySelectorAll(".hero-buttons button");
    const sections = document.querySelectorAll(".content-section");

    function showSection(sectionId) {
        // Hide all sections, show target section
        sections.forEach(sec => {
            sec.style.display = (sec.id === sectionId) ? "block" : "none";
        });

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.toggle("active", link.dataset.section === sectionId);
        });
    }

    // Handle navigation and buttons click
    function setupClickHandlers(elements) {
        elements.forEach(el => {
            el.addEventListener("click", e => {
                e.preventDefault();
                const section = el.dataset.section;
                if (!section) return;
                showSection(section);
                history.pushState({section}, "", `#${section}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
    }

    setupClickHandlers(navLinks);
    setupClickHandlers(sectorButtons);
    setupClickHandlers(heroButtons);

    // Handle browser back/forward buttons
    window.addEventListener("popstate", event => {
        const section = (event.state && event.state.section) || "home";
        showSection(section);
    });

    // On page load, show section based on URL hash or default to home
    const initialSection = window.location.hash.replace("#", "") || "home";
    showSection(initialSection);
    history.replaceState({section: initialSection}, "", window.location.href);
});

