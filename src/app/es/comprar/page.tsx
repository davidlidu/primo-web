import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Comprar una Casa | Primo Team",
  description: "Comienza tu camino hacia la propiedad con Primo Team. Obtén tu pre-aprobación hoy y compra tu casa con confianza.",
  alternates: getAlternates("/es/comprar"),
  openGraph: {
    title: "Comprar una Casa | Primo Team",
    description: "Comienza tu camino hacia la propiedad con Primo Team. Obtén tu pre-aprobación hoy y compra tu casa con confianza.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Comprar una Casa | Primo Team",
    description: "Comienza tu camino hacia la propiedad con Primo Team. Obtén tu pre-aprobación hoy y compra tu casa con confianza.",
  },
};

export default function BuyPageES() {
  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                  Compra de Casa
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                  Tu Casa Soñada Comienza Aquí
                </h1>
                <p className="text-xl text-[#241C4F]/70 leading-relaxed mb-8">
                  Ya sea que compres por primera vez o estés mejorando a tu próxima casa, te guiaremos en cada paso con claridad y confianza.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/es/contacto" variant="primary" size="lg">
                    Obtener Pre-Aprobación
                  </Button>
                  <Button href={`tel:${BRAND.phone.replace(/\D/g, "")}`} variant="outline" size="lg">
                    Llamar {BRAND.phone}
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFBA00] to-[#F36C37] rounded-3xl rotate-3" />
                  <div className="relative bg-white rounded-3xl -rotate-3 p-8 shadow-xl">
                    <h3 className="text-xl font-semibold text-[#241C4F] mb-6">Pre-Calificación Rápida</h3>
                    <ul className="space-y-4">
                      {["Información financiera básica", "Precio estimado de la casa", "Monto del pago inicial", "Obtén resultados en minutos"].map((item, i) => (
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
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">¿Primera Vez Comprando?</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                Nos especializamos en ayudar a compradores primerizos a navegar el proceso.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Requisitos de Crédito",
                  description: "La mayoría de los préstamos requieren un puntaje mínimo de 620, pero algunos programas aceptan menos. Te ayudaremos a entender tus opciones.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Pago Inicial",
                  description: "Pon tan solo 3% con préstamos convencionales, o 3.5% con FHA. Los préstamos VA ofrecen 0% para veteranos elegibles.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Poder de Pre-Aprobación",
                  description: "Una carta de pre-aprobación muestra a los vendedores que eres serio. En mercados competitivos, esto puede marcar la diferencia.",
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
              <h2 className="text-3xl font-bold text-white mb-4">Programas de Préstamo para Compradores</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Tenemos acceso a una amplia gama de productos de préstamo a través de Rize Mortgage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Convencional", desc: "Financiamiento tradicional con tasas competitivas" },
                { name: "FHA", desc: "Pago inicial más bajo, crédito flexible" },
                { name: "VA", desc: "Sin pago inicial para veteranos" },
                { name: "Jumbo", desc: "Financiamiento para casas de alto valor" },
              ].map((loan, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-2">{loan.name}</h3>
                  <p className="text-white/60 text-sm">{loan.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/es/opciones-de-prestamo" variant="primary" size="lg">
                Ver Todas las Opciones
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para Buscar Casa?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Obtén tu pre-aprobación hoy y compra con confianza.
            </p>
            <Button href="/es/contacto" variant="secondary" size="lg">
              Obtener Pre-Aprobación Ahora
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
