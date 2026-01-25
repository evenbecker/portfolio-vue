import { fs, path } from "@vuepress/utils";

const PACKAGE_DIR: string = "node_modules/vuepress-theme-gungnir/lib/client";

const COMPONENTS_DIR: string = path.resolve(PACKAGE_DIR, "../client/components");
const BASE_LAYOUTS_DIR: string = path.resolve(PACKAGE_DIR, "../client/layouts");
// Due to personal blog purpose it will be static, but EXTENDED_LAYOUTS_DIR should be configurable
const EXTENDED_LAYOUTS_DIR: string = path.resolve(__dirname, "../../layouts");
export const TEMPLATE_BUILD: string = path.resolve(PACKAGE_DIR, "../../templates/index.build.html");
export const CLIENT_CONFIG_FILE: string = path.resolve(PACKAGE_DIR, "../client/config.js");

export function generateFilePathObject(folderPath: string): Record<string, string> {
  const result: Record<string, string> = {};

  try {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      if (fs.statSync(filePath).isFile()) {
        const fileNameWithoutExtension = path.parse(file).name;
        result[fileNameWithoutExtension] = filePath;
      }
    });
  } catch (error) {
    console.error('Error reading folder:', error);
  }

  return result;
}

export const getLayoutsPaths = (): Record<string, string> => ({
  ...generateFilePathObject(BASE_LAYOUTS_DIR),
  ...generateFilePathObject(EXTENDED_LAYOUTS_DIR)
})

const getAliasRecordFrom = (dir: string) => Object.fromEntries(
  fs.readdirSync(dir).filter((file) => file.endsWith(".vue")).map((file) => [
    `@theme/${file}`,
    path.resolve(dir, file)
  ])
)
export const getAliasPaths = () => ({
  ...getAliasRecordFrom(COMPONENTS_DIR),
  ...getAliasRecordFrom(BASE_LAYOUTS_DIR),
  ...getAliasRecordFrom(EXTENDED_LAYOUTS_DIR),
})