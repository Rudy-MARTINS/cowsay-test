const information = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
  text: `Nom: ${information.nom}\nCampus: ${information.campus}`,
  e: "oO", // Optionnel, c'est pour la tête de la vache
}));