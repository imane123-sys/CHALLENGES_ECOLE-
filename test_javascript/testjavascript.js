// chalenge 1

let Nom = prompt("entrer votre nom");
console.log(Nom);

let Age = prompt("entrer votre Age");
console.log(Age);

let Sexe = prompt("entrer votre Sexe");
console.log(Sexe);

let Numero_telephone = prompt("entrer votre Snumero de telephone");
console.log(Numero_telephone);

// chalenge 2

 let temperaturec = prompt("entrer la température en celsuis ")
let F = (temperaturec * 1.8) + 32
console.log(F)

// chalenge 3

let a = 1;
let b = 3;
let c = 5;
  a = b ;
  b = c;
  c = a ;

// chalenge 4
let nombreA= Number(prompt("entrer le nombre A "));
let nombreB= Number(prompt("entrer le nombre A "));
let sommetest = `${nombreA + nombreB}`;
console.log(sommetest);

let somme = nombreA + nombreB;
console.log(somme);

console.log(nombreA - nombreB);
console.log(nombreA / nombreB);
console.log(nombreA % nombreB);

chalenge 5
let N1 = 1;
let N2 = 1;
let N3 = 1;
let N4 = 1;

let sommeN = N1 + N2 + N3 + N4;

console.log(sommeN);
let moyenneN = (N1 + N2 + N3 + N4 )/4;
console.log(moyenneN);

// chalenge 6
let vitesse = prompt("entrer vitesse ");
let temps = prompt("entrer temps ");
let distance = vitesse*temps;
console.log(distance);

// chalenge 7
const PI = 3.14;
let rayon = prompt("entrer le rayon de le cercle");
let circonférence  = 2*PI*rayon;
console.log(circonférence);

chalenge 8 inverse un nombre
let nombreEntier = prompt("entrer un entier a 3 chiffres");
let nombreverse = nombreEntier.split("").reverse().join("");
console.log(nombreverse);

// chalenge 8 explication
let nombreEntier = prompt("entrer un entier a 3 chiffres");
let nombresplit = nombreEntier.split("");
// split : string ====> array
console.log(nombresplit);
let nombrereverse = nombresplit.reverse();
console.log(nombrereverse);
let nombrejoin = nombrereverse.join("");
console.log(nombrejoin);

// chalenge 9

let puissance = Math.pow(10,3);

let distance_kilometre = prompt("entrer la distance en kilometre");
let distance_metre = distance_kilometre*puissance;
console.log(distance_metre);

// chalenge 10

let euros = prompt("entrer l'argent en euros");
let dirham = euros*10.61;
console.log(dirham);
