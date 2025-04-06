<template>
  <div class="content">
    <!-- Hero Section -->
    <section id="hero-section" class="section hero mobile-hero-padding">
      <div class="section-content">
        <div class="hero-split">
          <div class="hero-image-column">
            <div class="hero-illustration-container">
              <img src="@/assets/images/hero-illustration.svg" alt="AI Neural Network" class="hero-illustration">
            </div>
          </div>
          <div class="hero-text-column">
            <div class="hero-content">
              <h1>Reshaping <span class="gradient-text">Tomorrow</span> with AI</h1>
              <p>Premium AI education and consulting for organizations ready to transform the future</p>
              <div class="cta-container">
                <RouterLink to="/education" class="cta-button primary">Education</RouterLink>
                <RouterLink to="/consultancy" class="cta-button secondary">Consulting</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section Preview -->
    <section id="education-preview" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Fostering Excellence and Creativity</span></h2>
        <p class="section-description">Our innovative programs are designed to empower students, providing them with a user-friendly and inspiring environment for learning</p>
        
        <div class="split-section">
          <div class="section-image-column">
            <div class="section-illustration-container">
              <img src="@/assets/images/education-illustration.svg" alt="AI Education Resources" class="section-illustration">
            </div>
          </div>
          <div class="section-text-column">
            <div class="education-grid">
              <div class="education-card" style="--card-index: 0;">
                <div class="card-content">
                  <div class="card-number">01</div>
                  <h3>Expert Faculty</h3>
                  <p>Online-live cohort-based learning from top faculty from around the world with years of working experience</p>
                </div>
              </div>
              <div class="education-card" style="--card-index: 1;">
                <div class="card-content">
                  <div class="card-number">02</div>
                  <h3>Personalized Learning</h3>
                  <p>Offering personalized courses by top talent that will give you the competitive edge you need in today's competitive market</p>
                </div>
              </div>
              <div class="education-card" style="--card-index: 2;">
                <div class="card-content">
                  <div class="card-number">03</div>
                  <h3>Cutting-Edge Curriculum</h3>
                  <p>Our meticulously designed courses ignite curiosity and passion, giving students the tools they need to excel</p>
                </div>
              </div>
              <div class="education-card" style="--card-index: 3;">
                <div class="card-content">
                  <div class="card-number">04</div>
                  <h3>Early Advantage</h3>
                  <p>Stay ahead of the learning curve and be among the top 0.1% of people who start early in their AI journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="education-cta">
          <RouterLink to="/education" class="cta-button primary">Explore Our Educational Programs</RouterLink>
        </div>
      </div>
    </section>

    <!-- Consultancy Section Preview -->
    <section id="consultancy-preview" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Personalized Services for AI Integration</span></h2>
        <p class="section-description">Tailored solutions to ensure your company stays ahead with cutting-edge AI strategies</p>
        
        <div class="split-section reverse">
          <div class="section-image-column">
            <div class="section-illustration-container">
              <img src="@/assets/images/consulting-illustration.svg" alt="AI Consulting Dashboard" class="section-illustration">
            </div>
          </div>
          <div class="section-text-column">
            <div class="consulting-grid">
              <div class="consulting-card" style="--card-index: 0;">
                <div class="card-content">
                  <div class="card-number">01</div>
                  <h3>Guidance</h3>
                  <p>Expert consultancy services in AI integration and program development to drive success</p>
                </div>
              </div>
              <div class="consulting-card" style="--card-index: 1;">
                <div class="card-content">
                  <div class="card-number">02</div>
                  <h3>Success Strategies</h3>
                  <p>Consultants delivering success-driven strategies for companies seeking growth</p>
                </div>
              </div>
              <div class="consulting-card" style="--card-index: 2;">
                <div class="card-content">
                  <div class="card-number">03</div>
                  <h3>Customized Solutions</h3>
                  <p>Tailored solutions designed specifically for your company's needs and goals</p>
                </div>
              </div>
              <div class="consulting-card" style="--card-index: 3;">
                <div class="card-content">
                  <div class="card-number">04</div>
                  <h3>Implementation Support</h3>
                  <p>Drive success and growth with innovative program development solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="consulting-cta">
          <RouterLink to="/consultancy" class="cta-button primary">Explore Our Consultancy Services</RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq-section" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Questions</span></h2>
        
        <div class="split-section">
          <div class="section-image-column">
            <div class="section-illustration-container faq-illustration-container">
              <img src="@/assets/images/faq-illustration.svg" alt="FAQ Questions" class="section-illustration">
            </div>
          </div>
          <div class="section-text-column">
            <div class="faq-container">
              <div class="faq-item" style="--faq-index: 0;" :class="{ active: activeIndex === 0 }">
                <div class="faq-question" @click="toggleFaq(0)">
                  <h3>What age group do you serve for the courses provided?</h3>
                  <div class="faq-toggle"></div>
                </div>
                <div class="faq-answer">
                  <p>We primarily serve high school students, graduate students, and professionals. Our courses are curated based on the individuals we teach, ensuring relevant content for all skill levels.</p>
                </div>
              </div>
              <div class="faq-item" style="--faq-index: 1;" :class="{ active: activeIndex === 1 }">
                <div class="faq-question" @click="toggleFaq(1)">
                  <h3>What consultancy services do you offer?</h3>
                  <div class="faq-toggle"></div>
                </div>
                <div class="faq-answer">
                  <p>We offer tailored consultancy services for AI integration and innovative program development for companies of all sizes. Our expertise spans across diverse industries, ensuring solutions that are both cutting-edge and industry-specific.</p>
                </div>
              </div>
              <div class="faq-item" style="--faq-index: 2;" :class="{ active: activeIndex === 2 }">
                <div class="faq-question" @click="toggleFaq(2)">
                  <h3>How long does it take to implement an AI solution?</h3>
                  <div class="faq-toggle"></div>
                </div>
                <div class="faq-answer">
                  <p>Implementation timelines range from 2-6 months for initial solutions to 12+ months for enterprise-wide transformations. We follow an agile methodology with regular deliverables to ensure continuous progress and value creation.</p>
                </div>
              </div>
              <div class="faq-item" style="--faq-index: 3;" :class="{ active: activeIndex === 3 }">
                <div class="faq-question" @click="toggleFaq(3)">
                  <h3>Do you offer custom training for our specific industry?</h3>
                  <div class="faq-toggle"></div>
                </div>
                <div class="faq-answer">
                  <p>Yes, we specialize in developing industry-specific AI training programs. Our curriculum designers work closely with your team to incorporate relevant use cases, data sets, and challenges unique to your sector.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact-section" class="section">
      <div class="section-content">
        <h2><span class="gradient-text">Begin Your AI Journey</span></h2>
        <p class="section-description">Ready to transform your organization with AI?</p>
        
        <div class="simple-contact">
          <div class="contact-text">
            <p>Connect with our experts to explore how our AI education and consulting services can drive your organization forward. We're here to guide your journey from start to finish.</p>
            <div class="contact-info">
              <p><strong>Email:</strong> <a href="mailto:info@system3.company">info@system3.company</a></p>
              <p><strong>Location:</strong> Harvard University, Cambridge, MA</p>
            </div>
          </div>
          <div class="contact-action">
            <RouterLink to="/contact" class="cta-button primary">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initSectionAnimations, initCardAnimations, initHeroAnimation } from '@/utils/animations';

const activeIndex = ref(null); // For FAQ toggle

const toggleFaq = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null; // Close if already open
  } else {
    activeIndex.value = index; // Open this one, close others
  }
};


onMounted(() => {
  // Initialize animations
  initHeroAnimation();
  initSectionAnimations();
  initCardAnimations();
});
</script>