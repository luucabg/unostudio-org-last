# unostudio

Landing comercial + unostudio OS.

La home publica vende demo gratis, precios, ejemplos, extras y contacto. El sistema privado vive aparte:

- `/login`: acceso privado.
- `/admin/prospects`: panel interno de prospeccion para unostudio.
- `/admin/lead-finder`: busqueda interna de empresas con Google Places y analisis opcional con DeepSeek.
- `/dashboard`: panel simple de solicitudes para clientes.
- `/api/leads`: endpoint publico para recibir leads de webs de clientes.

## 1. Crear proyecto Supabase

1. Crea un proyecto en Supabase.
2. Copia la Project URL.
3. Copia la anon key.
4. Copia la service role key y guardala solo como variable server.

## 2. Configurar env vars

Crea `.env.local` con:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_WEB_ESENCIAL_URL=
NEXT_PUBLIC_STRIPE_WEB_PRO_URL=
GOOGLE_PLACES_API_KEY=
DEEPSEEK_API_KEY=
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-v4-pro
```

No uses `SUPABASE_SERVICE_ROLE_KEY` en cliente. Solo se usa en servidor para `/api/leads`.
`GOOGLE_PLACES_API_KEY` y `DEEPSEEK_API_KEY` son server-only. No las pongas con prefijo `NEXT_PUBLIC`.

## 3. Ejecutar migraciones

Con Supabase CLI:

```bash
supabase link --project-ref TU_PROJECT_REF
supabase db push
```

Sin CLI, abre Supabase SQL Editor y ejecuta los archivos de `supabase/migrations` en orden:

```text
20260508004532_create_contact_requests.sql
20260625090000_update_contact_request_options.sql
20260625100000_allow_whatsapp_only_demo_requests.sql
20260625110000_update_launch_pricing_options.sql
20260629190000_create_unostudio_os.sql
20260629200000_tighten_os_function_grants.sql
```

La migracion principal de unostudio OS es:

```text
supabase/migrations/20260629190000_create_unostudio_os.sql
```

Incluye RLS real para:

- `profiles`
- `organizations`
- `organization_members`
- `prospects`
- `leads`

## 4. Crear primer usuario admin

1. En Supabase Auth > Users, crea el usuario admin con email y password.
2. Confirma el email si tu proyecto lo requiere.
3. Ejecuta este SQL cambiando `TU_EMAIL_ADMIN`:

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

4. Entra en `/login`.
5. Si el perfil es admin, te lleva a `/admin/prospects`.

## 5. Crear organization de prueba

Cambia nombre, slug y web por el cliente real:

```sql
insert into public.organizations (name, slug, website_url)
values ('Cliente Demo', 'cliente-demo', 'https://cliente-demo.com')
returning id;
```

Guarda el `id`.

## 6. Crear usuario client y asignarlo

1. En Supabase Auth > Users, crea el usuario client con email y password.
2. Confirma el email si tu proyecto lo requiere.
3. Ejecuta este SQL cambiando `EMAIL_CLIENTE` y `ORG_ID_AQUI`:

```sql
insert into public.profiles (id, full_name, role)
select id, 'Cliente Demo', 'client'
from auth.users
where email = 'EMAIL_CLIENTE'
on conflict (id) do update
set role = 'client',
    full_name = excluded.full_name,
    updated_at = now();

insert into public.organization_members (organization_id, user_id, role)
select 'ORG_ID_AQUI'::uuid, id, 'owner'
from auth.users
where email = 'EMAIL_CLIENTE'
on conflict (organization_id, user_id) do nothing;
```

Ese usuario solo vera leads de las organizaciones donde exista fila en `organization_members`.

## 7. Probar `/admin/prospects`

```bash
corepack pnpm dev
```

1. Abre `http://localhost:3000/login`.
2. Entra con el usuario admin.
3. Crea un prospect.
4. Cambia estado, score, proxima accion, demo URL y Loom URL.
5. Abre `Mas datos` y guarda una URL o nota interna.
6. Prueba copiar mensaje.
7. Entra con usuario client y comprueba que `/admin/prospects` redirige a `/dashboard`.

## 8. Probar `/admin/lead-finder`

1. Activa Places API en Google Cloud y configura `GOOGLE_PLACES_API_KEY`.
2. Opcional: configura `DEEPSEEK_API_KEY`, `DEEPSEEK_BASE_URL` y `DEEPSEEK_MODEL`.
3. Entra con usuario admin.
4. Abre `/admin/lead-finder`.
5. Busca algo concreto, por ejemplo `clinicas dentales` + ciudad `Valencia`.
6. Usa max_results bajo al principio. Google Places puede tener coste.
7. Analiza un candidato con IA. Si tiene web, se lee una muestra limitada de la home para valorar claridad, confianza y contacto. Si no hay API key, el sistema usa analisis basico.
8. Guarda manualmente solo los candidatos que quieras revisar.
9. Abre `/admin/prospects` y comprueba que aparece el prospect guardado.

Notas:

- Lead Finder no hace scraping.
- Lead Finder esta pensado para busquedas en Espana. Usa `locationRestriction` y filtros de direccion para evitar resultados de otros paises o ciudades ambiguas.
- No crawlea webs ni subpaginas: solo lee una muestra limitada de la home cuando el admin pulsa analizar.
- DeepSeek solo analiza y puntua. No contacta automaticamente.
- No hay envio de WhatsApp, email, Instagram ni bots.
- Los prospects deben revisarse manualmente antes de contactar.

## 9. Probar `/dashboard`

1. Entra con el usuario client.
2. Abre `/dashboard`.
3. Crea una solicitud manual.
4. Cambia estado.
5. Anade notas y proxima accion.
6. Exporta CSV.
7. Si tienes dos organizations, comprueba que el usuario client solo ve las asignadas.

## 10. Probar `/api/leads`

PowerShell:

```powershell
Invoke-RestMethod `
  -Method Post `
  -Uri "http://localhost:3000/api/leads" `
  -ContentType "application/json" `
  -Body '{"organization_slug":"cliente-demo","name":"Cliente prueba","phone":"+34600000000","source":"website","service_requested":"Web","message":"Quiero informacion para una web nueva"}'
```

Respuesta esperada:

```json
{ "ok": true }
```

El lead debe aparecer en `/dashboard` para la organizacion `cliente-demo`.

Prueba error esperado sin telefono ni email:

```powershell
Invoke-RestMethod `
  -Method Post `
  -Uri "http://localhost:3000/api/leads" `
  -ContentType "application/json" `
  -Body '{"organization_slug":"cliente-demo","name":"A","source":"website"}'
```

Respuesta esperada:

```json
{ "ok": false, "error": "..." }
```

## 11. Configurar Stripe Payment Links

Crea dos Payment Links en Stripe:

- Reserva Web Esencial: 99 EUR
- Reserva Web Pro: 149 EUR

Despues configura:

```bash
NEXT_PUBLIC_STRIPE_WEB_ESENCIAL_URL=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_WEB_PRO_URL=https://buy.stripe.com/...
```

Si una variable no existe, el boton vuelve a `/#booking`.

## 12. Deploy en Vercel

1. Importa el repo en Vercel.
2. Configura las env vars de produccion:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://unostudio.org
NEXT_PUBLIC_STRIPE_WEB_ESENCIAL_URL=
NEXT_PUBLIC_STRIPE_WEB_PRO_URL=
GOOGLE_PLACES_API_KEY=
DEEPSEEK_API_KEY=
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-v4-pro
```

3. En Supabase Auth > URL Configuration, pon `https://unostudio.org` como Site URL si usas confirmaciones o redirects.
4. Ejecuta las migraciones en Supabase antes de abrir los paneles.
5. Deploy.
6. Prueba `/login`, `/admin/prospects`, `/admin/lead-finder`, `/dashboard`, `/api/leads` y el formulario publico de la landing.

Comandos locales:

```bash
corepack pnpm lint
corepack pnpm build
corepack pnpm exec tsc --noEmit
```

## Fase 2 pendiente

- Historial de eventos por lead.
- Invitaciones de clientes desde UI.
- Mejoras de permisos por organizacion.
- Integraciones de email o WhatsApp solo si se piden manualmente y con consentimiento.
- Webhooks de Stripe si las reservas necesitan automatizacion.
