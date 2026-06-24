alter table public.contact_requests
alter column email drop not null;

alter table public.contact_requests
drop constraint if exists contact_requests_email_check;

alter table public.contact_requests
add constraint contact_requests_email_check
check (
  email is null
  or (
    char_length(email) <= 180
    and email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  )
);

alter table public.contact_requests
drop constraint if exists contact_requests_service_interest_check;

alter table public.contact_requests
add constraint contact_requests_service_interest_check
check (
  service_interest in ('Demo inicial', 'Web Esencial', 'Web Pro', 'Sistema Local', 'Mantenimiento web', 'Otro')
);
