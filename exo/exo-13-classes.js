console.log("EXERCICE 1");
class imc {
    constructor(userName, userWeight, userHeight) {
        this.userName = userName;
        this.userWeight = userWeight;
        this.userHeight = userHeight;
        this.userImc = ""; // On fera plutôt un outmde this.Imc = this.calculImc
    }                       // cad mettre plutôt la fonction qui retourne la valeur, plutôt qu'une variable vide
    calculImc() {
        let userImc = this.userWeight/(this.userWeight*this.userHeight); 
        userImc = userImc.toFixed(2);
        return userImc;
    }

    displayUserInfo() {
        return `${this.userName} (${this.userWeight} kg, ${this.userHeight}) a une IMC de: `;
    }
}

const user1 = new imc("Sébastien Chabal", 135, 1.7);
const user2 = new imc("Escaladeuse", 45, 1.68);
const user3 = new imc("JOJO", 300, 2);
const user4 = new imc("Gontrand", 90, 1.75);
const user5 = new imc("Colonel Clock", 200, 1.75);
const user6 = new imc("JOsiane de la Vega", 99, 1.55);

const usersList = [];
usersList.push(user1, user2, user3, user4, user5, user6);

for(imc of usersList){
    console.log(`${imc.userName} (${imc.userWeight} kg, ${imc.userHeight}) a une IMC de: ${imc.calculImc()}`);
};

// Magasin
class Produit {
    constructor(name, price, quantityInStock){
        this.name = name;
        this.price = price;
        this.isInStock = isInStock;
    }
    isInStock(){
        let inStock = this.isInStock;
        return inStock;
    }
}

class Magasin {
    constructor(quantityInStock)
}
const prod1 = new Produit("pantalon", 50, true);
const prod2 = new Produit("jupe", 30, false); 


const thisProdInStock = [];
thisProdInStock.push(prod1, prod2);

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

class Magasin {
    constructor(prodTitle, prodPrice, prodDispo){
        this.prodTitle = prodTitle;
        this.prodPrice = prodPrice;
        this.prodTitle = prodDispo;
    }
    
}
/*/////////////////////////////////////////////////////

console.log("EXERCICE 2");
class employee {
    constructor(employeeFirstName, employeeSecondName, employeeAge, employeeMonthlySalary) 
    {
        this.employeeFirstName = employeeFirstName;
        this.employeeSecondName = employeeSecondName;
        this.employeeAge = employeeAge;
        this.employeeMonthlySalary = employeeMonthlySalary;
        this.employeeYearCost = "";
    }
    calculEmployeeYearCost()
    {
        let employeeYearCost = (this.employeeMonthlySalary + ((90*this.employeeMonthlySalary)/100))*12;
        return employeeYearCost;
    }
}

const employee1 = new employee("Duval", "Paul", 30, 2000);
const employee2 = new employee("Durand", "Alain", 40, 3000);
const employee3 = new employee("Dois", "Sylvia", 50, 4000);

console.log(employee1.calculEmployeeYearCost());
console.log(employee2.calculEmployeeYearCost());
console.log(employee3.calculEmployeeYearCost());

const pmeTeam = [];
pmeTeam.push(employee1, employee2, employee3);

console.log(pmeTeam[0]);
console.log(pmeTeam[1]);
console.log(pmeTeam[2]);


for(employee of pmeTeam) { 
    if (employee < pmeTeam.length) 
        {
    (calculEmployeeYearCost (i) {this.print = calculEmployeeYearCost () {console.log(this.employeeYearCost);};this.print();}).call(pmeTeam[i], i);
  }
};

for(employee of pmeTeam){
    if (employee < pmeTeam.length){
        console.log(pmeTeam[0].calculEmployeeYearCost().arguments);
        console.log(pmeTeam[1]);
        console.log(pmeTeam[2]);
    }
};

console.log(employee.calculEmployeeYearCost());

//const oneEmployeeYearCost = ;
//console.log(oneEmployeeYearCost);

/*
for(employee of pmeTeam){
    oneEmployeeYearCost.push(employee.calculEmployeeYearCost());
}
console.log(oneEmployeeYearCost);
calculTeamYearCost()
{
    let nEmployees = 0;
    for (i=0; i< nEmployees; i++){
        
    }
}



    let oneEmployeeYearCost = `${employee.calculEmployeeYearCost()}`;
    for (let i=0; i < pmeTeam.length; i++){
        while (i < pmeTeam.length){
            nEmployees += 1;
            oneEmployeeYearCost += oneEmployeeYearCost;
        }
    }

    //let totalEmployeeCost = 0;
    while (employee < pmeTeam.length){
        let totalEmployeeCost = 0;
        console.log(totalEmployeesCost);
    }
}
}

const totalEmployeesCost = "";
for(employee of pmeTeam){
    if (employee < pmeTeam.length){
        totalEmployeesCost +=  employee[i].calculEmployeeYearCost();
    }   
    console.log(totalEmployeesCost);
}

let totalYearSalary = ;
function totalCalculEmployeeYearCost() 
{
    for(employee of pmeTeam)
        {
            let nEmployees = 0;
            totalYearSalary = 0;

            if (nEmployees < pmeTeam.length)
            {
                total += ;
                console.log(total);
            }
        }
}
totalCalculEmployeeYearCost();

const usersList = [];
usersList.push(user1, user2, user3, user4, user5, user6);

for(imc of usersList){
    console.log(`${imc.userName} (${imc.userWeight} kg, ${imc.userHeight}) a une IMC de: ${imc.calculImc()}`);
};

    employeesYearCost ++;
    employeesMonthlyCost += employeesMonthlyCost;
    console.log(employeesYearCost);
}

class pme {
    constructor(pmeName, pmeTeam, pmeRent, pmeFixedCost, pmeAnnualCost) {
        this.pmeName = pmeName;
        this.pmeTeam = pmeTeam;
        this.pmeRent = pmeRent;
        this.pmeFixedCost = pmeFixedCost;
        this.pmeAnnualCost = pmeAnnualCost;
        this.totalYear = "";
    }
    calculTeamCost() {//calculIMC
        let employeeCharges = this.employeeSalary + ((90*this.employeeSalary)/100); 
        return employeeCharges;
    }
}


/*
let pmeTeam =
    [new employee ("Duval", "Paul", 30, 2000),
    new employee ("Durand", "Alain", 40, 3000),
    new employee ("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
   pme.bilanCalculed();

   const pme = new pme (
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new employee ("Duval", "Paul", 30, 2000),
    new employee ("Durand", "Alain", 40, 3000),
    new employee ("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    R = 300000,
    FF = 20000,
    FA = 50000);
   pme.bilanCalculed();

class imc {
    constructor(userName, userWeight, userHeight) {
        this.userName = userName;
        this.userWeight = userWeight;
        this.userHeight = userHeight;
        this.userImc = "";
    }

class Produit {
    constructor(nomProduit, prixProduit){
        this.nomProduit = nomProduit;
        this.prixProduit = prixProduit;
        this.quantiteProduit = quantiteProduit;
    }
    disponible() {
        this.quantiteProduit = 0;
        for (let i=0; i>this.quantiteProduit; i++){
            if (i>0){
                return true;
            } else {
                return false;
            }
        }
    }
}
//console.log(Produit.disponible());
let tabProduits = Produit.disponible(quantiteProduit[i]);
console.log(tabProduits);
//class Magasin {
  //  constructor(tabProduits)
//}
*/