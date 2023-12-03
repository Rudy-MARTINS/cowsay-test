const information = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
  text: `Nom: ${information.nom}\nCampus: ${information.campus}`,
  e: "x_x",
  T : "$", 
}));