# unostudio

Web comercial de unostudio + herramientas privadas de operación.

## Oferta pública actual

- Web de conversión: desde 1.800 € + IVA. Proyecto de pago único.
- Mantenimiento web: opcional, desde 79 €/mes.
- Sistema comercial: desde 1.500 € de implantación + 249 €/mes + IVA.
- Web + sistema: desde 3.000 € de implantación + 299 €/mes + IVA.
- Referencia de cobro para proyectos web: 50 % al empezar y 50 % antes de publicar.
- Primera revisión/diagnóstico: sin coste ni compromiso.
- Sistema: mensual tras la implantación, sin permanencia anual por defecto y cancelable con 30 días de preaviso.

No hay Payment Links públicos de Stripe para comprar proyectos custom. El flujo comercial es primera revisión, propuesta, aprobación y pago específico del cliente.

La web no obliga a contratar una mensualidad de unostudio. Dominio, hosting, email, licencias y demás servicios de terceros deben quedar a nombre del cliente siempre que sea posible. Consulta `COMMERCIAL_POLICY.md` para la política comercial interna completa.

## Rutas públicas

- `/`: home.
- `/contacto`: formulario de diagnóstico/contacto.
- `/reformas`: landing vertical para empresas de reformas.
- `/legal/*`: páginas legales.

## Rutas privadas

- `/login`: acceso.
- `/admin/prospects`: prospección interna.
- `/admin/lead-finder`: búsqueda y análisis manual de empresas.
- `/dashboard`: panel de solicitudes para clientes.
- `/api/leads`: recepción de leads para organizaciones configuradas.

Las rutas privadas y `/api` están excluidas en `robots.ts`.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion / Motion
- Supabase
- Vercel Analytics

## Variables de entorno

Crea `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000

GOOGLE_PLACES_API_KEY=
DEEPSEEK_API_KEY=
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-v4-pro
```

`SUPABASE_SERVICE_ROLE_KEY`, `GOOGLE_PLACES_API_KEY` y `DEEPSEEK_API_KEY` son server-only.

## Base de datos

Ejecuta las migraciones en orden:

```bash
supabase link --project-ref TU_PROJECT_REF
supabase db push
```

La migración `20260824030000_align_contact_requests_with_current_offer.sql` alinea las constraints del formulario con la oferta comercial actual. Las migraciones anteriores que contienen nombres y precios antiguos se mantienen solo como historial y no deben usarse como fuente de verdad comercial.

## Usuario admin

1. Crea el usuario en Supabase Auth.
2. Asigna su perfil como `admin` en `public.profiles`.
3. Accede a `/login`.

Ejemplo:

```sql
insert into public.profiles (id, full_name, role)
select id, 'Luca', 'admin'
from auth.users
where email = 'TU_EMAIL_ADMIN'
on conflict (id) do update
set role = 'admin',
    full_name = excluded.full_name,
    updated_at = now();
```

## Organización y cliente

Crea una organización:

```sql
insert into public.organizations (name, slug, website_url)
values ('Cliente Demo', 'cliente-demo', 'https://cliente-demo.com')
returning id;
```

Asigna el usuario cliente mediante `organization_members`. RLS limita cada cliente a sus organizaciones.

## Lead Finder

`/admin/lead-finder` usa Google Places y, opcionalmente, un modelo configurado mediante las variables `DEEPSEEK_*`.

Principios:

- revisión humana;
- sin contacto automático;
- sin spam;
- sin envío automático de WhatsApp o email;
- usar IA para analizar y priorizar, no para ejecutar acciones comerciales reales sin aprobación.

## Formularios públicos

`/api/contact` acepta los formularios de la home, `/contacto` y `/reformas`.

La captación inicial pide pocos datos. Presupuesto, urgencia y selección exacta de servicio no se fuerzan antes de la conversación; los formularios cortos usan valores internos `No indicado` / `No indicada` para no inventar información.

## Desarrollo local

```bash
corepack pnpm install
corepack pnpm dev
```

Validación:

```bash
corepack pnpm lint
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

## Deploy

1. Importa el repositorio en Vercel.
2. Configura las variables de entorno.
3. Aplica las migraciones de Supabase, incluida la de 2026-08-24.
4. Verifica `/`, `/contacto`, `/reformas`, `/login`, `/admin/prospects`, `/admin/lead-finder`, `/dashboard` y los formularios públicos.

Producción: `https://unostudio.org`


## Revisión previa a producción

Antes de publicar cambios comerciales o legales:

- confirmar que el aviso legal contiene los datos identificativos que correspondan a la situación fiscal real;
- no publicar una forma jurídica, NIF, domicilio o dato que no haya sido confirmado;
- revisar las condiciones legales con asesoría profesional si se van a utilizar como condiciones contractuales definitivas;
- comprobar que los proveedores descritos en privacidad/cookies coinciden con los que realmente están activos;
- verificar pricing, costes de terceros y condiciones de cancelación en la propuesta de cada cliente.
