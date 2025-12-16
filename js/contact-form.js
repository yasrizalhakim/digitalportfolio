/**
 * Contact Form Module
 * Handles form validation and submission
 */

class ContactForm {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.successMessage = document.getElementById('successMessage');
    
    // Form fields
    this.fields = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      phone: document.getElementById('phone'),
      subject: document.getElementById('subject'),
      message: document.getElementById('message')
    };
    
    // Error message elements
    this.errors = {
      name: document.getElementById('nameError'),
      email: document.getElementById('emailError'),
      phone: document.getElementById('phoneError'),
      subject: document.getElementById('subjectError'),
      message: document.getElementById('messageError')
    };
    
    this.init();
  }

  init() {
    if (!this.form) return;
    
    // Add form submit event listener
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Add real-time validation
    Object.keys(this.fields).forEach(key => {
      if (this.fields[key]) {
        this.fields[key].addEventListener('blur', () => this.validateField(key));
        this.fields[key].addEventListener('input', () => this.clearError(key));
      }
    });
  }

  /**
   * Handle form submission
   */
  async handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    const isValid = this.validateForm();
    
    if (!isValid) {
      return;
    }
    
    // Get form data
    const formData = this.getFormData();
    
    // Simulate form submission (replace with actual API call)
    await this.submitForm(formData);
  }

  /**
   * Validate entire form
   */
  validateForm() {
    let isValid = true;
    
    Object.keys(this.fields).forEach(key => {
      if (!this.validateField(key)) {
        isValid = false;
      }
    });
    
    return isValid;
  }

  /**
   * Validate individual field
   */
  validateField(fieldName) {
    const field = this.fields[fieldName];
    const value = field.value.trim();
    
    // Clear previous error
    this.clearError(fieldName);
    
    // Check if required field is empty
    if (field.required && !value) {
      this.showError(fieldName, 'This field is required');
      return false;
    }
    
    // Field-specific validation
    switch (fieldName) {
      case 'name':
        return this.validateName(value);
      
      case 'email':
        return this.validateEmail(value);
      
      case 'phone':
        return this.validatePhone(value);
      
      case 'subject':
        return this.validateSubject(value);
      
      case 'message':
        return this.validateMessage(value);
      
      default:
        return true;
    }
  }

  /**
   * Validate name
   */
  validateName(value) {
    if (value.length < 2) {
      this.showError('name', 'Name must be at least 2 characters long');
      return false;
    }
    
    if (value.length > 100) {
      this.showError('name', 'Name is too long');
      return false;
    }
    
    return true;
  }

  /**
   * Validate email
   */
  validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
      this.showError('email', 'Please enter a valid email address');
      return false;
    }
    
    return true;
  }

  /**
   * Validate phone (optional field)
   */
  validatePhone(value) {
    if (!value) return true; // Phone is optional
    
    // Remove common phone number characters
    const cleaned = value.replace(/[\s\-\(\)]/g, '');
    
    // Check if it contains only numbers and +
    const phoneRegex = /^[\+]?[0-9]{8,15}$/;
    
    if (!phoneRegex.test(cleaned)) {
      this.showError('phone', 'Please enter a valid phone number');
      return false;
    }
    
    return true;
  }

  /**
   * Validate subject
   */
  validateSubject(value) {
    if (!value) {
      this.showError('subject', 'Please select a subject');
      return false;
    }
    
    return true;
  }

  /**
   * Validate message
   */
  validateMessage(value) {
    if (value.length < 10) {
      this.showError('message', 'Message must be at least 10 characters long');
      return false;
    }
    
    if (value.length > 1000) {
      this.showError('message', 'Message is too long (max 1000 characters)');
      return false;
    }
    
    return true;
  }

  /**
   * Show error message
   */
  showError(fieldName, message) {
    const field = this.fields[fieldName];
    const error = this.errors[fieldName];
    
    if (field && error) {
      field.parentElement.classList.add('error');
      error.textContent = message;
    }
  }

  /**
   * Clear error message
   */
  clearError(fieldName) {
    const field = this.fields[fieldName];
    const error = this.errors[fieldName];
    
    if (field && error) {
      field.parentElement.classList.remove('error');
      error.textContent = '';
    }
  }

  /**
   * Get form data
   */
  getFormData() {
    const data = {};
    
    Object.keys(this.fields).forEach(key => {
      data[key] = this.fields[key].value.trim();
    });
    
    return data;
  }

  /**
   * Submit form (simulated)
   */
  async submitForm(formData) {
    try {
      // Show loading state
      const submitButton = this.form.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="32" stroke-dashoffset="0">
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
          </circle>
        </svg>
        Sending...
      `;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log form data (in production, send to backend)
      console.log('Form submitted with data:', formData);
      
      // Show success message
      this.showSuccess();
      
      // Reset form
      this.form.reset();
      
      // Restore button state
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
      
      // Restore button state
      const submitButton = this.form.querySelector('button[type="submit"]');
      submitButton.disabled = false;
    }
  }

  /**
   * Show success message
   */
  showSuccess() {
    // Hide form
    this.form.style.display = 'none';
    
    // Show success message
    this.successMessage.classList.remove('hidden');
    
    // Scroll to success message
    this.successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Reset after 5 seconds
    setTimeout(() => {
      this.form.style.display = 'flex';
      this.successMessage.classList.add('hidden');
    }, 5000);
  }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
  console.log('✨ Contact form initialized successfully');
});

// Add spinner animation styles
const style = document.createElement('style');
style.textContent = `
  .spinner {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
document.head.appendChild(style);