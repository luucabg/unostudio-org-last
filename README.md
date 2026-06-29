# unostudio

Landing comercial + unostudio OS.

La home publica vende demo gratis, precios, ejemplos, extras y contacto. El sistema privado vive aparte:

- `/login`: acceso privado.
- `/admin/prospects`: panel interno de prospeccion para unostudio.
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
```

No uses `SUPABASE_SERVICE_ROLE_KEY` en cliente. Solo se usa en servidor para `/api/leads`.

## 3. Ejecutar migraciones

Con Supabase CLI:

```bash
supabase link --project-ref TU_PROJECT_REF
supabase db push
```

Sin CLI, abre Supabase SQL Editor y ejecuta los archivos de `supabase/migrations` en orden.

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

1. En Supabase Auth, crea el usuario admin.
2. Ejecuta este SQL cambiando el email:

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

3. Entra en `/login`.
4. Si el perfil es admin, te lleva a `/admin/prospects`.

## 5. Crear organization de prueba

```sql
insert into public.organizations (name, slug, website_url)
values ('Cliente Demo', 'cliente-demo', 'https://cliente-demo.com')
returning id;
```

Guarda el `id`.

## 6. Crear usuario client y asignarlo

1. Crea el usuario client en Supabase Auth.
2. Ejecuta:

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

## 7. Probar `/admin/prospects`

```bash
corepack pnpm dev
```

1. Abre `http://localhost:3000/login`.
2. Entra con el usuario admin.
3. Crea un prospect.
4. Cambia estado, score, proxima accion, demo URL y Loom URL.
5. Prueba copiar mensaje.

## 8. Probar `/dashboard`

1. Entra con el usuario client.
2. Abre `/dashboard`.
3. Crea una solicitud manual.
4. Cambia estado.
5. Anade notas y proxima accion.
6. Exporta CSV.

## 9. Probar `/api/leads`

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

## 10. Configurar Stripe Payment Links

Crea dos Payment Links en Stripe:

- Reserva Web Esencial: 99 EUR
- Reserva Web Pro: 149 EUR

Despues configura:

```bash
NEXT_PUBLIC_STRIPE_WEB_ESENCIAL_URL=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_WEB_PRO_URL=https://buy.stripe.com/...
```

Si una variable no existe, el boton vuelve a `/#booking`.

## 11. Deploy en Vercel

1. Importa el repo en Vercel.
2. Configura las env vars de produccion.
3. Ejecuta las migraciones en Supabase antes de abrir los paneles.
4. Deploy.

Comandos locales:

```bash
corepack pnpm lint
corepack pnpm build
```

## Fase 2 pendiente

- Historial de eventos por lead.
- Invitaciones de clientes desde UI.
- Mejoras de permisos por organizacion.
- Integraciones de email o WhatsApp solo si se piden manualmente y con consentimiento.
- Webhooks de Stripe si las reservas necesitan automatizacion.
