export type Lang = 'pt' | 'en';
export type PageKey = 'home' | 'publications' | 'projects' | 'about';

export const ROUTES: Record<Lang, Record<PageKey, string>> = {
  pt: {
    home: '/',
    publications: '/publicacoes/',
    projects: '/projetos/',
    about: '/sobre/',
  },
  en: {
    home: '/en/',
    publications: '/en/publications/',
    projects: '/en/projects/',
    about: '/en/about/',
  },
};

export function getAlternateUrls(
  page: PageKey,
  site: URL | string = 'https://caioruas24010.github.io'
) {
  return {
    pt: new URL(ROUTES.pt[page], site),
    en: new URL(ROUTES.en[page], site),
  };
}
