"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BRAND } from "@/lib/constants";

export default function ContactPageES() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    state: "",
    timeline: "",
    language: "es",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header lang="es" />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
                Contáctanos
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#241C4F] mb-6">
                Comencemos una Conversación
              </h1>
              <p className="text-xl text-[#241C4F]/70 leading-relaxed">
                ¿Listo para dar el siguiente paso? Completa el formulario, llámanos o envía un mensaje. Estamos aquí para ayudarte—en español o inglés.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-[#241C4F] mb-8">Información de Contacto</h2>

                <div className="space-y-6">
                  {/* TODO: Replace with real WhatsApp number */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#241C4F]">Chatea por WhatsApp</h3>
                      <a href="https://wa.me/1XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-[#241C4F]/70 hover:text-[#25D366] transition-colors">
                        Escríbenos cuando quieras
                      </a>
                      <p className="text-sm text-[#241C4F]/50 mt-1">La mayoría de nuestros clientes lo prefieren</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F36C37] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#241C4F]">Teléfono</h3>
                      <a href={`tel:${BRAND.phone.replace(/\D/g, "")}`} className="text-[#241C4F]/70 hover:text-[#F36C37] transition-colors">
                        {BRAND.phone}
                      </a>
                      <p className="text-sm text-[#241C4F]/50 mt-1">Llama o envía mensaje</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#241C4F] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#241C4F]">Correo</h3>
                      <a href={`mailto:${BRAND.email}`} className="text-[#241C4F]/70 hover:text-[#F36C37] transition-colors">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#241C4F]">Licenciados En</h3>
                      <p className="text-[#241C4F]/70">Florida y Carolina del Norte</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-[#E8E0DC]/30 rounded-xl">
                  <h3 className="font-semibold text-[#241C4F] mb-2">We Speak English Too</h3>
                  <p className="text-[#241C4F]/60 text-sm">
                    Todo nuestro equipo habla inglés y español. Comunícate en el idioma que prefieras.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#241C4F] mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-[#241C4F]/70">Te responderemos dentro de 24 horas.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white border border-[#E8E0DC] rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#241C4F] mb-2">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#241C4F] mb-2">Correo *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#241C4F] mb-2">Teléfono *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#241C4F] mb-2">Propósito *</label>
                        <select
                          required
                          value={formData.purpose}
                          onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="purchase">Compra de Casa</option>
                          <option value="refinance">Refinanciamiento</option>
                          <option value="investment">Propiedad de Inversión</option>
                          <option value="other">Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#241C4F] mb-2">Estado *</label>
                        <select
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="FL">Florida</option>
                          <option value="NC">Carolina del Norte</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#241C4F] mb-2">Línea de Tiempo</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="0-3">0-3 meses</option>
                          <option value="3-6">3-6 meses</option>
                          <option value="6+">6+ meses</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-[#241C4F] mb-2">Idioma Preferido</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="language"
                            value="es"
                            checked={formData.language === "es"}
                            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            className="w-4 h-4 text-[#F36C37] focus:ring-[#F36C37]"
                          />
                          <span className="text-[#241C4F]">Español</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="language"
                            value="en"
                            checked={formData.language === "en"}
                            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            className="w-4 h-4 text-[#F36C37] focus:ring-[#F36C37]"
                          />
                          <span className="text-[#241C4F]">English</span>
                        </label>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-[#241C4F] mb-2">Mensaje (opcional)</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all resize-none"
                        placeholder="Cuéntanos sobre tu situación..."
                      />
                    </div>

                    <div className="mt-6">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 text-[#F36C37] focus:ring-[#F36C37]" />
                        <span className="text-sm text-[#241C4F]/60">
                          Acepto recibir comunicaciones de Primo Team por teléfono, correo y SMS. Pueden aplicar cargos por mensajes y datos.
                        </span>
                      </label>
                    </div>

                    {status === "error" && (
                      <p className="mt-4 text-red-500 text-sm">Algo salió mal. Por favor intenta de nuevo.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-8 w-full py-4 bg-gradient-to-r from-[#FFBA00] to-[#F36C37] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#F36C37]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
