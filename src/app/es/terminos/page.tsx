import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Términos de Uso | Primo Team",
  description: "Términos de uso del sitio web de servicios hipotecarios de Primo Team.",
  alternates: getAlternates("/es/terminos"),
  openGraph: {
    title: "Términos de Uso | Primo Team",
    description: "Términos de uso del sitio web de servicios hipotecarios de Primo Team.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Términos de Uso | Primo Team",
    description: "Términos de uso del sitio web de servicios hipotecarios de Primo Team.",
  },
};

export default function TerminosPage() {
  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#241C4F] mb-8">Términos de Uso</h1>
            <p className="text-[#241C4F]/60 mb-8">Última actualización: enero 2025</p>

            <div className="prose prose-lg max-w-none text-[#241C4F]/80">
              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-4">
                Al acceder y utilizar este sitio web, usted acepta y acuerda quedar obligado por los términos y disposiciones de este acuerdo.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">2. Acerca de {BRAND.name}</h2>
              <p className="mb-4">
                {BRAND.name} es un equipo de originadores de préstamos hipotecarios licenciados que operan bajo Rize Mortgage. Primo Team no es un prestamista. Todos los productos y servicios de préstamos son proporcionados por Rize Mortgage.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">3. Sin Garantía de Aprobación de Préstamo</h2>
              <p className="mb-4">
                La información proporcionada en este sitio web es solo con fines educativos y no constituye un compromiso de otorgar un préstamo ni una garantía de aprobación. Todas las solicitudes de préstamo están sujetas a aprobación de crédito y otras condiciones.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">4. Uso del Sitio Web</h2>
              <p className="mb-4">
                Usted acepta utilizar este sitio web únicamente con fines legales y de una manera que no infrinja los derechos de otros, ni restrinja o inhiba el uso y disfrute del sitio web por parte de cualquier otra persona.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">5. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos e imágenes, es propiedad de {BRAND.name} o sus proveedores de contenido y está protegido por las leyes de derechos de autor.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">6. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                {BRAND.name} no será responsable de ningún daño que surja de su uso o incapacidad de uso de este sitio web o su contenido.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">7. Enlaces a Terceros</h2>
              <p className="mb-4">
                Este sitio web puede contener enlaces a sitios web de terceros. No somos responsables del contenido ni de las prácticas de privacidad de esos sitios.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">8. Cambios a los Términos</h2>
              <p className="mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del sitio web constituye la aceptación de cualquier modificación.
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">9. Información de Contacto</h2>
              <p className="mb-4">
                Para preguntas sobre estos Términos de Uso, por favor contáctenos:
              </p>
              <p className="mb-4">
                Correo electrónico: {BRAND.email}<br />
                Teléfono: {BRAND.phone}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
