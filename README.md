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
    ├── Moteur de Quiz
    │       ├─ questions.js          # Quiz principaux
    │       └─ questions-level2.js   # Questions du niveau 2
    │
    ├── Labos interactifs
    │       ├─ game.js               # Gestion du flux de jeu
    │       ├─ battle.js             # Labo 1 : logique du mini-jeu
    │       └─ level2-battle.js      # Labo 2 ou niveau avancé
    │
    └── Système graphique
            ├─ animations.js
            ├─ animations.css
            ├─ battle-animations.css
            └─ level2-battle.css
            (effets visuels, transitions, responsive design)

```

## 3. Arborescence du projet

```plaintext

codeFlow-Defi-Principal/
│
├── index.html                     # Page principale de la plateforme
│
├── css/                           # Styles et animations
│   ├── style.css                  # Style général
│   ├── animations.css             # Animations globales
│   ├── battle-animations.css      # Animations du Labo 1
│   └── level2-battle.css          # Animations du Labo 2 (nouveau niveau)
│
├── js/                            # Logique du jeu, quiz et interactions
│   ├── game.js                    # Gestion du jeu principal
│   ├── battle.js                  # Logique du Labo 1 (battle)
│   ├── level2-battle.js           # Logique du Labo 2 (nouveau niveau)
│   ├── animations.js              # Effets visuels et transitions
│   ├── questions.js               # Questions du niveau principal (quiz 1–4)
│   └── questions-level2.js        # Questions et logique du niveau 2
│
├── README.md                      # Documentation principale du projet
└── INTEGRATION-GUIDE.md           # Guide d’intégration (optionnel)



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


