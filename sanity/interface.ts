import { PortableTextBlock } from '@sanity/types'

export interface SanityBody {
  _createdAt: string;
  _id: string;
  _ref: string;
  _updatedAt: string;
}

export interface Image {
   asset: {
    _ref: string;
    _type: "reference";
  };
  _type: "image";
  [key: string]: any;
}


export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Stack extends SanityBody {
  _type: "stack"
  name: string;
  progress: number;
  url: string;
}

export interface Technology extends SanityBody {
  _type: "technology"
  name: string;
  progress: number;
  image: Image;
}

export interface ServiceItem extends SanityBody {
  _type: "serviceItem"
  title: string;
  text: string;
}

export interface NavbarItem extends SanityBody {
  _type: "navbar"
  title: string;
  link: string;
}

export interface AdvantageItem extends SanityBody {
  _type: "advantage"
  figure: string;
  title: string;
}

export interface TeamMemberInterface extends SanityBody {
  _type: "teamMember"
  name: string;
  position: string;
  photo: Image;
  socials: Social[];
  technologies: string;
  joinedTeam: Date;
  isCurrentWorkingHere: boolean;
  points: string[];
}


export interface Project extends SanityBody {
  _type: "project"
  title: string;
  image: Image;
  summary: string;
  technologies: string;
  linkToBuild: string;
}

export interface Price extends SanityBody {
  _type: "price"
  title: string;
  price: number;
  points: string[];
}

export interface HeaderInterface extends SanityBody {
  _type: "header"
  title?: string;
  siteTitle: string;
  headerLogo: Image;
  navbar: NavbarItem[];
  mobileMenuIcon?: Image;
}

export interface HeroInterface extends SanityBody {
  _type: "hero"
  title?: string;
  typeWords: string;
  subtitle: string;
}

export interface AboutInterface extends SanityBody {
  _type: "about"
  title?: string;
  content: PortableTextBlock[];
  advantages: AdvantageItem[];
}

export interface TeamInterface extends SanityBody {
  _type: "team"
  title?: string;
  teamMembers: TeamMemberInterface[];
}

export interface ServiсesInterface extends SanityBody {
  _type: "services"
  title?: string;
  services: ServiceItem[];
  openIcon?: Image;
  closeIcon?: Image;
}

export interface TechnologiesInterface extends SanityBody {
  _type: "techologies"
  title?: string;
  technology: Technology[];
}

export interface CasesInterface extends SanityBody {
  _type: "cases"
  title?: string;
  projects: Project[];
}

export interface PricesInterface extends SanityBody {
  _type: "prices"
  title?: string;
  price: Price[];
}

export interface ContactInterface extends SanityBody {
  _type: "contact"
  title?: string;
  mainTitle: string;
  subtitle: string;
}

export interface FooterInterface extends SanityBody {
  _type: "footer";
  title?: string;
  siteTitle: string;
  footerLogo?: Image | string
  navbar: NavbarItem[];
  socials?: Social[];
  phoneNumber: string;
  email: string;
  address: string;
  copyright: string;
  footerBtnUp?: Image; 
}