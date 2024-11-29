import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
     'https://dcvfisxfggygmjtbzwlo.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdmZpc3hmZ2d5Z21qdGJ6d2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4ODQ4OTQsImV4cCI6MjA0ODQ2MDg5NH0.MMcJcIl3OeGNPrtA0tDvqduoUUP71dwnWdIkzG3gtWE'
)