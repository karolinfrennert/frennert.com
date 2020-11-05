import { type } from "os";

export interface Data {
  firstName: string;
  lastName: string;
  email: string;
  fullName: string;
  mainMenu: MenuItems[];
  footer: MenuItems[];
};

export interface Project {
  name: string;
  technology: string[];
  description: string;
  github: string;
}

export type Projects = Project[];

type MenuItems = {
  href: string;
  text: string;
}

