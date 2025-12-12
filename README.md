# SushiFast

Application web React pour le restaurant SushiFast 

## Description

Application développée avec React et Vite permettant de présenter les menus de sushi du restaurant SushiFast, L'application affiche les différents menus avec leurs ingrédients, quantités, prix et saveurs.

## Technologies utilisées

- React (Vite)
- React Router pour la navigation
- Tailwind CSS pour le style
- JSON pour les données

## Fonctionnalités implémentées

L'application répond aux spécifications du TP :

1. **Affichage de tous les menus** - Liste complète avec nom, nombre de pièces, image et prix
2. **Présentation des saveurs** - Affichage des saveurs de chaque menu
3. **Filtrage par saveurs** - Liste des menus contenant avocat ou coriandre
4. **Liste des aliments** - Consultation des aliments d'un menu donné
5. **Filtrage par exclusion** - Menus ne contenant pas "California Saumon Avocat"
6. **Calcul de commande** - Prix total pour les menus de moins de 13 pièces
7. **Analyse tarifaire** - Affichage du menu le plus cher et le moins cher

## Structure des données

Les données proviennent du fichier `src/data/boxes.json` avec la structure suivante :
- id : Identifiant unique du menu
- nom : Nom du menu
- pieces : Nombre de pièces
- prix : Prix en euros
- image : Chemin de l'image
- aliments : Liste avec nom et quantité
- saveurs : Liste des saveurs

## Pages de l'application

- `/` - Page d'accueil
- `/menus` - Tous les menus (nom, pièces, image, prix)
- `/menu/:id` - Détails d'un menu spécifique
- `/saveurs` - Présentation des saveurs de chaque menu
- `/avocat-coriandre` - Menus contenant avocat ou coriandre
- `/aliments` - Liste des aliments par menu (sélection)
- `/sans-california` - Menus sans California Saumon Avocat
- `/prix-total` - Prix total des menus avec moins de 13 pièces
- `/tarifs` - Menu le moins cher et le plus cher

## Installation et lancement

```bash
npm install
npm run dev
```

## Auteurs

Yohan S & Alexandre L

IUT de Meaux - MMI3 - R5.04

Date de rendu : 17 décembre 2025
