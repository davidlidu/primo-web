import { MetadataRoute } from "next";

// TODO: Update domain to final production URL before launch
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://primoteam.com/sitemap.xml",
  };
}
