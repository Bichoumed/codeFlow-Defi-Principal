# **Plateforme Éducative & Gamifiée NIRD**
## 1. Présentation du projet

Ce projet a été réalisé dans le cadre du Défi Principal de la Nuit de l’Info 2025, autour du thème NIRD : Numérique Inclusif, Responsable et Durable.
L’objectif est de concevoir une plateforme éducative et interactive permettant de :

  * Sensibiliser le public aux enjeux du numérique inclusif, responsable et durable.

  * Éduquer via des modules gamifiés, quizzes et simulations.

  * Impliquer les utilisateurs dans des actions concrètes liées aux bonnes pratiques numériques.

  * Mesurer leur impact numérique afin de promouvoir une utilisation consciente et raisonnée des technologies.

La plateforme combine contenu pédagogique, interactivité, accessibilité et bonnes pratiques d'écoconception pour offrir une expérience cohérente avec les valeurs du NIRD.


## 2.  Architecture technique


Le projet repose entièrement sur une architecture front-end simple et optimisée :

 ### Technologies utilisées

* HTML5 : structure des pages et des modules éducatifs

* CSS3 :

    * animations personnalisées

    * mode responsive

    * styles minimalistes orientés sobriété numérique

* JavaScript  :

     * logique du mini-jeu

     * gestion des animations

     * quiz interactif

     * stockage local des scores et progression (localStorage)

### Arborescence du projet

```plaintext

codeFlow-Defi-Principal/
│
├── index.html                 # Page principale de la plateforme
│
├── css/                       # Styles et animations
│   ├── style.css              # Style général
│   ├── animations.css         # Animations graphiques
│   └── battle-animations.css  # Animations spécifiques au mini-jeu "Battle"
│
├── js/                        # Logique du jeu + quiz + animations
│   ├── game.js                # Gestion du jeu principal
│   ├── battle.js              # Mécanique du mini-jeu (combat/épreuves)
│   ├── animations.js          # Effets visuels, transitions, feedback
│   └── questions.js           # Questions du quiz / logique NIRD
│
└── README.md                  # Documentation du projet

```

Cette organisation permet un développement modulaire et lisible, où chaque fonctionnalité a son propre fichier JS ou CSS.

