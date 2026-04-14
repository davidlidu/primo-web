import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Buy a Home | Primo Team",
  description: "Start your homeownership journey with Primo Team. Get pre-approved today and buy your home with confidence.",
  alternates: getAlternates("/buy"),
  openGraph: {
    title: "Buy a Home | Primo Team",
    description: "Start your homeownership journey with Primo Team. Get pre-approved today and buy your home with confidence.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Buy a Home | Primo Team",
    description: "Start your homeownership journey with Primo Team. Get pre-approved today and buy your home with confidence.",
  },
};

export default function BuyPage() {
  return (
    <>
      <Header lang="en" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#241C4F]/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                  Home Purchase
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                  Your Dream Home Starts Here
                </h1>
                <p className="text-xl text-[#241C4F]/70 leading-relaxed mb-8">
                  Whether you&apos;re a first-time buyer or upgrading to your next home, we&apos;ll guide you through every step with clarity and confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Get Pre-Approved
                  </Button>
                  <Button href={`tel:${BRAND.phone.replace(/\D/g, "")}`} variant="outline" size="lg">
                    Call {BRAND.phone}
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFBA00] to-[#F36C37] rounded-3xl rotate-3" />
                  <div className="relative bg-white rounded-3xl -rotate-3 p-8 shadow-xl">
                    <h3 className="text-xl font-semibold text-[#241C4F] mb-6">Quick Pre-Qualification</h3>
                    <ul className="space-y-4">
                      {["Basic financial info", "Estimated home price", "Down payment amount", "Get results in minutes"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#F36C37]/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#F36C37]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-[#241C4F]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First-Time Buyer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">First-Time Homebuyer?</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                We specialize in helping first-time buyers navigate the process. Here&apos;s what you need to know.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Credit Requirements",
                  description: "Most loans require a minimum 620 credit score, but some programs go lower. We'll help you understand your options.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Down Payment",
                  description: "Put as little as 3% down with conventional loans, or 3.5% with FHA. VA loans offer 0% down for eligible veterans.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Pre-Approval Power",
                  description: "A pre-approval letter shows sellers you're serious. In competitive markets, this can make or break your offer.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#E8E0DC]/30 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-[#241C4F] text-white flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#241C4F] mb-3">{item.title}</h3>
                  <p className="text-[#241C4F]/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Programs */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Loan Programs for Home Buyers</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                We have access to a wide range of loan products through Rize Mortgage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Conventional", desc: "Traditional financing with competitive rates" },
                { name: "FHA", desc: "Lower down payment, flexible credit" },
                { name: "VA", desc: "No down payment for veterans" },
                { name: "Jumbo", desc: "Financing for high-value homes" },
              ].map((loan, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">{loan.name}</h3>
                  <p className="text-white/60 text-sm">{loan.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/loan-options" variant="primary" size="lg">
                View All Loan Options
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start House Hunting?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get pre-approved today and shop with confidence.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get Pre-Approved Now
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
