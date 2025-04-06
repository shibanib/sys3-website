<template>
  <footer>
    <div class="footer-content">
      <div class="footer-branding">
        <div class="footer-logo">
          <span class="logo-mark"></span>
          System<span class="gradient-text">3</span>
        </div>
        <p>
          Empowering organizations with advanced AI education and strategic consulting services.
        </p>
        <div class="footer-social">
          <RouterLink to="/coming-soon" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </RouterLink>
          <RouterLink to="/coming-soon" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </RouterLink>
          <RouterLink to="/coming-soon" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </RouterLink>
        </div>
      </div>
      
      <div class="footer-links">
        <div class="footer-column">
          <h4>Services</h4>
          <ul>
            <li><RouterLink to="/education">Education</RouterLink></li>
            <li><RouterLink to="/consultancy">Consultancy</RouterLink></li>
            <li><RouterLink to="/courses">Courses</RouterLink></li>
            <li><RouterLink to="/coming-soon">Workshops</RouterLink></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li><RouterLink to="/coming-soon">Team</RouterLink></li>
            <li><RouterLink to="/coming-soon">Careers</RouterLink></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><RouterLink to="/coming-soon">Blog</RouterLink></li>
            <li><RouterLink to="/coming-soon">Community</RouterLink></li>
            <li><RouterLink to="/coming-soon">Documentation</RouterLink></li>
            <li><RouterLink to="/coming-soon">Privacy Policy</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© {{ currentYear }} System3. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const currentYear = computed(() => new Date().getFullYear());
</script>