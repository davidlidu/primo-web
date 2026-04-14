import { Metadata } from "next";
import { getAlternates } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Primo Team",
  description: "Bilingual mortgage team powered by Rize Mortgage",
  url: "https://primoteam.com/contact", // TODO: Replace with final domain before launch
  telephone: "+15551234567", // TODO: Replace with real phone before launch
  email: "info@primoteam.com", // TODO: Replace with real email before launch
  address: {
    "@type": "PostalAddress",
    streetAddress: "53 NW 100th Ave",
    addressLocality: "Plantation",
    addressRegion: "FL",
    postalCode: "33324",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.1196,
    longitude: -80.2584,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  knowsLanguage: ["en", "es"],
};

export const metadata: Metadata = {
  title: "Contact Us | Primo Team",
  description: "Get in touch with the Primo Team. Call, text, or fill out our form. Bilingual mortgage advisors serving Florida and North Carolina.",
  alternates: getAlternates("/contact"),
  openGraph: {
    title: "Contact Us | Primo Team",
    description: "Get in touch with the Primo Team. Call, text, or fill out our form. Bilingual mortgage advisors serving Florida and North Carolina.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Primo Team",
    description: "Get in touch with the Primo Team. Call, text, or fill out our form. Bilingual mortgage advisors serving Florida and North Carolina.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {children}
    </>
  );
}
