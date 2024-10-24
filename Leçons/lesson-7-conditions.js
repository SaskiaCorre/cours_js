// Opérateurs ternaires : on fait quelque chose si une condition est remplie, sinon, on fait autre chose
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition 
// qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
let whatIsYourAge = 6;
console.log(whatIsYourAge >18 ? 'oui':'non');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)

let userPremium = true;
// On check si une variable est définie la condition c'est juste uneVariable ?
console.log(userPremium ?'OK':'Not OK');
// ↑ c'est l'équivalent de ↓
console.log(userPremium == true ?'Ok':'Not OK');
// on doit lui assigner QQCHOSE
userPremium = 'YES';
console.log(userPremium?'OK':'Not OK');

// On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
console.log(3==3&&3<4);
let typeUtilisateur = 'Extra';
console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');

//!-------CONDITION avec IF ELSE-------
// Avec if on va pouvoir créer un bloc de code qui s'exécute seulement si une condition est remplie
function calculTableResto(nombreDeReservation) {
 if (nombreDeReservation>=30){
 return 'il nous reste pas beaucoup de tables, ça serait pour combien de personnes ?';
 }
 else if(nombreDeReservation<10){
 return 'Il nous reste une table'
 }else{
 return 'On est fermé !'
 }
};
console.log(calculTableResto(50));

function totalStock(stock){
    if (stock<10){
        return "Il est temps de se réapprovisionner";
    }else if (stock<30){
        return "Stock suffisant";
    }else{
        return "Ce produit ne se vend pas";
    }
}
console.log(totalStock(25));