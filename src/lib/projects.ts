import { Project } from "@/types";

// ---------------------------------------------------------------------------
// Verified Portfolio Projects Data — source of truth
// ---------------------------------------------------------------------------

export const PROJECTS: Project[] = [
  {
    id: "automl-model-builder",
    number: "01",
    title: "AutoML Model Builder",
    subtitle: "AI SaaS Platform",
    category: "AI / ML PLATFORM",
    description:
      "An automated machine-learning SaaS application that transforms raw CSV datasets into trained, evaluated classification or regression models — end to end.",
    technologies: ["Python", "Flask", "TensorFlow", "Scikit-learn", "Docker"],
    details: [
      "Architected a full-stack AutoML SaaS using Python, Flask, TensorFlow, and Scikit-learn automating end-to-end model creation from raw CSVs.",
      "Engineered dynamic pipelines for automated data preprocessing, feature engineering, hyperparameter optimization, and evaluation across classification and regression tasks.",
      "Designed an interactive frontend dashboard with real-time training metrics, secure model export, and Docker containerization for production deployment.",
    ],
    pipeline: [
      { step: "01", label: "CSV Dataset" },
      { step: "02", label: "Preprocessing" },
      { step: "03", label: "Feature Engineering" },
      { step: "04", label: "Hyperparameter Search" },
      { step: "05", label: "Training" },
      { step: "06", label: "Docker Export" },
    ],
    githubUrl: "https://github.com/mohit8797/Ai_Automl_Model_Builder.git",
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "youtube-rag-chatbot",
    number: "02",
    title: "YouTube RAG Chatbot",
    subtitle: "AI-Powered Video QA",
    category: "GENERATIVE AI / RAG",
    description:
      "A high-performance RAG application for semantic question-answering over YouTube video transcripts, with per-video indexing and a cached retrieval layer.",
    technologies: [
      "Python",
      "FastAPI",
      "FAISS",
      "Sentence Transformers",
      "Google Gemini",
    ],
    details: [
      "Developed a RAG application using Python, FastAPI, FAISS, Sentence Transformers, and Google Gemini for precise video-level question answering.",
      "Implemented text preprocessing, semantic chunking, and isolated per-video indexing for fast and accurate retrieval.",
      "Built a cached retrieval layer reducing unnecessary LLM token usage and improving query latency, alongside a responsive semantic-search UI.",
    ],
    pipeline: [
      { step: "01", label: "Transcript" },
      { step: "02", label: "Chunking" },
      { step: "03", label: "Embeddings" },
      { step: "04", label: "FAISS" },
      { step: "05", label: "Gemini" },
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "farmrise",
    number: "03",
    title: "FarmRise",
    subtitle: "Agriculture Marketplace",
    category: "FULL-STACK PLATFORM",
    description:
      "A scalable marketplace platform connecting organic farmers directly with consumers, built with a normalized relational database and secured REST APIs.",
    technologies: ["Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
    details: [
      "Built a full-stack e-commerce marketplace with Node.js and Express.js REST APIs, secured using JWT authentication and salted bcrypt password hashing.",
      "Engineered and optimized a normalized MySQL relational database schema for users, product listings, and transactional data.",
      "Designed a responsive, mobile-first frontend for the consumer-facing marketplace interface.",
    ],
    pipeline: [
      { step: "01", label: "Mobile UI" },
      { step: "02", label: "REST API" },
      { step: "03", label: "JWT Auth" },
      { step: "04", label: "MySQL DB" },
    ],
    githubUrl: "https://github.com/mohit8797/FarmRise_app.git",
    liveUrl: undefined,
  },
];
