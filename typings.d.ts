interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
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

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  logo: Image;
  socials: array;
  title: string[];
  subtitle: string;
  aboutTitle: string;
  aboutImage: Image;
  aboutText: text;
  contactTitle: string;
  address: string;
  email: string;
  phoneNumber: string;
}


export interface Project extends SanityBody {
  _type: "project"
  title: string;
  image: Image;
  summary: text;
  technologies: Stack[];
  linkToBuild: string;
}

export interface TeamMember extends SanityBody {
  _type: "teamMember"
  name: string;
  position: string;
  photo: Image;
  socials: Social[];
  technologies: Stack[];
  joinedTeam: date;
  isCurrentWorkingHere: boolean;
  points: string[];
}

