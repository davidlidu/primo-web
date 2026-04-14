import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Préstamos DSCR para Inversionistas | Financiamiento de Propiedades | Primo Team",
  description:
    "Financia propiedades de alquiler e inversión con préstamos DSCR. Califica con el ingreso de la propiedad, no el personal. 1-8 unidades, hasta $3.5M. Primo Team, impulsado por Rize Mortgage.",
  alternates: getAlternates("/es/prestamos-inversionistas-dscr"),
  openGraph: {
    title: "Préstamos DSCR para Inversionistas | Financiamiento de Propiedades | Primo Team",
    description: "Financia propiedades de alquiler e inversión con préstamos DSCR. Califica con el ingreso de la propiedad, no el personal. 1-8 unidades, hasta $3.5M.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Préstamos DSCR para Inversionistas | Financiamiento de Propiedades | Primo Team",
    description: "Financia propiedades de alquiler e inversión con préstamos DSCR. Califica con el ingreso de la propiedad, no el personal. 1-8 unidades, hasta $3.5M.",
  },
};

const highlights1to4 = [
  "Mín. 620 FICO, hasta 80% LTV",
  "Sin ratio DSCR mínimo hasta 75% LTV",
  "Sin documentación de ingreso personal requerida",
  "Ingresos de AirDNA y alquiler a corto plazo aceptados",
  "Montos de préstamo hasta $3.5M",
  "Propiedades vacantes y rurales (hasta 20 acres) permitidas",
  "SFR, condos, condoteles, 2-4 unidades",
  "3 meses de maduración para cash-out",
  "Sin requisito de origen de depósitos",
];

const highlights5to8 = [
  "Mín. 700 FICO, hasta 75% LTV",
  "DSCR mínimo de 1.0",
  "Espacio comercial menor al 50% permitido",
  "Cash-out hasta 65% LTV",
  "Montos de préstamo hasta $2M",
];

const highlightsPortfolio = [
  "Mín. 660 FICO, hasta 70% LTV",
  "DSCR mínimo de 1.2",
  "De 2 a 25 propiedades",
  "Mínimo $50K de saldo por propiedad",
];

const whyPrimo = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Entendemos los tiempos del inversionista",
    description: "Conocemos las matemáticas del flujo de caja y nos movemos a la velocidad que tus negocios demandan.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Ingresos de Airbnb y VRBO aceptados",
    description: "Hemos cerrado usando documentación de alquiler a corto plazo incluyendo proyecciones de AirDNA.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    title: "Servicio bilingüe",
    description: "Útil para inversionistas internacionales navegando el mercado estadounidense.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Cierres rápidos",
    description: "~23 días promedio para Clear to Close. Tu negocio no se estancará.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "94% tasa de cierre",
    description: "Tu negocio no se caerá. Cerramos lo que comenzamos.",
  },
];

function HighlightCard({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return (
    <div className="bg-white border border-[#E8E0DC] rounded-2xl p-8 hover:shadow-xl hover:border-[#F36C37]/30 transition-all flex flex-col">
      <h3 className="text-xl font-bold text-[#241C4F] mb-2">{title}</h3>
      <p className="text-sm text-[#241C4F]/60 mb-5">{subtitle}</p>
      <div className="border-t border-[#E8E0DC] pt-5 flex-1">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[#241C4F]/70">
              <svg className="w-5 h-5 text-[#FFBA00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DSCRInvestorLoansPageES() {
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
                Programa para Inversionistas
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#241C4F] mb-6 leading-tight">
                Haz Crecer Tu Portafolio de Rentas — Califica con el Ingreso de la Propiedad, No el Tuyo
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed mb-10">
                Préstamos DSCR para propiedades de inversión de 1-8 unidades. Sin documentos de ingreso personal.
              </p>
              <Button href="/es/contacto" variant="primary" size="lg">
                Solicita Cotización DSCR
              </Button>
            </div>
          </div>
        </section>

        {/* What Is a DSCR Loan? */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">¿Qué Es un Préstamo DSCR?</h2>
              <p className="text-lg text-[#241C4F]/60">La alternativa del inversionista a la verificación de ingresos tradicional</p>
            </div>

            <div className="max-w-4xl mx-auto bg-[#E8E0DC]/20 rounded-2xl p-8 sm:p-12 border border-[#E8E0DC]/50">
              <div className="space-y-6 text-lg text-[#241C4F]/80 leading-relaxed">
                <p>
                  DSCR significa <strong className="text-[#241C4F]">Debt Service Coverage Ratio</strong> (Ratio de Cobertura del Servicio de Deuda). Compara el ingreso de alquiler de la propiedad con el pago de la hipoteca.
                </p>
                <p>
                  Si la propiedad genera suficiente para cubrir el préstamo, <strong className="text-[#241C4F]">calificas</strong> — sin importar tu ingreso personal o situación laboral.
                </p>
                <p>
                  Esto lo hace ideal para inversionistas que poseen múltiples propiedades o tienen situaciones fiscales complejas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Tiers */}
        <section className="py-20 bg-[#E8E0DC]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#241C4F]/10 text-[#241C4F] text-sm font-medium rounded-full mb-4">
                Detalles del Programa
              </span>
              <h2 className="text-3xl font-bold text-[#241C4F] mb-4">Programas DSCR por Tipo de Propiedad</h2>
              <p className="text-lg text-[#241C4F]/60">Elige el programa que se ajuste a tu estrategia de inversión</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="relative">
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[#F36C37] text-white text-xs font-bold rounded-full uppercase tracking-wide z-10">
                  Más Popular
                </span>
                <HighlightCard
                  title="DSCR 1-4 Unidades"
                  subtitle="Unifamiliar, condos, condoteles y multifamiliar pequeño"
                  items={highlights1to4}
                />
              </div>

              <HighlightCard
                title="5-8 Unidades y Uso Mixto"
                subtitle="Escala a multifamiliar más grande y uso comercial mixto"
                items={highlights5to8}
              />

              <HighlightCard
                title="Varias Propiedades (de 2 a 25)"
                subtitle="Para inversionistas con 2+ propiedades"
                items={highlightsPortfolio}
              />
            </div>
          </div>
        </section>

        {/* Why Investors Choose Primo */}
        <section className="py-20 bg-[#241C4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Por Qué los Inversionistas Eligen Primo</h2>
              <p className="text-lg text-white/60">Hablamos tu idioma — literal y financieramente</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyPrimo.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F36C37]/20 flex items-center justify-center text-[#F36C37] mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFBA00] to-[#F36C37]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Tienes una propiedad en mente? Hagamos los números.
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Obtén una cotización DSCR personalizada para tu propiedad de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/es/contacto" variant="secondary" size="lg">
                Solicita Cotización DSCR
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
