import { GungnirThemePageFrontmatter } from 'vuepress-theme-gungnir';

interface PlaceLink {
  placeName: string;
  url?: string;
}

interface ExperienceItem {
  name: string;
  company: PlaceLink;
  year?: string;
  extras?: string;
}

export interface GungnirThemeAboutMePageFrontmatter
  extends GungnirThemePageFrontmatter {
  title: string;
  me: string;
  description: string;
  cvLink?: string;
  sourceCode?: string;
  image?: string;
  experience?: Array<ExperienceItem>;
}
