import { Metadata } from "next";
import { getAlternates } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Primo Team",
  description: "Equipo hipotecario bilingüe impulsado por Rize Mortgage",
  url: "https://primoteam.com/es/contacto", // TODO: Replace with final domain before launch
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
  title: "Contáctanos | Primo Team",
  description: "Comunícate con Primo Team. Llama, envía un mensaje o completa nuestro formulario. Asesores hipotecarios bilingües en Florida y Carolina del Norte.",
  alternates: getAlternates("/es/contacto"),
  openGraph: {
    title: "Contáctanos | Primo Team",
    description: "Comunícate con Primo Team. Llama, envía un mensaje o completa nuestro formulario. Asesores hipotecarios bilingües en Florida y Carolina del Norte.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Contáctanos | Primo Team",
    description: "Comunícate con Primo Team. Llama, envía un mensaje o completa nuestro formulario. Asesores hipotecarios bilingües en Florida y Carolina del Norte.",
  },
};

export default function ContactLayoutES({
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
