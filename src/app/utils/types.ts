import { IconType } from "react-icons";

export type Links = {
  title: string;
  url: string;
};

export type Socials = {
  icon: IconType;
  url: string;
};

export type ModeType = "dark" | "light";

export type aboutType = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  desc: string;
};

export type ProductsAndSolutionsType = {
  title: string;
  desc: string;
  bg: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
};

export type TeamDetails = {
  name: string;
  role: string;
  imageUrl: string;
  socials: string[];
  skills: string[];
  about: string;
};
