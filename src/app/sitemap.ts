import { MetadataRoute } from "next";

// TODO: Replace with final production domain before launch
const BASE_URL = "https://primoteam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-17");

  const enPages = [
    "/",
    "/about",
    "/buy",
    "/refinance",
    "/loan-options",
    "/resources",
    "/calculator",
    "/contact",
    "/bank-statement-loans",
    "/dscr-investor-loans",
    "/privacy",
    "/terms",
  ];

  const esPages = [
    "/es",
    "/es/nosotros",
    "/es/comprar",
    "/es/refinanciar",
    "/es/opciones-de-prestamo",
    "/es/recursos",
    "/es/calculadora",
    "/es/contacto",
    "/es/prestamos-estados-de-cuenta",
    "/es/prestamos-inversionistas-dscr",
    "/es/privacidad",
    "/es/terminos",
  ];

  const allPages = [...enPages, ...esPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/es" ? "weekly" : "monthly",
    priority: path === "/" || path === "/es" ? 1 : 0.8,
  }));
}
