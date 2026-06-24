alter table public.contact_requests
drop constraint if exists contact_requests_service_interest_check;

alter table public.contact_requests
add constraint contact_requests_service_interest_check
check (
  service_interest in ('Demo inicial', 'Web Express', 'Web Pro', 'Mantenimiento web', 'Otro')
);

alter table public.contact_requests
drop constraint if exists contact_requests_budget_range_check;

alter table public.contact_requests
add constraint contact_requests_budget_range_check
check (
  budget_range in ('Demo gratuita', '500-900 €', '900-1.500 €', '1.500 €+', 'No lo sé')
);
