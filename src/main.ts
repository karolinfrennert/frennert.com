import { Data } from './db.interface'

const aboutMe: Data = {
  firstName: 'Karolin',
  lastName: 'Frennert',
  email: 'karolin@frennert.com',
  fullName: '${firstName} ${lastName}',

}

console.log("hay");
console.log(aboutMe.firstName);