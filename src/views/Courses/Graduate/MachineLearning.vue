<template>
  <course-template
    courseTitle="Machine Learning"
    heroImage="/public/course-ml.jpg"
    heroTagline="Advanced algorithms and deep learning techniques for cutting-edge machine learning applications."
    overviewTitle="Advanced Machine Learning"
    overviewParagraph1="is a rigorous graduate-level course that delves deep into the theoretical foundations and advanced applications of machine learning. The course is designed for students with strong backgrounds in mathematics, statistics, and programming."
    overviewParagraph2="Through a combination of theoretical lectures, research paper discussions, and challenging projects, you'll explore the mathematical underpinnings of machine learning algorithms, advanced optimization techniques, and state-of-the-art model architectures. The course covers both classical machine learning approaches and cutting-edge deep learning methods."
    overviewParagraph3="By the end of this module, students will be able to implement sophisticated machine learning systems, understand current research directions, and contribute to the evolving field of machine learning with novel approaches to complex problems."
    weeksDuration="14"
    hoursDuration="42"
    projectsCount="8"
    curriculumIntro="The Graduate Machine Learning curriculum (Autumn-24) provides a comprehensive and rigorous exploration of advanced machine learning concepts, mathematical foundations, and cutting-edge techniques used in research and industry."
    :hasTracks="false"
    :highSchoolModules="modules"
    :instructors="instructors"
    detailsIntro="Everything you need to know about our advanced Machine Learning program, designed for graduate students and professionals seeking expertise in the field."
    prerequisitesDescription="Strong background in mathematics, statistics, and programming is required. Proficiency in calculus, linear algebra, probability theory, and Python programming is essential."
    :prerequisites="prerequisites"
    :formatItems="formatItems"
    toolsDescription="Students will master advanced machine learning tools and frameworks used in research and industry:"
    :toolsItems="toolsItems"
    :certificationItems="certificationItems"
    ctaText="Join our next cohort and develop expertise in advanced machine learning methods and applications."
  />
</template>

<script setup>
import CourseTemplate from '../CourseTemplate.vue';
import pavlosImage from '@/assets/images/people/PavlosProtopapas.jpeg';
import ignacioImage from '@/assets/images/people/IgnacioBecker.png';

const modules = [
  {
    title: "Introduction to Regression",
    lessons: [
      "Statistical Modeling - kNN",
      "Model Fitness - How does the model perform predictions",
      "Comparison of 2 models - How do we choose from 2 different models"
    ]
  },
  {
    title: "Linear Regression and Multi-Linear Regression",
    lessons: [
      "Linear Models – The Math behind Linear Regression",
      "Multi-linear regression",
      "Interpreting Model Parameters",
      "Scaling",
      "Collinearity",
      "Qualitative Predictors",
      "Residual Analysis"
    ]
  },
  {
    title: "Polynomial Regression and Model Selection",
    lessons: [
      "Overfitting and Underfitting",
      "Assumptions of Linear Regression",
      "Interaction Effects in Regression Models",
      "Polynomial Regression",
      "Model Selection Techniques",
      "Exhaustive",
      "Greedy",
      "Fine-tuning hyper-parameters",
      "Cross-Validation"
    ]
  },
  {
    title: "Bias-Variance Tradeoff and Regularization",
    lessons: [
      "Generalization Error and Bias Variance Tradeoff",
      "Regularization Techniques",
      "Lasso",
      "Ridge",
      "Comparing Regularization Techniques"
    ]
  },
  {
    title: "Inference, Hypothesis Testing and Predictive Intervals",
    lessons: [
      "Assessing the accuracy of the coefficient estimates",
      "Confidence intervals",
      "Bootstrapping",
      "Evaluating Significance of Predictors",
      "Does the outcome depend on the predictors",
      "Hypothesis Testing",
      "Confidence intervals"
    ]
  },
  {
    title: "Logistic Regression",
    lessons: [
      "What is Classification",
      "Why not Linear Regression",
      "Estimating the Simple Logistic Model",
      "Inference"
    ]
  },
  {
    title: "Multiclass Logistic Regression, Regularization and Metrics",
    lessons: [
      "Multiple Logistic Regression",
      "Classification Decision Boundaries",
      "Multiclass Classification",
      "Classification Metrics"
    ]
  },
  {
    title: "Decision Trees - Classification",
    lessons: [
      "Decision Trees",
      "Intuition",
      "Predictions",
      "Splitting Criteria",
      "Classification Error",
      "Gini Index",
      "Entropy",
      "Stopping Conditions"
    ]
  },
  {
    title: "Decision Trees – Pruning and Regression",
    lessons: [
      "Regression – Splitting Criteria",
      "Numerical vs Categorical Attributes",
      "Pruning – Stopping Conditions Drawback"
    ]
  },
  {
    title: "Introduction to Bagging",
    lessons: [
      "Ensemble Learning and Bootstrapping",
      "Bagging",
      "Out-of-bag Error"
    ]
  },
  {
    title: "Random Forest",
    lessons: [
      "Random Forest",
      "Variable Importance",
      "Mean Decrease in Impurity",
      "Permutation Importance",
      "LIME, SHAP values (lab and reading)",
      "Missing Data",
      "Data Imbalance"
    ]
  },
  {
    title: "Boosting and Gradient Boosting",
    lessons: [
      "Introduction to boosting",
      "Gradient Boosting",
      "Mathematical Formulation - Gradient Boosting"
    ]
  },
  {
    title: "Adaboost",
    lessons: [
      "Adaboost",
      "Final Thoughts on Boosting",
      "Mathematical Formulation - Adaboost"
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
    bio: "Specializes in deep learning architectures for computer vision and multimodal learning. Has contributed to fundamental advances in representation learning and neural architecture design.",
    imagePath: ignacioImage,
    website: "#"
  }
];

const prerequisites = [
  "Advanced calculus and linear algebra",
  "Probability theory and statistical inference",
  "Advanced Python programming skills",
  "Prior experience with data science and basic ML concepts",
  "Experience with at least one ML library (scikit-learn, TensorFlow, or PyTorch)",
  "Comfort with reading and implementing research papers"
];

const formatItems = [
  "Rigorous theoretical lectures with mathematical derivations",
  "Research paper reading and discussion seminars",
  "Advanced programming assignments and algorithm implementations",
  "Collaborative research projects mimicking conference-style work",
  "Industry guest lectures from leading ML researchers",
  "Research-focused computational lab sessions",
  "Individual and group presentation of technical papers"
];

const toolsItems = [
  "Advanced PyTorch and TensorFlow implementations",
  "Custom neural network architecture design",
  "Distributed training frameworks (Horovod, PyTorch DDP)",
  "Bayesian inference libraries (PyMC3, Stan)",
  "Hyperparameter optimization frameworks",
  "MLOps tools for experiment tracking and model management",
  "Cloud-based model training and deployment infrastructure"
];

const certificationItems = [
  "Graduate-level certification in Advanced Machine Learning",
  "Research portfolio showcasing implementation of cutting-edge techniques",
  "Opportunity to contribute to published research papers",
  "Access to System3 research network and collaboration opportunities",
  "Invitation to research seminars and workshops",
  "Priority consideration for research positions and PhD recommendations"
];
</script>