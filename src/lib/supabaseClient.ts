import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dkoolcdbfnxkkgggjkqj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrb29sY2RiZm54a2tnZ2dqa3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MDQ4OTIsImV4cCI6MjA1MzA4MDg5Mn0.8lix_BggFTVhOL_UdIVJki55ROjEqdzDW5ddATQstRA';

export const supabase = createClient(supabaseUrl, supabaseKey); 