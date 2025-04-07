// Courses data

export const courses = [
  {
    id: 'data-science',
    title: 'Bedrock Data Science',
    shortTitle: 'Bedrock Data Science',
    description: 'Master the fundamentals and advanced concepts of data science, including statistical analysis, machine learning, and data visualization.',
    image: '/course-data-science.jpg',
    icon: 'data-science-icon.svg',
    iconLight: 'data-science-icon-light.svg',
    iconDark: 'data-science-icon-dark.svg',
    duration: '10 weeks',
    level: 'Intermediate to Advanced',
    format: 'Online + In-Person',
    topics: [
      'Statistical Analysis',
      'Machine Learning Fundamentals',
      'Data Visualization',
      'Feature Engineering',
      'Model Selection and Evaluation',
      'Big Data Processing',
      'Practical Applications'
    ],
    instructors: [
      {
        name: 'Pavlos Protopapas',
        title: 'Scientific Director',
        image: '/instructor-1.jpg',
        bio: 'Scientific Director of the Institute for Applied Computational Science (IACS) at Harvard University.'
      },
      {
        name: 'Vishnu M',
        title: 'Technical Director',
        image: '/instructor-2.jpg',
        bio: 'Expert in machine learning applications with extensive industry experience.'
      }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    shortTitle: 'ML',
    description: 'Dive deep into the world of machine learning algorithms, model development, and implementation strategies.',
    image: '/course-ml.jpg',
    icon: 'machine-learning-icon.svg',
    iconLight: 'machine-learning-icon-light.svg',
    iconDark: 'machine-learning-icon-dark.svg',
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    format: 'Online + In-Person',
    topics: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'Reinforcement Learning',
      'Neural Networks',
      'Model Optimization',
      'ML in Production'
    ],
    instructors: [
      {
        name: 'Anshika Gupta',
        title: 'Lead ML Engineer',
        image: '/instructor-3.jpg',
        bio: 'Expert in implementing machine learning solutions for enterprise applications.'
      },
      {
        name: 'Ignacio Becker',
        title: 'Senior Data Scientist',
        image: '/instructor-1.jpg',
        bio: 'Specializes in deep learning and computer vision applications.'
      }
    ]
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    shortTitle: 'CV',
    description: 'Learn to develop advanced computer vision systems for image recognition, object detection, and visual analytics.',
    image: '/course-cv.jpg',
    icon: 'computer-vision-icon.svg',
    iconLight: 'computer-vision-icon-light.svg',
    iconDark: 'computer-vision-icon-dark.svg',
    duration: '8 weeks',
    level: 'Advanced',
    format: 'Online',
    topics: [
      'Image Processing',
      'Object Detection',
      'Facial Recognition',
      'Motion Analysis',
      'CNN Architectures',
      'Vision Transformers',
      'Practical Applications'
    ],
    instructors: [
      {
        name: 'Ignacio Becker',
        title: 'Computer Vision Specialist',
        image: '/instructor-1.jpg',
        bio: 'Expert in developing computer vision solutions for various industries.'
      }
    ]
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    shortTitle: 'NLP',
    description: 'Master the techniques for processing, analyzing, and generating human language with AI.',
    image: '/course-data-science.jpg',
    icon: 'nlp-icon.svg',
    iconLight: 'nlp-icon-light.svg',
    iconDark: 'nlp-icon-dark.svg',
    duration: '9 weeks',
    level: 'Advanced',
    format: 'Online',
    topics: [
      'Text Processing',
      'Sentiment Analysis',
      'Named Entity Recognition',
      'Language Models',
      'Transformer Architectures',
      'LLM Fine-tuning',
      'NLP Applications'
    ],
    instructors: [
      {
        name: 'Anshika Gupta',
        title: 'NLP Specialist',
        image: '/instructor-3.jpg',
        bio: 'Specialized in developing and implementing NLP solutions.'
      }
    ]
  },
  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    shortTitle: 'RL',
    description: 'Explore advanced reinforcement learning techniques for developing autonomous systems and intelligent agents.',
    image: '/course-ml.jpg',
    icon: 'reinforcement-learning-icon.svg',
    iconLight: 'reinforcement-learning-icon-light.svg',
    iconDark: 'reinforcement-learning-icon-dark.svg',
    duration: '10 weeks',
    level: 'Advanced',
    format: 'Online',
    topics: [
      'Markov Decision Processes',
      'Q-Learning',
      'Policy Gradients',
      'Deep Reinforcement Learning',
      'Multi-Agent Systems',
      'Practical Applications',
      'RL in Production'
    ],
    instructors: [
      {
        name: 'Nawang Bhutia',
        title: 'RL Research Scientist',
        image: '/instructor-2.jpg',
        bio: 'Specializes in reinforcement learning for robotics and autonomous systems.'
      }
    ]
  },
  {
    id: 'llmops',
    title: 'LLMOps',
    shortTitle: 'LLMOps',
    description: 'Learn to efficiently deploy, manage and optimize large language models in production environments.',
    image: '/course-data-science.jpg',
    icon: 'llmops-icon.svg',
    iconLight: 'llmops-icon-light.svg',
    iconDark: 'llmops-icon-dark.svg',
    duration: '8 weeks',
    level: 'Advanced',
    format: 'Online + In-Person',
    topics: [
      'LLM Infrastructure Setup',
      'Model Optimization',
      'Prompt Engineering',
      'Efficient Fine-tuning',
      'Monitoring & Evaluation',
      'Scalability Solutions',
      'Cost Optimization'
    ],
    instructors: [
      {
        name: 'Lakshay Chawla',
        title: 'LLMOps Engineer',
        image: '/instructor-1.jpg',
        bio: 'Expert in deploying and optimizing large language models at scale.'
      }
    ]
  }
];

// Consulting Services data
export const consultingServices = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy Development',
    description: 'Create a comprehensive AI implementation roadmap aligned with your business objectives.',
    icon: 'strategy-icon',
    details: [
      'Assess current capabilities and needs',
      'Define strategic AI objectives',
      'Develop phased implementation plan',
      'Establish KPIs and success metrics',
      'Budget and resource planning'
    ]
  },
  {
    id: 'llmops',
    title: 'LLMOps Implementation',
    description: 'Build efficient systems for deploying and managing large language models in production.',
    icon: 'llmops-icon',
    details: [
      'LLM selection and customization',
      'Deployment infrastructure setup',
      'Monitoring and feedback systems',
      'Performance optimization',
      'Scalability planning'
    ]
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Solution Design',
    description: 'Develop tailored AI applications specific to your organization\'s unique challenges.',
    icon: 'custom-ai-icon',
    details: [
      'Problem definition and scoping',
      'Algorithm selection and design',
      'Model training and validation',
      'Integration with existing systems',
      'Testing and quality assurance'
    ]
  },
  {
    id: 'infrastructure',
    title: 'AI Infrastructure Optimization',
    description: 'Enhance your AI infrastructure for improved performance, scalability, and cost efficiency.',
    icon: 'infrastructure-icon',
    details: [
      'Infrastructure assessment',
      'Hardware/software optimization',
      'Cloud vs. on-premises strategy',
      'Cost optimization',
      'Scalability planning'
    ]
  }
];

// Helper function to get course by ID
export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};

// Helper function to get consulting service by ID
export const getServiceById = (id) => {
  return consultingServices.find(service => service.id === id);
};

export default {
  courses,
  consultingServices,
  getCourseById,
  getServiceById
};