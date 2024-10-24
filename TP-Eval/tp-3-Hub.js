const templateData = {
  titre: 'Bienvenue sur mon Hub de cours JavaScript',
  phrase: 'Vous trouverez ici des leçons et des exemples pour aborder différentes thématiques du JavaScript contemporain',
  bouton: 'Apprendre',
  img:'images/fondEcranBinaire.jpg'
};
console.log(templateData.phrase);

function displayTitle(titre) {
  return titre;
}
let monTitre = templateData.titre;
console.log(monTitre);

function displayPhrase(maPhrase) {
  return maPhrase;
}
let maPhrase = templateData.phrase;
console.log(maPhrase);

function buttonAction(){
  document.getElementsByTagName("body")
}

const button = document.createElement("button");
button.addEventListener("click", (event) => {
  button.innerHTML = `${event.detail}`;
});
document.body.append(button)

const displayTitre = document.createElement('h1');
displayTitre.innerText = templateData.titre;
document.body.append(displayTitre);
/*
function displayData (templateData){
  const displaySousTitre = document.createAttribute('h3');
  displaySousTitre.innerText = templateData.phrase;
  document.body.append(displaySousTitre);
}
displayData();
*/


/*
function createAndAppendElement(tag, text, parentElement) {
  const element = document.createElement(tag);
  element.innerText = text;
  parentElement.append(element);
}

let section1 = document.createElement("div");
let titreSection1 = document.createElement('h2');
titreSection1.innerText = "Bienvenue sur mon Hub de cours JavaScript";
document.body.append(titreSection1);

let sousTitreSection1 = document.createElement('p');
sousTitreSection1.innerText = "Vous trouverez ici des leçons et des exemples pour aborder différentes thématiques du JavaScript contemporain"
document.body.append(sousTitreSection1);

let boutonApprendre = document.createElement('button');
boutonApprendre.innerText = "Apprendre";
document.body.append(boutonApprendre);
/////////////
let section2 = document.createElement("div");
let titreSection2 = document.createElement('h2');
titreSection2.innerText = "Exercices";
document.body.append(titreSection2);

let sousTitreSection2 = document.createElement('p');
sousTitreSection2.innerText = "Trouvez des exercices pour pratiquer les leçons"
document.body.append(sousTitreSection2);

let boutonEntrainer = document.createElement('button');
boutonEntrainer.innerText = "S'entraîner";
document.body.append(boutonEntrainer);
//////////////////////
let section3 = document.createElement("div");
let titreSection3 = document.createElement('h2');
titreSection3.innerText = "TP-Evaluations";
document.body.append(titreSection3);

let sousTitreSection3 = document.createElement('p');
sousTitreSection3.innerText = "Réunissez vos connaissances pour vous évaluer"
document.body.append(sousTitreSection3);

let boutonEval = document.createElement('button');
boutonEval.innerText = "TP-Eval";
document.body.append(boutonEval);

///////////////////////////////////////////////////////////////

const templateData = {
    titre: 'Bienvenue sur mon Hub de cours JavaScript',
    phrase: 'Vous trouverez ici des leçons et des exemples pour aborder différentes thématiques du JavaScript contemporain',
    bouton: 'Apprendre',
    img:'images/fondEcranBinaire.jpg'
  };

let divLessons = document.querySelector('.lessonsTemplate');
  console.log(divLessons);
  divLessons.style.backgroundColor = `white`;
  divLessons.style.backgroundImage = `white`;
  divLessons.style.color = `black`;
  divLessons.style.width = '1280px';
 // divLessons.style.margin = 'auto';
  //divLessons.style.padding = '2rem';
  //JS crée une image, renseigne la src , modif taille
  const imgTemplate = document.createElement('img');
  imgTemplate.src = templateData.img;
   imgTemplate.style.height = '200px';
   imgTemplate.style.width = '200px';
  imgTemplate.className='img-fluid';
  divLessons.append(imgTemplate);
  // JS crée le titre 
  const titreTemplate = document.createElement('h1');//phase 1 creation
  titreTemplate.innerText = templateData['titre'];
  divLessons.append(titreTemplate);
  // JS crée la phrase
  const phraseTemplate = document.createElement('h3');//phase 1 creation
  phraseTemplate.innerText = templateData.phrase;
  divLessons.append(phraseTemplate);
  // JS crée le titre du bouton
  const buttonTemplate = document.createElement('button');//phase 1 creation
  buttonTemplate.innerText = templateData.bouton;
  //buttonTemplate.style.height = '30px';
  //buttonTemplate.style.width = '70px';
  divLessons.append(buttonTemplate);

//Commencement optimisation rationnalisation du code de creation, config, placage au sein d'une fonction
function createAndAppendElement(tag, text, parentElement) {
    const element = document.createElement(tag);
    element.innerText = text;
    parentElement.append(element);
}

let newTitle 
createAndAppendElement('h1', templateData.titre, divLessons);
createAndAppendElement('h3', templateData.phrase, divLessons);
createAndAppendElement('button', templateData.bouton, divUser);
/////////////////////

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

let contenuSection1 = "Bienvenue sur mon Hub de cours JavaScript";
let phraseSection1 = "Vous trouverez ici des leçons et des exemples pour aborder différentes thématiques du JavaScript contemporain";
let boutonSection1 = "Apprendre";

let contenuSection2 = "Exercices";
let phraseSection2 = "Trouvez des exercices pour pratiquer les leçons";
let boutonSection2 = "S'entraîner";

let contenuSection3 = "TP-Evaluations";
let phraseSection3 = "Réunissez vos connaissances pour vous évaluer";
let boutonSection3 = "TP-Eval";

let body = document.querySelector("body")

let html = `
    <div>     
        <h2>${contenuSection1}</h2>
        <p>${phraseSection1}</p>
        <button>${boutonSection1}</button>
    </div>
    <div>     
        <h2>${contenuSection2}</h2>
        <p>${phraseSection2}</p>
        <button>${boutonSection2}</button>
    </div>
        <div>     
        <h2>${contenuSection3}</h2>
        <p>${phraseSection3}</p>
        <button>${boutonSection3}</button>
    </div>
`
body.innerHTML = html


//Commencement optimisation rationnalisation du code de creation, config, placage au sein d'une fonction
function createAndAppendElement(tag, text, parentElement) {
    const element = document.createElement(tag);
    element.innerText = text;
    parentElement.append(element);
}

*/
