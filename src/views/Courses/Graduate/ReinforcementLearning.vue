<template>
  <course-template
    courseTitle="Reinforcement Learning"
    heroImage="/public/course-ml.jpg"
    heroTagline="Master advanced reinforcement learning algorithms for complex decision-making systems and intelligent agents."
    overviewTitle="Advanced Reinforcement Learning"
    overviewParagraph1="is a rigorous graduate-level course that explores the theoretical foundations and cutting-edge approaches in decision-making systems that learn through interaction. This course covers both classical RL algorithms and modern deep reinforcement learning methods."
    overviewParagraph2="Through a combination of in-depth lectures, research paper discussions, and challenging implementation projects, you'll gain expertise in sophisticated RL frameworks, multi-agent systems, and state-of-the-art algorithms. The course emphasizes mathematical rigor, algorithmic design, and practical implementation in complex environments."
    overviewParagraph3="By the end of this program, students will be capable of implementing advanced RL systems, conducting original research in the field, and applying these techniques to solve complex sequential decision problems in industry and research settings."
    weeksDuration="14"
    hoursDuration="42"
    projectsCount="7"
    curriculumIntro="The Graduate Reinforcement Learning curriculum (Autumn-24) provides comprehensive coverage of advanced reinforcement learning techniques, from fundamental theory to cutting-edge algorithms being used in research and applications today."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our advanced Reinforcement Learning program, designed for graduate students, researchers, and professionals seeking expertise in decision-making AI systems."
    prerequisitesDescription="Strong background in calculus, linear algebra, probability theory, and programming is required. Prior experience with machine learning concepts and Python programming is essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will master advanced reinforcement learning frameworks and tools used in research and industry:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and develop expertise in advanced reinforcement learning algorithms and intelligent agent design."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';

const modules = [
  {
    title: "Introduction to Reinforcement Learning and Markov Decision Process",
    lessons: [
      "The Basic Intuition",
      "Applications of RL",
      "Elements of RL",
      "Markov Decision Process",
      "Tasks, Policy and Value Functions"
    ]
  },
  {
    title: "Bellman equation, Optimality and Recursive Algorithms",
    lessons: [
      "Bellman Expectation Equation",
      "Bellman Optimality Equation",
      "Policy Iteration",
      "Policy Evaluation",
      "Policy Improvements",
      "Value Iteration"
    ]
  },
  {
    title: "Model free learning and Q-Learning",
    lessons: [
      "Temporal Difference (TD) Learning",
      "Motivation",
      "TD Prediction",
      "TD Control",
      "SARSA",
      "Q - Learning"
    ]
  },
  {
    title: "Deep Q Learning",
    lessons: [
      "Deep Q - Networks",
      "Training",
      "Issues",
      "Double Deep Q - Networks",
      "Training",
      "Issues"
    ]
  },
  {
    title: "Policy Gradient Methods",
    lessons: [
      "Policy Gradient Methods",
      "Policy Objective Functions",
      "Policy Optimization",
      "Finite Differences Policy Gradient Method",
      "Policy Gradient Theorem",
      "Policy Parameterization flavors",
      "Monte-Carlo Policy Gradient",
      "REINFORCE algorithm",
      "REINFORCE algorithm with baseline",
      "Actor-Critic Policy Gradient Method"
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
    bio: "Researcher in reinforcement learning with expertise in practical applications of RL algorithms. Specializes in deep reinforcement learning and multi-agent systems for complex decision-making problems.",
    imagePath: ignacioImage,
    website: "#"
  }
];

const prerequisites = [
  "Advanced calculus and linear algebra",
  "Strong background in probability theory and statistics",
  "Proficient Python programming skills",
  "Experience with machine learning concepts",
  "Familiarity with neural networks and deep learning",
  "Comfort with reading and implementing research papers"
];

const formatItems = [
  "Rigorous theoretical lectures covering mathematical foundations",
  "RL research paper reading and discussion seminars",
  "Advanced programming assignments implementing complex algorithms",
  "Collaborative research projects following conference paper format",
  "Industry guest lectures from leading RL researchers",
  "Computing resource access for large-scale RL experiments",
  "Research mentorship from experts in specialized RL domains"
];

const toolsItems = [
  "PyTorch and TensorFlow for deep RL implementations",
  "Advanced RL frameworks (Stable Baselines3, RLlib)",
  "Simulation environments (MuJoCo, DeepMind Control Suite)",
  "Distributed training for sample-efficient learning",
  "Experiment tracking and hyperparameter optimization",
  "Custom RL environments for specialized research",
  "High-performance computing for large-scale experiments"
];

const certificationItems = [
  "Graduate-level certification in Advanced Reinforcement Learning",
  "Research portfolio showcasing implementation of cutting-edge RL techniques",
  "Opportunity to contribute to published RL research papers",
  "Access to System3 research network and collaboration opportunities",
  "Invitation to reinforcement learning research seminars and workshops",
  "Priority consideration for RL research positions and PhD recommendations"
];
</script>