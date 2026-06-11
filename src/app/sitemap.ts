import { MetadataRoute } from "next";

// TODO: Replace with final production domain before launch
const BASE_URL = "https://primoteam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-17");

  const esPages = [
    "/",
    "/nosotros",
    "/comprar",
    "/refinanciar",
    "/opciones-de-prestamo",
    "/recursos",
    "/calculadora",
    "/contacto",
    "/prestamos-estados-de-cuenta",
    "/prestamos-inversionistas-dscr",
    "/privacidad",
    "/terminos",
  ];

  const enPages = [
    "/en",
    "/en/about",
    "/en/buy",
    "/en/refinance",
    "/en/loan-options",
    "/en/resources",
    "/en/calculator",
    "/en/contact",
    "/en/bank-statement-loans",
    "/en/dscr-investor-loans",
    "/en/privacy",
    "/en/terms",
  ];

  const allPages = [...esPages, ...enPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/en" ? "weekly" : "monthly",
    priority: path === "/" || path === "/en" ? 1 : 0.8,
  }));
}
