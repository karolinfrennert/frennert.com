import { Data, Projects } from '../data/db.interface'

export const AllProjects: Projects = [
  {
    name: "Kurt's portfolio",
    technology: ['CSS', 'JavaScript', 'TypeScript'],
    description: 'Every cat deserves a portfolio',
    github: 'https://github.com/karolinfrennert/portfolio-Kurt',
    image: {
      src: 'https://i.ibb.co/pw16yws/Mockup-Kurt.jpg',
      alt: 'Mockup picture of the website inside of an ipad',
      title: 'Cat portfolio'

    }
  },
  {
    name: 'Habit Tracker',
    technology: ['CSS', 'Firebase', 'JavaScript', 'HTML'],
    description: 'Habit Tracker to track your weekly progress',
    github: 'https://github.com/karolinfrennert/firebase-habit-tacker',
    demo: 'https://habit-tracker-hi.web.app/',
    image: {
      src: 'https://i.ibb.co/gFqZz38/Mockup-Habittacker.jpg',
      alt: 'Mockup picture of the habit tracker in a macbook ',
      title: 'Make sure to stay on tack'
    }
  },
  {
    name: 'BlackJack game',
    technology: ['Java'],
    description: 'Win against the machine!',
    github: 'https://github.com/karolinfrennert/BlackJack',
    image: {
      src: 'https://i.ibb.co/5FPYVbn/mockup-blackjack.jpg',
      alt: 'Mockup picture displaying the game in the browser',
      title: 'Fun game!',
    }
  },
  {
    name: 'Grocery List',
    technology: ['JavaScript', 'CSS', 'HTML'],
    description: 'A grocery list built in vanilla JavaScript',
    github: 'https://github.com/karolinfrennert/Grocery-List-HyperIsland',
    demo: 'https://grocery-list.frennert.com/',
    image: {
      src: 'https://i.ibb.co/sQgpvJP/mockup-Grocery-List.jpg',
      alt: 'Mockup picture of a Mac, showcasing the Grocery-list being used',
      title: 'Save your groceries',

    },

  }

]

export const aboutMe: Data = {
  firstName: 'Karolin',
  lastName: 'Frennert',
  email: 'karolin@frennert.com',
  fullName: 'Karolin Frennert',
  mainMenu: [
    {
      href: './index.html',
      text: 'Home'
    },
    {
      href: '#about',
      text: 'About'
    },
    {
      href: '#projects',
      text: 'Projects'
    },
    {
      href: '#contact',
      text: 'Contact'

    },
  ],
  projects: AllProjects,

  footer: [
    {
      href: 'https://github.com/karolinfrennert',
      text: 'GitHub'
    },
    {
      href: 'mailto: karolin@frennert.com',
      text: 'Email',
    },
    {
      href: 'https://www.linkedin.com/in/karolin-frennert-59a09b132/',
      text: 'LinkedIn',

    }
  ]
}
