<template>
  <div class="content">
    <!-- Hero Section -->
    <section class="section hero" id="forms-hero">
      <div class="section-overlay"></div>
      <div class="hero-content">
        <h1>System3 <span class="gradient-text">Forms</span></h1>
        <p>Access our forms for various programs and activities.</p>
      </div>
    </section>

    <!-- Forms Directory Section -->
    <section class="section" id="forms-directory">
      <div class="section-overlay"></div>
      <div class="section-content">
        <h2 class="section-title"><span class="gradient-text">Forms Directory</span></h2>
        <p class="section-description">Select a form from the list below to get started.</p>
        
        <div class="forms-grid">
          <!-- <div class="form-card">
            <div class="form-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <div class="form-info">
              <h3>AI5 Form</h3>
              <p>Complete this form to facilitate forming groups for the AI5 course.</p>
              <div class="form-actions">
                <router-link to="/forms/ai5-form" class="form-button">Open Form</router-link>
              </div>
            </div>
          </div> -->
          
          <div class="form-card">
            <div class="form-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"></path>
                <path d="M12 12L20 7.5"></path>
                <path d="M12 12V21"></path>
                <path d="M12 12L4 7.5"></path>
              </svg>
            </div>
            <div class="form-info">
              <h3>Course Registration</h3>
              <p>Register for the System3 AI X TIS Course – July 2025 (Indian Cohort) for high school students.</p>
              <div class="form-actions">
                <router-link to="/forms/course-registration" class="form-button">Open Form</router-link>
              </div>
            </div>
          </div>
          
          <!-- Add more form cards here as needed -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Add forms-page class for specific styling
  document.documentElement.classList.add('forms-page');
});
</script>

<style scoped>
/* Component-specific styles */
.section {
  position: relative;
  transition: opacity 0.3s ease;
  opacity: 1 !important;
  visibility: visible !important;
}

.section-content {
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-description, 
.section-content > p, 
.section-content > div {
  opacity: 1 !important;
  visibility: visible !important;
}

/* Make gradient text pop more */
.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
  z-index: 1;
}

/* SVG icon animations */
.form-icon svg {
  width: 100%;
  height: 100%;
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1), 
              filter 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform, filter;
}

.form-card:hover .form-icon svg {
  transform: scale(1.08);
  filter: drop-shadow(0 0 6px rgba(138, 133, 255, 0.4));
}

/* Ensure button text stays white in all themes */
.form-button {
  color: white !important;
}

/* Add shadow to section titles for better visibility */
.section-title {
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>