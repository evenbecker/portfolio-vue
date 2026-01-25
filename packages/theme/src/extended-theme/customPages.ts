import type {
  GungnirThemePageOptions
} from "vuepress-theme-gungnir";
import { GungnirThemeI18n } from "vuepress-theme-gungnir/lib/shared/i18n";

export interface GungnirThemePagesOptionsWithCustomPages {
  tags?: GungnirThemePageOptions;
  links?: GungnirThemePageOptions;
  "aboutMe"?: GungnirThemePageOptions;
}
export interface GungnirThemeI18nExtended extends GungnirThemeI18n {
  pageText?: {
    tags: string;
    links: string;
    "aboutMe"?: string;
  }
}