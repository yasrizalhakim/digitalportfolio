class AnimationController {
  constructor() {
    this.observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupCounterAnimations();
    this.setupParallaxEffects();
  }

  //Setup Intersection Observer for scroll animations
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          
          // Add stagger effect for elements with data-aos-delay
          const delay = entry.target.getAttribute('data-aos-delay');
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`;
          }
        }
      });
    }, this.observerOptions);

    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
  }

  //Animate numbers counting up
  setupCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;

    const animateCounter = (counter) => {
      const target = parseFloat(counter.textContent);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        
        if (current < target) {
          // Handle decimal numbers
          if (target % 1 !== 0) {
            counter.textContent = current.toFixed(2);
          } else {
            counter.textContent = Math.floor(current);
          }
          requestAnimationFrame(updateCounter);
        } else {
          // Ensure final value is exact
          counter.textContent = target % 1 !== 0 ? target.toFixed(2) : target;
        }
      };

      updateCounter();
    };

    // Trigger counter animation when visible
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  //Add parallax effect to hero section

  setupParallaxEffects() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = hero.querySelectorAll('.hero-pattern, .hero-image-container');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

//Card Hover Effects
class CardEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupCardHover();
  }

  setupCardHover() {
    const cards = document.querySelectorAll('.card, .overview-card, .featured-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        this.createRipple(e, card);
      });
    });
  }

  createRipple(e, card) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(37, 99, 235, 0.1)';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.pointerEvents = 'none';
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - 10;
    const y = e.clientY - rect.top - 10;
    
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    card.appendChild(ripple);
    
    // Animate ripple
    ripple.animate([
      { transform: 'scale(0)', opacity: 1 },
      { transform: 'scale(20)', opacity: 0 }
    ], {
      duration: 600,
      easing: 'ease-out'
    }).onfinish = () => ripple.remove();
  }
}

//Loading Animation
class PageLoader {
  constructor() {
    this.init();
  }

  init() {
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      
      // Trigger initial animations
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
          hero.style.transition = 'opacity 0.8s ease';
          hero.style.opacity = '1';
        }, 100);
      }
    });
  }
}

//Scroll Progress Indicator
class ScrollProgress {
  constructor() {
    this.createProgressBar();
    this.init();
  }

  createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '72px';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(90deg, #2563eb, #3b82f6)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    
    document.body.appendChild(progressBar);
    this.progressBar = progressBar;
  }

  init() {
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;
      this.progressBar.style.width = scrolled + '%';
    });
  }
}

//Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animation controllers
  new AnimationController();
  new CardEffects();
  new PageLoader();
  new ScrollProgress();
  
  console.log('✨ Animations initialized successfully');
});

// Add CSS for loaded state
const style = document.createElement('style');
style.textContent = `
  body:not(.loaded) .hero {
    opacity: 0;
  }
  
  .card, .overview-card, .featured-card {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);