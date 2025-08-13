// Projects data
const projects = [
    {
        title: "IoT Gas, Fire & Temperature Detection System",
        description: "Award-winning IoT safety monitoring system with real-time alerts and data visualization",
        image: "https://via.placeholder.com/400x300/2563eb/ffffff?text=IoT+Detection+System",
        category: "IoT Project",
        tags: ["Arduino", "ESP32", "Firebase", "MQTT", "Sensors"],
        type: "iot",
        award: "INOTEK Competition 2022 - Bronze Award"
    },
    {
        title: "IoT Energy Monitoring & Control System",
        description: "Smart energy management solution for monitoring and controlling power consumption",
        image: "https://via.placeholder.com/400x300/10b981/ffffff?text=Energy+Monitoring",
        category: "IoT Project",
        tags: ["ESP32", "React.js", "Firebase", "REST API", "Energy Monitoring"],
        type: "iot",
        award: "UTeM Workshop 2 Competition 2023 - 2nd Place"
    },
    {
        title: "Robotics Competition Projects",
        description: "Various robotics projects developed during NRC competition participation (2017-2019)",
        image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Robotics+Projects",
        category: "Robotics",
        tags: ["Arduino", "C", "Sensors", "Motor Control", "Competition"],
        type: "robotics",
        award: "NRC Competition Participant"
    },
    {
        title: "Android IoT Controller App",
        description: "Mobile application for controlling and monitoring IoT devices remotely",
        image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Android+App",
        category: "Mobile Development",
        tags: ["Android", "Java", "Firebase", "MQTT", "Real-time"],
        type: "mobile"
    },
    {
        title: "Firebase Real-time Dashboard",
        description: "Web dashboard for visualizing IoT sensor data with real-time updates",
        image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Dashboard",
        category: "Web Development",
        tags: ["React.js", "Firebase", "JavaScript", "Real-time DB", "Charts"],
        type: "web"
    },
    {
        title: "Circuit Design & Prototyping",
        description: "Custom circuit designs and prototypes for various IoT applications",
        image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Circuit+Design",
        category: "Hardware",
        tags: ["Circuit Design", "Soldering", "Arduino", "ESP32", "Prototyping"],
        type: "hardware"
    }
];

// Create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card" data-type="${project.type}">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <span class="project-category">${project.category}</span>
                ${project.award ? `<span class="project-award">${project.award}</span>` : ''}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render all projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(createProjectCard).join('');
}

// Filter projects
function filterProjects(type) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle filter button clicks
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter projects
            const filterType = button.dataset.filter;
            filterProjects(filterType);
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll effect to navigation
function setupNavigation() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
}

// Add fade-in animation for sections
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupFilters();
    setupSmoothScrolling();
    setupNavigation();
    setupAnimations();
    
    console.log('Portfolio website loaded successfully!');
});