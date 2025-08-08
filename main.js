// main.js

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------
    // Dynamic Navbar
    // -------------------------
    const navbarEl = document.getElementById("navbar");
    if (navbarEl) {
        navbarEl.innerHTML = `
        <nav class="navbar glass">
            <div class="logo">
                <a href="index.html"><img src="logo.jpg" alt="Qemb Logo"></a>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="health.html">Health</a></li>
                <li><a href="climate.html">Climate</a></li>
                <li><a href="agriculture.html">Agriculture</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="funding.html">Funding</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="menu-toggle" id="menuToggle">&#9776;</div>
        </nav>
        `;
    }

    // -------------------------
    // Dynamic Footer
    // -------------------------
    const footerEl = document.getElementById("footer");
    if (footerEl) {
        footerEl.innerHTML = `
        <div class="footer-container">
            <p>© ${new Date().getFullYear()} Qemb | Innovating for a Better Future</p>
            <div class="social-icons">
                <a href="#"><img src="images/social-facebook.png" alt="Facebook"></a>
                <a href="#"><img src="images/social-twitter.png" alt="Twitter"></a>
                <a href="#"><img src="images/social-linkedin.png" alt="LinkedIn"></a>
            </div>
        </div>
        `;
    }

    // -------------------------
    // Typewriter Effect
    // -------------------------
    const typewriterEl = document.querySelector(".typewriter");
    if (typewriterEl) {
        const typewriterText = "Pioneering the Future with AI, Quantum & Innovation";
        let i = 0;
        const speed = 60;

        function typeWriter() {
            if (i < typewriterText.length) {
                typewriterEl.innerHTML += typewriterText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }

    // -------------------------
    // Featured Initiatives
    // -------------------------
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        const projects = [
            {
                title: "QPT-1 AI Model for Early Breast Cancer Detection",
                description: "Fully autonomous, continually learning AI system integrated with mammography devices for early detection of breast cancer in real-time.",
                image: "images/qpt1.jpg"
            },
            {
                title: "Quantum-Driven Climate Models",
                description: "Using quantum computing to model and predict climate changes with unprecedented accuracy.",
                image: "images/quantum-climate.jpg"
            },
            {
                title: "Futuristic Agriculture Systems",
                description: "AI-powered smart agriculture solutions for resource optimization and sustainable farming.",
                image: "images/futuristic-agriculture.jpg"
            }
        ];

        projects.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("project-card", "glass");
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(card);
        });
    }

    // -------------------------
    // Mobile Menu Toggle
    // -------------------------
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // -------------------------
    // Smooth Scrolling
    // -------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
