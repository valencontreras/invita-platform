import type { PhotoTone } from '@/components/landing/PhotoPlate'

/**
 * Landing page content — Spanish copy on purpose (see AGENTS.md › Conventions).
 * Edit text here, not inside `app/page.tsx`, so the owner can update wording
 * without touching layout code.
 */

/**
 * Hero mockup artwork — the sample invitation shown inside the browser frame.
 * Served straight from `public/`, like the collection photos, so replacing the
 * image never means editing `Hero.tsx`.
 */
export const heroMockupPhoto = {
  src: '/header.png',
  alt: 'Portátil abierto sobre un escritorio de madera con la invitación digital de Sofía y Mateo en pantalla',
} as const

export const navLinks = [
  { href: '#coleccion', label: 'Colección' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beneficios', label: 'Qué incluye' },
  { href: '#cotizar', label: 'Cotizar' },
] as const

/** Highlighted promises next to the quote form. */
export const quoteHighlights = [
  'Diseño y tipografía exclusiva, sin plantillas genéricas',
  'Dominio propio (sofia-y-mateo.com) incluido el primer año',
  'Panel privado de confirmaciones RSVP, exportable a Excel',
  'Ajustes de textos, horarios y fotos hasta el día de la boda',
] as const

/**
 * A photo served straight from `public/`, with its Spanish description.
 *
 * The `alt` lives here, beside the file it describes — never in the component —
 * so swapping a picture is a one-line edit in this module.
 */
export type SamplePhoto = {
  /** Path relative to `public/`, e.g. `/examples/camila-sebastian.jpg`. */
  src: string
  /** Spanish description for screen readers (and if the image fails to load). */
  alt: string
}

export type GalleryExample = {
  couple: string
  /**
   * Sample photo, served straight from `public/examples/`. Optional on purpose:
   * an example without photography yet falls back to the tonal `PhotoPlate`
   * instead of rendering an empty frame.
   */
  photo?: SamplePhoto
  /** Initials engraved on the tonal plate — only visible while `photo` is absent. */
  monogram: string
  style: string
  place: string
  music: string
  badge: string
  description: string
  tone: PhotoTone
  /**
   * Public slug of the invitation. Keep it as `null` until that invitation is
   * really published — the card then shows a "Próximamente" note instead of a
   * link that would land on a 404.
   */
  slug: string | null
}

export const galleryExamples: GalleryExample[] = [
  {
    couple: 'Camila & Sebastián',
    photo: {
      src: '/examples/camila-sebastian.jpg',
      alt: 'Novios sonrientes entre helechos de un invernadero, junto a su papelería botánica de boda',
    },
    monogram: 'C & S',
    style: 'Jardín secreto',
    place: 'Hacienda La Trinidad, Caracas',
    music: 'Ludovico Einaudi',
    badge: 'RSVP en vivo',
    description:
      'Paleta olivo y salvia, tipografía romana clásica e itinerario completo para una cena campestre al aire libre.',
    tone: 'olive',
    slug: null,
  },
  {
    couple: 'Valentina & Andrés',
    photo: {
      src: '/examples/valentina-diego.jpg',
      alt: 'Novios caminando por un salón de piedra con esculturas, junto a una invitación minimalista',
    },
    monogram: 'V & A',
    style: 'Elegancia minimal',
    place: 'Iglesia San Juan, Maracaibo',
    music: 'Max Richter',
    badge: 'Monograma a medida',
    description:
      'Composición sobria inspirada en catálogos de arte: monograma entrelazado, dress code riguroso y mapa con estacionamiento.',
    tone: 'linen',
    slug: null,
  },
  {
    couple: 'Luciana & Diego',
    photo: {
      src: '/examples/sofia-mateo.jpg',
      alt: 'Mesa larga de celebración en una terraza campestre al atardecer, con invitados brindando',
    },
    monogram: 'L & D',
    style: 'Destino costero',
    place: 'Club Puerto Azul, Naiguatá',
    music: 'Acoustic Romance',
    badge: 'Itinerario de 3 días',
    description:
      'Experiencia completa para boda destino: agenda de bienvenida, ceremonia al atardecer, cena marina y brunch de despedida.',
    tone: 'tuscany',
    slug: null,
  },
]

export type Testimonial = {
  quote: string
  couple: string
  /** Venue and year, e.g. "Boda en Caracas, 2025". */
  detail: string
}

/**
 * Real testimonials only.
 *
 * Intentionally empty: the section is not rendered at all until there is at
 * least one entry, so no invented social proof ever goes live. Uncomment the
 * example below to turn the section back on:
 *
 * export const testimonials: Testimonial[] = [
 *   {
 *     quote:
 *       'Le mandamos el link a 180 invitados y las confirmaciones llegaron sin perseguir a nadie.',
 *     couple: 'Camila & Sebastián',
 *     detail: 'Boda en Caracas, 2025',
 *   },
 * ]
 */
export const testimonials: Testimonial[] = []

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: '¿Cómo compartimos la invitación con los invitados?',
    answer:
      'Recibes un enlace web propio (por ejemplo, sofia-y-mateo.com) junto a un mensaje de cortesía ya redactado. Se envía por WhatsApp, lista de difusión o correo, y al tocarlo se abre al instante: tus invitados no descargan ninguna aplicación.',
  },
  {
    question: '¿Cuánto tarda la entrega?',
    answer:
      'Una vez que nos compartes tu información y tus fotografías, recibes la primera versión interactiva completa en menos de 72 horas hábiles para revisarla y pedir ajustes.',
  },
  {
    question: '¿Podemos cambiar horarios o locación más adelante?',
    answer:
      'Sí, y sin costo extra. A diferencia del papel impreso, tu invitación digital se actualiza en tiempo real: cualquier cambio de horario, indicación de estacionamiento o aviso de último minuto llega de inmediato a todos tus invitados.',
  },
  {
    question: '¿Cómo recibimos las confirmaciones?',
    answer:
      'Cuentas con un panel privado donde ves cada respuesta con nombre, asistencia, número de acompañantes y restricciones alimenticias. Puedes descargarlo para tu wedding planner o banquetero.',
  },
  {
    question: '¿Con cuánta anticipación conviene encargarla?',
    answer:
      'Lo ideal es un mes o dos antes de enviarla, para revisar textos y fotos con calma. Si tu boda está más cerca, escríbenos igual: te diremos con claridad si alcanzamos la fecha.',
  },
  {
    question: '¿Necesitamos saber de diseño o de tecnología?',
    answer:
      'Para nada. Tú nos envías la información y las fotos por WhatsApp o correo; del diseño, la música, los mapas y el formulario nos encargamos nosotros.',
  },
  {
    question: '¿Cómo se paga?',
    answer:
      'Te compartimos los precios y las formas de pago por WhatsApp según la fecha de tu boda y el alcance que buscas. Cotizar no te compromete a nada.',
  },
]

export type Step = {
  title: string
  description: string
}

/** The three steps from first message to live invitation. */
export const howItWorks: Step[] = [
  {
    title: 'Comparte tu historia y tu visión',
    description:
      'Responde un cuestionario breve o conversa con nosotros por WhatsApp: fotografías de tu sesión, la música que quieres escuchar, datos de la locación y la paleta que imaginas.',
  },
  {
    title: 'Diseñamos tu identidad a medida',
    description:
      'Maquetamos la tipografía, sincronizamos los mapas interactivos, programamos la cuenta regresiva y afinamos el formulario de confirmación.',
  },
  {
    title: 'Recibes tu invitación viva',
    description:
      'En menos de 72 horas hábiles recibes tu enlace con dominio propio, listo para enviar por WhatsApp, con las confirmaciones llegando a tu panel privado.',
  },
]

/**
 * Icon keys, not components: the copy stays free of presentation details and
 * `components/landing/icons.tsx` maps each key to its glyph.
 */
export type FeatureIcon = 'countdown' | 'rsvp' | 'map' | 'gallery' | 'music' | 'dress' | 'gift'

export type Feature = {
  icon: FeatureIcon
  title: string
  description: string
}

/**
 * Photo strip closing the "Galería editorial de la preboda" card
 * (`WhatsIncluded`), served straight from `public/pre-wedding/`.
 *
 * Order is meaningful: the thumbnails render left to right as listed, so keep
 * the sequence telling the story (couple, novia, alianzas).
 */
export const preWeddingPhotos: SamplePhoto[] = [
  {
    src: '/pre-wedding/foto-pre-boda-1.jpg',
    alt: 'Novios caminando de la mano por una calle empedrada de un pueblo italiano, entre macetas de flores y buganvillas',
  },
  {
    src: '/pre-wedding/foto-pre-boda-2.jpg',
    alt: 'Novia riendo a contraluz durante la hora dorada, con el ramo en las manos y el velo al viento frente a una casa de piedra',
  },
  {
    src: '/pre-wedding/foto-pre-boda-3.jpg',
    alt: 'Alianzas de boda sobre una hoja de helecho, en una mesa de madera rústica junto a la ventana',
  },
]

/** Every published invitation includes all of these. */
export const includedFeatures: Feature[] = [
  {
    icon: 'countdown',
    title: 'Cuenta regresiva viva',
    description:
      'Un contador en tiempo real mantiene la expectativa: cada invitado ve cuánto falta para el gran día.',
  },
  {
    icon: 'rsvp',
    title: 'Confirmaciones en vivo',
    description:
      'Cada respuesta llega a tu panel al instante, con número de acompañantes y restricciones alimenticias.',
  },
  {
    icon: 'map',
    title: 'Llegada en un toque',
    description:
      'Ceremonia y recepción con dirección y botón para abrir Google Maps o Waze, sin que nadie se pierda.',
  },
  {
    icon: 'gallery',
    title: 'Galería editorial de la preboda',
    description:
      'Sus fotografías favoritas, contando la historia desde cómo se conocieron, con carga optimizada para datos móviles.',
  },
  {
    icon: 'music',
    title: 'Música sutil y personalizada',
    description:
      'La melodía que ustedes elijan suena discretamente al abrir la invitación, con un control siempre visible para silenciarla.',
  },
  {
    icon: 'dress',
    title: 'Dress code con paleta visual',
    description:
      'Además del texto, muestras de color y referencias para que nadie llegue con la duda de cómo vestir.',
  },
  {
    icon: 'gift',
    title: 'Mesa de regalos y datos bancarios',
    description:
      'Varios destinos de regalo y los datos de la cuenta, con un clic para copiar y sin errores de dedo.',
  },
]

/** Closes the feature grid; keeps the "no technical jargon" rule. */
export const includedNote =
  'Todo se abre en el celular, sin descargar ninguna aplicación y sin que tus invitados tengan que crear una cuenta.'
