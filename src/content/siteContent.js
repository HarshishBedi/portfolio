export const siteContent = {
  profile: {
    firstName: 'Harshish',
    lastName: 'Singh Bedi',
    fullName: 'Harshish Singh Bedi',
    logo: 'HSB',
    links: {
      email: 'mailto:harshishsbedi@gmail.com',
      phone: 'tel:+17323222705',
      github: 'https://github.com/harshishbedi',
      linkedin: 'https://linkedin.com/in/harshishbedi',
      leetcode: 'https://leetcode.com/u/harshishbedi/',
      resume: '/Harshish Resume.pdf',
    },
  },

  sections: {
    about: { number: '01', title: 'About' },
    experience: { number: '02', title: 'Experience' },
    projects: { number: '03', title: 'Projects' },
    contact: { number: '04', title: 'Contact' },
  },

  navbar: {
    logoDot: '.',
    toggleLabel: 'Toggle menu',
    resumeButtonLabel: 'View Resume',
    resumeTitle: 'Harshish Resume',
    pdfCloseText: 'Close',
    pdfCloseAriaLabel: 'Close resume viewer',
    resumeFallbackLinkText: 'Open resume in a new tab',
    links: [
      { label: 'About', id: 'about' },
      { label: 'Experience', id: 'experience' },
      { label: 'Projects', id: 'projects' },
      { label: 'Contact', id: 'contact' },
    ],
  },

  hero: {
    roleTags: ['Software Engineer', 'Machine Learning Engineer'],
    description: "Building usable tools and end to end ML pipelines, that you will actually want to use twice.",
    ctaText: 'Get in Touch',
    scrollLabel: 'Scroll',
    socialButtons: [
      { key: 'github', label: 'GitHub' },
      { key: 'linkedin', label: 'LinkedIn' },
      { key: 'leetcode', label: 'LeetCode' },
    ],
  },

  notification: {
    app: 'Career',
    time: 'now',
    title: 'Google Hired Me!',
    body: 'Starting as a Software Engineer in 2026.',
    expandedBody:
      'I’m thrilled to share that I’m joining Google as a Software Engineer in 2026. Grateful for everyone who was part of the journey.',
    cta: { label: 'Read more', href: 'https://linkedin.com/in/harshishbedi' },
  },

  about: {
    imageAlt: 'Harshish Bedi',
    bioParagraphs: [
      [
        { text: 'Software Engineer at ' },
        { text: 'Google', style: 'strong' },
        {
          text: ', building on a background in ML systems and production software. From GPU-accelerated data engines to real-time inference services — I ship things that scale.',
        },
      ],
      [
        { text: 'MS in Computer Science from ' },
        { text: 'Rutgers University', style: 'strong' },
        {
          text: ', where I worked on graph-based risk modeling and computer vision systems for large-scale infrastructure analysis. I care about speed, correctness, and measurable impact. Models are interesting. Systems that perform are better.',
        },
      ],
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: 'MS Computer Science',
        school: 'Rutgers University',
        year: '2024 — 2026',
      }
    ],
    skills: [
      'Python',
      'C++',
      'Java',
      'JavaScript',
      'SQL',
      'PyTorch',
      'TensorFlow',
      'CUDA',
      'OpenCV',
      'LangChain',
      'FastAPI',
      'React',
      'Docker',
      'Kubernetes',
      'AWS',
      'PostgreSQL',
      'Redis',
      'Git',
    ],
  },

  experience: {
    pursuingLabel: "What I'm Pursuing",
    historyLabel: "Where I've Been",
    pursuing: [
      {
        goal: 'Publishing Research',
        detail: 'Under Review at Transportation Research Part D',
      },
      {
        goal: 'Leetcode Guardian',
        detail: 'Currently a Knight with 500+ problems solved',
      },
    ],
    roles: [
      {
        role: 'Software Engineer',
        company: 'Google',
        period: '2026 — Present',
        highlights: [
          "Just a Noogler for now :)"
        ],
      },
      {
        role: 'Machine Learning Engineer',
        company: 'Rutgers RUCI',
        period: '2024 — 2026',
        highlights: [
          'Built a geospatial graph pipeline that analyzed transit vulnerability, modeled network risk, and streamlined training workflows to make resilience insights faster and easier to generate.'
        ],
      },
      {
        role: 'Software Engineer',
        company: 'Rutgers CAIT',
        period: '2024 — 2025',
        highlights: [
          'Developed computer-vision pipelines for construction safety, improving pose tracking and detection accuracy while automating data labeling to drastically speed up analysis workflows.'
        ],
      },
      {
        role: 'Research Assistant',
        company: 'Rutgers Rail & Transit Lab',
        period: '2024',
        letterUrl: '/assets/RA%20RTLab%20-%20Rec%20Letter.pdf',
        letterStickerText: 'LOR',
        letterTitle: 'RA RTLab - Rec Letter',
        highlights: [
          'Built real-time transit prediction systems by optimizing inference pipelines, improving location reliability, and streamlining cloud deployments for smoother releases.'
        ],
      },
      {
        role: 'Software Engineer',
        company: 'SolBocks',
        period: '2021 — 2023',
        highlights: [
          'Full-stack engineer on Search, building large-scale retrieval systems, improving latency, engagement, and reliability across millions of queries.'
        ],
      },
    ],
    pdfCloseText: 'Close',
    pdfCloseAriaLabel: 'Close recommendation letter viewer',
  },

  projects: {
    items: [
      {
        id: '01',
        title: 'Utilbelt',
        desc: 'Privacy-first developer toolkit with 100% client-side logic via WebAssembly and JS. Zero data leaves the browser.',
        stack: ['React', 'Vite', 'Netlify-Neon'],
        link: 'https://utilbelt.io',
      },
      {
        id: '02',
        title: 'Doc Smart',
        desc: 'RAG-powered document intelligence system. Smart 1000-char chunking with semantic vector retrieval for enterprise docs.',
        stack: ['Python', 'LangChain', 'ChromaDB', 'FastAPI'],
        link: 'https://github.com/HarshishBedi/DocSmart',
      },
      {
        id: '03',
        title: 'StructViewer',
        desc: 'Interactive data-structure visualizer for data structures with step-by-step timeline playback and operation logs.',
        stack: ['React', 'TypeScript', 'Zustand', 'Framer Motion', 'Vite'],
        link: 'https://structviewer.online/',
      },
      {
        id: '04',
        title: 'SigFlow',
        desc: 'NASDAQ ITCH v5 protocol parser. Nanosecond-level order book reconstruction using CUDA-accelerated processing.',
        stack: ['CUDA', 'C++', 'Python', 'NumPy'],
        link: 'https://github.com/HarshishBedi/SigFlow-py',
      },
    ],
  },

  contact: {
    heading: {
      line1: "Got the call.",
      line2: "Still building.",
      accent: "Let's connect.",
    },
    blurb:
      'Joining Google as a Software Engineer. Always happy to connect — whether it\'s about systems, ML, or just building cool things. Reach out.',
    channels: [
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'github', label: 'GitHub' },
      { key: 'linkedin', label: 'LinkedIn' },
    ],
    form: {
      honeypotLabel: "Don't fill this out:",
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Anything, really.',
      submitIdle: 'Send Message',
      submitSending: 'Sending...',
      submitSuccess: '✓ Sent!',
      submitError: 'Failed – try again',
    },
    footer: {
      builtWith: 'Built with React 19 + Three.js',
    },
  },
}
