import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://homtteuiurvcrgttdqzc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbXR0ZXVpdXJ2Y3JndHRkcXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NzQ0NTcsImV4cCI6MjA2ODQ1MDQ1N30.GY3cG3SW2wBytxjpKiYSkCNcVVH0AllcjizaKqEmK7c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);