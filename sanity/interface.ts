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

export interface AccordionItem extends SanityBody {
  _type: "accordion"
  title: string;
  text: string;
}

export interface Accordion extends SanityBody, AccordionItem {
  _type: "accordion"
  closeIcon: Image;
  openIcon: Image;
}

export interface navbarItem extends SanityBody {
  _type: "navbar"
  title: string;
  link: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  navbar: navbarItem[];
  title: string;
  headerLogo: Image;
  socials: Social[];
  heroWords: string;
  subtitle: string;
  aboutTitle: string;
  aboutImage: Image;
  aboutText: string;
  accordion: AccordionItem[];
  openIcon: Image;
  closeIcon: Image;
  contactTitle: string;
  address: string;
  email: string;
  phoneNumber: string;
  footerLogo: Image;
  footerBtnUp: Image;
  copyright: string;
}

export interface Project extends SanityBody {
  _type: "project"
  title: string;
  image: Image;
  summary: string;
  technologies: string;
  linkToBuild: string;
}

export interface TeamMember extends SanityBody {
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

export interface Price extends SanityBody {
  _type: "price"
  title: string;
  price: number;
  points: string[];
}
