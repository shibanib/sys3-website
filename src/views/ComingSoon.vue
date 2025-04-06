<template>
  <div class="content">
    <section class="section coming-soon-section">
      <div class="section-content">
        <div class="coming-soon-illustration">
          <svg width="180" height="180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="url(#paint0_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12L20 7.5" stroke="url(#paint1_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12V21" stroke="url(#paint2_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12L4 7.5" stroke="url(#paint3_linear)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8a85ff"/>
                <stop offset="1" stop-color="#c389c5"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="12" y1="9.75" x2="20" y2="9.75" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8a85ff"/>
                <stop offset="1" stop-color="#c389c5"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="12" y1="16.5" x2="13" y2="16.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8a85ff"/>
                <stop offset="1" stop-color="#c389c5"/>
              </linearGradient>
              <linearGradient id="paint3_linear" x1="4" y1="9.75" x2="12" y2="9.75" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8a85ff"/>
                <stop offset="1" stop-color="#c389c5"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1><span class="gradient-text">Coming Soon</span></h1>
        <h2>We're building something amazing</h2>
        <p>This page is currently under construction. We're working hard to bring you new content and features.</p>
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill"></div>
          </div>
          <p class="progress-text">Development in Progress</p>
        </div>
        <div class="coming-soon-actions">
          <RouterLink to="/" class="cta-button primary">Return Home</RouterLink>
          <RouterLink to="/contact" class="cta-button secondary">Contact Us</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Keep this page static - no animations
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  // Mark animations as initialized to prevent any animation
  window.animationsInitialized = true;
  
  // Prevent any ScrollTrigger from activating
  if (window.ScrollTrigger) {
    window.ScrollTrigger.getAll().forEach(st => st.kill());
  }
});
</script>

<style scoped>
.coming-soon-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--header-height));
  text-align: center;
  animation: fadeIn 0.8s ease-out;
}

.section-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.coming-soon-illustration {
  margin-bottom: 2rem;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

p {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.progress-container {
  margin: 2rem 0;
}

.progress-bar {
  height: 8px;
  background: rgba(138, 133, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  width: 75%;
  background: linear-gradient(90deg, #8a85ff, #c389c5);
  border-radius: 4px;
  animation: progress 2s ease-in-out infinite alternate;
}

.progress-text {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.coming-soon-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@keyframes progress {
  0% {
    width: 65%;
  }
  100% {
    width: 85%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .coming-soon-container {
    padding: 2rem 1.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 1.25rem;
  }
  
  .coming-soon-actions {
    flex-direction: column;
  }
}

/* Dark theme adjustments */
:deep([data-theme="dark"]) .progress-bar {
  background: rgba(255, 255, 255, 0.1);
}
</style>