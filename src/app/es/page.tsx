import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ValueTiles from "@/components/sections/ValueTiles";
import HowItWorks from "@/components/sections/HowItWorks";
import Programs from "@/components/sections/Programs";
import MortgageCalculatorCompact from "@/components/sections/MortgageCalculatorCompact";
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import LeadCapture from "@/components/sections/LeadCapture";
import JsonLd from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Primo Team",
  description: "Equipo hipotecario bilingüe impulsado por Rize Mortgage",
  url: "https://primoteam.com/es", // TODO: Replace with final domain before launch
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
  areaServed: ["Florida", "North Carolina"],
  knowsLanguage: ["en", "es"],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Primo Team",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Gustavo C." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Trabajar con Primo Team fue una experiencia excepcional de principio a fin. Hicieron todo el proceso hipotecario fluido, transparente y sin estrés. Siempre me sentí informado y apoyado.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arda S." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "El equipo fue más allá para encontrar la mejor opción de préstamo para mi situación. La comunicación fue excelente durante todo el proceso, y cerraron más rápido de lo que esperaba.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Danait P." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Estaba nervioso como comprador primerizo, pero Primo hizo todo muy claro. Explicaron cada paso en lenguaje simple y siempre estuvieron disponibles cuando tenía preguntas.",
    },
  ],
};

export default function HomePageES() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={reviewSchema} />
      <Header lang="es" />
      <main>
        <Hero lang="es" />
        <ValueTiles lang="es" />
        <HowItWorks lang="es" />
        <Programs lang="es" />
        <MortgageCalculatorCompact lang="es" />
        <Testimonials lang="es" />
        <TeamSection lang="es" />
        <LeadCapture lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
