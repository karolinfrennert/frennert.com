import { Project } from './db.interface'
import { Data } from './db.interface'
import { Projects } from './db.interface'

const KurtPortfolio: Projects = [
  {
    name: 'Kurt',
    technology: ['CSS', 'JS', 'TypeScript'],
    description: 'Every cat deserves a portfolio',
    github: 'https://github.com/karolinfrennert/portfolio-Kurt',
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
      href: './contact.html',
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
