import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://xoqsukenlhwfyytbugfc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcXN1a2VubGh3Znl5dGJ1Z2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNzM5NTksImV4cCI6MjA4ODg0OTk1OX0.iWjy4aUfe73JiN710Fuq3xF6gsWRxo53r37VKu_t55w";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
