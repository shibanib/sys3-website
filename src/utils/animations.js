import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Make initPageAnimations globally available for App.vue
window.initPageAnimations = true;

/**
 * Professional animation toolkit for System3
 * Provides consistent, optimized animations across the site
 */

// Performance-optimized defaults
const performanceProps = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden",
  transform: "translateZ(0)",
  force3D: true
};

// Common easings for professional animations
const easings = {
  smooth: "power2.out",      // Smooth, professional transitions
  bounce: "back.out(1.2)",   // Subtle bounce for playful elements
  snappy: "power3.out",      // Quick, snappy transitions
  gentle: "sine.out"         // Very gentle, subtle transitions
};

/**
 * Initialize section animations with improved professional timing
 * @param {string} selector - CSS selector for sections to animate
 */
export const initSectionAnimations = (selector = '.section') => {
  const sections = document.querySelectorAll(selector);
  if (sections.length === 0) return;
  
  sections.forEach((section) => {
    // Find elements to animate within the section - more comprehensive selection
    const heading = section.querySelector('h1, h2, .section-title');
    const description = section.querySelector('.section-description, .section-subtitle, p.intro');
    const content = section.querySelectorAll('.section-content > *:not(h1):not(h2):not(.section-description):not(.section-subtitle), .split-section > *, .grid > *, .card-container > *');
    
    // Apply hardware acceleration properties with smaller initial transform
    if (heading) {
      gsap.set(heading, { 
        y: 15, 
        opacity: 0,
        ...performanceProps
      });
    }
    
    if (description) {
      gsap.set(description, { 
        y: 12, 
        opacity: 0,
        ...performanceProps
      });
    }
    
    if (content && content.length) {
      gsap.set(content, { 
        y: 15, 
        opacity: 0,
        ...performanceProps
      });
    }
    
    // Create a more optimized timeline for each section
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        onEnter: () => {
          section.classList.add('active');
          tl.play();
        },
        once: true
      }
    });
    
    // Refined animation sequence with professional timing
    if (heading) {
      tl.to(heading, { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: easings.snappy,
        clearProps: "willChange,backfaceVisibility"
      });
    }
    
    if (description) {
      tl.to(description, { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: easings.smooth,
        clearProps: "willChange,backfaceVisibility"
      }, "-=0.35"); // Slight overlap for more polished feel
    }
    
    if (content && content.length) {
      tl.to(content, { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        stagger: 0.08, // Professional stagger
        ease: easings.smooth,
        clearProps: "willChange,backfaceVisibility" 
      }, "-=0.2");
    }
  });
};

/**
 * Initialize card animations with improved staggering and timing
 * @param {string} selector - CSS selector for cards to animate
 * @param {Object} options - Custom animation options
 */
export const initCardAnimations = (selector = '.card, .education-card, .consulting-card, .team-card, .form-card', options = {}) => {
  const cards = document.querySelectorAll(selector);
  if (cards.length === 0) return;
  
  // Default options with professional values
  const defaults = {
    y: 15,                // Smaller Y offset for subtlety
    opacity: 0,
    stagger: 0.08,        // Professional stagger timing
    duration: 0.5,        // Faster animation for snappy feel
    ease: easings.smooth,
    interval: 0.04,       // Smaller interval between batches
    batchMax: 4,          // Slightly larger batch size
    start: 'top 85%'      // Start animations earlier
  };
  
  // Merge options
  const config = { ...defaults, ...options };
  
  // Pre-set all cards for animation - more minimal transform
  gsap.set(cards, { 
    y: config.y, 
    opacity: 0,
    ...performanceProps
  });
  
  // Check if we have any cards before proceeding
  if (cards.length > 0) {
    // Use ScrollTrigger.batch for better performance with refined timing
    try {
      ScrollTrigger.batch(cards, {
        interval: config.interval,
        batchMax: config.batchMax,
        onEnter: batch => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            stagger: config.stagger,
            duration: config.duration,
            ease: config.ease,
            overwrite: true,
            clearProps: "willChange,backfaceVisibility"
          });
        },
        start: config.start
      });
    } catch (error) {
      console.log('Animation error prevented:', error.message);
      // Fallback animation without ScrollTrigger
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        stagger: config.stagger,
        duration: config.duration,
        ease: config.ease,
        overwrite: true,
        clearProps: "willChange,backfaceVisibility"
      });
    }
  }
  
  // Add professional hover animations to cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        duration: 0.3,
        ease: easings.smooth,
        overwrite: "auto"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: card.style.boxShadow || "",
        duration: 0.25,
        ease: easings.smooth,
        overwrite: "auto"
      });
    });
  });
};

/**
 * Initialize hero section animation with improved timing and components
 * @param {string} selector - CSS selector for hero section
 */
export const initHeroAnimation = (selector = '#hero-section, .hero, [id$="-hero"]') => {
  // Support multiple hero selectors to work across all pages
  const heroSection = document.querySelector(selector);
  if (!heroSection) return;
  
  // Create a timeline for coordinated animation
  const tl = gsap.timeline({ defaults: { ease: easings.smooth } });
  
  // More comprehensive element selection
  const heroTitle = heroSection.querySelector('h1, .hero-title');
  const heroSubtitle = heroSection.querySelector('p, .hero-subtitle, .hero-description');
  const heroCta = heroSection.querySelector('.cta-container, .hero-cta, .hero-buttons');
  const heroImage = heroSection.querySelector('.hero-illustration-container, .hero-image, img.hero-img');
  
  // Apply hardware acceleration properties with smaller initial transform
  if (heroTitle) {
    gsap.set(heroTitle, {
      y: 15, 
      opacity: 0,
      ...performanceProps
    });
    
    tl.to(heroTitle, {
      y: 0, 
      opacity: 1, 
      duration: 0.5,
      clearProps: "willChange,backfaceVisibility"
    }, 0);
  }
  
  if (heroSubtitle) {
    gsap.set(heroSubtitle, {
      y: 15, 
      opacity: 0,
      ...performanceProps
    });
    
    tl.to(heroSubtitle, {
      y: 0, 
      opacity: 1, 
      duration: 0.5,
      clearProps: "willChange,backfaceVisibility"
    }, 0.15); // Slight delay for professional sequence
  }
  
  if (heroCta) {
    gsap.set(heroCta, {
      y: 15, 
      opacity: 0,
      ...performanceProps
    });
    
    tl.to(heroCta, {
      y: 0, 
      opacity: 1, 
      duration: 0.5,
      clearProps: "willChange,backfaceVisibility"
    }, 0.25); // Slight delay for professional sequence
  }
  
  if (heroImage) {
    gsap.set(heroImage, {
      y: 15, 
      opacity: 0,
      ...performanceProps
    });
    
    tl.to(heroImage, {
      y: 0, 
      opacity: 1, 
      duration: 0.6,
      clearProps: "willChange,backfaceVisibility"
    }, 0.1); // Overlap slightly with title for professional effect
  }
  
  // Mark hero as active
  heroSection.classList.add('active');
  
  return tl;
};

/**
 * Add hover effects to button elements
 * @param {string} selector - CSS selector for buttons 
 */
export const initButtonAnimations = (selector = '.button, .cta-button, .form-button, button:not(.disabled):not([disabled])') => {
  const buttons = document.querySelectorAll(selector);
  if (!buttons.length) return;
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        y: -2,
        scale: 1.03,
        duration: 0.25,
        ease: easings.smooth,
        overwrite: "auto"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: easings.smooth,
        overwrite: "auto"
      });
    });
  });
};

/**
 * Initialize all animations for a page
 * @param {Object} options - Custom options
 */
export const initPageAnimations = (options = {}) => {
  // Reset any conflicting animations first
  if (gsap.killAll) {
    gsap.killAll(true); // Kill all GSAP animations if method exists
  } else {
    // Fallback to killing tweens and timelines separately
    gsap.killTweensOf("*");
    // Kill all active timelines
    const activeTimelines = gsap.globalTimeline.getChildren();
    activeTimelines.forEach(timeline => timeline.kill());
  }
  
  // Clear any previous ScrollTriggers
  if (ScrollTrigger) {
    ScrollTrigger.getAll().forEach(st => st.kill());
  }
  
  // Make sure all sections are properly prepared
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
    
    // Reset animation properties that might be stuck
    gsap.set(section.querySelectorAll('h1, h2, p, .section-content > *, .split-section > *'), {
      clearProps: 'all'
    });
  });
  
  // Wait for DOM to be fully ready using nested requestAnimationFrame for better reliability
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      // Add a more substantial delay to ensure DOM is completely ready
      setTimeout(() => {
        // Initialize hero animation
        initHeroAnimation(options.heroSelector);
        
        // Initialize section animations
        initSectionAnimations(options.sectionSelector);
        
        // Initialize card animations
        initCardAnimations(options.cardSelector, options.cardOptions);
        
        // Initialize button animations
        initButtonAnimations(options.buttonSelector);
        
        // Force immediate activation of visible sections
        document.querySelectorAll('.section').forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
            section.classList.add('active');
          }
        });
        
        // Force a refresh of the ScrollTrigger
        if (ScrollTrigger) {
          ScrollTrigger.refresh();
        }
      }, 100);
    });
  });
};

export default {
  initSectionAnimations,
  initCardAnimations,
  initHeroAnimation,
  initButtonAnimations,
  initPageAnimations,
  easings,
  performanceProps
};