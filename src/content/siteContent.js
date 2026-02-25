import resumePdf from '../assets/Harshish Resume.pdf'

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
      leetcode: 'https://leetcode.com/u/harshish10/',
      resume: resumePdf,
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
    roleTags: ['Machine Learning Engineer', 'Software Developer'],
    description:"Building usable tools and end to end ML pipelines, that you will actually want to use twice.",
    ctaText: 'Get in Touch',
    scrollLabel: 'Scroll',
    socialButtons: [
      { key: 'github', label: 'GitHub' },
      { key: 'linkedin', label: 'LinkedIn' },
      { key: 'leetcode', label: 'LeetCode' },
    ],
  },

  about: {
    imageAlt: 'Harshish Bedi',
    bioParagraphs: [
  [
    { text: 'Machine Learning Engineer building ' },
    { text: 'performance-driven AI systems', style: 'strong' },
    {
      text: '. I turn research ideas into production software, from GPU-accelerated data engines to real-time inference services that actually ship and scale.',
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
        role: 'Machine Learning Engineer',
        company: 'Rutgers RUCI',
        period: '2024 — Present',
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
        period: '2020 — 2022',
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
  line1: "Good teams",
  line2: "need builders.",
  accent: "I build.",
},
    blurb:
      'I work on systems, models, and infrastructure that solve real problems. If you need someone who ships and thinks deeply, reach out.',
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
