# bepp-project

Projet de l'UE **Conduite de Projet**

## Technologies

 * Front : Angular
 * Bootstrap
 * Serveur : Node.js (Express)
 * BD : MangoDB
 * Test : Mocha

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

| ID_Tache | Description | Affectation | Durée Estimée (jh) | US Associés | Etat |
| --- | --- | --- | --- | --- | --- |
| T1_P | Créer l'interface HTML/CSS de connection | Amine | 1/2 | 1 | A Faire 
| T2_P | Créer l'interface HTML/CSS de création d'un compte avec les champs username, password, email | Amine | 1/2 | 1 | A Faire 
| T3_P | Créer l'interface HTML/CSS du panel des projets : liste des projets | Amine | 1/2 | 1 | A Faire 
| T4_P | Créer l'interface HTML/CSS d'un projet (nom et desciption du projet, liste des membres) | Amine | 1/2 | 1 | A Faire 
| T5_B | Mise en service du serveur MongoDB<sup>[1](#myfootnote1)</sup> | Mathieu | 1/2 | | A Faire 
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

### Dépendances

| | T1_P | T2_P | T3_P | T4_P | T5_B | T6_MB | T7_M | T8_PM | T9_M | T10_M | T11_DOC | T12_BUILD | T13_TEST | T14_TEST | T15_TEST | T15_TEST |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T1_P |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T2_P |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T3_P |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T4_P |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T5_B |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T6_MB |  |  |  |  | X |  |  |  | X |  |  |  |  |  | | |
| T7_M |  |  |  |  |  |  | |  |  |  |  |  |  |  | | |
| T8_PM | X | X | X | X |  |  |  |  |  |  |  |  |  |  | | |
| T9_M |  |  |  |  |  |  | X |  |  |  |  |  |  |  | | |
| T10_M |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T11_DOC |  |  |  |  |  |  |  |  | X |  |  |  |  |  | | |
| T12_BUILD |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T13_TEST |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |
| T14_TEST |  |  |  |  |  |  |  |  |  |  |  |  | X |  | | |
| T15_TEST |  |  |  |  |  |  |  |  |  |  |  |  |  | X | | |
| T16_TEST |  |  |  |  |  |  |  |  |  |  |  |  |  |  | | |

### Redaction des Tests Unitaires
| ID_Tache | Affectation | Durée Estimée (jh) | Resultat de TU | Etat | 
| --- | --- | --- | --- | --- |
| T5_B   |  | 1/2 | | A Faire 
| T6_MB  |  | 1/2 | | A Faire 
| T7_M   |  | 1/2 | | A Faire 
| T8_PM  |  | 1/2 | | A Faire
| T9_M   |  | 1/2 | | A Faire 
| T10_M  |  | 1/2 | | A Faire 

<a name="myfootnote1">1</a>: ouvrir un terminal et lancer la commande "mongod --dbpath bepp-project/api/node_modules/data/"
<a name="myfootnote2">2</a>: https://docs.angularjs.org/guide/e2e-testing
<a name="myfootnote3">3</a>: potentiellement séparable pour que tout le monde y touche et s'autoforme tant qu'on a le temps
