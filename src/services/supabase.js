import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sifzxfkybmbhvhpopnoi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZnp4Zmt5Ym1iaHZocG9wbm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMDc3MTcsImV4cCI6MjAyNjU4MzcxN30.HNj8geU93m-EEwBm-MSKocyuUaXrspIzWiuIj13OzpI";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl };

export default supabase;
