//~~~~~~~~~~~~~~~~ LES SELECTORS QUI RECUPERENT LES ELEMENTS QUI SONT COTE HTML~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// getElement(s)By
// Pour sélectionner un élément Html (un lien, un titre, une image, … , n’importe quel élément Html).

// PAR LEUR TAG avec getElementsByTagName( ) - 
// permettent de sélectionner TOUS les éléments par le nom de leur balise (leur tag) html.
// Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
let tousLesElementsP = document.getElementsByTagName('p');
console.log('Tous les <p> de html', tousLesElementsP);
// Quand on a une HTMLCollection on peut accéder à un certains éléments
console.log('le 3e <p> dans la HTMLCollection : ', tousLesElementsP[2]);

// PAR LE NOM DE LEUR CLASSE avec getElementsByClassName( )
let tousLesElementsDeClasse = document.getElementsByClassName('classe');
console.log(tousLesElementsDeClasse);
// La console du navigateur affiche un tableau de type HTMLCollection, un tableau qui va contenir tous les <p> de notre page. 
// On a accès à toutes les propriétés de ces éléments Html(son contenu, son alignement, la couleur du texte, sa position dans la page, etc… )
// On constate également que ce tableau est indexé (à l’indice [0], le premier paragraphe <p> de la page)

// PAR LEUR ID avec getElementById( )
// Si l'élément html a un id, on va utiliser getElementById( ) qui renvoi directement les données (pas sous forme deHTMLCollection).
// Il n’y a pas de S à Element dans le nom de la fonction, la console nous affichera le code html d’un seul élément en particulier (*en html on n’a qu’un seul id avec un certain nom par page)
//? Une fonction type getElement pour récupérer UN élément par son ID
let elementAvecId = document.getElementById('idValue');
console.log(elementAvecId);

// QUERYSELECTOR, fonctions alternatives aux précédentes, elles vont se basées sur la syntaxe de css (cf les selectors CSS)
// querySelectory() 
// Une fonction pour récupérer un élément (le 1er trouvé)
let lePremierP = document.querySelector('p');
console.log('Le 1er p récupéré avec querySelector = ', lePremierP);

// Une fonction type querySelector pour récupérer UN élément par son ID
let pAvecId = document.querySelector('#idValue');
console.log('pSpecial querySelector + ID', pAvecId);

// Une fonction type querySelector pour récupérer UN élément (le 1er trouvé) par saclasse
let pElementDeClasse = document.querySelector('.classe');
console.log('pSuper querySelector + class', pElementDeClasse);

// querySelectorAll()
// Pour récupérer plusieurs éléments (par le nom de balise ou par leurs class css) dans une NodeList
// Une fonction type querySelector pour récupérer TOUS les élément dans une NodeList
let allParagraphes = document.getElementsByTagName('p');
console.log('allParagraphes querySelector + balise', allParagraphes);

//let allClasse = document.querySelectorAll('.classe');
//console.log('allClasse de toute la classe', allClasse);
//console.log('allClasse on ne récupère que le 2e', allParagraphes[1]);

//~~~~~~~~~~~~~~~~ LES SELECTORS QUI PLACENT DES ELEMENTS COTE HTML~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Placer des éléments du DOM, donc sur les noeuds
// Après avoir sélectionner des éléments HTML (toute la page, le body, un titre, une div etc…),
// on va pouvoir utiliser des fonctions prévues pour gérer l’insertion / le placement de ces éléments dans la page.

// INSERTBEFORE( )
// Fonction qui s’utilise généralement une <div>, un <form>, une <ul>, le <body>, etc… 
// ELLe a 2 éléments Html en paramètres pour les placer l’un avant l’autre
allParagraphes = document.querySelectorAll('p');
let premierTitre = document.querySelector('h1');
//! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
document.body.insertBefore(allParagraphes[9], premierTitre); // premierTitre est inserré entre le 7ème et le 8ème paragraphe

// MIEUX : append( ) / appendChild( )
// Généralement, on va plutôt utiliser append ou appendChild pour placer un element à la fin d’un autre (placer une div à la fin du body, placer un titre à la fin d’une div, etc…)
// Pour l’exemple on va créer une div vide (donc elle ne s’affiche pas de base) avec du style
let laDiv = document.querySelector('.classeDeLaDiv');
console.log(laDiv)
// Append plutot pensé pour ajouter du contenu à la volé au format string
laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
//console.log(laDiv)

// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
//laDiv.append(allParagraphes[4]);
// Mais on a aussi la fonction appendChild;
//laDiv.appendChild(allParagraphes[0]);

// REMOVECHILD pour supprimer un élément
document.body.removeChild(allParagraphes[5]);


// CREER DES ELEMENTS SUR LE DOM
// CREATETEXTNODE( ) Une fonction pour créer du texte brut dans une page web
const newTxt = document.createTextNode('Du texte écrit côté JS');
document.body.append(newTxt);

// CREER UN ELEMENT
// Crée n’importe quel élément HTML en précisant le nom de sa balise (tagName)
// Ici on crée un titre h1, on modifie quelques propriétés et on le place dans la page
const newH1 = document.createElement('h1');//phase 1 creation
newH1.innerText = "Nouvel élément H1 crée depuis JS";//phase2 remplissage
newH1.style.backgroundColor = 'red';
document.body.append(newH1);//phase 3 on place dans la page

const newP = document.createElement('p');//phase 1 creation
newP.innerText = "Nouvel élément p crée depuis JS";//phase2 remplissage
newP.style.backgroundColor = 'green';
document.body.append(newP);//phase 3 on place dans la page