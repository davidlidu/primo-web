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
