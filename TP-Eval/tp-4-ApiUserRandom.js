// TP API USER RANDOM
// TODO En js vous aller contacter l'API afin d'afficher les données dans la divCard (si possible en respectant le template)
// On va afficher l'image de profil titre (mr ou mme) le nom le prenom le maill'adresse complete (Num rue nom rue, ville, pays)Tél 
// ensuite on a un button si on click dessus cela recharge la div avec un nouvel utilisateur (modifié)
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div> -->
// </div>
/*
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
*/  
const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://randomuser.me/api/');
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



const imgTemplate = document.createElement('div');
imgTemplate.src = rawData.img;
   imgTemplate.style.height = '50px';
   imgTemplate.style.width = '50px';
divUser.append(imgTemplate);

// JS crée le titre du name
const nameTemplate = document.createElement('h5');//phase 1 creation
nameTemplate.innerText = userData['name'];
name.append(nameTemplate);

// JS crée le titre du email
const emailTemplate = document.createElement('p');//phase 1 creation
emailTemplate.innerText = userData.email;
divUser.append(emailTemplate);
// JS crée le titre du age

const ageTemplate = document.createElement('h3a');//phase 1 creation
ageTemplate.innerText = userData.age;
divUser.append(ageTemplate);
