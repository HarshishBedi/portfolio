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
    links: [
      { label: 'About', id: 'about' },
      { label: 'Experience', id: 'experience' },
      { label: 'Projects', id: 'projects' },
      { label: 'Contact', id: 'contact' },
    ],
  },

  hero: {
    roleTags: ['Machine Learning Engineer', 'Software Developer'],
    description:
      'Building usable tools and end to end ML pipelines, that you will actually want to use twice.',
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
        { text: 'performance-critical systems', style: 'em' },
        {
          text: '. I architect solutions that bridge the gap between research and production — from CUDA-accelerated parsers to real-time inference pipelines.',
        },
      ],
      [
        { text: 'Currently pursuing my MS in Computer Science at ' },
        { text: 'Rutgers University', style: 'strong' },
        {
          text: ', where I research transit resilience using graph neural networks and build computer vision pipelines for aerial infrastructure detection.',
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
        goal: 'Systems-Level ML',
        detail: 'Low-latency inference engines and model optimization at the edge',
      },
      {
        goal: 'Quantitative Engineering',
        detail: 'High-frequency signal processing and order book microstructure',
      },
    ],
    roles: [
      {
        role: 'Machine Learning Engineer',
        company: 'Rutgers RUCI',
        period: '2024 — Present',
        highlights: [
          'Transit resilience modeling with graph networks (1.2M+ riders)',
          'Graph attention network — 2.23M edge processing pipeline',
          'Lead Author: Climate Hazards & Transit paper',
        ],
      },
      {
        role: 'Software Engineer',
        company: 'Rutgers CAIT',
        period: '2024 — 2025',
        highlights: [
          'Computer vision pipeline — 8% error reduction',
          'YOLO retraining for aerial detection (+14% accuracy)',
          'Automated annotation — 94% manual effort saved',
        ],
      },
      {
        role: 'Research Assistant',
        company: 'Rail Transit Lab',
        period: '2024',
        letterUrl: '/assets/RA%20RTLab%20-%20Rec%20Letter.pdf',
        letterStickerText: 'LOR',
        letterTitle: 'RA RTLab - Rec Letter',
        highlights: [
          'Sub-200ms real-time arrival predictions',
          'GPS accuracy +30% via sensor fusion',
          'AWS CI/CD — 37.9% friction reduction',
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
        link: '#',
      },
      {
        id: '03',
        title: 'SigFlow',
        desc: 'NASDAQ ITCH v5 protocol parser. Nanosecond-level order book reconstruction using CUDA-accelerated processing.',
        stack: ['CUDA', 'C++', 'Python', 'NumPy'],
        link: '#',
      },
      {
        id: '04',
        title: 'R-Nav',
        desc: 'Autonomous navigation CNN achieving 95.7% accuracy. GPU-optimized training pipeline with real-time ROS integration.',
        stack: ['PyTorch', 'CNN', 'ROS', 'Python'],
        link: '#',
      },
    ],
  },

  contact: {
    heading: {
      line1: "Let's build",
      line2: 'something',
      accent: 'great',
    },
    blurb:
      'Open to collaborations, research opportunities, and interesting engineering challenges. Drop a message or reach out through any of the channels below.',
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
      messagePlaceholder: 'Tell me about your project...',
      submitIdle: 'Send Message',
      submitSending: 'Sending...',
      submitSuccess: '✓ Sent!',
      submitError: 'Failed – try again',
    },
    footer: {
      builtWith: 'Built with React + Three.js',
    },
  },
}
