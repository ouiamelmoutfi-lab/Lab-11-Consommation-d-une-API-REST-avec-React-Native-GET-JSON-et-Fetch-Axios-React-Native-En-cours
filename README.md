# Lab 11 : Consommation d'une API REST avec React Native : GET, JSON et Fetch/Axios

## Objectif

L'objectif de ce TP est d'apprendre à consommer une API REST dans une application React Native en utilisant Fetch, Async/Await, useState et useEffect.

## Travail réalisé

- Création d'un projet React Native avec Expo.
- Récupération des utilisateurs depuis l'API JSONPlaceholder avec `fetch()`.
- Utilisation de `async/await` pour gérer les requêtes asynchrones.
- Gestion des données avec `useState` et `useEffect`.
- Affichage des utilisateurs avec `FlatList`.
- Ajout d'une barre de recherche en temps réel.
- Ajout d'un bouton **Actualiser** pour recharger les données.
- Gestion du chargement et des erreurs réseau.
- Affichage des détails d'un utilisateur sélectionné.

## Résultat final

**1. Affichage de la liste des utilisateurs**

L'application affiche les utilisateurs récupérés depuis l'API JSONPlaceholder sous forme de cartes contenant leurs noms et leurs adresses e-mail.

**2. Recherche et actualisation**

Une barre de recherche permet de filtrer les utilisateurs par leur nom. Le bouton **Actualiser** permet de recharger les données depuis le serveur.

**3. Détails des utilisateurs**

En sélectionnant un utilisateur, l'application peut afficher ses informations détaillées, notamment son nom, son adresse e-mail et sa ville.
<img width="720" height="1600" alt="WhatsApp Image 2026-11-26 at 16 33 47 (1)" src="https://github.com/user-attachments/assets/c712de25-39af-47d5-861e-dd1f62a65ccc" />

<img width="720" height="1600" alt="WhatsApp Image 2026-11-26 at 16 33 47" src="https://github.com/user-attachments/assets/9d518bc8-7439-4044-92b3-24445860d3dc" />


## Conclusion

Ce TP nous a permis de comprendre comment communiquer avec une API REST et afficher dynamiquement les données dans une application React Native. Nous avons également ajouté des fonctionnalités de recherche, d'actualisation et de consultation des détails des utilisateurs.
