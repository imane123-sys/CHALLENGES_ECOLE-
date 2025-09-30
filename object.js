// // Object Literals
// const personne ={
//     nom:"hamdi",
//     prenom:"ahmed",
//     age:30,
//     Salutation:function(){
//         // console.log("hello");
//         return "hello";

//     }

// }

// //Add and MODIFY
// personne.nom = "imane";
// personne.age= 20;

// personne.ville =" "

// console.log(personne.Salutation());
// console.log(personne.nom);
// console.log(personne["age"]);

// // Constructor Functions
// function Person(name,age){
//     this.name =name ;
//     this.age =age ;
// }
// const infoPerson = new Person("imane",30)

// object Create
// const obj =Object.create(null);

//class Constructor

// class Person {
//     constructor(name,age){
//         this.name =name ,
//         this.age =age;
//     }
// }
// const person2 = new Person("meriem",21)

// ____________________________________________________CHALLENGE ______________________________________________
// let Voiture = {
//     marque :"BM",
//     modele:"BM SPORT",
//     annee :2019
// }
// console.log(Voiture);
// À partir de l’objet voiture, affiche seulement la marque et l’année.
// console.log(Voiture.marque);
// console.log(Voiture.annee);

// 3.  Modifié l’année de la voiture et affiche l’objet mis à jour.

// Voiture.annee = 2000;
// console.log(Voiture);

// 4.  Ajoute une propriété couleur à l’objet voiture.

// Voiture.couleur = "rose";
// console.log(Voiture);

// 5.  Supprime la propriété modele de l’objet voiture.
// delete  Voiture.modele;
// console.log(Voiture);

// ____________________________CHALLENGE 2 ________________________________
//   let etudiant = {
//     nom : "imane",
//     age : 20,
//     presentation:function sePresenter(){
//         console.log(`Bonjour, je m'appelle ${etudiant.nom} et j'ai ${etudiant.age} ans`);

//     }
//   }
//    console.log( etudiant.presentation());

//    2.  Créer un objet personne et affiche toutes ses clés et valeurs avec une boucle
// for...in.

// ---------------------------------------exemple 1---------------------------------------------------
// let personne = {
//     nomComplet:"Imane Berrada",
//     ville :"BM"
// }
// for (let  per in personne ){
//     // console.log(`${per} :${personne[per]}`);
//     console.log(`${per} :${personne[per]}`);

// }

// ----------------------------------Exemple2 -----------------------------------------------

// let Personne2 ={
//     nom: " imane2",
//     age:30,
//     profession:"freelancer"
// }
// for (let per2 in Personne2){
//     console.log(`${per2} : ${Personne2[per2]}`);
// }

// let classe = {
//     etudiants: ["imane","meriem","samira","khaoula"],
//     afficherEtudiants:function (){
//         for (let NomEtudiant in this.etudiants){
//             console.log (`{NomEtudiant}`)

//         }
//     }

// }

// Crée un objet classe qui contient une propriété etudiants (un tableau de noms).
// Ajoutez une méthode afficherEtudiants() qui affiche chaque étudiant.

// let classe = {
//     etudiants:["amine","imane","fati"],
//     afficherEtudiants :function (){
//         for (let nom in this.etudiants){
//             console.log(`${this.etudiants[nom]}`);

//         }
//     }

// }
// classe.afficherEtudiants();

//  Créer un tableau livres contenant 3 objets  { titre, auteur, annee }.
// Affiche seulement les titres avec une boucle.

let livres = [
  { titre: "the power of habit", auteur: "charles duhhig", annee: "2000" },

  { titre: "the power of Now", auteur: "charles ", annee: "2005" },
  { titre: "the power ", auteur: " duhhig", annee: "2001" },
];

// Affiche seulement les titres avec une boucle
// avec for of
// for (let livre of livres ){
//     console.log(livre.titre);

// }

// avec for in
// for (let livre in  livres ){
//     console.log(livres[livre].titre);

// }

// function trouverLivre(titre){
//     for (let livre of livres){
//         if(livre.titre === titre){
//             return livre;
//         }
//     }
//     return null;
// }

// // let res1 =trouverLivre("the power");
// // console.log(res1);
// let res2 =trouverLivre("the power");
// console.log(res2);

// __________________________________CHALLENGE3__________________________________________

// 1.  Créer un objet entreprise qui contient un objet adresse (rue, ville, codePostal).
// Affiche la ville.
let entreprise = {
  addresse: {
    rue: "rue1",
    ville: "ville1",
    codePostal: 20500,
  },
};
console.log(entreprise.addresse.ville); //ville1

// 2. - Créer un tableau produits d’objets { nom, prix, quantite }.

let produits = [
  { nom: "produit1", prix: 100, quantite: 5 },
  { nom: "produit2", prix: 90, quantite: 3 },
];
for (let produit of produits) {
  let prixUnitaire = produit.prix * produit.quantite;

  console.log(prixUnitaire);
}

//  3 Créer une classe Animal avec les propriétés nom, type et une méthode parler().
// Puis crée une instance chien.

class Animal {
  constructor(nom, type) {
    this.nom = nom;
    this.type = type;
  }
  parler() {
    console.log(`${this.nom} est un ${this.type}`);
  }
}

let chien = new Animal("Rex", "chien");
chien.parler();

// 4.  Dans un tableau employes, trouve tous ceux qui ont un salaire > 3000.

let employes = [
  { nom: "ahmed", profession: "developpeur", salaire: 5000 },
  { nom: "mohamed", profession: "designer", salaire: 3000 },
  { nom: "amina", profession: "RH", salaire: 6000 },
];
for (let employe of employes) {
  if (employe.salaire > 3000) {
    console.log(employe);
  }
}

// 5. Créer une fonction cloner(obj) qui retourne une copie de l’objet donné.
function cloner(obj){
    return {...obj};
}


