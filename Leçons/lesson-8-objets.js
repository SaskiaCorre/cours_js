// syntaxe { uneProprieté:uneValeur } 
// dans un objet on assigne avec : et ,
let user = {
    id:3657826,
    name:'De Niro',
    firstName:'Robert',
    films: ["Taxi Driver", "Les Nerfs A Vif", "Angel Heart", "Il était une fois le Bronx", "Les affranchis"]
   };
console.log(user);

//On peut accéder aux propriétés d’un objet avec la notation en point 
console.log(user.name);
console.log(user.id);

//Ou avec la notation en tableau associatif 
console.log(user['id']);
console.log(user['firstName']);

// On peut supprimer une propriété 
delete user.films;
console.log(user);

// On peut ajouter simplement des propriétés dans un objet avec une assignation de valeur
// Si on assigne à une propriété déjà existante cela écrase la valeur
// Mais Si on assigne à une propriété non existante cela créee la propriété
user.name = 'Bob';
user.oscar = 2;
console.log(user);

// Fonction native de JS pour vérifier si une propriété de l'objet existe, hasOwnProperty()
let menuDuJour={
    entree:"Salade greque",
    plat:"Confit de canard",
    dessert:'Saint-Honoré',
   };
   console.log(menuDuJour);
   console.log("Vérifier si la propriété d'un objet existe avec hasOwnProperty() = ", menuDuJour.hasOwnProperty('entree'));
   console.log("Propriété qui n'exite pas = ", menuDuJour.hasOwnProperty('fromage'));

