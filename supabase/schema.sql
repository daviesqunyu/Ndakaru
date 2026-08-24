-- Ndakaru Media Studio — Supabase setup
-- Run this once in the Supabase SQL Editor (Dashboard → SQL → New query).
-- Then create the storage bucket (see bottom of this file).

-- 1) Table that stores metadata for every photo/video posted from /studio
create table if not exists public.site_media (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'General',
  type text not null check (type in ('image', 'video')),
  path text not null unique,
  src text not null,
  size bigint,
  created_at timestamptz not null default now()
);

-- 2) Row Level Security
alter table public.site_media enable row level security;

-- Anyone can view posted media (the gallery is public)
drop policy if exists "public can read media" on public.site_media;
create policy "public can read media"
  on public.site_media for select
  using (true);

-- Posting is open for now (the studio page has a passcode gate).
-- Tighten later with Supabase Auth, e.g. using (auth.role() = 'authenticated').
drop policy if exists "public can insert media" on public.site_media;
create policy "public can insert media"
  on public.site_media for insert
  with check (true);

drop policy if exists "public can delete media" on public.site_media;
create policy "public can delete media"
  on public.site_media for delete
  using (true);

-- 3) Storage bucket for the actual files.
-- Run via Dashboard → Storage, or uncomment the block below.
--
-- insert into storage.buckets (id, name, public, file_size_limit)
-- values ('media', 'media', true, null)   -- null = no size cap (set e.g. 2147483648 for 2GB)
-- on conflict (id) do nothing;
--
-- drop policy if exists "public read media files" on storage.objects;
-- create policy "public read media files"
--   on storage.objects for select
--   using (bucket_id = 'media');
--
-- drop policy if exists "public upload media files" on storage.objects;
-- create policy "public upload media files"
--   on storage.objects for insert
--   with check (bucket_id = 'media');
--
-- drop policy if exists "public remove media files" on storage.objects;
-- create policy "public remove media files"
--   on storage.objects for delete
--   using (bucket_id = 'media');

-- 4) After running this, add these two env vars and rebuild:
--    VITE_SUPABASE_URL=https://<project-ref>.supabase.co
--    VITE_SUPABASE_ANON_KEY=<anon public key>
