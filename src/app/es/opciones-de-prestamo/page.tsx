import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/JsonLd";
import { CONFORMING_PRODUCTS, NON_QM_PRODUCTS } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      name: "Préstamos Convencionales",
      description: "Financiamiento tradicional con tasas competitivas. Desde 3% de cuota inicial, 620+ FICO.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "Préstamos FHA",
      description: "Préstamos respaldados por el gobierno con menor pago inicial y requisitos de crédito. 3.5% de cuota inicial, 580+ FICO.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "Préstamos VA",
      description: "Cero pago inicial y sin seguro hipotecario para veteranos elegibles y militares en servicio activo.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "Préstamos con Estados de Cuenta",
      description: "Califica usando tus depósitos bancarios, no declaraciones de impuestos. Para trabajadores independientes.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
    {
      "@type": "Service",
      name: "Préstamos DSCR para Inversionistas",
      description: "Califica con el ingreso de renta de la propiedad, no tu ingreso personal. 1-8 unidades, hasta $3.5M.",
      provider: { "@type": "Organization", name: "Primo Team" },
    },
  ],
};

export const metadata: Metadata = {
  title: "Opciones de Préstamo | Primo Team",
  description:
    "Explora nuestros 14+ programas hipotecarios incluyendo convencional, FHA, VA, estados de cuenta, DSCR, extranjeros y más opciones Non-QM.",
  alternates: getAlternates("/es/opciones-de-prestamo"),
  openGraph: {
    title: "Opciones de Préstamo | Primo Team",
    description: "Explora nuestros 14+ programas hipotecarios incluyendo convencional, FHA, VA, estados de cuenta, DSCR, extranjeros y más opciones Non-QM.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Opciones de Préstamo | Primo Team",
    description: "Explora nuestros 14+ programas hipotecarios incluyendo convencional, FHA, VA, estados de cuenta, DSCR, extranjeros y más opciones Non-QM.",
  },
};

export default function LoanOptionsPageES() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Header lang="es" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Programas de Préstamos
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                Encuentra el Préstamo Correcto para Tu Situación
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                Ya sea que trabajes con W-2, seas independiente, inversionista o compres desde el extranjero — tenemos un programa para tu situación. A diferencia de prestamistas de un solo programa, te conectamos con la mejor opción entre todos nuestros programas.
              </p>
            </div>
          </div>
        </section>

        {/* Conforming Loans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Préstamos Tradicionales</h2>
              <p className="text-lg text-[#241C4F]/60">Programas hipotecarios tradicionales con resultados comprobados</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CONFORMING_PRODUCTS.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white border border-[#E8E0DC] rounded-2xl p-8 hover:shadow-xl hover:border-[#F36C37]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center text-white text-xl font-bold mb-5">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#241C4F] mb-2">{product.title.es}</h3>
                  <p className="text-sm font-medium text-[#F36C37] mb-3">{product.tagline.es}</p>
                  <p className="text-[#241C4F]/60 text-sm leading-relaxed mb-6">{product.description.es}</p>
                  <Button href="/es/contacto" variant="ghost" size="sm" className="group-hover:text-[#F36C37]">
                    Más Información →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-QM & Specialty Loans */}
        <section className="py-20 bg-[#E8E0DC]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#241C4F]/10 text-[#241C4F] text-sm font-medium rounded-full mb-4">
                Non-QM y Especializados
              </span>
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Préstamos Non-QM y Especializados</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                Soluciones para Independientes, Inversionistas y Prestatarios No Tradicionales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {NON_QM_PRODUCTS.map((product, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-[#241C4F]/10 rounded-2xl p-8 hover:shadow-xl hover:border-[#241C4F]/20 transition-all flex flex-col"
                >
                  {product.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[#F36C37] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                  <h3 className={`text-xl font-bold text-[#241C4F] mb-2 ${product.popular ? "pr-20" : ""}`}>
                    {product.title.es}
                  </h3>
                  <p className="text-sm text-[#241C4F]/60 mb-5">{product.tagline.es}</p>
                  <div className="border-t border-[#E8E0DC] pt-5 mb-6 flex-1">
                    <ul className="space-y-3">
                      {product.highlights.es.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#241C4F]/70">
                          <svg className="w-5 h-5 text-[#FFBA00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href="/es/contacto" variant="outline" size="sm" className="w-full justify-center">
                    Verifica si Calificas
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare Section */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Comparación Rápida</h2>
              <p className="text-lg text-white/60">Diferencias clave entre los tipos de préstamos populares</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left text-white font-semibold">Característica</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Convencional</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">FHA</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">VA</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6">Pago Inicial Mín.</td>
                    <td className="py-4 px-6 text-center">3%</td>
                    <td className="py-4 px-6 text-center">3.5%</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00] font-semibold">0%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6">Puntaje de Crédito Mín.</td>
                    <td className="py-4 px-6 text-center">620</td>
                    <td className="py-4 px-6 text-center">580</td>
                    <td className="py-4 px-6 text-center">620</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6">Seguro Hipotecario</td>
                    <td className="py-4 px-6 text-center">Hasta 20% de capital</td>
                    <td className="py-4 px-6 text-center">Vida del préstamo*</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00] font-semibold">Ninguno</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Mejor Para</td>
                    <td className="py-4 px-6 text-center">Buen crédito</td>
                    <td className="py-4 px-6 text-center">Compradores primerizos</td>
                    <td className="py-4 px-6 text-center">Veteranos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-white/40 text-sm text-center mt-6">
              *Las reglas de MIP de FHA varían. Contáctanos para detalles sobre tu situación específica.
            </p>

            <div className="mt-10 text-center">
              <p className="text-white/60 text-sm bg-white/5 rounded-xl px-6 py-4 inline-block">
                Para programas de independientes e inversionistas, los criterios de calificación varían significativamente.{" "}
                <a href="/es/contacto" className="text-[#FFBA00] hover:text-[#FFBA00]/80 underline transition-colors">
                  Contáctanos
                </a>{" "}
                para una evaluación personalizada.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿No Sabes Cuál Préstamo Es Correcto para Ti?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Revisaremos tu situación y te recomendaremos las mejores opciones.
            </p>
            <Button href="/es/contacto" variant="secondary" size="lg">
              Obtener Asesoría Personalizada
            </Button>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
