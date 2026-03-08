/**
 * Site-wide config for ndakaru.co.ke — use for canonical URLs, contact, and domain.
 * Ensures consistency for Vercel deployment and SEO.
 */
export const SITE_URL = 'https://ndakaru.co.ke';
export const SITE_NAME = 'Ndakaru Bricks & Construction';
export const SITE_DESCRIPTION = 'Quality bricks and construction from Sirisia, Ndakaru, Bungoma County, Kenya.';

export const CONTACT = {
  email: 'info@ndakaru.co.ke',
  founderEmail: 'mildredwepukhulu7@gmail.com',
  phone: '+254755550708',
  phoneAlt: '+254713947746',
  whatsapp: '254713947746',
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi, I'd like to inquire about Ndakaru Bricks & Construction.")}`;
