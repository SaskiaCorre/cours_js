// Pour nous une API ça sera simplement une URL que l’on contactera via Javascript pour en extraire les informations.

// FETCH() - aller chercher
// Dans Javascript, nous allons utiliser la méthode fetch(), qui nous permettra de contacter n’importe qu’elle API via son URL, 
// la méthode renvoi des objets de type Response (asynchrome) ou Promise (synchrome).
// l’API Fetch et sa méthode fetch() qui correspondent à la “nouvelle façon” d’effectuer des requêtes HTTP. 

// ASYNC...AWAIT
// Pour préciser à JS que sur certaines instructions, le programme doit attendre que celles-ci aient reçu la réponse de l'API avant de passer à l’instruction suivante.
// On déclare une fonction avec le mot clé async pour indiquer que le code contenu dans cette fonction devra être exécuté de manière asynchrone 
// et, sur certaines instructions de cette fonction, on utilise le mot clé await (généralement sur la fonction fetch( ) et la fonction json( ) qui manipulent les 
// données de l’api) pour lui indiquer d'attendre la réponse

// Exemple pour fetch() une api météo pour afficher la latitude
const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de travailler sur la réponse, on va la transformer pour qu'elle devienne un objet js et nous faciliter sa manipulation
    const dataTransformed = await response.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude;
};
contactApi();

// Version avec + de secu 
const contactApiSecure =  async () => {
    const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
    console.log(rawData);
    
    // Vérification du statut de la réponse
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }

    const transformedData = await rawData.json();
    console.log(transformedData);
    apiDiv.innerHTML = transformedData.name.fr;
}

contactApiSecure();

// exemple avec try catch 
const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        apiDiv.innerHTML = transformedData.name.fr;
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}
contactApiSecurePlus();

// Exemple d'API mais en utilisant un chainage de ƒ° then() et catch()
const divApi = document.querySelector('.apiContact');
console.log(divApi);
const apiContact = () => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    .then(response => response.json())
    .then(data =>(divApi.innerText = data.latitude))
    .then(data =>(console.log(data)))
    .catch(error => console.log("Erreur custom : " + error));
};
apiContact();

// Autre exemple 
const contactApi3 = () => {
    //! tester si jamais on se trompe dans l'url (mettre l'un des 2 fetch en commentaire) 
// fetch("https://api.npms.io/on-s-est-trompe-dans-l-url")
//! Ci dessous avec une url valide
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    .then(async (response) => {
    const dataTransformed = await response.json();
    // Ici on gère aussi les erreurs au niveau de la
    // réponse de l'api
    //  Si dans la response la propriété ok n’est pas définie  
    if (!response.ok) {
        // on récupère les messages d'erreur ou la propriété statusText par default de la response 
        const error = (dataTransformed && dataTransformed.message) || response.statusText;
        //ƒ° native de JS utilisé sur les objets de type Promise
        return Promise.reject(error);
    }
    apiDiv.innerText = dataTransformed.latitude;
    })
    .catch((error) => {        
    console.log(error);
    // Ici on crée une error custom et l'objet error
    console.error("Attention une fusée à décollée depuis Grenoble", error);
    });
};
contactApi3();

