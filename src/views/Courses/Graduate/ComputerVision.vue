<template>
  <course-template
    courseTitle="Computer Vision"
    heroImage="/public/course-cv.jpg"
    heroTagline="Master advanced computer vision algorithms, deep learning architectures, and state-of-the-art visual understanding systems."
    overviewTitle="Advanced Computer Vision"
    overviewParagraph1="is a rigorous graduate-level course exploring cutting-edge techniques in visual perception systems. This course covers both classical computer vision algorithms and modern deep learning approaches that have revolutionized the field."
    overviewParagraph2="Through a combination of theoretical lectures, research paper discussions, and challenging implementation projects, you'll gain expertise in sophisticated visual understanding systems. The course emphasizes mathematical foundations, algorithmic design, and practical implementation of research-grade computer vision systems."
    overviewParagraph3="By the end of this program, students will be capable of implementing state-of-the-art vision systems, conducting original research, and applying advanced computer vision techniques to solve complex real-world problems."
    weeksDuration="14"
    hoursDuration="42"
    projectsCount="8"
    curriculumIntro="The Graduate Computer Vision curriculum (Autumn-24) provides comprehensive coverage of advanced computer vision techniques, from classical methods to cutting-edge deep learning architectures being used in research and industry today."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our advanced Computer Vision program, designed for graduate students, researchers, and professionals seeking expertise in the field."
    prerequisitesDescription="Strong background in linear algebra, calculus, probability, and programming is required. Prior experience with machine learning concepts and Python programming is essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will master advanced computer vision frameworks and tools used in research and industry:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and develop expertise in advanced computer vision algorithms and systems."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';

const modules = [
  {
    title: "Neural Networks - 1",
    lessons: [
      "Review of basic concepts - Linear to Logistic Regression",
      "Perceptron - Single neuron network",
      "Multi-Layer Perceptron (MLP)"
    ]
  },
  {
    title: "Neural Networks - 2",
    lessons: [
      "Anatomy of a NN",
      "Design choices",
      "Activation function",
      "Loss function",
      "Output units",
      "Architecture",
      "Gradient Descent",
      "Stochastic Gradient Descent",
      "Backpropagation"
    ]
  },
  {
    title: "Neural Networks - 3",
    lessons: [
      "Challenges in Optimization",
      "Momentum",
      "Adaptive Learning Rate",
      "Adam",
      "Details about the Adam Optimizer",
      "Bias Correction in Adam"
    ]
  },
  {
    title: "Neural Networks - 4",
    lessons: [
      "Overfitting",
      "Regularization of NN",
      "Norm Penalties",
      "Early Stopping",
      "Data Augmentation",
      "Dropout",
      "Batch Normalization",
      "Weight Normalization"
    ]
  },
  {
    title: "CNN - 1",
    lessons: [
      "CNN basic ideas",
      "Kernels, Dimensions, Number of parameters",
      "What activation functions do we use?",
      "What is pooling?"
    ]
  },
  {
    title: "CNN - 2",
    lessons: [
      "Building a CNN",
      "Training a CNN",
      "Regularization for CNN"
    ]
  },
  {
    title: "CNN - 3",
    lessons: [
      "Weights and feature maps visualization",
      "What are saliency maps?",
      "Class Model Visualizations",
      "Saliency Maps Methods:",
      "Gradient Based Backpropagation Algorithm",
      "Saliency Maps with Deconvolutional Networks",
      "Guided Backpropagation Algorithm",
      "Class Activation Map (CAM)",
      "Grad-CAM and Guided Grad-CAM"
    ]
  },
  {
    title: "CNN - 4",
    lessons: [
      "SOTA",
      "LeNet",
      "VGG",
      "GoogleNet",
      "ResNet",
      "MobileNet",
      "Transfer Learning",
      "Motivation and Basic Idea",
      "Transfer Learning Strategies"
    ]
  }
];

const instructors = [
  {
    name: "Dr. Pavlos Protopapas",
    role: "CEO and Founder",
    bio: "Pavlos is an educator and researcher. As an educator, Pavlos is teaching CS109A, CS109B, introduction to data science and advanced topics of data science. He also teaches a course in MLOps. In the past he has taught capstone courses in data science and computational science, introduction to deep reinforcement learning, and planning a course in physics informed neural networks.",
    imagePath: pavlosImage,
    website: "https://seas.harvard.edu/person/pavlos-protopapas"
  },
  {
    name: "Dr. Ignacio Becker",
    role: "Head of System3 Consulting",
    bio: "Leading researcher in advanced computer vision with publications in CVPR, ICCV, and ECCV. Previously led computer vision teams at major research labs, specializing in 3D vision and neural rendering.",
    imagePath: ignacioImage,
    website: "#"
  }
];

const prerequisites = [
  "Advanced linear algebra and multivariate calculus",
  "Probability theory and statistical inference",
  "Proficiency in Python and PyTorch/TensorFlow",
  "Prior experience with machine learning concepts",
  "Fundamentals of optimization techniques",
  "Comfort with reading and implementing research papers"
];

const formatItems = [
  "Rigorous theoretical lectures covering mathematical foundations",
  "Computer vision research paper reading and discussion seminars",
  "Advanced programming assignments implementing paper algorithms",
  "Collaborative research projects following conference paper format",
  "Industry guest lectures from leading CV researchers",
  "Computing resource access for large-scale vision experiments",
  "Research mentorship from experts in specialized vision domains"
];

const toolsItems = [
  "PyTorch and TensorFlow for deep learning research",
  "Advanced computer vision libraries (OpenCV, Kornia)",
  "CUDA programming for GPU-accelerated vision algorithms",
  "Distributed training frameworks for large vision models",
  "Research-grade datasets (COCO, ImageNet, ADE20K, Kinetics)",
  "3D vision tools and frameworks (Open3D, PyTorch3D)",
  "Experiment tracking and hyperparameter optimization tools"
];

const certificationItems = [
  "Graduate-level certification in Advanced Computer Vision",
  "Research portfolio showcasing implementation of cutting-edge techniques",
  "Opportunity to contribute to published vision research papers",
  "Access to System3 research network and collaboration opportunities",
  "Invitation to computer vision research seminars and workshops",
  "Priority consideration for computer vision research positions"
];
</script>