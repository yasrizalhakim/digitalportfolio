// Projects data
const projects = [
    {
        title: "IoT Energy Monitoring System",
        description: "Built a comprehensive IoT system integrating mobile and web apps for real-time energy tracking and control. Implemented live dashboards and remote control features using React.js, Firebase, and Arduino. The project secured 2nd Place at the UTeM Workshop 2 Competition 2023.",
        image: "source/projectpics/workshop2.jpg",
        category: "University Project",
        tags: ["React.js", "Firebase", "Arduino", "IoT", "Real-time"],
        type: "iot",
        award: "2nd Place - UTeM Workshop 2 Competition 2023"
    },
    {
        title: "IoT Gas & Fire Detection System",
        description: "Developed an IoT-based safety system to detect gas, fire, and temperature hazards. Designed and programmed circuits with Arduino IDE, Proteus, and Multisim for real-time monitoring. The project earned a Bronze Medal at the INOTEK Competition 2022.",
        image: "source/projectpics/iotgasnfire.jpg",
        category: "University Project",
        tags: ["Arduino IDE", "Proteus", "Multisim", "IoT", "Safety Systems"],
        type: "iot",
        award: "Bronze Medal - INOTEK Competition 2022"
    },
    {
        title: "NRC Robotics Competition Project",
        description: "Represented SMK Seri Hartamas in the Interschools Robotics Competition by designing and programming an advanced robotics system. Applied C programming and mechanical design skills to create a competitive solution",
        image: "source/projectpics/NRC.jpg",
        category: "Competition Project",
        tags: ["Arduino", "C Programming", "Robotics", "Mechanical Design", "Competition"],
        type: "robotics",
        award: "NRC Inter-school Competition Representative 2018"
    },
    {
        title: "Mobile IoT Application",
        description: "Created the mobile app component of the IoT energy monitoring system for real-time control and data tracking. Used Firebase for cloud integration, enabling seamless user access to IoT devices anytime, anywhere.",
        image: "source/projectpics/mobileiot.jpg",
        category: "Mobile Development",
        tags: ["Android Development", "Firebase", "Real-time", "IoT Integration"],
        type: "mobile"
    },
    {
        title: "Circuit Design & Simulation",
        description: "Designed and simulated IoT and safety-related electronic circuits using Proteus and Multisim. Ensured system reliability through iterative testing and validation, supporting larger IoT and safety projects.",
        image: "source/projectpics/circuitdesign.jpg",
        category: "Hardware Design",
        tags: ["Proteus", "Multisim", "Circuit Design", "Arduino", "Electronics"],
        type: "hardware"
    },
    {
        title: "Real-time Data Dashboard",
        description: "Developed a responsive web dashboard to visualize IoT sensor data in real time. Implemented React.js with Firebase Realtime Database for instant updates and device control, improving usability and monitoring efficiency.",
        image: "source/projectpics/web.png",
        category: "Web Development",
        tags: ["React.js", "Firebase", "Real-time Database", "Data Visualization"],
        type: "web"
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

