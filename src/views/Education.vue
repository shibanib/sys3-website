<template>
  <div class="content">
    <!-- Education Hero Section -->
    <section id="education-hero" class="section hero education-hero">
      <div class="hero-content">
        <h1>System3 <span class="gradient-text">Education</span></h1>
        <p>Premium AI education led by Harvard's Scientific Program Director and his expert team</p>
      </div>
    </section>

    <!-- About Education Section -->
    <section id="about-education" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Harvard-Level Education</span></h2>
        <p class="section-description">We recreate the AI experience taught at Harvard and tailor it for high school students</p>
        
        <div class="education-about">
          <div class="about-image">
            <img src="@/assets/images/people/PavlosTeaching.jpeg" alt="Harvard Education" />
          </div>
          <div class="about-text">
            <p>As leaders in the field of AI, we believe in pushing the boundaries and bringing a new perspective to the field of high school education. Led by the Harvard Scientific Director and his team, we give high schoolers the ability to learn how to code and then create their own AI and Machine Learning applications from scratch.</p>
            <p>Our education programs are designed to be accessible to students with no prior coding experience, while challenging enough for those who already have a foundation.</p>
            <div class="about-cta">
              <RouterLink to="/courses" class="cta-button primary" @click="prepareForNavigation">Explore Courses</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits-section" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Benefits</span></h2>
        <p class="section-description">What makes System3 Education unique</p>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Harvard Expertise</h3>
            <p>Direct tutelage from the Harvard Scientific Director and his team of experts</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3>Tailored Content</h3>
            <p>Custom curriculum designed for Python, AI, and ML from scratch</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Personalized Mentoring</h3>
            <p>One-on-one and small group mentoring sessions with experienced instructors</p>
          </div>
        </div>
        
        <div class="benefits-grid benefits-grid-centered">
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>Hands-On Projects</h3>
            <p>Build and publish your own AI projects with guidance from industry experts</p>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <circle cx="8" cy="14" r="1"></circle>
                <circle cx="12" cy="14" r="1"></circle>
                <circle cx="16" cy="14" r="1"></circle>
                <circle cx="8" cy="18" r="1"></circle>
                <circle cx="12" cy="18" r="1"></circle>
                <circle cx="16" cy="18" r="1"></circle>
              </svg>
            </div>
            <h3>Live Classes</h3>
            <p>Interactive live sessions with real-time feedback and collaborative learning experiences</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">How It Works</span></h2>
        <p class="section-description">Our proven educational approach</p>
        
        <div class="steps-container">
          <div class="step-item">
            <div class="step-number">01</div>
            <div class="step-content">
              <h3>Learning Concepts</h3>
              <p>Even if you're a complete beginner, our team will guide you through the building blocks of AI. We break down complex concepts into digestible modules.</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-number">02</div>
            <div class="step-content">
              <h3>Exploring Code</h3>
              <p>We map learning concepts to working code, starting with Python fundamentals and progressing to creating simple to complex machine learning models.</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-number">03</div>
            <div class="step-content">
              <h3>Creating Projects</h3>
              <p>Build a project from scratch, tackling a real-world problem with AI. Our mentors guide you through the entire process, from conception to completion.</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-number">04</div>
            <div class="step-content">
              <h3>Ongoing Support</h3>
              <p>With 24/7 community access and regular mentoring sessions, you'll never be stuck. Our team is always available to help you overcome challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Courses Preview Section -->
    <section id="courses-preview" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Our Courses</span></h2>
        <p class="section-description">Comprehensive AI education for all skill levels</p>
        
        <!-- Course Level Tabs -->
        <div class="course-level-tabs">
          <button class="level-tab" :class="{ active: activeTab === 'high-school' }" @click="switchTab('high-school')">High School</button>
          <button class="level-tab" :class="{ active: activeTab === 'graduate' }" @click="switchTab('graduate')">Graduate & Corporate</button>
        </div>
        
        <!-- High School Level Courses -->
        <div class="courses-preview-grid" :class="{ active: activeTab === 'high-school' }">
          <div v-for="course in highSchoolCourses" :key="course.id" class="course-preview-card">
            <div class="course-preview-image">
              <img :src="getIconPath(course.iconLight || course.icon)" :alt="course.title" class="light-mode-icon" />
              <img :src="getIconPath(course.iconDark || course.icon)" :alt="course.title" class="dark-mode-icon" />
            </div>
            <div class="course-preview-content">
              <h3>{{ course.title }}</h3>
              <p>{{ truncateDescription(course.description, 100) }}</p>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/data-science`" v-if="course.id === 'data-science'" class="course-link">Learn More</RouterLink>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/${course.id}`" v-else class="course-link">Learn More</RouterLink>
            </div>
          </div>
        </div>
        
        <!-- Graduate & Corporate Level Courses -->
        <div class="courses-preview-grid" :class="{ active: activeTab === 'graduate' }">
          <div v-for="course in graduateCourses" :key="course.id" class="course-preview-card">
            <div class="course-preview-image">
              <img :src="getIconPath(course.iconLight || course.icon)" :alt="course.title" class="light-mode-icon" />
              <img :src="getIconPath(course.iconDark || course.icon)" :alt="course.title" class="dark-mode-icon" />
            </div>
            <div class="course-preview-content">
              <h3>{{ course.title }}</h3>
              <p>{{ truncateDescription(course.description, 100) }}</p>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/data-science`" v-if="course.id === 'data-science'" class="course-link">Learn More</RouterLink>
              <RouterLink :to="`/courses/${activeTab === 'high-school' ? 'high-school' : 'graduate'}/${course.id}`" v-else class="course-link">Learn More</RouterLink>
            </div>
          </div>
        </div>
        
        <div class="courses-cta">
          <RouterLink :to="activeTab === 'high-school' ? '/courses' : '/courses#graduate'" class="cta-button primary">
            <span v-if="activeTab === 'high-school'">View All High School Courses</span>
            <span v-else>View All Graduate Courses</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials-section" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Student Testimonials</span></h2>
        <p class="section-description">What our students are saying about their learning experience</p>
        
        <div class="testimonials-container">
          <div class="testimonials-carousel">
            <div v-for="(testimonial, index) in testimonials" 
                 :key="index" 
                 class="testimonial-card"
                 :class="{ active: activeTestimonial === index, 
                          prev: getPrevIndex(index), 
                          next: getNextIndex(index) }">
              <div class="testimonial-quote-icon">
                <svg viewBox="0 0 24 24" width="32" height="32">
                  <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                </svg>
              </div>
              <div class="testimonial-content">
                <p>{{ testimonial.content }}</p>
              </div>
              <div class="testimonial-author">
                <div class="author-image">
                  <img :src="testimonial.authorImg" :alt="testimonial.author" />
                </div>
                <div class="author-info">
                  <h4>{{ testimonial.author }}</h4>
                  <p>{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-navigation">
            <button class="nav-button prev-button" aria-label="Previous testimonial" @click="prevTestimonial">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" stroke="currentColor" stroke-width="3" d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            
            <div class="testimonial-indicators">
              <button v-for="(_, index) in testimonials" 
                      :key="index" 
                      class="indicator" 
                      :class="{ active: activeTestimonial === index }"
                      @click="activeTestimonial = index"
                      :aria-label="`Testimonial ${index + 1}`">
              </button>
            </div>
            
            <button class="nav-button next-button" aria-label="Next testimonial" @click="nextTestimonial">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" stroke="currentColor" stroke-width="3" d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="education-cta" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Start Your AI Journey</span></h2>
        <p class="section-description">Join students from around the world in our cutting-edge AI education programs</p>
        
        <div class="cta-box">
          <h3>Ready to learn AI from Harvard experts?</h3>
          <p>Our next cohort starts soon. Register now to secure your spot.</p>
          <div class="cta-container">
            <RouterLink to="/contact" class="cta-button primary">Register Now</RouterLink>
            <RouterLink to="/courses" class="cta-button secondary" @click="prepareForNavigation">Explore Courses</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { courses } from '@/data/courses';
import { initSectionAnimations, initCardAnimations, initHeroAnimation } from '@/utils/animations';
import gsap from 'gsap';
// Import ScrollTrigger for direct manipulation if needed
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Function to prepare for navigation to the courses page
const prepareForNavigation = () => {
  // Reset animation flags to ensure proper initialization on the next page
  if (window.animationsInitialized) {
    window.animationsInitialized = false;
  }
  
  // Send a message to the global scope that we're transitioning to courses
  window.navToCoursesPage = true;
  
  // Kill any ongoing animations to prevent conflicts
  gsap.killAll(true);
  
  console.log('Preparing for navigation to Courses page...');
};

// Course tabs state
const activeTab = ref('high-school');

// Function to handle tab switching with visible, smooth animations
function switchTab(tab) {
  if (activeTab.value === tab) return; // Don't switch if already on this tab
  
  console.log(`Switching from ${activeTab.value} to ${tab}`);
  
  // Get all grids and find the active one
  const allGrids = document.querySelectorAll('.courses-preview-grid');
  let currentGrid = null;
  let targetGrid = null;
  
  // Reliable way to find the grids based on index
  if (tab === 'high-school') {
    targetGrid = allGrids[0]; // First grid is high school
    currentGrid = allGrids[1]; // Second grid is graduate
  } else {
    targetGrid = allGrids[1]; // Second grid is graduate
    currentGrid = allGrids[0]; // First grid is high school
  }
  
  if (!targetGrid || !currentGrid) {
    console.error('Could not find the grid elements');
    return;
  }
  
  // Update state
  activeTab.value = tab;
  
  // Kill any existing animations
  gsap.killTweensOf(currentGrid);
  gsap.killTweensOf(targetGrid);
  gsap.killTweensOf('.course-preview-card');
  
  // Manually update class - more reliable than GSAP className
  currentGrid.classList.remove('active');
  targetGrid.classList.add('active');
  
  // Make sure both are properly positioned to start
  currentGrid.style.visibility = 'visible';
  currentGrid.style.opacity = '1';
  currentGrid.style.position = 'relative';
  currentGrid.style.display = 'grid';
  
  targetGrid.style.visibility = 'visible';
  targetGrid.style.opacity = '0';
  targetGrid.style.position = 'relative';
  targetGrid.style.display = 'grid';
  targetGrid.style.transform = 'translateY(10px)';
  
  // Simple fade transition for reliability
  gsap.to(currentGrid, {
    opacity: 0,
    y: -10,
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => {
      // Ensure it's hidden after animation
      currentGrid.style.visibility = 'hidden';
      currentGrid.style.position = 'absolute';
    }
  });
  
  // Fade in target grid
  gsap.to(targetGrid, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    delay: 0.1,
    ease: "power1.out"
  });
  
  // Animate the cards
  const cards = targetGrid.querySelectorAll('.course-preview-card');
  
  // Reset the cards
  gsap.set(cards, {
    opacity: 0,
    y: 10
  });
  
  // Animate in with stagger
  gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.05,
    delay: 0.2,
    ease: "power1.out"
  });
}

// Get high school courses (first 3 for preview)
const highSchoolCourses = computed(() => {
  // In a real implementation, you'd filter based on a property
  // For now, let's just take the first 3 courses
  return courses.slice(0, 3);
});

// Get graduate courses (the next 3 courses starting from index 2)
const graduateCourses = computed(() => {
  // In a real implementation, you'd filter based on a property
  // For now, let's just take 3 courses starting from index 2
  return courses.slice(2, 5);
});

// Import SVG images for courses
import dataIconLight from '@/assets/images/data-science-icon-light.svg';
import dataIconDark from '@/assets/images/data-science-icon-dark.svg';
import mlIconLight from '@/assets/images/machine-learning-icon-light.svg';
import mlIconDark from '@/assets/images/machine-learning-icon-dark.svg';
import cvIconLight from '@/assets/images/computer-vision-icon-light.svg';
import cvIconDark from '@/assets/images/computer-vision-icon-dark.svg';
import nlpIconLight from '@/assets/images/nlp-icon-light.svg';
import nlpIconDark from '@/assets/images/nlp-icon-dark.svg';
import rlIconLight from '@/assets/images/reinforcement-learning-icon-light.svg';
import rlIconDark from '@/assets/images/reinforcement-learning-icon-dark.svg';
import llmopsIconLight from '@/assets/images/llmops-icon-light.svg';
import llmopsIconDark from '@/assets/images/llmops-icon-dark.svg';

// Import testimonial profile images
import anshikaProfile from '@/assets/images/people/AnshikaGupta.png';
import lakshayProfile from '@/assets/images/people/LakshayChawla.png';
import shibaniProfile from '@/assets/images/people/ShibaniBudhraja.png';
import ignacioProfile from '@/assets/images/people/IgnacioBecker.png';

// Helper to truncate long descriptions
function truncateDescription(text, maxLength = 100) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Helper to get the correct icon path
function getIconPath(icon) {
  if (!icon) return '';
  
  // Map icons to imported assets
  const iconMap = {
    'data-science-icon-light.svg': dataIconLight,
    'data-science-icon-dark.svg': dataIconDark,
    'machine-learning-icon-light.svg': mlIconLight,
    'machine-learning-icon-dark.svg': mlIconDark,
    'computer-vision-icon-light.svg': cvIconLight,
    'computer-vision-icon-dark.svg': cvIconDark,
    'nlp-icon-light.svg': nlpIconLight,
    'nlp-icon-dark.svg': nlpIconDark,
    'reinforcement-learning-icon-light.svg': rlIconLight,
    'reinforcement-learning-icon-dark.svg': rlIconDark,
    'llmops-icon-light.svg': llmopsIconLight,
    'llmops-icon-dark.svg': llmopsIconDark
  };
  
  // Check if icon is in our map
  if (iconMap[icon]) {
    return iconMap[icon];
  }
  
  // If it's a full path, use it directly
  if (icon.startsWith('/')) return icon;
  
  // Fallback - assume it's a direct URL
  return icon;
}

// Testimonials data
const testimonials = [
  {
    author: 'Maya Rodriguez',
    role: 'Data Science Student • Class of 2023',
    content: 'The Data Science course was transformative for my career. The instructors broke down complex concepts into digestible modules, and I was able to build my first ML model within weeks!',
    authorImg: anshikaProfile,
  },
  {
    author: 'James Chen',
    role: 'Computer Vision Student • Class of 2023',
    content: 'I joined with zero coding experience, feeling intimidated. Six months later, I\'ve built my own computer vision application that can identify bird species! The mentorship was exceptional.',
    authorImg: lakshayProfile,
  },
  {
    author: 'Sarah Johnson',
    role: 'Machine Learning Student • Class of 2022',
    content: 'The live classes and 24/7 community support made all the difference. I could ask questions anytime and get immediate help. My Machine Learning project got me three job interviews!',
    authorImg: shibaniProfile,
  },
  {
    author: 'David Patel',
    role: 'AI Foundations Student • Class of 2023',
    content: 'As a high school student, I never thought I\'d be able to understand neural networks and build AI applications. The curriculum was challenging but incredibly rewarding. Now I\'m helping my school implement AI tools!',
    authorImg: ignacioProfile,
  }
];

// Testimonials carousel state
const activeTestimonial = ref(0);
const totalTestimonials = testimonials.length;
const isAnimating = ref(false); // Prevent animation stacking

// Performance optimization properties
const testimonialPerformanceProps = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden",
  force3D: true
};

// Testimonial navigation methods with optimized animations
function nextTestimonial() {
  if (isAnimating.value) return; // Prevent animation stacking
  isAnimating.value = true;
  
  const currentIndex = activeTestimonial.value;
  const nextIndex = (currentIndex + 1) % totalTestimonials;
  
  animateTestimonialChange(currentIndex, nextIndex, 'next');
}

function prevTestimonial() {
  if (isAnimating.value) return; // Prevent animation stacking
  isAnimating.value = true;
  
  const currentIndex = activeTestimonial.value;
  const prevIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  
  animateTestimonialChange(currentIndex, prevIndex, 'prev');
}

// Animated testimonial transition
function animateTestimonialChange(fromIndex, toIndex, direction) {
  const allCards = document.querySelectorAll('.testimonial-card');
  if (!allCards.length) {
    activeTestimonial.value = toIndex;
    isAnimating.value = false;
    return;
  }
  
  const currentCard = allCards[fromIndex];
  const targetCard = allCards[toIndex];
  
  // Create animation timeline
  const tl = gsap.timeline({
    onComplete: () => {
      // Update state after animation
      activeTestimonial.value = toIndex;
      isAnimating.value = false;
      
      // Reset all non-active cards
      allCards.forEach((card, i) => {
        if (i !== toIndex) {
          card.style.visibility = 'hidden';
        }
      });
    }
  });
  
  // Direction-based animation
  const xOffset = direction === 'next' ? '100%' : '-100%';
  
  // Prepare the target card for smooth entrance
  gsap.set(targetCard, {
    visibility: 'visible',
    opacity: 0.6,
    x: xOffset,
    rotation: direction === 'next' ? 5 : -5,
    scale: 0.9,
    ...testimonialPerformanceProps
  });
  
  // Animate current card out
  tl.to(currentCard, {
    opacity: 0,
    x: direction === 'next' ? '-60%' : '60%',
    rotation: direction === 'next' ? -5 : 5,
    scale: 0.9,
    duration: 0.35,
    ease: "power2.in",
    ...testimonialPerformanceProps
  });
  
  // Animate target card in
  tl.to(targetCard, {
    opacity: 1,
    x: '0%',
    rotation: 0,
    scale: 1,
    duration: 0.4,
    ease: "power2.out",
    clearProps: "willChange,backfaceVisibility,force3D"
  }, 0.15); // Slight overlap for smoother transition
}

// Helper methods for testimonial carousel - used for class application
function getPrevIndex(index) {
  return (activeTestimonial.value === (index + 1) % totalTestimonials) || 
         (activeTestimonial.value === 0 && index === totalTestimonials - 1);
}

function getNextIndex(index) {
  return (activeTestimonial.value === (index - 1 + totalTestimonials) % totalTestimonials);
}

// Auto-rotate testimonials with improved timing
let testimonialInterval;

function startAutoRotate() {
  // Use a slightly longer interval for better reading experience
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 7000); // Slightly longer for better reading experience
}

function stopAutoRotate() {
  clearInterval(testimonialInterval);
}

// Reference to event listeners for proper cleanup
const eventListeners = {
  carousel: {
    element: null,
    listeners: {
      mouseenter: stopAutoRotate,
      mouseleave: startAutoRotate
    }
  }
};

// Optimized smooth animation initialization
function optimizedInitAnimations() {
  // Kill any existing animations first for a clean slate
  gsap.killTweensOf("*");
  ScrollTrigger.getAll().forEach(st => st.kill());
  
  // Set a clean performance optimization context
  gsap.config({
    force3D: true, // Force hardware acceleration
    autoSleep: 60,  // Better performance optimization
    nullTargetWarn: false // Reduce console noise
  });
  
  // Performance props for all animations
  const performanceProps = {
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    force3D: true
  };
  
  // Create a master timeline for coordinated page load animation
  const masterTl = gsap.timeline({ paused: true });
  
  // 1. Hero section - Fast fade in (use custom animation for more control)
  const heroSection = document.querySelector('#education-hero');
  const heroContent = heroSection?.querySelector('.hero-content');
  
  if (heroContent) {
    gsap.set(heroContent, { y: 15, opacity: 0, ...performanceProps });
    
    masterTl.to(heroContent, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      clearProps: "willChange,backfaceVisibility"
    }, 0);
  }
  
  // 2. Pre-animation setup for each section
  const sections = document.querySelectorAll('.section:not(#education-hero)');
  
  sections.forEach(section => {
    // Prepare headings
    const heading = section.querySelector('h2');
    if (heading) gsap.set(heading, { y: 10, opacity: 0, ...performanceProps });
    
    // Prepare descriptions
    const desc = section.querySelector('.section-description');
    if (desc) gsap.set(desc, { y: 8, opacity: 0, ...performanceProps });
    
    // Set up ScrollTrigger for each section
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        const sectionTl = gsap.timeline();
        
        // Animate heading
        if (heading) {
          sectionTl.to(heading, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "willChange,backfaceVisibility"
          });
        }
        
        // Animate description
        if (desc) {
          sectionTl.to(desc, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "willChange,backfaceVisibility"
          }, "-=0.25");
        }
        
        // Specialized animations for different section types
        if (section.id === 'benefits-section') {
          // Stagger benefit cards with fast, professional animation
          const cards = section.querySelectorAll('.benefit-card');
          gsap.set(cards, { y: 15, opacity: 0, ...performanceProps });
          
          sectionTl.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "willChange,backfaceVisibility"
          }, "-=0.2");
        }
        
        if (section.id === 'how-it-works') {
          // Stagger step items with fast, professional animation
          const steps = section.querySelectorAll('.step-item');
          gsap.set(steps, { y: 15, opacity: 0, ...performanceProps });
          
          sectionTl.to(steps, {
            y: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "willChange,backfaceVisibility"
          }, "-=0.2");
        }
        
        if (section.id === 'courses-preview') {
          // Ultra-optimized courses section animation
          const tabs = section.querySelectorAll('.level-tab');
          const activeGrid = section.querySelector('.courses-preview-grid.active');
          const cards = activeGrid?.querySelectorAll('.course-preview-card');
          
          // Pre-position tabs with extremely minimal transform
          gsap.set(tabs, { y: 5, opacity: 0 });
          
          // Pre-position the grid - make sure it exists in DOM properly
          if (activeGrid) {
            // Ensure proper visibility settings directly
            activeGrid.style.visibility = 'visible';
            activeGrid.style.position = 'relative';
            activeGrid.style.opacity = '0';
            activeGrid.style.pointerEvents = 'auto';
          }
          
          // Minimal card setup
          if (cards && cards.length) {
            gsap.set(cards, { opacity: 0, y: 10 });
          }
          
          // Simplified animation timeline with reduced properties and durations
          sectionTl.to(tabs, {
            y: 0,
            opacity: 1,
            duration: 0.25, // Faster
            stagger: 0.05, // Faster stagger
            ease: "power1.out", // Simpler easing
            clearProps: "y" // Only clear what's needed
          });
          
          if (activeGrid) {
            sectionTl.to(activeGrid, {
              opacity: 1,
              duration: 0.2, // Super fast fade
              ease: "none" // Linear is fastest
            }, "<0.1");
          }
          
          if (cards && cards.length) {
            // Batch cards in a single efficient operation
            sectionTl.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.2, // Faster
              stagger: 0.03, // Minimal stagger
              ease: "power1.out", // Simpler easing
              clearProps: "y" // Only clear what's needed
            }, "<0.05");
          }
        }
        
        if (section.id === 'testimonials-section') {
          // Animate just the active testimonial for better performance
          const activeCard = section.querySelector('.testimonial-card.active');
          if (activeCard) {
            gsap.set(activeCard, { opacity: 0, y: 15, ...performanceProps });
            
            sectionTl.to(activeCard, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              clearProps: "willChange,backfaceVisibility"
            }, "-=0.2");
          }
        }
        
        if (section.id === 'education-cta') {
          // Animate CTA box
          const ctaBox = section.querySelector('.cta-box');
          if (ctaBox) {
            gsap.set(ctaBox, { y: 15, opacity: 0, ...performanceProps });
            
            sectionTl.to(ctaBox, {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              clearProps: "willChange,backfaceVisibility"
            }, "-=0.1");
          }
        }
      }
    });
  });
  
  // Play the master timeline
  masterTl.play();
  
  // Make visible any elements that might still be hidden
  // This ensures all content is visible, even if animations don't trigger
  setTimeout(() => {
    document.querySelectorAll('.benefits-grid, .steps-container, .courses-preview-grid.active, .testimonial-card.active, .cta-box')
      .forEach(el => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
  }, 1000);
  
  return masterTl;
}

onMounted(() => {
  console.log("Education page mounted");
  
  // Immediate initialization using setTimeout for more reliable DOM access
  setTimeout(() => {
    console.log("Setting up initial state");
    
    // Get all grids and select by index (most reliable approach)
    const allGrids = document.querySelectorAll('.courses-preview-grid');
    
    if (allGrids.length >= 2) {
      const highSchoolGrid = allGrids[0]; // First grid is high school
      const graduateGrid = allGrids[1]; // Second grid is graduate
      
      console.log("Found grids:", allGrids.length);
      
      // Reset both grids first
      allGrids.forEach(grid => {
        grid.classList.remove('active');
        grid.style.opacity = '0';
        grid.style.visibility = 'hidden';
        grid.style.position = 'absolute';
      });
      
      // Apply initial state based on active tab
      if (activeTab.value === 'high-school') {
        console.log("Setting high school grid active");
        
        // Direct style application (more reliable than GSAP in some cases)
        highSchoolGrid.classList.add('active');
        highSchoolGrid.style.visibility = 'visible';
        highSchoolGrid.style.opacity = '1';
        highSchoolGrid.style.position = 'relative';
        highSchoolGrid.style.display = 'grid';
        highSchoolGrid.style.transform = 'none';
        
        // Pre-animate cards if desired
        const cards = highSchoolGrid.querySelectorAll('.course-preview-card');
        cards.forEach(card => {
          card.style.opacity = '1';
          card.style.transform = 'none';
        });
        
      } else {
        console.log("Setting graduate grid active");
        
        // Direct style application
        graduateGrid.classList.add('active');
        graduateGrid.style.visibility = 'visible';
        graduateGrid.style.opacity = '1';
        graduateGrid.style.position = 'relative';
        graduateGrid.style.display = 'grid';
        graduateGrid.style.transform = 'none';
        
        // Pre-animate cards if desired
        const cards = graduateGrid.querySelectorAll('.course-preview-card');
        cards.forEach(card => {
          card.style.opacity = '1';
          card.style.transform = 'none';
        });
      }
    } else {
      console.error("Could not find course grid elements");
    }
    
    // Initialize optimized animations
    optimizedInitAnimations();
    
    // Start auto-rotating testimonials
    startAutoRotate();
    
    // Set up event listeners with proper references for cleanup
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoRotate);
      carousel.addEventListener('mouseleave', startAutoRotate);
      
      // Store references for cleanup
      eventListeners.carousel.element = carousel;
    }
  }, 100); // Small delay to ensure DOM is ready
});

// Clean up animations and event listeners when component is unmounted
onUnmounted(() => {
  // Clear the auto-rotate interval
  stopAutoRotate();
  
  // Remove event listeners
  if (eventListeners.carousel.element) {
    const { element, listeners } = eventListeners.carousel;
    
    Object.entries(listeners).forEach(([event, handler]) => {
      element.removeEventListener(event, handler);
    });
  }
  
  // Kill all animations related to this page
  if (gsap) {
    gsap.killTweensOf("*");
    
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach(st => st.kill());
    }
  }
});
</script>

<style scoped>
/* Education Hero Section */
.education-hero {
  height: 100vh;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

@media (max-width: 768px) {
  .education-hero {
    height: 80vh;
  }
}

@media (max-width: 480px) {
  .education-hero {
    height: 60vh;
  }
}

.education-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.15), transparent 80%);
  opacity: 1;
  z-index: -1;
}

.education-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 70%, rgba(200, 180, 255, 0.1), transparent 70%);
  opacity: 0.8;
  z-index: -1;
}

.education-hero .hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 5;
  position: relative;
  animation: fadeIn 1s ease-in-out;
}

.education-hero .hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .education-hero .hero-content h1 {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .education-hero .hero-content h1 {
    font-size: 2.5rem;
  }
}

.education-hero .hero-content p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  color: var(--color-text-secondary);
  font-weight: 400;
}

/* About Education Section */
.education-about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 3rem;
}

@media (max-width: 992px) {
  .education-about {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image {
    order: -1;
  }
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 12px 24px -12px rgba(16, 24, 40, 0.18);
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

.about-cta {
  margin-top: 2rem;
}

/* Benefits Section */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 992px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

.benefits-grid-centered {
  grid-template-columns: repeat(2, 1fr);
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .benefits-grid-centered {
    grid-template-columns: 1fr;
    max-width: 450px;
  }
}

.benefit-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 260px;
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 133, 255, 0.1);
  border-color: var(--color-primary);
  z-index: 2;
}

.benefit-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.8rem;
  color: var(--color-primary);
  background: rgba(138, 133, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1);
  background: rgba(138, 133, 255, 0.2);
}

.benefit-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
}

.benefit-card h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  opacity: 0.7;
  transition: width 0.3s ease;
}

.benefit-card:hover h3::after {
  width: 60px;
}

/* How It Works Section */
.steps-container {
  margin-top: 3rem;
}

.step-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.step-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 60px;
  height: calc(100% - 30px);
  width: 2px;
  background: var(--color-primary);
  opacity: 0.5;
}

.step-number {
  width: 50px;
  height: 50px;
  min-width: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

/* Courses Preview Section */
.course-level-tabs {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
  position: relative;
  z-index: 1;
}

.course-level-tabs::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-border);
  z-index: -1;
}

.level-tab {
  padding: 0.8rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--color-text-secondary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  margin: 0 1rem;
}

.level-tab::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.level-tab:hover::after {
  transform: scaleX(0.8);
}

.level-tab.active {
  color: var(--color-primary);
}

.level-tab.active::after {
  transform: scaleX(1);
}

.courses-preview-grid {
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  /* Better hiding method with autoAlpha compatibility */
  visibility: hidden;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  /* Enhanced performance optimizations */
  transform: translateZ(0);
  will-change: transform, opacity; 
  backface-visibility: hidden;
  perspective: 1000px;
  /* Ensure consistent layout */
  width: 100%;
  left: 0;
  right: 0;
}

/* Added parent wrapper for better positioning context */
#courses-preview .section-content {
  position: relative;
  min-height: 500px; /* Maintain height during transitions */
}

@media (max-width: 1200px) {
  .courses-preview-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
  }
  #courses-preview .section-content {
    min-height: 700px; /* Adjusted for 2 columns */
  }
}

@media (max-width: 768px) {
  .courses-preview-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
  }
  #courses-preview .section-content {
    min-height: 1200px; /* Adjusted for 1 column */
  }
}

.courses-preview-grid.active {
  visibility: visible;
  opacity: 1;
  position: relative;
  pointer-events: auto;
  z-index: 2;
}

.course-preview-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  /* Ultra-optimized transitions for smoother hover effects */
  transition: transform 0.2s ease-out, 
              box-shadow 0.2s ease-out,
              border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  min-height: 340px;
  will-change: transform; /* Hint for browser optimization */
  transform: translateZ(0); /* Force GPU acceleration */
  backface-visibility: hidden; /* Prevent flickering */
}

/* Only apply hover effects on non-touch devices */
@media (hover: hover) {
  .course-preview-card:hover {
    transform: translateY(-5px); /* Reduced movement for smoother effect */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(138, 133, 255, 0.1);
    border-color: var(--color-primary);
  }
}

.course-preview-image {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  background: none;
}

.course-preview-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.1), transparent 70%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.course-preview-card:hover .course-preview-image::after {
  opacity: 1;
}

.course-preview-image img {
  width: auto;
  height: auto;
  max-width: 120px;
  max-height: 120px;
  object-fit: contain;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.course-preview-card:hover .course-preview-image img {
  transform: scale(1.08) translateY(-5px);
}

.course-preview-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-preview-content h3 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: var(--color-primary);
  font-weight: 600;
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
}

.course-preview-content h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.course-preview-card:hover .course-preview-content h3::after {
  width: 60px;
}

.course-preview-content p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  flex-grow: 1;
  min-height: 48px;
  overflow: hidden;
}

/* Styling for the "Learn More" course link */
.course-link {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background: transparent;
  border: 1.5px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-align: center;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.course-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--color-primary);
  transition: width 0.3s ease;
  z-index: -1;
}

.course-link:hover {
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(138, 133, 255, 0.2);
}

.course-link:hover::before {
  width: 100%;
}

.courses-cta {
  text-align: center;
  margin-top: 3rem;
  position: relative;
  padding: 0.5rem 0;
}

.courses-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: var(--color-primary);
  opacity: 0.7;
}

.courses-cta .cta-button {
  font-size: 1.1rem;
  padding: 0.9rem 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.courses-cta .cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(138, 133, 255, 0.25);
}

/* Testimonials Section */
#testimonials-section {
  position: relative;
  overflow: hidden;
}

#testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(138, 133, 255, 0.12), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(138, 133, 255, 0.12), transparent 50%);
  opacity: 0.8;
  z-index: 1;
}

.testimonials-container {
  max-width: 1200px;
  margin: 3rem auto 0;
  position: relative;
  z-index: 5;
  overflow: hidden;
  padding: 1rem 0 2rem;
}

.testimonials-carousel {
  position: relative;
  height: 400px;
  perspective: 1500px;
  margin: 0 auto;
  transform-style: preserve-3d;
  overflow: visible;
}

.testimonial-card {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 25%;
  top: 0;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2.5rem;
  opacity: 0;
  transform: translateX(0) rotateY(0) scale(0.85);
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  visibility: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(138, 133, 255, 0.15);
  overflow: hidden;
  pointer-events: none;
}

@media (max-width: 992px) {
  .testimonial-card {
    width: 70%;
    left: 15%;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    width: 85%;
    left: 7.5%;
    padding: 1.5rem;
  }
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0) rotateY(0) scale(1);
  z-index: 10;
  visibility: visible;
  filter: none;
  pointer-events: auto;
}

.testimonial-card.prev {
  opacity: 0.6;
  transform: translateX(-60%) rotateY(10deg) scale(0.85);
  z-index: 5;
  visibility: visible;
  filter: blur(2px);
  left: 10%;
  pointer-events: none;
}

.testimonial-card.next {
  opacity: 0.6;
  transform: translateX(60%) rotateY(-10deg) scale(0.85);
  z-index: 5;
  visibility: visible;
  filter: blur(2px);
  left: 40%;
  pointer-events: none;
}

.testimonial-quote-icon {
  color: var(--color-primary);
  opacity: 0.4;
  margin-bottom: 1rem;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.testimonial-card.active .testimonial-quote-icon {
  opacity: 0.7;
  animation: floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.testimonial-content {
  margin-bottom: 2rem;
  overflow: hidden;
  max-height: 60%;
  transition: opacity 0.3s ease;
}

.testimonial-card:not(.active) .testimonial-content {
  opacity: 0.4;
  max-height: 50%;
}

.testimonial-content p {
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 400;
  position: relative;
  z-index: 2;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s;
}

.testimonial-card.active .testimonial-author {
  opacity: 1;
  transform: translateY(0);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-primary);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.testimonial-card:hover .author-image img {
  transform: scale(1.1);
}

.author-info h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.author-info p {
  font-size: 0.9rem;
  color: var(--color-primary);
  font-weight: 500;
}

.testimonial-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
}

.nav-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(138, 133, 255, 0.5);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 50;
}

.nav-button:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 20px rgba(138, 133, 255, 0.4);
}

.testimonial-indicators {
  display: flex;
  gap: 1rem;
  margin: 0 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(138, 133, 255, 0.3);
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 50;
}

.indicator:hover {
  background: rgba(138, 133, 255, 0.5);
  transform: scale(1.2);
}

.indicator.active {
  background: var(--color-primary);
  transform: scale(1.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(138, 133, 255, 0.5);
}

/* CTA Section */
.cta-box {
  max-width: 800px;
  margin: 3rem auto 0;
  background: rgba(138, 133, 255, 0.05);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  padding: 3rem 2rem;
  text-align: center;
}

.cta-box h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.cta-box p {
  margin-bottom: 2rem;
}

.cta-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Responsive styles */
@media (max-width: 992px) {
  .education-about {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image {
    order: -1;
  }
  
  .benefits-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  .benefits-grid-centered {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 100%;
  }
  
  .cta-container {
    flex-direction: column;
    align-items: center;
  }
  
  .step-item {
    gap: 1.5rem;
  }
  
  .testimonial-card {
    width: 75%;
    left: 12.5%;
  }
}

@media (max-width: 768px) {
  .education-hero {
    height: 50vh;
  }
  
  .education-hero .hero-content h1 {
    font-size: 3rem;
  }
  
  .benefit-card,
  .step-item {
    padding: 1.5rem;
  }
  
  .step-item:not(:last-child)::after {
    left: 20px;
  }
  
  .step-number {
    width: 40px;
    height: 40px;
    min-width: 40px;
    font-size: 1rem;
  }
  
  .course-level-tabs {
    flex-direction: row;
    width: 100%;
    gap: 0;
    margin-left: auto;
    margin-right: auto;
  }
  
  .level-tab {
    flex: 1;
    text-align: center;
    margin: 0;
    padding: 0.8rem 0.5rem;
    font-size: 0.95rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
    width: 85%;
    left: 7.5%;
  }
  
  .testimonial-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .step-item {
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
  }
  
  .step-item:not(:last-child)::after {
    left: 25px;
    top: 40px;
    height: calc(100% - 20px);
  }
  
  .testimonials-carousel {
    height: 500px;
  }
  
  .testimonial-card {
    padding: 1.5rem;
    width: 90%;
    left: 5%;
  }
  
  .testimonial-author {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .author-image {
    width: 50px;
    height: 50px;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
  }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Dark/Light mode specific styles */
:root .dark-theme .education-hero {
  background-color: var(--color-bg);
}

:root .dark-theme .benefit-card {
  background: rgba(30, 30, 40, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(60, 60, 80, 0.5);
}

:root .dark-theme .course-preview-card {
  background: rgba(30, 30, 40, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

:root .dark-theme .course-preview-image {
  background: rgba(20, 20, 30, 0.5);
}

:root .dark-theme .course-preview-content {
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.2), rgba(5, 5, 5, 0.1));
}

:root .dark-theme .cta-box {
  background: rgba(40, 40, 60, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

:root .light-theme .education-hero {
  background-color: var(--color-bg);
}

:root .light-theme .benefit-card {
  background: white;
  box-shadow: 0 10px 30px rgba(100, 100, 230, 0.08);
  border: 1px solid rgba(200, 200, 240, 0.5);
}

:root .light-theme .benefit-card h3 {
  color: var(--color-primary-dark, #4a3aff);
}

:root .light-theme .benefit-card p {
  color: #2c3e50;
}

:root .light-theme .step-number {
  background: var(--color-primary-dark, #4a3aff);
  box-shadow: 0 5px 15px rgba(74, 58, 255, 0.3);
}

:root .light-theme .step-content h3 {
  color: var(--color-primary-dark, #4a3aff);
}

:root .light-theme .step-content p {
  color: #2c3e50;
}

:root .light-theme .course-preview-card {
  background: white;
  box-shadow: 0 8px 30px rgba(100, 100, 230, 0.08);
  border: 1px solid rgba(200, 200, 240, 0.5);
}

:root .light-theme .course-preview-image {
  background: rgba(235, 235, 255, 0.5);
  border-bottom: 1px solid rgba(200, 200, 240, 0.3);
}

:root .light-theme .course-preview-content h3 {
  color: var(--color-primary-dark, #4a3aff);
}

:root .light-theme .course-preview-content p {
  color: #2c3e50;
}

:root .light-theme .cta-box {
  background: linear-gradient(135deg, rgba(245, 245, 255, 1) 0%, rgba(235, 235, 255, 1) 100%);
  border: 1px solid rgba(138, 133, 255, 0.5);
  box-shadow: 0 15px 40px rgba(100, 100, 230, 0.1);
}

:root .light-theme .testimonial-card {
  background: white;
  box-shadow: 0 15px 35px rgba(100, 100, 230, 0.08);
  border: 1px solid rgba(200, 200, 240, 0.5);
}

:root .light-theme .testimonial-content p {
  color: #2c3e50;
}

/* Icon visibility based on theme */
.light-mode-icon {
  display: block !important;
}

.dark-mode-icon {
  display: none !important;
}

:root .dark-theme .light-mode-icon {
  display: none !important;
}

:root .dark-theme .dark-mode-icon {
  display: block !important;
}

:root .light-theme .light-mode-icon {
  display: block !important;
}

:root .light-theme .dark-mode-icon {
  display: none !important;
}

/* Force all components to be visible */
.benefits-grid,
.steps-container {
  display: grid !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.benefit-card,
.step-item {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0) !important;
  display: flex !important;
}

.courses-preview-grid.active {
  visibility: visible !important;
  position: relative !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  display: grid !important;
}

.courses-preview-grid.active .course-preview-card {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateY(0) !important;
}

.testimonial-card.active {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(0) rotateY(0) scale(1) !important;
  filter: none !important;
}
</style>