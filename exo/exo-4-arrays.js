// tableau = ARRAY
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

let tableau = ["Dogs", "Cats", "Birds", "Reptiles", "Rodents", "Other"];
console.log("Un tableau - Array = ", tableau);

let tabAnimals = [];
tabAnimals.push(infoDog, infoCat);
console.log("Un tableau dans lequel on récupère des objets déjà déclarés = ", tabAnimals);

//Récupérer les éléments du tableau avec une boucle for sur tableau.length
let tabHH90 = ["Iam", "Cypress Hill", "Nas", "The Fugees"];
console.log("Un tableau simple = ", tabHH90);
for (let i=0; i < tabHH90.length; i++){
    console.log("Récupérer les éléments du tableau = ", tabHH90[i]);
}
console.log("Récupérer chaque élément du tableau = ", tabHH90[1]);

let tabNb = [100, 160, 250, 300];
console.log("Tableau de chiffres = ", tabNb);
console.log("On accède au contenu d'une case par son index [i] (ici, tabNb[1]) = ", tabNb[1]);

let name2 = "Lucien";
let age = 25;
let passions = ["VTT", "Musique"];
let tabUser = [];
tabUser.push(name2, age, passions);
console.log(tabUser);
console.log(passions);
console.log(passions[1]);

let tabDivers = ["Voiture", "Piano", "Livres"];
tabDivers.push("Vélo");
console.log(tabDivers);

let leNom = "Lenotre";
let lePrenom = "Sébastien";
let laPhrase = [];
laPhrase.push(lePrenom + leNom);
console.log(lePrenom, leNom, lePrenom[0] + leNom[0]);