
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://idpmteeqgddpucojcmta.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcG10ZWVxZ2RkcHVjb2pjbXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NjA3NTUsImV4cCI6MjA1NjUzNjc1NX0.u8-UdqXengpO7d01WFJzsqAbzzwEGqdD9cBClL7UW9A";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
