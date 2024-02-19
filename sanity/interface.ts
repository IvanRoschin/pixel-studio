export interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
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

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  headerLogo: Image;
  socials: Social[];
  title: string;
  subtitle: string;
  aboutTitle: string;
  aboutImage: Image;
  aboutText: Text;
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
  technologies: Technology[];
  linkToBuild: string;
}

export interface TeamMember extends SanityBody {
  _type: "teamMember"
  name: string;
  position: string;
  photo: Image;
  socials: Social[];
  technologies: Stack[];
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