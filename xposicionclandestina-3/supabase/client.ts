import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://clhfzovovplhzoxwobpw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsaGZ6b3ZvdnBsaHpveHdvYnB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MDY5MjQsImV4cCI6MjA2MjE4MjkyNH0.F9jH5RT31Ld7361pJo_ZqK2pcgiH2ghaLF8mMy_-n9g'
);
