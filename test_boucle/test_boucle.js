// chalenge 1:
let nombre_souhaite = Number(prompt("entrer un nombre que vous voulez !"));
for(let i=1 ;i <=10 ;i++){

    console.log(`${nombre_souhaite} x ${i} = ${nombre_souhaite * i}`)

}

//chalenge 2

let nombre_premier = Number(prompt("entrer un nombre que vous voulez !"));
if (nombre_premier <= 1) {
  console.log("le nombre premier commance a 2");

} else {
  for (let i = 2; i <= Math.sqrt(nombre_premier); i++) {
    if (nombre_premier % i === 0) {
        console.log("ce nombre est premier");

      break;
    }
  }
}

chalenge 3

for(i= 10 ;i<100 ;i++){

    Math.max

}

//chalenge 4

let nombre = parseInt(prompt('enter un  nombre entier'));
let nombreinverse =nombre.toString().split("").reverse().join("");

console.log(nombreinverse);

.split("").reverse().join("");
console.log(nombre);

//chalenge 5

let n = parseInt(prompt("Entrez un entier n :"));

for (let i = 2; i <= n; i++) {
    let estPremier = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            estPremier = false;
            break;
        }
    }
}

//challenge 6

let base = parseInt(prompt("Entrez la base (un nombre > 0) :"));
let exposant = parseInt(prompt("Entrez l'exposant (un entier ≥ 0) :"));

let resultat = 1;
let compteur = 0;

while (compteur < exposant) {
    resultat = resultat * base;
    compteur++;
}

console.log(base + "^" + exposant + " = " + resultat);

// chalenge 7

let somme = 0;
for (i = 1; i <= 10; i++) {
  let nombre = Number(prompt("enter un nombre"));
  if (nombre > 0) {
    somme += nombre;
  }
  if (somme > 0) {
    console.log("la somme est " + somme);
  } else {
    console.log("aucun nombre positif est saisi");
  }
}

// chalenge 8: pyramide d'etoiles

let nombre = 2;
let compteur = 0;
let lignes_entrees = Number(prompt("enter un nombre des lignes "));
while (compteur < lignes_entrees) {
  let estPremier = true;
  for (let i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
      estPremier = false;
    }
  }

  if (estPremier) {
    console.log("*".repeat(nombre));
    compteur++;
  }
  nombre++;
}
