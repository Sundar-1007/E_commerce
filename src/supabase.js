import { createClient } from '@supabase/supabase-js';

const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient("https://orhwzbgubvcevnkayehc.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yaHd6Ymd1YnZjZXZua2F5ZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1Nzk3OTAsImV4cCI6MjAzMzE1NTc5MH0.8yxdfGaWSKuECJQCVRLzFSq0_nGWimF41Eykhpl4gbo")

export default supabase;