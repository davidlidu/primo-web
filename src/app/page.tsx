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
  description: "Bilingual mortgage team powered by Rize Mortgage",
  url: "https://primoteam.com", // TODO: Replace with final domain before launch
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
        "Working with the Primo Team was an exceptional experience from start to finish. They made the entire mortgage process smooth, transparent, and stress-free. I always felt informed and supported.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Arda S." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "The team went above and beyond to find the best loan option for my situation. Communication was excellent throughout the process, and they closed faster than I expected.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Danait P." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "I was nervous as a first-time buyer, but Primo made everything so clear. They explained every step in plain language and were always available when I had questions.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={reviewSchema} />
      <Header lang="en" />
      <main>
        <Hero lang="en" />
        <ValueTiles lang="en" />
        <HowItWorks lang="en" />
        <Programs lang="en" />
        <MortgageCalculatorCompact lang="en" />
        <Testimonials lang="en" />
        <TeamSection lang="en" />
        <LeadCapture lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
