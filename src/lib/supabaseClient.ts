import { createClient } from '@supabase/supabase-js';

// Pegue essas chaves na aba "API" do seu painel do Supabase
const supabaseUrl = 'https://vlvmiusswdkghiqihimx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsdm1pdXNzd2RrZ2hpcWloaW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5ODYxMTksImV4cCI6MjA5NDU2MjExOX0.K_sf3l89MHfDkr6Zvnjo9ttltfoZFll_ujvLe4PMABM';

export const supabase = createClient(supabaseUrl, supabaseKey);