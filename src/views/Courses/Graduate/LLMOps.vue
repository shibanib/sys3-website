<template>
  <course-template
    courseTitle="LLMOps"
    heroImage="/public/course-data-science.jpg"
    heroTagline="Master the engineering, deployment, and operation of large language models in production environments."
    overviewTitle="Advanced LLMOps"
    overviewParagraph1="is a comprehensive graduate-level course focused on the technical infrastructure, optimization techniques, and operational practices required to successfully deploy and manage large language models at scale. This course bridges the gap between research and production-ready AI systems."
    overviewParagraph2="Through a combination of in-depth technical lectures, hands-on implementation, and real-world case studies, you'll learn advanced techniques for model optimization, deployment architectures, monitoring systems, and operational best practices for LLM-based applications in production environments."
    overviewParagraph3="By the end of this program, students will be capable of designing, implementing, and maintaining robust, efficient, and responsible LLM systems that can serve real-world applications at scale with high reliability and performance."
    weeksDuration="12"
    hoursDuration="36"
    projectsCount="7"
    curriculumIntro="The Graduate LLMOps curriculum (Autumn-24) provides comprehensive coverage of the technical and operational aspects of deploying large language models in production, focusing on scalability, efficiency, and reliability."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our advanced LLMOps program, designed for graduate students, engineers, and professionals working with large language models in production settings."
    prerequisitesDescription="Strong background in software engineering, machine learning operations, and cloud infrastructure is required. Prior experience with Python programming and basic understanding of deep learning concepts is essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will master advanced tools and frameworks for deploying and managing large language models in production:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and develop expertise in deploying and managing large language models at scale."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';

const modules = [
  {
    title: "Virtual Environments and Virtual Machines",
    lessons: [
      "Virtual Machines",
      "Virtual Environments"
    ]
  },
  {
    title: "Containers - 1",
    lessons: [
      "What is a Container",
      "Why use Containers",
      "How to use Containers"
    ]
  },
  {
    title: "Containers - 2",
    lessons: [
      "Containers in Architecture: Microservices vs. Monolithic",
      "Implementing Containers as Microservices"
    ]
  },
  {
    title: "Container Workflow",
    lessons: [
      "Data Labeling",
      "Data Versioning"
    ]
  },
  {
    title: "Data Labeling and Data Versioning",
    lessons: [
      "Data Labeling",
      "Data Versioning"
    ]
  },
  {
    title: "LLM Tools and Agents: RAG 1",
    lessons: [
      "BERT + GPT",
      "InstructGPT (ChatGPT)",
      "Prompt Engineering",
      "RAG"
    ]
  },
  {
    title: "LLM Tools and Agents: RAG 2",
    lessons: [
      "Advanced RAG",
      "Pre-Retrieval Optimization",
      "Retriever Optimization",
      "Post-Retrieval Optimization",
      "Self-RAG",
      "Corrective-RAG",
      "Agents",
      "RAG - Evaluations"
    ]
  },
  {
    title: "Fine Tuning and LORA - 1",
    lessons: [
      "Training Cycle – LLM",
      "Instruction-tuning",
      "Full Parameter",
      "Parameter Efficient Fine Tuning"
    ]
  },
  {
    title: "Fine Tuning and LORA - 2",
    lessons: [
      "LoRA",
      "QLoRA"
    ]
  },
  {
    title: "Model Compression and Distillation",
    lessons: [
      "Knowledge distillation",
      "Compression Technique: Pruning"
    ]
  },
  {
    title: "Advanced training workflows",
    lessons: [
      "Experiment Tracking",
      "Vertex AI, Serverless Training",
      "Tutorial: Serverless Training",
      "Multi GPU Training"
    ]
  },
  {
    title: "Cloud Function and Cloud Run",
    lessons: [
      "Serverless: Cloud Functions",
      "Serverless: Cloud Runs"
    ]
  },
  {
    title: "ML Workflows with Vertex AI",
    lessons: [
      "Serverless: Model Deployment with Vertex AI Online Prediction",
      "ML Workflow Management",
      "Vertex AI Pipelines"
    ]
  },
  {
    title: "Automating Software Development",
    lessons: [
      "Linters and formatters",
      "Testing",
      "Automating workflows",
      "Continuous Integration"
    ]
  },
  {
    title: "App design, setup and code organization",
    lessons: [
      "App Design",
      "Screenflow & Wireframes",
      "Solution Architecture",
      "Technical Architecture",
      "Setup & Code Organization"
    ]
  },
  {
    title: "API and Frontend",
    lessons: [
      "APIs",
      "Frontend (HTML, CSS and Javascript)",
      "Frontend Frameworks",
      "Frontend App (React)"
    ]
  },
  {
    title: "Deployment: Ansible",
    lessons: [
      "Steps and Automation",
      "Ansible commands",
      "Playbooks",
      "Inventory",
      "Fact Gathering",
      "Plays",
      "Tasks",
      "Modules"
    ]
  },
  {
    title: "Scaling: Kubernetes",
    lessons: [
      "Introduction to Kubernetes",
      "Deploying a Kubernetes Cluster",
      "Advantages of using Kubernetes"
    ]
  },
  {
    title: "CI/CD",
    lessons: [
      "Continuous Integration",
      "Continuous Deployment",
      "CI/CD Provider and Tools"
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
    bio: "Expert in deploying and optimizing large language models in production environments. Specializes in infrastructure for AI systems and the operational aspects of maintaining efficient, scalable LLM systems.",
    imagePath: ignacioImage,
    website: "#"
  }
];

const prerequisites = [
  "Strong software engineering background",
  "Experience with cloud infrastructure (AWS, GCP, or Azure)",
  "Proficiency in Python programming",
  "Familiarity with Docker, Kubernetes, or similar orchestration systems",
  "Understanding of ML deployment concepts",
  "Basic knowledge of deep learning and transformer models"
];

const formatItems = [
  "Technical lectures on production LLM architecture",
  "Hands-on infrastructure setup and configuration",
  "Case studies of real-world LLM deployments",
  "Performance optimization workshops",
  "Collaborative system design sessions",
  "End-to-end LLM application deployment projects",
  "Industry guest lectures from MLOps leaders"
];

const toolsItems = [
  "Cloud infrastructure automation tools",
  "LLM inference optimization frameworks",
  "Distributed training platforms",
  "Monitoring and observability systems",
  "Model serving frameworks (TorchServe, ONNX Runtime, TensorRT)",
  "Vector databases and retrieval systems",
  "CI/CD pipelines for LLM applications"
];

const certificationItems = [
  "Graduate-level certification in Advanced LLMOps",
  "Production-ready LLM system portfolio",
  "Infrastructure architecture and optimization showcase",
  "Access to System3 engineering network and collaboration opportunities",
  "Priority consideration for LLMOps engineering positions",
  "Advanced course completion recognized by industry partners"
];
</script>