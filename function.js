// ---------------------------------- Challenge 1 : Inverser un tableau------------------------------------------

// __________________________________________version 1____________________________________

// function sommeTableau(tab) {
//     let somme = tab.reduce((acc, curr) => acc + curr, 0);
//     return somme;
// }

// let number_entree = prompt("Entrez les nombres séparés par des virgules (ex: 1,2,3,4):");
// let tableau = number_entree.split(",").map(Number)

// let resultat = sommeTableau(tableau);
// alert("La  est : " + resultat);



// _______________________________________ version 2___________________________________________________


// ________________________________2. Maximum dans un tableau ______________________________________________



// function maxTableau(tab){

//     let max = Math.max();


//     return max ;
// }

// maxTableau([1,2,3]);




// ____________________________________________________ 3. Comptage d’éléments____________________________________________________________________________

// _________________________________________________________________ version 1_______________________________________________________________
//   A chercher = > const prompt = require('prompt-sync')()

// function compterOccurrences(tab, valeur){
//     let comp = 0;
//     for (let i = 0 ; i<tab.length ;i++){
//         if(tab[i] === valeur){
//             comp ++ ;

//         }
//      }

//     return comp;


// }
// let tableau1 = [1,2,3,4,5,6];
// console.log(compterOccurrences(tableau1,2)); // 1




// ___________________________________________  Challenge 4 Tableau inversé ___________________________________________________

// function  inverserTableau(tab) { 

//     let tableauInverse = [] ;
//     for(let i = tab.length -1 ;i >= 0; i--){
//         tableauInverse.push(tab[i]);


//     }
//     return tableauInverse;


// }

// let tableau2 =[1,2,3,4,5];
// console.log(inverserTableau(tableau2));





// _________________________________________________ Challenge 5 Nombres pairs uniquement  ________________________________________________________________
// function inverserTableau(tab){


//     let nombre_paires = [] ;
//     for (let i = 0 ; i < tab.length ;i++){

//         if(tab[i] % 2 === 0){
//             nombre_paires.push(tab[i]);

//         }
//     }

//     return nombre_paires;


// }

// let tableau2 =[1,2,3,4,5,6];
// console.log(inverserTableau(tableau2));



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




   














 












