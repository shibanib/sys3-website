<template>
  <course-template
    courseTitle="Natural Language Processing"
    heroImage="/public/course-data-science.jpg"
    heroTagline="Master advanced language understanding systems and cutting-edge NLP architectures for sophisticated text processing."
    overviewTitle="Advanced Natural Language Processing"
    overviewParagraph1="is a rigorous graduate-level course that explores the theoretical foundations and state-of-the-art approaches in computational linguistics and language understanding. This course covers both classical statistical NLP and modern deep learning methods."
    overviewParagraph2="Through a combination of in-depth lectures, research paper discussions, and challenging implementation projects, you'll gain expertise in sophisticated language models, semantic analysis, and multilingual NLP systems. The course emphasizes mathematical rigor, algorithmic design, and practical implementation."
    overviewParagraph3="By the end of this program, students will be capable of implementing state-of-the-art NLP systems, conducting original research in language processing, and applying advanced techniques to solve complex linguistic challenges in industry and research settings."
    weeksDuration="14"
    hoursDuration="42"
    projectsCount="7"
    curriculumIntro="The Graduate NLP curriculum (Autumn-24) provides comprehensive coverage of advanced natural language processing techniques, from classical methods to cutting-edge transformer architectures being used in research today."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our advanced Natural Language Processing program, designed for graduate students, researchers, and professionals seeking expertise in computational linguistics and language AI."
    prerequisitesDescription="Strong background in linear algebra, probability theory, and programming is required. Prior experience with machine learning concepts and Python programming is essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will master advanced NLP frameworks and tools used in research and industry:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and develop expertise in advanced natural language processing techniques and language models."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';

const modules = [
  {
    title: "Intro to Language Model and Traditional Language Modeling",
    lessons: [
      "Natural Language Processing",
      "Language Modeling",
      "Unigrams",
      "Bigrams",
      "TF-IDF",
      "Neural Networks for Language Modeling"
    ]
  },
  {
    title: "RNNs",
    lessons: [
      "Motivation behind RNNs",
      "Introduction to RNN",
      "Training in RNN",
      "Flavors of RNN",
      "Bidirectional RNNs",
      "Deep RNNs"
    ]
  },
  {
    title: "GRUs and LSTMs",
    lessons: [
      "Shortcomings of RNN",
      "Gated Recurrent Unit",
      "GRU ++",
      "Long short-term memory",
      "Applications of LSTM"
    ]
  },
  {
    title: "Word Embeddings",
    lessons: [
      "Training of Word Embeddings",
      "Skip-Gram: Predict Surrounding Words",
      "Negative Sampling",
      "A brief discussion on word2vec"
    ]
  },
  {
    title: "ELMo",
    lessons: [
      "ELMO",
      "Bidirectional two-layer LSTM Language Model",
      "Character CNN",
      "ELMo embeddings and how we use them"
    ]
  },
  {
    title: "Seq2Seq and Attention",
    lessons: [
      "Sequence 2 Sequence",
      "Introduction",
      "Training",
      "Inference",
      "Sequence 2 Sequence with Attention"
    ]
  },
  {
    title: "Transformers",
    lessons: [
      "Motivation for Attention",
      "Limitations of RNNs",
      "Attention Basics",
      "Issues with spatial attention models",
      "Using cosine similarity as a tool for contextual relations",
      "Self-Attention",
      "Building blocks of Transformers and BERT",
      "Multi-head attention block",
      "Positional Encoding"
    ]
  },
  {
    title: "BERT & GPT",
    lessons: [
      "BERT",
      "Practical problems in Language Models",
      "GPT",
      "Hugging Face"
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
    bio: "Leading researcher in natural language processing with deep expertise in transformer architectures and advanced text processing systems. Specializes in combining NLP with other modalities for multimodal learning.",
    imagePath: ignacioImage,
    website: "#"
  }
];

const prerequisites = [
  "Advanced linear algebra and probability theory",
  "Strong programming skills in Python",
  "Experience with machine learning concepts",
  "Familiarity with neural networks and deep learning",
  "Basic linguistics knowledge (helpful but not required)",
  "Comfort with reading and implementing research papers"
];

const formatItems = [
  "Rigorous theoretical lectures covering mathematical foundations",
  "NLP research paper reading and discussion seminars",
  "Advanced programming assignments implementing paper algorithms",
  "Collaborative research projects following conference paper format",
  "Industry guest lectures from leading NLP researchers",
  "Computing resource access for large language model experiments",
  "Research mentorship from experts in specialized NLP domains"
];

const toolsItems = [
  "PyTorch and Hugging Face Transformers",
  "Advanced NLP libraries (spaCy, NLTK, AllenNLP)",
  "Large language model fine-tuning frameworks",
  "Distributed training for NLP models",
  "Research-grade datasets and benchmarks (GLUE, SuperGLUE)",
  "Evaluation frameworks for language generation",
  "Knowledge graph and semantic parsing tools"
];

const certificationItems = [
  "Graduate-level certification in Advanced Natural Language Processing",
  "Research portfolio showcasing implementation of cutting-edge NLP techniques",
  "Opportunity to contribute to published NLP research papers",
  "Access to System3 research network and collaboration opportunities",
  "Invitation to NLP research seminars and workshops",
  "Priority consideration for language AI research positions"
];
</script>