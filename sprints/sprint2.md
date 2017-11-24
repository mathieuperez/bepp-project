## Sprint 2

### Mini Backlog

| ID | User Story | Difficulté | Priorité | Fait |
| --- | --- | --- | --- | --- |
| 5 | En tant que **développeur**, je souhaite ajouter une User Story (Description, Difficulté (Suite de Fibonacci)) au BackLog d'un projet.| 1 | 2 | :x:
| 6 | En tant que **développeur**, je souhaite pouvoir modifier / supprimer une US du Backlog d'un projet.| 1 | 2 | :x:
| 7 | En tant que **développeur**, je souhaite pouvoir ajouter un sprint (Date début, durée) à un projet.| 1 | 3 | :x:
| 8 | En tant que **développeur**, je souhaite associer une ou plusieurs US à un sprint.| 1 | 3 | :x:
| 18 | En tant qu'**Utilisateur**, je souhaite pouvoir obtenir la liste des US contenues dans le Backlog d'un projet.| 2 | 4 | :x:
| 23 | En tant que **Product Owner**, je souhaite pouvoir saisir et modifier les priorités des US.| 1 | 2 | :x:

### Tâches

| ID_Tache | Description | Affectation | Durée Estimée ( heure homme ) | US Associés | Etat |
| --- | --- | --- | --- | --- | --- |
| T1_BUILD | Mettre en place le conteneur "Docker" pour Angular | Dimitri | 5 | ∅ | :x:
| T2_BUILD | Mettre en place le conteneur "Docker" pour Mongo | Dimitri | 5 | ∅ | :x:
| T3_BUILD | Mettre en place le conteneur "Docker" pour Express | Dimitri | 5 | ∅ | :x:
| T4_TEST | Mise en place de "Travis" | Dimitri | 1/2 | ∅ | :x:
| T5_TEST | Mise en place de "Travis" pour exécuter les tests Mocha| Dimitri | 1/2 | ∅ | :x:
| T6_TEST | Mise en place de "Travis" pour exécuter les tests E2E| Dimitri | 1/2 | ∅ | :x:
| T7_P | Créer l'interface Front-end du Backlog contenant : <br><ul><li>Une liste des US associées au Projet</li><li>Un button pour permettre a l'utilisateur de créer une US(Description, Difficulté(suite de fibonacci))</li><li>Un button pour permettre a l'utilisateur de modifier une US</li><li>Un button pour permettre a l'utilisateur de supprimer une US</li></ul>| Amine | 2 | 1 | :x:
| T8_P | Créer l'interface Front-end du panel des sprint <br><ul><li>Une barre de navigation verticale pour lister les sprint existants</li><li>Un button pour permettre a l'utilisateur de créer un nouveau sprint</li><li>Une interface pour la création d'un nouveau sprint(Date début, durée)</li></ul> | Amine | 1 | 3 | :x:
| T9_P | Créer l'interface Front-end d'un sprint contenant : <br><ul><li>Une liste des US associées au sprint</li></ul>| Amine | 2 | 1 | :x:
| T10_P | Créer l'interface Front-end de modification/suppression d'une US du backlog d'un projet| Amine | 2 | 1 | :x:
| T11_P | Créer l'interface Front-end de saisie et modification de la priorité d'une US du projet| Amine | 2 | 1 | :x:
| T12_MB | Définir les requêtes (MongoDB) dont on aura besoin pour chaque service:<br><ul><li>Compléter le service REST qui insère une US dans la BD(création d'une US -US5)</li><li>Compléter le service REST qui modifie une US dans la BD à partir d'un utilisateur DEV(modification d'une US -US6)</li><li>Compléter le service REST qui supprime une US dans la BD(suppression d'une US -US6)</li><li>Compléter le service REST qui insère un sprint dans la BD(création d'un sprint -US7)</li><li>Compléter le service REST qui recupere la liste des US d'un projet(lister les US d'un projet -US18)</li><li>Compléter le service REST qui modifie une US dans la BD à partir d'un utilisateur PO(modification d'une US -US23)</li></ul>|  | 2 | 1 | :x:
| T13_PM | Définir les liaisons entre les placeholders et les services<br><ul><li></li><li></li></ul>|  | 2 | 1 | :x:
| T14_M | Service REST PUT  : Créer une US |  | 2 | 1 | :x:
| T15_M | Service REST PATCH  : Modifier une US |  | 2 | 1 | :x:
| T16_M | Service REST DELETE  : Supprimer une US |  | 2 | 1 | :x:
| T17_M | Service REST PATCH  : Mettre à jour le nombre de sprints |  | 2 | 1 | :x:
| T18_M | Service REST PATCH  : Associer une US à un sprint |  | 2 | 1 | :x:
| T19_M | Service REST PATCH  : Modifier la priorité d'une US (Vérification Authentification PO) |  | 2 | 1 | :x:
| T20_DOC | La documentation des services "SWAGGER"|  | 2 | 1 | :x:
| T21_TEST | Redaction des tests : E2E(Protractor)| Amine | 2 | 1 | :x:
| T22_TEST | Effectuer les tests : E2E(Protractor)| Amine | 2 | 1 | :x:
| T23_PM | Faire le lien entre l'interface de la tâche T3_P et les services de l'api|  | 2 | 1 | :x:
| T24_PM | Faire le lien entre l'interface de la tâche T4_P et les services de l'api|  | 2 | 1 | :x:
| T25_PM | Faire le lien entre l'interface de la tâche T5_P et les services de l'api|  | 2 | 1 | :x:
| T26_PM | Faire le lien entre l'interface de la tâche T6_P et les services de l'api|  | 2 | 1 | :x:
| T27_PM | Faire le lien entre l'interface de la tâche T7_P et les services de l'api|  | 2 | 1 | :x:

### Les tests E2E

sur le [lien suivant](sprint2/tests.md).

### Les dépendances entre les tâches.

sur le [lien suivant](sprint2/dependance.md).

### L'organisation des tâches : Timeline et Kanban

sur le [lien suivant](sprint2/organisation.md).

