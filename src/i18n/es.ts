export const es = {
  lang: 'es',
  meta: {
    title: 'KovaKey: tus contraseñas, en tu nube',
    description:
      'Gestor de contraseñas local-first y de conocimiento cero. Tu bóveda se cifra en tu dispositivo y se sincroniza con tu propia nube. KovaKey no tiene servidores.',
  },
  nav: {
    how: 'Cómo funciona',
    features: 'Funciones',
    security: 'Seguridad',
    pricing: 'Precios',
    faq: 'Preguntas',
    cta: 'Avísame del lanzamiento',
    menu: 'Menú',
    switchLabel: 'English',
    switchTo: '/',
  },
  hero: {
    title: 'Tus contraseñas viven en tu nube. No en la nuestra.',
    lead: 'KovaKey cifra tu bóveda en tu dispositivo y la sincroniza con tu propio Google Drive, iCloud o OneDrive. No tenemos servidores, así que no guardamos nada que alguien pueda robarnos.',
    primary: 'Avísame del lanzamiento',
    secondary: 'Ver cómo funciona',
    note: 'En desarrollo. Primero para iPhone y Mac.',
  },
  demo: {
    deviceLabel: 'En tu dispositivo',
    site: 'Sitio',
    user: 'Usuario',
    password: 'Contraseña',
    passwordHint: 'Escribe aquí y mira cómo cambia el archivo',
    userValue: 'ana@correo.com',
    passwordValue: 'caballo-correcto-grapa-9',
    step: 'Cifrado AES-256-GCM en tu navegador',
    cloudLabel: 'Lo que recibe tu nube',
    bytes: 'bytes',
    caption:
      'Demo real: esta página cifra el texto con una clave temporal y nada sale de tu navegador. En la app, la clave nace de tu contraseña maestra con Argon2id.',
  },
  absent: {
    title: 'Lo que KovaKey no tiene',
    items: [
      {
        title: 'Servidores propios',
        text: 'No existe una base de datos central con las bóvedas de todos. Cada bóveda es un archivo que guardas tú.',
      },
      {
        title: 'Tu correo',
        text: 'No creas una cuenta con nosotros. No pedimos correo, teléfono ni nombre para usar la app.',
      },
      {
        title: 'Telemetría',
        text: 'La app no incluye analítica, rastreadores ni reportes de fallos que salgan de tu dispositivo.',
      },
    ],
  },
  how: {
    title: 'Tres pasos y la bóveda es tuya',
    steps: [
      {
        title: 'Crea tu bóveda',
        text: 'Eliges una contraseña maestra. KovaKey genera una clave de recuperación para que la guardes fuera de línea, con un kit en PDF para imprimir.',
      },
      {
        title: 'Elige dónde vive',
        text: 'Conectas tu propia nube. KovaKey sube un archivo .vault ya cifrado: tu proveedor almacena bytes que no puede leer.',
      },
      {
        title: 'Ábrela en todos tus dispositivos',
        text: 'Desbloqueas con Face ID, Touch ID o huella. Si editas en dos dispositivos a la vez, los cambios se combinan elemento por elemento, sin pisarse.',
      },
    ],
  },
  features: {
    title: 'Todo lo que esperas de un gestor de contraseñas',
    lead: 'Y varias cosas que normalmente exigen confiar en el servidor de otro.',
    autofill: {
      title: 'Autocompletado nativo y passkeys',
      text: 'KovaKey se integra con el autocompletado del sistema en iPhone y Mac. Rellena usuarios, contraseñas y códigos, guarda los inicios de sesión nuevos y almacena tus passkeys.',
      fieldUser: 'Usuario',
      fieldPass: 'Contraseña',
      suggestion: 'Rellenar con KovaKey',
    },
    generator: {
      title: 'Generador de contraseñas',
      text: 'De 8 a 128 caracteres, o frases de palabras al azar. La fuerza se mide en bits de entropía.',
      length: 'Largo',
      symbols: 'Símbolos',
      numbers: 'Números',
      regenerate: 'Generar otra',
      copy: 'Copiar',
      copied: 'Copiada',
      bits: 'bits',
      levels: ['Muy débil', 'Débil', 'Aceptable', 'Fuerte', 'Muy fuerte'],
    },
    list: [
      {
        icon: 'totp',
        title: 'Códigos de un solo uso',
        text: 'Escanea el QR y KovaKey genera tus códigos 2FA junto a cada inicio de sesión.',
      },
      {
        icon: 'audit',
        title: 'Auditoría de seguridad',
        text: 'Detecta contraseñas débiles, repetidas, antiguas o sin 2FA. Todo se calcula en tu dispositivo.',
      },
      {
        icon: 'vaults',
        title: 'Varias bóvedas',
        text: 'Personal, trabajo, clientes. Cada una con su color, y cambias entre ellas al instante.',
      },
      {
        icon: 'share',
        title: 'Bóvedas compartidas',
        text: 'Comparte una bóveda con tu familia o tu equipo desde tu Google Drive, con su propia contraseña.',
      },
      {
        icon: 'dev',
        title: 'Hecho para desarrolladores',
        text: 'Plantillas para bases de datos, claves SSH, API keys y archivos .env, y notas con bloques de código.',
      },
      {
        icon: 'copy',
        title: 'Copia con un toque',
        text: 'Tocas un campo y queda copiado. El portapapeles se limpia solo después de unos segundos.',
      },
      {
        icon: 'categories',
        title: 'Categorías a tu manera',
        text: 'Tarjetas, identidad, viajes, Wi-Fi, licencias. Define tus propios campos, colores e íconos.',
      },
      {
        icon: 'import',
        title: 'Importa y exporta',
        text: 'Trae tu bóveda desde Enpass con un asistente guiado. Exporta cuando quieras, cifrado o en JSON y CSV.',
      },
      {
        icon: 'trash',
        title: 'Papelera e historial',
        text: 'Lo que borras se puede restaurar durante 30 días, y cada contraseña conserva sus versiones anteriores.',
      },
    ],
  },
  security: {
    title: 'La seguridad, explicada sin letra chica',
    lead: 'Usamos primitivas estándar y auditadas. No inventamos criptografía.',
    chain: [
      { name: 'Contraseña maestra', note: 'Solo existe en tu cabeza' },
      { name: 'Argon2id', note: 'La convierte en una clave lenta de adivinar' },
      { name: 'Clave de datos', note: 'Aleatoria, única por bóveda' },
      { name: 'Archivo .vault', note: 'Cifrado con AES-256-GCM' },
    ],
    chainLabel: 'Cómo se protege tu bóveda',
    facts: [
      {
        title: 'Clave de recuperación, sin correo',
        text: 'Si olvidas la contraseña maestra, tu clave de recuperación abre la bóveda y la app te pide crear una contraseña nueva. No hay recuperación por correo porque eso exigiría un servidor que sepa quién eres.',
      },
      {
        title: 'La biometría no guarda tu contraseña',
        text: 'Face ID, Touch ID y la huella solo liberan una clave envuelta que vive en el llavero seguro del dispositivo.',
      },
      {
        title: 'Se bloquea sola',
        text: 'Por inactividad, al pasar a segundo plano o al bloquear la pantalla. Al bloquearse, las claves se borran de la memoria.',
      },
      {
        title: 'Una sola conexión opcional',
        text: 'La revisión de filtraciones está apagada por defecto. Si la activas, solo salen los primeros 5 caracteres de un hash, nunca la contraseña.',
      },
    ],
    limitsTitle: 'Lo que debes saber antes de confiar en nosotros',
    limits: [
      'Si pierdes la contraseña maestra y también la clave de recuperación, nadie puede abrir tu bóveda. Nosotros tampoco.',
      'Para quitarle el acceso a alguien de una bóveda compartida hay que cambiar su contraseña.',
      'La seguridad de una bóveda compartida depende de lo fuerte que sea esa contraseña. La app te avisa si es débil.',
    ],
  },
  compare: {
    title: 'En qué se diferencia de un gestor en la nube',
    colTopic: 'Pregunta',
    colKova: 'KovaKey',
    colOther: 'Gestor en la nube típico',
    rows: [
      {
        topic: '¿Dónde está tu bóveda?',
        kova: 'En tu dispositivo y en la nube que tú elijas',
        other: 'En los servidores del proveedor',
      },
      {
        topic: '¿Qué gana quien ataque a la empresa?',
        kova: 'Nada: no guardamos bóvedas',
        other: 'Las bóvedas cifradas de todos sus usuarios',
      },
      {
        topic: '¿Necesitas una cuenta?',
        kova: 'No',
        other: 'Sí, con correo',
      },
      {
        topic: '¿Y si la empresa cierra?',
        kova: 'Tu archivo sigue en tu nube y puedes exportarlo',
        other: 'Dependes de que te dejen exportar a tiempo',
      },
      {
        topic: '¿Recuperación de acceso?',
        kova: 'Clave de recuperación que guardas tú',
        other: 'Normalmente por correo',
      },
    ],
  },
  pricing: {
    title: 'Un precio justo, porque no mantenemos servidores',
    lead: 'Empieza gratis. Paga solo si quieres sincronizar y compartir, por suscripción o una sola vez.',
    monthly: 'Mensual',
    annual: 'Anual',
    billingLabel: 'Forma de pago',
    free: {
      name: 'Gratis',
      price: 'USD 0',
      period: 'para siempre',
      text: 'El gestor completo en un dispositivo.',
      items: [
        'Una bóveda en un dispositivo',
        'Autocompletado, passkeys y códigos 2FA',
        'Generador de contraseñas',
        'Importar y exportar tus datos',
      ],
    },
    premium: {
      name: 'Premium',
      monthlyPrice: 'USD 1,99',
      monthlyPeriod: 'al mes',
      monthlyNote: 'Cancela cuando quieras.',
      annualPrice: 'USD 17,99',
      annualPeriod: 'al año',
      annualNote: 'Equivale a USD 1,50 al mes: 25 % menos que el plan mensual.',
      text: 'Tu bóveda en todos tus dispositivos.',
      items: [
        'Todo lo del plan gratis',
        'Sincronización con tu propia nube',
        'Dispositivos ilimitados',
        'Varias bóvedas y bóvedas compartidas',
        'Auditoría de seguridad',
      ],
    },
    lifetime: {
      name: 'De por vida',
      price: 'USD 59,99',
      period: 'pago único',
      text: 'Premium para siempre, sin suscripción.',
      founderTag: 'Precio de fundador',
      founderPrice: 'USD 39,99',
      founderNote: 'Para los primeros compradores en el lanzamiento. Después, USD 59,99.',
      items: ['Todo lo de Premium', 'Un solo pago', 'Incluye las actualizaciones futuras'],
    },
    notes: [
      'Los precios se ajustan por país en la tienda de aplicaciones, así que en tu moneda puede ser menos.',
      'Precios previstos para el lanzamiento. Pueden cambiar antes de esa fecha.',
    ],
  },
  platforms: {
    title: 'Dónde estará disponible',
    lead: 'KovaKey todavía está en desarrollo. Este es el orden en que llegará.',
    items: [
      { name: 'iPhone y Mac', status: 'En desarrollo', text: 'App nativa con autocompletado del sistema y passkeys.' },
      { name: 'Windows y Chrome', status: 'Después', text: 'App de escritorio y extensión para el navegador.' },
      { name: 'Android', status: 'Más adelante', text: 'App nativa con autocompletado y desbloqueo por huella.' },
    ],
    sync: 'Sincronización: Google Drive primero. iCloud, OneDrive y WebDAV están planificados.',
    langs: 'La app está en español e inglés, con temas claro, oscuro y azul oscuro.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué pasa si olvido mi contraseña maestra?',
        a: 'Abres la bóveda con tu clave de recuperación y la app te pide crear una contraseña maestra nueva. Después genera una clave de recuperación nueva, porque la anterior ya se usó. Si pierdes las dos, la bóveda no se puede abrir.',
      },
      {
        q: '¿Mi proveedor de nube puede leer mis contraseñas?',
        a: 'No. El archivo se cifra en tu dispositivo antes de subirse. Google, Apple o Microsoft solo almacenan bytes cifrados.',
      },
      {
        q: '¿Qué pasa si KovaKey deja de existir?',
        a: 'Tu bóveda es un archivo que está en tu dispositivo y en tu nube, no en un servicio nuestro. Además puedes exportar tus datos a JSON o CSV cuando quieras.',
      },
      {
        q: '¿Cómo comparto contraseñas con otra persona?',
        a: 'Creas una bóveda compartida con su propia contraseña y le das acceso al archivo desde la app. La contraseña se la entregas tú por otro canal, en persona o por una llamada. Nunca viaja por la app ni por correo.',
      },
      {
        q: '¿La app se conecta a internet?',
        a: 'Solo a la nube que tú configures, para sincronizar el archivo cifrado. La única excepción es la revisión de filtraciones, que es opcional y viene apagada.',
      },
      {
        q: '¿Puedo traer mis contraseñas desde otro gestor?',
        a: 'Hoy puedes importar desde Enpass. Los importadores para Bitwarden, 1Password y CSV genérico vienen después.',
      },
    ],
  },
  closing: {
    title: 'Guarda tus llaves tú.',
    text: 'KovaKey llegará primero a iPhone y Mac. Escríbenos y te avisamos el día del lanzamiento.',
    cta: 'Avísame del lanzamiento',
  },
  footer: {
    tagline: 'Gestor de contraseñas local-first y de conocimiento cero.',
    noTracking: 'Este sitio no usa cookies ni rastreadores.',
    rights: 'KovaKey',
    privacy: 'Política de privacidad',
    privacyHref: '/es/privacidad',
  },
}

export type Content = typeof es
