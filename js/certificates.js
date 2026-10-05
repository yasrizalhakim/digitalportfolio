// Certificates data
//
// To add a certificate file:
//   1. Put the scan or PDF in source/certificates/ (JPG, PNG or PDF)
//   2. Set `file` on its entry below, e.g. file: "../source/certificates/sulam-2025.jpg"
// Entries without a file are still listed, marked "Available on request".
const certificates = [
    {
        title: "2nd Place — UTeM SULAM 2025",
        issuer: "UTeM, with Lembaga Perindustrian Nanas Malaysia (LPNM)",
        date: "2025",
        category: "Award",
        description: "Awarded for Nanaslah, a cross-platform information app for entrepreneurs in Malaysia's pineapple industry.",
        file: null
    },
    {
        title: "2nd Place — UTeM Workshop 2 Competition",
        issuer: "Universiti Teknikal Malaysia Melaka (UTeM)",
        date: "2025",
        category: "Award",
        description: "Awarded for the IoT Energy Monitoring System, with mobile and web dashboards for real-time energy tracking.",
        file: null
    },
    {
        title: "Bronze Medal — INOTEK Competition",
        issuer: "INOTEK Competition",
        date: "2022",
        category: "Award",
        description: "Awarded for the IoT Gas & Fire Detection System for real-time hazard monitoring.",
        file: null
    },
    {
        title: "MUET Band 4",
        issuer: "Malaysian Examinations Council",
        date: "",
        category: "Language",
        description: "Malaysian University English Test, demonstrating proficiency in English for academic and professional communication.",
        file: null
    },
    {
        title: "National Robotics Competition (NRC)",
        issuer: "Inter-school Robotics Competition",
        date: "2018",
        category: "Participation",
        description: "Represented SMK Seri Hartamas with an autonomous robot designed and programmed in C.",
        file: null
    }
];

const certificateIcons = {
    award: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    document: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
};

class CertificatesManager {
    constructor() {
        this.grid = document.getElementById('certificatesGrid');
        this.modal = document.getElementById('certModal');
        this.modalBody = document.getElementById('certModalBody');
        this.modalClose = document.getElementById('certModalClose');
        this.modalOverlay = document.getElementById('certModalOverlay');

        this.init();
    }

    init() {
        certificates.forEach((cert, index) => {
            const card = this.createCard(cert);
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', ((index % 3) * 100).toString());
            this.grid.appendChild(card);
        });
        this.setupModal();
    }

    isPdf(cert) {
        return cert.file && cert.file.toLowerCase().endsWith('.pdf');
    }

    //Certificate image, or a styled placeholder for PDFs and missing files
    getThumbnail(cert) {
        if (cert.file && !this.isPdf(cert)) {
            return `<img src="${cert.file}" alt="${cert.title} certificate" class="cert-thumb" loading="lazy">`;
        }
        const icon = this.isPdf(cert) ? certificateIcons.document : certificateIcons.award;
        return `<div class="cert-thumb project-visual project-visual-award" role="img" aria-label="${cert.title}">
                <svg width="56" height="56" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${icon}"/>
                </svg>
            </div>`;
    }

    getAction(cert) {
        if (!cert.file) {
            return `<span class="cert-unavailable">Available on request</span>`;
        }
        if (this.isPdf(cert)) {
            return `<a href="${cert.file}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">View certificate (PDF)</a>`;
        }
        return `<button type="button" class="btn btn-outline btn-sm cert-view">View certificate</button>`;
    }

    createCard(cert) {
        const card = document.createElement('article');
        card.className = 'cert-card';

        card.innerHTML = `
            ${this.getThumbnail(cert)}
            <div class="cert-content">
                <div class="cert-meta">
                    <span class="cert-category">${cert.category}</span>
                    ${cert.date ? `<span class="cert-date">${cert.date}</span>` : ''}
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-issuer-name">${cert.issuer}</p>
                <p class="cert-text">${cert.description}</p>
                <div class="cert-actions">${this.getAction(cert)}</div>
            </div>
        `;

        const viewButton = card.querySelector('.cert-view');
        if (viewButton) {
            viewButton.addEventListener('click', () => this.openModal(cert));
        }

        return card;
    }

    setupModal() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal(cert) {
        this.modalBody.innerHTML = `
            <img src="${cert.file}" alt="${cert.title} certificate" class="cert-full-image">
            <div class="cert-modal-caption">
                <h2>${cert.title}</h2>
                <p>${cert.issuer}${cert.date ? ` · ${cert.date}` : ''}</p>
                <a href="${cert.file}" target="_blank" rel="noopener">Open full size</a>
            </div>
        `;

        this.lastFocused = document.activeElement;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.modalClose.focus();
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        if (this.lastFocused) this.lastFocused.focus();
    }
}

// Initialize certificates page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CertificatesManager();
});
