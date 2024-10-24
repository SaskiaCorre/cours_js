//const { Button } = require("bootstrap");
//! EXO 20.1
//TODO: via JS afficher le profil utilisateur dans la page web
const userData = {
  name: 'John delavega',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1989',
  active: true,
  img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg',//phase2 remplissage 
};
// Création du cadre du fond
const template = document.querySelector('.userData');
  console.log(template);
  template.style.backgroundColor = 'pink';
  template.style.backgroundImage = 'white';
  template.style.color = `black`;
  template.style.width = '300px';
  template.style.margin = '200px';
  template.style.padding = '2rem';

// Création et insertion de l'emplacement de l'image
const imgTemplate = document.createElement('img');
  imgTemplate.src = userData.img;
  imgTemplate.style.height = '300px';
  imgTemplate.style.width = '300px';
  imgTemplate.className='img-fluid';
  template.append(imgTemplate);

// Création et insertion du titre 
const displayTitle = document.createElement('h1');
displayTitle.innerText = userData.name;
template.append(displayTitle);

// Création et insertion du mail
const displayMail = document.createElement('h3');
displayMail.innerText = userData.email;
template.append(displayMail);

// Création et insertion de l'âge
const displayAge = document.createElement('h2');
displayAge.innerText = userData.age;
template.append(displayAge);

// Création et insertion de la date de naissance
const displayDob = document.createElement('h2');
displayDob.innerText = userData.dob;
template.append(displayDob);

// Création et insertion du titre 
const displayActive = document.createElement('h3');
displayActive.innerText = userData.active;
template.append(displayActive);

// Je n'ai pas réussi à faire linéar-gradient(to left bottom)


createAndAppendElement('h1', userData.name, divUser2);
createAndAppendElement('h2', userData.email, divUser2);
createAndAppendElement('h3', userData.age, divUser2);
createAndAppendElement('h4', userData.dob, divUser2);
createAndAppendElement('h5', userData.active, divUser2);
createAndAppendElement('h5', '44 rue du truc', divUser2);
