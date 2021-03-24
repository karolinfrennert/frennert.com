export interface Data {
  firstName: string;
  lastName: string;
  email: string;
  fullName: string;
  mainMenu: MenuItems[];
  projects: Projects;
  footer: MenuItems[];
  aboutSection: string;
}

export interface Project {
  name: string;
  technology: Technology[];
  description: string;
  github: string;
  demo?: string;
  image: Image;
}

export type Projects = Project[];

type MenuItems = {
  href: string;
  text: string;
};

type Image = {
  src: string;
  alt: string;
  title?: string;
};

type Technology =
  | "CSS"
  | "JavaScript"
  | "Firebase"
  | "TypeScript"
  | "HTML"
  | "Java"
  | "REST API"
  | "React"
