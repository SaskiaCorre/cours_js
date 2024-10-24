let booleanRigth = true;
console.log("Bolean true, return =", booleanRigth);

let booleanWrong = false;
console.log("Bolean false, return =", booleanWrong);

let varNull = "";//valeur = Null
console.log("Variable avec valeur vide, return =", varNull);

let varUndefined; // valeur = undefined
console.log("Variable juste déclarée, return =", varUndefined);

let varChiffre = 234;
console.log("Variable dont la valeur est un nombre, return =", varChiffre);

let grandNb = BigInt(Number.MAX_SAFE_INTEGER); // Pour stocker et opérer en toute sécurité sur des entiers volumineux (ici, 9007199254740991n)
grandNb + 1n === grandNb + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
console.log("Variable dont la valeur est un très grand nombre, return =", Number.MAX_SAFE_INTEGER);

let varString = "Hello Word";
console.log("Variable dont la valeur est une chaîne de caractères, return =", varString);

const sym = Symbol("ps");// rajoute des symboles uniques à des variable afin d'éviter toute confusion
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
console.log(sym);

let infoDog = {
    race: "Labrador",
    name: "Alfred",
    age: 3,
};
console.log("Un objet = ", infoDog);
console.log("les arguments de l'objet =", infoDog.race, infoDog.name, infoDog.age);

let infoCat = {
    race: "Angora",
    name: "Duchesse",
    age: 7,
};
console.log("Un objet = ", infoCat);
console.log("les arguments de l'objet =", infoCat.race, infoCat.name, infoCat.age);

//La concanétation
let client = {
    userName: 'Paul',
    pizzaName: 'Calzone',
    date: "01-01-2024",
    adress: '11 avenue de l\'europe',
}

console.log("La concanétation = ");

let sumUpOrderPhrase = 'Le ' + client.date + ' Bonjour Mr ' + client.userName + ' votre pizza : ' + client.pizzaName + ' est en cours de préparations' + ' elle sera livrée dans 30 minutes à :' + client.adress;
console.log(sumUpOrderPhrase);

console.log("La concanétation avec ${} = ");

let sumUpPhrase = `Le ${client.date} : Bonjour Mr ${client.userName}, votre pizza : ${client.pizzaName} est en cours de préparation. Elle vous sera livrée d'ici 30minutes au ${client.adress}. Merci d'avoir commandé chez la pizerria "Rafinata"`
console.log(sumUpPhrase);
