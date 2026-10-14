import type { Dictionary } from './types';

/** Español */
const es = {
  meta: {
    title: 'IIEAO — Un nodo de contenido personal descentralizado',
    description:
      'IIEAO es un nodo de contenido local que almacena, envía, verifica y recupera tus archivos personales de forma segura, con compatibilidad con IPFS.',
    ogDescription: 'Tu contenido, tu nodo: almacenamiento personal descentralizado.',
    twitterDescription: 'Almacenamiento personal descentralizado.',
  },

  brand: {
    tagline: 'Nodo de contenido descentralizado',
  },

  a11y: {
    homeLabel: 'Inicio de IIEAO',
    mainNav: 'Navegación principal',
    openMenu: 'Abrir el menú de navegación',
    closeMenu: 'Cerrar el menú de navegación',
    heroVisual: 'Interfaz del producto IIEAO',
    dashboardAlt: 'Panel de control de IIEAO',
    languageSwitch: 'Cambiar el idioma de la interfaz',
    languageMenuLabel: 'Idioma de la interfaz',
  },

  nav: {
    why: 'Filosofía',
    how: 'Arquitectura',
    abilities: 'Capacidades',
    vision: 'Hoja de ruta',
  },

  header: {
    download: 'Descargar',
    explore: 'Explorar el producto',
  },

  mobileNav: {
    download: 'Descargar la app',
    repo: 'Código abierto',
  },

  hero: {
    eyebrow: 'LOCAL-FIRST · CONTENT NODE',
    titleLine1: 'Construye tu',
    titleLine2: 'infraestructura de soberanía de datos.',
    lead: 'IIEAO integra protocolos dispersos de almacenamiento y transferencia en un único nodo de contenido local. El direccionamiento por contenido, la transferencia verificable y el enrutado multiprotocolo devuelven el control y la trazabilidad a tus manos.',
    download: 'Descargar la app',
    architecture: 'Ver la arquitectura',
    repo: 'Código abierto',
    proofs: [
      'Arquitectura local-first',
      'Transferencia verificable',
      'Ecosistema compatible con IPFS',
    ],
    windowTitle: 'IIEAO · LOCAL NODE',
    dashboardAlt: 'Panel de control de IIEAO',
    statusTitle: 'Nodo en ejecución',
    statusSub: 'Ruta de transferencia establecida',
    scroll: 'SCROLL TO DISCOVER',
  },

  why: {
    kicker: 'EL DESAFÍO',
    titleLine1: 'Cuando tus datos se alojan en otro lugar,',
    titleLine2: '¿qué pierdes?',
    lead: 'Con el almacenamiento en la nube convencional, tu control sobre los datos termina en el momento de subirlos. IIEAO reconstruye ese modelo para devolver la soberanía de los datos al usuario.',
    items: [
      {
        n: '01',
        title: 'Una ruta de transferencia trazable de principio a fin',
        text: 'Cada movimiento de datos deja un rastro claro — desde la réplica local hasta el estado del nodo — para que el flujo del contenido sea transparente y controlable.',
      },
      {
        n: '02',
        title: 'Verificación de integridad criptográfica',
        text: 'El direccionamiento por contenido y la verificación por hash garantizan que los datos recibidos sean idénticos byte a byte a los del origen.',
      },
      {
        n: '03',
        title: 'Tolerancia a fallos y recuperación por arquitectura',
        text: 'La gobernanza de múltiples réplicas, las copias incrementales y la recuperación verificable forman un marco completo del ciclo de vida de los datos.',
      },
    ],
    manifesto: {
      lead: 'La verdadera',
      strong: 'propiedad de los datos',
      text: ' va más allá de poder descargarlos.\nEs poder rastrearlos, verificarlos\ny restaurarlos por completo cuando importa.',
      signature: 'IIEAO · INFRASTRUCTURE FOR DATA SOVEREIGNTY',
    },
  },

  how: {
    kicker: 'ARQUITECTURA TÉCNICA',
    title: 'Una capa de enrutado guiada por intenciones.',
    lead: 'IIEAO encapsula la complejidad de los protocolos en su motor de enrutado y expone a los usuarios una interfaz de transferencia semántica.',
    source: { title: 'Origen del contenido', sub: 'Archivos · Carpetas · Flujos' },
    core: { title: 'IIEAO', sub: 'Motor de enrutado de protocolos' },
    delivery: { title: 'Entrega verificable', sub: 'Transferencia · Almacenamiento · Recuperación' },
    protocols: [
      {
        role: 'Conexión directa entre pares',
        desc: 'El traspaso de NAT y los mecanismos de relé establecen la mejor ruta entre dispositivos.',
      },
      {
        role: 'Transferencia fragmentada distribuida',
        desc: 'Los archivos grandes se dividen en bloques que viajan en paralelo desde varias fuentes.',
      },
      {
        role: 'Recuperación verificable por rangos',
        desc: 'Un mecanismo incremental basado en árboles de Merkle reconstruye con precisión los segmentos que faltan.',
      },
      {
        role: 'Capa de interoperabilidad del ecosistema',
        desc: 'Compatible con la pila de protocolos IPFS, conecta el ecosistema de almacenamiento descentralizado.',
      },
    ],
    status: 'INTEGRATED',
    human: {
      userLabel: 'Intención del usuario',
      userQuote: '«Transfiere este archivo de forma segura al nodo de destino»',
      systemLabel: 'Ejecución del sistema',
      systemText: 'Descubrimiento de rutas · Selección de protocolo · Comprobación de integridad · Sincronización de estado',
    },
  },

  abilities: {
    kicker: 'CAPACIDADES PRINCIPALES',
    titleLine1: 'Gestión sistemática de todo',
    titleLine2: 'el ciclo de vida del contenido.',
    lead: 'Desde la generación de identificadores de contenido hasta la transferencia entre nodos, desde la verificación de integridad hasta la gobernanza de réplicas, IIEAO ofrece una infraestructura completa de gestión de datos.',
    chapters: [
      {
        tag: '01 · PROPIEDAD DEL CONTENIDO',
        title: 'Sabes exactamente qué te pertenece.',
        text: 'IIEAO asigna a cada archivo un identificador único por contenido (CID) y construye una arquitectura local-first. La distribución de réplicas, el espacio ocupado y el estado de salud se consultan en tiempo real, para que el contenido esté de verdad en tus manos.',
        alt: 'Interfaz de archivos y gestión de contenido de IIEAO',
        notes: ['Identidad por contenido', 'Arquitectura local-first', 'Gestión transparente de réplicas'],
      },
      {
        tag: '02 · ENTREGA VERIFICADA',
        title: 'Un protocolo de transferencia verificable.',
        text: 'Al generar credenciales de compartición cifradas, el sistema incluye el hash del contenido, la versión y la topología de red. Antes de aceptar la transferencia, el receptor puede verificar el origen, comprobar la integridad y evaluar el espacio disponible: los datos críticos exigen fiabilidad de nivel ingeniería.',
        alt: 'Interfaz de envío y recepción de IIEAO',
        notes: ['Credenciales de compartición cifradas', 'Comprobación previa de integridad', 'Verificación por hash'],
      },
      {
        tag: '03 · MUCHOS CAMINOS, UNA INTENCIÓN',
        title: 'Enrutado inteligente, protocolos invisibles.',
        text: 'Tú solo declaras la intención; IIEAO elige la mejor combinación de protocolos según la topología, el tamaño del contenido y el estado de los nodos: conexión directa entre pares, fragmentación multifuente, publicación mediante puerta de enlace IPFS o recuperación verificable por rangos. La complejidad la absorbe el sistema.',
        alt: 'Interfaz de transferencia multifuente Swarm de IIEAO',
        notes: ['Enrutado adaptativo', 'Fusión multiprotocolo', 'Estado de transferencia observable'],
      },
      {
        tag: '04 · RECUPERABLE POR DISEÑO',
        title: 'Resiliencia de datos desde el diseño.',
        text: 'La copia de seguridad no es un remedio a posteriori: es una capacidad intrínseca del sistema. El espacio privado cifrado, las instantáneas incrementales, la verificación con árboles de Merkle y la gobernanza de réplicas forman una arquitectura de resiliencia completa, para que el contenido importante siempre tenga un camino de vuelta trazable.',
        alt: 'Interfaz de copias de seguridad y gobernanza de almacenamiento de IIEAO',
        notes: ['Cifrado de extremo a extremo', 'Instantáneas incrementales', 'Gobernanza de réplicas'],
      },
    ],
  },

  people: {
    kicker: 'PARA TODOS',
    titleLine1: 'Infraestructura de nivel profesional,',
    titleLine2: 'experiencia de nivel de consumo.',
    items: [
      {
        label: 'Creadores de contenido',
        title: 'Construye una cadena de procedencia verificable para tu obra.',
        text: 'Gestiona el material de origen, distribuye el resultado final y conserva los identificadores de contenido y el historial de versiones.',
      },
      {
        label: 'Equipos de colaboración',
        title: 'Supera el límite de ancho de banda de los archivos grandes.',
        text: 'La colaboración multifuente y las conexiones directas entre pares logran transferencias eficientes incluso en redes complejas.',
      },
      {
        label: 'Usuarios individuales',
        title: 'Crea tu propio sistema privado de resiliencia de datos.',
        text: 'El cifrado de extremo a extremo, la copia incremental y la recuperación verificable forman un plan de protección completo.',
      },
      {
        label: 'Desarrolladores de protocolos',
        title: 'Un único punto de acceso a los protocolos descentralizados.',
        text: 'Las pilas Iroh, Swarm, AVRS e IPFS integradas en una sola interfaz.',
      },
    ],
  },

  proof: {
    kicker: 'TRANSPARENCIA POR DISEÑO',
    titleLine1: 'La observabilidad es',
    titleLine2: 'la base de la fiabilidad.',
    lead: 'La salud de los nodos, la topología de red, la distribución de réplicas, el progreso de las transferencias y el estado de publicación se presentan de forma estructurada. La transparencia es, en sí misma, una dimensión de la seguridad.',
    points: ['Perímetro de seguridad local', 'Telemetría de nodos en vivo', 'Metadatos de almacenamiento estructurados'],
    imageAlt: 'Interfaz de transferencia local de IIEAO',
    miniCard: {
      title: 'Capa de transporte Iroh',
      sub: 'Directo primero · Relé accesible',
      status: 'En ejecución',
    },
  },

  vision: {
    kicker: 'HOJA DE RUTA',
    titleLine1: 'De un nodo personal',
    titleLine2: 'a una red personal de soberanía de datos.',
    lead: 'La visión a largo plazo de IIEAO es construir una red de contenido descentralizada formada por nodos soberanos de los usuarios, donde la propiedad de los datos, la portabilidad y la interoperabilidad sean propiedades intrínsecas de la infraestructura.',
    items: [
      {
        label: 'Etapa actual',
        title: 'Un nodo de contenido local unificado',
        text: 'Transferencia multiprotocolo, almacenamiento direccionado por contenido, recuperación verificable y gobernanza de réplicas en una sola aplicación de escritorio.',
      },
      {
        label: 'Hito siguiente',
        title: 'Una red de contenido de confianza entre dispositivos',
        text: 'Canales cifrados y mecanismos de confianza entre dispositivos permiten que el contenido fluya sin fricción por tu red personal.',
      },
      {
        label: 'Visión a largo plazo',
        title: 'Infraestructura de datos con soberanía del usuario',
        text: 'Identidad portátil, contenido portátil e historial trazable: la soberanía de los datos pertenece de verdad a quien los crea.',
      },
    ],
  },

  closing: {
    kicker: 'LOCAL-FIRST · VERIFICABLE · SOBERANO',
    titleLine1: 'La próxima generación de infraestructura de internet',
    titleLine2: 'empieza por reconstruir la soberanía de los datos.',
    lead: 'Empieza hoy a construir tu propio nodo de contenido descentralizado y mantén tus datos en tus manos.',
    download: 'Descargar la app',
    explore: 'Explorar IIEAO',
    backToTop: 'Volver arriba',
  },

  footer: {
    description:
      'Diseñado para la propiedad de los datos, la trazabilidad del contenido y el acceso a largo plazo.',
    copyright: '© 2025 IIEAO. Infraestructura para la soberanía de los datos.',
  },

  downloads: {
    title: 'Descarga la aplicación de escritorio de IIEAO',
    desc: (version: string) =>
      `Elige tu sistema y obtén la última versión, v${version}. Los instaladores se sirven directamente desde Cloudflare R2.`,
    close: 'Cerrar el panel de descargas',
    groupCount: (count: number) => `${count} ${count === 1 ? 'instalador' : 'instaladores'}`,
    recommended: 'Recomendado',
    action: 'Descargar',
    footNote: 'Enlaces directos, sin intermediarios',
    repoLink: 'Ver el código fuente',
    targets: {
      'windows-setup': {
        title: 'Instalador de Windows',
        note: 'Sistema x64 · Instalación guiada que crea accesos directos automáticamente',
      },
      'windows-msi': {
        title: 'Paquete de Windows',
        note: 'Sistema x64 · Adecuado para despliegues masivos e instalaciones silenciosas',
      },
      'macos-dmg': {
        title: 'Imagen de disco para macOS',
        note: 'Chip Intel · Arrástrala a «Aplicaciones» para instalarla',
      },
    },
  },
} satisfies Dictionary;

export default es;
