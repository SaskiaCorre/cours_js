// Boucle While / For / ForEach / For …of / For …in / map 
// Pour répéter des instructions de code selon une condition. 
// Les boucles sont également utiles par la suite, pour parcourir des itérables comme des tableaux ou des objets
// WHILE

let indexBoucleWhile = 0;
while (indexBoucleWhile < 5) {
    console.log("La boucle While = " + indexBoucleWhile);
    indexBoucleWhile ++;
};
//  La même chose que
let i = 0;
while (i < 5) {
    console.log("La boucle = " + i);
    i ++;
};


// FOR
// Autre manière de créer des boucles, avec for(), dans les paramètres on va pouvoir directement 
// initialiser un index, définir une condition et incrémenter l’index dans l’exemple ci-dessous nous 
// allons faire une boucle visant à parcourir chaque case d’un tableau pour l’afficher en console.
let listeFilm = ['Les Affranchis','Angel\'s Heart','Il était une fois le Bronx'];
// Boucle for, on définit un index (ici c'est i), 
// puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera exécutée
// puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numéro de la case que l'on console.log)
for(let i=0; i<listeFilm.length; i++){
 console.log('Parcourir un tableau avec la boucle FOR = ' , listeFilm[i]);
}

// FOREACH()
// La méthode fléchée forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// On va choisir une variable temporaire pour parcourir les elements du tableau
listeFilm.forEach(unFilm => console.log('Fonction fléchée forEach = ', unFilm));

// FOR...OF
// Ici aussi, on va définir une variable temporaire pour parcourir chaque case du tableau 
for(let filmsDeLaListe of listeFilm){
    console.log('boucle FOR...OF : ', filmsDeLaListe);
   }

// FOR...IN pour parcourir les clés (les propriétés) d'un OBJET
const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
   };
// On définit une variable temporaire cleObjet pour parcourir l'objet :
for(let cleObjet in userData){
    console.log(`Boucle FOR...IN pour parcoourir un objet) = la clé: ${cleObjet} a pour valeur: ${userData[cleObjet]} `);
   }
// Durant le parcours de l’objet, chaque propriété ou clé seront stockées temporairement dans la variable cleObjet.Rappel : pour accéder aux propriétés d’un objet on la notation en tableau associatif unObjet[quelque chose

// MAP()
// Crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. 
const array = [1, 4, 9, 16];
console.log(array);
// Pass a function to map
const modifTab = array.map((x) => x * 2);
console.log("Tableau modif avec map() (ici valeurs*2)", modifTab); // Expected output: Array [2, 8, 18, 32]

// JS propose des fonctions utilisables sur les Objets qui vont pouvoir transformer leurs clés et/ou leurs valeurs sous forme de tableau 
// (pour utiliser les ƒ° forEach ou map par exemple).
//? Parcourir les Objet (Depuis javaScript ES8)
//? La Method .keys() qui convertit les clés d'un objet en tableau
//? La Method .values() qui convertit les valeurs d'un objet en tableau
//? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
const keyUser = Object.keys(userData);
console.log("les clé de l'objet converties en array : ",keyUser);

const valuesUser = Object.values(userData);
console.log("les valeur de l'objet converties en array : ",valuesUser);

const convertedDataUser = Object.entries(userData);
console.log("les entrées de l'objet converties en array : ",convertedDataUser);
// De fait, une fois les objets convertis en tableau on peut ruser et utiliser forEach par exemple :
valuesUser.forEach((lesValeurs)=>{
    console.log(`FOREACH avec objet converti en tableau chaque valeurs : ${lesValeurs}`);
});
convertedDataUser.forEach(([key, value])=>{
    console.log(`FOREACH avec objet converti en tableau : ${key}: ${value}`);
});

const allParag = document.body.getElementsByTagName("p");
console.log(allParag);
const paragTablo = Array.from(allParag);
console.log(paragTablo);

let unIndex = 0;
while (unIndex < 10) {
    console.log("Le Nombre : " + unIndex);
    unIndex++;
};

let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? Boucle for, on définit un index (ici c'est i), 
//? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera éxecuter
//? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numero de la case que l'on console.log)
for(let i=0;i<listeFilm.length;i++){
    console.log('boucle FOR : ',listeFilm[i]);
};

// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// ? On va choisir une variable temporaire pour parcourir les elements du tableau
listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

//? L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable 
//? (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) 
//? et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
// on définit une variable temporaire pour parcourir le tableau
for(let unElementTablo of listeFilm){
    console.log('boucle FOR...OF : ',unElementTablo);
};