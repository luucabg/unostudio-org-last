revoke execute on function public.is_admin() from anon;
revoke execute on function public.is_org_member(uuid) from anon;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_org_member(uuid) to authenticated;
