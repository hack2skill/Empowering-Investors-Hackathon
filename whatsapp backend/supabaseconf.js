import { createClient } from '@supabase/supabase-js';
import WhatsappCloudAPI from 'whatsappcloudapi_wrapper';
import { config as dotenvConfig } from 'dotenv';

// Load environment variables from .env file
dotenvConfig();

const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: true,
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
};

// Create a Supabase client
const supabase = createClient("https://slmxnkcgwigcwmaexpwm.supabase.co", process.env.SUPABASE_KEY, options);

// Create a WhatsappCloudAPI instance
const Whatsapp = new WhatsappCloudAPI({
  accessToken: process.env.ACCESSTOKEN,
  senderPhoneNumberId: process.env.SENDERPHONENUMBERID,
  WABA_ID: process.env.WABA_ID,
});

// Export the Supabase client and WhatsappCloudAPI instance
export { supabase, Whatsapp };
