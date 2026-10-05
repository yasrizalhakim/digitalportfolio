// Projects data
const projects = [
    {
        id: 7,
        title: "Azure Infrastructure as Code Migration",
        year: "2026",
        description: "Migrated Azure infrastructure for two production systems into version-controlled Terraform during my DevOps internship at AEM Enersol, bringing 155 resources across seven logical layers under Infrastructure as Code.",
        fullDescription: "During my Software Engineering (DevOps) internship at AEM Enersol, I brought the Azure infrastructure of two existing production systems under version-controlled Terraform. Live production resources were reverse-imported with aztfexport on a strictly read-only basis, then organised into logical layers and deployed through Azure DevOps YAML pipelines that authenticate using OIDC workload identity federation instead of stored credentials. The work was validated with a full destroy-and-rebuild recovery exercise in an isolated test environment.",
        visual: "devops",
        category: "Industry Internship",
        tags: ["Terraform", "Microsoft Azure", "Azure DevOps", "CI/CD", "OIDC", "Infrastructure as Code"],
        type: "devops",
        features: [
            "155 resources across seven logical layers brought under Terraform for the primary system",
            "Filtered a 730-entry aztfexport export down to the 11 resources actually deployed for the second system",
            "Azure DevOps YAML pipelines using OIDC workload identity federation, with no stored service principal secrets",
            "Azure Blob Storage remote state with lease-based locking",
            "Destroy-and-rebuild recovery exercise reproducing 136 resources, reconciling three drifted resources",
            "Caught and remediated two plaintext credential exposures from export tooling before they reached version control"
        ],
        technologies: [
            "Terraform",
            "Microsoft Azure",
            "Azure DevOps Pipelines (YAML)",
            "aztfexport",
            "Azure Blob Storage (remote state)",
            "OIDC workload identity federation",
            "Git"
        ]
    },
    {
        id: 8,
        title: "Nanaslah — Entrepreneur Information App",
        year: "2025",
        description: "Built a cross-platform mobile application for entrepreneurs in Malaysia's pineapple industry, in collaboration with Lembaga Perindustrian Nanas Malaysia (LPNM) under UTeM SULAM. Awarded 2nd Place.",
        fullDescription: "Nanaslah is a cross-platform mobile application developed under UTeM's SULAM (Service Learning Malaysia) programme in collaboration with Lembaga Perindustrian Nanas Malaysia (LPNM). It gives entrepreneurs in Malaysia's pineapple industry a single place to find each other, receive announcements, and get in touch, with an admin dashboard for LPNM to manage content.",
        visual: "mobile",
        category: "University Project",
        tags: ["JavaScript", "Capacitor", "Firebase Auth", "Cloud Firestore", "Mobile"],
        type: "mobile",
        award: "2nd Place - UTeM SULAM 2025",
        features: [
            "Entrepreneur directory",
            "Category-based announcements",
            "Admin dashboard for content management",
            "WhatsApp integration for direct contact"
        ],
        technologies: [
            "JavaScript",
            "Capacitor (cross-platform)",
            "Firebase Authentication",
            "Cloud Firestore"
        ]
    },
    {
        id: 9,
        title: "SISEOA — Smart IoT Energy Optimisation",
        year: "2025",
        description: "Developed a cloud-connected energy management system integrating web, mobile, and Raspberry Pi components for real-time monitoring and automated device control.",
        fullDescription: "SISEOA (Smart IoT System for Energy Optimisation and Automation) is a cloud-connected energy management system. A Raspberry Pi connects to the devices being monitored, while web and mobile apps give users real-time visibility and control. It includes energy analytics, cost calculation against TNB tariff data, and scheduled automation, and is deployed cross-platform from a single React.js codebase using Capacitor.",
        visual: "iot",
        category: "University Project",
        tags: ["React.js", "Capacitor", "Firebase", "Raspberry Pi", "IoT"],
        type: "iot",
        features: [
            "Real-time energy monitoring",
            "Automated and scheduled device control",
            "Energy analytics",
            "Cost calculation against TNB tariff data",
            "Web and mobile apps from one codebase"
        ],
        technologies: [
            "React.js",
            "Capacitor",
            "Firebase",
            "Raspberry Pi"
        ]
    },
    {
        id: 1,
        title: "IoT Energy Monitoring System",
        year: "2025",
        description: "Built a comprehensive IoT system integrating mobile and web apps for real-time energy tracking and control. Implemented live dashboards and remote control features using Capacitor, JavaScript, HTML/CSS, Firebase, and Arduino. The project secured 2nd Place at the UTeM Workshop 2 Competition 2025.",
        fullDescription: "This comprehensive IoT system was developed to address energy consumption challenges by providing real-time monitoring and control capabilities. The system integrates hardware sensors with Arduino/ESP32, a mobile application for on-the-go access, and a web dashboard for detailed analytics. Users can monitor energy usage patterns, receive alerts for anomalies, and remotely control connected devices. The project demonstrates full-stack development skills, from embedded systems programming to cloud-based data management.",
        image: "../source/projectpics/workshop2.jpg",
        category: "University Project",
        tags: ["JavaScript", "HTML/CSS", "Capacitor", "Firebase", "Arduino", "IoT", "Real-time"],
        type: "iot",
        award: "2nd Place - UTeM Workshop 2 Competition 2025",
        features: [
            "Real-time energy consumption monitoring",
            "Remote device control via mobile and web",
            "Historical data analysis with charts",
            "Alert system for unusual consumption patterns",
            "User-friendly dashboard interface"
        ],
        technologies: [
            "JavaScript/HTML/CSS for web dashboard",
            "Capacitor for the Android mobile app",
            "Firebase Realtime Database",
            "Arduino/ESP32 for sensors",
            "Chart.js for visualization"
        ]
    },
    {
        id: 2,
        title: "IoT Gas & Fire Detection System",
        year: "2022",
        description: "Developed an IoT-based safety system to detect gas, fire, and temperature hazards. Designed and programmed circuits with Arduino IDE, Proteus, and Multisim for real-time monitoring. The project earned a Bronze Medal at the INOTEK Competition 2022.",
        fullDescription: "A critical safety system designed to prevent disasters by detecting gas leaks, fire hazards, and temperature anomalies in real-time. The system uses multiple sensors connected to Arduino microcontrollers, with alert mechanisms including buzzers, LED indicators, and mobile notifications. The circuit design was simulated and tested using Proteus and Multisim before physical implementation, ensuring reliability and accuracy.",
        image: "../source/projectpics/iotgasnfire.jpg",
        category: "University Project",
        tags: ["Arduino IDE", "Proteus", "Multisim", "IoT", "Safety Systems"],
        type: "iot",
        award: "Bronze Medal - INOTEK Competition 2022",
        features: [
            "Multi-sensor gas detection (LPG, CO, smoke)",
            "Temperature and fire detection",
            "Instant alert notifications",
            "Battery backup system",
            "Low power consumption design"
        ],
        technologies: [
            "Arduino Uno microcontroller",
            "MQ-2 Gas Sensor",
            "DHT11 Temperature Sensor",
            "Flame Sensor Module",
            "Proteus for circuit simulation"
        ]
    },
    {
        id: 3,
        title: "NRC Robotics Competition Project",
        year: "2018",
        description: "Represented SMK Seri Hartamas in the Interschools Robotics Competition by designing and programming an advanced robotics system. Applied C programming and mechanical design skills to create a competitive solution.",
        fullDescription: "This robotics project was developed for the National Robotics Competition (NRC), representing my school in an inter-school competition. The robot was designed to complete specific tasks autonomously, requiring precise motor control, sensor integration, and strategic programming. The project involved mechanical design, circuit assembly, and extensive programming in C to achieve optimal performance.",
        image: "../source/projectpics/NRC.jpg",
        category: "Competition Project",
        tags: ["Arduino", "C Programming", "Robotics", "Mechanical Design", "Competition"],
        type: "robotics",
        award: "NRC Inter-school Competition Representative 2018",
        features: [
            "Autonomous navigation system",
            "Line following capability",
            "Obstacle detection and avoidance",
            "Task-specific mechanical design",
            "Competition-ready performance"
        ],
        technologies: [
            "Arduino platform",
            "C programming language",
            "DC motors with encoders",
            "Ultrasonic sensors",
            "IR line sensors"
        ]
    },
    {
        id: 4,
        title: "Mobile IoT Application",
        year: "2025",
        description: "Created the mobile app component of the IoT energy monitoring system for real-time control and data tracking. Used Firebase for cloud integration, enabling seamless user access to IoT devices anytime, anywhere.",
        fullDescription: "A mobile application developed to give users remote access to their IoT devices. The app features real-time data visualization, device control, historical data analysis, and push notifications. It was built with web technologies and packaged as an Android app using Capacitor, sharing its Firebase backend with the web dashboard.",
        image: "../source/projectpics/mobileiot.jpg",
        category: "Mobile Development",
        tags: ["Capacitor", "Android", "Firebase", "Real-time", "IoT Integration"],
        type: "mobile",
        features: [
            "Real-time device monitoring",
            "Remote control functionality",
            "Push notifications for alerts",
            "Historical data graphs",
            "User authentication and profiles"
        ],
        technologies: [
            "Capacitor (JavaScript, HTML/CSS)",
            "Android Studio",
            "Firebase Authentication",
            "Firebase Realtime Database"
        ]
    },
    {
        id: 5,
        title: "Circuit Design & Simulation",
        description: "Designed and simulated IoT and safety-related electronic circuits using Proteus and Multisim. Ensured system reliability through iterative testing and validation, supporting larger IoT and safety projects.",
        fullDescription: "A collection of circuit designs developed for various IoT and embedded systems projects. Using professional simulation software like Proteus and Multisim, circuits were designed, tested, and optimized before physical implementation. This approach saved time and resources while ensuring reliability and proper functionality of the final products.",
        image: "../source/projectpics/circuitdesign.jpg",
        category: "Hardware Design",
        tags: ["Proteus", "Multisim", "Circuit Design", "Arduino", "Electronics"],
        type: "hardware",
        features: [
            "Complete circuit schematic design",
            "PCB layout creation",
            "Simulation and testing",
            "Component selection and optimization",
            "Documentation and bill of materials"
        ],
        technologies: [
            "Proteus Design Suite",
            "Multisim simulation",
            "Arduino platform",
            "Various sensors and actuators",
            "Power supply design"
        ]
    },
    {
        id: 6,
        title: "Real-time Data Dashboard",
        year: "2025",
        description: "Developed a responsive web dashboard to visualize IoT sensor data in real time. Implemented JavaScript with Firebase Realtime Database for instant updates and device control, improving usability and monitoring efficiency.",
        fullDescription: "A comprehensive web-based dashboard for monitoring and controlling IoT devices. The dashboard provides real-time data visualization through interactive charts, device status indicators, and control panels. Built with JavaScript, HTML, and CSS for a responsive and dynamic user interface, it integrates seamlessly with Firebase for real-time data synchronization across all connected devices.",
        image: "../source/projectpics/web.png",
        category: "Web Development",
        tags: ["JavaScript", "Firebase", "Real-time Database", "Data Visualization"],
        type: "web",
        features: [
            "Real-time data updates",
            "Interactive charts and graphs",
            "Device control interface",
            "Responsive design",
            "User dashboard customization"
        ],
        technologies: [
            "JavaScript, HTML/CSS",
            "Firebase Realtime Database",
            "Chart.js for data visualization"
        ]
    }
];

// Icons for projects without a photo
const projectIcons = {
    devops: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    mobile: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    iot: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
};

class PortfolioManager {
    constructor() {
        this.projectsGrid = document.getElementById('projectsGrid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCount = document.getElementById('projectCount');
        this.modal = document.getElementById('projectModal');
        this.modalBody = document.getElementById('modalBody');
        this.modalClose = document.getElementById('modalClose');
        this.modalOverlay = document.getElementById('modalOverlay');
        
        this.currentFilter = 'all';
        
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupFilters();
        this.setupModal();
        this.updateProjectCount();
    }

   
    renderProjects() {
        this.projectsGrid.innerHTML = '';
        
        const filteredProjects = this.currentFilter === 'all' 
            ? projects 
            : projects.filter(p => p.type === this.currentFilter);

        if (filteredProjects.length === 0) {
            this.projectsGrid.innerHTML = this.getEmptyState();
            return;
        }

        filteredProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project);
            projectCard.setAttribute('data-aos', 'fade-up');
            projectCard.setAttribute('data-aos-delay', (index * 100).toString());
            this.projectsGrid.appendChild(projectCard);
        });
    }

    //Project photo, or a styled placeholder when there is no photo
    getProjectVisual(project, className) {
        if (project.image) {
            return `<img src="${project.image}" alt="${project.title}" class="${className}">`;
        }
        return `<div class="${className} project-visual project-visual-${project.visual}" role="img" aria-label="${project.title}">
                <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${projectIcons[project.visual]}"/>
                </svg>
            </div>`;
    }

    //Create project card HTML elements
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-type', project.type);
        card.setAttribute('data-id', project.id);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details: ${project.title}`);
        
        card.innerHTML = `
            ${this.getProjectVisual(project, 'project-image')}
            <div class="project-content">
                <div class="project-header">
                    <span class="project-category">${project.category}${project.year ? ` · ${project.year}` : ''}</span>
                    ${project.award ? `<span class="project-award" title="${project.award}">🏆</span>` : ''}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-footer">
                    <span class="view-details">
                        View Details
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => this.openModal(project));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.openModal(project);
            }
        });
        
        return card;
    }

    //Get empty state HTML
    getEmptyState() {
        return `
            <div class="empty-state">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                </svg>
                <h3>No Projects Found</h3>
                <p>Try selecting a different filter to see more projects.</p>
            </div>
        `;
    }

    //Setup filter button functionality
    setupFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update current filter
                this.currentFilter = button.getAttribute('data-filter');
                
                // Re-render projects
                this.renderProjects();
                this.updateProjectCount();
            });
        });
    }

    //Update project count display
    updateProjectCount() {
        const count = this.currentFilter === 'all' 
            ? projects.length 
            : projects.filter(p => p.type === this.currentFilter).length;
        
        this.projectCount.textContent = `Showing ${count} project${count !== 1 ? 's' : ''}`;
    }

    //Setup modal functionality
    setupModal() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    //Open modal with project details
    openModal(project) {
        this.modalBody.innerHTML = `
            ${this.getProjectVisual(project, 'modal-image')}
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="project-category">${project.category}${project.year ? ` · ${project.year}` : ''}</span>
                    ${project.award ? `<span class="project-award">${project.award}</span>` : ''}
                </div>
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-description">${project.fullDescription}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            
            ${project.features ? `
                <div class="modal-section">
                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${project.technologies ? `
                <div class="modal-section">
                    <h3>Technologies Used</h3>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;
        
        this.lastFocused = document.activeElement;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.modalClose.focus();
    }

    //Close modal
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        if (this.lastFocused) this.lastFocused.focus();
    }
}

// Initialize portfolio manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
    console.log('✨ Portfolio page initialized successfully');
});