import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Préstamos con Estados de Cuenta | Hipoteca para Independientes | Primo Team",
  description:
    "Califica para una hipoteca usando tus depósitos bancarios en lugar de declaraciones de impuestos. Para trabajadores independientes en Florida y Carolina del Norte.",
  alternates: getAlternates("/es/prestamos-estados-de-cuenta"),
  openGraph: {
    title: "Préstamos con Estados de Cuenta | Hipoteca para Independientes | Primo Team",
    description: "Califica para una hipoteca usando tus depósitos bancarios en lugar de declaraciones de impuestos. Para trabajadores independientes en Florida y Carolina del Norte.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Préstamos con Estados de Cuenta | Hipoteca para Independientes | Primo Team",
    description: "Califica para una hipoteca usando tus depósitos bancarios en lugar de declaraciones de impuestos. Para trabajadores independientes en Florida y Carolina del Norte.",
  },
};

const highlights = [
  "Puntaje de crédito mínimo: 620",
  "LTV máximo: 90% (compra)",
  "Montos de préstamo: hasta $4M",
  "Estados de cuenta empresariales o personales",
  "50% ratio de gastos (10% con carta de contador)",
  "Tipos de propiedad: SFR, condos, condoteles, estudios, 2-4 unidades",
  "Residentes no permanentes elegibles",
  "Refinanciamiento cash-out con 3 meses de maduración",
  "Sin requisito de línea de crédito con 3 puntajes",
  "Cash-out puede usarse para reservas",
];

const personas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    text: "Dueños de negocio que reinvierten ganancias y muestran menor ingreso gravable",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    text: "Freelancers y trabajadores independientes con ingreso variable",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.6-3.03a.75.75 0 01-.38-.65V7.28a.75.75 0 01.38-.65l5.6-3.03a.75.75 0 01.76 0l5.6 3.03a.75.75 0 01.38.65v4.21a.75.75 0 01-.38.65l-5.6 3.03a.75.75 0 01-.76 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6.34" />
      </svg>
    ),
    text: "Contratistas que ganan bien pero no pueden mostrarlo en un W-2",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    text: "Cualquier profesional independiente que no encaja en el molde tradicional",
  },
];

export default function BankStatementLoansPageES() {
  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFBA00]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F36C37]/5 to-transparent rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Programa de Préstamo Non-QM
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#241C4F] mb-6 leading-tight">
                ¿Trabajas por Tu Cuenta? Tus Estados de Cuenta Son Tu Comprobante de Ingresos
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed mb-10">
                Sin declaraciones de impuestos. Califica con 12-24 meses de depósitos bancarios.
              </p>
              <Button href="/es/contacto" variant="primary" size="lg">
                Verifica si Calificas
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Cómo Funciona</h2>
              <p className="text-lg text-[#241C4F]/60">Una forma más sencilla de comprobar tus ingresos</p>
            </div>

            <div className="max-w-4xl mx-auto bg-[#E8E0DC]/20 rounded-2xl p-8 sm:p-12 border border-[#E8E0DC]/50">
              <div className="space-y-6 text-lg text-[#241C4F]/80 leading-relaxed">
                <p>
                  En lugar de W-2s o declaraciones de impuestos, usamos tus <strong className="text-[#241C4F]">depósitos bancarios de 12 o 24 meses</strong> para calcular tu ingreso calificable. Puedes usar cuentas empresariales o personales.
                </p>
                <p>
                  El ratio de gastos estándar es <strong className="text-[#241C4F]">50% de los depósitos</strong>, pero con una carta de contador, puede bajar hasta <strong className="text-[#F36C37]">10%</strong>.
                </p>
                <p>
                  Aún necesitarás una verificación de crédito y un avalúo de la propiedad — esto solo cambia cómo verificamos tus ingresos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 bg-[#E8E0DC]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#241C4F]/10 text-[#241C4F] text-sm font-medium rounded-full mb-4">
                Detalles del Programa
              </span>
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Características del Programa</h2>
              <p className="text-lg text-[#241C4F]/60">Características clave de nuestro Préstamo con Estados de Cuenta</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#E8E0DC] hover:shadow-md hover:border-[#F36C37]/30 transition-all"
                >
                  <svg className="w-5 h-5 text-[#FFBA00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#241C4F]/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is This For? */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">¿Para Quién Es Este Programa?</h2>
              <p className="text-lg text-[#241C4F]/60">Los préstamos con estados de cuenta están diseñados para personas como tú</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {personas.map((persona, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-[#E8E0DC]/20 to-white border border-[#E8E0DC] rounded-2xl p-8 hover:shadow-lg hover:border-[#F36C37]/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#241C4F]/5 flex items-center justify-center text-[#F36C37] mb-5 group-hover:bg-[#F36C37]/10 transition-colors">
                    {persona.icon}
                  </div>
                  <p className="text-[#241C4F] font-medium leading-relaxed">{persona.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Estados de Cuenta vs. Tradicional</h2>
              <p className="text-lg text-white/60">Compara cómo funciona este programa</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left text-white font-semibold"></th>
                    <th className="py-4 px-6 text-center text-white/70 font-semibold">Hipoteca Tradicional</th>
                    <th className="py-4 px-6 text-center text-[#FFBA00] font-semibold">Préstamo con Estados de Cuenta</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 font-medium text-white">Comprobante de ingresos</td>
                    <td className="py-4 px-6 text-center">W-2, recibos de pago, declaraciones</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00]">12-24 meses de depósitos bancarios</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 font-medium text-white">Mejor para</td>
                    <td className="py-4 px-6 text-center">Empleados asalariados</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00]">Independientes, dueños de negocio</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 font-medium text-white">Pago inicial mínimo</td>
                    <td className="py-4 px-6 text-center">3-5%</td>
                    <td className="py-4 px-6 text-center">10%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-6 font-medium text-white">Monto máximo</td>
                    <td className="py-4 px-6 text-center">Límites conformes</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00]">Hasta $4M</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-white">¿Amigable para independientes?</td>
                    <td className="py-4 px-6 text-center">Frecuentemente difícil</td>
                    <td className="py-4 px-6 text-center text-[#FFBA00] font-semibold">Diseñado para ellos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Veamos si tus estados de cuenta te califican.
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Sin compromiso, sin presión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/es/contacto" variant="secondary" size="lg">
                Inicia Tu Aplicación
              </Button>
              <Button href="/es/contacto" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#241C4F]">
                Habla con un Asesor
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
