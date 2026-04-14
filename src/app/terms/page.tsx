import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms of Use | Primo Team",
  description: "Terms of use for Primo Team mortgage services website.",
  alternates: getAlternates("/terms"),
  openGraph: {
    title: "Terms of Use | Primo Team",
    description: "Terms of use for Primo Team mortgage services website.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Primo Team",
    description: "Terms of use for Primo Team mortgage services website.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header lang="en" />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#241C4F] mb-8">Terms of Use</h1>
            <p className="text-[#241C4F]/60 mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg max-w-none text-[#241C4F]/80">
              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">2. About {BRAND.name}</h2>
              <p className="mb-4">
                {BRAND.name} is a team of licensed mortgage loan originators operating under Rize Mortgage. {BRAND.name} is not a lender. All loan products and services are provided by Rize Mortgage.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">3. No Guarantee of Loan Approval</h2>
              <p className="mb-4">
                Information provided on this website is for educational purposes only and does not constitute a commitment to lend or a guarantee of loan approval. All loan applications are subject to credit approval and other conditions.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">4. Use of Website</h2>
              <p className="mb-4">
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of {BRAND.name} or its content suppliers and is protected by copyright laws.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                {BRAND.name} shall not be liable for any damages arising out of your use or inability to use this website or its content.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">7. Third-Party Links</h2>
              <p className="mb-4">
                This website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Your continued use of the website constitutes acceptance of any modifications.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">9. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Use, please contact us at:
              </p>
              <p className="mb-4">
                Email: {BRAND.email}<br />
                Phone: {BRAND.phone}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
