import {
  useThemeData as _useThemeData,
  useThemeLocaleData as _useThemeLocaleData
} from "@vuepress/plugin-theme-data/lib/client";
import type {
  ThemeDataRef,
  ThemeLocaleDataRef
} from "@vuepress/plugin-theme-data/lib/client";
import { GungnirThemeDataExtended } from "./types";

export const useThemeData = (): ThemeDataRef<GungnirThemeDataExtended> =>
  _useThemeData<GungnirThemeDataExtended>();
export const useThemeLocaleData = (): ThemeLocaleDataRef<GungnirThemeDataExtended> =>
  _useThemeLocaleData<GungnirThemeDataExtended>();
