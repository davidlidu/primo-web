import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";
import { getAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Política de Privacidad | Primo Team",
  description: "Política de privacidad para los servicios hipotecarios de Primo Team.",
  alternates: getAlternates("/es/privacidad"),
  openGraph: {
    title: "Política de Privacidad | Primo Team",
    description: "Política de privacidad para los servicios hipotecarios de Primo Team.",
    type: "website",
    locale: "es_US",
    siteName: "Primo Team",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidad | Primo Team",
    description: "Política de privacidad para los servicios hipotecarios de Primo Team.",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#241C4F] mb-8">Política de Privacidad</h1>
            <p className="text-[#241C4F]/60 mb-8">Última actualización: enero 2025</p>

            <div className="prose prose-lg max-w-none text-[#241C4F]/80">
              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">1. Información que Recopilamos</h2>
              <p className="mb-4">
                {BRAND.name} (&quot;nosotros&quot; o &quot;nuestro&quot;) recopila información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Información de contacto (nombre, correo electrónico, número de teléfono)</li>
                <li>Información financiera necesaria para solicitudes de hipoteca</li>
                <li>Preferencias de comunicación</li>
                <li>Cualquier otra información que usted decida proporcionar</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">2. Cómo Usamos Su Información</h2>
              <p className="mb-4">Usamos la información que recopilamos para:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Procesar solicitudes de hipoteca y proporcionar servicios relacionados</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Mejorar nuestros servicios</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">3. Compartición de Información</h2>
              <p className="mb-4">
                Podemos compartir su información con:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Rize Mortgage y sus afiliados para el procesamiento de hipotecas</li>
                <li>Proveedores de servicios que asisten en nuestras operaciones</li>
                <li>Autoridades legales cuando lo requiera la ley</li>
                <li>Otras partes con su consentimiento</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">4. Sus Derechos</h2>
              <p className="mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Optar por no recibir comunicaciones de marketing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">5. Contáctenos</h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta Política de Privacidad, por favor contáctenos:
              </p>
              <p className="mb-4">
                Correo electrónico: {BRAND.email}<br />
                Teléfono: {BRAND.phone}
              </p>

              <h2 className="text-2xl font-semibold text-[#241C4F] mt-8 mb-4">6. Cambios a Esta Política</h2>
              <p className="mb-4">
                Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
