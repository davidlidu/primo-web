import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy | Primo Team",
  description: "Privacy policy for Primo Team mortgage services.",
  alternates: getAlternates("/privacy"),
  openGraph: {
    title: "Privacy Policy | Primo Team",
    description: "Privacy policy for Primo Team mortgage services.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Primo Team",
    description: "Privacy policy for Primo Team mortgage services.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header lang="en" />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#241C4F] mb-8">Privacy Policy</h1>
            <p className="text-[#241C4F]/60 mb-8">Last updated: January 2025</p>

            <div className="prose prose-lg max-w-none text-[#241C4F]/80">
              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                {BRAND.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Financial information necessary for mortgage applications</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Process mortgage applications and provide related services</li>
                <li>Communicate with you about our services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Improve our services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Rize Mortgage and its affiliates for mortgage processing</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Other parties with your consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">4. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">5. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                Email: {BRAND.email}<br />
                Phone: {BRAND.phone}
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">6. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
