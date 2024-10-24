function fSimple() {
    console.log("Hello World");
    console.log(22+15);
}
fSimple(); // Il faut "appeler" la fonction pour qu'elle s'exécute

// Les fonctions ont aussi un concept de paramètre, dans le cas où les instructions au sein 
// de la fonction ont besoin d’une variable extérieure
function displayMessage(message) {
    message = "Hello Word";
    console.log(message);
}
displayMessage();

function displayMessage2(message2) {
    message2 = "Coucou";
    return message2;
}
console.log(displayMessage2());

function displayMessage3(message3){
    return message3;
}
let message3 = displayMessage3("bonjour");
console.log(message3);

// On a souvent besoin de coder une fonction dont on se servira aillaurs dans le code. Il ne 
// faut donc pas qu'elle console.log(), puisque c'est une action qui se fait a l'instant où 
// elle est commandée dans le code, mais il faut qu'elle RETURN une valeur quand on en a besoin
function calculReturn(n3, n4) {
    return n3 + n4;
} // Ensuite, on stocke le résultat dans une variable
let resultat = calculReturn(22, 99);
console.log("Fonction qui return: ", resultat);
console.log("Le résultat est: ", calculReturn(30, 55));

//? Quand une fonction doit return quelquechose
function moins(a,b){
    return a-b;
};
// à l'execution de la ƒ° le resultat du calcul (ce que la fonction renvoit/return)
// sera stocké dans une variable monResultat
let monResultat = moins(99,20);
// Ou alors, le résultat est direct return dans un console.log()
console.log('Mon resultat:',moins(99,20));
console.log('exec de la fonction direct dans console.log() : ',moins(99,20));

