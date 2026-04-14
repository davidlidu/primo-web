import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { CONFORMING_PRODUCTS, NON_QM_PRODUCTS } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Conventional Loans",
      description: "Traditional financing with competitive rates. As low as 3% down, 620+ FICO.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "FHA Loans",
      description: "Government-backed loans with lower down payment and credit requirements. 3.5% down, 580+ FICO.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "VA Loans",
      description: "Zero down payment and no mortgage insurance for eligible veterans and active-duty military.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "Bank Statement Loans",
      description: "Qualify using your bank deposits, not tax returns. For self-employed borrowers.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "DSCR Investor Loans",
      description: "Qualify based on property rental income, not personal income. 1-8 units, up to $3.5M.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
  ],
};

export const metadata: Metadata = {
  title: "Loan Options | Primo Team",
  description:
    "Explore our 14+ mortgage programs including conventional, FHA, VA, bank statement, DSCR, foreign national, and more Non-QM options.",
  alternates: getAlternates("/loan-options"),
  openGraph: {
    title: "Loan Options | Primo Team",
    description: "Explore our 14+ mortgage programs including conventional, FHA, VA, bank statement, DSCR, foreign national, and more Non-QM options.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Loan Options | Primo Team",
    description: "Explore our 14+ mortgage programs including conventional, FHA, VA, bank statement, DSCR, foreign national, and more Non-QM options.",
  },
};

export default function LoanOptionsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Header lang="en" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Loan Programs
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                Find the Right Loan for Your Situation
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                Whether you&apos;re a W-2 employee, self-employed, an investor, or buying from abroad — we have a loan program for your situation. Unlike single-program lenders, we match you to the best option across all our programs.
              </p>
            </div>
          </div>
        </section>

        {/* Conforming Loans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Traditional Loans</h2>
              <p className="text-lg text-[#241C4F]/60">Traditional mortgage programs with proven track records</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFORMING_PRODUCTS.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white border border-[#E8E0DC] rounded-2xl p-8 hover:shadow-xl hover:border-[#F36C37]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center text-white text-xl font-bold mb-5">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#241C4F] mb-2">{product.title.en}</h3>
                  <p className="text-sm font-medium text-[#F36C37] mb-3">{product.tagline.en}</p>
                  <p className="text-[#241C4F]/60 text-sm leading-relaxed mb-6">{product.description.en}</p>
                  <Button href="/contact" variant="ghost" size="sm" className="group-hover:text-[#F36C37]">
                    Learn More →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-QM & Specialty Loans */}
        <section className="py-20 bg-[#E8E0DC]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#241C4F]/10 text-[#241C4F] text-sm font-medium rounded-full mb-4">
                Non-QM &amp; Specialty
              </span>
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Non-QM &amp; Specialty Loans</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                Solutions for Self-Employed, Investors &amp; Non-Traditional Borrowers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {NON_QM_PRODUCTS.map((product, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-[#241C4F]/10 rounded-2xl p-8 hover:shadow-xl hover:border-[#241C4F]/20 transition-all flex flex-col"
                >
                  {product.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[#F36C37] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                  <h3 className={`text-xl font-bold text-[#241C4F] mb-2 ${product.popular ? "pr-20" : ""}`}>
                    {product.title.en}
                  </h3>
                  <p className="text-sm text-[#241C4F]/60 mb-5">{product.tagline.en}</p>
                  <div className="border-t border-[#E8E0DC] pt-5 mb-6 flex-1">
                    <ul className="space-y-3">
                      {product.highlights.en.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#241C4F]/70">
                          <svg className="w-5 h-5 text-[#FFBA00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                    Check If You Qualify
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare Section */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Quick Comparison</h2>
              <p className="text-lg text-white/60">Key differences between popular loan types</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left text-white font-semibold">Feature</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Conventional</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">FHA</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">VA</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6">Min. Down Payment</td>
                    <td className="py-4 px-6 text-center">3%</td>
                    <td className="py-4 px-6 text-center">3.5%</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00] font-semibold">0%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6">Min. Credit Score</td>
                    <td className="py-4 px-6 text-center">620</td>
                    <td className="py-4 px-6 text-center">580</td>
                    <td className="py-4 px-6 text-center">620</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6">Mortgage Insurance</td>
                    <td className="py-4 px-6 text-center">Until 20% equity</td>
                    <td className="py-4 px-6 text-center">Life of loan*</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00] font-semibold">None</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Best For</td>
                    <td className="py-4 px-6 text-center">Strong credit</td>
                    <td className="py-4 px-6 text-center">First-time buyers</td>
                    <td className="py-4 px-6 text-center">Veterans</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-white/40 text-sm text-center mt-6">
              *FHA MIP rules vary. Contact us for details on your specific situation.
            </p>

            <div className="mt-10 text-center">
              <p className="text-white/60 text-sm bg-white/5 rounded-xl px-6 py-4 inline-block">
                For self-employed and investor programs, qualification criteria vary significantly.{" "}
                <a href="/contact" className="text-[#FFBA00] hover:text-[#FFBA00]/80 underline transition-colors">
                  Contact us
                </a>{" "}
                for a personalized assessment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Loan Is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;ll review your situation and recommend the best options.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get Personalized Advice
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
