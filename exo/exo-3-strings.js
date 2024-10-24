let userName = 'Toto';
let pizzaName = 'Calzone';
let date = "01-01-2024";
let adress = '11 avenue de l\'europe';


let sumUpOrderPhrase = 'Le ' + date + ' Bonjour Mr ' + userName + ' votre pizza : ' + pizzaName + ' est en cours de préparations' + ' elle sera livrée dans 30 minutes à :' + adress;
console.log(sumUpOrderPhrase);

let sumUpPhrase = `Le ${date} : 
Bonjour Mr ${userName}, votre pizza : ${pizzaName} est en cours de préparation.
Elle vous sera livrée d'ici 30


minutes au ${adress}
Merci d'avoir commandé chez la pizerria "Rafinata"`

console.log(sumUpPhrase);