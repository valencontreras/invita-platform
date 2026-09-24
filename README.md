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
pnpm run lint       # ESLint
pnpm run typecheck  # next typegen && tsc --noEmit
```

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
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número de WhatsApp en formato internacional y solo dígitos (ej. `584120000000`). Sin este valor, los botones de WhatsApp no funcionan.
- `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_INSTAGRAM_URL` — datos de contacto del pie de página.

Los textos de la página de venta se editan en `lib/content/landing.ts` y los datos de contacto en `lib/content/site.ts`.

## Estado

Fase 1 — base del proyecto: Next.js + TypeScript + Tailwind y los scripts de trabajo.

Fase 2 — página de venta (`/`) completa: portada, ejemplos, cómo funciona, qué incluye, formulario de cotización (guarda en `leads`), testimonios (ocultos hasta que haya reales), preguntas frecuentes y pie de página.

Pendiente: invitaciones públicas (`/[slug]`) y panel de administración (`/admin`).

