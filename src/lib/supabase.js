import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://uxqczaqkjmgsviircnar.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cWN6YXFram1nc3ZpaXJjbmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0OTM4MTUsImV4cCI6MjA0OTA2OTgxNX0.hw-3KnFiULwEIjQLuZl1MqAO3P6Bonyw2Zt8-aCq1n0"
);

export { supabase };
