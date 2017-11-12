## Technologies

**Front-end** :
<ul>
<li>Angular</li> 
    <li>Bootstrap</li>
</ul>

**Back-end** :
<ul>
<li>Node.js</li> 
<li>Express</li>
</ul>

**Back-end** :
<ul>
<li>Node.js</li> 
<li>Express</li>
<li>Base de données : MangoDB</li> 
</ul>

**Test** :
<ul>
<li>Mocha</li> 
</ul>

## Sprint 1

### Mini Backlog

| ID | User Story | Difficulté | Priorité | Fait |
| --- | --- | --- | --- | --- |
| 1 | En tant qu'**Utilisateur**, je souhaite pouvoir créer un compte afin de me connecter.| 2 | 1 | X 
| 2 | En tant qu'**Utilisateur**, je souhaite pouvoir créer un projet (Nom projet). | 1 | 1 | X 
| 3 | En tant qu'**Utilisateur**, je souhaite pouvoir accéder à la liste de mes projets.| 1 | 4 | X 
| 4 | En tant que **développeur**, je souhaite pouvoir inviter des utilisateurs en leur affectant un rôle (Product Owner / Developpeur) à mon projet.| 2 | 4 | X
| 17 | En tant qu'**Utilisateur**, je souhaite accéder à la liste des membres d'un projet.| 1 | 4 | X


### Taches

| ID_Tache | Description | Affectation | Durée Estimée ( heure homme ) | US Associés | Etat |
| --- | --- | --- | --- | --- | --- |
| T1_P | Créer l'interface Front-end de connection<br><ul><li>Création d'une interface permettance aux utilisateur de remplir les champs identifiant et mot de passe afin de se connecter, ainsi qu'un button pour la création de compte pour la première connexion</li></ul> | Amine | 1 | 1 | :white_check_mark:
| T2_P | Créer l'interface Front-end de création d'un compte avec les champs : <br><ul><li>nom d'utilisateur</li><li>Mot de passe</li><li>e-mail</li></ul> | Amine | 1 | 1 | :white_check_mark:
| T3_P | Créer l'interface Front-end du panel des projets  <br><ul><li>Une barre de navigation verticale pour lister les projets existants</li><li>Une button pour permettre a l'utilisateur de créer un nouveau projet</li><li>Une interface pour la création d'un nouveau projet en précisant le nom, date, description et nombre de Sprints</li></ul> | Amine | 3 | 1 | :white_check_mark:
| T4_P | Créer l'interface Front-end d'un projet, contenant :<br><ul><li>Nom du projet</li><li>Desciption et date de début du projet</li><li>Liste des membres du projet</li></ul>| Amine | 2 | 1 | :white_check_mark:
| T5_B | Mise en service du serveur MongoDB<br><ul><li>ouvrir un terminal et lancer la commande "mongod --dbpath bepp-project/api/node_modules/data/"</li></ul>| Mathieu | 1/2 | | A Faire 
| T6_MB | Définir les requêtes (MangoDB) dont on aura besoin pour chaque service | Mathieu | 1/2 | | A Faire 
| T7_M | Mettre en place le coté serveur : l'Express et le NodeJS | Dimitri | 1/2 | ∅| A Faire 
| T8_PM | Définir les liaisons entre les placeholders et les services | Adrien | 1/2 | | A Faire
| T9_M | Mettre en place les services REST | Dimitri | 1/2 | toutes | A Faire 
| T10_M | Initialiser l'environnement de développement du framework Angular | Adrien | 1/2 | | A Faire 
| T11_DOC | La documentation des services "SWAGGER" | Dimitri | 1/2 | ∅ | A Faire 
| T12_BUILD | Mettre en place le conteneur "Docker" | Mathieu | 1/2 | | A Faire 
| T13_TEST | Mise en place de Protractor(AngularJs e2e testing<sup>[2](#myfootnote2)</sup>) | Mathieu | 1/2 | | A Faire 
| T14_TEST | Redaction des tests : E2E(Protractor) <sup>[3](#myfootnote3)</sup>|  | 1/2 | | A Faire 
| T15_TEST | Effectuer les tests : E2E(Protractor)|  | 1/2 | | A Faire 
| T16_TEST | Mise en place de "Travis" |  | 1/2 | | A Faire 

### Dépendances et Tests Unitaire

sur le [lien suivant](sprint1/dependance.md).

### L'organisation des tâches : Timeline

sur le [lien suivant](sprint1/organisation.md).

