import type { FAQItem } from '../lib/seo';

export interface WhyChoosePoint {
  title: string;
  text: string;
}

export interface ServicePricingCard {
  title: string;
  price: string;
  details: string[];
}

export interface ServicePricing {
  title: string;
  intro?: string;
  cards: ServicePricingCard[];
  notes?: string[];
  layout?: 'default' | 'split';
  rightTitle?: string;
  rightIntro?: string;
  rightItems?: string[];
  thirdTitle?: string;
  thirdIntro?: string;
  thirdItems?: string[];
  thirdNotes?: string[];
  thirdLinkLabel?: string;
  thirdLinkHref?: string;
  ctaLabel?: string;
}

export interface ServiceInfoSection {
  title: string;
  intro?: string;
  items: string[];
}

export interface ServicePage {
  slug: string;
  alternateSlug: string;
  title: string;
  h1: string;
  navLabel: string;
  icon: string;
  serviceType: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  opening: string;
  lead: string;
  intro: string;
  detailIntro: string;
  highlights: string[];
  includedTitle: string;
  included: string[];
  situationsTitle: string;
  situations: string[];
  processIntro: string;
  process: string[];
  pricingPageTitle?: string;
  pricingPageBody?: string;
  pricingPageHref?: string;
  pricingPageLabel?: string;
  timing?: ServiceInfoSection;
  commonMaterials?: ServiceInfoSection;
  whyChooseTitle: string;
  whyChooseIntro: string;
  whyChoose: WhyChoosePoint[];
  pricing?: ServicePricing;
  warningTitle?: string;
  warningBody?: string;
  warningCtaLabel?: string;
  faqTitle: string;
  faqs: FAQItem[];
}
