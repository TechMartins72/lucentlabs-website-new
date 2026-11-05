import { IconType } from "react-icons";

export type Links = {
  title: string;
  url: string;
};

export type Socials = {
  icon: IconType;
  url: string;
  label: string;
};

export type TeamDetails = {
  name: string;
  role: string;
  imageUrl: string;
  socials: Socials[];
  skills: string[];
  about: string;
};

export type Expertise = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Faq = {
  q: string;
  a: string;
};
