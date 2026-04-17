import type { FAQItem } from '../lib/seo';

export interface WhyChoosePoint {
  title: string;
  text: string;
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
  whyChooseTitle: string;
  whyChooseIntro: string;
  whyChoose: WhyChoosePoint[];
  faqTitle: string;
  faqs: FAQItem[];
}
