import type { Dictionary } from './types';

/** Français */
const fr = {
  meta: {
    title: 'IIEAO — Un nœud de contenu personnel décentralisé',
    description:
      'IIEAO est un nœud de contenu local qui stocke, envoie, vérifie et restaure vos fichiers personnels en toute sécurité, avec compatibilité IPFS.',
    ogDescription: 'Vos contenus, votre nœud — un stockage personnel décentralisé.',
    twitterDescription: 'Un stockage personnel décentralisé.',
  },

  brand: {
    tagline: 'Nœud de contenu décentralisé',
  },

  a11y: {
    homeLabel: 'Accueil IIEAO',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    heroVisual: 'Interface produit IIEAO',
    dashboardAlt: 'Tableau de bord IIEAO',
    languageSwitch: 'Changer la langue de l’interface',
    languageMenuLabel: 'Langue de l’interface',
  },

  nav: {
    why: 'Philosophie',
    how: 'Architecture',
    abilities: 'Fonctionnalités',
    vision: 'Feuille de route',
  },

  header: {
    download: 'Télécharger',
    explore: 'Découvrir le produit',
  },

  mobileNav: {
    download: 'Télécharger l’application',
    repo: 'Code source',
  },

  hero: {
    eyebrow: 'LOCAL-FIRST · CONTENT NODE',
    titleLine1: 'Bâtissez votre infrastructure',
    titleLine2: 'personnelle de souveraineté des données.',
    lead: 'IIEAO réunit des protocoles de stockage et de transfert dispersés dans un seul nœud de contenu local. L’adressage par contenu, le transfert vérifiable et le routage multiprotocole remettent le contrôle et la traçabilité entre vos mains.',
    download: 'Télécharger l’application',
    architecture: 'Voir l’architecture',
    repo: 'Code source',
    proofs: [
      'Architecture local-first',
      'Transfert vérifiable',
      'Écosystème compatible IPFS',
    ],
    windowTitle: 'IIEAO · LOCAL NODE',
    dashboardAlt: 'Tableau de bord IIEAO',
    statusTitle: 'Nœud en cours d’exécution',
    statusSub: 'Chemin de transfert établi',
    scroll: 'SCROLL TO DISCOVER',
  },

  why: {
    kicker: 'LE DÉFI',
    titleLine1: 'Quand vos données sont hébergées ailleurs,',
    titleLine2: 'que perdez-vous ?',
    lead: 'Avec le stockage cloud classique, votre maîtrise des données s’arrête au téléversement. IIEAO repense ce modèle pour rendre la souveraineté des données à l’utilisateur.',
    items: [
      {
        n: '01',
        title: 'Un chemin de transfert traçable de bout en bout',
        text: 'Chaque flux de données laisse une trace claire — de la copie locale à l’état du nœud — pour que la circulation des contenus reste transparente et maîtrisée.',
      },
      {
        n: '02',
        title: 'Vérification d’intégrité cryptographique',
        text: 'L’adressage par contenu et la vérification par empreinte garantissent que les données reçues sont identiques, octet par octet, à celles de la source.',
      },
      {
        n: '03',
        title: 'Tolérance aux pannes et restauration par l’architecture',
        text: 'Gouvernance des répliques, sauvegardes incrémentales et restauration vérifiable forment un cadre complet du cycle de vie des données.',
      },
    ],
    manifesto: {
      lead: 'La véritable',
      strong: 'propriété des données',
      text: ' ne se limite pas au téléchargement.\nC’est pouvoir tracer, vérifier\net restaurer intégralement quand cela compte.',
      signature: 'IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY',
    },
  },

  how: {
    kicker: 'ARCHITECTURE TECHNIQUE',
    title: 'Une couche de routage guidée par l’intention.',
    lead: 'IIEAO encapsule la complexité des protocoles dans son moteur de routage et expose aux utilisateurs une interface de transfert sémantique.',
    source: { title: 'Source du contenu', sub: 'Fichiers · Dossiers · Flux' },
    core: { title: 'IIEAO', sub: 'Moteur de routage des protocoles' },
    delivery: { title: 'Livraison vérifiable', sub: 'Transfert · Stockage · Restauration' },
    protocols: [
      {
        role: 'Connexion directe pair à pair',
        desc: 'La traversée de NAT et les mécanismes de relais établissent le meilleur chemin entre les appareils.',
      },
      {
        role: 'Transfert fragmenté distribué',
        desc: 'Les fichiers volumineux sont découpés en blocs transférés en parallèle depuis plusieurs sources.',
      },
      {
        role: 'Restauration vérifiable par intervalles',
        desc: 'Un mécanisme incrémental fondé sur des arbres de Merkle reconstruit précisément les segments manquants.',
      },
      {
        role: 'Couche d’interopérabilité de l’écosystème',
        desc: 'Compatible avec la pile de protocoles IPFS, en lien avec l’écosystème de stockage décentralisé.',
      },
    ],
    status: 'INTEGRATED',
    human: {
      userLabel: 'Intention de l’utilisateur',
      userQuote: '« Transférer ce fichier en toute sécurité vers le nœud cible »',
      systemLabel: 'Exécution du système',
      systemText: 'Découverte du chemin · Choix du protocole · Contrôle d’intégrité · Synchronisation d’état',
    },
  },

  abilities: {
    kicker: 'FONCTIONNALITÉS CLÉS',
    titleLine1: 'Une gestion systématique de tout',
    titleLine2: 'le cycle de vie des contenus.',
    lead: 'De la génération des identifiants de contenu au transfert entre nœuds, de la vérification d’intégrité à la gouvernance des répliques, IIEAO fournit une infrastructure complète de gestion des données.',
    chapters: [
      {
        tag: '01 · PROPRIÉTÉ DU CONTENU',
        title: 'Vous savez exactement ce qui vous appartient.',
        text: 'IIEAO attribue à chaque fichier un identifiant unique par contenu (CID) et adopte une architecture local-first. Répartition des répliques, espace occupé et état de santé sont consultables en temps réel : le contenu reste vraiment entre vos mains.',
        alt: 'Interface de gestion des fichiers et des contenus IIEAO',
        notes: ['Identifiant par contenu', 'Architecture local-first', 'Gestion transparente des répliques'],
      },
      {
        tag: '02 · LIVRAISON VÉRIFIÉE',
        title: 'Un protocole de transfert vérifiable.',
        text: 'Lors de la création d’un justificatif de partage chiffré, le système y joint l’empreinte du contenu, la version et la topologie du réseau. Avant d’accepter un transfert, le destinataire peut vérifier la source, précontrôler l’intégrité et évaluer l’espace disponible — les données critiques méritent une fiabilité d’ingénierie.',
        alt: 'Interface d’envoi et de réception IIEAO',
        notes: ['Justificatif de partage chiffré', 'Précontrôle d’intégrité', 'Vérification par empreinte'],
      },
      {
        tag: '03 · PLUSIEURS CHEMINS, UNE INTENTION',
        title: 'Routage intelligent, protocoles invisibles.',
        text: 'Vous énoncez l’intention ; IIEAO choisit la meilleure combinaison de protocoles selon la topologie, la taille du contenu et l’état des nœuds : connexion directe pair à pair, fragmentation multi-source, publication via passerelle IPFS ou restauration vérifiable par intervalles. La complexité est absorbée par le système.',
        alt: 'Interface de transfert multi-source Swarm IIEAO',
        notes: ['Routage adaptatif', 'Fusion multiprotocole', 'État de transfert observable'],
      },
      {
        tag: '04 · RESTAURABLE PAR CONCEPTION',
        title: 'La résilience des données dès la conception.',
        text: 'La sauvegarde n’est pas un rattrapage, mais une capacité intrinsèque du système. Espace privé chiffré, instantanés incrémentaux, vérification par arbre de Merkle et gouvernance des répliques composent une architecture de résilience complète : les contenus importants gardent toujours un chemin de retour traçable.',
        alt: 'Interface de sauvegarde et de gouvernance du stockage IIEAO',
        notes: ['Chiffrement de bout en bout', 'Instantanés incrémentaux', 'Gouvernance des répliques'],
      },
    ],
  },

  people: {
    kicker: 'POUR TOUS',
    titleLine1: 'Une infrastructure de niveau professionnel,',
    titleLine2: 'une expérience grand public.',
    items: [
      {
        label: 'Créateurs de contenu',
        title: 'Construisez une chaîne de provenance vérifiable pour vos œuvres.',
        text: 'Gérez les sources, diffusez les versions finales et conservez identifiants de contenu et historique des versions.',
      },
      {
        label: 'Équipes de collaboration',
        title: 'Dépassez la limite de bande passante des gros fichiers.',
        text: 'La collaboration multi-source et les connexions directes assurent des transferts efficaces même sur des réseaux complexes.',
      },
      {
        label: 'Utilisateurs individuels',
        title: 'Mettez en place votre propre résilience de données.',
        text: 'Chiffrement de bout en bout, sauvegarde incrémentale et restauration vérifiable forment une protection complète.',
      },
      {
        label: 'Développeurs de protocoles',
        title: 'Un point d’accès unique aux protocoles décentralisés.',
        text: 'Les piles Iroh, Swarm, AVRS et IPFS réunies dans une seule interface.',
      },
    ],
  },

  proof: {
    kicker: 'TRANSPARENCE PAR CONCEPTION',
    titleLine1: 'L’observabilité est',
    titleLine2: 'le socle de la fiabilité.',
    lead: 'Santé des nœuds, topologie du réseau, répartition des répliques, progression des transferts et état de publication sont présentés de façon structurée. La transparence est en soi une dimension de la sécurité.',
    points: ['Périmètre de sécurité local', 'Télémétrie des nœuds en direct', 'Métadonnées de stockage structurées'],
    imageAlt: 'Interface de transfert local IIEAO',
    miniCard: {
      title: 'Couche de transport Iroh',
      sub: 'Direct d’abord · Relais joignable',
      status: 'En cours',
    },
  },

  vision: {
    kicker: 'FEUILLE DE ROUTE',
    titleLine1: 'D’un nœud personnel',
    titleLine2: 'à un réseau personnel de souveraineté des données.',
    lead: 'La vision à long terme d’IIEAO est un réseau de contenus décentralisé composé de nœuds souverains appartenant aux utilisateurs, où propriété des données, portabilité et interopérabilité sont des propriétés intrinsèques de l’infrastructure.',
    items: [
      {
        label: 'Étape actuelle',
        title: 'Un nœud de contenu local unifié',
        text: 'Transfert multiprotocole, stockage adressé par contenu, restauration vérifiable et gouvernance des répliques dans une seule application de bureau.',
      },
      {
        label: 'Prochain jalon',
        title: 'Un réseau de contenus de confiance entre appareils',
        text: 'Canaux chiffrés et mécanismes de confiance entre appareils pour faire circuler les contenus sans friction dans votre réseau personnel.',
      },
      {
        label: 'Vision à long terme',
        title: 'Une infrastructure de données souveraine',
        text: 'Identité portable, contenus portables, historique traçable — la souveraineté des données appartient réellement à ceux qui les créent.',
      },
    ],
  },

  closing: {
    kicker: 'LOCAL-FIRST · VÉRIFIABLE · SOUVERAIN',
    titleLine1: 'La prochaine génération d’infrastructure internet',
    titleLine2: 'commence par reconstruire la souveraineté des données.',
    lead: 'Commencez dès aujourd’hui à bâtir votre nœud de contenu décentralisé et gardez vos données entre vos mains.',
    download: 'Télécharger l’application',
    explore: 'Découvrir IIEAO',
    backToTop: 'Retour en haut',
  },

  footer: {
    description:
      'Conçu pour la propriété des données, la traçabilité des contenus et l’accessibilité à long terme.',
    copyright: '© 2025 IIEAO. Infrastructure pour la souveraineté des données.',
  },

  downloads: {
    title: 'Télécharger l’application de bureau IIEAO',
    desc: (version: string) =>
      `Choisissez votre système et obtenez la dernière version, v${version}. Les installateurs sont diffusés directement depuis Cloudflare R2.`,
    close: 'Fermer le panneau de téléchargement',
    groupCount: (count: number) => `${count} installateur${count === 1 ? '' : 's'}`,
    recommended: 'Recommandé',
    action: 'Télécharger',
    footNote: 'Liens directs, sans intermédiaire',
    repoLink: 'Voir le code source',
    targets: {
      'windows-setup': {
        title: 'Programme d’installation Windows',
        note: 'Système x64 · Installation guidée qui crée les raccourcis automatiquement',
      },
      'windows-msi': {
        title: 'Paquet Windows',
        note: 'Système x64 · Adapté au déploiement de masse et à l’installation silencieuse',
      },
      'macos-dmg': {
        title: 'Image disque macOS',
        note: 'Puce Intel · Glissez-la dans « Applications » pour installer',
      },
    },
  },
} satisfies Dictionary;

export default fr;
