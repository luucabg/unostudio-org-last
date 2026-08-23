-- Align public contact form constraints with the current unostudio offer.
-- Historical migrations keep the old launch pricing for auditability; this migration is the current source of truth.

alter table public.contact_requests
drop constraint if exists contact_requests_service_interest_check;

alter table public.contact_requests
add constraint contact_requests_service_interest_check
check (
  service_interest in (
    'Diagnóstico inicial',
    'Web de conversión',
    'Sistema comercial',
    'Sistema para reformas',
    'Web + sistema',
    'Proyecto a medida',
    'Mantenimiento web',
    'Otro'
  )
);

alter table public.contact_requests
drop constraint if exists contact_requests_budget_range_check;

alter table public.contact_requests
add constraint contact_requests_budget_range_check
check (
  budget_range in (
    '1.500-2.000 €',
    '2.000-3.000 €',
    '3.000-5.000 €',
    '5.000 €+',
    'No lo sé',
    'No indicado'
  )
);

alter table public.contact_requests
drop constraint if exists contact_requests_urgency_check;

alter table public.contact_requests
add constraint contact_requests_urgency_check
check (urgency in ('Este mes', '1-2 meses', 'Más adelante', 'No indicada'));
