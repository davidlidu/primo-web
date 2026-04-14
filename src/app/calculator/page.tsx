import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MortgageCalculator from "@/components/sections/MortgageCalculator";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Mortgage Calculator | Primo Team",
  description:
    "Estimate your monthly mortgage payment. Free calculator from Primo Team, powered by Rize Mortgage.",
  alternates: getAlternates("/calculator"),
  openGraph: {
    title: "Mortgage Calculator | Primo Team",
    description: "Estimate your monthly mortgage payment. Free calculator from Primo Team, powered by Rize Mortgage.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Mortgage Calculator | Primo Team",
    description: "Estimate your monthly mortgage payment. Free calculator from Primo Team, powered by Rize Mortgage.",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <Header lang="en" />
      <main className="pt-20">
        <MortgageCalculator lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
