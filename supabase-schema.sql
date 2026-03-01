-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  credits integer not null default 0,
  created_at timestamptz not null default now()
);

-- Auto-create a profile row when a new user signs up
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.raw_user_meta_data->>'email');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security: users can only read their own profile
alter table profiles enable row level security;

create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);
