import type { Page, Theme } from "@vuepress/core";
import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import { GungnirThemeOptionsWithCustomPages } from "./types";
import { assignDefaultLocaleOptions, createPages, GungnirThemePageData, } from "vuepress-theme-gungnir";
import { getPlugins } from "vuepress-theme-gungnir/lib/node/plugins";
import { CLIENT_CONFIG_FILE, TEMPLATE_BUILD, getAliasPaths, getLayoutsPaths } from "./paths";

export const gungnirThemeExtended = (
  {themePlugins = {}, ...localeOptions}: GungnirThemeOptionsWithCustomPages = {}
): Theme =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (app) => {
    assignDefaultLocaleOptions(localeOptions);
    localeOptions.search = !(themePlugins.search === false);
    return {
      name: "vuepress-theme-gungnir-extended",
      layouts: getLayoutsPaths(),
      templateBuild: TEMPLATE_BUILD,
      alias: getAliasPaths(),
      clientConfigFile: CLIENT_CONFIG_FILE,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      extendsBundlerOptions: (config: any, app): void => {
        const {bundler} = app.options;
        if (bundler.name.endsWith("vite")) {
          const bundlerConfig = config as ViteBundlerOptions;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          bundlerConfig.viteOptions = require("vite").mergeConfig(
            bundlerConfig.viteOptions as Record<string, unknown>,
            {
              optimizeDeps: {
                exclude: ["oh-vue-icons/icons"]
              },
              ssr: {
                noExternal: ["oh-vue-icons"]
              }
            }
          );
        }
      },
      extendsPage: (page: Page<GungnirThemePageData>) => {
        page.data.filePathRelative = page.filePathRelative;
        page.routeMeta.title = page.title;
      },
      plugins: getPlugins(themePlugins, localeOptions),
      onInitialized: async (app): Promise<void> => await createPages(app, localeOptions)
    };
  };
