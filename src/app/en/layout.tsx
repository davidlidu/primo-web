import type { Metadata } from "next";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Primo Team | Powered by Rize Mortgage",
  description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina.",
  keywords: ["mortgage", "home loan", "bilingual", "Spanish", "Florida", "North Carolina", "first-time homebuyer"],
  alternates: getAlternates("/en"),
  openGraph: {
    title: "Primo Team | Powered by Rize Mortgage",
    description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Primo Team | Powered by Rize Mortgage",
    description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina.",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
