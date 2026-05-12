import type { SEOProps } from '../types';

const BASE_URL = 'https://breadriuss.com';

export const seoConfig: SEOProps = {
  title: 'Breadriuss | Desarrollo Web & Diseño UX',
  description: 'Desarrollador web especializado en crear experiencias digitales únicas. Diseño UX/UI, desarrollo React y soluciones web escalables.',
  keywords: 'desarrollo web, diseño UX, React, TypeScript, landing page, portfolio',
  ogType: 'website',
};

export function generateSEO(props: SEOProps): SEOProps {
  return {
    ...seoConfig,
    ...props,
    ogImage: props.ogImage || `${BASE_URL}/brd/brd_lg_dark.svg`,
    canonical: props.canonical || BASE_URL,
  };
}

export function buildCanonical(path: string): string {
  return `${BASE_URL}${path}`;
}

export const structuredData = {
  person: {
    '@type': 'Person',
    '@context': 'https://schema.org',
    name: 'Breadriuss',
    jobTitle: 'Desarrollador Web',
    url: BASE_URL,
    sameAs: [
      'https://github.com/breadriuss',
      'https://linkedin.com/in/breadriuss',
    ],
  },
  website: {
    '@type': 'WebSite',
    '@context': 'https://schema.org',
    name: 'Breadriuss Portfolio',
    url: BASE_URL,
  },
};