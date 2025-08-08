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
        // Hide all sections
        sections.forEach(sec => {
            if (sec.id === sectionId) {
                sec.style.display = "block";
            } else {
                sec.style.display = "none";
            }
        });

        // Update active nav link
        navLinks.forEach(link => {
            if (link.dataset.section === sectionId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Nav link click event
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);
            // Scroll to top for better UX
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // Sector card button click event (similar behavior)
    sectorButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            const section = btn.dataset.section;
            showSection(section);
            // Update nav active state
            navLinks.forEach(link => {
                if (link.dataset.section === section) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // Hero buttons (Explore Our Work, Contact Us)
    heroButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            const section = btn.dataset.section;
            showSection(section);
            // Update nav active state
            navLinks.forEach(link => {
                if (link.dataset.section === section) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // Initial display setup - show home section
    showSection("home");
});
