const prompt = require("prompt-sync")();
const taches = [
  { id: 1, description: "apprendre l'anglais", statut: "terminée " },
  { id: 2, description: "apprendre francais", statut: "en attente  " },
  { id: 3, description: "lecture des livres", statut: "terminée " },
  { id: 4, description: "natation apres midi", statut: "terminée " },
  { id: 5, description: "Révision des cours", statut: "attente " },
  { id: 6, description: "Révision javascript", statut: "a faire " },
];
let choix = -1;
while (choix !== 0) {
  console.log(`=== to do list ====
1. Afficher les tâches
2. Ajouter une tâche
3. Rechercher une tâche
4. Modifier une tâche
5. Supprimer une tâche
6. Marquer une tâche comme terminée
7. Afficher tâches terminées / en attente
0. Quitter

 `);

  choix = Number(prompt("Choisissez une option :"));

  let res;
  switch (choix) {
    case 1:
      res = AfficherTaches();
      break;
    case 2:
      res = AjouterTaches();
      break;
    case 3:
      res = Rechercher();
      break;
    case 4:
      res = ModifierTache();
      break;
    case 5:
      res = SupprimerTaches();
      break;
    case 6:
      res = ChangerStatut();
      break;
    case 7:
      res = AfficherTachesValides();
      break;
    case 0:
      res = console.log("Programme terminé. À bientôt !");
      process.exit();
      break;
    default:
      res = " choix invalid entrer un nombre entre 0 et 7";
  }

  console.log("resultat:", res);
}

// 1. Afficher les tâches
function AfficherTaches() {
  for (let tache of taches) {
    // console.log(tache);
    console.log(`tache${tache.id} :${tache.statut}`);
  }
}
AfficherTaches();

//2. Ajouter une tâche

function AjouterTaches() {
  const description = prompt(
    "enter une description d'une tache  a ajouter: "
  ).toLocaleLowerCase();
  const titre = prompt("enter le titre de la  tache : ").toLocaleLowerCase();
  if (!description && !titre) {
    console.log("aucune description entree");
  }

  const id = taches.length + 1;
  //  const titre =description.split("").join("");
  const NouvTache = {
    id: id,
    description: description,
    titre: titre,
    staut: "en attente",
  };
  taches.push(NouvTache);
  return `Tâche ajoutée avec succès ! : ${titre} - ${description}`;
}

AjouterTaches(taches);

// 3. Rechercher une tâche

function Rechercher() {
  const titre = prompt(
    "entrer le titre de la tache souhaite recherche:"
  ).toLocaleLowerCase();

  for (let tache of taches) {
    if (tache.titre === titre) {
      console.log(`tache recherche est ${tache.titre} `);

      return tache;
    }
  }
}
// Rechercher();

// 4. Modifier une tâche

function ModifierTache() {
  const id = parseInt(
    prompt("entrer l'id de la  tache que vous voulez modifier :")
  );
  const newDescription = prompt("entrer une nouvelle description :");
  for (let tache of taches) {
    if (tache.id === id) {
      tache.description = newDescription;
      return `la description modifie est: ${newDescription} `;
    }
  }
  return `Aucune tâche trouvée avec l'id ${id} pour la modifier.`;
}
// ModifierTache(1);
// console.table(taches);

// 5. Supprimer une tâche

function SupprimerTaches() {
  const id = parseInt(
    prompt("entrer l'id de la  tache que vous voulez supprimer :")
  );

  for (let tache of taches) {
    if (tache.id === id) {
      const index = taches.indexOf(tache);
      if (index !== -1) {
        taches.splice(index, 1);
      }
      return `tache avec  id ${id} est supprime`;
    }
  }
}
// SupprimerTaches(2);
// console.table(taches);

// 6. Changer le statut d’une tâche

function ChangerStatut() {
  let id = parseInt(
    prompt("enter l'id de la tache que vous voulez changer son statut :")
  );
  for (let tache of taches) {
    let statutActuel = tache.statut.toLocaleLowerCase();
    if (tache.id === id) {
      if (statutActuel === "terminée") {
        tache.statut = "en attente";
      } else {
        tache.statut = "terminée";
      }

      return `Statut de la tâche avec id ${id} changé à : ${tache.statut}`;
    }
  }
  console.log(`Aucune tache n'est trouve avec l'id: ${id}`);
}
// ChangerStatut();
// console.table(taches);

// trim => supprimer les espaces
function AfficherTachesValides() {
  const tachesValides = [];
  for (let tache of taches) {
    let statut = tache.statut.trim().toLocaleLowerCase();
    if (statut === "terminée" || statut === "en attente") {
      console.log(
        `ID: ${tache.id}, Description: ${tache.description}, Statut: ${tache.statut}`
      );
    }
  }
  console.table(tachesValides);
}
// AfficherTachesValides();
