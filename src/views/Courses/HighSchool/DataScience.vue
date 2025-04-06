<template>
  <course-template
    courseTitle="Bedrock Data Science"
    heroImage="/public/data-science-hero.jpg"
    heroTagline="Master the fundamentals of data analysis, statistics, and visualization needed to build a strong AI foundation."
    overviewTitle="Data Science for High School"
    overviewParagraph1="is a beginner-friendly course designed to build a strong foundation in both Python programming and the core mathematical concepts essential for data science and machine learning. Students will begin by mastering programming fundamentals—such as data structures, functions, classes, and debugging—before moving into foundational topics in statistics, calculus, and linear algebra."
    overviewParagraph2="Emphasizing a hands-on, practical approach, the course integrates popular Python libraries used in real-world data analysis. Students will reinforce their learning through interactive exercises, homework, and supplementary tutorials, all supported by weekly mentoring sessions that offer personalized guidance and collaborative practice. A team-based capstone project provides the opportunity to apply newly acquired skills to solve meaningful, real-world Python challenges."
    overviewParagraph3="By the end of the course, students will have both the technical fluency and mathematical intuition needed to tackle introductory machine learning coursework and embark on independent data analytics projects with confidence. It's the perfect launchpad for aspiring data scientists and AI enthusiasts."
    weeksDuration="12"
    hoursDuration="36"
    projectsCount="6"
    curriculumIntro="The High School Data Science curriculum (Autumn-24) introduces essential programming and mathematical concepts through practical applications and intuitive explanations. We focus on building strong foundations with appropriate depth for high school students."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our comprehensive Data Science program, designed for high school students interested in AI and data science."
    prerequisitesDescription="Basic programming knowledge is helpful but not required. The course includes Python fundamentals for beginners. A background in mathematics or statistics is beneficial but not essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will build a comprehensive data science toolkit with industry-standard technologies:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and build the foundational skills for success in the world of AI and data analytics."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';

const modules = [
  {
    title: "Python Essentials",
    lessons: [
      "Data Types & Type Conversion",
      "Variables",
      "Operators: Arithmetic, Assignment, Comparison, Logical/Conditional",
      "Flow Control"
    ]
  },
  {
    title: "Lists and Loops",
    lessons: [
      "Lists: Creation, Indexing, Slicing, Mutability",
      "List Methods, Aliasing vs Copying",
      "Common Sequence and Comparison Operations",
      "Loops: for and while",
      "Mentoring Session: Iterables, break and continue"
    ]
  },
  {
    title: "Data Structures and Pythonic Syntax",
    lessons: [
      "Tuples and Dictionaries",
      "List Comprehension",
      "Dictionary Comprehension",
      "Mentoring Session: Sets"
    ]
  },
  {
    title: "Functions and Function Scope",
    lessons: [
      "Function Definition and Intuition",
      "Argument Types: Keyword, Positional, Default",
      "Variable-Length Arguments: *args and **kwargs",
      "Function Scope and Namespaces",
      "Mentoring Session: Built-ins: zip() and enumerate()"
    ]
  },
  {
    title: "Classes",
    lessons: [
      "Class and Object Basics",
      "Attributes and Methods",
      "Polymorphism",
      "Dunder Methods: __init__()"
    ]
  },
  {
    title: "Strings, Files, and Regular Expressions",
    lessons: [
      "String Operations and Methods",
      "File Handling: Reading and Writing",
      "Regular Expressions",
      "Mentoring Session: Third-Party Libraries"
    ]
  },
  {
    title: "NumPy",
    lessons: [
      "Creating Arrays (ndarray)",
      "Dimensions and Shapes",
      "Common Methods: zeros(), ones(), arange(), vstack()",
      "Indexing, Slicing, Boolean Masking, Reshaping",
      "Mentoring Session: Broadcasting"
    ]
  },
  {
    title: "Pandas",
    lessons: [
      "Series and DataFrames",
      "Indexing, Multi-Indexing",
      ".loc[] and .iloc[]",
      "groupby()"
    ]
  },
  {
    title: "Matplotlib",
    lessons: [
      "Introduction to EDA",
      "Common Visualization Types",
      "Creating Plots with Matplotlib"
    ]
  },
  {
    title: "Notations, Linear Algebra, Probability and Statistics",
    lessons: [
      "Basic Math Notations",
      "Greek Letters: Summation, Product, Mean",
      "Logarithms and Exponents",
      "Basic Derivatives",
      "Systems of Equations",
      "Vectors: Interpretation, Addition, Subtraction, Dot Product",
      "Matrices: Types, Accessing, Multiplication, Transpose, Inverse",
      "Random Variables: Definition, Motivation, Types",
      "Point Estimates",
      "Central Tendency: Mean, Median, Mode",
      "Spread: Variance and Standard Deviation",
      "Histograms and Confidence Intervals",
      "Distributions: Uniform, Binomial, Normal"
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
  }
];

const prerequisites = [
  "No prior coding experience needed",
  "Basic algebra and statistics concepts",
  "Curiosity and commitment to learn"
];

const formatItems = [
  "Live virtual sessions with interactive Q&A",
  "Self-paced learning modules with hands-on exercises",
  "Real-world projects with guided datasets",
  "Mentor-guided review sessions and code reviews",
  "Team-based capstone project"
];

const toolsItems = [
  "Python programming and Jupyter Notebooks",
  "Data analysis with Pandas and NumPy",
  "Data visualization with Matplotlib",
  "Basic statistical analysis",
  "Collaborative coding environments"
];

const certificationItems = [
  "High School Data Science certification",
  "Digital certificate for college applications",
  "Showcase of completed projects in a personal portfolio",
  "Access to System3 student network and mentorship program",
  "Continued learning resources and community access"
];
</script>