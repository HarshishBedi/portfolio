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
        { text: 'Machine Learning Engineer with a sharp focus on ' },
        { text: 'performance-critical systems', style: 'strong' },
        {
          text: '. I architect solutions that bridge the gap between research and production — from CUDA-accelerated parsers to real-time inference pipelines.',
        },
      ],
      [
        { text: 'Graduated with my MS in Computer Science at ' },
        { text: 'Rutgers University', style: 'strong' },
        {
          text: ', where I researched transit resilience using graph neural networks and built computer vision pipelines for aerial infrastructure detection.',
        },
      ],
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: 'MS Computer Science',
        school: 'Rutgers University, NJ',
        year: '2024 — 2026',
      },
      {
        degree: 'BE Computer Science',
        school: 'University of Mumbai, IN',
        year: '2019 — 2023',
      },
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
        goal: 'Chasing Leetcode Guardian',
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
    ],
    pdfCloseText: 'Close',
    pdfCloseAriaLabel: 'Close recommendation letter viewer',
  },

  projects: {
    items: [
      {
        id: '01',
        title: 'Utilbelt.io',
        desc: 'Privacy-first developer toolkit with 100% client-side logic via WebAssembly and JS. Zero data leaves the browser.',
        stack: ['React', 'Vite', 'PWA', 'WebAssembly'],
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
        title: 'SigFlow',
        desc: 'NASDAQ ITCH v5 protocol parser. Nanosecond-level order book reconstruction using CUDA-accelerated processing.',
        stack: ['CUDA', 'C++', 'Python', 'NumPy'],
        link: 'https://github.com/HarshishBedi/SigFlow-py',
      },
      {
        id: '04',
        title: 'R-Nav',
        desc: 'Autonomous navigation CNN achieving 95.7% accuracy. GPU-optimized training pipeline with real-time ROS integration.',
        stack: ['PyTorch', 'CNN', 'ROS', 'Python'],
        link: 'https://github.com/kunaldudhavat/Space-Rescue-Mission',
      },
    ],
  },

  contact: {
  heading: {
  line1: "Good teams",
  line2: "need builders.",
  accent: "I build",
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
