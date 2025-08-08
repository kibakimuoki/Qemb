// Floating Navbar Injection
document.getElementById('navbar').innerHTML = `
    <nav>
        <a href="index.html">Home</a>
        <a href="health.html">Health</a>
        <a href="climate.html">Climate</a>
        <a href="agriculture.html">Agriculture</a>
        <a href="research.html">Research</a>
        <a href="funding.html">Funding</a>
        <a href="contact.html">Contact</a>
    </nav>
`;

// Footer Injection
document.getElementById('footer').innerHTML = `
    <p>&copy; 2025 Qemb. All Rights Reserved.</p>
`;

// Typewriter Effect
const typewriterText = "Leading the Future with AI, Quantum & Innovation";
let index = 0;
function typeWriter() {
    if (index < typewriterText.length) {
        document.querySelector(".typewriter").textContent += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Featured Initiatives Data
const projects = [
    {
        title: "QPT-1: Early Breast Cancer Detection AI",
        description: "A fully autonomous AI model designed to continually learn when integrated with mammography systems for life-saving early breast cancer detection.",
        image: "images/qpt1.jpg"
    },
    {
        title: "Quantum Climate Modeling",
        description: "Using quantum computing to simulate and predict climate change patterns for better global responses.",
        image: "images/quantum-climate.jpg"
    },
    {
        title: "AI-Driven Agriculture",
        description: "Smart farming solutions powered by AI to increase yield and sustainability.",
        image: "images/ai-farming.jpg"
    }
];

// Render Projects
const projectsContainer = document.getElementById("projects-container");
projects.forEach(p => {
    projectsContainer.innerHTML += `
        <div class="project-card glass">
            <img src="${p.image}" alt="${p.title}" style="width:100%; border-radius:8px;">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
        </div>
    `;
});
