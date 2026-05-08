create extension if not exists pgcrypto;

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  company text not null check (char_length(company) between 2 and 160),
  email text not null check (
    char_length(email) <= 180
    and email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  ),
  phone text check (phone is null or char_length(phone) <= 60),
  current_website text check (current_website is null or char_length(current_website) <= 300),
  service_interest text not null check (
    service_interest in ('Landing de Conversión', 'Web de Conversión', 'Sistema de Conversión', 'Otro')
  ),
  budget_range text not null check (
    budget_range in ('1.500-3.000 €', '3.000-5.000 €', '5.000 €+', 'No lo sé')
  ),
  urgency text not null check (urgency in ('Este mes', '1-2 meses', 'Más adelante')),
  message text not null check (char_length(message) between 10 and 4000),
  privacy_accepted boolean not null default false check (privacy_accepted is true),
  page_path text not null default '/contacto',
  source text not null default 'unostudio.org',
  status text not null default 'new' check (status in ('new', 'reviewed', 'qualified', 'archived')),
  metadata jsonb not null default '{}'::jsonb
);

comment on table public.contact_requests is 'Solicitudes enviadas desde el formulario de contacto de unostudio.org.';

alter table public.contact_requests enable row level security;

revoke all on public.contact_requests from anon, authenticated;
grant insert on public.contact_requests to anon, authenticated;

drop policy if exists "contact_requests_public_insert" on public.contact_requests;
create policy "contact_requests_public_insert"
on public.contact_requests
for insert
to anon, authenticated
with check (privacy_accepted is true);
