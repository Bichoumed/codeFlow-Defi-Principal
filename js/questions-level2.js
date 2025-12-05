/* ==========================================
   LEVEL 2 QUESTIONS - Financial Issues
   Big Tech's economic impact on schools
   ========================================== */

const level2Questions = [
    {
        id: 201,
        question: "Votre établissement dépense 15 000€/an en licences Microsoft 365. Une alternative existe avec des logiciels libres. Que choisissez-vous ?",
        context: "Les licences propriétaires représentent souvent 30-40% du budget numérique des établissements.",
        choices: [
            {
                text: "Migrer vers LibreOffice et Nextcloud (gratuit + 2000€ de formation)",
                correct: true,
                points: 50
            },
            {
                text: "Continuer avec Microsoft 365 pour éviter le changement",
                correct: false,
                points: -25
            }
        ],
        pillar: "n",
        nirdInfo: {
            title: "Économies sur les licences",
            content: "Les logiciels libres permettent d'économiser jusqu'à 90% des coûts de licences. Ces économies peuvent être réinvesties dans la formation et l'équipement."
        }
    },
    {
        id: 202,
        question: "Google propose des Chromebooks 'gratuits' pour votre école, mais avec un abonnement annuel de 50€/appareil pour les services cloud. Pour 200 élèves sur 5 ans, quel est le vrai coût ?",
        context: "Le modèle 'gratuit' des Big Tech cache souvent des coûts récurrents importants.",
        choices: [
            {
                text: "Refuser : le coût réel est de 50 000€ sur 5 ans + dépendance",
                correct: true,
                points: 50
            },
            {
                text: "Accepter : c'est gratuit au départ, on verra plus tard",
                correct: false,
                points: -30
            }
        ],
        pillar: "r",
        nirdInfo: {
            title: "Le piège du 'gratuit'",
            content: "50€ × 200 élèves × 5 ans = 50 000€ ! Sans compter la dépendance créée. Des PC reconditionnés sous Linux coûteraient 30 000€ sans abonnement."
        }
    },
    {
        id: 203,
        question: "Apple propose un programme éducatif avec des iPad à 'prix réduit' (400€/unité). L'alternative NIRD propose des tablettes reconditionnées sous Linux à 120€. Pour 50 tablettes ?",
        context: "Le marketing Big Tech cible particulièrement le secteur éducatif.",
        choices: [
            {
                text: "Choisir les tablettes reconditionnées : 14 000€ d'économie !",
                correct: true,
                points: 45
            },
            {
                text: "Prendre les iPad pour leur 'qualité supérieure'",
                correct: false,
                points: -25
            }
        ],
        pillar: "d",
        nirdInfo: {
            title: "Reconditionnement = Économies",
            content: "iPad : 50 × 400€ = 20 000€. Tablettes reconditionnées : 50 × 120€ = 6 000€. Économie : 14 000€ + impact écologique positif !"
        }
    },
    {
        id: 204,
        question: "Votre DSI propose d'héberger les données élèves sur Google Cloud (5000€/an) ou sur un serveur local avec des logiciels libres (8000€ d'investissement unique). Sur 5 ans ?",
        context: "Les coûts cloud augmentent généralement de 10-15% par an.",
        choices: [
            {
                text: "Investir dans le serveur local : souveraineté et économies à long terme",
                correct: true,
                points: 50
            },
            {
                text: "Google Cloud : pas d'investissement initial",
                correct: false,
                points: -20
            }
        ],
        pillar: "r",
        nirdInfo: {
            title: "Souveraineté numérique",
            content: "Google Cloud sur 5 ans : 25 000€+ (avec augmentations). Serveur local : 8000€ + 1000€/an maintenance = 13 000€. Économie : 12 000€ + contrôle total des données !"
        }
    },
    {
        id: 205,
        question: "Un commercial Microsoft propose une 'remise exceptionnelle' de 30% sur Office 365 si vous signez pour 3 ans. Le prix normal est 10€/utilisateur/mois pour 300 utilisateurs. Que faites-vous ?",
        context: "Les remises Big Tech créent une dépendance contractuelle à long terme.",
        choices: [
            {
                text: "Refuser et migrer vers LibreOffice : 0€ de licence",
                correct: true,
                points: 45
            },
            {
                text: "Accepter la remise : 30% c'est intéressant !",
                correct: false,
                points: -30
            }
        ],
        pillar: "n",
        nirdInfo: {
            title: "Calcul des 'remises'",
            content: "Avec remise 30% : 300 × 10€ × 0.7 × 12 × 3 = 75 600€ sur 3 ans. LibreOffice : 0€. La 'remise' coûte quand même 75 600€ !"
        }
    },
    {
        id: 206,
        question: "Amazon Web Services offre 1 an gratuit de cloud pour votre projet pédagogique. Après, le coût sera de 500€/mois. Que décidez-vous ?",
        context: "Les offres 'gratuites' créent une dépendance technique difficile à défaire.",
        choices: [
            {
                text: "Utiliser un hébergeur local ou associatif dès le départ (100€/mois)",
                correct: true,
                points: 45
            },
            {
                text: "Profiter de l'offre gratuite, on migrera plus tard si besoin",
                correct: false,
                points: -25
            }
        ],
        pillar: "r",
        nirdInfo: {
            title: "Le coût de la migration",
            content: "Migrer après 1 an coûte souvent plus cher que le service lui-même (temps, formation, données). Mieux vaut choisir une solution pérenne dès le départ."
        }
    },
    {
        id: 207,
        question: "Votre région propose deux options pour équiper le lycée : 100 PC neufs sous Windows (800€/unité) ou 150 PC reconditionnés sous Linux (200€/unité). Budget identique.",
        context: "Le reconditionnement permet d'équiper plus d'élèves pour le même budget.",
        choices: [
            {
                text: "150 PC reconditionnés : plus d'élèves équipés et démarche écologique",
                correct: true,
                points: 50
            },
            {
                text: "100 PC neufs : le neuf est toujours mieux",
                correct: false,
                points: -20
            }
        ],
        pillar: "i",
        nirdInfo: {
            title: "Inclusion numérique",
            content: "Avec le même budget de 80 000€ : soit 100 élèves avec PC neuf, soit 150 élèves avec PC reconditionné. 50 élèves de plus équipés + impact écologique positif !"
        }
    },
    {
        id: 208,
        question: "Adobe propose Creative Cloud Éducation à 15€/élève/mois. L'alternative libre (GIMP, Inkscape, Kdenlive) est gratuite. Pour 80 élèves en section arts sur 3 ans ?",
        context: "Les logiciels créatifs libres offrent des fonctionnalités professionnelles comparables.",
        choices: [
            {
                text: "Logiciels libres + 5000€ de formation : économie de 38 200€",
                correct: true,
                points: 50
            },
            {
                text: "Adobe Creative Cloud : c'est le standard professionnel",
                correct: false,
                points: -25
            }
        ],
        pillar: "n",
        nirdInfo: {
            title: "Alternatives créatives libres",
            content: "Adobe : 80 × 15€ × 12 × 3 = 43 200€. Logiciels libres + formation : 5 000€. Économie : 38 200€ ! Et les élèves apprennent des outils qu'ils pourront toujours utiliser gratuitement."
        }
    },
    {
        id: 209,
        question: "Zoom propose une licence établissement à 2000€/an. BigBlueButton (libre) nécessite un serveur à 1500€ + 500€/an de maintenance. Sur 5 ans ?",
        context: "Les solutions de visioconférence libres respectent mieux la vie privée des élèves.",
        choices: [
            {
                text: "BigBlueButton : 4000€ sur 5 ans + respect des données",
                correct: true,
                points: 45
            },
            {
                text: "Zoom : plus simple à utiliser pour les enseignants",
                correct: false,
                points: -20
            }
        ],
        pillar: "r",
        nirdInfo: {
            title: "Visioconférence responsable",
            content: "Zoom sur 5 ans : 10 000€ + données sur serveurs américains. BigBlueButton : 4 000€ + données hébergées localement. Économie de 6 000€ et respect du RGPD !"
        }
    },
    {
        id: 210,
        question: "Le budget numérique de votre collège est de 50 000€/an. Actuellement, 60% part en licences logicielles. Avec NIRD, ce ratio pourrait passer à 10%. Où iriez-vous réinvestir les économies ?",
        context: "Les économies NIRD permettent de financer l'humain plutôt que les licences.",
        choices: [
            {
                text: "Former les enseignants et créer un poste de référent numérique",
                correct: true,
                points: 50
            },
            {
                text: "Acheter des équipements plus performants de marques premium",
                correct: false,
                points: -15
            }
        ],
        pillar: "i",
        nirdInfo: {
            title: "Investir dans l'humain",
            content: "Économie : 50 000€ × (60% - 10%) = 25 000€/an. Cela finance : 1 mi-temps de référent numérique + formations + matériel inclusif pour élèves en difficulté."
        }
    },
    {
        id: 211,
        question: "Cisco propose des équipements réseau 'certifiés éducation' à 15 000€. Du matériel équivalent non-brandé coûte 5 000€. La différence ?",
        context: "Le marketing 'éducation' des Big Tech est souvent un argument commercial sans valeur technique ajoutée.",
        choices: [
            {
                text: "Matériel standard à 5 000€ : les spécifications sont identiques",
                correct: true,
                points: 45
            },
            {
                text: "Cisco Éducation : le support et la garantie valent le surcoût",
                correct: false,
                points: -20
            }
        ],
        pillar: "d",
        nirdInfo: {
            title: "Marketing vs Réalité",
            content: "Le label 'éducation' est souvent cosmétique. Économie de 10 000€ qui peuvent financer : 50 PC reconditionnés ou 200h de formation."
        }
    },
    {
        id: 212,
        question: "Votre académie négocie un contrat-cadre avec Google Workspace. Votre établissement peut refuser et utiliser des alternatives souveraines. Que faites-vous ?",
        context: "Les contrats-cadres académiques ne sont pas obligatoires pour les établissements.",
        choices: [
            {
                text: "Refuser et déployer Apps.education.fr + solutions libres",
                correct: true,
                points: 50
            },
            {
                text: "Accepter le contrat-cadre : c'est plus simple administrativement",
                correct: false,
                points: -30
            }
        ],
        pillar: "r",
        nirdInfo: {
            title: "Souveraineté académique",
            content: "Apps.education.fr offre : Nextcloud, Peertube, BBB... gratuitement et hébergé en France. Aucune raison de céder les données aux GAFAM !"
        }
    },
    {
        id: 213,
        question: "Un parent d'élève propose de sponsoriser 30 licences Windows pour la salle informatique. Condition : logo de son entreprise sur les PC. Acceptez-vous ?",
        context: "Les sponsorings créent des dépendances et introduisent la publicité à l'école.",
        choices: [
            {
                text: "Refuser poliment et installer Linux (gratuit et sans publicité)",
                correct: true,
                points: 45
            },
            {
                text: "Accepter : c'est 30 licences gratuites !",
                correct: false,
                points: -25
            }
        ],
        pillar: "r",
        nirdInfo: {
            title: "Indépendance de l'école",
            content: "L'école publique doit rester neutre. Le 'cadeau' de 30 licences (valeur ~3000€) ne vaut pas l'introduction de la publicité et la dépendance créée."
        }
    },
    {
        id: 214,
        question: "Le renouvellement des antivirus coûte 3000€/an. Sous Linux, le risque viral est quasi nul et l'antivirus optionnel (gratuit). Économie potentielle sur 10 ans ?",
        context: "Windows nécessite un antivirus payant, Linux est sécurisé par conception.",
        choices: [
            {
                text: "Migrer vers Linux : 30 000€ d'économie sur 10 ans + sécurité native",
                correct: true,
                points: 45
            },
            {
                text: "Garder Windows + antivirus : la sécurité n'a pas de prix",
                correct: false,
                points: -20
            }
        ],
        pillar: "d",
        nirdInfo: {
            title: "Sécurité économique",
            content: "Linux est moins ciblé par les virus et son architecture est plus sécurisée. Économie : 3000€ × 10 ans = 30 000€ + moins de maintenance !"
        }
    },
    {
        id: 215,
        question: "SAP propose un ERP éducatif à 20 000€/an. L'alternative libre Odoo Éducation coûte 5 000€ d'installation + 2 000€/an. Sur 10 ans ?",
        context: "Les ERP libres offrent les mêmes fonctionnalités à moindre coût.",
        choices: [
            {
                text: "Odoo : 25 000€ sur 10 ans vs 200 000€ pour SAP",
                correct: true,
                points: 50
            },
            {
                text: "SAP : c'est la référence, ça rassure la hiérarchie",
                correct: false,
                points: -25
            }
        ],
        pillar: "n",
        nirdInfo: {
            title: "ERP responsable",
            content: "SAP : 20 000€ × 10 = 200 000€. Odoo : 5 000€ + (2 000€ × 10) = 25 000€. Économie : 175 000€ sur 10 ans ! De quoi financer tout le reste du numérique."
        }
    }
];

/* ==========================================
   Get Level 2 Questions
   ========================================== */

function getLevel2Questions(count = 10) {
    // Shuffle and return requested number of questions
    const shuffled = [...level2Questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

/* ==========================================
   Level 2 Ranks (Financial themed)
   ========================================== */

const level2Ranks = [
    {
        minScore: 400,
        icon: "💰",
        title: "Économiste du Numérique",
        description: "Vous maîtrisez parfaitement les enjeux financiers du numérique responsable !"
    },
    {
        minScore: 300,
        icon: "📊",
        title: "Gestionnaire Avisé",
        description: "Vous savez faire les bons choix budgétaires pour votre établissement."
    },
    {
        minScore: 200,
        icon: "🧮",
        title: "Comptable Éclairé",
        description: "Vous commencez à voir les économies possibles avec le libre."
    },
    {
        minScore: 100,
        icon: "📝",
        title: "Apprenti Budget",
        description: "Continuez à apprendre les alternatives économiques !"
    },
    {
        minScore: 0,
        icon: "💸",
        title: "Victime du Marketing",
        description: "Les Big Tech vous ont eu... mais ce n'est jamais trop tard pour changer !"
    }
];
