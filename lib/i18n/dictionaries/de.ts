import type { Dictionary } from './types';

/** Deutsch */
const de = {
  meta: {
    title: 'IIEAO — Ein dezentraler persönlicher Inhaltsknoten',
    description:
      'IIEAO ist ein lokaler Inhaltsknoten, der Ihre persönlichen Dateien sicher speichert, versendet, verifiziert und wiederherstellt – mit integrierter IPFS-Kompatibilität.',
    ogDescription: 'Ihre Inhalte, Ihr Knoten – dezentrale persönliche Speicherung.',
    twitterDescription: 'Dezentrale persönliche Speicherung.',
  },

  brand: {
    tagline: 'Dezentraler Inhaltsknoten',
  },

  a11y: {
    homeLabel: 'IIEAO-Startseite',
    mainNav: 'Hauptnavigation',
    openMenu: 'Navigationsmenü öffnen',
    closeMenu: 'Navigationsmenü schließen',
    heroVisual: 'Produktoberfläche von IIEAO',
    dashboardAlt: 'IIEAO-Dashboard',
    languageSwitch: 'Sprache der Oberfläche ändern',
    languageMenuLabel: 'Sprache der Oberfläche',
  },

  nav: {
    why: 'Philosophie',
    how: 'Architektur',
    abilities: 'Funktionen',
    vision: 'Roadmap',
  },

  header: {
    download: 'Herunterladen',
    explore: 'Produkt entdecken',
  },

  mobileNav: {
    download: 'App herunterladen',
    repo: 'Quellcode',
  },

  hero: {
    eyebrow: 'LOCAL-FIRST · CONTENT NODE',
    titleLine1: 'Bauen Sie Ihre persönliche',
    titleLine2: 'Infrastruktur für Datensouveränität.',
    lead: 'IIEAO bündelt verstreute Speicher- und Übertragungsprotokolle in einem einzigen lokalen Inhaltsknoten. Content-Adressierung, verifizierbare Übertragung und Multiprotokoll-Routing geben Kontrolle und Nachvollziehbarkeit zurück in Ihre Hände.',
    download: 'App herunterladen',
    architecture: 'Architektur ansehen',
    repo: 'Quellcode',
    proofs: [
      'Local-First-Architektur',
      'Verifizierbare Übertragung',
      'IPFS-kompatibles Ökosystem',
    ],
    windowTitle: 'IIEAO · LOCAL NODE',
    dashboardAlt: 'IIEAO-Dashboard',
    statusTitle: 'Knoten läuft',
    statusSub: 'Übertragungsweg aufgebaut',
    scroll: 'SCROLL TO DISCOVER',
  },

  why: {
    kicker: 'DIE HERAUSFORDERUNG',
    titleLine1: 'Wenn Ihre Daten anderswo gehostet werden,',
    titleLine2: 'was verlieren Sie dabei?',
    lead: 'Beim klassischen Cloud-Speicher endet Ihre Kontrolle über die Daten mit dem Upload. IIEAO baut dieses Modell um, damit die Datensouveränität zum Nutzer zurückkehrt.',
    items: [
      {
        n: '01',
        title: 'Ein durchgängig nachvollziehbarer Übertragungsweg',
        text: 'Jede Datenbewegung hinterlässt eine klare Spur – von der lokalen Kopie bis zum Knotenzustand – damit Inhaltsflüsse transparent und kontrollierbar bleiben.',
      },
      {
        n: '02',
        title: 'Kryptografische Integritätsprüfung',
        text: 'Content-Adressierung und Hash-Verifikation stellen sicher, dass empfangene Daten bitgenau mit der Quelle übereinstimmen.',
      },
      {
        n: '03',
        title: 'Fehlertoleranz und Wiederherstellung durch Architektur',
        text: 'Mehrfachreplikate, inkrementelle Sicherungen und verifizierbare Wiederherstellung bilden einen vollständigen Rahmen für den Datenlebenszyklus.',
      },
    ],
    manifesto: {
      lead: 'Echte',
      strong: 'Datenhoheit',
      text: ' bedeutet mehr, als eine Datei herunterladen zu können.\nSie bedeutet, sie nachzuvollziehen, zu prüfen\nund im Ernstfall vollständig wiederherzustellen.',
      signature: 'IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY',
    },
  },

  how: {
    kicker: 'TECHNISCHE ARCHITEKTUR',
    title: 'Eine absichtsgesteuerte Routing-Schicht.',
    lead: 'IIEAO kapselt die Komplexität der Protokolle im Routing-Motor und bietet Nutzern eine semantische Übertragungsschnittstelle.',
    source: { title: 'Inhaltsquelle', sub: 'Dateien · Ordner · Datenströme' },
    core: { title: 'IIEAO', sub: 'Protokoll-Routing-Motor' },
    delivery: { title: 'Verifizierbare Auslieferung', sub: 'Übertragung · Speicherung · Wiederherstellung' },
    protocols: [
      {
        role: 'Direkte Peer-to-Peer-Verbindung',
        desc: 'NAT-Traversal und Relay-Mechanismen finden den besten Weg zwischen Geräten.',
      },
      {
        role: 'Verteilte fragmentierte Übertragung',
        desc: 'Große Dateien werden in Blöcke zerlegt, die parallel aus mehreren Quellen übertragen werden.',
      },
      {
        role: 'Verifizierbare Bereichswiederherstellung',
        desc: 'Ein inkrementeller Mechanismus auf Basis von Merkle-Bäumen rekonstruiert fehlende Datensegmente präzise.',
      },
      {
        role: 'Interoperabilitätsschicht des Ökosystems',
        desc: 'Kompatibel mit dem IPFS-Protokollstapel und damit an das dezentrale Speicher-Ökosystem angebunden.',
      },
    ],
    status: 'INTEGRATED',
    human: {
      userLabel: 'Nutzerabsicht',
      userQuote: '„Diese Datei sicher an den Zielknoten übertragen“',
      systemLabel: 'Systemausführung',
      systemText: 'Pfadfindung · Protokollwahl · Integritätsprüfung · Statussynchronisation',
    },
  },

  abilities: {
    kicker: 'KERN-FUNKTIONEN',
    titleLine1: 'Systematische Verwaltung über den',
    titleLine2: 'gesamten Lebenszyklus der Inhalte.',
    lead: 'Von der Erzeugung von Inhaltskennungen über die Übertragung zwischen Knoten bis zur Integritätsprüfung und Replikatverwaltung liefert IIEAO eine vollständige Datenverwaltungsinfrastruktur.',
    chapters: [
      {
        tag: '01 · INHALTSHOHEIT',
        title: 'Sie wissen genau, was Ihnen gehört.',
        text: 'IIEAO gibt jeder Datei eine eindeutige inhaltsadressierte Kennung (CID) und setzt auf eine Local-First-Architektur. Replikatverteilung, Speicherbelegung und Zustand sind jederzeit abfragbar – die Inhalte bleiben wirklich in Ihrer Hand.',
        alt: 'Datei- und Inhaltsverwaltung von IIEAO',
        notes: ['Inhaltsadressierte Kennung', 'Local-First-Architektur', 'Transparente Replikatverwaltung'],
      },
      {
        tag: '02 · VERIFIZIERTE AUSLIEFERUNG',
        title: 'Ein Übertragungsprotokoll, das Sie prüfen können.',
        text: 'Beim Erzeugen verschlüsselter Freigabenachweise ergänzt das System Inhalts-Hash, Versionsinformationen und Netzwerktopologie. Vor der Annahme kann der Empfänger die Herkunft prüfen, die Integrität vorab kontrollieren und den verfügbaren Speicher einschätzen – kritische Daten verdienen Zuverlässigkeit auf Ingenieursniveau.',
        alt: 'Sende- und Empfangsoberfläche von IIEAO',
        notes: ['Verschlüsselte Freigabenachweise', 'Integritäts-Vorprüfung', 'Hash-Verifikation'],
      },
      {
        tag: '03 · VIELE WEGE, EIN ZIEL',
        title: 'Intelligentes Routing, unsichtbare Protokolle.',
        text: 'Sie nennen nur die Absicht; IIEAO wählt anhand von Netzwerktopologie, Inhaltsgröße und Knotenzustand die beste Protokollkombination: direkte Peer-Verbindung, Fragmentierung aus mehreren Quellen, Veröffentlichung über ein IPFS-Gateway oder verifizierbare Bereichswiederherstellung. Die Komplexität übernimmt das System.',
        alt: 'Swarm-Oberfläche für Mehrquellen-Übertragung von IIEAO',
        notes: ['Adaptives Routing', 'Protokollübergreifende Kombination', 'Beobachtbarer Übertragungsstatus'],
      },
      {
        tag: '04 · WIEDERHERSTELLBAR PER DESIGN',
        title: 'Datenresilienz von Anfang an.',
        text: 'Sicherung ist kein Notbehelf, sondern eine eingebaute Fähigkeit des Systems. Verschlüsselter privater Bereich, inkrementelle Snapshots, Merkle-Baum-Verifikation und Replikatrichtlinien bilden eine vollständige Resilienzarchitektur – wichtige Inhalte haben so immer einen nachvollziehbaren Rückweg.',
        alt: 'Sicherungs- und Speicherverwaltung von IIEAO',
        notes: ['Ende-zu-Ende-Verschlüsselung', 'Inkrementelle Snapshots', 'Replikatrichtlinien'],
      },
    ],
  },

  people: {
    kicker: 'FÜR ALLE',
    titleLine1: 'Infrastruktur auf Profi-Niveau,',
    titleLine2: 'Bedienung auf Alltagsniveau.',
    items: [
      {
        label: 'Kreative',
        title: 'Bauen Sie eine verifizierbare Herkunftskette für Ihre Werke auf.',
        text: 'Verwalten Sie Ausgangsmaterial, verteilen Sie fertige Fassungen und behalten Sie Inhaltskennungen und Versionshistorie.',
      },
      {
        label: 'Teams',
        title: 'Sprengen Sie die Bandbreitengrenze großer Dateien.',
        text: 'Mehrquellen-Zusammenarbeit und direkte Peer-Verbindungen übertragen auch in komplexen Netzwerken effizient.',
      },
      {
        label: 'Einzelpersonen',
        title: 'Bauen Sie Ihr privates System für Datenresilienz auf.',
        text: 'Ende-zu-Ende-Verschlüsselung, inkrementelle Sicherung und verifizierbare Wiederherstellung bilden einen vollständigen Schutzplan.',
      },
      {
        label: 'Protokollentwickler',
        title: 'Ein einheitlicher Zugang zu dezentralen Protokollen.',
        text: 'Iroh, Swarm, AVRS und IPFS hinter einer einzigen Oberfläche integriert.',
      },
    ],
  },

  proof: {
    kicker: 'TRANSPARENZ PER DESIGN',
    titleLine1: 'Beobachtbarkeit ist',
    titleLine2: 'die Grundlage der Zuverlässigkeit.',
    lead: 'Knotenzustand, Netzwerktopologie, Replikatverteilung, Übertragungsfortschritt und Veröffentlichungsstatus werden strukturiert dargestellt. Transparenz ist selbst eine Dimension von Sicherheit.',
    points: ['Lokale Sicherheitsgrenze', 'Live-Telemetrie der Knoten', 'Strukturierte Speicher-Metadaten'],
    imageAlt: 'Lokale Übertragungsoberfläche von IIEAO',
    miniCard: {
      title: 'Iroh-Transportschicht',
      sub: 'Direkt zuerst · Relay erreichbar',
      status: 'Läuft',
    },
  },

  vision: {
    kicker: 'ROADMAP',
    titleLine1: 'Vom persönlichen Knoten',
    titleLine2: 'zum persönlichen Souveränitätsnetz.',
    lead: 'Die langfristige Vision von IIEAO ist ein dezentrales Inhaltsnetz aus souveränen Nutzerknoten, in dem Dateneigentum, Portabilität und Interoperabilität zu den eingebauten Eigenschaften der Infrastruktur gehören.',
    items: [
      {
        label: 'Aktuelle Phase',
        title: 'Ein einheitlicher lokaler Inhaltsknoten',
        text: 'Multiprotokoll-Übertragung, inhaltsadressierter Speicher, verifizierbare Wiederherstellung und Replikatverwaltung in einer Desktop-App.',
      },
      {
        label: 'Nächster Meilenstein',
        title: 'Ein vertrauenswürdiges Inhaltsnetz über Geräte hinweg',
        text: 'Verschlüsselte Kanäle und Vertrauensmechanismen zwischen Geräten lassen Inhalte reibungslos durch Ihr persönliches Gerätenetz fließen.',
      },
      {
        label: 'Langfristige Vision',
        title: 'Dateninfrastruktur in Nutzerhand',
        text: 'Übertragbare Identität, übertragbare Inhalte, nachvollziehbare Historie – Datensouveränität gehört wirklich denen, die sie erschaffen.',
      },
    ],
  },

  closing: {
    kicker: 'LOCAL-FIRST · VERIFIZIERBAR · SOUVERÄN',
    titleLine1: 'Die nächste Generation der Internet-Infrastruktur',
    titleLine2: 'beginnt mit dem Neuaufbau der Datensouveränität.',
    lead: 'Bauen Sie noch heute Ihren eigenen dezentralen Inhaltsknoten und behalten Sie Ihre Daten in der eigenen Hand.',
    download: 'App herunterladen',
    explore: 'IIEAO entdecken',
    backToTop: 'Nach oben',
  },

  footer: {
    description:
      'Entworfen für Dateneigentum, Nachvollziehbarkeit von Inhalten und langfristige Verfügbarkeit.',
    copyright: '© 2025 IIEAO. Infrastruktur für Datensouveränität.',
  },

  downloads: {
    title: 'IIEAO-Desktop-App herunterladen',
    desc: (version: string) =>
      `Wählen Sie Ihr System und laden Sie die neueste Version v${version}. Die Installationspakete werden direkt über Cloudflare R2 ausgeliefert.`,
    close: 'Downloadbereich schließen',
    groupCount: (count: number) => `${count} Installationspaket${count === 1 ? '' : 'e'}`,
    recommended: 'Empfohlen',
    action: 'Herunterladen',
    footNote: 'Direktlinks ohne Zwischenstation',
    repoLink: 'Quellcode ansehen',
    targets: {
      'windows-setup': {
        title: 'Windows-Installationsprogramm',
        note: 'x64-System · Assistent installiert und legt Verknüpfungen automatisch an',
      },
      'windows-msi': {
        title: 'Windows-Paket',
        note: 'x64-System · Geeignet für Massen- und unbeaufsichtigte Installationen',
      },
      'macos-dmg': {
        title: 'macOS-Datenträgerabbild',
        note: 'Intel-Chip · Zum Installieren in „Programme“ ziehen',
      },
    },
  },
} satisfies Dictionary;

export default de;
