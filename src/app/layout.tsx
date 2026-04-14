import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import { getAlternates } from "@/lib/metadata";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primo Team | Powered by Rize Mortgage",
  description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina.",
  keywords: ["mortgage", "home loan", "bilingual", "Spanish", "Florida", "North Carolina", "first-time homebuyer"],
  alternates: getAlternates("/"),
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en";

  return (
    <html lang={lang}>
      <head />
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton lang={lang as "en" | "es"} />
      </body>
    </html>
  );
}
