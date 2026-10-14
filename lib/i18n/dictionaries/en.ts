import type { Dictionary } from './types';

/** English */
const en = {
  meta: {
    title: 'IIEAO — A decentralized personal content node',
    description:
      'IIEAO is a local content node that securely stores, sends, verifies and restores your personal files — with IPFS compatibility built in.',
    ogDescription: 'Your content, your node — decentralized personal storage.',
    twitterDescription: 'Decentralized personal storage.',
  },

  brand: {
    tagline: 'Decentralized Content Node',
  },

  a11y: {
    homeLabel: 'IIEAO home',
    mainNav: 'Main navigation',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    heroVisual: 'IIEAO product interface',
    dashboardAlt: 'IIEAO dashboard',
    languageSwitch: 'Change interface language',
    languageMenuLabel: 'Interface language',
  },

  nav: {
    why: 'Philosophy',
    how: 'Architecture',
    abilities: 'Capabilities',
    vision: 'Roadmap',
  },

  header: {
    download: 'Download',
    explore: 'Explore product',
  },

  mobileNav: {
    download: 'Download app',
    repo: 'Source code',
  },

  hero: {
    eyebrow: 'LOCAL-FIRST · CONTENT NODE',
    titleLine1: 'Build your personal',
    titleLine2: 'data sovereignty infrastructure.',
    lead: 'IIEAO unifies scattered storage and transfer protocols into a single local content node. Content addressing, verifiable transfer and multi-protocol routing put control and traceability back in your hands.',
    download: 'Download app',
    architecture: 'View architecture',
    repo: 'Source code',
    proofs: [
      'Local-first architecture',
      'Verifiable transfer',
      'IPFS-compatible ecosystem',
    ],
    windowTitle: 'IIEAO · LOCAL NODE',
    dashboardAlt: 'IIEAO dashboard',
    statusTitle: 'Node running',
    statusSub: 'Content transfer path established',
    scroll: 'SCROLL TO DISCOVER',
  },

  why: {
    kicker: 'THE CHALLENGE',
    titleLine1: 'When your data is hosted elsewhere,',
    titleLine2: 'what do you lose?',
    lead: 'With conventional cloud storage, your control over data ends the moment you upload it. IIEAO rebuilds that model so data sovereignty returns to the user.',
    items: [
      {
        n: '01',
        title: 'A transfer path you can trace end to end',
        text: 'Every piece of data that moves leaves a clear trail — from the local replica to node state — so content flow stays transparent and controllable.',
      },
      {
        n: '02',
        title: 'Cryptographic integrity verification',
        text: 'Content addressing and hash verification ensure that what a receiver gets is byte-for-byte identical to the source.',
      },
      {
        n: '03',
        title: 'Fault tolerance and recovery by architecture',
        text: 'Multi-replica governance, incremental backup and verifiable recovery form a complete data lifecycle framework.',
      },
    ],
    manifesto: {
      lead: 'Real',
      strong: 'data ownership',
      text: ' means more than being able to download.\nIt means tracing, verifying,\nand fully restoring when it matters.',
      signature: 'IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY',
    },
  },

  how: {
    kicker: 'TECHNICAL ARCHITECTURE',
    title: 'An intent-driven routing layer.',
    lead: 'IIEAO encapsulates protocol complexity inside its routing engine and exposes a semantic transfer interface to users.',
    source: { title: 'Content source', sub: 'Files · Folders · Streams' },
    core: { title: 'IIEAO', sub: 'Protocol routing engine' },
    delivery: { title: 'Verifiable delivery', sub: 'Transfer · Storage · Recovery' },
    protocols: [
      {
        role: 'Peer-to-peer direct connection',
        desc: 'NAT traversal and relay mechanisms establish the best available path between devices.',
      },
      {
        role: 'Distributed sharded transfer',
        desc: 'Large files are split into blocks that travel in parallel from multiple sources.',
      },
      {
        role: 'Verifiable range recovery',
        desc: 'A Merkle-tree based incremental mechanism rebuilds missing data segments precisely.',
      },
      {
        role: 'Ecosystem interoperability layer',
        desc: 'Compatible with the IPFS protocol stack, connecting the decentralized storage ecosystem.',
      },
    ],
    status: 'INTEGRATED',
    human: {
      userLabel: 'User intent',
      userQuote: '“Transfer this file safely to the target node”',
      systemLabel: 'System execution',
      systemText: 'Path discovery · Protocol selection · Integrity checks · State sync',
    },
  },

  abilities: {
    kicker: 'CORE CAPABILITIES',
    titleLine1: 'Systematic management across',
    titleLine2: 'the entire content lifecycle.',
    lead: 'From generating content identifiers to transferring across nodes, from integrity verification to replica governance, IIEAO provides complete data management infrastructure.',
    chapters: [
      {
        tag: '01 · CONTENT OWNERSHIP',
        title: 'Know exactly what belongs to you.',
        text: 'IIEAO gives every file a unique content-addressed identifier (CID) and builds a local-first data management architecture. Replica distribution, storage footprint and health are all queryable in real time, so content truly stays in your hands.',
        alt: 'IIEAO file and content management interface',
        notes: ['Content-addressed identity', 'Local-first architecture', 'Transparent replica management'],
      },
      {
        tag: '02 · VERIFIED DELIVERY',
        title: 'A transfer protocol you can verify.',
        text: 'Encrypted share credentials carry the content hash, version information and network topology. Before accepting a transfer, the receiver can verify the source, pre-check integrity and assess available storage — critical data deserves engineering-grade reliability.',
        alt: 'IIEAO send and receive interface',
        notes: ['Encrypted share credentials', 'Integrity pre-check', 'Hash verification'],
      },
      {
        tag: '03 · MANY PATHS, ONE INTENT',
        title: 'Smart routing, invisible protocols.',
        text: 'You state the intent and IIEAO chooses the best protocol mix based on network topology, content size and node state: direct peer-to-peer, multi-source sharding, IPFS gateway publishing or verifiable range recovery. The complexity is absorbed by the system.',
        alt: 'IIEAO Swarm multi-source transfer interface',
        notes: ['Adaptive routing', 'Multi-protocol fusion', 'Observable transfer state'],
      },
      {
        tag: '04 · RECOVERABLE BY DESIGN',
        title: 'Data resilience by design.',
        text: 'Backup is not a remedy after the fact; it is built into the system. Encrypted private space, incremental snapshots, Merkle-tree verification and replica policy governance form a complete resilience architecture, so important content always has a traceable path back.',
        alt: 'IIEAO backup and storage governance interface',
        notes: ['End-to-end encryption', 'Incremental snapshots', 'Replica policy governance'],
      },
    ],
  },

  people: {
    kicker: 'FOR EVERYONE',
    titleLine1: 'Professional-grade infrastructure,',
    titleLine2: 'consumer-grade experience.',
    items: [
      {
        label: 'Content creators',
        title: 'Build a verifiable provenance chain for your work.',
        text: 'Manage source material, distribute final cuts, and keep content identifiers and version history.',
      },
      {
        label: 'Collaboration teams',
        title: 'Break through the bandwidth ceiling of large files.',
        text: 'Multi-source collaboration and direct peer connections deliver efficiently even on complex networks.',
      },
      {
        label: 'Individuals',
        title: 'Build your own private data resilience system.',
        text: 'End-to-end encryption, incremental backup and verifiable recovery form a complete protection plan.',
      },
      {
        label: 'Protocol developers',
        title: 'One unified entry point to decentralized protocols.',
        text: 'The Iroh, Swarm, AVRS and IPFS protocol stacks integrated behind a single interface.',
      },
    ],
  },

  proof: {
    kicker: 'TRANSPARENCY BY DESIGN',
    titleLine1: 'Observability is',
    titleLine2: 'the foundation of reliability.',
    lead: 'Node health, network topology, replica distribution, transfer progress and naming/publishing state are all presented in structured form. Transparency is itself a dimension of security.',
    points: ['Local security boundary', 'Live node telemetry', 'Structured storage metadata'],
    imageAlt: 'IIEAO local transfer interface',
    miniCard: {
      title: 'Iroh transport layer',
      sub: 'Direct-first · Relay reachable',
      status: 'Running',
    },
  },

  vision: {
    kicker: 'ROADMAP',
    titleLine1: 'From a personal node',
    titleLine2: 'to a personal sovereignty network.',
    lead: 'The long-term vision of IIEAO is a decentralized content network made of sovereign user nodes, where data ownership, portability and interoperability are intrinsic properties of the infrastructure.',
    items: [
      {
        label: 'Current stage',
        title: 'A unified local content node',
        text: 'Multi-protocol transfer, content-addressed storage, verifiable recovery and replica governance in one desktop app.',
      },
      {
        label: 'Next milestone',
        title: 'A trusted content network across devices',
        text: 'Encrypted channels and trust mechanisms between devices let content flow seamlessly through your personal device network.',
      },
      {
        label: 'Long-term vision',
        title: 'Data infrastructure owned by its users',
        text: 'Portable identity, portable content, traceable history — data sovereignty that truly belongs to the people who create it.',
      },
    ],
  },

  closing: {
    kicker: 'LOCAL-FIRST · VERIFIABLE · SOVEREIGN',
    titleLine1: 'The next generation of internet infrastructure',
    titleLine2: 'starts with rebuilding data sovereignty.',
    lead: 'Start building your own decentralized content node today and keep your data in your own hands.',
    download: 'Download app',
    explore: 'Explore IIEAO',
    backToTop: 'Back to top',
  },

  footer: {
    description:
      'Designed for data ownership, content traceability and long-term accessibility.',
    copyright: '© 2025 IIEAO. Infrastructure for Data Sovereignty.',
  },

  downloads: {
    title: 'Download the IIEAO desktop app',
    desc: (version: string) =>
      `Pick your platform and get the latest release, v${version}. Installers are served directly from Cloudflare R2.`,
    close: 'Close download panel',
    groupCount: (count: number) => `${count} ${count === 1 ? 'installer' : 'installers'}`,
    recommended: 'Recommended',
    action: 'Download',
    footNote: 'Direct links, no third-party relay',
    repoLink: 'View source code',
    targets: {
      'windows-setup': {
        title: 'Windows installer',
        note: 'x64 · Guided setup that creates shortcuts automatically',
      },
      'windows-msi': {
        title: 'Windows package',
        note: 'x64 · Suited to mass deployment and silent installs',
      },
      'macos-dmg': {
        title: 'macOS disk image',
        note: 'Intel chip · Drag into Applications to install',
      },
    },
  },
} satisfies Dictionary;

export default en;
