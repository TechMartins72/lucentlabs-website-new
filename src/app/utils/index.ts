import { aboutType, Links, ProductsAndSolutionsType, Socials } from "./types";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

export const links: Links[] = [
  {
    title: "Home",
    url: "",
  },
  {
    title: "About",
    url: "",
  },
  {
    title: "Services",
    url: "",
  },
  {
    title: "Our Team",
    url: "",
  },
  {
    title: "Portfolio",
    url: "",
  },
];

export const socials: Socials[] = [
  {
    icon: FaTwitter,
    url: "",
  },
  {
    icon: FaDiscord,
    url: "",
  },
  {
    icon: FaLinkedin,
    url: "",
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
