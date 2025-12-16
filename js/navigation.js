class Navigation {
  constructor() {
    this.nav = document.getElementById('mainNav');
    this.navToggle = document.getElementById('navToggle');
    this.navLinks = document.getElementById('navLinks');
    this.navLinkItems = document.querySelectorAll('.nav-link');
    
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupScrollEffect();
    this.setActiveLink();
    this.setupSmoothScroll();
  }

  //Mobile menu toggle functionality
  setupMobileMenu() {
    if (!this.navToggle || !this.navLinks) return;

    this.navToggle.addEventListener('click', () => {
      this.toggleMenu();
    });

    // Close menu when clicking on a link
    this.navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          this.closeMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        if (!this.nav.contains(e.target)) {
          this.closeMenu();
        }
      }
    });
  }

  toggleMenu() {
    const isActive = this.navLinks.classList.toggle('active');
    this.navToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open on mobile
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.navLinks.classList.remove('active');
    this.navToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  //Add scroll effect to navigation
  setupScrollEffect() {
    if (!this.nav) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add scrolled class for styling
      if (currentScroll > 50) {
        this.nav.classList.add('scrolled');
      } else {
        this.nav.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  //Set active navigation link based on current page
  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    this.navLinkItems.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      
      if (linkPage === currentPage || 
          (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  //Smooth scroll for anchor links
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') return;
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const navHeight = document.getElementById('mainNav')?.offsetHeight || 72;
          const targetPosition = targetElement.offsetTop - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});

// Utility function to update active nav on page navigation
function updateActiveNav() {
  const nav = new Navigation();
  nav.setActiveLink();
}

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Navigation;
}