export interface ProductModule {
  number: number;
  title: string;
  focus: string;
  psychologicalMechanism: string;
  practicalOutput: string;
  estimatedTime: string;
}

export interface Product {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  format: string;
  description: string;
  image: string;
  featured?: boolean;
  gumroadUrl: string;
  highlights: string[];
  modules?: ProductModule[];
  bonuses?: string[];
  deliverables: string[];
}

export const HERO_IMAGE = '/src/assets/images/hero_atmospheric_sanctuary_1790637678204.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'extreme-path',
    title: 'The Extreme Path',
    badge: 'Flagship Masterclass',
    tagline: 'The Psychology and Practice of Extraordinary Achievement',
    price: 34,
    originalPrice: 65,
    format: '8-Module Video & Audio Masterclass + Blueprint Workbook',
    image: '/src/assets/images/cover_extreme_path_1790637646756.jpg',
    featured: true,
    gumroadUrl: 'https://biniyamsafayo.gumroad.com/',
    description:
      'An 8-module premium transformation program built on agency, belief, discipline, endurance, and grace. Not a motivation hype tape or generic affirmations — a buildable architecture for pursuing goals that require years of unobserved execution.',
    highlights: [
      'Eight complete modules with systematic psychological deconstructions',
      'The 6-stage transformation loop: Understand → Question → Rebuild → Practice → Adapt → Integrate',
      'The Extreme Goal Blueprint — comprehensive step-by-step master workbook',
      'Rebuilt belief engine based on verifiable behavioral evidence over blind optimism',
      'Endurance frameworks that keep your purpose fixed while keeping your methods fluid'
    ],
    modules: [
      {
        number: 1,
        title: 'The Question of Control',
        focus: 'Differentiating internal agency from external turbulence',
        psychologicalMechanism: 'Internal vs. External Locus of Control (Rotter) & Epictetian Dichotomy',
        practicalOutput: 'Agency Audit Map & Controllable Friction Matrix',
        estimatedTime: '45 mins'
      },
      {
        number: 2,
        title: 'The Psychology of Possibility',
        focus: 'Expanding perceived horizon beyond social conditioning',
        psychologicalMechanism: 'Learned Helplessness vs. Learned Optimism (Seligman) & Cognitive Bias Reframing',
        practicalOutput: 'Anti-Boundary Assessment',
        estimatedTime: '50 mins'
      },
      {
        number: 3,
        title: 'The Architecture of the Inner Mind',
        focus: 'Auditing the default narrative and removing internal resistance',
        psychologicalMechanism: 'Self-Narrative Theory, Negative Self-Talk Deconstruction & Emotional Regulation',
        practicalOutput: 'Default Script Disassembly Sheet',
        estimatedTime: '55 mins'
      },
      {
        number: 4,
        title: 'The Craft of Self-Belief',
        focus: 'Constructing authentic confidence from empirical evidence',
        psychologicalMechanism: 'Self-Efficacy Model (Bandura) & Incremental Proof Loops',
        practicalOutput: 'Verifiable Wins Ledger',
        estimatedTime: '45 mins'
      },
      {
        number: 5,
        title: 'The Engine: Motivation, Willpower, Discipline',
        focus: 'Treating willpower as seed capital invested into automated systems',
        psychologicalMechanism: 'Ego Depletion Mitigation & Implementation Intentions (Gollwitzer)',
        practicalOutput: 'Daily Operational Protocol Builder',
        estimatedTime: '60 mins'
      },
      {
        number: 6,
        title: 'The Art of Endurance',
        focus: 'Surviving the quiet plateau where no external validation arrives',
        psychologicalMechanism: 'Dopaminergic Baseline Realignment & Friction Inversion',
        practicalOutput: 'Plateau Survival Checklist',
        estimatedTime: '50 mins'
      },
      {
        number: 7,
        title: 'Grace, Luck, and the Uncontrollable',
        focus: 'Navigating unfair randomness without becoming bitter or fragile',
        psychologicalMechanism: 'Radical Acceptance, Anti-Fragility (Taleb) & Stoic Equanimity',
        practicalOutput: 'Black Swan Contingency Plan',
        estimatedTime: '40 mins'
      },
      {
        number: 8,
        title: 'The Extreme Path: Integration',
        focus: 'Synthesizing all pillars into a durable, decade-long identity',
        psychologicalMechanism: 'Identity Crystallization & Self-Determination Theory (Deci & Ryan)',
        practicalOutput: 'Final Project: The Extreme Goal Blueprint',
        estimatedTime: '70 mins'
      }
    ],
    deliverables: [
      'Lifetime access to all 8 core modules in HD video & audio',
      'Downloadable printable Extreme Goal Blueprint (62 pages)',
      'Audio-only mobile listening feeds for on-the-go study',
      'Interactive reflection worksheets and implementation rubrics'
    ]
  },
  {
    id: 'inevitable-self',
    title: 'The Inevitable Self',
    badge: 'Systematic Operating System',
    tagline: 'The Framework for Aligning Daily Action with Long-Term Growth',
    price: 27,
    originalPrice: 49,
    format: '5-Week Action Course + The Living Dashboard Suite',
    image: '/src/assets/images/cover_inevitable_self_1790637657158.jpg',
    featured: false,
    gumroadUrl: 'https://biniyamsafayo.gumroad.com/',
    description:
      'A 5-module, 5-week digital course that replaces fragmented growth with one living dashboard — the single coherent conversation with yourself. Designed to be built once and calibrated for a lifetime.',
    highlights: [
      'Five structured modules over 5 weeks to build your life operating system',
      'The Compass — clear articulation of ultimate vision, anti-vision, and non-negotiable boundaries',
      'The Targets — translating ambitious lag goals into weekly lead measures and pre-mortems',
      'Identity & Habits — micro-evidence logging, two-minute rules, and "never miss twice" mechanics',
      'The Daily Engine — deep work blocks and the Minimum Viable Day protocol for low-energy seasons'
    ],
    bonuses: [
      'One-Page Living Dashboard Template (Notion, PDF, Excel)',
      'Anti-Vision Letter Workbook (Defining the disaster to escape)',
      'Five-Dimension Horizon Worksheet (1, 3, 5 & 10-year alignment)',
      'Balanced Goal Matrix & Lead-Measure Scorecard',
      'If/Then Pre-Mortem Contingency Playbook',
      'Sunday 15-Minute Calibration Checklist',
      'Monthly Compass Audit & Friction Diagnosis Guide'
    ],
    deliverables: [
      '5 comprehensive video & audio modules with full transcripts',
      '7 ready-to-use digital templates and printable worksheets',
      'Lifetime access to the Living Dashboard ecosystem'
    ]
  },
  {
    id: 'architecture-of-inevitable',
    title: 'The Architecture of the Inevitable',
    badge: 'Definitive Ebook & Workbook',
    tagline: 'Why Fragmented Systems Fail and How to Build a Life That Finishes',
    price: 7,
    originalPrice: 19,
    format: 'Digital Book (PDF, ePub) + Integrated Workbook',
    image: '/src/assets/images/cover_architecture_inevitable_1790637667582.jpg',
    featured: false,
    gumroadUrl: 'https://biniyamsafayo.gumroad.com/',
    description:
      'The diagnostic book that dismantles the fragmented productivity industry. Stop switching between 5 apps and scattered notebooks. Learn how vision acts as foundation, goals as architecture, habits as bricks, and daily execution as mortar.',
    highlights: [
      '16 complete chapters unpacking the mechanics of long-term completion',
      'The Fragmented Trap: why tool-switching burns cognitive energy and causes burnout',
      'The Psychology of the Inevitable: shifting from emotional motivation to structural necessity',
      'Deep Work Architecture and the "Swiss Cheese" method for high-friction projects',
      'Workbook exercises directly integrated at the end of every core chapter'
    ],
    deliverables: [
      'Immediate download in universal PDF and ePub formats for all e-readers',
      'Interactive fillable PDF workbook sections for direct note-taking',
      'Curated reading roadmap and implementation summary'
    ]
  }
];

export const SAMPLE_CHAPTER = {
  bookTitle: 'The Architecture of the Inevitable',
  chapterNumber: 1,
  chapterTitle: 'The Fragmented Trap',
  subtitle: 'Why scattered tools guarantee abandoned goals, and the physics of the living dashboard.',
  content: [
    `You did not fail because you were weak. You failed because you were dispersed.`,
    `Consider how the modern ambitious individual organizes their life: their grandest aspirations are scribbled in an elegant leather journal on a quiet Sunday morning. Their weekly tasks reside in a digital project manager. Their habits are monitored in a mobile widget that dings at 7:00 AM. Their calendar is a chaotic warzone of overlapping invites. Their reading notes are trapped in a bookmarking tool they have not opened in four months.`,
    `On paper, this looks like organization. In neurological reality, it is a cognitive tax that drains your finite prefrontal energy before you ever touch the actual work.`,
    `Every time you must switch environments to understand where you are and what matters next, your brain pays a switching cost. When a demanding Tuesday arrives—when your energy is low, when an unexpected emergency detonates your morning, when you are exhausted—this fragmented machinery collapses immediately. You do not consult the journal. You ignore the widget. You abandon the project board. You feel a creeping sense of moral inadequacy: "I just lack willpower."`,
    `This is a lie. Willpower was never meant to sustain daily operations. Willpower is seed capital. It exists to construct architecture. Once the architecture is erected, it must carry the weight of your life on the days when you feel nothing at all.`,
    `The antidote is not another application. It is centralization: a single living dashboard where vision serves as the foundation, goals act as the architecture, habits are the bricks, and daily execution is the mortar. When these components share a single surface, an alteration in your daily reality immediately reverberates up into your 10-year horizon.`,
    `You stop starting. You start finishing.`
  ]
};

export const TESTIMONIALS = [
  {
    name: 'Dr. Marcus Vance',
    role: 'Cognitive Neuroscientist & Research Fellow',
    organization: 'Cambridge, UK',
    quote:
      'What separates Biniyam’s work from the ocean of self-improvement noise is intellectual honesty. He names the behavioral mechanisms, cites empirical reality, and refuses to sell magical thinking. The Extreme Path restructured how I approach a multi-year laboratory project.',
    productUsed: 'The Extreme Path'
  },
  {
    name: 'Elena Rostova',
    role: 'Founder & Technical Lead',
    organization: 'Aethel Systems',
    quote:
      'The Inevitable Self cured my tool addiction. I spent three years jumping between Notion, Obsidian, Todoist, and physical notebooks, constantly rebooting my life. The Living Dashboard brought everything into a single, quiet sheet. I haven’t missed a weekly calibration in nine months.',
    productUsed: 'The Inevitable Self'
  },
  {
    name: 'Julian Thorne',
    role: 'Architectural Director & Writer',
    organization: 'Melbourne, Australia',
    quote:
      'The Architecture of the Inevitable is the clearest diagnosis of why modern people fail to finish what they start. At $7, it delivers more operational clarity than $2,000 executive masterminds. Essential reading for anyone carrying a heavy ambition.',
    productUsed: 'The Architecture of the Inevitable'
  }
];

export const FAQS = [
  {
    question: 'How do I get access to the courses and ebooks after purchase?',
    answer:
      'All purchases are securely handled via Gumroad (biniyamsafayo.gumroad.com). Immediately upon checkout, you receive instant access to your download links, audio feeds, and PDF/ePub materials, as well as an email receipt with permanent lifetime access links.',
    category: 'Access'
  },
  {
    question: 'Which of the three programs should I start with?',
    answer:
      'If you want the complete, comprehensive psychological system for pursuing grueling, multi-year goals, choose The Extreme Path ($34). If you want an operational, 5-week framework to consolidate your daily habits, vision, and weekly routines into one living dashboard, choose The Inevitable Self ($27). If you prefer a focused foundational read with workbook exercises, start with The Architecture of the Inevitable ($7). You can also get all three together in the Complete Master Bundle.',
    category: 'Recommendation'
  },
  {
    question: 'Are these materials based on motivation, affirmations, or "manifesting"?',
    answer:
      'No. The entire philosophy is explicitly anti-hype. There are no affirmations, no toxic positivity, and no promises that passion alone guarantees outcomes. Where cognitive science exists, it is cited; where classical philosophy applies, it is analyzed. The work is designed to help you function when motivation is entirely absent.',
    category: 'Philosophy'
  },
  {
    question: 'Do I need to buy expensive software or apps to use the Living Dashboard?',
    answer:
      'Zero additional software is required. The Living Dashboard is an architectural methodology, not an app subscription. You receive ready-to-use templates for Notion, Google Sheets/Excel, and printable PDF paper worksheets. You can run the entire system inside a $2 notebook.',
    category: 'Tools'
  },
  {
    question: 'What is the refund and satisfaction policy?',
    answer:
      'Every product is backed by a 30-day, no-questions-asked satisfaction guarantee. If you study the material, complete the exercises, and do not find it substantially more rigorous and practical than anything you have previously encountered, email binisafaye@gmail.com for a full, prompt refund.',
    category: 'Guarantee'
  },
  {
    question: 'Can I access the course on my phone or tablet?',
    answer:
      'Yes. All video modules, audio recordings, worksheets, and reader files are fully responsive and work seamlessly on iOS, Android, Kindle, and desktop browsers.',
    category: 'Technical'
  }
];
