import { createClient } from '@supabase/supabase-js';
const URL = 'https://supabase.com/dashboard/project/frmfoyqbivfyzfbauwkz';
const API_KEY = 'sb_publishable_I9AHwRfmZVrSxoR0dE12WA_PoduLnml';

export const supabase = createClient(URL, API_KEY);
