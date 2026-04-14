import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MortgageCalculator from "@/components/sections/MortgageCalculator";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Calculadora de Hipoteca | Primo Team",
  description:
    "Estima tu pago mensual de hipoteca. Calculadora gratuita de Primo Team, impulsado por Rize Mortgage.",
  alternates: getAlternates("/es/calculadora"),
  openGraph: {
    title: "Calculadora de Hipoteca | Primo Team",
    description: "Estima tu pago mensual de hipoteca. Calculadora gratuita de Primo Team, impulsado por Rize Mortgage.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Calculadora de Hipoteca | Primo Team",
    description: "Estima tu pago mensual de hipoteca. Calculadora gratuita de Primo Team, impulsado por Rize Mortgage.",
  },
};

export default function CalculadoraPage() {
  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        <MortgageCalculator lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
