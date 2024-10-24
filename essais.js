/*const allParag = document.body.getElementsByTagName("p");
console.log(allParag);
const paragTab = Array.from(allParag);
console.log(paragTab);



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
for(let unElementTab of listeFilm){
    console.log('boucle FOR...OF : ',unElementTab);
};

/*////////////////////////////
const userData = {
    name: 'John Joe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

// on définit une variable temporaire pour parcourir le objet :)
//! Pour accèder aux valeurs correspondantes aux clés utilisées la notation en tableau associatif 👇
for(let cleObjet in userData){
    console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${userData[cleObjet]} `);
};

///////////////////////////
//? Parcourir les Objets (depuis javaScript ES8)
//? La Method .keys() qui convertit les clés d'un objet en tableau
//? La Method .values() qui convertit les valeurs d'un objet en tableau
//? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
const keyUser = Object.keys(userData);
console.log("les clé de l'objet converties en array : ",keyUser);

const valuesUser = Object.values(userData);
console.log("les valeur de l'objet converties en array : ",valuesUser);

const convertedDataUser = Object.entries(userData);
console.log("les entrées de l'objet converties en array : ",convertedDataUser);

console.log('-------FUNCTION-------');
// On déclare la fonction sous le nom maSuperFonction et le travail qu'elle doit faire
function maSuperFonction(){
    // ICI on code ce que doit faire la ƒ°
    console.log('Ma fonction fonctionne');
    console.log(10+2);
};
// On va exec au moins 1 fois notre ƒ°
maSuperFonction();
// Quand une ƒ° a besoin de paramètres ???
function disMonNom(unNom){
    console.log(unNom);
};
disMonNom('JACKO');
console.log('-------PARAMETRE & RETURN-------');
//! EXO 5 : Function
// TODO : créer une fonction qui prend un nombre en paramètre
// TODO : La ƒ° doit afficher en console: 33 + le nombre reçu en paramètre
// TODO : créer une autre fonction qui prend 2 nombres en paramètre
// TODO : Cette seconde ƒ° doit afficher en console l'ADDITION des 2 nombres reçus en paramètre
function fonction1(unTruc){
    console.log(33+unTruc);
}
fonction1(7);

function fonction2(unTruc,unBidule){
    console.log(unBidule+unTruc);
}
fonction2(10,88);

//? Quand une fonction doit return quelquechose
function moins(a,b){
    return a-b;
};
// à l'execution de la ƒ° le resultat du calcul (ce que la fonction renvoit/return)
// sera stocké dans une variable monResultat
let monResultat = moins(99,20);
// Ou alors, le résultat est direct return dans un console.log()
console.log('Monresultat:',moins(99,20));
console.log('exec de la fonction direct dans console.log() : ',moins(99,20));
/*
////////////////////////
let appDiv = document.querySelector('#app');
// appDiv.removeChild(premierH1);

const newTxt = document.createTextNode('SUPER COOL');
// document.body.append(newTxt);
appDiv.append(newTxt);

const newH1 = document.createElement('h1');
//la ligne du dessus equivalent à <h1></h1> 
newH1.innerText = 'AZERTYUIOP';
//la ligne du dessus equivalent à <h1>AZERTYUIOP</h1> 
newH1.style.backgroundColor = 'red';
//la ligne du dessus equivalent à <h1 style={css}>AZERTYUIOP</h1> 
appDiv.append(newH1);

const newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200/300';
//appDiv.append(newImg);
const newLien = document.createElement('a');
newLien.href = 'https://picsum.photos/';
newLien.innerText = 'cliquez ici';
appDiv.append(newLien);

/////////////////////////////
//on a un objet js de base 
const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };


let divUser = document.querySelector('.userProfile');
  console.log(divUser);
  divUser.style.backgroundColor = `#4158D0`;
  divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
  divUser.style.color = `white`;
  divUser.style.width = '500px';
  divUser.style.margin = 'auto';
  divUser.style.padding = '2rem';
  //JS crée une image, renseigne la src , modif taille
  const imgTemplate = document.createElement('img');
  imgTemplate.src = userData.img;
//   imgTemplate.style.height = '500px';
//   imgTemplate.style.width = '500px';
  imgTemplate.className='img-fluid';
  divUser.append(imgTemplate);
  // JS crée le titre du name
  const nameTemplate = document.createElement('h1');//phase 1 creation
  nameTemplate.innerText = userData['name'];
  divUser.append(nameTemplate);
  // JS crée le titre du email
  const emailTemplate = document.createElement('h2');//phase 1 creation
  emailTemplate.innerText = userData.email;
  divUser.append(emailTemplate);
  // JS crée le titre du age
  const ageTemplate = document.createElement('h3');//phase 1 creation
  ageTemplate.innerText = userData.age;
  divUser.append(ageTemplate);
  // JS crée le titre du dob
  const dobTemplate = document.createElement('h4');//phase 1 creation
  dobTemplate.innerText = userData.dob;
  divUser.append(dobTemplate);
  // JS crée le titre du active
  const activeTemplate = document.createElement('h5');//phase 1 creation
  activeTemplate.innerText = userData.active;
  divUser.append(activeTemplate);

//Commencement optimisation rationnalisation du code de creation, config, placage au sein d'une fonction
function createAndAppendElement(tag, text, parentElement) {
    const element = document.createElement(tag);
    element.innerText = text;
    parentElement.append(element);
}
createAndAppendElement('h1', userData.name, divUser);
createAndAppendElement('h2', userData.email, divUser);
createAndAppendElement('h3', userData.age, divUser);
createAndAppendElement('h4', userData.dob, divUser);
createAndAppendElement('h5', userData.active, divUser);
createAndAppendElement('h5', '44 rue du truc', divUser);
*/