import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TEAM, BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Nosotros | Primo Team",
  description: "Conoce al equipo Primo - tus expertos hipotecarios bilingües con más de 10 años de experiencia sirviendo Florida y Carolina del Norte.",
  alternates: getAlternates("/es/nosotros"),
  openGraph: {
    title: "Nosotros | Primo Team",
    description: "Conoce al equipo Primo - tus expertos hipotecarios bilingües con más de 10 años de experiencia sirviendo Florida y Carolina del Norte.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Nosotros | Primo Team",
    description: "Conoce al equipo Primo - tus expertos hipotecarios bilingües con más de 10 años de experiencia sirviendo Florida y Carolina del Norte.",
  },
};

export default function AboutPageES() {
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
                Nuestra Historia
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                Somos Migrantes Latinos Que Entendemos Tu Camino
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                {BRAND.name} fue fundado por inmigrantes latinos de Colombia que saben de primera mano lo que significa construir una vida en un nuevo país. Creamos este equipo porque creemos que toda familia merece un asesor hipotecario que hable su idioma—literal y figurativamente.
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
                  Más de 10 Años de Experiencia, Construidos para Ti
                </h2>
                <div className="space-y-4 text-[#241C4F]/70 leading-relaxed">
                  <p>
                    Nuestro equipo aporta más de una década de experiencia combinada en la industria hipotecaria. Hemos trabajado desde pasantías hasta procesamiento, desde gestión hasta convertirnos en oficiales de préstamos licenciados y gerentes de sucursal.
                  </p>
                  <p>
                    Este camino nos dio una visión profunda de cada paso del proceso hipotecario. Conocemos los obstáculos, los atajos, y lo más importante, sabemos cómo cerrar préstamos para familias que podrían haber sido pasadas por alto por prestamistas tradicionales.
                  </p>
                  <p>
                    Hoy, operamos como {BRAND.name} dentro de Rize Mortgage, dándote acceso a una amplia gama de productos de préstamo mientras mantenemos el servicio personalizado y de alto contacto que nos distingue.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#241C4F] text-white rounded-2xl p-8">
                  <div className="text-4xl font-bold text-[#FFBA00] mb-2">10+</div>
                  <p className="text-white/70">Años de Experiencia Combinada</p>
                </div>
                <div className="bg-[#F36C37] text-white rounded-2xl p-8">
                  <div className="text-4xl font-bold mb-2">2</div>
                  <p className="text-white/90">Estados Licenciados</p>
                </div>
                <div className="bg-[#E8E0DC] text-[#241C4F] rounded-2xl p-8">
                  <div className="text-4xl font-bold text-[#F36C37] mb-2">100%</div>
                  <p className="text-[#241C4F]/70">Equipo Bilingüe</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFBA00] to-[#F36C37] text-white rounded-2xl p-8">
                  <div className="text-4xl font-bold mb-2">5</div>
                  <p className="text-white/90">Expertos Dedicados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bilingual Matters */}
        <section className="py-20 bg-[#241C4F] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Por Qué Ser Bilingüe Importa</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Comprar una casa es una de las decisiones financieras más importantes que tomarás. Mereces entender cada detalle, hacer cada pregunta y sentirte seguro en tus decisiones—en el idioma en el que piensas y sueñas.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#F36C37] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comunicación Clara</h3>
                  <p className="text-white/60 text-sm">Sin malentendidos. Sin confusión. Cada término explicado claramente.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#F36C37] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comprensión Cultural</h3>
                  <p className="text-white/60 text-sm">Entendemos la dinámica familiar latina y las metas financieras.</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#F36C37] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Confianza y Comodidad</h3>
                  <p className="text-white/60 text-sm">Siéntete a gusto discutiendo tus finanzas con alguien que te entiende.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-[#E8E0DC]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Conoce a Nuestro Equipo</h2>
              <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
                Cada miembro del equipo Primo está comprometido con tu éxito.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
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
              ¿Listo para Trabajar con Nosotros?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Comencemos con una conversación. Sin presión, sin compromiso—solo consejos honestos.
            </p>
            <a
              href="/es/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#241C4F] text-white font-semibold rounded-full hover:bg-white hover:text-[#241C4F] transition-all shadow-lg"
            >
              Agenda una Llamada
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
