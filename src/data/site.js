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

/** Per-page title and meta description for SEO. Key = pathname (exact match) or path prefix. */
export const PAGE_META = {
  '/': { title: `${SITE_NAME} | Sirisia, Ndakaru, Bungoma`, description: SITE_DESCRIPTION },
  '/about': { title: `About Us | ${SITE_NAME}`, description: 'Quality bricks and construction from Sirisia, Ndakaru — Bungoma. Your local partner in Ndakaru Village.' },
  '/contact': { title: `Contact | ${SITE_NAME}`, description: 'Reach Ndakaru Bricks & Construction in Sirisia, Ndakaru. Phone, email, WhatsApp — we respond within 24 hours.' },
  '/services': { title: `Services | ${SITE_NAME}`, description: 'Brick manufacturing, residential and commercial construction in Sirisia, Ndakaru, Bungoma County.' },
  '/projects': { title: `Projects | ${SITE_NAME}`, description: 'See our brick and construction projects in Bungoma and beyond.' },
  '/gallery': { title: `Gallery | ${SITE_NAME}`, description: 'Photos and videos from Ndakaru Village, Sirisia — bricks, builds, and team in action.' },
  '/get-a-quote': { title: `Get a Quote | ${SITE_NAME}`, description: 'Request a free quote for bricks or construction. Sirisia, Ndakaru, Bungoma.' },
  '/impact': { title: `Impact | ${SITE_NAME}`, description: 'Jobs and community impact from Ndakaru Bricks & Construction in Sirisia, Ndakaru.' },
  '/support': { title: `Support Us | ${SITE_NAME}`, description: 'Partner with Ndakaru Bricks & Construction to expand impact in Bungoma and beyond.' },
  '/blog': { title: `Blog | ${SITE_NAME}`, description: 'Practical advice and stories from Ndakaru Bricks & Construction, Sirisia, Ndakaru.' },
};
