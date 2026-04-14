import type { Metadata } from "next";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Primo Team | Impulsado por Rize Mortgage",
  description: "Tu equipo hipotecario bilingüe de confianza. Compra tu casa con claridad y confianza. Sirviendo Florida y Carolina del Norte.",
  keywords: ["hipoteca", "préstamo de vivienda", "bilingüe", "español", "Florida", "Carolina del Norte", "comprador primerizo"],
  alternates: getAlternates("/es"),
  openGraph: {
    title: "Primo Team | Impulsado por Rize Mortgage",
    description: "Tu equipo hipotecario bilingüe de confianza. Compra tu casa con claridad y confianza. Sirviendo Florida y Carolina del Norte.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Primo Team | Impulsado por Rize Mortgage",
    description: "Tu equipo hipotecario bilingüe de confianza. Compra tu casa con claridad y confianza. Sirviendo Florida y Carolina del Norte.",
  },
};

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
