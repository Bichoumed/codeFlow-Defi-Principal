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

 ## Diagramme d’architecture
 
```plaintext

 Utilisateur
     │
     ▼
Interface HTML (index.html)
     │
     ├── Quiz Engine (questions.js)
     │       ├─ Chargement des questions
     │       ├─ Calcul des scores
     │       └─ Feedback utilisateur
     │
     ├── Labos interactifs (game.js, battle.js)
     │       ├─ Logique des mini-jeux
     │       └─ Systèmes d’animations
     │
     └── Système graphique (CSS + animations.js)
             ├─ Effets visuels
             └─ Responsive design
```

## 3. Arborescence du projet

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



## 4. Fonctionnalités de la plateforme

La plateforme comporte 4 quiz éducatifs et 3 laboratoires interactifs, organisés autour des grands thèmes du NIRD.


### 4.1. Quiz éducatifs
### Quiz 1 – Culture générale numérique

 * Compréhension des concepts fondamentaux

 * Enjeux sociétaux et technologiques

### Quiz 2 – Big Tech et modèles économiques

 * Coûts élevés : abonnements et licences mensuelles.

 * bligation de renouveler le matériel à cause de la fin du support.

 * Présentation d’alternatives plus responsables.

### Quiz 3 – Impact environnemental

 * Comprendre l’impact environnemental négatif du numérique.
 * Identifier les conséquences du renouvellement permanent du matériel

### Quiz 4 – Confidentialité et vie privée

* Consentement

* Surveillance numérique

* Protection des données

### 4.2. Labos NIRD (mini-jeux interactifs)
### Labo 1 – Reconditionner ou Jeter ?

* Décider du sort d’anciens ordinateurs pour :

* apprendre le réemploi

* limiter le gaspillage électronique

### Labo 2 – Le Data Center Invisible

* Mini-jeu de gestion de flux :

* choisir les bons serveurs

* réduire la consommation énergétique

* optimiser les ressources

### Labo 3 – Installer Linux pour Sauver l’École

Objectif :

* libérer les machines des Big Tech

* comprendre l’intérêt du logiciel libre

* suivre un scénario interactif de migration

## 5. Déploiement
La plateforme est entièrement statique et peut être déployée facilement sur n’importe quel service d’hébergement web.
Pour ce projet, le déploiement a été réalisé via Vercel, permettant d’accéder à la plateforme en ligne de manière fiable, rapide et optimisée.

 * Accéder à la plateforme déployée :
   https://code-flow-defi-principal.vercel.app/

## 6. Mise en valeur du projet
Ce projet illustre concrètement les principes du Numérique Inclusif, Responsable et Durable à travers :

* Une approche pédagogique : 4 quiz thématiques et 3 labos interactifs pour sensibiliser aux enjeux du numérique.

* Une expérience ludique : mini-jeux, animations et interactions favorisant l’apprentissage actif.

* Une conception responsable : plateforme statique, légère, sans collecte de données et optimisée pour une faible empreinte numérique.

* Une accessibilité renforcée : interface simple, responsive et adaptée à un large public.

La plateforme démontre qu’il est possible de créer un outil éducatif à la fois utile, engageant et écoresponsable.


