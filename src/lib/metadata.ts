import { ROUTE_MAP, ROUTE_MAP_REVERSE } from "./constants";

// TODO: Replace relative URLs with absolute URLs (e.g., https://primoteam.com/about) before launch
export function getAlternates(path: string) {
  const isSpanish = path.startsWith("/es");
  const enPath = isSpanish ? (ROUTE_MAP_REVERSE[path] ?? "/") : path;
  const esPath = isSpanish ? path : (ROUTE_MAP[path] ?? "/es");

  return {
    languages: {
      en: enPath,
      es: esPath,
    },
  };
}
