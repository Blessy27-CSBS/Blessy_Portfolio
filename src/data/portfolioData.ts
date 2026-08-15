export interface Project {
  id: string;
  title: string;
  category: 'ml' | 'ai' | 'zoho' | 'all';
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  status: 'Completed' | 'Featured' | 'In Production';
  githubUrl: string;
  liveUrl?: string;
  imageBg: string;
  iconName: string;
  metrics?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  period: string;
  type: string;
  location: string;
  logoIcon: string;
  color: string;
  responsibilities: string[];
  techStack: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  status: string;
  location: string;
  coursework: string[];
  achievements: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Maria Blessy R J",
    headline: "B.Tech CSBS Student · AIML Engineer & Data Analyst · Zoho CRM Extension Developer ",
    roles: [
      "AI & Machine Learning Enthusiasist",
      "Zoho CRM Extension Developer",
      "Aspiring Data Analyst"
    ],
    about: "Third-year B.Tech Computer Science & Business Systems (CSBS) student at KGiSL Institute of Technology, Coimbatore. Experienced in building autonomous multi-agent pipelines, predictive machine learning models, 11-table PostgreSQL relational database schemas, and Zoho CRM/Desk extensions with GLM-4.7 Flash LLm.",
    philosophy: "Bridging artificial intelligence, relational data engineering, and modern web software to deliver high-impact enterprise solutions.",
    location: "Coimbatore, Tamil Nadu, India",
    email: "rjblessy2006@gmail.com",
    phone: "+91 9443281472",
    githubUrl: "https://github.com/Blessy27-CSBS",
    linkedinUrl: "https://www.linkedin.com/in/maria-blessy-aa52a9330/",
    availability: "Available for AI, Data Science & Software Engineering Roles",
  },
  stats: [
    { label: "GitHub Repositories", value: 40, suffix: "+", icon: "Github", description: "Public repositories across AI, ML, Web & Apps" },
    { label: "ML & AI Pipelines", value: 12, suffix: "+", icon: "Brain", description: "Predictive analytics, RAG & multi-agent systems" },
    { label: "PostgreSQL Tables", value: 11, suffix: "+", icon: "Database", description: "Engineered triggers & production supply chain schemas" },
    { label: "Tech Internships", value: 3, suffix: "", icon: "Briefcase", description: "Zoho Corp, NCSP India & Codec Tech" }
  ],
  education: {
    institution: "KGiSL Institute of Technology",
    degree: "B.Tech in Computer Science & Business Systems (CSBS)",
    duration: "2024 – 2028",
    status: "III Year Under-Graduate",
    location: "Coimbatore, Tamil Nadu, India",
    coursework: [
      "Exploratory Data Analysis & Machine Learning",
      "Database Management Systems (DBMS) & SQL",
      "Multi-Agent AI Systems & Prompt Engineering",
      "Data Structures & Algorithms (DSA)",
      "Software Engineering & Web Technologies",
      "Business Analytics & Financial Systems"
    ],
    achievements: [
      "Top performing student in CSBS department",
      "Completed Software Engineering Internships at Zoho Corporation & NCSP India",
      "Authored 40+ open-source repositories on GitHub including AR debuggers & AI agents"
    ]
  } as Education,
  experiences: [
    {
      company: "Zoho Corporation",
      role: "Software Engineering Intern - Zoho Extension Development",
      duration: "July 2026",
      period: "Internship",
      type: "Enterprise Extension Engineering",
      location: "Tenkasi / Onsite, Tamil Nadu, India",
      logoIcon: "Building2",
      color: "from-blue-500 to-cyan-500",
      responsibilities: [
        "Built 'AI Promise Tracker', a Zoho CRM extension utilizing GLM-4.7 Flash AI to analyze customer notes & meeting transcripts, generating commitment summaries for sales reps.",
        "Developed custom extension widgets across Zoho CRM, Desk, and Bigin using Zoho Sigma, ZET CLI, Connectors, REST APIs, and Deluge scripting.",
        "Strengthened enterprise product capabilities in RESTful API integrations, live debugging, and scalable extension widget architecture."
      ],
      techStack: ["Zoho Sigma", "ZET CLI", "GLM-4.7 Flash AI", "Zoho Deluge", "REST APIs", "Widgets & Connectors"],
      achievements: [
        "Delivered production-ready AI extension widget for Zoho CRM & Desk",
        "Automated customer commitment extraction reducing sales follow-up prep time"
      ]
    },
    {
      company: "NCSP India Software Private Limited",
      role: "Software Engineering Intern - Database & Supply Chain",
      duration: "June 2026",
      period: "Internship",
      type: "Database Engineering",
      location: "India",
      logoIcon: "Warehouse",
      color: "from-emerald-500 to-teal-500",
      responsibilities: [
        "Authored schema-grounded relational SQL across an 11-table PostgreSQL production schema (covering ASN, inventory, order management, and LPN workflows).",
        "Engineered and tested trigger-based business logic maintaining data integrity for downstream order-fulfillment analytics.",
        "Presented system architecture and relational database findings to internal stakeholders in a 19-slide technical review."
      ],
      techStack: ["PostgreSQL", "Relational SQL", "Triggers & Stored Procedures", "Supply Chain Schemas", "Data Integrity"],
      achievements: [
        "Engineered complex multi-table SQL queries for supply chain reporting",
        "Successfully delivered 19-slide technical architecture review to senior managers"
      ]
    },
    {
      company: "Codec Technologies",
      role: "AI & Machine Learning Intern",
      duration: "1 Month",
      period: "Internship",
      type: "AI & Data Science",
      location: "Remote, India",
      logoIcon: "Cpu",
      color: "from-purple-500 to-violet-500",
      responsibilities: [
        "Gained hands-on experience in AI algorithms, data preprocessing, and machine learning model evaluation pipelines.",
        "Applied supervised learning models on structured datasets, evaluating performance metrics like Precision, Recall, F1-Score, and ROC-AUC.",
        "Explored data visualization methods using Matplotlib & Seaborn to communicate model predictions clearly."
      ],
      techStack: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Matplotlib", "Seaborn"],
      achievements: [
        "Completed hands-on machine learning projects and dataset cleanups",
        "Earned verified certification in AI and predictive modeling"
      ]
    }
  ] as Experience[],
  projects: [
    {
      id: "circuitchain-ar",
      title: "CircuitChain AR Debugger",
      category: "ai",
      description: "Augmented Reality interactive circuit debugging & visualization tool designed for real-time hardware diagnostics and component analysis.",
      longDescription: "An innovative WebAR debugging platform that projects interactive diagnostic overlays onto physical electronic circuits. Helps engineers inspect signal flows, detect faulty components, and view real-time node telemetry in 3D AR space.",
      techStack: ["TypeScript", "WebAR", "Three.js", "Canvas API", "Hardware Diagnostics", "Web APIs"],
      features: [
        "Interactive 3D AR overlay for physical circuit board diagnostics",
        "Real-time signal path tracing and voltage node visualization",
        "Automated fault detection alerts for short circuits & open paths",
        "Responsive browser-based AR interface requiring zero native app installs"
      ],
      status: "Featured",
      githubUrl: "https://github.com/Blessy27-CSBS/CircuitChain_AR_Debugger",
      imageBg: "from-indigo-600/20 to-purple-600/20",
      iconName: "Cpu",
      metrics: "Augmented Reality Tech"
    },
    {
      id: "zoho-promise-tracker",
      title: "AI Promise Tracker (Zoho CRM Extension)",
      category: "zoho",
      description: "Built during internship at Zoho Corp. Connects sales notes to GLM-4.7 Flash AI to extract customer commitment action items automatically.",
      longDescription: "An enterprise-grade Zoho CRM & Desk extension widget that processes call notes and interaction logs using GLM-4.7 Flash AI. Extracts explicit deliverables, commitments, and deadlines into actionable CRM task lists.",
      techStack: ["Zoho Deluge", "GLM-4.7 Flash AI", "Zoho Sigma IDE", "ZET CLI", "REST APIs", "Widgets"],
      features: [
        "Automated commitment extraction from unstructured sales meeting notes",
        "Native sidebar widget integration inside Zoho CRM & Zoho Desk",
        "Secure REST API integration with Z.ai GLM-4.7 Flash model",
        "Reduces manual CRM task creation overhead for sales representatives"
      ],
      status: "In Production",
      githubUrl: "https://github.com/Blessy27-CSBS",
      imageBg: "from-emerald-600/20 to-teal-600/20",
      iconName: "Handshake",
      metrics: "Zoho Sigma Extension"
    },
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction with SMOTE",
      category: "ml",
      description: "Built and tuned a Random Forest classifier. Handled severe class imbalance using SMOTE to derive actionable customer retention strategies.",
      longDescription: "Comprehensive machine learning project predicting customer churn. Evaluated multiple algorithms, performed extensive Exploratory Data Analysis (EDA), applied SMOTE to balance dataset classes, and optimized ROC-AUC scores.",
      techStack: ["Python", "Scikit-Learn", "Random Forest", "SMOTE", "Pandas", "EDA", "Jupyter Notebook"],
      features: [
        "Built and evaluated Random Forest classification model",
        "Handled class imbalance using Synthetic Minority Over-sampling Technique (SMOTE)",
        "Derived feature importances revealing primary churn drivers",
        "Generated ROC-AUC curves and confusion matrices for model validation"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Blessy27-CSBS/Customer_Churn_Prediction",
      imageBg: "from-amber-600/20 to-orange-600/20",
      iconName: "UserMinus",
      metrics: "SMOTE Balanced ML"
    },
    {
      id: "employee-attrition",
      title: "HR Attrition Predictive Pipeline",
      category: "ml",
      description: "Implemented Logistic Regression, Random Forest, and Gradient Boosting models on the IBM Watson HR dataset. Delivered a 19-slide technical review.",
      longDescription: "End-to-end HR predictive analytics pipeline helping enterprise managers identify employees at risk of leaving. Includes automated feature engineering, correlation analysis, and comparative benchmarking.",
      techStack: ["Python", "Gradient Boosting", "Random Forest", "Logistic Regression", "Pandas", "Jupyter Notebook"],
      features: [
        "Benchmarked 3 supervised machine learning models",
        "Identified overtime, distance from home, and salary growth as top attrition indicators",
        "Delivered interactive Jupyter analytical workflow",
        "Summarized findings into a 19-slide technical review deck"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Blessy27-CSBS/Employee-Attrition-Prediction-using-Machine-Learning",
      imageBg: "from-rose-600/20 to-pink-600/20",
      iconName: "BarChart3",
      metrics: "IBM Watson HR Dataset"
    },
    {
      id: "motion-emotion-detection",
      title: "Motion & Emotion Computer Vision System",
      category: "ai",
      description: "Real-time OpenCV computer vision system combining background subtraction motion tracking with deep emotion recognition.",
      longDescription: "Combines OpenCV frame-differencing for motion detection with deep facial feature extraction for emotion classification, operating over live video feeds.",
      techStack: ["Python", "OpenCV", "EmotionRecognition", "Computer Vision", "Deep Learning"],
      features: [
        "Real-time video stream background subtraction for motion detection",
        "Facial landmark tracking for facial expression & emotion classification",
        "High FPS lightweight detection pipeline suitable for edge devices"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Blessy27-CSBS/Motion_Detection_Using_OpenCv",
      imageBg: "from-cyan-600/20 to-teal-600/20",
      iconName: "Eye",
      metrics: "Real-Time Computer Vision"
    },
    {
      id: "superstore-sales",
      title: "Superstore Sales Analytics & Dashboard",
      category: "ml",
      description: "Time-series predictive analytics model and retail dashboard analyzing historical sales data to forecast future revenue trends.",
      longDescription: "Analytical framework examining multi-month retail sales data, identifying seasonal purchasing trends, and projecting quarterly sales targets.",
      techStack: ["Python", "Jupyter Notebook", "Pandas", "Time Series Forecasting", "Seaborn"],
      features: [
        "Seasonal decomposition and trend forecasting",
        "Multi-period moving averages and exponential smoothing",
        "Interactive exploratory data visualization plots"
      ],
      status: "Completed",
      githubUrl: "https://github.com/Blessy27-CSBS/Superstore-Sales-Dashboard",
      imageBg: "from-violet-600/20 to-indigo-600/20",
      iconName: "LineChart",
      metrics: "Predictive Time-Series"
    }
  ] as Project[],
  skillCategories: [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95, icon: "Terminal", highlight: true },
        { name: "Scikit-Learn & Predictive Modeling", level: 92, icon: "Brain", highlight: true },
        { name: "Multi-Agent AI Systems (Gemini / LLMs)", level: 90, icon: "Bot", highlight: true },
        { name: "Exploratory Data Analysis (EDA) & Pandas", level: 94, icon: "BarChart2", highlight: true },
        { name: "Random Forest, Gradient Boosting & SMOTE", level: 88, icon: "Trees" },
        { name: "OpenCV & Computer Vision", level: 85, icon: "Eye" }
      ]
    },
    {
      id: "db-sql",
      name: "Databases & SQL Engineering",
      skills: [
        { name: "PostgreSQL & Relational Schemas", level: 92, icon: "Database", highlight: true },
        { name: "Multi-Table SQL Joins & Subqueries", level: 94, icon: "GitMerge", highlight: true },
        { name: "Database Triggers & Stored Procedures", level: 90, icon: "Zap", highlight: true },
        { name: "Schema Data Integrity & Supply Chain Systems", level: 88, icon: "Shield" }
      ]
    },
    {
      id: "zoho-dev",
      name: "Zoho Extension Development",
      skills: [
        { name: "Zoho Deluge Scripting", level: 90, icon: "Code2", highlight: true },
        { name: "Zoho Sigma IDE & ZET CLI", level: 92, icon: "Boxes", highlight: true },
        { name: "Zoho CRM / Desk / Bigin Extensions", level: 90, icon: "Building2", highlight: true },
        { name: "REST APIs & Webhooks Integration", level: 92, icon: "Globe" }
      ]
    },
    {
      id: "core-cs",
      name: "Core CS & Modern Web",
      skills: [
        { name: "Data Structures & Algorithms (Java/Python)", level: 88, icon: "Binary", highlight: true },
        { name: "TypeScript & JavaScript", level: 90, icon: "Code" },
        { name: "HTML5, CSS3 & Responsive Web Design", level: 92, icon: "Layout" },
        { name: "Git, GitHub & VS Code", level: 95, icon: "Github" }
      ]
    }
  ] as SkillCategory[],
  certifications: [
    {
      title: "Machine Learning with Python",
      issuer: "IBM / Professional Platform",
      date: "2026",
      badge: "Verified Certification",
      description: "Supervised ML classification, regression models, decision trees, hyperparameter tuning, and cross-validation techniques.",
      skills: ["Python", "Scikit-learn", "Classification", "Model Metrics"]
    },
    {
      title: "Zoho Extension Developer Intern",
      issuer: "Zoho Corporation",
      date: "July 2026",
      badge: "Enterprise Internship",
      description: "Zoho CRM Extension Developer, Desk, and Bigin widgets using ZET CLI, Deluge scripting, REST APIs, and GLM-4.7 Flash AI.",
      skills: ["Zoho Deluge", "ZET CLI", "REST APIs", "GLM-4.7 AI Integration"]
    },
    {
      title: "Supply Chain Database Systems Intern",
      issuer: "NCSP India Software Pvt Ltd",
      date: "June 2026",
      badge: "Industry Certified",
      description: "Authored relational SQL and trigger-based business rules across an 11-table PostgreSQL production warehouse schema.",
      skills: ["PostgreSQL", "Relational Schemas", "Database Triggers", "Data Integrity"]
    },
    {
      title: "Practical AI & Machine Learning Internship",
      issuer: "Codec Technologies",
      date: "2026",
      badge: "Practical AI",
      description: "Applied machine learning algorithms, dataset preprocessing, feature extraction, and performance validation.",
      skills: ["Machine Learning", "Data Preprocessing", "Supervised Learning"]
    }
  ] as Certification[],
  github: {
    username: "Blessy27-CSBS",
    profileUrl: "https://github.com/Blessy27-CSBS",
    publicRepos: 40,
    followers: 5,
    stars: 12,
    contributionsThisYear: 100,
    topLanguages: ["Python", "TypeScript", "JavaScript", "SQL / PostgreSQL", "Deluge", "HTML/CSS"],
    pinnedRepos: [
      {
        name: "CircuitChain_AR_Debugger",
        desc: "Augmented Reality interactive circuit debugging and 3D signal overlay tool.",
        stars: 3,
        forks: 1,
        language: "TypeScript",
        url: "https://github.com/Blessy27-CSBS/CircuitChain_AR_Debugger"
      },
      {
        name: "Customer_Churn_Prediction",
        desc: "Scikit-Learn Random Forest model with SMOTE class balancing for churn retention.",
        stars: 5,
        forks: 2,
        language: "Jupyter Notebook",
        url: "https://github.com/Blessy27-CSBS/Customer_Churn_Prediction"
      },
      {
        name: "Employee-Attrition-Prediction-using-Machine-Learning",
        desc: "Comparative ML benchmark on IBM Watson HR dataset with 19-slide technical review.",
        stars: 4,
        forks: 1,
        language: "Jupyter Notebook",
        url: "https://github.com/Blessy27-CSBS/Employee-Attrition-Prediction-using-Machine-Learning"
      },
      {
        name: "Motion_Detection_Using_OpenCv",
        desc: "Real-time OpenCV computer vision system for background subtraction motion tracking.",
        stars: 2,
        forks: 1,
        language: "Python",
        url: "https://github.com/Blessy27-CSBS/Motion_Detection_Using_OpenCv"
      }
    ]
  }
};
