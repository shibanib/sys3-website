<template>
  <div class="content">
    <!-- Hero Section -->
    <section id="about-hero" class="section hero mobile-hero-padding">
      <div class="section-content">
        <div class="hero-content">
          <h1>About <span class="gradient-text">System3</span></h1>
          <p>Setting the global standard in AI education and driving innovation with world-class solutions</p>
        </div>
      </div>
    </section>
    
    <!-- Vision Section -->
    <section id="vision-section" class="section">
      <div class="section-content">
        <SectionTitle
          title="Our Vision"
          :isGradient="true"
        />
        
        <SplitSection
          :illustration="aboutIllustration"
          altText="System3 Vision"
        >
          <template #text>
            <p class="large-text">
              At System3, we create an inspiring and innovative learning environment where high school students thrive. Our cutting-edge pedagogy ensures our courses are not only user-friendly but also equip students with the skills to excel in a rapidly evolving tech landscape.
            </p>
            <p class="large-text">
              We craft meticulously designed courses that ignite curiosity and passion, giving students the tools they need to excel, whether in healthcare, finance, art, or any field they choose. What sets us apart is our unwavering commitment to excellence. We handpick top talent from premier institutions, ensuring that our educators not only excel in their fields but also communicate complex ideas with clarity and enthusiasm.
            </p>
          </template>
        </SplitSection>
      </div>
    </section>
    
    <!-- Core Values Section -->
    <section id="core-values-section" class="section core-values-section">
      <div class="section-content">
        <SectionTitle
          title="Core Values"
          description="The principles that guide everything we do"
          :isGradient="true"
        />
        
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in coreValues" :key="index">
            <div class="value-icon" v-html="value.icon"></div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section id="team-section" class="section">
      <div class="section-content">
        <SectionTitle
          title="Our Team"
          description="We're a global team from USA, India & Cyprus with diverse educational backgrounds and working experiences"
          :isGradient="true"
        />
        
        <div class="team-illustration-wrapper">
          <img :src="teamIllustration" alt="Our Global Team" class="team-illustration">
        </div>
        
        <!-- Team Leaders -->
        <div class="team-leaders">
          <div class="team-leader" v-for="(leader, index) in teamLeaders" :key="index">
            <div class="leader-image">
              <img :src="leader.image" :alt="leader.name" :style="leader.imagePos ? `--pos-y: ${leader.imagePos};` : ''">
            </div>
            <div class="leader-info">
              <h3>{{ leader.name }}</h3>
              <p class="leader-title">{{ leader.title }}</p>
              <p class="leader-bio">{{ leader.bio }}</p>
              <div class="leader-links" v-if="leader.links">
                <a v-for="(link, linkIndex) in leader.links" :key="linkIndex" 
                   :href="link.url" target="_blank" class="harvard-link" :aria-label="link.label">
                  <span v-html="link.icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Team Members -->
        <div class="team-members-container">
          <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-image">
              <img :src="member.image" :alt="member.name" :style="member.imagePos ? `--pos-y: ${member.imagePos};` : ''">
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-title">{{ member.title }}</p>
              <div class="member-social" v-if="member.socialLinks">
                <a v-for="(link, linkIndex) in member.socialLinks" :key="linkIndex"
                   :href="link.url" target="_blank" class="social-link">
                  <span v-html="link.icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section id="contact-cta" class="section">
      <div class="section-content">
        <SectionTitle
          title="Contact Us"
          description="Interested in our courses or consulting services? Get in touch!"
          :isGradient="true"
        />
        
        <div class="cta-container">
          <router-link to="/contact" class="cta-button primary">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SplitSection from '@/components/SplitSection.vue';

// Import images
import aboutIllustration from '@/assets/images/about-illustration.svg';
import teamIllustration from '@/assets/images/team-illustration.svg';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';
import vishnuImage from '@/assets/images/people/VishnuM.png';
import anshikaImage from '@/assets/images/people/AnshikaGupta.png';
import shibaniImage from '@/assets/images/people/ShibaniBudhraja.png';
import lakshayImage from '@/assets/images/people/LakshayChawla.png';
import nawangImage from '@/assets/images/people/NawangBhutia.png';

// Core values data
const coreValues = ref([
  {
    title: "Integrity",
    description: "Transparency and ethical conduct in all our interactions.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>`
  },
  {
    title: "Collaboration",
    description: "Working together to achieve common goals with diverse perspectives.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>`
  },
  {
    title: "Innovation",
    description: "Pushing boundaries in AI education and embracing new technologies.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>`
  },
  {
    title: "Accessibility",
    description: "Making AI education available to students of all backgrounds.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`
  },
  {
    title: "Expertise",
    description: "Combining academic excellence with practical experience.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`
  }
]);

// Harvard icon for leader links
const harvardIcon = `<svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 3L3 9V11H29V9L16 3Z" fill="currentColor"/>
  <path d="M7 13V23H10V13H7Z" fill="currentColor"/>
  <path d="M13 13V23H16V13H13Z" fill="currentColor"/>
  <path d="M19 13V23H22V13H19Z" fill="currentColor"/>
  <path d="M25 13V23H28V13H25Z" fill="currentColor"/>
  <path d="M4 25V29H28V25H4Z" fill="currentColor"/>
</svg>`;

// LinkedIn icon for social links
const linkedInIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2">
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>`;

// Team leaders data
const teamLeaders = ref([
  {
    name: "Dr. Pavlos Protopapas",
    title: "CEO and Founder",
    bio: "Pavlos is an educator and researcher. As an educator, Pavlos is teaching CS109A, CS109B, introduction to data science and advanced topics of data science. He also teaches a course in MLOps. In the past he has taught capstone courses in data science and computational science.",
    image: pavlosImage,
    imagePos: "15%",
    links: [
      {
        url: "https://seas.harvard.edu/person/pavlos-protopapas",
        label: "Harvard Directory",
        icon: harvardIcon
      }
    ]
  },
  {
    name: "Dr. Ignacio Becker",
    title: "Head of System3 Consulting",
    bio: "His main area of research is applied AI to astrophysical problems. Nowadays, he focuses on developing models to process the real-time data of the next generation of telescopes. He is the head of the consulting department in System 3.",
    image: ignacioImage,
    imagePos: "20%",
    links: [
      {
        url: "https://seas.harvard.edu/person/ignacio-becker-troncoso",
        label: "Harvard Directory",
        icon: harvardIcon
      }
    ]
  }
]);

// Team members data
const teamMembers = ref([
  {
    name: "Vishnu M",
    title: "CTO",
    image: vishnuImage,
    imagePos: "top",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/vishnu701/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Anshika Gupta",
    title: "AI Solutions Consultant | Head of Educational Programs",
    image: anshikaImage,
    imagePos: "10%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/iamanshika/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Shibani Budhraja",
    title: "Senior Data Scientist",
    image: shibaniImage,
    imagePos: "20%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/shibanibudhraja/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Lakshay Chawla",
    title: "Data Scientist",
    image: lakshayImage,
    imagePos: "15%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/lakshaychawla13/",
        icon: linkedInIcon
      }
    ]
  },
  {
    name: "Nawang Thinley Bhutia",
    title: "Data Scientist",
    image: nawangImage,
    imagePos: "10%",
    socialLinks: [
      {
        url: "https://www.linkedin.com/in/nawang-thinley-bhutia-0158bb218/",
        icon: linkedInIcon
      }
    ]
  }
]);

onMounted(() => {
  // Style Core Values section background
  const coreValuesSection = document.getElementById('core-values-section');
  if (coreValuesSection) {
    const isDarkTheme = document.documentElement.classList.contains('dark-theme');
    coreValuesSection.style.backgroundColor = isDarkTheme ? '#121212' : '#f8f9fa';
  }
  
  // Simple approach - make all content visible
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('active');
  });
  
  // Make grids visible
  document.querySelectorAll('.values-grid, .team-leaders, .team-grid').forEach(grid => {
    grid.style.visibility = 'visible';
    grid.style.opacity = '1';
    grid.style.display = 'grid';
  });
  
  // Make cards visible
  document.querySelectorAll('.value-card, .team-leader, .team-member').forEach(card => {
    card.style.visibility = 'visible';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });
});

// Simple cleanup to match other pages
onBeforeUnmount(() => {
  console.log('About page unmounting');
});
</script>

<style scoped>
/* Hero Section */
#about-hero {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  width: 100%;
}

#about-hero::before {
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

[data-theme="light"] #about-hero {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(250, 250, 252, 0.97)) !important;
  box-shadow: inset 0 0 100px rgba(138, 133, 255, 0.08);
}

[data-theme="light"] #about-hero::before {
  background: radial-gradient(circle at center, rgba(138, 133, 255, 0.15), transparent 80%);
  opacity: 0.7;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 15;
  margin: 0 auto;
  opacity: 1; /* Make sure content is always visible */
  transform: translateY(0); /* No initial transform */
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: var(--color-text);
  position: relative;
  z-index: 5;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  color: rgba(32, 33, 36, 0.85);
  font-weight: 500;
}

[data-theme="light"] .hero-content h1 {
  color: #202124;
  text-shadow: 0 2px 10px rgba(138, 133, 255, 0.08);
}

/* Vision Section */
#vision-section {
  padding: 6rem 0;
}

.large-text {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  #vision-section .section-content {
    padding: 0 1.5rem; /* Add horizontal padding for mobile */
  }
}

[data-theme="light"] .large-text {
  color: rgba(32, 33, 36, 0.9);
}

/* Core Values Section - REMOVE ALL BACKGROUND STYLES FROM CSS
   and let the JavaScript handle it directly */
.core-values-section {
  padding: 6rem 0;
  position: relative;
  z-index: 1;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  /* Initial state will be set by GSAP */
}

.value-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, 
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 220px;
}

[data-theme="light"] .value-card {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.08);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 133, 255, 0.08);
  border-color: var(--color-primary);
}

.value-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  color: var(--color-primary);
  opacity: 0.9;
}

[data-theme="light"] .value-icon {
  opacity: 1;
}

.value-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  color: var(--color-primary);
  font-weight: 600;
}

.value-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
  margin-bottom: 0;
}

[data-theme="light"] .value-card p {
  color: rgba(32, 33, 36, 0.9);
}

/* Team Section */
#team-section {
  padding: 6rem 0;
  position: relative;
}

.team-illustration-wrapper {
  max-width: 400px;
  margin: 0 auto 2rem;
  text-align: center;
}

.team-illustration {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1rem;
  transition: transform 0.5s ease;
}

.team-illustration-wrapper:hover .team-illustration {
  transform: scale(1.05);
}

.team-leaders {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.team-leader {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, 
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  height: 100%;
  text-align: center;
  padding-top: 0.5rem;
}

[data-theme="light"] .team-leader {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.08);
}

.team-leader:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 133, 255, 0.08);
  border-color: var(--color-primary);
}

.leader-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin: 2rem auto 1.5rem;
  border: 3px solid var(--color-primary);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
}

.leader-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  object-position: var(--pos-x, center) var(--pos-y, center);
}

.team-leader:hover .leader-image img {
  transform: scale(1.05);
}

.leader-info {
  padding: 0.5rem 2rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leader-info h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  font-weight: 700;
}

.leader-title {
  font-size: 1rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  opacity: 0.9;
  font-weight: 500;
}

.leader-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.harvard-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(138, 133, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
  position: relative;
}

[data-theme="light"] .harvard-link {
  background: rgba(138, 133, 255, 0.15);
}

.harvard-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

.harvard-link svg {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.leader-bio {
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 1.05rem;
  text-align: center;
  margin-bottom: 0;
  flex-grow: 1;
  min-height: 160px;
}

[data-theme="light"] .leader-bio {
  color: rgba(32, 33, 36, 0.9);
}

.team-members-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
<<<<<<< HEAD
  padding: 0 1rem;
=======
  position: relative;
  z-index: 1;
>>>>>>> a18be39 (bug fixes)
}

.team-member {
  flex: 0 0 calc(33.33% - 1.7rem);
  max-width: calc(33.33% - 1.7rem);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
<<<<<<< HEAD
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-color 0.4s ease;
=======
  transition: transform 0.3s ease, 
              box-shadow 0.3s ease,
              border-color 0.3s ease;
  height: 100%;
>>>>>>> a18be39 (bug fixes)
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 0.5rem;
}

[data-theme="light"] .team-member {
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.08);
}

.team-member:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 5px 15px rgba(138, 133, 255, 0.08);
  border-color: var(--color-primary);
}

.member-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  margin: 2rem auto 1rem;
  border: 3px solid var(--color-primary);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  object-position: var(--pos-x, center) var(--pos-y, center);
}

.team-member:hover .member-image img {
  transform: scale(1.08);
}

.member-info {
  padding: 0.5rem 1.5rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-info h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
}

.member-title {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
  line-height: 1.4;
  flex-grow: 1;
  max-width: 90%;
  text-align: center;
}

.member-social {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  justify-content: center;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(138, 133, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
  position: relative;
}

[data-theme="light"] .social-link {
  background: rgba(138, 133, 255, 0.15);
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* CTA Section */
#contact-cta {
  padding: 6rem 0;
  text-align: center;
}

.cta-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

/* Light mode adjustments */

[data-theme="light"] .member-image,
[data-theme="light"] .leader-image {
  border-color: rgba(138, 133, 255, 0.8);
  box-shadow: 0 5px 15px rgba(138, 133, 255, 0.2);
}

[data-theme="light"] .value-card:hover,
[data-theme="light"] .team-leader:hover,
[data-theme="light"] .team-member:hover {
  box-shadow: 0 15px 30px rgba(138, 133, 255, 0.15);
}

/* Responsive styles */
@media (max-width: 1200px) {
  .team-leaders {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .large-text {
    font-size: 1.1rem;
  }
  
  .team-members-container {
    justify-content: center;
    gap: 2.5rem;
  }
  
  .team-member {
    flex: 0 0 calc(50% - 1.25rem);
    max-width: calc(50% - 1.25rem);
  }
}

@media (max-width: 768px) {
  #about-hero {
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
  
  .team-members-container {
    justify-content: center;
    gap: 2.5rem;
  }
  
  .team-member {
    flex: 0 0 100%;
    max-width: 350px;
  }
  
  .team-illustration-wrapper {
    max-width: 300px;
  }
  
  /* Add horizontal padding to section content on mobile */
  .section-content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  /* Ensure leadership cards have proper padding */
  .leader-info {
    padding: 0.5rem 1.5rem 2rem;
  }
}

@media (max-width: 480px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>