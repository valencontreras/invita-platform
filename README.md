# Invita

Plataforma de invitaciones de boda digitales. Tiene tres superficies:

- **Página de venta** (`/`) — copy en español, dirigida a parejas que se casan.
- **Panel de administración** (`/admin`) — herramienta interna, protegida con autenticación.
- **Invitaciones públicas** (`/[slug]`) — la invitación que reciben los invitados.

El brief del proyecto (stack, modelo de datos, rutas, sistema de diseño y convenciones) vive en [`AGENTS.md`](./AGENTS.md) y es la fuente de verdad.

## Requisitos

Node.js 20.9+ y [pnpm](https://pnpm.io) 10.

## Scripts

```bash
pnpm run dev        # servidor de desarrollo en http://localhost:3000
pnpm run build      # build de producción
pnpm run start      # sirve el build de producción
pnpm run typecheck  # next typegen && tsc --noEmit
```

`eslint.config.mjs` ya está en el repositorio, pero el script `pnpm run lint` todavía no existe porque ESLint (`eslint` + `eslint-config-next`) aún no está instalado. Cuando se instale como dependencia de desarrollo, el script es `eslint`.

## Stack

Next.js 16 (App Router) con TypeScript, Tailwind CSS 4 (configurado desde CSS, sin `tailwind.config.js`), Framer Motion, TanStack Query + Axios para el panel, Zod para validación, Postgres vía Supabase y despliegue en Vercel.

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — conexión con Supabase.
- `SUPABASE_SERVICE_ROLE_KEY` — solo para el servidor. La usa `POST /api/leads` para guardar los leads; nunca debe llegar al navegador.
- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número de WhatsApp en formato internacional y solo dígitos (ej. `584120000000`). Si se deja vacío, los botones de WhatsApp llevan al formulario de cotización (`#cotizar`) en lugar de a un enlace roto.
- `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_INSTAGRAM_URL` — datos de contacto del pie de página. Si se dejan vacíos, el enlace correspondiente no se muestra.

Los textos de la página de venta se editan en `lib/content/landing.ts` y los datos de contacto en `lib/content/site.ts`. El diseño vive en `app/globals.css` (tokens `@theme` y utilidades propias) y las tipografías se cargan con `next/font` en `app/layout.tsx`.

## Estructura de la página de venta

```
app/page.tsx                          composición de la página + metadata
components/landing/SiteHeader.tsx     barra de navegación
components/landing/Hero.tsx           portada y maqueta de la invitación
components/landing/ExampleGallery.tsx colección de ejemplos
components/landing/HowItWorks.tsx     los tres pasos
components/landing/WhatsIncluded.tsx  qué incluye + muestra de la interfaz
components/landing/QuoteSection.tsx   cotización (formulario y promesas)
components/landing/Testimonials.tsx   testimonios reales (se oculta si no hay)
components/landing/Faq.tsx            preguntas frecuentes
components/landing/SiteFooter.tsx     pie de página
components/landing/SectionHeading.tsx encabezado de sección reutilizable
components/landing/icons.tsx          glifos de los pasos y de los beneficios
components/landing/Reveal.tsx         aparición al hacer scroll (respeta
                                      prefers-reduced-motion)
components/landing/PhotoPlate.tsx     marco tonal con monograma (respaldo de las
                                      tarjetas mientras no haya foto real)
components/landing/QuoteForm.tsx      formulario de cotización (capa visual)
components/landing/cta.ts             estilos compartidos de los botones
lib/content/landing.ts                todo el copy en español
lib/content/site.ts                   nombre, URLs de contacto y enlace de WhatsApp
public/examples/*.jpg                 fotos de muestra de las tarjetas
public/pre-wedding/*.jpg              fotos de la tira de la tarjeta «Qué incluye»
public/header.jpg                     imagen de la maqueta de la portada

```

Cada sección recibe su texto desde `lib/content/landing.ts`. Ese archivo guarda **claves** de icono (`FeatureIcon`), no componentes, y `components/landing/icons.tsx` las convierte en glifos; así el copy se puede editar sin tocar presentación. `app/page.tsx` sigue siendo un server component: lo interactivo (`SiteHeader`, `Reveal`, `QuoteForm`) son client components.

Los ejemplos de la colección solo enlazan a `/<slug>` cuando la invitación está publicada; mientras el slug sea `null`, la tarjeta muestra «Próximamente» en lugar de un enlace roto. Cada tarjeta muestra su foto desde `public/examples/` (campo `photo` en `lib/content/landing.ts`: `src` + `alt` en español); si un ejemplo aún no tiene foto, la tarjeta cae en el marco tonal de `PhotoPlate`. Los testimonios no se inventan: con la lista vacía, la sección no se renderiza.

Los enlaces internos van con `<Link>` de `next/link` (por ejemplo, la tarjeta de la colección hacia `/<slug>`): así la navegación se mantiene del lado del cliente y Next puede precargar la ruta. Un `<a>` normal queda reservado para lo que el router no gobierna: anclas dentro de la misma página (`#coleccion`, `#cotizar`), enlaces externos que abren en otra pestaña (`wa.me`, Instagram, con `target="_blank" rel="noopener noreferrer"`) y esquemas que no son HTTP (`mailto:`).

La maqueta de la portada usa `public/header.jpg`, declarada como `heroMockupPhoto` en `lib/content/landing.ts`. El original es 16:9 y el marco de la tarjeta es vertical, así que `object-cover` recorta los lados: cuando haya una foto real, conviene que venga en 4:5 o más alta.

La tarjeta «Galería editorial de la preboda» de `components/landing/WhatsIncluded.tsx` cierra con tres fotos reales, tomadas de `public/pre-wedding/` a través de `preWeddingPhotos` en `lib/content/landing.ts` (mismo formato `{ src, alt }` que las tarjetas de la colección). El orden del arreglo es el orden en pantalla. Los originales actuales son 512×286 (16:9) y `object-cover` los recorta al marco de la tira; para las próximas fotos conviene una proporción cercana a la del marco, así no se pierde encuadre.

Cada tarjeta «Qué incluye» cierra con una muestra estática de la invitación real (`SAMPLE_UI`), que es decorativa y por eso va dentro de un contenedor `aria-hidden`. La de «Música sutil y personalizada» reproduce el reproductor de la invitación: botón de play en verde bosque, nombre de la pista con su tiempo transcurrido y la onda dorada al extremo derecho. Los textos de estas miniaturas viven en el componente, no en `lib/content/landing.ts`, porque describen la interfaz del producto y no el copy de la página.

## Favicon e iconos

El favicon vive en `app/favicon.ico` y Next lo emite solo (convención de archivos): es un `.ico` real con frames de 16×16, 32×32, 48×48 y 256×256, así que el navegador elige el tamaño que necesita. Si más adelante quieres añadir un icono vectorial o el de iOS, basta con colocar `app/icon.svg` o `app/apple-icon.png` (180×180) junto al favicon: Next los detecta sin configuración.

No declares `icons` en la `metadata` apuntando a archivos que no existan: ese `<link>` da 404 y el navegador puede preferirlo por encima del favicon real. Los logos y fotos para usar dentro de las páginas van en `public/`.

## Estado

Fase 1 — base del proyecto: Next.js + TypeScript + Tailwind y los scripts de trabajo.

Fase 2 — página de venta (`/`) completa, con el sistema de diseño "Botanical Heirloom": portada, colección de ejemplos, cómo funciona, qué incluye, formulario de cotización, testimonios (ocultos hasta que haya reales), preguntas frecuentes y pie de página.

Pendiente de la fase 2:

- Conectar `QuoteForm` con `POST /api/leads` (Supabase `leads`, validación con Zod). Hoy el formulario valida en el navegador y muestra el estado de éxito localmente.
- Invitaciones públicas (`/[slug]`) y panel de administración (`/admin`).

