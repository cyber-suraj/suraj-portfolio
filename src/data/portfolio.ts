/**
 * Central portfolio data — customized for Suraj Khanase.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Suraj Balasaheb Khanase',
  displayName: 'Suraj Khanase',
  firstName: 'SURAJ',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SURAJ ORIGINAL',
  role: 'CS & Data Science Student | AI Developer',
  tagline: ['Aspiring AI/ML Engineer', 'Generative AI', 'Data Science'],
  intro:
    'A Computer Science and Engineering student specializing in Data Science, interested in Artificial Intelligence, Generative AI, and digital product building. I have practical social media growth knowledge and have built an Instagram audience of over 30,000 followers.',
  location: 'Pune, Maharashtra, India',
  
  email: 'surajkhanse@gmail.com', 
  links: {
    linkedin: 'https://www.linkedin.com/in/suraj-khanase-25a429378/',
    github: 'https://github.com/cyber-suraj',
    instagram: 'https://www.instagram.com/soorajk06',
    x: 'https://x.com/heySuraj_SK',
    devpost: 'https://devpost.com/surajkhanse/challenges'
  },
  
  resumePdf: '/assets/Suraj_Khanase_Resume_Final.pdf', 
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Suraj Khanase',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'SaaS Product Development', 'Social Media Growth'],
};

export const education = [
  {
    school: 'NIAT | NxtWave of Innovation in Advanced Technologies collaboration with Ajeenkya D.Y. Patil University Pune | (NIAT X ADYPU)',
    place: 'Pune',
    degree: 'Bachelor of Technology — Computer Science and Engineering (Data Science & AI/ML)',
    period: '2025 – 2029 (Expected)',
    score: '2nd Year',
  },
  {
    school: 'Additional Learning',
    place: 'Self-Taught',
    degree: 'AI, Machine Learning, LLM Applications, Text Embeddings',
    period: 'Present',
    score: 'Continuous',
  },
];

export const experience = [
  {
    company: 'Google',
    role: 'Student Ambassador',
    place: 'Campus',
    period: '2026',
    points: [
      'Participation in student-focused technology initiatives, AI exploration, and campus engagement activities.',
      'Involved in Google Gemini and AI tool awareness, creative AI challenges, and technology content creation.',
      'Community participation and driving student engagement.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  devpost?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'bankconnect-pro',
    title: 'BankConnect Pro',
    year: '2026',
    genre: 'Full-Stack • Fintech',
    logline: 'A real-time digital platform that connects customers and bank staff for loan applications and document tracking.',
    stack: ['Python', 'React', 'Database'],
    build: [
      'Developed a real-time digital platform connecting customers and bank staff.',
      'Enabled customers to apply for loans, upload documents, and track application progress.',
      'Allowed bank staff to instantly receive applications, verify documents, detect fraud, and manage tasks efficiently.',
      'Ensured data security through role-based access control.',
    ],
    features: [
      'Loan application tracking',
      'Document upload & verification',
      'Fraud detection dashboard',
      'Role-based access control',
    ],
    metrics: [
      { value: 'Real-time', label: 'Platform' },
      { value: 'Secure', label: 'Auth' },
      { value: 'Fintech', label: 'Domain' },
    ],
    github: 'https://github.com/cyber-suraj',
    devpost: 'https://devpost.com/software/bankconnect-pro',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'smart-recipe-generator',
    title: 'Smart Recipe Generator',
    year: 'Concept',
    genre: 'Generative AI • Web',
    logline: 'An AI-powered application for generating recipes and cooking instructions from user-provided ingredients.',
    stack: ['Python', 'Gradio', 'Groq API', 'LLMs'],
    build: [
      'Designed an AI-powered application concept for generating recipes.',
      'Utilized LLMs and Prompt Engineering to create step-by-step cooking instructions.',
      'Planned interactive web interface using Gradio.',
    ],
    features: [
      'Ingredient-based recipe generation',
      'Step-by-step instructions',
      'Preference-aware suggestions',
    ],
    metrics: [
      { value: 'Concept', label: 'Stage' },
      { value: 'LLMs', label: 'Core Tech' },
      { value: 'Gradio', label: 'UI' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'universal-settings-search',
    title: 'AI Universal Settings',
    year: 'Concept',
    genre: 'AI • NLP • Product',
    logline: 'An intelligent interface that helps users find device settings through natural-language or voice commands.',
    stack: ['Python', 'NLP', 'AI Agents'],
    build: [
      'Concept for an intelligent interface utilizing natural-language processing.',
      'Planned features include intent recognition, synonym matching, and context-aware settings discovery.',
      'Aims to enable direct setting changes where supported by platform permissions.',
    ],
    features: [
      'Natural-language settings search',
      'Voice interaction',
      'Context-aware discovery',
    ],
    metrics: [
      { value: 'Concept', label: 'Stage' },
      { value: 'NLP', label: 'Core Tech' },
      { value: 'Planned', label: 'Status' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
  {
    id: 'sentiment-classification',
    title: 'Sentiment Classification',
    year: 'Learning',
    genre: 'Machine Learning • NLP',
    logline: 'A learning initiative exploring text embeddings and text classification for sentiment analysis.',
    stack: ['Python', 'Text Embeddings', 'Machine Learning'],
    build: [
      'Exploring semantic text representations and vector representations.',
      'Focusing on sentiment classification techniques and model evaluation.',
      'Building foundational knowledge in NLP.',
    ],
    features: [
      'Vector representations',
      'Sentiment analysis',
      'Model evaluation',
    ],
    metrics: [
      { value: 'Learning', label: 'Stage' },
      { value: 'NLP', label: 'Domain' },
      { value: 'Vectors', label: 'Focus' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'google-ambassador',
    title: 'Student Ambassador',
    org: 'Google',
    detail: 'Selected for the 2026 Google Student Ambassador Program (GID 10523).',
    laurel: 'Google Program',
  },
  {
    id: 'instagram-growth',
    title: '30,000+ Followers',
    org: 'Instagram',
    detail: 'Built an Instagram audience of over 30,000 followers through content strategy and engagement.',
    laurel: 'Social Growth',
    link: 'https://www.instagram.com/soorajk06'
  },
  {
    id: 'ai-exploration',
    title: 'AI Innovator',
    org: 'Project Development',
    detail: 'Building practical AI solutions, developing digital products, and growing online communities.',
    laurel: 'Tech Builder',
  },
  {
    id: 'creative-ai',
    title: 'AI Video Production',
    org: 'Creative Tech',
    detail: 'Exploring AI tools for cinematic videos, short-form reels, and digital media.',
    laurel: 'Creative AI',
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Learner',
    org: 'Continuous Education',
    detail: 'Mastering modern web technologies and automation tools.',
    laurel: 'Developer',
  },
];

export type Certification = { issuer: string; name: string; link: string; image?: string };

export const certifications: Certification[] = [
  { issuer: 'The Legal School', name: 'Basics of Intellectual Property Law', link: '', image: '/assets/legal-cert.jpg' },
  { issuer: 'NIAT', name: 'Worst UI/UX Hackathon - II Runner Up', link: '', image: '/assets/niat-hackathon.jpg' },
  { issuer: 'NIAT', name: 'Meme Mania - 2nd Runner Up', link: '', image: '/assets/niat-meme.jpg' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Generative AI & Data Science',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Generative AI', mono: 'Gen' },
      { name: 'LLMs', mono: 'Llm' },
      { name: 'Prompt Engineering', mono: 'Pr' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'NLP', mono: 'Nlp' },
      { name: 'Vector Search', mono: 'Vec' },
      { name: 'Hugging Face', mono: 'Hf' },
      { name: 'PyTorch', mono: 'Pt' },
    ],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    subtitle: 'Building web products',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Git / GitHub', mono: 'Gt' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Product',
    subtitle: 'Workflows & SaaS',
    skills: [
      { name: 'Make.com', mono: 'Mk' },
      { name: 'n8n', mono: 'N8' },
      { name: 'Workflow Automation', mono: 'Wf' },
      { name: 'AI Agents', mono: 'Ag' },
      { name: 'Google Apps Script', mono: 'Gs' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'SaaS Development', mono: 'SaaS' },
    ],
  },
  {
    id: 'social-media',
    title: 'Digital Marketing',
    subtitle: 'Audience & Growth',
    skills: [
      { name: 'Social Media Strategy', mono: 'Sm' },
      { name: 'Content Creation', mono: 'Cc' },
      { name: 'Instagram Growth', mono: 'Ig' },
      { name: 'Audience Engagement', mono: 'Ae' },
      { name: 'Analytics', mono: 'An' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Projects', 'Machine Learning'],
  'Machine Learning': ['Sentiment Classification'],
  'Generative AI': ['Smart Recipe Generator'],
  LLMs: ['Smart Recipe Generator'],
  React: ['BankConnect Pro'],
  'Git / GitHub': ['Portfolio Management'],
  'Workflow Automation': ['Automation & Product Building'],
  'Instagram Growth': ['30,000+ Followers'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Education',
    synopsis: 'Beginning the journey in Computer Science and Engineering at ADYPU, Pune.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: 'B.Tech in Computer Science and Engineering, specializing in Data Science.',
        tags: ['B.Tech', 'Computer Science', 'Data Science'],
        runtime: '2025 – 2029',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI',
    period: 'Learning & Building',
    synopsis: 'Diving deep into Artificial Intelligence, Machine Learning, and Generative AI.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The AI Explorer',
        description: 'Mastering Python, exploring LLMs, and building AI-powered applications.',
        tags: ['Python', 'LLMs', 'Prompt Engineering'],
        runtime: 'Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Product Builder',
        description: 'Conceptualizing smart tools like the AI Universal Settings Search and Smart Recipe Generator.',
        tags: ['AI Concepts', 'Product Ideation'],
        runtime: 'Present',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Google Era',
    period: '2026',
    synopsis: 'Selected as a Google Student Ambassador, engaging with campus communities and AI tools.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Ambassador',
        description: 'Leading technology initiatives, driving AI awareness, and creating content.',
        tags: ['Google', 'Leadership', 'Community'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Digital Growth',
    period: 'Social Media',
    synopsis: 'Building an Instagram audience of over 30,000 followers and mastering digital marketing.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Creator',
        description: 'Understanding social media strategy, content hooks, and organic reach optimization.',
        tags: ['Instagram', 'Growth', 'Strategy'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'The Future',
    synopsis: 'The goals ahead: AI/ML engineering, SaaS development, and technology entrepreneurship.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Aiming to combine technical skills with digital marketing to build impactful software products.',
        tags: ['SaaS', 'Entrepreneurship', 'AI/ML'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Leadership', title: 'Google Ambassador', detail: '2026 Cohort', palette: ocean },
  { label: 'Social Growth', title: '30,000+ Followers', detail: 'Instagram', palette: jade },
  { label: 'Core Language', title: 'Python', detail: 'Data Science & AI', palette: amber },
  { label: 'Focus Area', title: 'Generative AI', detail: 'LLMs & RAG', palette: crimson },
  { label: 'Web Tech', title: 'React & Next.js', detail: 'Full-stack development', palette: violet },
  { label: 'Automation', title: 'Make.com & n8n', detail: 'Workflow automation', palette: ocean },
  { label: 'Project', title: 'BankConnect Pro', detail: 'Real-time Fintech Platform', palette: amber },
  { label: 'Project', title: 'Smart Recipe Gen', detail: 'LLM Application Concept', palette: jade },
  { label: 'Interest', title: 'SaaS Product Dev', detail: 'Building digital tools', palette: crimson },
  { label: 'Goal', title: 'AI/ML Engineer', detail: 'Career Objective', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech CSE Data Science & AI/ML',
    lines: ['NIAT X ADYPU', 'Specialization: Data Science & AI/ML'],
    chips: ['Expected 2029'],
  },
  {
    kicker: 'Leadership',
    title: 'Google Ambassador',
    lines: ['Google Student Ambassador Program 2026', 'GID 10523'],
    chips: ['AI Awareness', 'Campus Engagement'],
  },
  {
    kicker: 'Skills',
    title: 'AI & Full-Stack',
    lines: ['Python, Machine Learning, Generative AI', 'React, Next.js, Node.js', 'Make.com, n8n, Automation'],
    chips: ['Python', 'React', 'LLMs', 'Automation'],
  },
  {
    kicker: 'Projects',
    title: 'Platforms & AI',
    lines: ['BankConnect Pro — Fintech Platform', 'Smart Recipe Generator — LLM & Groq API', 'AI Universal Settings Search — NLP'],
  },
  {
    kicker: 'Social Media',
    title: '30,000+ Community',
    lines: ['Built an Instagram audience of over 30,000 followers.', 'Strategic content creation and audience engagement.'],
  },
  {
    kicker: 'Current mission',
    title: 'Building the Future',
    lines: ['Aspiring AI/ML Engineer', 'Exploring SaaS Product Development & Automation'],
  },
];

export type ProfileId = 'suraj' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'suraj',
    name: 'Suraj',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Goals', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
