import { Expertise, Faq, Links, Socials, TeamDetails, Testimonial } from "./types";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export const CONTACT_EMAIL = "lucentcodes@gmail.com";
export const X_URL = "https://x.com/_Lucentlabs";

export const links: Links[] = [
  { title: "About us", url: "#about" },
  { title: "Orderbook", url: "#orderbook" },
  { title: "Expertise", url: "#expertise" },
  { title: "Team", url: "#team" },
  { title: "FAQ", url: "#faq" },
];

export const socials: Socials[] = [
  { icon: FaXTwitter, url: X_URL, label: "Lucent Labs on X" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/company/luccentlabs/", label: "Lucent Labs on LinkedIn" },
  { icon: MdEmail, url: `mailto:${CONTACT_EMAIL}`, label: "Email Lucent Labs" },
];

/** Ecosystems we have shipped on. */
export const chains = ["Cardano", "Midnight", "Nervos CKB", "Ethereum", "Solana", "TRON"];

export const stats = [
  { value: "6", label: "Blockchains we've built on" },
  { value: "1", label: "Live product on Nervos CKB" },
  { value: "8+", label: "Years of distributed-systems experience at the helm" },
  { value: "5", label: "Core engineers across Aiken, Compact & Rust" },
];

export const values = [
  {
    title: "DeFi-first",
    desc: "We specialise in decentralized finance and blockchain-based financial protocols — not a bit of everything.",
  },
  {
    title: "Multi-chain by design",
    desc: "UTXO, account-based or privacy-first: we pick the chain that fits the product, not the other way round.",
  },
  {
    title: "Security as a habit",
    desc: "Typed contract languages, property testing and peer review on every line that moves value.",
  },
  {
    title: "Built in the open",
    desc: "We ship, share and grow with the communities we build for — from Cardano to Nervos.",
  },
];

export const expertise: Expertise[] = [
  {
    id: "defi",
    title: "DeFi & financial protocols",
    summary:
      "Exchanges, lending and token systems engineered for real liquidity and real users.",
    items: [
      "DEX & order-book exchange development",
      "Lending & borrowing protocols",
      "Stablecoin and token design",
      "Staking & yield infrastructure",
      "Tokenomics modelling",
      "Real-world asset tokenization",
    ],
  },
  {
    id: "contracts",
    title: "Smart contract engineering",
    summary:
      "Native contract languages on every chain we support, with testing built in from day one.",
    items: [
      "Aiken & Plutus on Cardano",
      "Compact on Midnight",
      "CKB scripts in Rust on Nervos",
      "Solidity on Ethereum & TRON",
      "Rust programs on Solana",
      "Contract review, testing & hardening",
    ],
  },
  {
    id: "privacy",
    title: "Privacy & zero-knowledge",
    summary:
      "Applications that protect user data without giving up compliance or auditability.",
    items: [
      "Midnight zkApp development",
      "Selective-disclosure credentials",
      "Private transactions & balances",
      "Compliance-friendly privacy design",
      "ZK circuit integration",
    ],
  },
  {
    id: "dapps",
    title: "dApps & infrastructure",
    summary:
      "The full stack around the contracts — interfaces, indexers and integrations people actually use.",
    items: [
      "Full-stack dApp development",
      "Wallet & multisig integrations",
      "Indexers, APIs & backends",
      "DAO & on-chain governance tools",
      "NFT platforms & marketplaces",
      "Protocol integrations & SDKs",
    ],
  },
];

export const orderbookFeatures = [
  {
    title: "Native to CKB",
    desc: "Designed around Nervos' Cell model rather than ported from an account-based chain.",
  },
  {
    title: "Limit orders on-chain",
    desc: "Place bids and asks at your price — every order is a verifiable on-chain object.",
  },
  {
    title: "Self-custody until filled",
    desc: "Funds stay locked to your own conditions until a trade actually settles.",
  },
  {
    title: "Transparent matching",
    desc: "Every fill can be traced and verified on Nervos Layer 1.",
  },
];

export const leader: TeamDetails = {
  name: "Lawal Musa Agah",
  role: "Founder & Lead Architect",
  imageUrl: "/lawal_image.png",
  socials: [
    { icon: FaXTwitter, url: "https://x.com/ADA_Dolphin04", label: "Lawal on X" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/musalawal04", label: "Lawal on LinkedIn" },
    { icon: MdEmail, url: "mailto:musalawal04@gmail.com", label: "Email Lawal" },
  ],
  skills: ["Leadership", "Architecture", "Cardano", "DeFi"],
  about:
    "Lawal is a blockchain architect with 8+ years of experience in distributed systems and smart contract development, particularly on Cardano. He founded Lucent Labs to engineer well-structured, high-quality decentralized systems — and leads the team across Cardano, Midnight and Nervos CKB.",
};

export const teamDetails: TeamDetails[] = [
  {
    name: "Mahadi Abuhuraira",
    role: "Head of Development / CTO",
    imageUrl: "/mahadi_image.png",
    socials: [
      { icon: FaXTwitter, url: "https://x.com/mamt4real", label: "Mahadi on X" },
      { icon: FaLinkedin, url: "https://linkedin.com/in/mamt4real", label: "Mahadi on LinkedIn" },
    ],
    skills: ["Full stack", "Cardano", "Midnight"],
    about: "Full-stack developer specialising in Cardano and Midnight.",
  },
  {
    name: "Samir Idris",
    role: "Aiken Smart Contract & Full Stack Developer",
    imageUrl: "/samir_image.png",
    socials: [
      { icon: FaXTwitter, url: "https://x.com/scientistsamir", label: "Samir on X" },
      { icon: FaLinkedin, url: "https://www.linkedin.com/in/scisamir", label: "Samir on LinkedIn" },
    ],
    skills: ["Aiken", "Compact", "Backend"],
    about: "Aiken and functional programming, focused on secure, efficient contracts.",
  },
  {
    name: "Elliot Lucky",
    role: "Compact Smart Contract & Full Stack Developer",
    imageUrl: "/elliot_image.png",
    socials: [
      { icon: FaXTwitter, url: "https://x.com/codebigint_01", label: "Elliot on X" },
      { icon: FaLinkedin, url: "https://www.linkedin.com/elliot-lucky", label: "Elliot on LinkedIn" },
    ],
    skills: ["Compact", "Full stack", "Rust"],
    about: "Compact and full-stack development with a focus on zkApps.",
  },
  {
    name: "Joseph Martins",
    role: "Compact Smart Contract & Full Stack Developer",
    imageUrl: "/joseph_image.png",
    socials: [
      { icon: FaXTwitter, url: "https://x.com/_martinsjoseph", label: "Joseph on X" },
      { icon: FaLinkedin, url: "https://www.linkedin.com/in/joseph-martins-jb", label: "Joseph on LinkedIn" },
    ],
    skills: ["Compact", "Full stack", "Golang"],
    about: "Compact and functional programming for private, efficient dApps.",
  },
];

export const advisorsDetails: TeamDetails[] = [
  {
    name: "Matteo Coppola",
    role: "Technical Advisor",
    imageUrl: "/matteo_coppola.png",
    socials: [{ icon: FaXTwitter, url: "https://x.com/oxMetamat", label: "Matteo on X" }],
    skills: [],
    about: "Founder & CEO, FluidTokens",
  },
  {
    name: "Raul Rosa",
    role: "Technical Advisor",
    imageUrl: "/raul_rosa.png",
    socials: [{ icon: FaXTwitter, url: "https://x.com/elraulito", label: "Raul on X" }],
    skills: [],
    about: "Co-Founder, FluidTokens",
  },
];

// TODO(content): replace these with real client comments + names before going live.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Lucent Labs took our protocol from a rough spec to audited contracts on mainnet. They challenged our assumptions in all the right places.",
    name: "Client name",
    role: "Founder, DeFi protocol",
  },
  {
    quote:
      "Clear communication, weekly demos and code we could actually read. The team understands both the chain and the business.",
    name: "Client name",
    role: "CTO, Web3 startup",
  },
  {
    quote:
      "Their Midnight experience saved us months. We shipped a privacy-preserving feature we didn't think was possible yet.",
    name: "Client name",
    role: "Product lead, fintech",
  },
];

export const processSteps = [
  {
    title: "Discover",
    desc: "We get to know your product, users and constraints, then recommend the chain and architecture that fit — not the one we happen to like.",
    outcome: ["Agreed scope", "Architecture outline", "Milestone plan & quote"],
  },
  {
    title: "Design",
    desc: "Contract architecture, token and value flows, and the interface people will use — designed together before a line of production code.",
    outcome: ["Technical specification", "Contract & data design", "UI prototype"],
  },
  {
    title: "Build & test",
    desc: "We ship in milestones with regular demos. Contracts are written in native languages and tested as they're built, and you see the code throughout.",
    outcome: ["Working software each milestone", "Automated test suite", "Repository access"],
  },
  {
    title: "Launch & support",
    desc: "Testnet to mainnet, with audit coordination when the stakes call for it. After launch we hand over cleanly or stay on to iterate.",
    outcome: ["Mainnet deployment", "Documentation & handover", "Ongoing support option"],
  },
];

export const engagementModels = [
  { title: "Fixed-scope milestones", desc: "Clear deliverables and a firm price per milestone." },
  { title: "Dedicated team", desc: "Our engineers working as an extension of yours." },
  { title: "Technical advisory", desc: "Architecture, chain selection and code review." },
];

export const faqs: Faq[] = [
  {
    q: "What does Lucent Labs do?",
    a: "We're a Web3 development agency specialising in decentralized finance applications and blockchain-based financial protocols. We design, build and deploy smart contracts, dApps and the infrastructure around them.",
  },
  {
    q: "Which blockchains do you build on?",
    a: "Cardano, Midnight, Nervos CKB, Ethereum, Solana and TRON. We recommend a chain based on what your product needs — throughput, privacy, cost or ecosystem — rather than defaulting to one.",
  },
  {
    q: "What is Orderbook?",
    a: "Orderbook is our own product: a native order-book exchange for Nervos CKB that lets traders place limit orders on-chain while keeping custody of their funds until a trade settles. We're building it in the open — follow progress on X.",
  },
  {
    q: "Can you work on an existing codebase?",
    a: "Yes. We regularly join projects mid-flight to extend contracts, review and harden existing code, fix performance issues or take over delivery from another team.",
  },
  {
    q: "Do you audit smart contracts?",
    a: "We review and test every contract we write and can review yours. For high-value launches we also recommend an independent third-party audit, and we'll work directly with your auditors to close findings.",
  },
  {
    q: "How does an engagement start?",
    a: "Send us a note with what you're building. We'll set up a discovery call, scope the work together and send a proposal with milestones, timeline and cost.",
  },
  {
    q: "How is pricing structured?",
    a: "Most projects are milestone-based with a fixed scope per milestone. Longer partnerships can run on a dedicated-team model. You get a firm quote after discovery.",
  },
];
