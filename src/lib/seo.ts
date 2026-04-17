export const SITE_URL = 'https://demosolution.ca';
export const BRAND_IMAGE = `${SITE_URL}/demo-solution-brand.png`;

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path: string) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {})
    }))
  };
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Demo Solution',
    inLanguage: ['fr-CA', 'en-CA'],
    publisher: { '@id': `${SITE_URL}/#demo-solution` }
  };
}

export function buildLocalBusinessSchema({
  telephone = '+1-581-337-3366',
  email = 'info@demosolution.ca',
  facebookUrl = '',
  tiktokUrl = '',
  lang = 'fr-CA'
}: {
  telephone?: string;
  email?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
  lang?: 'fr-CA' | 'en-CA';
} = {}) {
  const sameAs = [facebookUrl, tiktokUrl].filter((value) => Boolean(value?.trim()));
  const isEnglish = lang === 'en-CA';

  return {
    '@context': 'https://schema.org',
    '@type': 'Contractor',
    '@id': `${SITE_URL}/#demo-solution`,
    name: 'Demo Solution',
    description: isEnglish
      ? 'Decontamination, hazardous material removal, asbestos removal, vermiculite removal, sampling and demolition in Gatineau, Ottawa and Quebec City'
      : 'Décontamination, enlèvement de matières dangereuses, désamiantage, enlèvement de vermiculite, échantillonnage et démolition à Gatineau, Ottawa et Québec',
    telephone,
    email,
    url: SITE_URL,
    inLanguage: ['fr-CA', 'en-CA'],
    areaServed: [
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'City', name: isEnglish ? 'Quebec City' : 'Québec' }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: isEnglish ? '11 Granby Street, Unit 18' : '11 rue de Granby, Unité 18',
      addressLocality: 'Gatineau',
      addressRegion: 'QC',
      postalCode: 'J8T 8R7',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.507195,
      longitude: -75.54977
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=11+rue+de+Granby+Unite+18+Gatineau+QC',
    priceRange: '$$',
    image: BRAND_IMAGE,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: [
      ...(isEnglish
        ? [
            'Decontamination',
            'Hazardous material removal',
            'Asbestos removal',
            'Vermiculite removal',
            'Sampling',
            'Odour control',
            'Selective demolition',
            'Mould remediation',
            'Dry rot'
          ]
        : [
            'Décontamination',
            'Enlèvement de matières dangereuses',
            'Désamiantage',
            'Enlèvement de vermiculite',
            'Échantillonnage',
            'Contrôle des odeurs',
            'Démolition sélective',
            'Moisissure',
            'Mérule pleureuse'
          ])
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEnglish ? 'Demo Solution services' : 'Services Demo Solution',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEnglish ? 'Decontamination' : 'Décontamination' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEnglish ? 'Vermiculite removal' : 'Enlèvement de vermiculite' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEnglish ? 'Sampling' : 'Échantillonnage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: isEnglish ? 'Demolition' : 'Démolition' } }
      ]
    }
  };
}

export function buildAboutPageSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#demo-solution` },
    inLanguage: path.startsWith('/en/') ? 'en-CA' : 'fr-CA'
  };
}

export function buildContactPageSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#demo-solution` },
    inLanguage: path.startsWith('/en/') ? 'en-CA' : 'fr-CA'
  };
}

export function buildServiceSchema({
  name,
  serviceType,
  description,
  lang = 'fr-CA'
}: {
  name: string;
  serviceType: string;
  description: string;
  lang?: 'fr-CA' | 'en-CA';
}) {
  const isEnglish = lang === 'en-CA';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: { '@id': `${SITE_URL}/#demo-solution` },
    areaServed: [
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'City', name: isEnglish ? 'Quebec City' : 'Québec' }
    ],
    serviceType,
    description,
    inLanguage: lang
  };
}
