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
<li>Protractor</li> 
</ul>

## Sprint 1

### Mini Backlog

| ID | User Story | Difficulté | Priorité | Fait |
| --- | --- | --- | --- | --- |
| 1 | En tant qu'**Utilisateur**, je souhaite pouvoir créer un compte afin de me connecter.| 2 | 1 | :white_check_mark:
| 2 | En tant qu'**Utilisateur**, je souhaite pouvoir créer un projet (Nom projet). | 1 | 1 | :white_check_mark:
| 3 | En tant qu'**Utilisateur**, je souhaite pouvoir accéder à la liste de mes projets.| 1 | 4 | :white_check_mark:
| 4 | En tant que **développeur**, je souhaite pouvoir inviter des utilisateurs en leur affectant un rôle (Product Owner / Developpeur) à mon projet.| 2 | 4 | :white_check_mark:
| 17 | En tant qu'**Utilisateur**, je souhaite accéder à la liste des membres d'un projet.| 1 | 4 | :white_check_mark:

### Tâches

| ID_Tache | Description | Affectation | Durée Estimée ( heure homme ) | US Associés | Etat |
| --- | --- | --- | --- | --- | --- |
| T1_P | Créer l'interface Front-end de connection<br><ul><li>Création d'une interface permettance aux utilisateur de remplir les champs identifiant et mot de passe afin de se connecter, ainsi qu'un button pour la création de compte pour la première connexion</li></ul> | Amine | 1 | 1 | :white_check_mark:
| T2_P | Créer l'interface Front-end de création d'un compte avec les champs : <br><ul><li>nom d'utilisateur</li><li>Mot de passe</li><li>e-mail</li></ul> | Amine | 1 | 1 | :white_check_mark:
| T3_P | Créer l'interface Front-end du panel des projets  <br><ul><li>Une barre de navigation verticale pour lister les projets existants</li><li>Une button pour permettre a l'utilisateur de créer un nouveau projet</li><li>Une interface pour la création d'un nouveau projet en précisant le nom, date, description et nombre de Sprints</li></ul> | Amine | 3 | 1 | :white_check_mark:
| T4_P | Créer l'interface Front-end d'un projet, contenant :<br><ul><li>Nom du projet</li><li>Desciption et date de début du projet</li><li>Liste des membres du projet</li></ul>| Amine | 2 | 1 | :white_check_mark:
| T5_B | Mise en service et test du serveur MongoDB<br><ul><li>Ajouter monk et s'en servir comme lien avec notre base de donnée MongoDB</li><li>Ouvrir un terminal et lancer la commande "mongod --dbpath bepp-project/api/node_modules/data/"</li></ul>| Mathieu | 1 | toutes | :white_check_mark:
| T6_MB | Définir les requêtes (MongoDB) dont on aura besoin pour chaque service<ul><li>Compléter le service REST qui insère un utilisateur dans la BD(création d'un compte utilisateur US1)</li><li>Compléter le service REST qui vérifie que la BD contient bien le login et le password d'un utilisateur(connexion d'un utilisateur US1)</li><li>**Compléter le service REST qui créé un projet et le lie à l'utilisateur connecté(Création d'un projet US2)**</li><li>Compléter le service REST qui selectionne un utilisateur selon son login(lister mes projets US3)</li><li>**Compléter le service REST qui selectionne une liste de projets selon un login utilisateur(ou id)(lister mes projets US3)**</li><li>Compléter le service REST qui ajoute un utilisateur à un projet(inviter un collaborateur US4)</li><li>**Compléter le service REST qui selectionne une liste d'utilisateur selon un nom de projet**</li></ul> | Mathieu | 6 | toutes | :white_check_mark:
| T7_M | Mettre en place le coté serveur : l'Express et le NodeJS | Dimitri | 1/2 | ∅ | :white_check_mark:
| T8_PM | Définir les liaisons entre les placeholders et les services | Adrien | 1/2 | ∅ | :white_check_mark:
| T9_M | Service REST POST  : Créer un utilisateur| Dimitri | 2 | 1 | :white_check_mark:
| T10_M | Service REST POST  : Authentification | Dimitri | 4 | 1 | :white_check_mark:
| T11_M | Service REST POST  : Créer un projet | Dimitri | 2 | 2 | :white_check_mark:
| T12_M | Service REST GET   : Obtenir les informations d'un utilisateur | Dimitri | 2 | 3 | :white_check_mark:
| T13_M | Service REST GET   : Obtenir les informations d'un projet | Dimitri | 2 | 17 | :white_check_mark:
| T14_M | Service REST PATCH : Ajouter un utilisateur à un projet | Dimitri | 4 | 4 | :white_check_mark:
| T15_M | Verification de l'authentification à l'aide de tokens sur les services | Dimitri | 5 | 2 / 3 / 17 / 4 | :white_check_mark:
| T16_M | Initialiser l'environnement de développement du framework Angular | Adrien | 1/2 | ∅ | :white_check_mark:
| T17_DOC | La documentation des services "SWAGGER" | Dimitri | 1/2 | ∅ | :white_check_mark:
| T18_BUILD | Mettre en place le conteneur "Docker" | Mathieu | 5 | ∅ | :x:
| T19_TEST | Redaction des tests : E2E(Protractor)| Amine | 1 | toutes | :white_check_mark:
| T20_TEST | Effectuer les tests : E2E(Protractor)| Amine | 4 | toutes | :white_check_mark:
| T21_TEST | Mise en place de "Travis" |  | 1/2 | ∅ | :x:
| T22_PM | Faire le lien entre l'interface de la tâche T1_P et les services de l'api | Adrien | 1 | 1 | :white_check_mark:
| T23_PM | Faire le lien entre l'interface de la tâche T2_P et les services de l'api | Adrien | 1 | 1 | :white_check_mark:
| T24_PM | Faire le lien entre l'interface de la tâche T3_P et les services de l'api | Adrien | 2.5 | 3, 4, 5 | :white_check_mark:
| T25_PM | Faire le lien entre l'interface de la tâche T4_P et les services de l'api | Adrien | 2.5 | 4, 17 | :white_check_mark:

### Les tests E2E

sur le [lien suivant](sprint1/tests.md).

### Les dépendances entre les tâches.

sur le [lien suivant](sprint1/dependance.md).

### L'organisation des tâches : Timeline et Kanban

sur le [lien suivant](sprint1/organisation.md).

