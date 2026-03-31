export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  content?: Record<string, unknown>;
}

export interface SitePage {
  path: string;
  name: string;
  sections: SectionBase[];
}

export interface StudioMeta {
  projectName: string;
  displayName: string;
  tagline: string;
  description: string;
}
