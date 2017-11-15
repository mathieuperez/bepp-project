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
| 1 | En tant qu'**Utilisateur**, je souhaite pouvoir créer un compte afin de me connecter.| 2 | 1 | :x:
| 2 | En tant qu'**Utilisateur**, je souhaite pouvoir créer un projet (Nom projet). | 1 | 1 | :x:
| 3 | En tant qu'**Utilisateur**, je souhaite pouvoir accéder à la liste de mes projets.| 1 | 4 | :x:
| 4 | En tant que **développeur**, je souhaite pouvoir inviter des utilisateurs en leur affectant un rôle (Product Owner / Developpeur) à mon projet.| 2 | 4 | :x:
| 17 | En tant qu'**Utilisateur**, je souhaite accéder à la liste des membres d'un projet.| 1 | 4 | :x:

### Tâches

| ID_Tache | Description | Affectation | Durée Estimée ( heure homme ) | US Associés | Etat |
| --- | --- | --- | --- | --- | --- |
| T1_P | Créer l'interface Front-end de connection<br><ul><li>Création d'une interface permettance aux utilisateur de remplir les champs identifiant et mot de passe afin de se connecter, ainsi qu'un button pour la création de compte pour la première connexion</li></ul> | Amine | 1 | 1 | :white_check_mark:
| T2_P | Créer l'interface Front-end de création d'un compte avec les champs : <br><ul><li>nom d'utilisateur</li><li>Mot de passe</li><li>e-mail</li></ul> | Amine | 1 | 1 | :white_check_mark:
| T3_P | Créer l'interface Front-end du panel des projets  <br><ul><li>Une barre de navigation verticale pour lister les projets existants</li><li>Une button pour permettre a l'utilisateur de créer un nouveau projet</li><li>Une interface pour la création d'un nouveau projet en précisant le nom, date, description et nombre de Sprints</li></ul> | Amine | 3 | 1 | :white_check_mark:
| T4_P | Créer l'interface Front-end d'un projet, contenant :<br><ul><li>Nom du projet</li><li>Desciption et date de début du projet</li><li>Liste des membres du projet</li></ul>| Amine | 2 | 1 | :white_check_mark:
| T5_B | Mise en service du serveur MongoDB<br><ul><li>Ajouter monk et s'en servir comme lien avec notre base de donnée MongoDB</li><li>Ouvrir un terminal et lancer la commande "mongod --dbpath bepp-project/api/node_modules/data/"</li></ul>| Mathieu | 1/2 | toutes | :white_check_mark:
| T6_MB | Définir les requêtes (MongoDB) dont on aura besoin pour chaque service<ul><li>Compléter le service REST qui insère un utilisateur dans la BD(création d'un compte utilisateur US1)</li><li>Compléter le service REST qui vérifie que la BD contient bien le login et le password d'un utilisateur(connexion d'un utilisateur US1)</li><li>**Compléter le service REST qui créé un projet et le lie à l'utilisateur connecté(Création d'un projet US2)**</li><li>Compléter le service REST qui selectionne un utilisateur selon son login(lister mes projets US3)</li><li>**Compléter le service REST qui selectionne une liste de projets selon un login utilisateur(ou id)(lister mes projets US3)**</li><li>Compléter le service REST qui ajoute un utilisateur à un projet(inviter un collaborateur US4)</li><li>**Compléter le service REST qui selectionne une liste d'utilisateur selon un nom de projet**</li></ul> | Mathieu | 1/2 | toutes | :x:
| T7_M | Mettre en place le coté serveur : l'Express et le NodeJS | Dimitri | 1/2 | ∅ | :x:
| T8_PM | Définir les liaisons entre les placeholders et les services | Adrien | 1/2 | ∅ | :x:
| T9_M | Service REST POST  : Créer un utilisateur| Dimitri | 2 | 1 | :white_check_mark:
| T10_M | Service REST POST  : Authentification | Dimitri | 4 | 1 | :x:
| T11_M | Service REST POST  : Créer un projet | Dimitri | 2 | 2 | :x:
| T12_M | Service REST GET   : Obtenir les informations d'un utilisateur | Dimitri | 2 | 3 | :x:
| T13_M | Service REST GET   : Obtenir les informations d'un projet | Dimitri | 2 | 17 | :x:
| T14_M | Service REST PATCH : Ajouter un utilisateur à un projet | Dimitri | 4 | 4 | :x:
| T15_M | Verification de l'authentification à l'aide de tokens sur les services | Dimitri | 5 | 2 / 3 / 17 / 4 | :x:
| T16_M | Initialiser l'environnement de développement du framework Angular | Adrien | 1/2 | ∅ | :x:
| T17_DOC | La documentation des services "SWAGGER" | Dimitri | 1/2 | ∅ | :x:
| T18_BUILD | Mettre en place le conteneur "Docker" | Mathieu | 1/2 | ∅ | :x:
| T19_TEST | Redaction des tests : E2E(Protractor)| Amine | 1 | toutes | :x:
| T20_TEST | Effectuer les tests : E2E(Protractor)| Amine | 4 | toutes | :x:
| T21_TEST | Mise en place de "Travis" |  | 1/2 | ∅ | :x:
| T22_PM | Faire le lien entre l'interface de la tâche T1_P et les services de l'api | Adrien | 1/2 | 1 | :x:
| T23_PM | Faire le lien entre l'interface de la tâche T2_P et les services de l'api | Adrien | 1/2 | 1 | :x:
| T24_PM | Faire le lien entre l'interface de la tâche T3_P et les services de l'api |  | 1/2 | 3, 4, 5 | :x:
| T25_PM | Faire le lien entre l'interface de la tâche T4_P et les services de l'api |  | 1/2 | 4, 17 | :x:

### Rédaction des tests unitaires

| ID_Tache | Affectation | Durée Estimée (heure homme) | Resultat de TU | Etat | 
| --- | --- | --- | --- | --- |
| T5_B  |  | 1 | | :x:
| T6_MB |  | 1 | | :x:
| T7_M  |  | 1 | | :x:
| T8_PM |  | 1 | | :x:
| T9_M  |  | 1 | | :x:
| T10_M |  | 1 | | :x:
| T11_M |  | 1 | | :x:
| T12_M |  | 1 | | :x:
| T13_M |  | 1 | | :x:
| T14_M |  | 1 | | :x:
| T15_M |  | 1 | | :x:
| T16_M |  | 1 | | :x:
| T22_PM|  | 1 | | :x:
| T23_PM|  | 1 | | :x:
| T24_PM|  | 1 | | :x:
| T20_PM|  | 1 | | :x:

### Les tests E2E

sur le [lien suivant](sprint1/tests.md).

### Les dépendances entre les tâches.

sur le [lien suivant](sprint1/dependance.md).

### L'organisation des tâches : Timeline et Kanban

sur le [lien suivant](sprint1/organisation.md).

