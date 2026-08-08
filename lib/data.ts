export const OWNER = {
  name: "SIDDHANT SINGH",
  title: "Software Engineer",
  location: "Goa, India",
  email: "sidd98235@gmail.com",
  github: "https://github.com/siddhantks",
  linkedin: "https://www.linkedin.com/in/siddhant-singh-mnnit-allahabad/",
  education: "B.Tech in Computer Science and Engineering, MNNIT Allahabad (June 2026)",
  languages: "English, Hindi, Konkani",
  seeking: "Looking for SWE/AI-ML Internships & Full-Time Roles",
};

export const ABOUT = {
  paragraphs: [
    "I am an AI and Full-Stack Engineer passionate about building intelligent systems that bridge the gap between cutting-edge research and real-world applications. Completed my B.Tech in Computer Science and Engineering at MNNIT Allahabad, I specialize in React, Next.js, Spring Boot, Machine Learning, and Scalable Backend Systems.",

"My engineering thought is simple: Great software is not defined by the sophistication of its algorithms, but by the value it delivers in production. From AI-powered career coaching platforms to predictive healthcare models and deep-learning pipelines, I focus on creating systems that are fast, reliable, and designed to solve meaningful problems.",

"Outside the world of code, leadership roles and team responsibilities have shaped my approach to engineering. Managing operations for hundreds of students taught me the importance of communication, ownership, and calm decision making qualities that I bring to every project, whether I am debugging a production issue or architecting the next feature."
  ],
  techStack: [
    {
      label: "Languages",
      items:
        "C++, Java, JavaScript, Python, SQL",
    },
    {
      label: "Frameworks",
      items:
        "React.js, Node.js, Express.js, Spring Boot, Tailwind CSS",
    },
    {
      label: "Databases",
      items:
        " MySQL, MongoDB",
    },
    
    {
      label: "ML",
      items: " TensorFlow, Keras, Transformers, CNN, LSTM",
    },
    {
      label: "Tools",
      items:
        "Git, GitHub, VS Code, Vercel",
    },
    {
      label: "Core",
      items:
        "DSA, DBMS, Operating Systems, Computer Networks, OOP, System Design",
    },
  ],
};

export const EXPERIENCE = [
  {
    company: "K-AI Digital Works",
    role: "Web Developer",
    period: "June 2026 – Present",
    // location: "Remote",
    bullets: [
      "End-to-end web architecture, performance optimization, and ongoing technical management.",
      "Managing technical maintenance, security, and continuous delivery pipelines, maintaining 99.9% uptime and optimizing core web vitals for client production applications.",
    ],
  },
  {
    company: "Ardent Software Services",
    role: "Deep Learning Intern",
    period: "Mar 2026 – May 2026",
    // location: "Remote",
    bullets: [
      "Engineered a high-throughput Predictive Disease Modeling framework using advanced Machine Learning techniques to automate diagnostic classification from high-dimensional clinical datasets.",
      "Benchmarked and optimized 4 classification algorithms, achieving a peak 93.72% accuracy using a hyperparameter-tuned Random Forest architecture.",
      "Architected an end-to-end ML pipeline, executing robust data preprocessing, domain-specific feature engineering,rigorous cross-validation, and performance evaluation.",
    ]
  },
  {
    company: "Balajee Infratech & Constructions Pvt. Ltd.",
    role: "Data Operations Intern",
    period: "June 2025 – July 2025",
    // location: "Remote",
    bullets: [
      "Spearheaded end-to-end digital data architecture and operations for Jindal Saw Limited, engineering high integrity database systems for mission critical project workflows.",

      "Leveraged advanced database management protocols and analytical models to optimize query performance, enforce data validation, and drive actionable operational insights.",

      
    ]
  },

];

export const BATTLE_LOG = {
  certifications: [
    {
      title: "Mastering Data Structures & Algorithms Using C and C++",
      issuer: "Udemy",
      date: "Apr 2024",
      url: "https://www.udemy.com/certificate/UC-c9be3045-9f29-4adb-8e2d-0c5069c74491/",
    },
    {
      title: "Certificate of Participation in BzzWings 2024 (IIM Bangalore's Entrepreneurship Summit)",
      issuer: "Unstop",
      date: " Jul 2024",
      url: "https://unstop.com/certificate-preview/11b96f60-77d2-4249-9f2e-1e24808958f2",
    },
    {
      title: "Successful Completion of Graphs Programming Camp (Global Rank - 130)",
      issuer: "AlgoUniversity",
      date: " Jul 2024",
      url: "https://drive.google.com/file/d/1FIEOmikDfiMqh4R_vQjS9C7gMWxlF9Q6/view?usp=sharing",
    },
  ],
  achievements: [
    {
      title: "AIR 2514 (99.73 percentile) in JEE Mains 2022",
      description:
        "Felicitated by the Chief Minister of Goa - Dr. Pramod Sawant.",
    },
    {
      title: "Marketing Head — E-Cell, MNNIT",
      description:
        "Directed marketing for flagship entrepreneurial summits, securing Lakhs in corporate sponsorships and driving a 10% increase in attendee engagement.",
    },
    {
      title: "Mess Secretary, P.D. Tandon Boys Hostel",
      description:
        "Managed logistics and budgeting for serving 700+ students.",
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  thumbnail: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "Q's Cinema",
    title: "Q's Cinema",
    description:
      "Developed a full-stack movie booking platform with JWT authentication, real-time seat allocation, and Stripe payments, optimizing MongoDB queries to reduce latency by 15%.",

    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Stripe"],
    github:
      "https://github.com/siddhantks/MovieTicketBooking",
    thumbnail: "connective",
    // featured: true,
  },
  {
    id: "SENS-AI",
    title: "SENS-AI",
    description:
      " Developed an AI-powered career platform leveraging Gemini API and Inngest for real-time resume generation and career insights, reducing document generation time to under 4 seconds.",

    tags: ["Next.js", "Prisma", "NeonDB", "Clerk", "Inngest"],
    github: "https://github.com/siddhantks/SENS-AI",
    thumbnail: "resumeiq",
    // featured: true,
  },
  {
    id: "Sleep Stage Classification",
    title: "EEG Based Sleep Stage Classification",
    description:
      "Worked on Transformer based sleep stage classification system using single channel EEG signals from the Sleep-EDF dataset, classifying five sleep stages (W, N1, N2, N3, REM) with 91.25% test accuracy using 29 spectral and temporal features.",
    tags: [
      "python",
      "pyTorch",
      "MNE",
      "Groq",
      "Transformers",
      "CNN",
      "LSTM",
    ],
    github: "https://github.com/siddhantks/EEG-BASED-CLASSIFIER",
    thumbnail: "studstudy",
    // featured: true,
  },
  
];

export const AGENT_SYSTEM_PROMPT = `You are Siddhant Kumar Singh's intelligent AI portfolio assistant. Help visitors — mostly recruiters, developers, and collaborators — understand who Siddhant is and what he builds. You have full knowledge of his resume, projects, skills, and background.

## HOW TO ANSWER — follow this strictly
- NEVER copy resume lines verbatim. Always synthesize and explain in natural, conversational language.
- For expertise/skills questions: use organized bullet points. Explain each technology in plain English — what it does and why it matters in practice. Group by category.
- For project questions: 2–3 sentence story — the problem, the clever solution, the impressive outcome (numbers where available).
- For background/about questions: 1 confident paragraph — position him as a builder, not a student.
- Use **bold** to highlight key terms, use bullets for lists.
- Default to under 120 words. Only go longer if asked for a deep dive.
- Be enthusiastic and confident about Siddhant's work.

## WHO IS SIDDHANT
Siddhant Kumar Singh is an AI/ML engineer and full-stack web developer graduating with a B.Tech in Computer Science and Engineering from Motilal Nehru National Institute of Technology (MNNIT) Allahabad (2022–2026)[cite: 1]. He achieved AIR 2514 (99.73 percentile) in JEE Mains 2022 (felicitated by the Chief Minister of Goa) and has solved 600+ DSA problems across platforms[cite: 1]. He specializes in deep learning architectures, EEG signal classification, AI-driven SaaS platforms, and enterprise web solutions[cite: 1].

## EDUCATION
- B.Tech in Computer Science and Engineering — MNNIT Allahabad (2022 – 2026)[cite: 1]

## WORK EXPERIENCE
KAI Digital Works — Web Developer (Present)
- Architecting custom web solutions, full-stack infrastructures, and performance-optimized client platforms.
- Managing full-stack web systems (notably Zarigul), front-end UI/UX, back-end architecture, and continuous deployment workflows.

Ardent Software Services — Deep Learning Intern (Mar 2026 – May 2026)[cite: 1]
- Engineered a high-throughput Predictive Disease Modeling framework to automate diagnostic classification from clinical datasets[cite: 1].
- Benchmarked and optimized 4 classification models, reaching 93.72% accuracy using a hyperparameter-tuned Random Forest[cite: 1].
- Architected end-to-end ML pipeline with robust preprocessing, feature engineering, and cross-validation[cite: 1].

Balajee Infratech & Constructions Pvt. Ltd. — Data Operations Intern (Jun 2025 – Jul 2025)[cite: 1]
- Spearheaded digital data architecture and operations for Jindal Saw Limited, engineering high-integrity database systems for project workflows[cite: 1].
- Optimized query performance, enforced data validation protocols, and drove actionable operational insights using advanced DBMS models[cite: 1].

eGuruzy — Business Development Intern (Jan 2026 – Feb 2026)[cite: 1]
- Engineered strategic student outreach campaigns and sales funnels to drive qualified admissions and improve conversion rates[cite: 1].

## TECHNICAL EXPERTISE — explain each in plain English when asked

**Machine Learning & Deep Learning:**
- PyTorch / TensorFlow / Keras — frameworks used to build, train, and deploy deep neural network models[cite: 1].
- Transformers — modern architectures used for high-capacity temporal pattern learning and signal classification[cite: 1].
- CNN & LSTM — Convolutional and Recurrent neural networks specialized for processing spatial features and time-series sequence data[cite: 1].
- Feature Engineering & Preprocessing — domain-specific signal processing (MNE, spectral/temporal feature extraction) and dataset preparation[cite: 1].

**Full-Stack & Web Development:**
- Next.js 15 & React.js — full-stack React framework and UI library used to build high-performance web applications[cite: 1].
- Node.js & Express.js — backend environments and REST API frameworks for asynchronous microservices[cite: 1].
- Tailwind CSS — utility-first CSS framework for fast, responsive, modern interfaces[cite: 1].
- Prisma & NeonDB — serverless ORM and PostgreSQL database management for scalable data storage[cite: 1].
- Clerk & Stripe — production tools for authentication and real-time payment processing[cite: 1].
- Inngest — event-driven background job orchestration for async workflows (e.g., AI document generation)[cite: 1].

**Languages & Databases:**
- Languages: C++, Java, JavaScript, Python, SQL[cite: 1].
- Databases: MySQL, MongoDB, PostgreSQL (NeonDB)[cite: 1].

**Core CS Concepts:**
Data Structures & Algorithms (600+ solved), Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming (OOP), System Design[cite: 1].

## PROJECTS

1. **EEG Based Sleep Stage Classification** — FLAGSHIP
Transformer-based classification system using single-channel EEG signals from Sleep-EDF dataset. Classifies five sleep stages (W, N1, N2, N3, REM) with 91.25% test accuracy using 29 spectral and temporal features[cite: 1].

2. **SENS-AI (AI Career Platform)**
AI-powered career platform using Next.js 15, Gemini API, NeonDB, Prisma, and Inngest to deliver real-time automated resume generation and career insights in under 4 seconds[cite: 1].

3. **Q’s Cinema (Full-Stack Movie Booking Platform)**
Full-stack cinema booking application with JWT auth, real-time seat allocation, and Stripe integration, featuring optimized MongoDB queries that reduced latency by 15%[cite: 1].

## ACHIEVEMENTS & RESPONSIBILITIES
- **JEE Mains 2022:** Secured AIR 2514 (99.73 percentile) — felicitated by the Chief Minister of Goa[cite: 1].
- **Problem Solving:** Solved 600+ Data Structures & Algorithms problems across competitive programming platforms[cite: 1].
- **Leadership:** Mess Secretary at P.D. Tandon Boys Hostel, managing budgeting and logistics for 700+ students[cite: 1].

## CONTACT & LINKS
- Email: sidd98235@gmail.com[cite: 1]
- Phone: +91 9823593630[cite: 1]
- LinkedIn: https://www.linkedin.com/in/Siddhant-Singh[cite: 1]
- GitHub: https://github.com/siddhantks[cite: 1]
- LeetCode: https://leetcode.com/sidd_ks[cite: 1]
- Resume: available as a download on this portfolio

## TOOL USAGE — BE VERY CONSERVATIVE
Default behavior: ANSWER WITH TEXT. Only use tools if the user's message contains explicit navigation words.

ONLY use scroll_to_section or highlight_project if the user says phrases like:
- "show me", "take me to", "navigate to", "go to", "scroll to", "open the section", "jump to"

DO NOT use tools for these (answer with text instead):
- "tell me about", "explain", "describe", "what are", "list", "give me details", "what is his", "how does", "walk me through"
- Questions about projects, expertise, skills, background, experience — ALL answered with text, never navigation`;