import Link from "next/link";

interface ProgramsProps {
  lang?: "en" | "es";
}

const programs = {
  en: [
    {
      title: "Purchase",
      subtitle: "Buy Your Home",
      description: "First-time buyer or upgrading? We'll find the right loan for your situation.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: "/buy",
      cta: "Get Pre-Approved",
    },
    {
      title: "Refinance",
      subtitle: "Lower Your Rate",
      description: "Reduce your monthly payment or tap into your home equity.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      href: "/refinance",
      cta: "Check Your Options",
    },
    {
      title: "Investment",
      subtitle: "Build Wealth",
      description: "Finance rental properties and grow your real estate portfolio.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      href: "/loan-options",
      cta: "Learn More",
    },
  ],
  es: [
    {
      title: "Compra",
      subtitle: "Compra Tu Casa",
      description: "¿Primera vez comprando o mejorando? Encontraremos el préstamo adecuado para tu situación.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: "/es/comprar",
      cta: "Pre-Aprobación",
    },
    {
      title: "Refinanciar",
      subtitle: "Reduce Tu Tasa",
      description: "Reduce tu pago mensual o accede al capital de tu casa.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      href: "/es/refinanciar",
      cta: "Ver Opciones",
    },
    {
      title: "Inversión",
      subtitle: "Construye Riqueza",
      description: "Financia propiedades de alquiler y haz crecer tu portafolio inmobiliario.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      href: "/es/opciones-de-prestamo",
      cta: "Más Información",
    },
  ],
};

export default function Programs({ lang = "en" }: ProgramsProps) {
  const items = programs[lang];

  return (
    <section className="py-20 bg-[#E8E0DC]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#241C4F] mb-4">
            {lang === "en" ? "Our Programs" : "Nuestros Programas"}
          </h2>
          <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
            {lang === "en"
              ? "Whether you're buying, refinancing, or investing, we have solutions tailored to your needs."
              : "Ya sea que estés comprando, refinanciando o invirtiendo, tenemos soluciones adaptadas a tus necesidades."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E0DC] hover:border-[#F36C37]/30 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFBA00]/5 to-[#F36C37]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFBA00] to-[#F36C37] text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-lg">
                  {program.icon}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className="text-sm text-[#F36C37] font-medium mb-1">{program.subtitle}</p>
                  <h3 className="text-2xl font-bold text-[#241C4F] mb-3">{program.title}</h3>
                  <p className="text-[#241C4F]/60 leading-relaxed">{program.description}</p>
                </div>

                {/* CTA */}
                <Link
                  href={program.href}
                  className="inline-flex items-center gap-2 text-[#241C4F] font-semibold group-hover:text-[#F36C37] transition-colors"
                >
                  {program.cta}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
