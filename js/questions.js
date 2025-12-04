/* ==========================================
   NIRD Quest - Expanded Questions Database
   25+ questions with random selection
   ========================================== */

const allQuestions = [
    // Original 10 questions
    {
        id: 1,
        question: "Votre école possède 200 vieux PC sous Windows 10 qui ne peuvent pas passer à Windows 11. Que faites-vous ?",
        context: "En octobre 2025, Microsoft met fin au support de Windows 10. Des millions d'ordinateurs deviennent potentiellement obsolètes.",
        choices: [
            { text: "Installer Linux pour prolonger leur durée de vie", correct: true, points: 40 },
            { text: "Les jeter et acheter du matériel neuf", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "Linux prolonge la vie des ordinateurs",
            content: "<strong>Linux</strong> peut prolonger la durée de vie d'un ordinateur de <strong>5 à 10 ans</strong>. Un système comme <strong>Linux Mint</strong> ou <strong>PrimTux</strong> fonctionne parfaitement sur des machines de 10 ans ou plus, évitant ainsi des tonnes de déchets électroniques."
        },
        pillar: "D"
    },
    {
        id: 2,
        question: "Pour la suite bureautique de l'établissement, quelle solution privilégier ?",
        context: "L'école doit renouveler ses licences logicielles. Le budget est serré cette année.",
        choices: [
            { text: "Acheter des licences Microsoft Office pour tous", correct: false, points: -25 },
            { text: "Utiliser LibreOffice, gratuit et sans licence", correct: true, points: 35 }
        ],
        nirdInfo: {
            title: "Les logiciels libres sont gratuits et performants",
            content: "<strong>LibreOffice</strong> est une suite bureautique complète (traitement de texte, tableur, présentation) 100% gratuite et sans licence à renouveler. Elle est compatible avec les formats Microsoft et utilisée par des millions de personnes dans le monde."
        },
        pillar: "R"
    },
    {
        id: 3,
        question: "Un élève n'a pas d'ordinateur chez lui pour faire ses devoirs. Quelle solution proposer ?",
        context: "La fracture numérique touche de nombreuses familles. L'égalité des chances est en jeu.",
        choices: [
            { text: "Lui donner un PC reconditionné sous Linux par le lycée", correct: true, points: 45 },
            { text: "Lui dire d'utiliser son téléphone portable", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "Le reconditionnement crée un cercle vertueux",
            content: "Au <strong>lycée Carnot de Bruay-la-Buissière</strong>, les élèves reconditionnent eux-mêmes des PC récupérés auprès d'entreprises. Ces machines sont ensuite distribuées aux familles dans le besoin. C'est le concept du <strong>cercle vertueux NIRD</strong> : des élèves qui aident d'autres élèves."
        },
        pillar: "I"
    },
    {
        id: 4,
        question: "Où stocker les données personnelles des élèves ?",
        context: "Le RGPD impose des règles strictes sur la protection des données personnelles, surtout pour les mineurs.",
        choices: [
            { text: "Sur Google Drive ou Microsoft OneDrive (serveurs aux USA)", correct: false, points: -35 },
            { text: "Sur un cloud souverain français ou des serveurs locaux", correct: true, points: 40 }
        ],
        nirdInfo: {
            title: "Souveraineté numérique et RGPD",
            content: "Les données stockées hors UE sont soumises aux lois étrangères (comme le <strong>Cloud Act</strong> américain). La démarche NIRD privilégie les solutions <strong>souveraines</strong> comme <strong>Nextcloud</strong> ou les serveurs académiques, garantissant le respect du RGPD et la protection des données des élèves."
        },
        pillar: "R"
    },
    {
        id: 5,
        question: "Pour apprendre la programmation aux élèves, quel environnement choisir ?",
        context: "Le cours de NSI (Numérique et Sciences Informatiques) nécessite des outils de développement.",
        choices: [
            { text: "Des logiciels libres (Python, Scratch, Thonny)", correct: true, points: 35 },
            { text: "Des logiciels propriétaires payants", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "L'éducation au code avec le libre",
            content: "Les langages et outils libres comme <strong>Python</strong>, <strong>Scratch</strong>, et <strong>Thonny</strong> sont utilisés dans l'éducation mondiale. Ils permettent aux élèves de comprendre le fonctionnement des logiciels, de modifier le code, et de partager leurs créations sans aucune barrière financière."
        },
        pillar: "N"
    },
    {
        id: 6,
        question: "Le matériel informatique de l'école consomme beaucoup d'énergie. Que faire ?",
        context: "L'établissement veut réduire son empreinte carbone et ses factures d'électricité.",
        choices: [
            { text: "Remplacer certains PC par des Raspberry Pi (10x moins gourmands)", correct: true, points: 40 },
            { text: "Acheter les derniers PC gaming haut de gamme", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "Sobriété numérique avec le Raspberry Pi",
            content: "Un <strong>Raspberry Pi</strong> consomme environ <strong>10 fois moins d'énergie</strong> qu'un ordinateur classique. Pour des usages simples (navigation, bureautique, apprentissage du code), c'est une solution économique et écologique parfaitement adaptée au milieu scolaire."
        },
        pillar: "D"
    },
    {
        id: 7,
        question: "Comment former les enseignants aux outils numériques ?",
        context: "De nombreux professeurs ne sont pas à l'aise avec les nouvelles technologies.",
        choices: [
            { text: "Organiser des formations collaboratives entre pairs", correct: true, points: 35 },
            { text: "Acheter des formations coûteuses à des entreprises externes", correct: false, points: -15 }
        ],
        nirdInfo: {
            title: "La formation par les pairs",
            content: "La démarche NIRD repose sur la <strong>mutualisation des compétences</strong>. Les enseignants formés forment leurs collègues, les élèves aident les autres élèves. La <strong>Forge des communs numériques éducatifs</strong> permet de partager ressources et bonnes pratiques entre établissements."
        },
        pillar: "I"
    },
    {
        id: 8,
        question: "Un fournisseur propose de 'donner' des tablettes avec un abonnement obligatoire de 5 ans. Que décider ?",
        context: "L'offre semble attractive mais implique un engagement long terme.",
        choices: [
            { text: "Accepter l'offre 'gratuite'", correct: false, points: -35 },
            { text: "Refuser et privilégier du matériel sans dépendance", correct: true, points: 40 }
        ],
        nirdInfo: {
            title: "Attention aux écosystèmes fermés",
            content: "Les offres 'gratuites' cachent souvent une <strong>dépendance à long terme</strong> : abonnements obligatoires, collecte de données, obsolescence programmée. La démarche NIRD privilégie l'<strong>autonomie technologique</strong> avec du matériel et des logiciels que l'établissement maîtrise totalement."
        },
        pillar: "R"
    },
    {
        id: 9,
        question: "Le CDI veut installer des bornes de consultation. Quelle solution adopter ?",
        context: "Les bornes doivent être simples, rapides et sécurisées pour la recherche documentaire.",
        choices: [
            { text: "De vieux PC reconditionnés sous Linux, limités à la consultation", correct: true, points: 45 },
            { text: "Des PC neufs sous Windows avec toutes les fonctionnalités", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "Linux parfait pour les bornes de consultation",
            content: "Au <strong>lycée Jean Monnet d'Annemasse</strong>, une borne CDI fonctionne parfaitement sur un très vieux PC sous Linux, sans identification nécessaire puisqu'elle est restreinte à la consultation e-sidoc. Simple, rapide, économique et <strong>zéro licence</strong>."
        },
        pillar: "D"
    },
    {
        id: 10,
        question: "Comment impliquer les élèves dans la transition numérique responsable ?",
        context: "Les éco-délégués cherchent des projets concrets pour l'établissement.",
        choices: [
            { text: "Les faire participer au reconditionnement et à la sensibilisation", correct: true, points: 50 },
            { text: "Leur dire que c'est l'affaire des adultes uniquement", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Les élèves au cœur de la démarche NIRD",
            content: "La démarche NIRD place les <strong>élèves comme acteurs</strong> : ils reconditionnent des PC, forment leurs camarades, sensibilisent les familles. Au lycée Carnot, une vidéo créée par les élèves s'intitule <strong>'Linux, c'est facile !'</strong>. Ils deviennent citoyens numériques responsables."
        },
        pillar: "I"
    },
    
    // 15+ NEW questions
    {
        id: 11,
        question: "L'établissement doit choisir un navigateur web pour tous les postes. Lequel installer ?",
        context: "Le navigateur est l'outil le plus utilisé par les élèves et les enseignants.",
        choices: [
            { text: "Firefox, navigateur libre respectueux de la vie privée", correct: true, points: 35 },
            { text: "Google Chrome qui collecte les données de navigation", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Firefox : le navigateur libre de référence",
            content: "<strong>Firefox</strong> est développé par Mozilla, une fondation à but non lucratif. Contrairement à Chrome, il ne collecte pas vos données de navigation et propose des protections renforcées contre le pistage. C'est le choix responsable pour l'éducation."
        },
        pillar: "R"
    },
    {
        id: 12,
        question: "Un enseignant veut créer des supports de cours collaboratifs. Quel outil recommander ?",
        context: "Il souhaite que ses collègues puissent contribuer et modifier les contenus.",
        choices: [
            { text: "Un wiki ou pad collaboratif sur la Forge éducative", correct: true, points: 40 },
            { text: "Google Docs partagé avec les collègues", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "La Forge des communs numériques éducatifs",
            content: "La <strong>Forge</strong> est un espace de partage pour les enseignants français. Elle héberge des ressources éducatives libres (REL) que chacun peut utiliser, modifier et partager. Les données restent en France et appartiennent à la communauté éducative."
        },
        pillar: "N"
    },
    {
        id: 13,
        question: "Des élèves demandent à utiliser des outils d'IA générative pour leurs travaux. Que faire ?",
        context: "L'IA est partout, mais les outils les plus connus posent des questions éthiques.",
        choices: [
            { text: "Les sensibiliser aux enjeux et leur montrer des alternatives libres", correct: true, points: 45 },
            { text: "Les laisser utiliser ChatGPT sans aucun encadrement", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "IA responsable dans l'éducation",
            content: "Des alternatives comme <strong>Mistral AI</strong> (français) ou des modèles open source existent. L'important est d'enseigner l'<strong>esprit critique</strong> face à l'IA : vérifier les sources, comprendre les biais, et réfléchir à l'impact environnemental de ces technologies très gourmandes en énergie."
        },
        pillar: "R"
    },
    {
        id: 14,
        question: "L'imprimante de la salle informatique tombe en panne. Quelle décision prendre ?",
        context: "C'est un modèle ancien mais qui fonctionnait bien jusqu'ici.",
        choices: [
            { text: "Essayer de la réparer ou trouver des pièces de rechange", correct: true, points: 35 },
            { text: "La jeter et acheter une neuve dernier cri", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Réparer plutôt que jeter",
            content: "L'<strong>indice de réparabilité</strong> aide à choisir des équipements durables. Réparer un appareil évite la production de déchets électroniques et économise les ressources nécessaires à la fabrication d'un nouvel équipement. Des <strong>Repair Cafés</strong> peuvent aider !"
        },
        pillar: "D"
    },
    {
        id: 15,
        question: "Un parent d'élève propose de donner 50 vieux ordinateurs de son entreprise. Que faire ?",
        context: "Les machines ont 6-7 ans et fonctionnent encore, mais sont sous Windows 7.",
        choices: [
            { text: "Accepter et les reconditionner sous Linux avec les élèves", correct: true, points: 50 },
            { text: "Refuser car ils sont trop vieux pour être utiles", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "Le don et le reconditionnement",
            content: "Des ordinateurs de 6-7 ans sont parfaitement utilisables sous Linux ! Le <strong>reconditionnement</strong> est une activité pédagogique excellente : les élèves apprennent le hardware, installent un OS, et créent de la valeur pour la communauté. C'est l'essence de la démarche NIRD."
        },
        pillar: "I"
    },
    {
        id: 16,
        question: "Pour la communication interne de l'établissement, quel outil de messagerie choisir ?",
        context: "Les enseignants utilisent actuellement WhatsApp pour communiquer.",
        choices: [
            { text: "Tchap ou Element, messageries souveraines sécurisées", correct: true, points: 40 },
            { text: "Continuer avec WhatsApp, c'est pratique", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Messageries souveraines pour l'éducation",
            content: "<strong>Tchap</strong> est la messagerie de l'État français, sécurisée et hébergée en France. <strong>Element</strong> (basé sur Matrix) est une alternative open source. WhatsApp appartient à Meta et stocke des métadonnées sur les serveurs américains."
        },
        pillar: "R"
    },
    {
        id: 17,
        question: "L'établissement organise une journée portes ouvertes. Comment présenter la démarche NIRD ?",
        context: "C'est l'occasion de sensibiliser les familles au numérique responsable.",
        choices: [
            { text: "Faire une démonstration de reconditionnement par les élèves", correct: true, points: 45 },
            { text: "Distribuer des flyers et ne rien montrer de concret", correct: false, points: -15 }
        ],
        nirdInfo: {
            title: "La pédagogie par l'exemple",
            content: "Montrer des élèves en action qui reconditionnent des PC est bien plus parlant qu'un discours. Les familles peuvent voir concrètement comment leurs enfants deviennent des <strong>citoyens numériques responsables</strong> et comment ils peuvent bénéficier de PC reconditionnés."
        },
        pillar: "I"
    },
    {
        id: 18,
        question: "Le serveur de l'établissement doit être renouvelé. Quelle option choisir ?",
        context: "Le serveur actuel a 8 ans et montre des signes de faiblesse.",
        choices: [
            { text: "Installer un serveur Linux optimisé sur du matériel reconditionné", correct: true, points: 40 },
            { text: "Acheter un serveur Windows Server dernier cri très puissant", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "Linux domine le monde des serveurs",
            content: "Plus de <strong>90% des serveurs dans le monde</strong> tournent sous Linux ! C'est gratuit, stable, sécurisé et parfaitement adapté aux besoins d'un établissement scolaire. Un serveur Linux bien configuré peut durer 10 ans ou plus."
        },
        pillar: "N"
    },
    {
        id: 19,
        question: "Des élèves veulent créer un club informatique. Quelles activités leur proposer ?",
        context: "Ils sont motivés mais ne savent pas par où commencer.",
        choices: [
            { text: "Reconditionnement, coding, sensibilisation au libre", correct: true, points: 45 },
            { text: "Uniquement des jeux vidéo et de l'e-sport", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "Clubs NIRD dans les établissements",
            content: "Un club informatique NIRD peut proposer : <strong>reconditionnement</strong> de PC, <strong>initiation à Linux</strong>, <strong>coding</strong> en Python/Scratch, <strong>sensibilisation</strong> des autres élèves. Les élèves deviennent ambassadeurs du numérique responsable dans leur établissement."
        },
        pillar: "I"
    },
    {
        id: 20,
        question: "Pour les visioconférences pédagogiques, quel outil utiliser ?",
        context: "Depuis le COVID, les réunions à distance sont devenues courantes.",
        choices: [
            { text: "BigBlueButton ou Jitsi, solutions libres hébergées en France", correct: true, points: 35 },
            { text: "Zoom ou Teams avec comptes gratuits", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Visioconférence souveraine",
            content: "<strong>BigBlueButton</strong> est spécialement conçu pour l'éducation et est utilisé par l'Éducation nationale. <strong>Jitsi</strong> est une solution libre simple d'utilisation. Ces outils respectent le RGPD et ne collectent pas de données."
        },
        pillar: "R"
    },
    {
        id: 21,
        question: "L'établissement reçoit une subvention pour le numérique. Comment l'utiliser au mieux ?",
        context: "La région offre 10 000€ pour moderniser l'équipement informatique.",
        choices: [
            { text: "Investir dans du reconditionnement et des Raspberry Pi", correct: true, points: 45 },
            { text: "Acheter quelques tablettes Apple dernier modèle", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Maximiser l'impact des budgets",
            content: "Avec 10 000€, on peut acheter 10 tablettes Apple OU équiper 50-100 postes en matériel reconditionné sous Linux. La démarche NIRD permet de <strong>démultiplier l'impact</strong> des budgets tout en étant plus écologique et pédagogique."
        },
        pillar: "D"
    },
    {
        id: 22,
        question: "Comment gérer les mots de passe des élèves de manière sécurisée ?",
        context: "Les élèves oublient souvent leurs mots de passe et les notent sur des post-it.",
        choices: [
            { text: "Installer un gestionnaire de mots de passe libre comme KeePass", correct: true, points: 35 },
            { text: "Utiliser le même mot de passe simple pour tous", correct: false, points: -35 }
        ],
        nirdInfo: {
            title: "Sécurité et gestionnaires de mots de passe",
            content: "<strong>KeePass</strong> et <strong>Bitwarden</strong> sont des gestionnaires de mots de passe libres et gratuits. Ils permettent de générer des mots de passe forts et uniques pour chaque service. L'éducation à la <strong>cybersécurité</strong> fait partie de la démarche NIRD."
        },
        pillar: "R"
    },
    {
        id: 23,
        question: "Un élève dyslexique a besoin d'outils adaptés. Quelle solution proposer ?",
        context: "L'inclusion numérique concerne aussi les élèves en situation de handicap.",
        choices: [
            { text: "Utiliser les outils d'accessibilité intégrés à Linux et LibreOffice", correct: true, points: 40 },
            { text: "Lui acheter un logiciel propriétaire très coûteux", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "Accessibilité et logiciels libres",
            content: "Linux et LibreOffice intègrent de nombreux outils d'<strong>accessibilité</strong> : synthèse vocale, polices adaptées à la dyslexie, contraste élevé, loupe... La démarche NIRD vise un numérique <strong>inclusif</strong> accessible à tous, sans surcoût."
        },
        pillar: "I"
    },
    {
        id: 24,
        question: "Comment sensibiliser les élèves à l'empreinte carbone du numérique ?",
        context: "Peu d'élèves réalisent l'impact environnemental de leurs usages numériques.",
        choices: [
            { text: "Organiser des ateliers sur le cycle de vie des équipements", correct: true, points: 40 },
            { text: "Ne rien faire, ce n'est pas le rôle de l'école", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "L'impact environnemental du numérique",
            content: "Le numérique représente <strong>4% des émissions mondiales de CO2</strong>, dont 80% liés à la fabrication des équipements. Prolonger la vie d'un ordinateur de 5 ans réduit son empreinte carbone de 37%. La sensibilisation est essentielle pour former des citoyens responsables."
        },
        pillar: "D"
    },
    {
        id: 25,
        question: "L'ENT (Espace Numérique de Travail) de l'académie est lent. Que proposer ?",
        context: "Les enseignants se plaignent de la lenteur des outils institutionnels.",
        choices: [
            { text: "Contribuer à améliorer les outils via les canaux officiels", correct: true, points: 35 },
            { text: "Utiliser des alternatives non officielles comme Google Classroom", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "Améliorer les outils institutionnels",
            content: "Les ENT académiques sont basés sur des logiciels libres et peuvent être améliorés par la communauté. Plutôt que de fuir vers des solutions privées, la démarche NIRD encourage la <strong>contribution</strong> pour améliorer les communs numériques éducatifs."
        },
        pillar: "N"
    },
    {
        id: 26,
        question: "Un collègue veut utiliser une IA pour corriger automatiquement les copies. Votre avis ?",
        context: "L'IA promet de gagner du temps sur les corrections.",
        choices: [
            { text: "L'utiliser comme aide mais toujours vérifier et personnaliser les retours", correct: true, points: 35 },
            { text: "Lui faire confiance aveuglément pour tout corriger", correct: false, points: -30 }
        ],
        nirdInfo: {
            title: "L'IA comme outil, pas comme solution",
            content: "L'IA peut aider à identifier des erreurs fréquentes ou à pré-trier des copies, mais le <strong>retour personnalisé</strong> d'un enseignant reste irremplaçable. L'important est de garder un <strong>regard critique</strong> sur ces outils et de ne pas déléguer totalement l'évaluation."
        },
        pillar: "R"
    },
    {
        id: 27,
        question: "Comment stocker les projets des élèves de manière pérenne ?",
        context: "Chaque année, des travaux d'élèves sont perdus faute de stockage adapté.",
        choices: [
            { text: "Utiliser un serveur Nextcloud local avec sauvegardes régulières", correct: true, points: 40 },
            { text: "Tout mettre sur des clés USB que les élèves emportent", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "Nextcloud : le cloud auto-hébergé",
            content: "<strong>Nextcloud</strong> est une solution de cloud libre que l'établissement peut héberger lui-même. Les données restent sur place, les sauvegardes sont contrôlées, et les élèves peuvent accéder à leurs fichiers de n'importe où. C'est la souveraineté numérique en action."
        },
        pillar: "N"
    },
    {
        id: 28,
        question: "L'établissement veut réduire l'usage du papier. Quelle stratégie adopter ?",
        context: "Des tonnes de papier sont imprimées chaque année pour des documents éphémères.",
        choices: [
            { text: "Numériser avec des outils libres et former aux pratiques éco-responsables", correct: true, points: 40 },
            { text: "Interdire totalement les impressions du jour au lendemain", correct: false, points: -15 }
        ],
        nirdInfo: {
            title: "Transition numérique progressive",
            content: "Réduire le papier est positif, mais doit être <strong>progressif et accompagné</strong>. Des outils comme <strong>Paperless-ngx</strong> (libre) permettent de numériser et organiser les documents. L'important est de former les usagers pour une transition réussie."
        },
        pillar: "D"
    },
    {
        id: 29,
        question: "Des élèves créent un site web pour leur projet. Où l'héberger ?",
        context: "Le projet doit être accessible en ligne pour être présenté aux parents.",
        choices: [
            { text: "Sur les Pages de la Forge ou un hébergeur associatif", correct: true, points: 35 },
            { text: "Sur un hébergeur gratuit avec publicités et tracking", correct: false, points: -25 }
        ],
        nirdInfo: {
            title: "Hébergement éthique pour l'éducation",
            content: "La <strong>Forge des communs</strong> propose un hébergement gratuit pour les projets éducatifs. Des hébergeurs associatifs comme <strong>Framasoft</strong> offrent aussi des alternatives éthiques. Évitez les hébergeurs qui monétisent vos données ou affichent des publicités."
        },
        pillar: "R"
    },
    {
        id: 30,
        question: "Comment organiser une install party Linux dans l'établissement ?",
        context: "Plusieurs enseignants veulent passer leur PC personnel sous Linux.",
        choices: [
            { text: "Faire participer des élèves formés pour aider les enseignants", correct: true, points: 50 },
            { text: "Embaucher un prestataire externe pour tout faire", correct: false, points: -20 }
        ],
        nirdInfo: {
            title: "Les install parties : transmission de savoirs",
            content: "Une <strong>install party</strong> est un moment convivial où les plus expérimentés aident les débutants à installer Linux. Quand ce sont des élèves qui aident les enseignants, c'est doublement pédagogique : les élèves consolident leurs connaissances et les enseignants découvrent le libre."
        },
        pillar: "I"
    }
];

// Function to get random questions for a game session
function getRandomQuestions(count = 10) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Current game questions (will be set at game start)
let questions = [];

// Ranks based on final score
const ranks = [
    {
        minScore: 350,
        icon: "🏆",
        title: "Grand Druide du Numérique",
        description: "Vous êtes un véritable champion de la résistance numérique ! Votre village est prêt à affronter l'Empire des Big Tech."
    },
    {
        minScore: 250,
        icon: "⚔️",
        title: "Guerrier NIRD",
        description: "Excellent ! Vous maîtrisez bien les principes du numérique responsable. Continuez à vous former !"
    },
    {
        minScore: 150,
        icon: "🛡️",
        title: "Défenseur Prometteur",
        description: "Bon travail ! Vous avez compris les bases. Explorez le site NIRD pour approfondir vos connaissances."
    },
    {
        minScore: 50,
        icon: "🌱",
        title: "Apprenti Résistant",
        description: "C'est un début ! La résistance numérique s'apprend. Consultez les ressources NIRD pour progresser."
    },
    {
        minScore: -Infinity,
        icon: "💭",
        title: "Novice Curieux",
        description: "Pas de panique ! Tout le monde débute quelque part. La démarche NIRD est là pour vous guider."
    }
];

// NIRD Pillars Info
const pillars = {
    N: { name: "Numérique", color: "#4A90D9", icon: "🔢" },
    I: { name: "Inclusif", color: "#2ECC71", icon: "🤝" },
    R: { name: "Responsable", color: "#9B59B6", icon: "🛡️" },
    D: { name: "Durable", color: "#1ABC9C", icon: "♻️" }
};

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allQuestions, getRandomQuestions, questions, ranks, pillars };
}
