import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TEAM, BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "About Us | Primo Team",
  description: "Meet the Primo Team - your bilingual mortgage experts with 10+ years of experience serving Florida and North Carolina.",
  alternates: getAlternates("/about"),
  openGraph: {
    title: "About Us | Primo Team",
    description: "Meet the Primo Team - your bilingual mortgage experts with 10+ years of experience serving Florida and North Carolina.",
    type: "website",
    locale: "en_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "About Us | Primo Team",
    description: "Meet the Primo Team - your bilingual mortgage experts with 10+ years of experience serving Florida and North Carolina.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header lang="en" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Our Story
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                We&apos;re Latino Migrants Who Understand Your Journey
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                {BRAND.name} was founded by Latino immigrants from Colombia who know firsthand what it means to build a life in a new country. We created this team because we believe every family deserves a mortgage advisor who speaks their language—literally and figuratively.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#241C4F] mb-6">
                  10+ Years of Experience, Built for You
                </h2>
                <div className="space-y-4 text-[#241C4F]/70 leading-relaxed">
                  <p>
                    Our team brings over a decade of combined experience in the mortgage industry. We&apos;ve worked our way up from internships to processing, from management to becoming licensed loan officers and branch managers.
                  </p>
                  <p>
                    This journey gave us deep insight into every step of the mortgage process. We know the pitfalls, the shortcuts, and most importantly, we know how to get deals done for families who might have been overlooked by traditional lenders.
                  </p>
                  <p>
                    Today, we operate as {BRAND.name} within Rize Mortgage, giving you access to a wide range of loan products while maintaining the personal, high-touch service that sets us apart.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#241C4F] text-white rounded-2xl p-8">
                  <div className="text-4xl font-bold text-[#FFBA00] mb-2">10+</div>
                  <p className="text-white/70">Years Combined Experience</p>
                </div>
                <div className="bg-[#F36C37] text-white rounded-2xl p-8">
                  <div className="text-4xl font-bold mb-2">2</div>
                  <p className="text-white/90">States Licensed</p>
                </div>
                <div className="bg-[#E8E0DC] text-[#241C4F] rounded-2xl p-8">
                  <div className="text-4xl font-bold text-[#F36C37] mb-2">100%</div>
                  <p className="text-[#241C4F]/70">Bilingual Team</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFBA00] to-[#F36C37] text-white rounded-2xl p-8">
                  <div className="text-4xl font-bold mb-2">5</div>
                  <p className="text-white/90">Dedicated Experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bilingual Matters */}
        <section className="py-20 bg-[#241C4F] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Bilingual Matters</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Buying a home is one of the biggest financial decisions you&apos;ll ever make. You deserve to understand every detail, ask every question, and feel confident in your choices—in the language you think and dream in.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#F36C37] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Clear Communication</h3>
                  <p className="text-white/60 text-sm">No misunderstandings. No confusion. Every term explained clearly.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#F36C37] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cultural Understanding</h3>
                  <p className="text-white/60 text-sm">We understand Latino family dynamics and financial goals.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#F36C37] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Trust & Comfort</h3>
                  <p className="text-white/60 text-sm">Feel at ease discussing your finances with someone who gets it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Meet Our Team</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                Every member of the Primo Team is committed to your success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.map((member, index) => (
                <div key={index} className="bg-[#E8E0DC]/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#241C4F]">{member.name}</h3>
                  <p className="text-[#F36C37] font-medium">{member.role}</p>
                  <p className="text-sm text-[#241C4F]/50 mt-1">{member.nmls}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s start with a conversation. No pressure, no commitment—just honest advice.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#241C4F] text-white font-semibold rounded-full hover:bg-white hover:text-[#241C4F] transition-all shadow-lg"
            >
              Schedule a Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
