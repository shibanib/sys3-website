<template>
  <div class="content">
    <!-- Hero Section -->
    <section id="contact-hero" class="section hero-section">
      <div class="hero-content">
        <h1>Get in <span class="gradient-text">Touch</span></h1>
        <p>We'd love to hear from you. Let's discuss how we can collaborate.</p>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section id="contact-info" class="section">
      <div class="section-overlay"></div>
      <div class="section-content">
        <SectionTitle
          title="Contact Information"
          description="Reach out to us through any of these channels. Our team is ready to assist you."
          :isGradient="true"
        />
        
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>For general inquiries: <a href="mailto:info@system3.company">info@system3.company</a></p>
            <p>For educational programs: <a href="mailto:anshika@system3.company">anshika@system3.company</a></p>
            <p>For consulting services: <a href="mailto:ignacio@system3.company">ignacio@system3.company</a></p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Location</h3>
            <p>System3</p>
            <p>Ethnegersias 4, 2406
              Egkomi</p>
            <p>Nicosia, Cyprus</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Connect</h3>
            <div class="social-links">
              <a href="https://linkedin.com/company/system3ai" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/system3ai" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact-form" class="section">
      <div class="section-overlay gradient-overlay"></div>
      <div class="section-content">
        <SectionTitle
          title="Send Us a Message"
          description="Fill out the form below and we'll get back to you as soon as possible."
          :isGradient="true"
        />
        
        <!-- Simple Contact Form Container -->
        <div class="formio-container">
          <form id="contact-form" class="simple-contact-form override-form-styles" @submit.prevent="handleSubmit">
            <!-- Name field -->
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="formData.name" required placeholder="Your full name">
            </div>
            
            <!-- Email field -->
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="formData.email" required placeholder="Your email address">
            </div>
            
            <!-- Two column layout for phone and interest -->
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" v-model="formData.phone" placeholder="Your phone number (optional)">
              </div>
              
              <div class="form-group">
                <label for="interest">I'm interested in</label>
                <select id="interest" v-model="formData.interest" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="education">AI Education</option>
                  <option value="consulting">AI Consulting</option>
                  <option value="both">Both Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <!-- Message field -->
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="formData.message" rows="5" required placeholder="How can we help you?"></textarea>
            </div>
            
            <!-- Submit button -->
            <div class="form-submit">
              <button type="submit" class="submit-btn" :disabled="submitting">
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
          
          <!-- Success message (hidden initially) -->
          <div v-if="showSuccess" class="form-success-message">
            <div class="success-icon">
              <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Thank you for reaching out!</h3>
            <p>Your message has been received. We'll get back to you as soon as possible.</p>
            <button @click="resetForm" class="success-button">Send Another Message</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq-section" class="section">
      <div class="section-overlay"></div>
      <div class="section-content">
        <SectionTitle
          title="Frequently Asked Questions"
          :isGradient="true"
        />
        <div class="faq-container">
          <div class="faq-item" 
               v-for="(faq, index) in faqs" 
               :key="index"
               :class="{ 'active': activeFaq === index }">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { initSectionAnimations } from '@/utils/animations';
import { gsap } from 'gsap';

// Contact form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: ''
});

const submitting = ref(false);
const showSuccess = ref(false);

// Handle form submission
const handleSubmit = () => {
  submitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    // Store in localStorage for reference (simulates backend storage)
    localStorage.setItem('system3_contact_submission', JSON.stringify({
      timestamp: new Date().toISOString(),
      data: formData.value
    }));
    
    // Log form data to console
    console.log('Contact form submitted:', formData.value);
    
    // Show success message
    submitting.value = false;
    showSuccess.value = true;
  }, 1000);
};

// Reset form
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };
  showSuccess.value = false;
};

// FAQ data
const faqs = ref([
  {
    question: "How quickly can you respond to inquiries?",
    answer: "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate this in your message subject line."
  },
  {
    question: "Do you offer customized AI training programs?",
    answer: "Yes, we specialize in developing customized AI training programs tailored to your organization's specific needs and skill levels. Contact us with your requirements for a personalized consultation."
  },
  {
    question: "What information should I include in my initial inquiry?",
    answer: "For the most efficient response, please include details about your organization, the specific services you're interested in, your timeline, and any particular goals or challenges you're looking to address."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients globally and have experience delivering both remote and on-site services internationally. Our team spans multiple time zones to ensure responsive communication."
  }
]);

const activeFaq = ref(null);

// Toggle FAQ
const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

onMounted(() => {
  // Initialize animations
  initSectionAnimations();
  
  // Hero animation
  const heroContent = document.querySelector('#contact-hero .hero-content');
  if (heroContent) {
    gsap.set(heroContent, {
      y: 30,
      opacity: 0,
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      transform: "translateZ(0)"
    });
    
    gsap.to(heroContent, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      force3D: true,
      clearProps: "willChange,backfaceVisibility,transform",
      delay: 0.1
    });
  }
  
  // Fix form section background in light mode
  const fixFormBackground = () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.style.setProperty('background-color', 'rgba(248, 249, 250, 0.8)', 'important');
        formSection.style.setProperty('background', 'rgba(248, 249, 250, 0.8)', 'important');
      }
    }
  };
  
  // Apply background fix
  fixFormBackground();
  
  // Observer for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-theme') {
        fixFormBackground();
      }
    });
  });
  
  observer.observe(document.documentElement, { attributes: true });
});
</script>

<style scoped>
/* Hero Section */
#contact-hero {
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

#contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.2), transparent 80%);
  opacity: 1;
  z-index: 1;
}

[data-theme="light"] #contact-hero {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 252, 0.98)) !important;
  box-shadow: inset 0 0 100px rgba(138, 133, 255, 0.08);
}

[data-theme="light"] #contact-hero::before {
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.15), transparent 80%);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 15;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--color-text);
  position: relative;
  z-index: 5;
}

.hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  color: var(--color-text-secondary);
  text-align: center;
  position: relative;
  z-index: 5;
}

[data-theme="light"] .hero-content p {
  color: rgba(32, 33, 36, 0.9);
  font-weight: 500;
}

[data-theme="light"] .hero-content h1 {
  color: #202124;
}

/* Contact Info Section */
#contact-info {
  padding: 6rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 133, 255, 0.08);
  border-color: var(--color-primary);
}

.contact-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
}

.contact-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: var(--color-primary);
  font-weight: 600;
}

.contact-card p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.contact-card a {
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.contact-card a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(138, 133, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Contact Form Section */
#contact-form {
  padding: 6rem 0;
}

[data-theme="light"] #contact-form {
  background-color: rgba(138, 133, 255, 0.05) !important;
  box-shadow: inset 0 0 60px rgba(138, 133, 255, 0.03);
  border-top: 1px solid rgba(138, 133, 255, 0.1);
  border-bottom: 1px solid rgba(138, 133, 255, 0.1);
}

.formio-container {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(138, 133, 255, 0.2);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
  padding: 2.5rem 3rem;
  position: relative;
  z-index: 5;
}

.formio-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(138, 133, 255, 0.1), transparent 80%);
  opacity: 0.5;
  z-index: -1;
  border-radius: 16px;
  transition: opacity 0.4s ease;
}

[data-theme="light"] .formio-container {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 15px 30px rgba(138, 133, 255, 0.1);
  border: 1px solid rgba(138, 133, 255, 0.15);
}

[data-theme="light"] .formio-container::before {
  background: linear-gradient(135deg, rgba(138, 133, 255, 0.05), transparent 70%);
  opacity: 1;
}

.formio-container:hover {
  box-shadow: 0 20px 40px rgba(138, 133, 255, 0.25);
  transform: translateY(-5px);
}

.formio-container:hover::before {
  opacity: 0.8;
}

/* Form styling */
.simple-contact-form {
  font-family: 'Inter', sans-serif;
}

.form-group {
  margin-bottom: 1.8rem;
  position: relative;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: var(--color-text);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(138, 133, 255, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.03);
  transform: translateY(-1px);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-submit {
  margin-top: 2rem;
}

.submit-btn {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(138, 133, 255, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all 0.5s ease;
  z-index: -1;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(138, 133, 255, 0.5);
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-btn:disabled::before {
  left: -100%;
}

/* Light mode form styles */
[data-theme="light"] .form-group label {
  color: #333;
}

[data-theme="light"] .form-group input,
[data-theme="light"] .form-group select,
[data-theme="light"] .form-group textarea {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #333;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
}

[data-theme="light"] .form-group input:focus,
[data-theme="light"] .form-group select:focus,
[data-theme="light"] .form-group textarea:focus {
  background: white;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(138, 133, 255, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.02);
  transform: translateY(-1px);
}

[data-theme="light"] .form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(0, 0, 0, 0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
}

/* Success message styling */
.form-success-message {
  text-align: center;
  padding: 3rem 2rem;
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  background: rgba(138, 133, 255, 0.1);
  border-radius: 50%;
  margin-bottom: 2rem;
  position: relative;
  color: var(--color-primary);
}

.success-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(138, 133, 255, 0.05);
  animation: pulse 2s infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

.form-success-message h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-weight: 600;
}

.form-success-message p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.success-button {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(138, 133, 255, 0.3);
}

.success-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(138, 133, 255, 0.4);
}

/* FAQ Section */
#faq-section {
  padding: 6rem 0;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-left-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.02);
  transform: translateX(5px);
  border-left-color: var(--color-primary);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  padding-right: 2rem;
  transition: transform 0.3s ease;
}

.faq-toggle {
  position: relative;
  width: 16px;
  height: 16px;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background-color: var(--color-primary);
  transition: all 0.3s ease;
}

.faq-toggle::before {
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
}

.faq-toggle::after {
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  transform: translateX(-50%);
}

.faq-item.active {
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.faq-item.active .faq-toggle::after {
  transform: translateX(-50%) rotate(90deg);
  opacity: 0;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  display: none;
}

.faq-item.active .faq-answer {
  display: block;
}

.faq-answer p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

/* Light mode adjustments */
[data-theme="light"] .contact-card {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

[data-theme="light"] .contact-card:hover {
  box-shadow: 0 15px 30px rgba(138, 133, 255, 0.15);
}

[data-theme="light"] .contact-card p,
[data-theme="light"] .faq-answer p {
  color: rgba(32, 33, 36, 0.9);
}

/* Responsive styles */
@media (max-width: 1200px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  #contact-hero {
    height: 50vh;
  }
  
  .hero-content h1 {
    font-size: 2.8rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .formio-container {
    padding: 2rem 1.5rem;
  }
  
  .submit-btn {
    width: 100%;
  }
}
</style>