<template>
  <course-template
    courseTitle="Bedrock Data Science"
    heroImage="/public/data-science-hero.jpg"
    heroTagline="Build a comprehensive foundation in programming, statistics, and mathematics for advanced data science and machine learning."
    overviewTitle="Advanced Data Science"
    overviewParagraph1="lays the groundwork for a successful journey into data science and machine learning by building fluency in two critical areas: Python programming and mathematical foundations. Designed to take students from basic to advanced Python skills, it covers essential programming concepts including data structures, object-oriented programming, and the use of powerful data analysis libraries that form the backbone of modern data workflows."
    overviewParagraph2="Alongside coding, students will dive into the mathematics that drives machine learning, exploring key topics in statistics, calculus, and linear algebra. The course emphasizes a strong connection between theory and application through hands-on coding exercises, challenging homework, and supplementary tutorials. Weekly mentorship sessions create a collaborative learning environment, offering personalized support and guided practice."
    overviewParagraph3="By the end of the course, students will have developed both the technical proficiency and analytical mindset needed to succeed in advanced machine learning courses and tackle real-world, data-driven challenges. Whether you're aiming for research or professional development, this course is a crucial first step toward becoming a confident and capable data scientist."
    weeksDuration="12"
    hoursDuration="36"
    projectsCount="6"
    curriculumIntro="The Graduate Data Science curriculum (Autumn-24) provides a comprehensive and rigorous exploration of programming fundamentals and mathematical concepts essential for advanced machine learning and AI applications."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our comprehensive Data Science program, designed for graduate students and professionals seeking foundational skills for advanced AI and machine learning."
    prerequisitesDescription="Some programming experience is helpful but not required. Basic understanding of mathematical concepts is beneficial for grasping more advanced topics."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will master a comprehensive suite of data science tools and libraries used in research and industry:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and build the essential foundation for advanced machine learning and AI research."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';

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
      "Lambda Functions",
      "Decorators",
      "Mentoring Session: Built-ins: zip() and enumerate()"
    ]
  },
  {
    title: "Classes",
    lessons: [
      "Class and Object Basics",
      "Attributes and Methods",
      "Polymorphism",
      "Dunder Methods: __init__(), __call__, __getitem__, __setitem__, __len__(), __repr__(), __str__()"
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
    title: "Notations and Linear Algebra",
    lessons: [
      "Basic Math Notations",
      "Greek Letters: Summation, Product, Mean",
      "Logarithms and Exponents",
      "Basic Derivatives",
      "Systems of Equations",
      "Vectors: Interpretation, Addition, Subtraction, Dot Product, Cosine Similarity",
      "Matrices: Types, Accessing, Multiplication, Transpose, Inverse",
      "Mentoring Session: Vector Span and Basis"
    ]
  },
  {
    title: "Probability and Statistics",
    lessons: [
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
  },
  {
    name: "Dr. Ignacio Becker",
    role: "Director of Data Science",
    bio: "Specializes in statistical modeling and advanced data analysis techniques. Teaches graduate-level courses on mathematical methods for data science and advanced programming concepts.",
    imagePath: ignacioImage,
    website: "#"
  }
];

const prerequisites = [
  "Familiarity with basic programming concepts",
  "College-level mathematics background",
  "Understanding of basic probability and statistics",
  "Analytical thinking skills",
  "Access to a computer with internet connection"
];

const formatItems = [
  "Rigorous theoretical lectures with mathematical derivations",
  "Advanced programming assignments and algorithm implementations",
  "In-depth hands-on workshops for practical application",
  "Weekly mentorship sessions with industry professionals",
  "Research-focused computational lab sessions",
  "Team-based projects applying data science to real-world problems"
];

const toolsItems = [
  "Python programming and advanced Jupyter techniques",
  "Data analysis with Pandas, NumPy, and SciPy",
  "Advanced data visualization libraries",
  "Statistical analysis frameworks",
  "Version control and collaborative coding",
  "Data pipeline construction",
  "Computational optimization techniques"
];

const certificationItems = [
  "Graduate-level certification in Data Science",
  "Industry-recognized credential for professional advancement",
  "Comprehensive portfolio of advanced data analysis projects",
  "Access to System3 research network and collaboration opportunities",
  "Invitation to data science seminars and workshops",
  "Priority consideration for advanced course placement"
];
</script>