import { ROUTE_MAP, ROUTE_MAP_REVERSE } from "./constants";

// TODO: Replace relative URLs with absolute URLs (e.g., https://primoteam.com/nosotros) before launch
export function getAlternates(path: string) {
  const isEnglish = path.startsWith("/en");
  const esPath = isEnglish ? (ROUTE_MAP_REVERSE[path] ?? "/") : path;
  const enPath = isEnglish ? path : (ROUTE_MAP[path] ?? "/en");

  return {
    languages: {
      es: esPath,
      en: enPath,
    },
  };
}
