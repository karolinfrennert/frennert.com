import { Data, Projects } from '../data/db.interface'

export const AllProjects: Projects = [
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



    }
  },

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
    name: 'My Portfolio',
    technology: ['TypeScript', 'CSS', 'HTML'],
    description: 'Making my own portfolio',
    github: 'https://github.com/karolinfrennert/frennert.com',
    demo: 'https://portfolio.frennert.com/',
    image: {
      src: 'https://i.ibb.co/sQgpvJP/mockup-Grocery-List.jpg',
      alt: 'Mockup picture displaying the game in the browser',
      title: 'Fun game!',
    }
  },



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

  ],
  aboutSection: `When I was introduced to coding, something I've always been curious about but never dared to try,
  I was hooked. The constant rollercoaster of sucess and failure, feeling like you know everything in
  one moment and then feeling completely helpless in the next really interested me. The ability to
  create and visualise your ideas and making them into real projects, as well as the fact that there is always
  something more to learn, makes me strive to become better, every day.`,
}
