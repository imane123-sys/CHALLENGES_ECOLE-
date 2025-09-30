// -------------------------------------------------mini projet :calculatrice -------------------------------------------------

const prompt = require("prompt-sync")();
let historique = [];
let continuer = "oui";
while (continuer.toLocaleLowerCase() !== "quitter") {
  let choixOperation = prompt(
    "choisir l'operation souhaite : addition ,soustraction ,Division ,Puissance , RacineCaree, Factorille  :"
  );

  const operationsValides = [
    "addition",
    "soustraction",
    "division",
    "puissance",
    "racine",
    "factorielle",
  ];
  if (!operationsValides.includes(choixOperation)) {
    console.log("Erreur !!!! opération non valide .Veuillez réessayer");
    continuer = prompt("voulez vous faire un autre calcul? (oui/quitter)");
    continue;
  }
  let nom1 = Number(prompt("entrer le premier nombre :"));
  let nom2;
  let res;

  if (
    ["addition", "soustraction", "division", "puissance"].includes(
      choixOperation
    )
  ) {
    nom2 = Number(prompt("entrer le deuxieme  nombre :"));
  }

  switch (choixOperation.toLocaleLowerCase()) {
    case "addition":
      res = Addition(nom1, nom2);
      break;

    case "soustraction":
      res = Soustraction(nom1, nom2);
      break;

    case "division":
      res = Division(nom1, nom2);
      break;

    case "puissance":
      res = Puissance(nom1, nom2);
      break;
    case "racine":
      res = RacineCaree(nom1);
      break;

    case "factorielle":
      res = Factorielle(nom1);
      break;
  }
  console.log("Résultat :", res);

  historique.push({
    operation: choixOperation,
    resultat: res,
  });

  console.log("Liste des histroriques:");
  historique.forEach((item, index) => {
    console.log(`${index + 1}:    ${item.operation} = ${item.resultat}`);
  });

  // for (let item of historique) {
  //   console.log("Liste des histroriques:");
  //   console.log("operation:", item.operation);
  //   console.log("resultat:", item.resultat);
  // }
  continuer = prompt("voulez vous faire un autre calcul? (oui/quitter)");
}

console.log("merci d'avoir utiliser notre calculatrice");

// // // // // _____________________________________________________les fonctions________________________________________________________________

function Addition(nom1, nom2) {
  return nom1 + nom2;
}

function Soustraction(nom1, nom2) {
  return nom1 - nom2;
}

function Division(nom1, nom2) {
  if (nom2 === 0) {
    return "erreur on ne peut pas diviser sur 0 !!!!";
  }
  return nom1 / nom2;
}

function Puissance(nom1, nom2) {
  let puissance = nom1 ** nom2;
  return puissance;
}

function RacineCaree(nom1) {
  let racine = Math.sqrt(nom1);
  return racine;
}

function Factorielle(nom1) {
  if (nom1 < 0) {
    return " Erreur n a ps de factorielle";
  }
  let resultat = 1;
  for (let i = 1; i <= nom1; i++) {
    resultat *= i;
  }
  return resultat;
}

// ---------------------------------------- DES ADDITIONS----------------------------------------------------------
// function DemanderNombreDeux() {
//   const prompt = require("prompt-sync")();
//   return Number(prompt("entrez deuxieme nombre"));
// }

// console.log(Factorielle(5));

// console.log(RacineCaree(2));
// console.log(Puissance(2,2));

//  function Addition(nom1 ,nom2){
//     let somme = 0;
//     let  tableau1 = [];

//     for (let i = 0; i < 2; i++ ){
//         let nombre =Number(prompt("enter un nombre"));
//          tableau1.push(nombre)

//     }
//     somme = tableau1[0] +tableau1[1] ;
//     return   somme;

// }
// console.log(Addition());

// // _____________________________________________________________function Soustraction ______________________________________________________
// function soustraction(nom1 ,nom2){

//     let  tableau = [];

//     for (let i = 0; i < 2; i++ ){
//         let nombre =Number(prompt("enter un nombre"));
//          tableau.push(nombre)

//     }
//     somme = tableau[0] - tableau[1] ;
//     return  somme;

// }
// console.log(soustraction());

// //    ________________________________________________________function Division ______________________________________________________
// function Division (nom1 ,nom2){

//     let  tableau = [];

//     for (let i = 0; i < 2; i++ ){
//         let nombre = Number(prompt("enter un nombre"));
//          tableau.push(nombre);
//          if (tableau[1] === 0){
//             return  'impossible de diviser un nombre sur 0';

//          }

//     }
//      let division = tableau[0] / tableau[1] ;
//     return  division;

// }
// console.log(Division());

// // __________________________________________________function Puissance ____________________________________________________________________

// function Puissance  (nom1 ,nom2){

//     let  tableau = [];

//     for (let i = 0; i < 2; i++ ){
//         let nombre = Number(prompt("enter un nombre"));
//          tableau.push(nombre);

//     }
//      let puissance = tableau[0] ** tableau[1] ;
//     return  puissance;

// }
// console.log(Puissance());

// // __________________________________________________________function Racine ___________________________________________________

// function RacineCaree() {
//     let tableau = [];

//     for (let i = 0; i < 2; i++) {
//         let nombre = Number(prompt(`Entrez le nombre ${i + 1} pour calculer  la racine`));

//         if (nombre >0) {

//             let racine = Math.sqrt(nombre);
//             tableau.push(racine);
//         }
//     }

//     return tableau;
// }

// console.log(RacineCaree());

// //  __________________________________________________________function Factorille ________________________________________________________
// function Factorielle (n){
//     let resultat = 1
//     let nombre = 5;
//     for (let i = 1 ; i < n  ;i++){
//         if (  nombre > 0){
//             resultat *= i;

//         }

//     }

//  console.log(Factorielle(nombre));
// }

// //     }

//     // n  =  5  factoriele  = 5*4*3*2*1

//     l
//     let tableauCalculs = [Addition , soustraction , Division , Puissance , RacineCaree];
