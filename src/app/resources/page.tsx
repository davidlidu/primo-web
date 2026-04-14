import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Resources | Primo Team",
  description: "Mortgage guides, FAQs, and educational resources to help you on your homeownership journey.",
  alternates: getAlternates("/resources"),
  openGraph: {
    title: "Resources | Primo Team",
    description: "Mortgage guides, FAQs, and educational resources to help you on your homeownership journey.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Resources | Primo Team",
    description: "Mortgage guides, FAQs, and educational resources to help you on your homeownership journey.",
  },
};

export default function ResourcesPage() {
  const faqs = [
    {
      question: "What credit score do I need to buy a home?",
      answer: "Most conventional loans require a minimum 620 credit score. FHA loans can go as low as 580 with 3.5% down, or 500 with 10% down. We can help you understand your options based on your specific situation.",
    },
    {
      question: "How much down payment do I need?",
      answer: "Down payment requirements vary by loan type. Conventional loans can be as low as 3%, FHA is 3.5%, and VA loans offer 0% down for eligible veterans. We'll help you find the best option for your budget.",
    },
    {
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is a quick estimate based on self-reported information. Pre-approval involves document verification and gives you a more accurate picture—and a letter that sellers take seriously.",
    },
    {
      question: "How long does the mortgage process take?",
      answer: "Typically 30-45 days from application to closing, though it can be faster or slower depending on the situation. We'll keep you informed every step of the way.",
    },
    {
      question: "Do you speak Spanish?",
      answer: "¡Sí! Our entire team is fluent in Spanish. We're Latino immigrants from Colombia and can guide you through the entire process in your preferred language.",
    },
    {
      question: "What documents do I need to apply?",
      answer: "Generally: 2 years of tax returns, recent pay stubs, 2 months of bank statements, and ID. We'll provide a complete checklist based on your specific loan type.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Header lang="en" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Resources
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                Knowledge Is Power
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                We believe informed buyers make better decisions. Explore our guides and FAQs to prepare for your homeownership journey.
              </p>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Free Guides</h2>
              <p className="text-lg text-[#241C4F]/60">Download our helpful resources</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "First-Time Homebuyer Guide",
                  description: "Everything you need to know about buying your first home, explained in English and Spanish.",
                  icon: "📘",
                },
                {
                  title: "Document Checklist",
                  description: "A complete list of documents you'll need for your mortgage application.",
                  icon: "📋",
                },
                {
                  title: "Refinance Decision Guide",
                  description: "Is refinancing right for you? Use our guide to find out.",
                  icon: "🔄",
                },
              ].map((guide, index) => (
                <div key={index} className="bg-[#E8E0DC]/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{guide.icon}</div>
                  <h3 className="text-xl font-semibold text-[#241C4F] mb-3">{guide.title}</h3>
                  <p className="text-[#241C4F]/60 mb-6">{guide.description}</p>
                  <Button href="/contact" variant="outline" size="sm">
                    Request Guide
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#E8E0DC]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-[#241C4F]/60">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-xl shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-[#241C4F] pr-4">{faq.question}</h3>
                    <svg className="w-5 h-5 text-[#F36C37] flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[#241C4F]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have More Questions?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              We&apos;re here to help. Reach out anytime—in English or Spanish.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
