"use client";

import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

interface HeroProps {
  lang?: "en" | "es";
}

export default function Hero({ lang = "en" }: HeroProps) {
  const content = {
    en: {
      headline: "Buy with clarity and confidence",
      headlineAlt: "Compra con claridad y confianza",
      subhead: `${BRAND.name}, powered by Rize Mortgage`,
      description:
        "We're a bilingual mortgage team dedicated to guiding you home. From first conversation to closing day, we're with you every step.",
      cta1: "Get Pre-Approved",
      cta2: "Get a Rate Quote",
      cta3: "Call Us Now",
    },
    es: {
      headline: "Compra con claridad y confianza",
      headlineAlt: "Buy with clarity and confidence",
      subhead: `${BRAND.name}, impulsado por Rize Mortgage`,
      description:
        "Somos un equipo hipotecario bilingüe dedicado a guiarte hacia tu hogar. Desde la primera conversación hasta el día del cierre, estamos contigo en cada paso.",
      cta1: "Pre-Aprobación",
      cta2: "Cotización de Tasa",
      cta3: "Llámanos Ahora",
    },
  };

  const c = content[lang];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFBA00]/10 to-[#F36C37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#241C4F]/5 rounded-full blur-3xl" />

      {/* Geometric Shapes */}
      <div className="absolute top-32 left-10 w-20 h-20 border-4 border-[#F36C37]/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-32 h-32 border-4 border-[#241C4F]/10 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#FFBA00] rounded-full hidden lg:block animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Bilingual Headline */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                {lang === "en" ? "Bilingual Mortgage Team" : "Equipo Hipotecario Bilingüe"}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#241C4F] leading-tight">
                {c.headline}
              </h1>
              <p className="text-xl sm:text-2xl text-[#F36C37]/80 font-light mt-2 italic">
                {c.headlineAlt}
              </p>
            </div>

            <p className="text-lg text-[#241C4F]/70 mb-4 font-medium">
              {c.subhead}
            </p>
            <p className="text-base text-[#241C4F]/60 mb-8 max-w-xl mx-auto lg:mx-0">
              {c.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href={lang === "en" ? "/contact" : "/es/contacto"} variant="primary" size="lg">
                {c.cta1}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button href={lang === "en" ? "/contact" : "/es/contacto"} variant="outline" size="lg">
                {c.cta2}
              </Button>
            </div>

            {/* Phone CTA */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#241C4F] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[#241C4F]/60">{c.cta3}</p>
                <a href={`tel:${BRAND.phone.replace(/\D/g, "")}`} className="text-lg font-semibold text-[#241C4F] hover:text-[#F36C37] transition-colors">
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Visual Element - House Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main card with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFBA00] to-[#F36C37] rounded-3xl rotate-3 shadow-2xl shadow-[#F36C37]/30" />
              <div className="absolute inset-0 bg-white rounded-3xl -rotate-3 shadow-xl flex items-center justify-center overflow-hidden bg-cover bg-center opacity-90" style={{ backgroundImage: "url('/images/florida-home-grande.jpeg')" }}>
                {/* House Icon / Illustration */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#E8E0DC] flex items-center justify-center hidden">
                    <svg className="w-16 h-16 text-[#241C4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="space-y-2 hidden">
                    <div className="h-3 bg-[#E8E0DC] rounded-full w-3/4 mx-auto" />
                    <div className="h-3 bg-[#E8E0DC] rounded-full w-1/2 mx-auto" />
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#ffffff]">10+</div>
                      <div className="text-xl font-bold text-[#ffffff]/70">{lang === "en" ? "Years Exp." : "Años Exp."}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#ffffff]">2</div>
                      <div className="text-xl font-bold text-[#ffffff]/70">{lang === "en" ? "States" : "Estados"}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#ffffff]">100%</div>
                      <div className="text-xl font-bold text-[#ffffff]/70">{lang === "en" ? "Bilingual" : "Bilingüe"}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#241C4F] text-white px-6 py-3 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#FFBA00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{lang === "en" ? "Trusted by families" : "Confianza familiar"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#E8E0DC]/60 backdrop-blur-sm border-t border-[#241C4F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {(lang === "en"
              ? [
                { stat: "94%", label: "Pull-through rate", sub: "vs ~81% industry avg" },
                { stat: "~23", label: "Days avg to Clear to Close", sub: "vs ~36 industry avg" },
                { stat: "100%", label: "On-time closings", sub: "" },
                { stat: "91%", label: "Repeat client rate", sub: "" },
              ]
              : [
                { stat: "94%", label: "Tasa de cumplimiento", sub: "vs ~81% promedio de la industria" },
                { stat: "~23", label: "Días promedio a Clear to Close", sub: "vs ~36 promedio de la industria" },
                { stat: "100%", label: "Cierres a tiempo", sub: "" },
                { stat: "91%", label: "Tasa de clientes recurrentes", sub: "" },
              ]
            ).map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#241C4F]">{item.stat}</div>
                <div className="text-sm text-[#241C4F]/70 font-medium mt-1">{item.label}</div>
                {item.sub && (
                  <div className="text-xs text-[#F36C37] mt-0.5">{item.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
