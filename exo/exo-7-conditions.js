//! EXO 7 - IF ELSE
// TODO: Créer une fonction qui reçoit un tableau de 3 notes ou le tableau des notes (cf exo avant) 
// et qui calcule une moyenne entre ces 3 notes (Tableau de note)
// TODO: Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string (très Bien)
// TODO: Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une string (assez Bien)
// TODO: Dans cette ƒ°, SINON renvoi une string (refus) 
function calcul(n1, n2, n3) {
    let total = (n1 + n2 + n3) / 3;
    if (total>15){
        return 'Très bien';
    }else if (total>=10){
        return 'Assez bien';
    }else{
        return 'Refusé';
    }
}
console.log(calcul(17, 18, 15));
