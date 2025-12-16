// Projects data
const projects = [
    {
        id: 1,
        title: "IoT Energy Monitoring System",
        description: "Built a comprehensive IoT system integrating mobile and web apps for real-time energy tracking and control. Implemented live dashboards and remote control features using Capacitor, JavaScript, HTML/CSS, Firebase, and Arduino. The project secured 2nd Place at the UTeM Workshop 2 Competition 2023.",
        fullDescription: "This comprehensive IoT system was developed to address energy consumption challenges by providing real-time monitoring and control capabilities. The system integrates hardware sensors with Arduino/ESP32, a mobile application for on-the-go access, and a web dashboard for detailed analytics. Users can monitor energy usage patterns, receive alerts for anomalies, and remotely control connected devices. The project demonstrates full-stack development skills, from embedded systems programming to cloud-based data management.",
        image: "../source/projectpics/workshop2.jpg",
        category: "University Project",
        tags: ["JavaScipt", "HTML/CSS", "Firebase", "Arduino", "IoT", "Real-time" , "Android"],
        type: "iot",
        award: "2nd Place - UTeM Workshop 2 Competition 2023",
        features: [
            "Real-time energy consumption monitoring",
            
            "Remote device control via mobile and web",
            "Historical data analysis with charts",
            "Alert system for unusual consumption patterns",
            "User-friendly dashboard interface"
        ],
        technologies: [
            "JavaScript/HTML/CSS for web dashboard",
            "Android for mobile interface",
            "Firebase Realtime Database",
            "Arduino/ESP32 for sensors",
            "Node.js backend",
            "Chart.js for visualization"
        ]
    },
    {
        id: 2,
        title: "IoT Gas & Fire Detection System",
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
        description: "Created the mobile app component of the IoT energy monitoring system for real-time control and data tracking. Used Firebase for cloud integration, enabling seamless user access to IoT devices anytime, anywhere.",
        fullDescription: "A cross-platform mobile application developed to provide users with remote access to their IoT devices. The app features real-time data visualization, device control, historical data analysis, and push notifications. Built with modern mobile development practices, it ensures smooth performance and intuitive user experience across both Android and iOS platforms.",
        image: "../source/projectpics/mobileiot.jpg",
        category: "Mobile Development",
        tags: ["Android Development", "Firebase", "Real-time", "IoT Integration"],
        type: "mobile",
        features: [
            "Real-time device monitoring",
            "Remote control functionality",
            "Push notifications for alerts",
            "Historical data graphs",
            "User authentication and profiles"
        ],
        technologies: [
            "Android Studio",
            "Java/Kotlin",
            "Firebase Authentication",
            "Firebase Realtime Database",
            "MPAndroidChart library"
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
        description: "Developed a responsive web dashboard to visualize IoT sensor data in real time. Implemented JavaScript with Firebase Realtime Database for instant updates and device control, improving usability and monitoring efficiency.",
        fullDescription: "A comprehensive web-based dashboard for monitoring and controlling IoT devices. The dashboard provides real-time data visualization through interactive charts, device status indicators, and control panels. Built with JavaScript.js for a responsive and dynamic user interface, it integrates seamlessly with Firebase for real-time data synchronization across all connected devices.",
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
            "JavaScript.js framework",
            "Firebase Realtime Database",
            "Chart.js/Recharts",
            "Material-UI components",
            
        ]
    }
];

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

    //Create project card HTML elements
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-type', project.type);
        card.setAttribute('data-id', project.id);
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <div class="project-header">
                    <span class="project-category">${project.category}</span>
                    ${project.award ? `<span class="project-award">🏆</span>` : ''}
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
            <img src="${project.image}" alt="${project.title}" class="modal-image">
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="project-category">${project.category}</span>
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
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    //Close modal
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize portfolio manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
    console.log('✨ Portfolio page initialized successfully');
});