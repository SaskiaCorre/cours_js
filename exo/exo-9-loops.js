// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt 
let boucleWhile = 0;
while (boucleWhile < 5){
    console.log("loops while");
    boucleWhile ++;
}

//phase 1 creation
//lesTxt.style.backgroundColor = 'red';
//const duplicateTxt
//phase2 remplissage
const lesTxt = document.getElementsByTagName('p');
lesTxt.innerText = "Coucou, nous voilà !";
for (let i=0; i< 5; i++){
    i += lesTxt;
};
document.body.append(lesTxt);

// MAP()
// Crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. 
// const array = [1, 4, 9, 16];
// console.log(array);
// Pass a function to map
// const modifTab = array.map((x) => x * 2);
// console.log("Tableau modif avec map() (ici valeurs*2)", modifTab); // Expected output: Array [2, 8, 18, 32]

//TODO JS map Phase 2 
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab 
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique

//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en paramètre une variable temporaire (nom de la variable au choix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire