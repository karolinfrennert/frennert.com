import { aboutMe } from './data/db'
import { addLink } from './utils';


document.addEventListener('DOMContentLoaded', () => {
})

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
