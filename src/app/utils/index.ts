import {
  aboutType,
  Links,
  ProductsAndSolutionsType,
  Socials,
  TeamDetails,
} from "./types";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export const links: Links[] = [
  {
    title: "Home",
    url: "#hero-section",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Team",
    url: "#team",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const socials: Socials[] = [
  {
    icon: FaXTwitter,
    url: "https://x.com/_Lucentlabs",
  },
  {
    icon: MdEmail,
    url: "mailto:lucentcodes@gmail.com",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/luccentlabs/",
  },
];

export const aboutData: aboutType[] = [
  {
    imageUrl: "/development.png",
    imageAlt: "development_icon",
    title: "Expert Development",
    desc: "Deep expertise in Cardano and Midnight blockchain technologies, delivering robust and scalable solutions.",
  },
  {
    imageUrl: "/innovation.png",
    imageAlt: "innovation_icon",
    title: "Innovation First",
    desc: "Pioneering new approaches to decentralized applications and smart contract development.",
  },
  {
    imageUrl: "/community.png",
    imageAlt: "community_icon",
    title: "Community Driven",
    desc: "Organizing events and initiatives to grow and strengthen the Web3 ecosystem.",
  },
  {
    imageUrl: "/record.png",
    imageAlt: "record_icon",
    title: "Proven Track Record",
    desc: "Successfully delivered multiple projects with measurable impact on the blockchain community.",
  },
];

export const productsAndSolutionsData: ProductsAndSolutionsType[] = [
  {
    title: "Cardano Defi Platform",
    desc: "A comprehensive decentralized finance platform built on Cardano ",
    bg: "bg-[#0750BD]",
    tags: ["Plutus", "Cardano", "Smart Contracts"],
    imageUrl: "/cardano.png",
    imageAlt: "cardano_icon",
  },
  {
    title: "DOA Governance Tools",
    desc: "On-chain governance platform enabling transparent and efficient decision-making for decentralized organizations",
    bg: "bg-linear-to-r/srgb from-[#2897DB] to-[#2897DB]",
    tags: ["Plutus", "Cardano", "Smart Contracts", "Web 3"],
    imageUrl: "/DOA.png",
    imageAlt: "doa_icon",
  },
  {
    title: "Midnight Privacy Dapps",
    desc: "Privacy-preserving decentralized application leveraging Midnight's zero-knowledge technology for secure transactions.",
    bg: "bg-linear-to-r/srgb from-[#2897DB] to-[#2897DB]",
    tags: ["Plutus", "Cardano", "Smart Contracts"],
    imageUrl: "/midnightdapps.png",
    imageAlt: "midnightdapps_icon",
  },
  {
    title: "NFT Marketplace",
    desc: "Full-featured NFT marketplace on Cardano with advanced filtering, bidding, and royalty management systems.",
    bg: "bg-[#0750BD]",
    tags: ["Plutus", "Cardano", "Smart Contracts", "Web 3"],
    imageUrl: "/nft.png",
    imageAlt: "nft_icon",
  },
];

export const services = [
  { title: "About", url: "#" },
  { title: "Services", url: "#" },
  { title: "Our Team", url: "#" },
  { title: "Our Works", url: "#" },
];

export const advisorsDetails: TeamDetails[] = [
  {
    name: "Matteo Coppola",
    role: "Technical Advisor",
    imageUrl: "/matteo_coppola.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/oxMetamat",
      },
      {
        icon: MdEmail,
        url: "mailto:m.coppola.mazzetti@gmail.com",
      },
    ],
    skills: ["Leadership", "Cardano", "Backend"],
    about: "Founder and CEO at Fluidtoken",
  },
  {
    name: "Raul Rosa",
    role: "Technical Advisor",
    imageUrl: "/raul_rosa.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/elraulito",
      },
      {
        icon: MdEmail,
        url: "mailto:raulR912@gmail.com",
      },
    ],
    skills: ["Leadership", "Cardano", "Backend"],
    about: "Co-Founder at Fluidtoken",
  },
];

export const teamDetails: TeamDetails[] = [
  {
    name: "Lawal Musa Agah",
    role: "Founder & Lead Architect",
    imageUrl: "/lawal_image.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/ADA_Dolphin04",
      },
      {
        icon: MdEmail,
        url: "mailto:musalawal04@gmail.com",
      },
      {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/musalawal04",
      },
    ],
    skills: ["Leadership", "Cardano", "Backend"],
    about:
      "I'm Lawal, a visionary and Blockchain architect with 8+ years of experience in distributed systems and smart contract development, particularly on the Cardano blockchain. As a developer and Cardano enthusiast, I'm passionate about advancing decentralized technology, engineering well-structured, high-quality systems and continuously pushing boundaries—both in technology and with my team.",
  },
  {
    name: "Samir Idris",
    role: "Aiken Smart Contract & Full Stack Developer",
    imageUrl: "/samir_image.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/scientistsamir",
      },
      {
        icon: MdEmail,
        url: "mailto:samzidris11@gmail.com",
      },
      {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/scisamir",
      },
    ],
    skills: ["Aiken", "Cardano", "Compact", "Backend"],
    about:
      "I am Samir - An expert in Aiken and functional programming with a focus on secure and efficient smart contracts.",
  },
  {
    name: "Elliot Lucky",
    role: "Compact Smart Contract & Full Stack Developer",
    imageUrl: "/elliot_image.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/codebigint_01",
      },
      {
        icon: MdEmail,
        url: "mailto:elliotlucky509@gmail.com",
      },
      {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/elliot-lucky",
      },
    ],
    skills: ["Compact", "FullStack", "Rust"],
    about:
      "I am Elliot - Expert in Compact and Fullstack Developer with a focus on zkApps.",
  },
  {
    name: "Joseph Martins",
    role: "Compact Smart Contract & Full Stack Developer",
    imageUrl: "/joseph_image.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/_martinsjoseph",
      },
      {
        icon: MdEmail,
        url: "mailto:techmartins72@gmail.com",
      },
      {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/joseph-martins-jb",
      },
    ],
    skills: ["Compact", "FullStack", "Golang"],
    about:
      "I am Joseph - Expert in Compact and functional programming with a focus on private and efficient dApps.",
  },
  {
    name: "Mahadi Abuhuraira",
    role: "Head of Development/CTO",
    imageUrl: "/mahadi_image.png",
    socials: [
      {
        icon: FaXTwitter,
        url: "https://x.com/mamt4real",
      },
      {
        icon: MdEmail,
        url: "mailto:mamt4real@gmail.com",
      },
      {
        icon: FaLinkedin,
        url: "https://linkedin.com/in/mamt4real",
      },
    ],
    skills: ["FullStack"],
    about:
      "I'm Mahadi - A full-stack developer specializing in Cardano and Midnight blockchain technologies.",
  },
];
