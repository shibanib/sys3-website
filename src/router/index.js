import { createRouter, createWebHistory } from 'vue-router';

// Import page components
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Education from '@/views/Education.vue';
import Consultancy from '@/views/Consultancy.vue';
import Contact from '@/views/Contact.vue';
import NotFound from '@/views/NotFound.vue';
import ComingSoon from '@/views/ComingSoon.vue';

// Course pages
import Courses from '@/views/Courses/Courses.vue';
import DataScience from '@/views/Courses/DataScience.vue';

// High School Course pages
import HSMachineLearning from '@/views/Courses/HighSchool/MachineLearning.vue';
import HSComputerVision from '@/views/Courses/HighSchool/ComputerVision.vue';
import HSDataScience from '@/views/Courses/HighSchool/DataScience.vue';

// Graduate Course pages
import GradMachineLearning from '@/views/Courses/Graduate/MachineLearning.vue';
import GradComputerVision from '@/views/Courses/Graduate/ComputerVision.vue';
import GradDataScience from '@/views/Courses/Graduate/DataScience.vue';
import GradNLP from '@/views/Courses/Graduate/NLP.vue';
import GradReinforcementLearning from '@/views/Courses/Graduate/ReinforcementLearning.vue';
import GradLLMOps from '@/views/Courses/Graduate/LLMOps.vue';

// Form pages
import FormsIndex from '@/views/Forms/Index.vue';
import CourseRegistration from '@/views/Forms/CourseRegistration.vue';
import AI5Form from '@/views/Forms/AI5Form.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'System3 - AI Education and Consulting' }
  },
  {
    path: '/coming-soon',
    name: 'ComingSoon',
    component: ComingSoon,
    meta: { title: 'Coming Soon - System3' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Us - System3' }
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
    meta: { title: 'Education - System3' }
  },
  {
    path: '/consultancy',
    name: 'Consultancy',
    component: Consultancy,
    meta: { title: 'Consultancy - System3' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Us - System3' }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: { title: 'Our Courses - System3' }
  },
  // Original Data Science Course
  {
    path: '/courses/data-science',
    name: 'DataScience',
    component: DataScience,
    meta: { title: 'Data Science Course - System3' }
  },
  
  // High School Courses
  {
    path: '/courses/high-school/machine-learning',
    name: 'HSMachineLearning',
    component: HSMachineLearning,
    meta: { title: 'High School Machine Learning - System3' }
  },
  {
    path: '/courses/high-school/computer-vision',
    name: 'HSComputerVision',
    component: HSComputerVision,
    meta: { title: 'High School Computer Vision - System3' }
  },
  {
    path: '/courses/high-school/data-science',
    name: 'HSDataScience',
    component: HSDataScience,
    meta: { title: 'High School Data Science - System3' }
  },
  
  // Graduate Courses
  {
    path: '/courses/graduate/machine-learning',
    name: 'GradMachineLearning',
    component: GradMachineLearning,
    meta: { title: 'Graduate Machine Learning - System3' }
  },
  {
    path: '/courses/graduate/computer-vision',
    name: 'GradComputerVision',
    component: GradComputerVision,
    meta: { title: 'Graduate Computer Vision - System3' }
  },
  {
    path: '/courses/graduate/data-science',
    name: 'GradDataScience',
    component: GradDataScience,
    meta: { title: 'Graduate Data Science - System3' }
  },
  {
    path: '/courses/graduate/nlp',
    name: 'GradNLP',
    component: GradNLP,
    meta: { title: 'Graduate Natural Language Processing - System3' }
  },
  {
    path: '/courses/graduate/reinforcement-learning',
    name: 'GradReinforcementLearning',
    component: GradReinforcementLearning,
    meta: { title: 'Graduate Reinforcement Learning - System3' }
  },
  {
    path: '/courses/graduate/llmops',
    name: 'GradLLMOps',
    component: GradLLMOps,
    meta: { title: 'Graduate LLMOps - System3' }
  },
  
  // Form pages
  {
    path: '/forms',
    name: 'Forms',
    component: FormsIndex,
    meta: { title: 'Forms - System3' }
  },
  {
    path: '/forms/course-registration',
    name: 'CourseRegistration',
    component: CourseRegistration,
    meta: { title: 'Course Registration - System3' }
  },
  {
    path: '/forms/ai5-form',
    name: 'AI5Form',
    component: AI5Form,
    meta: { title: 'AI5 Form - System3' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 Not Found - System3' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If we have a saved position (e.g., when using browser back/forward)
    if (savedPosition) {
      return savedPosition;
    }
    
    // If the route has a hash, scroll to that element
    if (to.hash) {
      // Add a small delay to allow components to mount properly
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' });
        }, 300);
      });
    }
    
    // For all other routes, force scroll to top with a small delay
    // This ensures the page scrolls to top even during SPA navigation
    return new Promise((resolve) => {
      // Small delay to ensure DOM is updated before scrolling
      setTimeout(() => {
        resolve({ top: 0, left: 0, behavior: 'auto' });
      }, 50);
    });
  }
});

// Update document title based on route and handle GitHub Pages paths
router.beforeEach((to, from, next) => {
  // Update page title
  document.title = to.meta.title || 'System3';

  // Handle GitHub Pages repository path
  // If we're on GitHub Pages and the URL contains the repository name twice
  // This can happen when navigating due to base URL issues
  if (window.location.hostname.includes('github.io')) {
    const path = to.path;
    const pathParts = path.split('/');
    const repoName = pathParts[1];

    // Check if repo name appears twice in path (e.g., /repo-name/repo-name/page)
    if (pathParts.length > 2 && pathParts[1] === pathParts[2]) {
      // Remove the duplicate repo name
      const fixedPath = '/' + pathParts.slice(2).join('/');
      next({ path: fixedPath, replace: true });
      return;
    }
  }
  
  next();
});

export default router;