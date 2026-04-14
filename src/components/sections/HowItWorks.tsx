interface HowItWorksProps {
  lang?: "en" | "es";
}

const steps = {
  en: [
    {
      number: "01",
      title: "Contact Us",
      description: "Reach out by phone, text, or form. We'll have a quick conversation about your goals.",
    },
    {
      number: "02",
      title: "Pre-Qualification",
      description: "We review your basic financial picture and give you an estimate of what you can afford.",
    },
    {
      number: "03",
      title: "Pre-Approval",
      description: "Submit documents for a verified pre-approval letter that sellers take seriously.",
    },
    {
      number: "04",
      title: "Make an Offer",
      description: "Find your dream home and make a competitive offer backed by your pre-approval.",
    },
    {
      number: "05",
      title: "Closing Day",
      description: "We guide you through final steps until you have the keys in your hand.",
    },
  ],
  es: [
    {
      number: "01",
      title: "Contáctanos",
      description: "Comunícate por teléfono, mensaje o formulario. Tendremos una breve conversación sobre tus metas.",
    },
    {
      number: "02",
      title: "Pre-Calificación",
      description: "Revisamos tu situación financiera básica y te damos un estimado de lo que puedes pagar.",
    },
    {
      number: "03",
      title: "Pre-Aprobación",
      description: "Envía documentos para una carta de pre-aprobación verificada que los vendedores toman en serio.",
    },
    {
      number: "04",
      title: "Hacer una Oferta",
      description: "Encuentra tu casa soñada y haz una oferta competitiva respaldada por tu pre-aprobación.",
    },
    {
      number: "05",
      title: "Día del Cierre",
      description: "Te guiamos a través de los pasos finales hasta que tengas las llaves en tu mano.",
    },
  ],
};

export default function HowItWorks({ lang = "en" }: HowItWorksProps) {
  const items = steps[lang];

  return (
    <section className="py-20 bg-[#241C4F] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-white/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/10 rotate-45 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#F36C37] text-white text-sm font-medium rounded-full mb-4">
            {lang === "en" ? "Simple Process" : "Proceso Simple"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === "en" ? "How It Works" : "Cómo Funciona"}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {lang === "en"
              ? "From first contact to closing day, we make the mortgage process clear and stress-free."
              : "Desde el primer contacto hasta el día del cierre, hacemos el proceso hipotecario claro y sin estrés."}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFBA00] via-[#F36C37] to-[#FFBA00] -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {items.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Number */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto lg:mx-0 shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - mobile */}
                {index < items.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-[#F36C37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={lang === "en" ? "/contact" : "/es/contacto"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F36C37] text-white font-semibold rounded-full hover:bg-white hover:text-[#241C4F] transition-all duration-300 shadow-lg shadow-[#F36C37]/30"
          >
            {lang === "en" ? "Start Your Journey" : "Comienza Tu Camino"}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
