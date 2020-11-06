import { title } from 'process'
import { Project } from './db.interface'
import { Data } from './db.interface'
import { Projects } from './db.interface'

const AllProjects: Projects = [
  {
    name: "Kurt's portfolio",
    technology: ['CSS', 'JavaScript', 'TypeScript'],
    description: 'Every cat deserves a portfolio',
    github: 'https://github.com/karolinfrennert/portfolio-Kurt',
    image: {
      src: 'help',
      alt: 'pretty boi',
      title: 'Why he look like this'

    }
  },
  {
    name: 'Habit Tracker',
    technology: ['CSS', 'Firebase', 'JavaScript', 'HTML'],
    description: 'Habit TRacker to track your weekly progress',
    github: 'https://github.com/habit-tracker',
    image: {
      src: 'string',
      alt: 'string',
      title: 'Make sure to stay on tack'
    }
  },
  {
    name: 'BlackJack game',
    technology: ['Java'],
    description: 'Win against the machine!',
    github: 'https://github.com/karolinfrennert/BlackJack',
    image: {
      src: 'nan',
      alt: 'no',
      title: 'help',
    }
  },
  {
    name: 'Grocery List',
    technology: ['JavaScript', 'CSS', 'HTML'],
    description: 'A grocery list built in vanilla JavaScript',
    github: 'https://github.com/karolinfrennert/Grocery-List-HyperIsland',
    image: {
      src: 'nocepic',
      alt: 'verynice pic',
      title: 'look a nice pic',

    },

  }

]

const aboutMe: Data = {
  firstName: 'Karolin',
  lastName: 'Frennert',
  email: 'karolin@frennert.com',
  fullName: '${firstName} ${lastName}',
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


const supportsTemplate = function () {
  return 'content' in document.createElement('template');
}

document.addEventListener('DOMContentLoaded', () => {
  if (supportsTemplate()) {
    console.log('hey');
    const navbar = document.getElementById('navbar');
    console.dir(navbar);
    let content = navbar.content;
    console.log(content);
    document.body.appendChild(content);
  }
})

const addLink = (href: string, text: string) => {
  const link = document.createElement('a');
  link.innerText = text;
  link.href = href;
  return link;
}

//Ceating Nav
const navBar = document.createElement('nav');
navBar.classList.add('main-nav');
const addLinkToNavBar = (element: HTMLAnchorElement) => {
  navBar.appendChild(element);
}

aboutMe.mainMenu.forEach(menuItem => {
  addLinkToNavBar(addLink(menuItem.href, menuItem.text));
});

document.body.insertAdjacentElement('afterbegin', navBar)

//Create Footer
const footer = document.createElement('footer');
footer.classList.add('main-footer');

const addLinkToFooter = (element: HTMLAnchorElement) => {
  footer.appendChild(element);
}

aboutMe.footer.forEach(footerItem => {
  addLinkToFooter(addLink(footerItem.href, footerItem.text))
});

document.body.insertAdjacentElement('beforeend', footer);
