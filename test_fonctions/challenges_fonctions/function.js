// ---------------------------------- Challenge 1 : Inverser un tableau------------------------------------------

// __________________________________________version 1____________________________________

function sommeTableau(tab) {
    let somme = tab.reduce((acc, curr) => acc + curr, 0);
    return somme;
}

let number_entree = prompt("Entrez les nombres séparés par des virgules (ex: 1,2,3,4):");
let tableau = number_entree.split(",").map(Number)

let resultat = sommeTableau(tableau);
alert("La  est : " + resultat);

// _______________________________________ version 2___________________________________________________

// ________________________________2. Maximum dans un tableau ______________________________________________

function maxTableau(tab){

    let max = Math.max();

    return max ;
}

maxTableau([1,2,3]);

// ____________________________________________________ 3. Comptage d’éléments____________________________________________________________________________

// _________________________________________________________________ version 1_______________________________________________________________
//   A chercher = > const prompt = require('prompt-sync')()

function compterOccurrences(tab, valeur){
    let comp = 0;
    for (let i = 0 ; i<tab.length ;i++){
        if(tab[i] === valeur){
            comp ++ ;

        }
     }

    return comp;

}
let tableau1 = [1,2,3,4,5,6];
console.log(compterOccurrences(tableau1,2)); // 1

// ___________________________________________  Challenge 4 Tableau inversé ___________________________________________________

// function  inverserTableau(tab) {

    let tableauInverse = [] ;
    for(let i = tab.length -1 ;i >= 0; i--){
        tableauInverse.push(tab[i]);

    }
    return tableauInverse;

}

let tableau2 =[1,2,3,4,5];
console.log(inverserTableau(tableau2));

// _________________________________________________ Challenge 5 Nombres pairs uniquement  ________________________________________________________________
function inverserTableau(tab){

    let nombre_paires = [] ;
    for (let i = 0 ; i < tab.length ;i++){

        if(tab[i] % 2 === 0){
            nombre_paires.push(tab[i]);

        }
    }

    return nombre_paires;

}

let tableau2 =[1,2,3,4,5,6];
console.log(inverserTableau(tableau2));

// _________________________________________________________________ Challenge 6 Produit des éléments  __________________________________________________________

function produitTableau(tab){
    let produit = 1 ;
    for(let i =0 ;i <tab.length ; i++){
        produit *= tab[i];
    }

    return produit;

}

let tableau = [2,3,4];
console.log(produitTableau);

// ___________________________________________________7. Moyenne des notes_______________________________________

function moyenne(tab) {
  let somme = 0;

  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  if (tab.length !== 0) return somme / tab.length;
}
let tableau = [12, 15, 18, 10];

console.log(moyenne(tableau));

// _______________________________________________________ 8. Doubler les valeurs d'un tableau  ________________________________________

let tableau = [1, 2, 3, 4, 5, 6];
function doubler(tab) {
  let nombre = [];
  for (i = 0; i < tab.length; i++) {
    nombre.push(tab[i] * 2);
  }
  return nombre;
}
console.log(doubler(tableau));

// ______________________________________________ 9.Fusionner deux tableaux________________________________________________
let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];

function fusionner(tab1, tab2) {
  let tableFusionne = [];
  for (i = 0; i < tab1.length; i++) {
    tableFusionne.push(tab1[i]);
  }

  let table2 = [];
  for (j = 0; j < tab2.length; j++) {
    tableFusionne.push(tab2[j]);
  }
  return tableFusionne;
}
console.log(fusionner(tableau1, tableau2));

// _____________________________________________10. Supprimer les doublons _____________________________________________________

// -----------------------------------version 1----------------------------------------------------------

let tableau = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 7];
function supprimerDoublons(tab) {
  let tableau = [];
  for (i = 0; i < tab.length; i++) {
    if (!tableau.includes(tab[i])) {
      tableau.push(tab[i]);
    }
  }

  return tableau;
}
console.log(supprimerDoublons(tableau));

//    ------ ------------------------------------version 2 -----------------------------------------

let tableau = [1, 1, 2, 3, 3, 4, 5, 6, 6];
function supprimerDoublons(tab) {
  return [...new Set(tab)];
}
console.log(supprimerDoublons(tableau));

//   ____________________________________________11. Table de multiplication avec tableau ___________________________________________________
function tableMultiplication(n) {
  let res = [];
  for (let i = 1; i <= 10; i++) {
    res.push(n * i);
  }
  return res;
}

console.log(tableMultiplication(3));

// ______________________________________________ 12. Trouver les mots longs________________________________________
let tableau = ["arbre", "table", "or", "argent"];
function motsLongs(tabMots, longueur) {
  let tableau = [];
  for (let i = 0; i < tabMots.length; i++) {
    if (tabMots[i].length >= longueur) {
      tableau.push(tabMots[i]);
    }
  }
  return tableau;
}
console.log(motsLongs(tableau, 5));
