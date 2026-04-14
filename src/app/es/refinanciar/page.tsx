import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Refinanciar Tu Casa | Primo Team",
  description: "Reduce tu tasa, baja tu pago mensual o accede al capital de tu casa. Obtén una evaluación gratuita de refinanciamiento.",
  alternates: getAlternates("/es/refinanciar"),
  openGraph: {
    title: "Refinanciar Tu Casa | Primo Team",
    description: "Reduce tu tasa, baja tu pago mensual o accede al capital de tu casa. Obtén una evaluación gratuita de refinanciamiento.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Refinanciar Tu Casa | Primo Team",
    description: "Reduce tu tasa, baja tu pago mensual o accede al capital de tu casa. Obtén una evaluación gratuita de refinanciamiento.",
  },
};

export default function RefinancePageES() {
  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Refinanciamiento
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                Tu Casa Podría Estar Trabajando Más para Ti
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed mb-8">
                Ya sea que quieras reducir tu pago mensual, bajar tu tasa o acceder al capital de tu casa, te ayudaremos a encontrar la solución correcta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/es/contacto" variant="primary" size="lg">
                  Obtener Cotización Gratis
                </Button>
                <Button href={`tel:${BRAND.phone.replace(/\D/g, "")}`} variant="outline" size="lg">
                  Llamar {BRAND.phone}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Refinance Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Tipos de Refinanciamiento</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                Elige la opción de refinanciamiento que se ajuste a tus metas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#E8E0DC]/30 to-white rounded-2xl p-8 border border-[#E8E0DC]">
                <div className="w-16 h-16 rounded-2xl bg-[#241C4F] text-white flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#241C4F] mb-3">Refinanciamiento de Tasa y Plazo</h3>
                <p className="text-[#241C4F]/60 mb-6 leading-relaxed">
                  Reduce tu tasa de interés o cambia el plazo de tu préstamo sin sacar efectivo. Perfecto si las tasas han bajado desde que obtuviste tu hipoteca original.
                </p>
                <ul className="space-y-3">
                  {["Reduce tu pago mensual", "Reduce el interés total pagado", "Cambia de ARM a tasa fija", "Acorta el plazo de tu préstamo"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#241C4F]/70">
                      <svg className="w-5 h-5 text-[#F36C37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#241C4F] to-[#241C4F]/90 rounded-2xl p-8 text-white">
                <div className="w-16 h-16 rounded-2xl bg-[#F36C37] text-white flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Refinanciamiento con Cash-Out</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Accede al capital que has construido en tu casa. Usa el efectivo para mejoras del hogar, consolidación de deudas, educación o cualquier gasto importante.
                </p>
                <ul className="space-y-3">
                  {["Renovaciones del hogar", "Consolidación de deudas", "Matrícula universitaria", "Gastos de emergencia", "Oportunidades de inversión"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <svg className="w-5 h-5 text-[#FFBA00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Refinance */}
        <section className="py-20 bg-[#E8E0DC]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-6">¿Cuándo Tiene Sentido Refinanciar?</h2>
              <p className="text-lg text-[#241C4F]/60 mb-12">
                Refinanciar no siempre es la mejor opción. Aquí hay algunas situaciones donde generalmente vale la pena:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Las Tasas Han Bajado", desc: "Si las tasas son más bajas que cuando obtuviste tu hipoteca" },
                { title: "Tu Crédito Mejoró", desc: "Un mejor crédito puede calificarte para mejores tasas" },
                { title: "Necesitas Efectivo", desc: "El capital de tu casa puede financiar gastos importantes" },
                { title: "Ajuste de ARM", desc: "Asegura una tasa fija antes de que tu ARM se ajuste" },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#241C4F] mb-2">{item.title}</h3>
                  <p className="text-[#241C4F]/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Evaluación de Refinanciamiento Gratis
            </h2>
            <p className="text-xl text-white/70 mb-8">
              ¿No estás seguro si refinanciar es lo correcto para ti? Revisemos tu situación juntos—sin compromiso.
            </p>
            <Button href="/es/contacto" variant="primary" size="lg">
              Obtener Tu Análisis Gratis
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
