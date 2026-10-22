/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION - JAN MARINELLE YAP AUDITOR
 * ====================================================================
 * This centralized configuration file controls all dynamic content across
 * the portfolio. Update this file to modify personal information, skills,
 * experiences, projects, education, certificates, and social links without
 * touching the HTML structure.
 */

const PORTFOLIO_CONFIG = {
  // ------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & BRANDING (FROM CV)
  // ------------------------------------------------------------------
  personal: {
    fullName: "Jan Marinelle Yap Auditor",
    shortName: "Jan Marinelle",
    monogram: "JMYA",
    title: "UI/UX Designer | System Developer",
    // Subtitles for animated rotating typewriter in Hero
    rotatingTitles: [
      "UI/UX Designer",
      "System Developer"
    ],
    greeting: "HELLO, WELCOME TO MY PORTFOLIO",
    heroHeading: "Hi, I'm Jan Marinelle Yap Auditor",
    heroDescription:
      "An Information Technology enthusiast interested in UI/UX design and system development, with skills in web development, database management, and creating user-friendly interfaces. Eager to learn, innovate, and grow professionally.",
    aboutGreeting: "A Little About Myself",
    aboutHeading: "Get to Know Me",
    bio: [
      "An Information Technology enthusiast interested in UI/UX design and system development, with skills in web development, database management, and creating user-friendly interfaces. Eager to learn, innovate, and grow professionally."
    ],
    signature: "Jan Marinelle Yap Auditor",
    details: {
      fullName: "Jan Marinelle Yap Auditor",
      professionalTitle: "UI/UX Designer | System Developer",
      location: "Purok-5 North Poblacion, Maramag, Bukidnon",
      email: "janmarinellea@gmail.com",
      phone: "09358343056",
      github: "marinelleaux",
      languages: "English, Tagalog, Cebuano",
      status: "BSIT • Torres Capitol College Inc. (Graduated: 2027)",
      interests: "UI/UX Design, Web Development, System Architecture, Database Management",
      careerGoals: "To excel as a UI/UX Designer and System Developer, delivering intuitive, accessible, and high-impact digital solutions that simplify workflows and empower communities."
    },
    counters: []
  },

  // ------------------------------------------------------------------
  // 2. CURRICULUM VITAE (CV)
  // ------------------------------------------------------------------
  cv: {
    fileName: "Jan-Marinelle_CV.pdf",
    filePath: "assets/files/Jan-Marinelle_CV.pdf",
    lastUpdated: "October 2026",
    available: true
  },

  // ------------------------------------------------------------------
  // 3. SOCIAL & CONTACT LINKS (FROM CV)
  // ------------------------------------------------------------------
  social: [
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/marinelleaux",
      isSample: false,
      ariaLabel: "Explore Jan Marinelle's GitHub Repositories (@marinelleaux)"
    },
    {
      name: "Email",
      icon: "fa-regular fa-envelope",
      url: "mailto:janmarinellea@gmail.com",
      isSample: false,
      ariaLabel: "Send an Email to Jan Marinelle (janmarinellea@gmail.com)"
    },
    {
      name: "Phone",
      icon: "fa-solid fa-phone",
      url: "tel:09358343056",
      isSample: false,
      ariaLabel: "Call Jan Marinelle (09358343056)"
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      url: "https://linkedin.com/in/jan-marinelle-auditor",
      isSample: false,
      ariaLabel: "Visit Jan Marinelle's LinkedIn Profile"
    }
  ],

  // ------------------------------------------------------------------
  // 4. SKILLS & EXPERTISE (FROM CV)
  // ------------------------------------------------------------------
  skills: {
    technical: [
      {
        name: "UI/UX Design & Prototyping",
        icon: "fa-solid fa-wand-magic-sparkles",
        level: "Advanced Proficiency",
        description: "Wireframing, interactive prototyping, user-centered interface layouts, visual hierarchy, and usability testing."
      },
      {
        name: "Web Development",
        icon: "fa-solid fa-code",
        level: "Advanced Proficiency",
        description: "Modern HTML5 semantic structuring, CSS3 responsive grid and flexbox styling, and dynamic JavaScript DOM interactions."
      },
      {
        name: "PHP & Laravel",
        icon: "fa-brands fa-php",
        level: "Proficient Foundation",
        description: "Server-side web system architecture, backend routing, dynamic blade templates, and MVC development workflow."
      },
      {
        name: "MySQL Database Management",
        icon: "fa-solid fa-database",
        level: "Proficient Foundation",
        description: "Relational database schema modeling, SQL queries, table relationships, data integrity, and record management."
      },
      {
        name: "System Analysis and Design",
        icon: "fa-solid fa-diagram-project",
        level: "Advanced Proficiency",
        description: "Requirement gathering, workflow diagramming, functional system architecture, and entity-relationship specifications."
      },
      {
        name: "System Testing and Debugging",
        icon: "fa-solid fa-bug-slash",
        level: "Proficient Foundation",
        description: "Quality assurance diagnostics, identifying code bottlenecks, functional validation, and user acceptance testing."
      },
      {
        name: "Git & GitHub",
        icon: "fa-brands fa-github",
        level: "Proficient Foundation",
        description: "Version control workflows, commit history management, multi-branching collaboration, and repository deployment."
      }
    ],
    professional: [
      {
        name: "Problem-Solving & Critical Thinking",
        icon: "fa-solid fa-brain",
        level: "Key Strength",
        description: "Systematic breakdown of technical challenges, analytical debugging, and formulating practical system solutions."
      },
      {
        name: "Communication & Articulation",
        icon: "fa-solid fa-comments",
        level: "Key Strength",
        description: "Articulating system requirements clearly, communicating with project stakeholders, and creating clean documentation."
      },
      {
        name: "Teamwork and Collaboration",
        icon: "fa-solid fa-users",
        level: "Key Strength",
        description: "Collaborative teamwork across group research, peer code reviews, and shared responsibility in project delivery."
      },
      {
        name: "Time Management & Adaptability",
        icon: "fa-solid fa-clock",
        level: "Key Strength",
        description: "Balancing project milestones with academic priorities, adapting quickly to new tools and emerging frameworks."
      },
      {
        name: "Attention to Detail & Creativity",
        icon: "fa-solid fa-palette",
        level: "Key Strength",
        description: "Pixel-perfect interface alignment, refined typography pairings, and thoughtful user-first feature design."
      },
      {
        name: "Willingness to Learn & Perseverance",
        icon: "fa-solid fa-seedling",
        level: "Key Strength",
        description: "Continuous self-improvement, tenacious problem resolution, and persistent dedication to personal growth."
      }
    ]
  },

  // ------------------------------------------------------------------
  // 5. WORK EXPERIENCE & SYSTEM PROJECTS (FROM CV)
  // ------------------------------------------------------------------
  experience: [
    {
      id: "exp-1",
      role: "System Designer & UI/UX Contributor",
      company: "Green-Wifi: A Plastic Bottle Recycling Incentives with Internet Access",
      location: "Maramag, Bukidnon",
      period: "System Project",
      isCurrent: true,
      isSample: false,
      description:
        "Developed a system that rewards users with free Wi-Fi access in exchange for recyclable plastic bottles.",
      responsibilities: [
        "Contributed to system design, user interface, and core functionality.",
        "Promoted environmental sustainability and accessible internet connectivity."
      ],
      achievements: [
        "Designed captive portal with live bottle counter and session countdown.",
        "Integrated sensor credit logic rewarding 3 minutes of Wi-Fi per bottle."
      ],
      technologies: ["UI/UX Design", "Captive Portal", "Hardware Sensors", "Web Development"]
    },
    {
      id: "exp-2",
      role: "UI/UX Designer & System Developer",
      company: "Integrated Boarding House Management System",
      location: "Maramag, Bukidnon",
      period: "System Project",
      isCurrent: false,
      isSample: false,
      description:
        "Designed and developed a web-based system for managing tenants, rooms, and payments.",
      responsibilities: [
        "Contributed to UI/UX design, tenant dashboards, and system functionality.",
        "Improved the organization of boarding house records and payment tracking."
      ],
      achievements: [
        "Implemented visual Rent Due Calendar and room occupancy records.",
        "Integrated digital payment logging with GCash receipt tracking."
      ],
      technologies: ["PHP", "MySQL", "UI/UX Design", "Database Management"]
    },
    {
      id: "exp-3",
      role: "UI/UX Designer & Front-End Developer",
      company: "Ai-Community Complaint Management System",
      location: "Purok-5 North Poblacion, Maramag, Bukidnon",
      period: "System Project",
      isCurrent: false,
      isSample: false,
      description:
        "Designed a system for submitting, categorizing, and managing community complaints.",
      responsibilities: [
        "Contributed to UI/UX design and front-end system development.",
        "Integrated AI features to assist in complaint categorization and management."
      ],
      achievements: [
        "Created citizen submission interface supporting localized community issues.",
        "Implemented real-time complaint status tracking and urgency triaging."
      ],
      technologies: ["AI Integration", "UI/UX Design", "Front-End", "System Development"]
    },
    {
      id: "exp-4",
      role: "Web Designer & Front-End Developer",
      company: "Responsive Digital Portfolio",
      location: "Maramag, Bukidnon",
      period: "Portfolio Project",
      isCurrent: true,
      isSample: false,
      description:
        "Designed and developed a responsive personal digital portfolio showcasing skills, systems, and credentials.",
      responsibilities: [
        "Created a responsive and user-friendly interface optimized across devices.",
        "Showcased personal technical skills, system projects, and verified achievements."
      ],
      achievements: [
        "Engineered persistent Light/Dark themes and fluid responsive layouts.",
        "Crafted smooth micro-interactions, custom modal previews, and zero layout shift."
      ],
      technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Design"]
    }
  ],

  // ------------------------------------------------------------------
  // 6. PROJECTS & SELECTED WORKS (REAL PROJECTS WITH SCREENSHOTS & DESCRIPTIONS)
  // ------------------------------------------------------------------
  projects: [
    {
      id: "project-1",
      title: "Green-Wifi: Plastic Bottle Recycling Incentives with Internet Access",
      category: "academic",
      categoryLabel: "Eco-Tech & IoT System",
      shortDescription:
        "An innovative eco-friendly IoT system that rewards community users with free Wi-Fi access in exchange for recyclable plastic bottles.",
      fullDescription:
        "Green-Wifi is an innovative eco-tech solution developed to promote environmental sustainability and accessible internet connectivity. Users deposit recyclable plastic bottles into a smart recycling terminal to earn Wi-Fi minutes. The responsive captive portal interface provides real-time bottle counters, countdown timers, session pause controls, and connection instructions.",
      technologies: ["UI/UX Design", "Captive Portal", "Hardware Sensors", "Web Development", "IoT"],
      image: "assets/images/projects/Green-Wifi Captive Portal.png",
      screenshots: [
        "assets/images/projects/Green-Wifi Captive Portal.png",
        "assets/images/projects/Green-Wifi Hardware.jpg"
      ],
      features: [
        "Automated bottle detection mechanism crediting 3 minutes of free Wi-Fi per bottle inserted",
        "Intuitive captive portal dashboard featuring live connection status, bottle counter, and session timer",
        "Pause and resume session capability providing maximum flexibility for users",
        "Promotes environmental cleanliness, recycling awareness, and accessible community connectivity"
      ],
      liveUrl: null,
      githubUrl: null,
      isSample: false,
      badge: "Featured Eco-Tech"
    },
    {
      id: "project-2",
      title: "Integrated Boarding House Management System",
      category: "web-dev",
      categoryLabel: "Web System",
      shortDescription:
        "A comprehensive web-based management system for boarding house operations, room occupancies, tenant records, and payment tracking.",
      fullDescription:
        "A full-featured management system created to solve common operational challenges in boarding house administration. Tracks tenant registrations, room occupancy statuses, monthly rental collections, overdue balances, and receipt verification with integrated GCash payment tracking and visual rent due calendars.",
      technologies: ["PHP", "MySQL", "UI/UX Design", "Dashboard Analytics", "System Architecture"],
      image: "assets/images/projects/Integrated Boarding House.png",
      screenshots: [
        "assets/images/projects/Integrated Boarding House.png"
      ],
      features: [
        "Operational dashboard tracking active tenants (2/2 total), available rooms (6/8), and expected monthly revenue (₱5,700)",
        "Visual Rent Due Calendar tracking payment obligations and monthly due dates across all boarders",
        "Room request management, pending tenant verification, and maintenance logging modules",
        "GCash digital payment verification and automated overdue rent balance alerts"
      ],
      liveUrl: null,
      githubUrl: null,
      isSample: false,
      badge: "Management System"
    },
    {
      id: "project-3",
      title: "Ai-Community Complaint Management System",
      category: "web-dev",
      categoryLabel: "Civic Tech & AI",
      shortDescription:
        "A civic complaint management platform for North Poblacion, Maramag, Bukidnon featuring localized reporting and AI categorization.",
      fullDescription:
        "Designed and developed to empower citizens of North Poblacion, Maramag, Bukidnon to submit community concerns (such as road hazards, uncollected waste, and waterline issues). Integrates AI features to assist municipal administrators in categorizing, prioritizing, and assigning complaints, while keeping citizens updated through real-time notifications.",
      technologies: ["AI Integration", "UI/UX Design", "Front-End Development", "Civic Tech", "System Development"],
      image: "assets/images/projects/Ai-Community-Complaints.png",
      screenshots: [
        "assets/images/projects/Ai-Community-Complaints.png"
      ],
      features: [
        "Citizen dashboard displaying submitted complaints categorized into Pending, In Progress, and Resolved",
        "Support for localized Cebuano issue submissions reflecting actual community feedback",
        "AI-assisted complaint classification and urgency prioritization for municipal response teams",
        "Real-time notifications and transparent resolution tracking for local community members"
      ],
      liveUrl: null,
      githubUrl: null,
      isSample: false,
      badge: "AI Civic Platform"
    },
    {
      id: "project-4",
      title: "LocalHive: Community Job & Marketplace Platform",
      category: "ui-ux",
      categoryLabel: "UI/UX Design & Mobile",
      shortDescription:
        "A mobile-first user experience and interactive prototype connecting local job seekers, hiring businesses, and community trade.",
      fullDescription:
        "LocalHive is a community marketplace and employment platform tailored for local neighborhoods. Features dedicated mobile navigation for discovering job seekers with skill badges, exploring businesses actively hiring, and trading goods in a local marketplace with high usability and intuitive touch ergonomics.",
      technologies: ["UI/UX Prototyping", "Mobile UI", "Figma", "User Research", "Wireframing"],
      image: "assets/images/projects/LocalHive.png",
      screenshots: [
        "assets/images/projects/LocalHive.png"
      ],
      features: [
        "Mobile-first interface optimized for touch interaction and modern smartphones",
        "Job seeker talent directory featuring professional title tags and quick profile views",
        "Integrated marketplace and business hiring tabs with structured layouts",
        "Clean design system adhering to accessibility standards and visual hierarchy"
      ],
      liveUrl: null,
      githubUrl: null,
      isSample: false,
      badge: "Mobile UX Design"
    },
    {
      id: "project-5",
      title: "Responsive Digital Portfolio",
      category: "web-dev",
      categoryLabel: "Web Development",
      shortDescription:
        "A personalized, responsive portfolio website featuring dark/light themes, animations, and project showcases.",
      fullDescription:
        "Engineered a personal portfolio with a bespoke aesthetic, smooth animations, persistent theme switching, and zero external dependencies. Designed and built to deliver high performance (60 FPS) and full responsiveness across mobile, tablet, and desktop screens.",
      technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Design", "Accessibility"],
      image: "assets/images/projects/Responsive Digital Portfolio.png",
      screenshots: [
        "assets/images/projects/Responsive Digital Portfolio.png"
      ],
      features: [
        "Fluid responsive design tested across cellphones, tablets, and widescreen laptops",
        "Persistent Light/Dark mode switching with smooth CSS transitions",
        "Dynamic project and certificate modals with zoom previews and download capability",
        "Clean, semantic code structure with accessible ARIA standards and zero layout shifts"
      ],
      liveUrl: null,
      githubUrl: null,
      isSample: false,
      badge: "Personal Portfolio"
    },
    {
      id: "project-6",
      title: "Green-Wifi Smart Recycling Terminal",
      category: "other",
      categoryLabel: "Hardware & IoT",
      shortDescription:
        "Physical automated recycling receptacle unit featuring bottle insertion detection, illuminated LED ring, and user guide.",
      fullDescription:
        "The physical terminal and hardware implementation for the Green-Wifi project. Houses the microcontroller, bottle detection sensors, status indicator LED ring, and high-visibility step-by-step instructional signage for community users depositing plastic bottles.",
      technologies: ["Hardware Integration", "Sensors", "IoT", "Terminal Design", "Instructional Graphics"],
      image: "assets/images/projects/Green-Wifi Hardware.jpg",
      screenshots: [
        "assets/images/projects/Green-Wifi Hardware.jpg",
        "assets/images/projects/Green-Wifi Captive Portal.png"
      ],
      features: [
        "Automated bottle sensing slot with illuminated status LED ring",
        "Clear, step-by-step 4-stage instructional graphics printed directly on terminal exterior",
        "Robust receptacle construction designed for high-traffic community placement",
        "Seamless hardware-to-software communication triggering captive portal WiFi access"
      ],
      liveUrl: null,
      githubUrl: null,
      isSample: false,
      badge: "IoT Terminal"
    }
  ],

  // ------------------------------------------------------------------
  // 7. EDUCATION (FROM CV)
  // ------------------------------------------------------------------
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Information Technology",
      institution: "Torres Capitol College Inc.",
      period: "Graduated: 2027",
      status: "Graduated: 2027",
      achievements: [
        "Focus on UI/UX Design, Web Development, and System Architecture",
        "Developed Green-Wifi, Boarding House Management, and AI Complaint systems"
      ],
      coursework: [
        "UI/UX Design",
        "Web Development",
        "PHP & Laravel",
        "MySQL Databases",
        "System Analysis & Design"
      ],
      isSample: false
    },
    {
      id: "edu-2",
      degree: "Senior High School",
      institution: "Bukidnon National School of Home Industries",
      period: "Graduated: 2023",
      status: "Graduated",
      achievements: [
        "Completed Senior High School curriculum with technical focus",
        "Built foundations in ICT and collaborative project presentation"
      ],
      coursework: [
        "Empowerment Technologies",
        "Computer Systems Servicing",
        "ICT Fundamentals"
      ],
      isSample: false
    },
    {
      id: "edu-3",
      degree: "Junior High School",
      institution: "San Andres Academy of Maramag Inc.",
      period: "Graduated: 2017",
      status: "Graduated",
      achievements: [
        "Completed secondary education with discipline and consistency",
        "Active participation in school activities and team programs"
      ],
      coursework: [
        "Computer Education",
        "Mathematics & Sciences",
        "Communication Arts"
      ],
      isSample: false
    }
  ],

  // ------------------------------------------------------------------
  // 8. CERTIFICATES & ACHIEVEMENTS
  // Real credentials and recognitions of Jan Marinelle Yap Auditor
  // ------------------------------------------------------------------
  certificates: [
    {
      id: "cert-1",
      title: "Canva for Graphic Design",
      issuer: "Department of Information and Communications Technology (DICT)",
      issuerOrg: "DICT Digital Workforce Hub",
      dateIssued: "12 October 2026",
      duration: "8 Hours",
      signatory: "Dr. Jennalyn G. Raviz",
      verificationId: "D- 4148955506JM",
      image: "assets/images/certificates/cert-1.png",
      downloadPath: "assets/images/certificates/cert-1.png",
      category: "Graphic Design",
      skillsCovered: "Canva, Visual Branding, Graphic Composition, Digital Assets, Visual Communication",
      description:
        "Official Certificate of Completion awarded by the Department of Information and Communications Technology (DICT) through the DICT Digital Workforce Hub. Successfully completed 8 hours of training in Canva for Graphic Design on 12 October 2026 under Director IV Dr. Jennalyn G. Raviz (ICT Literacy and Competency Development Bureau). Credential ID: D- 4148955506JM.",
      isSample: false
    },
    {
      id: "cert-2",
      title: "Build Python Web Apps with Flask",
      issuer: "Department of Information and Communications Technology (DICT)",
      issuerOrg: "DICT Digital Workforce Hub",
      dateIssued: "12 October 2026",
      duration: "4 Hours",
      signatory: "Dr. Jennalyn G. Raviz",
      verificationId: "D-0358148083JM",
      image: "assets/images/certificates/cert-2.png",
      downloadPath: "assets/images/certificates/cert-2.png",
      category: "Web Development",
      skillsCovered: "Python, Flask Framework, Routing, Dynamic Templates, Web Application Architecture",
      description:
        "Official Certificate of Completion awarded by the Department of Information and Communications Technology (DICT) through the DICT Digital Workforce Hub. Completed 4 hours of training in Build Python Web Apps with Flask on 12 October 2026 under Director IV Dr. Jennalyn G. Raviz (ICT Literacy and Competency Development Bureau). Credential ID: D-0358148083JM.",
      isSample: false
    },
    {
      id: "cert-3",
      title: "Principles of Web Development & HTML",
      issuer: "Department of Information and Communications Technology (DICT)",
      issuerOrg: "DICT Digital Workforce Hub",
      dateIssued: "13 October 2026",
      duration: "8 Hours",
      signatory: "Dr. Jennalyn G. Raviz",
      verificationId: "D- 6576526202JM",
      image: "assets/images/certificates/cert-3.png",
      downloadPath: "assets/images/certificates/cert-3.png",
      category: "Web Development",
      skillsCovered: "Web Architecture, Semantic HTML, Document Structure, Web Accessibility, Front-End Basics",
      description:
        "Official Certificate of Completion awarded by the Department of Information and Communications Technology (DICT) through the DICT Digital Workforce Hub. Completed 8 hours of foundational training in Principles of Web Development and Introduction to HTML on 13 October 2026 under Director IV Dr. Jennalyn G. Raviz (ICT Literacy and Competency Development Bureau). Credential ID: D- 6576526202JM.",
      isSample: false
    },
    {
      id: "cert-4",
      title: "UI/UX Design Excellence",
      issuer: "Certificate of Recognition",
      issuerOrg: "Design & Technology Recognition Award",
      dateIssued: "October 2026",
      duration: "Award of Recognition",
      signatory: "Design Evaluation Board",
      verificationId: "REC-2026-UIUX-0842",
      image: "assets/images/certificates/cert-4.png",
      downloadPath: "assets/images/certificates/cert-4.png",
      category: "UI/UX Design",
      skillsCovered: "Design Thinking, Interface Clarity, Thoughtful User Experience, Wireframing, User Research",
      description:
        "Official Certificate of Recognition presented to Jan Marinelle Auditor for demonstrated commitment and achievement in digital design. Commended for excellence in design thinking, interface clarity, and the creation of thoughtful, human-centered user experiences.",
      isSample: false
    },
    {
      id: "cert-5",
      title: "Web Development Excellence",
      issuer: "Certificate of Recognition",
      issuerOrg: "Technology Innovation & Review Committee",
      dateIssued: "October 2026",
      duration: "Award of Recognition",
      signatory: "Technical Evaluation Board",
      verificationId: "REC-2026-WDEV-0951",
      image: "assets/images/certificates/cert-5.png",
      downloadPath: "assets/images/certificates/cert-5.png",
      category: "Web Development",
      skillsCovered: "Front-End Development, Analytical Problem Solving, Technical Proficiency, Functional Web Solutions",
      description:
        "Official Certificate of Recognition presented to Jan Marinelle Auditor for demonstrated commitment and achievement in web development. Honored for technical proficiency, structured problem-solving, and the creation of functional and impactful web solutions.",
      isSample: false
    }
  ]
};

// Freeze the configuration to prevent accidental runtime mutations
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_CONFIG);
}
