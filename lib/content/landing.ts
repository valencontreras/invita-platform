/*
 * Every word of Spanish copy on the landing page lives here, so texts can be
 * rewritten without touching the section components.
 *
 * The audience is always the couple, never a recruiter or another developer:
 * no technical vocabulary anywhere in these strings.
 */

export type GalleryExample = {
  couple: string;
  /** Long form of the date, shown under the couple names. */
  date: string;
  venue: string;
  /**
   * Public slug of the invitation. Keep it as `null` until that invitation is
   * really published — the card then shows a "Próximamente" note instead of a
   * link that would land on a 404.
   */
  slug: string | null;
};

export const galleryExamples: GalleryExample[] = [
  {
    couple: "Camila & Sebastián",
    date: "12 de septiembre",
    venue: "Hacienda La Trinidad, Caracas",
    slug: null,
  },
  {
    couple: "Valentina & Andrés",
    date: "7 de febrero",
    venue: "Iglesia San Juan, Maracaibo",
    slug: null,
  },
  {
    couple: "Luciana & Diego",
    date: "28 de noviembre",
    venue: "Club Puerto Azul, Naiguatá",
    slug: null,
  },
];

export type Step = {
  title: string;
  description: string;
};

export const howItWorks: Step[] = [
  {
    title: "Nos cuentas tu historia",
    description:
      "Tus nombres, la fecha, los lugares, las fotos y esos detalles que hacen tu boda distinta a todas.",
  },
  {
    title: "Diseñamos tu invitación",
    description:
      "Armamos la página, afinamos los textos contigo y la revisamos hasta que digas que sí.",
  },
  {
    title: "Compartes tu link",
    description:
      "Recibes una dirección propia para enviar por WhatsApp. Las confirmaciones llegan solas a tu panel.",
  },
];

export type FeatureIcon =
  | "countdown"
  | "rsvp"
  | "gallery"
  | "map"
  | "music"
  | "dress"
  | "gift";

export type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
};

export const includedFeatures: Feature[] = [
  {
    icon: "countdown",
    title: "Cuenta regresiva",
    description: "Los días que faltan se cuentan solos, con la fecha siempre a la vista.",
  },
  {
    icon: "rsvp",
    title: "Confirmación en línea",
    description:
      "Cada invitado confirma desde su teléfono y queda registrado al instante, con el número de personas.",
  },
  {
    icon: "gallery",
    title: "Galería de fotos",
    description: "Sus fotos favoritas, contando la historia desde cómo se conocieron.",
  },
  {
    icon: "map",
    title: "Ubicaciones con mapa",
    description:
      "Ceremonia y recepción con la dirección y un botón para abrir el mapa sin perderse.",
  },
  {
    icon: "music",
    title: "Música de fondo",
    description: "La canción que los representa suena mientras recorren la invitación.",
  },
  {
    icon: "dress",
    title: "Código de vestimenta",
    description: "Les dices a tus invitados cómo vestirse, con una nota para quitar dudas.",
  },
  {
    icon: "gift",
    title: "Mesa de regalos",
    description:
      "Si prefieren regalos en efectivo, los datos para transferir van discretamente en la invitación.",
  },
];

/** Shown under the feature list; keeps the "no technical jargon" rule. */
export const includedNote =
  "Todo se abre en el celular, sin descargar ninguna aplicación y sin que tus invitados tengan que crear una cuenta.";

export type Testimonial = {
  quote: string;
  couple: string;
  detail: string;
};

/**
 * Real testimonials only. While this list is empty the section is not rendered
 * at all, so no invented quotes ever go live.
 *
 * To publish one, uncomment the example below (and note that the section renders
 * automatically as soon as there is at least one entry):
 *
 * export const testimonials: Testimonial[] = [
 *   {
 *     quote: "Le mandamos el link a 180 invitados y las confirmaciones llegaron sin que tuviéramos que perseguir a nadie.",
 *     couple: "Camila & Sebastián",
 *     detail: "Boda en Caracas",
 *   },
 * ];
 */
export const testimonials: Testimonial[] = [];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "¿Los invitados tienen que descargar algo?",
    answer:
      "No. Es un link que se abre en el teléfono como cualquier página web, ya sea desde WhatsApp o desde Instagram.",
  },
  {
    question: "¿Cómo sé quién va a asistir?",
    answer:
      "Cada invitado deja su confirmación en la invitación y tú la ves en tu panel: nombre, si viene, cuántas personas y su mensaje.",
  },
  {
    question: "¿Puedo cambiar detalles después de enviarla?",
    answer:
      "Sí. Una hora distinta, un cambio de lugar o una foto nueva se actualizan y tus invitados ven el cambio en el mismo link.",
  },
  {
    question: "¿Con cuánto tiempo conviene encargarla?",
    answer:
      "Lo ideal es un mes o dos, para revisar textos y fotos sin carreras. Si tu boda está más cerca, escríbenos de todas formas y te decimos con claridad si llegamos.",
  },
  {
    question: "¿Necesito saber de diseño o de tecnología?",
    answer:
      "Para nada. Tú nos envías la información y las fotos; del diseño y de que todo funcione nos encargamos nosotros.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "Te contamos las formas de pago por WhatsApp, junto con las opciones según la fecha de tu boda. Sin compromiso.",
  },
];
