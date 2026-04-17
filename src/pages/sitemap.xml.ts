import servicePagesData from '../data/service-pages.json';
import servicePagesEnData from '../data/service-pages-en.json';

type UrlEntry = {
  path: string;
  lastmod: string;
  alternatePaths?: string[];
};

type ServiceSlug = {
  slug: string;
  alternateSlug: string;
};

const baseUrl = 'https://demosolution.ca';
const defaultLastmod = '2026-04-12';

const pageLastmods = new Map<string, string>([
  ['/choisir-service/', '2026-04-15'],
  ['/en/choose-service/', '2026-04-15'],
  ['/plan-du-site/', '2026-04-15'],
  ['/en/site-map/', '2026-04-15']
]);

const staticEntries: UrlEntry[] = [
  { path: '/', lastmod: defaultLastmod, alternatePaths: ['/en/'] },
  { path: '/about/', lastmod: defaultLastmod, alternatePaths: ['/en/about/'] },
  { path: '/services/', lastmod: defaultLastmod, alternatePaths: ['/en/services/'] },
  { path: '/realisations/', lastmod: defaultLastmod, alternatePaths: ['/en/realisations/'] },
  { path: '/contact/', lastmod: defaultLastmod, alternatePaths: ['/en/contact/'] },
  { path: '/faq/', lastmod: defaultLastmod, alternatePaths: ['/en/faq/'] },
  { path: '/tarifs-moisissure/', lastmod: defaultLastmod, alternatePaths: ['/en/mould-pricing/'] },
  { path: '/tarifs-vermiculite/', lastmod: defaultLastmod, alternatePaths: ['/en/vermiculite-pricing/'] },
  { path: '/privacy/', lastmod: defaultLastmod, alternatePaths: ['/en/privacy/'] },
  { path: '/choisir-service/', lastmod: '2026-04-15', alternatePaths: ['/en/choose-service/'] },
  { path: '/plan-du-site/', lastmod: '2026-04-15', alternatePaths: ['/en/site-map/'] },
  { path: '/en/', lastmod: defaultLastmod, alternatePaths: ['/'] },
  { path: '/en/about/', lastmod: defaultLastmod, alternatePaths: ['/about/'] },
  { path: '/en/services/', lastmod: defaultLastmod, alternatePaths: ['/services/'] },
  { path: '/en/realisations/', lastmod: defaultLastmod, alternatePaths: ['/realisations/'] },
  { path: '/en/contact/', lastmod: defaultLastmod, alternatePaths: ['/contact/'] },
  { path: '/en/faq/', lastmod: defaultLastmod, alternatePaths: ['/faq/'] },
  { path: '/en/mould-pricing/', lastmod: defaultLastmod, alternatePaths: ['/tarifs-moisissure/'] },
  { path: '/en/vermiculite-pricing/', lastmod: defaultLastmod, alternatePaths: ['/tarifs-vermiculite/'] },
  { path: '/en/privacy/', lastmod: defaultLastmod, alternatePaths: ['/privacy/'] },
  { path: '/en/choose-service/', lastmod: '2026-04-15', alternatePaths: ['/choisir-service/'] },
  { path: '/en/site-map/', lastmod: '2026-04-15', alternatePaths: ['/plan-du-site/'] }
];

const servicePages = servicePagesData.items as ServiceSlug[];
const servicePagesEn = (servicePagesEnData.items as ServiceSlug[]).filter((service) => ['decontamination', 'mould-removal', 'selective-demolition', 'vermiculite-removal', 'sampling'].includes(service.slug));

const serviceEntries = servicePages.map((service) => ({
  path: `/services/${service.slug}/`,
  lastmod: pageLastmods.get(`/services/${service.slug}/`) ?? defaultLastmod,
  alternatePaths: service.alternateSlug ? [`/en/services/${service.alternateSlug}/`] : []
}));

const serviceEntriesEn = servicePagesEn.map((service) => ({
  path: `/en/services/${service.slug}/`,
  lastmod: pageLastmods.get(`/en/services/${service.slug}/`) ?? defaultLastmod,
  alternatePaths: service.alternateSlug ? [`/services/${service.alternateSlug}/`] : []
}));

const entries = [...staticEntries, ...serviceEntries, ...serviceEntriesEn];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function absoluteUrl(path: string) {
  return `${baseUrl}${path}`;
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((entry) => {
    const alternates = (entry.alternatePaths ?? [])
      .filter((alternatePath) => alternatePath && alternatePath !== entry.path)
      .map(
        (alternatePath) =>
          `    <xhtml:link rel="alternate" hreflang="${alternatePath.startsWith('/en/') ? 'en-CA' : 'fr-CA'}" href="${escapeXml(absoluteUrl(alternatePath))}" />`
      )
      .join('\n');

    return `  <url>
    <loc>${escapeXml(absoluteUrl(entry.path))}</loc>
    <lastmod>${entry.lastmod}</lastmod>${alternates ? `\n${alternates}` : ''}
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
