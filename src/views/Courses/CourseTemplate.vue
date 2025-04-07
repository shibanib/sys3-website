<template>
  <div>
    <!-- Course Sticky Navigation (appears on scroll) -->
    <div class="course-nav">
      <div class="course-nav-inner">
        <div class="course-title">{{ courseTitle }}</div>
        <div class="course-nav-links">
          <a @click.prevent="scrollToSection('overview')" href="#overview" class="active">Overview</a>
          <a @click.prevent="scrollToSection('how-it-works')" href="#how-it-works">How It Works</a>
          <a @click.prevent="scrollToSection('curriculum')" href="#curriculum">Curriculum</a>
          <a @click.prevent="scrollToSection('instructors')" href="#instructors">Instructors</a>
          <a @click.prevent="scrollToSection('details')" href="#details">Details</a>
          <a @click.prevent="scrollToSection('cta')" href="#cta">Enroll</a>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- Course Hero Section -->
      <section class="course-hero" :style="{ backgroundImage: `url('${heroImage}')` }">
        <div class="course-hero-content">
          <h1><span class="hero-highlight">{{ courseTitle }}</span></h1>
          <p>{{ heroTagline }}</p>
        </div>
      </section>

      <!-- Course Overview Section -->
      <section class="course-section course-overview" id="overview">
        <div class="course-section-content">
          <h2>Course <span class="gradient-text">Overview</span></h2>
          
          <div class="overview-grid">
            <div class="overview-text">
              <h3>{{ overviewTitle }}</h3>
              <p>{{ overviewParagraph1 }}</p>
              
              <p>{{ overviewParagraph2 }}</p>
              
              <p>{{ overviewParagraph3 }}</p>
            </div>
            
            <div class="overview-stats-container">
              <div class="overview-stats">
                <div class="stat-item">
                  <div class="stat-number">{{ weeksDuration }}</div>
                  <div class="stat-label">Weeks</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ hoursDuration }}</div>
                  <div class="stat-label">Hours</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ projectsCount }}</div>
                  <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="course-section" id="how-it-works">
        <div class="course-section-content">
          <h2>How It <span class="gradient-text">Works</span></h2>
          <p>Our teaching methodology integrates preparation, active learning, and assessment to maximize your learning experience.</p>
          
          <div class="learning-flow-container session-format-container">
            <img :src="sessionFormatImage" alt="Session Format Diagram" class="session-format-image">
          </div>
          
          <div class="learning-components">
            <div class="component-item">
              <h3>Pre-Class Preparation</h3>
              <p>Before each session, students complete assigned readings and tutorials, followed by a short quiz to gauge understanding of core concepts.</p>
            </div>
            
            <div class="component-item">
              <h3>Interactive Lecture</h3>
              <p>During class, instruction cycles between concise lecture segments, interactive Q&A periods, and guided hands-on exercises. This pattern repeats throughout each session to maintain engagement and reinforce learning.</p>
            </div>
            
            <div class="component-item">
              <h3>Post-Class Assessment</h3>
              <p>Following each session, students complete a comprehensive quiz to solidify their understanding and identify areas for further study.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Curriculum Section -->
      <section class="course-section" id="curriculum">
        <div class="course-section-content">
          <h2>Course <span class="gradient-text">Curriculum</span></h2>
          <p>{{ curriculumIntro }}</p>
          
          <!-- Track Selector (for courses with multiple tracks) -->
          <div v-if="hasTracks" class="track-selector">
            <button 
              @click="setActiveTrack('highSchool')" 
              :class="{ active: activeTrack === 'highSchool' }"
            >
              High School Track
            </button>
            <button 
              @click="setActiveTrack('graduate')" 
              :class="{ active: activeTrack === 'graduate' }"
            >
              Graduate Track
            </button>
          </div>

          <!-- High School Track Curriculum (shown when activeTrack is 'highSchool' or when hasTracks is false) -->
          <div v-if="!hasTracks || activeTrack === 'highSchool'" class="modules-list">
            <div v-for="(module, index) in highSchoolModules" :key="index" class="module-item" :class="{ active: index === activeModule }">
              <div class="module-head" @click="toggleModule(index)">
                <div class="module-title">
                  <div class="module-number">{{ index + 1 }}</div>
                  <h3>{{ module.title }}</h3>
                </div>
                <div class="module-toggle"></div>
              </div>
              <div class="module-content">
                <ul class="module-list">
                  <li v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex">
                    <svg class="lesson-icon" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M12 14l6.16-3.42a12 12 0 01.2 1.38A12 12 0 0112 21a12 12 0 01-6.36-1.8c-.2-.46-.37-.94-.5-1.43L12 14z"></path>
                    </svg>
                    {{ lesson }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Graduate Track Curriculum (shown only when hasTracks is true and activeTrack is 'graduate') -->
          <div v-if="hasTracks && activeTrack === 'graduate'" class="modules-list">
            <div v-for="(module, index) in graduateModules" :key="index" class="module-item" :class="{ active: index === activeModule }">
              <div class="module-head" @click="toggleModule(index)">
                <div class="module-title">
                  <div class="module-number">{{ index + 1 }}</div>
                  <h3>{{ module.title }}</h3>
                </div>
                <div class="module-toggle"></div>
              </div>
              <div class="module-content">
                <ul class="module-list">
                  <li v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex">
                    <svg class="lesson-icon" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path fill="none" stroke="currentColor" stroke-width="2" d="M12 14l6.16-3.42a12 12 0 01.2 1.38A12 12 0 0112 21a12 12 0 01-6.36-1.8c-.2-.46-.37-.94-.5-1.43L12 14z"></path>
                    </svg>
                    {{ lesson }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Instructors Section -->
      <section class="course-section" id="instructors">
        <div class="course-section-content">
          <h2>Meet Your <span class="gradient-text">{{ instructors.length > 1 ? 'Instructors' : 'Instructor' }}</span></h2>
          <p>Learn from experts with extensive research and industry experience in {{ courseTitle.toLowerCase() }}.</p>
          
          <div class="instructors-grid" :class="{ 'single-instructor': instructors.length === 1 }">
            <div v-for="(instructor, index) in instructors" :key="index" class="instructor-card">
              <div class="instructor-image">
                <img :src="instructor.imagePath" :alt="instructor.name" />
              </div>
              <div class="instructor-info">
                <div class="instructor-name">{{ instructor.name }}</div>
                <div class="instructor-role">{{ instructor.role }}</div>
                <p class="instructor-bio">{{ instructor.bio }}</p>
                <div class="instructor-links">
                  <a v-if="instructor.website" :href="instructor.website" target="_blank" class="website-link" aria-label="Personal Website">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Details Section -->
      <section class="course-section" id="details">
        <div class="course-section-content">
          <h2>Course <span class="gradient-text">Details</span></h2>
          <p class="section-intro">{{ detailsIntro }}</p>
          
          <div class="details-grid">
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3>Prerequisites</h3>
              </div>
              <p>{{ prerequisitesDescription }}</p>
              <ul>
                <li v-for="(item, index) in prerequisites" :key="index">{{ item }}</li>
              </ul>
            </div>
            
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3>Format</h3>
              </div>
              <p>The course is delivered through a carefully designed blend of learning methods to maximize engagement and knowledge retention:</p>
              <ul>
                <li v-for="(item, index) in formatItems" :key="index">{{ item }}</li>
              </ul>
            </div>
            
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>Tools & Technologies</h3>
              </div>
              <p>{{ toolsDescription }}</p>
              <ul>
                <li v-for="(item, index) in toolsItems" :key="index">{{ item }}</li>
              </ul>
            </div>
            
            <div class="details-item">
              <div class="details-header">
                <div class="details-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3>Certification</h3>
              </div>
              <p>Upon successful completion of all course requirements, you'll earn the System3 {{ courseTitle }} Certification:</p>
              <ul>
                <li v-for="(item, index) in certificationItems" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="course-section course-cta" id="cta">
        <div class="course-section-content">
          <div class="cta-box">
            <h2>Ready to <span class="gradient-text">Master</span> {{ courseTitle }}?</h2>
            <p>{{ ctaText }}</p>
            <div class="cta-container">
              <router-link to="/forms/course-registration" class="cta-button primary">Register Now</router-link>
              <router-link to="/courses" class="cta-button secondary">Explore Other Courses</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sessionFormatImage from '@/assets/images/session-format.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Course data props
const props = defineProps({
  courseTitle: { type: String, required: true },
  heroImage: { type: String, required: true },
  heroTagline: { type: String, required: true },
  overviewTitle: { type: String, required: true },
  overviewParagraph1: { type: String, required: true },
  overviewParagraph2: { type: String, required: true },
  overviewParagraph3: { type: String, required: true },
  weeksDuration: { type: String, required: true },
  hoursDuration: { type: String, required: true },
  projectsCount: { type: String, required: true },
  curriculumIntro: { type: String, required: true },
  hasTracks: { type: Boolean, default: false },
  highSchoolModules: { type: Array, required: true },
  graduateModules: { type: Array, default: () => [] },
  instructors: { 
    type: Array, 
    required: true,
    // Allow for instructors with both string paths and imported image objects
    validator: (array) => array.every(item => 
      typeof item === 'object' && 
      item !== null && 
      (typeof item.imagePath === 'string' || typeof item.imagePath === 'object')
    )
  },
  detailsIntro: { type: String, required: true },
  prerequisitesDescription: { type: String, required: true },
  prerequisites: { type: Array, required: true },
  formatItems: { type: Array, required: true },
  toolsDescription: { type: String, required: true },
  toolsItems: { type: Array, required: true },
  certificationItems: { type: Array, required: true },
  ctaText: { type: String, required: true }
});

// Track selector state (only used if hasTracks is true)
const activeTrack = ref('highSchool');
const setActiveTrack = (track) => {
  activeTrack.value = track;
  // Reset active module when switching tracks
  activeModule.value = 0;
};

// Module accordion state
const activeModule = ref(null);
const toggleModule = (index) => {
  if (activeModule.value === index) {
    activeModule.value = null;
  } else {
    activeModule.value = index;
  }
};

// Method to scroll to section without changing the URL
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Get the section element and scroll to it
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Update active class in the navigation links
    const navLinks = document.querySelectorAll('.course-nav-links a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }
};

// Initialize animations and course navigation
onMounted(() => {
  nextTick(() => {
    // Initialize fixed header for courses
    setupCourseNav();
    
    // Initialize animations
    initAnimations();

    // Add active class to the first module as initial state
    activeModule.value = 0;
  });
});

// Setup course navigation
const setupCourseNav = () => {
  const courseNav = document.querySelector('.course-nav');
  
  if (courseNav) {
    const courseHero = document.querySelector('.course-hero');
    
    if (courseHero) {
      // Create scroll trigger for the fixed course navigation
      ScrollTrigger.create({
        trigger: courseHero,
        start: "bottom top+=80",
        onEnter: () => {
          courseNav.classList.add('visible');
        },
        onLeaveBack: () => {
          courseNav.classList.remove('visible');
        }
      });
    }
    
    // Highlight active section in the course navigation
    const sections = document.querySelectorAll('.course-section');
    const navLinks = document.querySelectorAll('.course-nav-links a');
    
    if (sections.length > 0 && navLinks.length > 0) {
      // Use plain JavaScript for checking active section
      window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY;
        const headerOffset = 100; // Adjust based on your header height
        
        // Find the current section
        sections.forEach(section => {
          const sectionTop = section.offsetTop - headerOffset;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });
        
        // Update active class without changing URL
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href && href.includes(current)) {
            link.classList.add('active');
          }
        });
      });
      
      // Set initial active link based on current position
      window.dispatchEvent(new Event('scroll'));
    }
  }
};

// Initialize animations for the page
const initAnimations = () => {
  // Animate page sections
  const sections = document.querySelectorAll('.course-section');
  
  sections.forEach(section => {
    // Animate section headings
    const heading = section.querySelector('h2');
    const content = section.querySelector('.course-section-content > *:not(h2):not(p:first-of-type)');
    const description = section.querySelector('.course-section-content > p:first-of-type');
    
    if (heading) {
      gsap.set(heading, { y: 30, opacity: 0 });
      gsap.to(heading, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true
        }
      });
    }
    
    if (description) {
      gsap.set(description, { y: 20, opacity: 0 });
      gsap.to(description, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true
        }
      });
    }
    
    if (content) {
      gsap.set(content, { y: 20, opacity: 0 });
      gsap.to(content, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true
        }
      });
    }
  });
  
  // Animate hero section
  const heroSection = document.querySelector('.course-hero');
  if (heroSection) {
    const heroContent = heroSection.querySelector('.course-hero-content');
    gsap.set(heroContent, { y: 40, opacity: 0 });
    gsap.to(heroContent, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    });
  }
  
  // Animate stats items
  const statItems = document.querySelectorAll('.stat-item');
  if (statItems.length) {
    gsap.set(statItems, { scale: 0.8, opacity: 0 });
    gsap.to(statItems, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: '.overview-stats',
        start: 'top 80%',
        once: true
      }
    });
  }
  
  // Animate track selector buttons (if present)
  const trackButtons = document.querySelectorAll('.track-selector button');
  if (trackButtons.length) {
    gsap.set(trackButtons, { y: 20, opacity: 0 });
    gsap.to(trackButtons, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.track-selector',
        start: 'top 85%',
        once: true
      }
    });
  }
  
  // Animate module items
  const moduleItems = document.querySelectorAll('.module-item');
  if (moduleItems.length) {
    gsap.set(moduleItems, { y: 20, opacity: 0 });
    gsap.to(moduleItems, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.modules-list',
        start: 'top 80%',
        once: true
      }
    });
  }
};
</script>

<style scoped>
/* Course component styles */
.cta-container {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(138, 133, 255, 0.25);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(138, 133, 255, 0.35);
}

.cta-button.secondary {
  background: transparent;
  border: 1.5px solid var(--color-primary);
  color: var(--color-text);
}

.cta-button.secondary:hover {
  background: rgba(138, 133, 255, 0.1);
  transform: translateY(-3px);
}

/* Track selector styles (for courses with multiple tracks) */
.track-selector {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.track-selector button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-text);
}

.track-selector button.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 4px 12px rgba(138, 133, 255, 0.25);
}

.track-selector button:hover:not(.active) {
  background: rgba(138, 133, 255, 0.1);
  transform: translateY(-2px);
}

/* Module toggle state */
.module-item.active .module-toggle::after {
  transform: translateX(-50%) scaleY(0);
}

/* Instructor image styling */
.instructor-image {
  width: 120px;
  height: 120px;
  min-width: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-right: 1.5rem;
}

.instructor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Instructors grid styling */
.instructors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.instructors-grid.single-instructor {
  display: block;
  max-width: 700px;
  margin: 2rem auto;
}

/* Instructor card styling */
.instructor-card {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.instructor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.instructor-info {
  flex: 1;
}

/* Responsive styling for instructor cards */
@media (max-width: 992px) {
  .instructor-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .instructor-image {
    margin-bottom: 1rem;
    margin-right: 0;
  }
  
  /* Fix for instructor links on mobile */
  .instructor-links {
    justify-content: center;
  }
}

.instructor-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-primary);
}

.instructor-role {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.instructor-bio {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.instructor-links {
  display: flex;
  gap: 1rem;
}

.instructor-links a {
  color: var(--color-text-secondary);
  transition: color 0.3s ease;
}

.instructor-links a:hover {
  color: var(--color-primary);
}

/* Theme support */
:deep([data-theme="light"]) .course-hero::before {
  background: linear-gradient(145deg, 
    rgba(30, 30, 60, 0.7), 
    rgba(40, 40, 80, 0.65), 
    rgba(50, 50, 90, 0.6));
}

:deep([data-theme="light"]) .course-hero-content {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

:deep([data-theme="light"]) .course-overview {
  background-color: inherit;
}

:deep([data-theme="light"]) .stat-item,
:deep([data-theme="light"]) .component-item,
:deep([data-theme="light"]) .module-head,
:deep([data-theme="light"]) .instructor-card,
:deep([data-theme="light"]) .details-item,
:deep([data-theme="light"]) .track-selector button {
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* Hero section styling */
.course-hero {
  position: relative;
}

.course-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, 
    rgba(5, 5, 5, 0.85), 
    rgba(10, 10, 10, 0.8), 
    rgba(30, 30, 40, 0.75));
  z-index: 1;
}

.course-hero-content {
  position: relative;
  z-index: 2;
}

/* Light theme module toggle */
:deep([data-theme="light"]) .module-item.active .module-content {
  background: white;
}

/* Responsive styles */
@media (max-width: 992px) {
  .overview-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .overview-text {
    padding-right: 0;
  }
  
  .course-nav-inner {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .course-nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .learning-components {
    grid-template-columns: 1fr;
  }
  
  .instructors-grid {
    grid-template-columns: 1fr;
  }
  
  }

@media (max-width: 768px) {
  .cta-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .course-hero {
    height: 60vh;
  }
  
  .course-hero h1 {
    font-size: 2.5rem;
  }
  
  .track-selector {
    flex-direction: column;
    align-items: center;
  }
  
  .track-selector button {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .course-hero {
    height: 50vh;
  }
  
  .course-hero h1 {
    font-size: 2rem;
  }
  
  .course-section {
    padding: 3rem 0;
  }
  
  .course-section-content {
    padding: 0 1rem;
  }
}
</style>