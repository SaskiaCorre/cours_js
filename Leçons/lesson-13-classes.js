/**
 * **************************************
 * 14- Les Classes
 * **************************************
 * 
 * 
 */

//! Le nom de la classe commence tjrs par majuscule
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    this.contact = paramPhoneUser + paramMailUser;
    this.resume = this.getProfileInfo();
    this.count = 0
    // this._nom = nom;  
    }
    getPhone(){
        if(user==="admin")
        return this.phoneUser;
    }
    getProfileInfo() {
    console.log('this ',this);
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


console.log(exampleUser2.nameUser);
exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();
console.log('--e-de-de-d', exampleUser1.nameUser);

// Afficher les infos userProfile dans la page web
function affichagePageWeb(oneUser) {
    const h2element = document.querySelector("h2");
    h2element.innerText = oneUser.getProfileInfo();
}

affichagePageWeb(exampleUser1);

class UserAdmin extends UserProfile {
    constructor(unNom, unMail, unPhone, sector, personnalPhone) {
    super(unNom, unMail, unPhone); //! Appel au constructor du parent
    this.sector = sector;
    this.personnalPhone = personnalPhone;
    }
    getAdminInfo() {
    return `infos de l'utilisateur : 
        son nom : ${this.nameUser}
        son secteur d'intervention : ${this.sector}
        son Tél Personnel : ${this.personnalPhone}`;
    }
}

const exampleAdmin1 = new UserAdmin(
    "Jacky",
    "jack@gmail.com",
    "012345678",
    "administration",
    "0687654323"
);

console.log(exampleAdmin1.getAdminInfo());
const exampleUserClassic = new UserProfile("AZERTYUIO", "jojoj@gmail.com", "111111111");
exampleUser2.getProfileInfo();
// ↓ erreru car c'est pas un admin donc error
exampleUser2.getAdminInfo();

// Syntaxe
// Côté code, on crée notre class UserProfile, pour pouvoir créer des nouvelles instances 
// on renseigne les données dont on a besoin, que l’on recevra en paramètre (nameUser, mailUser, phoneUser)
// Le mot clé this va représenter l’objet courant, celui que l’on est entrain de créer, c’est le contexte.
// En résumé, on assigne aux propriétés de notre classe les valeurs qu’on va recevoir en paramètres 
class UserProfile {      // Pas besoin de déclarer function devant le constructor et méthodes
    constructor(userName, userMail, userPhone) {
    this.userName = userName;
    this.userMail = userMail;
    this.userPhone = userPhone;
    } // Bonus : on écrit une fonction au sein de la classe, c’est une méthode de classe et elle ne pourra s’utiliser QUE sur des objets 
    getProfileInfo() {                                                                            // (nouvelles instances) de cette classe
    return `infos de l'utilisateur :
    son nom : ${this.userName}
    son mail : ${this.userMail}
    son Tél : ${this.userPhone}`;
    }
   }
// Une fois qu’on a définit la structure de notre classe on va pouvoir utiliser le constructeur pour créer un nouvel utilisateur en faisant new UserProfile( )
const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
exampleUser2.getProfileInfo();
    
//console.log(UserProfile);

// L'HERITAGE grâce à extends et super(qui reprend les paramètres du container)
// Avec les classes on peut également profiter d’un système d’héritage, cela signifie que nous pouvons étendre (extends) les propriétés, 
// les méthodes d’une classe vers une autre
// Par exemple dans notre application on gère déjà des utilisateurs, mais on veut aussi gérer des utilisateurs un peu plus spécifiques : 
// des Admin qui auraient les mêmes propriétés que les utilisateurs (un nom, un mail, un téléphone) mais avec des informations en plus 
// (le secteur dans lequel l’admin travaille, et son Téléphone personnel)
// On crée une nouvelle classe « enfant » qui hérite des propriétés et des méthodes d’une classe parent.
class UserAdmin extends UserProfile{
    constructor(userName,userMail,userPhone,adminSector,adminCell){
    super(userName,userMail,userPhone); //! Appel au constructor du parent
    this.adminSector = adminSector;
    this.adminCell = adminCell;
    }
    getAdminInfo(){
    return `infos de l'administrateur :
    son nom : ${this.userName}
    son mail : ${this.userMail}
    son tel : ${this.userPhone}
    son secteur d'intervention : ${this.adminSector}
    son portable : ${this.adminCell}`;
    }
   }

const exampleAdmin1 = new UserAdmin('Jacky','jack@gmail.com','012345678','administration','0987654323');
const exampleAdmin2 = new UserAdmin('Bernard','beber@gmail.com','0156133449','développement','0750129647');
console.log(exampleAdmin1.getAdminInfo());
console.log(exampleAdmin2.getAdminInfo());
