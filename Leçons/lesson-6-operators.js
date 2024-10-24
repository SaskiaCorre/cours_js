let a = 11;
let b = 99;
console.log("a =",a);
console.log("b =",b);
//! avec == on demande si a est égal à b
console.log("C'est égal ?  avec ==:", a == b);
//!pour vérifier si a est différent de b on utilise !=
console.log("C'est inégal ? evec != :", a != b);
//! Ensuite on retrouve les même opérateurs qu'en Mathématique
//! ici on demande si a est strictement suppérieur à b
console.log("a est strictement suppérieur à b ? avec >:", a > b);
//! ici on demande si a est strictement inférieur à b
console.log("a est strictement inférieur à b ? avec <:", a < b);
//! ici on demande si a est inférieur ou égal à b
console.log("a est inférieur ou égal à b ? avec <=:", a <= b);
//! ici on demande si a est suppérieur ou égal à b
console.log("a est suppérieur ou égal à b ? avec >=:", a >= b);
//? Attention : de base JS ne prend pas en compte le typage des variables : 
//? ci dessous le nombre 2 est égal au caractère "2" %
console.log("Le chiffre 2 = \"2\"?:", 2 == "2");
//! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
//! c'est l'égalité stricte
console.log("Egalité stricte: est- ce que valeur1 = valeur1 ? avec ===:", 2 === "2");
//! il y a aussi l'inégalité stricte avec l'opérateur !==
console.log("Inégalité stricte: est-ce que valeur 1 est différente de valeur1 ? avec !==:", 2 !== "2")