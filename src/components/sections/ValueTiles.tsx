interface ValueTilesProps {
  lang?: "en" | "es";
}

const values = {
  en: [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Personalized Guidance",
      description:
        "No call centers. Real relationships with real people who know your name and your goals.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Bilingual Support",
      description:
        "We're native Spanish speakers from Colombia. Communicate in the language you're most comfortable with.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast & Organized",
      description:
        "Clear process, quick responses, and disciplined follow-up. No lead gets lost, no question goes unanswered.",
    },
  ],
  es: [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Guía Personalizada",
      description:
        "Sin centros de llamadas. Relaciones reales con personas que conocen tu nombre y tus metas.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Apoyo Bilingüe",
      description:
        "Somos hablantes nativos de español de Colombia. Comunícate en el idioma que te sea más cómodo.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rápido y Organizado",
      description:
        "Proceso claro, respuestas rápidas y seguimiento disciplinado. Ningún cliente se pierde, ninguna pregunta queda sin respuesta.",
    },
  ],
};

export default function ValueTiles({ lang = "en" }: ValueTilesProps) {
  const items = values[lang];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFBA00] via-[#F36C37] to-[#FFBA00]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#241C4F] mb-4">
            {lang === "en" ? "Why Choose Primo Team?" : "¿Por Qué Elegir Primo Team?"}
          </h2>
          <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
            {lang === "en"
              ? "We bring 10+ years of experience and a personal touch to every transaction."
              : "Aportamos más de 10 años de experiencia y un toque personal a cada transacción."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#E8E0DC]/30 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#E8E0DC]"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#FFBA00] to-[#F36C37] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#241C4F] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#241C4F] mb-3">
                {item.title}
              </h3>
              <p className="text-[#241C4F]/60 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#FFBA00] to-[#F36C37] scale-x-0 group-hover:scale-x-100 transition-transform rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
