create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null check (role in ('admin', 'client')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  website_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.organization_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null check (role in ('owner', 'member')),
  created_at timestamptz default now(),
  unique (organization_id, user_id)
);

create table if not exists public.prospects (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  sector text,
  city text,
  website_url text,
  instagram_url text,
  google_maps_url text,
  public_phone text,
  public_email text,
  contact_person_name text,
  contact_person_role text,
  source_url text,
  detected_problem text,
  opportunity_notes text,
  score int default 0 check (score >= 0 and score <= 100),
  status text not null default 'new' check (status in ('new', 'reviewed', 'demo_created', 'contacted', 'replied', 'won', 'lost', 'ignored')),
  next_action text,
  demo_url text,
  loom_url text,
  last_contacted_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete cascade,
  name text not null,
  phone text,
  email text,
  service_requested text,
  source text not null default 'website' check (source in ('website', 'whatsapp', 'instagram', 'ads', 'phone', 'manual', 'other')),
  estimated_budget text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'waiting_reply', 'quote_sent', 'won', 'lost', 'follow_up_later', 'review_requested')),
  next_action text,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists organizations_set_updated_at on public.organizations;
create trigger organizations_set_updated_at
before update on public.organizations
for each row execute function public.set_updated_at();

drop trigger if exists prospects_set_updated_at on public.prospects;
create trigger prospects_set_updated_at
before update on public.prospects
for each row execute function public.set_updated_at();

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.is_org_member(org_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.organization_members
    where organization_id = org_id
      and user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public;
revoke all on function public.is_org_member(uuid) from public;
grant execute on function public.is_admin() to anon, authenticated;
grant execute on function public.is_org_member(uuid) to anon, authenticated;

alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.prospects enable row level security;
alter table public.leads enable row level security;

grant select, insert, update, delete on public.profiles to authenticated;
grant select, insert, update, delete on public.organizations to authenticated;
grant select, insert, update, delete on public.organization_members to authenticated;
grant select, insert, update, delete on public.prospects to authenticated;
grant select, insert, update, delete on public.leads to authenticated;

drop policy if exists profiles_admin_all on public.profiles;
create policy profiles_admin_all
on public.profiles
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own
on public.profiles
for select
to authenticated
using (id = auth.uid());

drop policy if exists organizations_admin_all on public.organizations;
create policy organizations_admin_all
on public.organizations
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists organizations_member_select on public.organizations;
create policy organizations_member_select
on public.organizations
for select
to authenticated
using (public.is_org_member(id));

drop policy if exists organization_members_admin_all on public.organization_members;
create policy organization_members_admin_all
on public.organization_members
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists organization_members_member_select on public.organization_members;
create policy organization_members_member_select
on public.organization_members
for select
to authenticated
using (public.is_org_member(organization_id));

drop policy if exists prospects_admin_all on public.prospects;
create policy prospects_admin_all
on public.prospects
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists leads_admin_all on public.leads;
create policy leads_admin_all
on public.leads
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists leads_org_member_select on public.leads;
create policy leads_org_member_select
on public.leads
for select
to authenticated
using (public.is_org_member(organization_id));

drop policy if exists leads_org_member_insert on public.leads;
create policy leads_org_member_insert
on public.leads
for insert
to authenticated
with check (public.is_org_member(organization_id));

drop policy if exists leads_org_member_update on public.leads;
create policy leads_org_member_update
on public.leads
for update
to authenticated
using (public.is_org_member(organization_id))
with check (public.is_org_member(organization_id));

create index if not exists organization_members_user_id_idx on public.organization_members(user_id);
create index if not exists organization_members_organization_id_idx on public.organization_members(organization_id);
create index if not exists prospects_status_idx on public.prospects(status);
create index if not exists prospects_sector_idx on public.prospects(sector);
create index if not exists prospects_city_idx on public.prospects(city);
create index if not exists prospects_score_idx on public.prospects(score desc);
create index if not exists prospects_created_at_idx on public.prospects(created_at desc);
create index if not exists leads_organization_id_idx on public.leads(organization_id);
create index if not exists leads_status_idx on public.leads(status);
create index if not exists leads_source_idx on public.leads(source);
create index if not exists leads_created_at_idx on public.leads(created_at desc);

alter table public.contact_requests
drop constraint if exists contact_requests_service_interest_check;

alter table public.contact_requests
add constraint contact_requests_service_interest_check
check (
  service_interest in ('Demo inicial', 'Web Esencial', 'Web Pro', 'Sistema Local', 'Proyecto a medida', 'Mantenimiento web', 'Otro')
);

alter table public.contact_requests
drop constraint if exists contact_requests_budget_range_check;

alter table public.contact_requests
add constraint contact_requests_budget_range_check
check (
  budget_range in ('Demo gratuita', '490-990 €', '990-1.490 €', '1.490 €+', '2.900 €+', 'No lo sé')
);
