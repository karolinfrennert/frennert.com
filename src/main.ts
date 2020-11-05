import { Data } from './db.interface'

const aboutMe: Data = {
  firstName: 'Karolin',
  lastName: 'Frennert',
  email: 'karolin@frennert.com',
  fullName: '${firstName} ${lastName}',
  project: [{
    name: 'Kurt',
    technology: ['CSS', 'JS', 'TypeScript'],
    description: 'Every cat deserves a portfolio',
    github: 'https://github.com/karolinfrennert/portfolio-Kurt',
  }]
}

console.log("hay");
console.log(aboutMe.firstName);