import { aboutMe, AllProjects } from './data/db'
import { addLink } from './utils';

const DEMO_TEXT = "Demo";
const GITHUB_TEXT = "See code on GitHub"

document.addEventListener('DOMContentLoaded', () => {
})

//Ceating Nav
const navBar = document.createElement('nav');
navBar.classList.add('navbar');
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

//Create projects

const template: HTMLTemplateElement = document.querySelector('#projects-template');
const projectsWrapper = document.querySelector('#work');

aboutMe.projects.forEach(project => {
  const cloneTemplate = template.content.cloneNode(true);
  const title = (cloneTemplate as HTMLElement).querySelector('h3');
  const image = (cloneTemplate as HTMLElement).querySelector('img');
  const tech = (cloneTemplate as HTMLElement).querySelector('ul');
  const p = (cloneTemplate as HTMLElement).querySelector('p');
  const demoLink: HTMLAnchorElement = (cloneTemplate as HTMLElement).querySelector('.demo-link');
  const githubLink: HTMLAnchorElement = (cloneTemplate as HTMLElement).querySelector('.github-link');

  title.innerText = project.name;
  image.src = project.image.src;
  image.alt = project.image.alt;
  image.title = project.image.title;
  image.loading = 'lazy';
  project.technology.forEach(t => {
    const li = document.createElement('li');
    li.innerText = t;
    tech.appendChild(li);
  });
  p.innerText = project.description;
  if (project.demo) {
    demoLink.href = project.demo;
    demoLink.innerText = DEMO_TEXT;
  }
  githubLink.href = project.github;
  githubLink.innerText = GITHUB_TEXT;

  projectsWrapper.appendChild(cloneTemplate);
})

//Creating the about section

const about = document.querySelector('.about');

let innerText: HTMLElement = document.createElement('p');
innerText = aboutMe.aboutSection;
