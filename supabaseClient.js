// Load Supabase from the CDN first in index.html (see below).
// Then this file creates a single client you can import anywhere.

const SUPABASE_URL = 'https://lhmddlywxwbahkdctrb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobWRkbHl3eHdiYWtoZGtjdHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMzUyOTYsImV4cCI6MjA3NzYxMTI5Nn0.h3MOi0Znyrz7x3mgBslsVq9HqRZVpTx-4xTDJtnuE1A';

// Supabase v2 UMD is exposed on window.supabase
export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
