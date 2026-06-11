import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import { getAlternates } from "@/lib/metadata";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Primo Team | Impulsado por Rize Mortgage",
  description: "Tu equipo hipotecario bilingüe de confianza. Compra tu casa con claridad y confianza. Sirviendo Florida y Carolina del Norte.",
  keywords: ["hipoteca", "préstamo de vivienda", "bilingüe", "español", "Florida", "Carolina del Norte", "comprador primerizo"],
  alternates: getAlternates("/"),
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "es";

  return (
    <html lang={lang}>
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1675816300127336&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton lang={lang as "en" | "es"} />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1675816300127336');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
