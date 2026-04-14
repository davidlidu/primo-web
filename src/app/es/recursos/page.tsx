import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Recursos | Primo Team",
  description: "Guías hipotecarias, preguntas frecuentes y recursos educativos para ayudarte en tu camino hacia la propiedad.",
  alternates: getAlternates("/es/recursos"),
  openGraph: {
    title: "Recursos | Primo Team",
    description: "Guías hipotecarias, preguntas frecuentes y recursos educativos para ayudarte en tu camino hacia la propiedad.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Recursos | Primo Team",
    description: "Guías hipotecarias, preguntas frecuentes y recursos educativos para ayudarte en tu camino hacia la propiedad.",
  },
};

export default function ResourcesPageES() {
  const faqs = [
    {
      question: "¿Qué puntaje de crédito necesito para comprar una casa?",
      answer: "La mayoría de los préstamos convencionales requieren un puntaje mínimo de 620. Los préstamos FHA pueden aceptar hasta 580 con 3.5% de pago inicial, o 500 con 10%. Te ayudaremos a entender tus opciones según tu situación específica.",
    },
    {
      question: "¿Cuánto pago inicial necesito?",
      answer: "Los requisitos de pago inicial varían según el tipo de préstamo. Los préstamos convencionales pueden ser tan bajos como 3%, FHA es 3.5%, y los préstamos VA ofrecen 0% para veteranos elegibles.",
    },
    {
      question: "¿Cuál es la diferencia entre pre-calificación y pre-aprobación?",
      answer: "La pre-calificación es un estimado rápido basado en información auto-reportada. La pre-aprobación implica verificación de documentos y te da una imagen más precisa—y una carta que los vendedores toman en serio.",
    },
    {
      question: "¿Cuánto tiempo toma el proceso hipotecario?",
      answer: "Típicamente 30-45 días desde la solicitud hasta el cierre, aunque puede ser más rápido o más lento dependiendo de la situación. Te mantendremos informado en cada paso.",
    },
    {
      question: "¿Hablan español?",
      answer: "¡Sí! Todo nuestro equipo habla español con fluidez. Somos inmigrantes latinos de Colombia y podemos guiarte a través de todo el proceso en tu idioma preferido.",
    },
    {
      question: "¿Qué documentos necesito para aplicar?",
      answer: "Generalmente: 2 años de declaraciones de impuestos, comprobantes de pago recientes, 2 meses de estados de cuenta bancarios e identificación. Te daremos una lista completa según tu tipo de préstamo específico.",
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
      <Header lang="es" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Recursos
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                El Conocimiento Es Poder
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                Creemos que compradores informados toman mejores decisiones. Explora nuestras guías y preguntas frecuentes para prepararte para tu camino hacia la propiedad.
              </p>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Guías Gratuitas</h2>
              <p className="text-lg text-[#241C4F]/60">Descarga nuestros recursos útiles</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Guía para Compradores Primerizos",
                  description: "Todo lo que necesitas saber sobre comprar tu primera casa, explicado en inglés y español.",
                  icon: "📘",
                },
                {
                  title: "Lista de Documentos",
                  description: "Una lista completa de documentos que necesitarás para tu solicitud de hipoteca.",
                  icon: "📋",
                },
                {
                  title: "Guía de Decisión de Refinanciamiento",
                  description: "¿Es el refinanciamiento correcto para ti? Usa nuestra guía para descubrirlo.",
                  icon: "🔄",
                },
              ].map((guide, index) => (
                <div key={index} className="bg-[#E8E0DC]/30 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-4">{guide.icon}</div>
                  <h3 className="text-xl font-semibold text-[#241C4F] mb-3">{guide.title}</h3>
                  <p className="text-[#241C4F]/60 mb-6">{guide.description}</p>
                  <Button href="/es/contacto" variant="outline" size="sm">
                    Solicitar Guía
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
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-[#241C4F]/60">Respuestas rápidas a preguntas comunes</p>
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
              ¿Tienes Más Preguntas?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Estamos aquí para ayudar. Comunícate cuando quieras—en inglés o español.
            </p>
            <Button href="/es/contacto" variant="primary" size="lg">
              Contáctanos
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
