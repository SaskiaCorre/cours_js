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

export function moduleHello(name) {
    console.log('Bonjour depuis hello.js '+ name);
    // alert(`Bonjour ${name}`)
    // return `Bonjour depuis hello.js : ${name}`
   }

