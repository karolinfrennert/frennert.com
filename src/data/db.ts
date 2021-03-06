import { Data, Projects } from "../data/db.interface";

export const AllProjects: Projects = [
  {
    name: "General knowledge quiz",
    technology: ["React", "TypeScript", ],
    description: "A small quiz built in React and TypeScript testing your knowledge!",
    github: "https://github.com/karolinfrennert/React-Typescript-Quiz",
    demo: "",
    image: {
      src: "",
      alt: " ",
      title: " ",
    },
  },
  {
    name: "Movie Search",
    technology: ["React", ],
    description: "Serch for you favourite movie",
    github: "https://github.com/karolinfrennert/React-Movie-API",
    demo: "https://movies.frennert.com/",
    image: {
      src: "",
      alt: " ",
      title: " ",
    },
  },
  {
    name: "Grocery List",
    technology: ["JavaScript", "CSS", "HTML"],
    description: "A grocery list built in vanilla JavaScript",
    github: "https://github.com/karolinfrennert/Grocery-List-HyperIsland",
    demo: "https://grocery-list.frennert.com/",
    image: {
      src: "https://i.ibb.co/CnZx7z0/shoppinglist.png",
      alt: "Mockup picture of a Mac, showcasing the Grocery-list being used",
      title: "Save your groceries",
    },
  },

  {
    name: "Kurt's portfolio",
    technology: ["CSS", "JavaScript", "TypeScript"],
    description: "Every cat deserves a portfolio",
    github: "https://github.com/karolinfrennert/portfolio-Kurt",
    image: {
      src: "https://i.ibb.co/pw16yws/Mockup-Kurt.jpg",
      alt: "Mockup picture of the website inside of an ipad",
      title: "Cat portfolio",
    },
  },
  {
    name: "Habit Tracker",
    technology: ["CSS", "Firebase", "JavaScript", "HTML"],
    description: "Habit Tracker to track your weekly progress",
    github: "https://github.com/karolinfrennert/firebase-habit-tacker",
    demo: "https://habit-tracker-hi.web.app/",
    image: {
      src: "https://i.ibb.co/gFqZz38/Mockup-Habittacker.jpg",
      alt: "Mockup picture of the habit tracker in a macbook ",
      title: "Make sure to stay on tack",
    },
  },
  {
    name: "BlackJack game",
    technology: ["Java"],
    description: "Win against the machine!",
    github: "https://github.com/karolinfrennert/BlackJack",
    image: {
      src: "https://i.ibb.co/5FPYVbn/mockup-blackjack.jpg",
      alt: "Mockup picture displaying the game in the browser",
      title: "Fun game!",
    },
  },
  {
    name: "My Portfolio",
    technology: ["TypeScript", "CSS", "HTML"],
    description: "Making my own portfolio",
    github: "https://github.com/karolinfrennert/frennert.com",
    demo: "https://portfolio.frennert.com/",
    image: {
      src: "https://i.ibb.co/qgp1RGS/portfolio.png",
      alt: "Mockup picture displaying the game in the browser",
      title: "Fun game!",
    },
  },
  {
    name: "Date Planner",
    technology: ["HTML", "JavaScript", "CSS", "REST API"],
    description: "A date planner using the ticketmaster API to fetch events",
    github: "https://github.com/karolinfrennert/Brief-3-API",
    demo: "https://date-planner.netlify.app/",
    image: {
      src: "https://i.ibb.co/ysznGdW/dateplanner.png",
      alt: "Date planner landing page",
      title: "Find events!",
    },
  },
];

export const aboutMe: Data = {
  firstName: "Karolin",
  lastName: "Frennert",
  email: "karolin@frennert.com",
  fullName: "Karolin Frennert",
  mainMenu: [
    
  ],
  projects: AllProjects,

  footer: [
    {
      href: "https://github.com/karolinfrennert",
      text: "GitHub",
    },
    {
      href: "mailto: karolin@frennert.com",
      text: "Email",
    },
    {
      href: "https://www.linkedin.com/in/karolin-frennert-59a09b132/",
      text: "LinkedIn",
    },
  ],
  aboutSection: `When I was introduced to coding, something I've always been curious about but never dared to try,
  I was hooked. The constant rollercoaster of sucess and failure, feeling like you know everything in
  one moment and then feeling completely helpless in the next really interested me. The ability to
  create and visualise your ideas and making them into real projects, as well as the fact that there is always
  something more to learn, makes me strive to become better, every day.`,
};
