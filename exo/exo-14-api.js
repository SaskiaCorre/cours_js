// LESSON API
// 3 manières de récupérer les info de l'api ; il faut choisir celle qu'on maîtrise le mieux

// METHODE 1 : contacter l'api avec flech()
const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans unevariable
const contactApi = async () => {
 //Data va récup Toutes les données de l'api
 const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
 console.log(data);
 //Plutôt que de Travailler sur la réponse, on va la transformé pour
 //qu'elle devient un OBJET JS (+ pratique)
 const dataTransformed = await data.json();
 console.log(dataTransformed);
 apiDiv.innerText = dataTransformed.latitude;
};
contactApi();

// Toujours se referrer à la doc de l'api

// METHODE 2 avec Fetch + .then() + catch() 
const apiDiv2 = document.querySelector('.apiContact');
console.log(apiDiv2);
const contactApi2 = () => {
 fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
 .then(response => response.json())
 .then(data =>(apiDiv2.innerText = data.latitude))
 .then(data =>(console.log(data)))
 .catch(error => console.log("Erreur custom : " + error));
};
contactApi2();

// METHODE 3 avec Fetch +then + catch + async Await 
// Gestion des erreurs avec Response ET Promise (le plus sécu)
const apiDiv3 = document.getElementById("apiContact");
const contactApi3 = () => {
 // tester si jamais on se trompe dans l'url (mettre l'un des 2 fetch en commentaire)
fetch("https://api.npms.io/on-s-est-trompe-dans-l-url")
// Ci dessous avec une url valide
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m").then(async (response) => {
const dataTransformed = await response.json();
 // Ici on gère aussi les erreurs au niveau de la
 // réponse de l'api
 // Si dans la response la propriété ok n’est pas définie
 if (!response.ok) {
 // on récupère les messages d'erreur ou la propriété statusText par default de la response
 const error = (dataTransformed && dataTransformed.message) ||
response.statusText;
 //ƒ° native de JS utilisé sur les objets de type Promise
 return Promise.reject(error);
 }

 apiDiv3.innerText = dataTransformed.latitude;
 })
 .catch((error) => {
 console.log(error);
 // Ici on crée une error custom et l'objet error
 console.error("Attention une fusée à décollée depuis Grenoble", error);
 });
};
contactApi3();