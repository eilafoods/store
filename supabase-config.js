import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://kmgspkwsxeecfnlohrbn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_xS3uHR_-DsoRiwhHPhOzBg_v2i-z8s2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const STORAGE_BUCKET = 'product-images';
export const PRODUCTS_TABLE = 'products';

export const BRAND = {
  name: 'Eila Foods',
  tagline: 'Premium Organic Diet & Health Products',
  description: 'We provide organic, keto-friendly, plant-based nutrition designed for healthy living.',
  whatsapp: '923347773198',
  email: 'aleezaqamar351@gmail.com',
  currency: 'Pkr',
  instagram: 'https://www.instagram.com/eilafoods.pk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
};