<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
        <span class="logo-mark"></span>
        System<span class="gradient-text">3</span>
      </RouterLink>
    </div>
    
    <nav :class="{ active: isMenuOpen }">
      <ul>
        <li>
          <RouterLink to="/" :class="{ active: $route.path === '/' }">Home</RouterLink>
        </li>
        <li class="has-dropdown">
          <RouterLink to="/education" :class="{ active: $route.path.includes('/education') || $route.path.includes('/courses') }">Education</RouterLink>
          <ul class="dropdown-menu">
            <li><RouterLink to="/courses">Our Courses</RouterLink></li>
          </ul>
        </li>
        <li>
          <RouterLink to="/consultancy" :class="{ active: $route.path === '/consultancy' }">Consultancy</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" :class="{ active: $route.path === '/about' }">About Us</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" :class="{ active: $route.path === '/contact' }">Contact</RouterLink>
        </li>
      </ul>
    </nav>
    
    <div class="header-actions">
      <div class="theme-toggle-wrapper">
        <span class="theme-label">Theme</span>
        <div class="theme-toggle" @click="toggleTheme">
          <svg class="icon icon-moon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M12 3a9 9 0 1 0 9 9c0-.97-.03-1 0-1 .97 0 2-.97 2-2s-1.03-2-2-2h-2c-.97 0-2-1.03-2-2 0-1.03 1.03-2 2-2"></path>
          </svg>
          <svg class="icon icon-sun" viewBox="0 0 24 24" width="16" height="16">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M12 3a9 9 0 1 0 9 9c0-4.97-4.03-9-9-9zm0 0V1m0 22v-2m10-10h2M1 12h2m17-7l-2 2M6 6L4 4m14 14l2 2m-16-2l-2 2"></path>
          </svg>
        </div>
      </div>
      
      <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isDarkTheme = inject('isDarkTheme');
const toggleTheme = inject('toggleTheme');
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  
  // If menu is open, prevent body scrolling
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (isMenuOpen.value && nav && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};

// Close menu when route changes
watch(() => route.path, () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = ''; // Reset body overflow when component unmounts
});

// Close mobile menu if window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};
</script>