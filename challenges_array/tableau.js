// chalenge 1

let nombre1 = parseInt(prompt("entrer entire 1"));
let nombre2 = parseInt(prompt("entrer entire 2"));
let nombre3 = parseInt(prompt("entrer entire 3"));
let nombre4 = parseInt(prompt("entrer entire 4"));
let nombre5 = parseInt(prompt("entrer entire 5"));

let nombre_stockees = [nombre1,nombre2,nombre3,nombre4,nombre5];

let nombres_reverses = nombre_stockees.reverse("");
console.log(nombres_reverses);

// CHALENGE 2

let tableau = [1,2,3,4,5,6,7,8,9,10];
for ( let i=0 ;tableau.length; i++){
   let somme = tableau.reduce((acc,curr)=> acc + curr ,0);
   console.log(somme);
   let moyenne = somme /tableau.length;
   console.log(moyenne);

}

// Challenge 3 : Recherche dans un tableau

let nombre1 = parseInt(prompt("entrer entire 1"));
let nombre2 = parseInt(prompt("entrer entire 2"));
let nombre3 = parseInt(prompt("entrer entire 3"));
let nombre4 = parseInt(prompt("entrer entire 4"));
let nombre5 = parseInt(prompt("entrer entire 5"));
let nombre6 = parseInt(prompt("entrer entire 6"));
let nombre7 = parseInt(prompt("entrer entire 7"));
let nombre8 = parseInt(prompt("entrer entire 8"));

let nombres_tableau = [nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8];

let membre_recherche =nombres_tableau.filter((nombre)=> nombre)

// chalenge 3

let nombres = [];
for (let i = 0; i < 8; i++) {
  nombres.push(parseInt(prompt("Entrez l'entier " + (i + 1))));
}

let recherche = parseInt(prompt("Entrez le nombre à rechercher :"));
let index = nombres.indexOf(recherche);

if (index !== -1) {
  alert("Le nombre est présent à la position " + (index + 1));
} else {
  alert("Le nombre n'est pas présent dans le tableau.");
}

// --------------------------------Challenge 4 : Recherche dans un tableau de chaînes ----------------------------------------
let tableau = [];
for (i = 0; i <= 3; i++) {
  let nombreEntree = prompt("enter les chaines");
  tableau.push(nombreEntree);
}
let valeur_recherche = prompt("enter la  chaine a rechercher");
let position = tableau.indexOf(valeur_recherche);
console.log(position);

// avec filter
// let tableau = [];

for (let i = 0; i < 3; i++) {
  let chaine = prompt(`Entrez la chaîne #${i + 1}:`);
  tableau.push(chaine);
}

let recherche = prompt("Entrez la chaîne à rechercher :");

let resultat = tableau.filter((element, index) => {
  if (element === recherche) {
    console.log(`La chaîne "${recherche}" a été trouvée à la position ${index + 1}.`);
    return true;
  }
  return false;
});

if (resultat.length === 0) {
  console.log(`La chaîne "${recherche}" n'a pas été trouvée.`);
}

//Challenge 5 : Min et Max d’un tableau

// -------------- brouillon-----------------------------------------
let tableau = [];
let nombre_entier = tableau.push(Number(prompt("entrer un entier")));
for (i = 0; i <= 7; i++) {
  let maxNombre = Math.max(nombre_entier);
  console.log(maxNombre);
  let minNombre = Math.min(nombre_entier);
  console.log(minNombre);
}

// ------------------------ correction challenge 5------------------------------------------
let tableau = [];
for (let i = 0; i < 7; i++) {
  let entier = Numer(prompt("enter un entier"));
  tableau.push(entier);
}
let maxNombre = Math.max(...tableau);
let minNombre = Math.min(...tableau);

console.log('le nombre maximale est :',maxNombre);
console.log('le nombre minimale est :',minNombre);

// ------------------ Challenge 6 : Carrés des éléments d’un tableau---------------------------------------
//version 1
let tableau = [];
let nombre_entier = tableau.push(parseInt(prompt("entter un nombre entier")));
for (i = 0; i < 5; i++) {
  let caree = Math.pow(nombre_entier);
  console.log(caree);
}

correction challenge 6
let tableau = [];
for (let i = 0; i < 5; i++) {
  let entier = parseInt(prompt("entrer un entier"));
  tableau.push(entier);
}
for (let i = 0; i < tableau.length; i++) {
  let caree = Math.pow(tableau[i], 2);
  console.log(`le caree de ${tableau[i]} est : ${caree}`);
}

// -------------------------Challenge 8 : Compter les voyelles d’une chaîne ---------------------
function lectureChaines() {}
