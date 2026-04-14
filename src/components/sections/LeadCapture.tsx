"use client";

import { useState } from "react";

interface LeadCaptureProps {
  lang?: "en" | "es";
}

export default function LeadCapture({ lang = "en" }: LeadCaptureProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: lang === "es" ? "es" : "en",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const content = {
    en: {
      badge: "Free Resource",
      title: "First-Time Homebuyer Guide",
      subtitle: "Get your free bilingual guide to buying your first home",
      description:
        "Everything you need to know about the home buying process, explained clearly in English and Spanish. From credit preparation to closing day.",
      features: [
        "Step-by-step buying process",
        "Credit score requirements",
        "Down payment options",
        "Document checklist",
      ],
      namePlaceholder: "Your name",
      emailPlaceholder: "Email address",
      phonePlaceholder: "Phone number",
      languageLabel: "Preferred language",
      submit: "Get My Free Guide",
      success: "Check your email for the guide!",
      error: "Something went wrong. Please try again.",
    },
    es: {
      badge: "Recurso Gratis",
      title: "Guía para Compradores Primerizos",
      subtitle: "Obtén tu guía bilingüe gratuita para comprar tu primera casa",
      description:
        "Todo lo que necesitas saber sobre el proceso de compra de casa, explicado claramente en inglés y español. Desde la preparación del crédito hasta el día del cierre.",
      features: [
        "Proceso de compra paso a paso",
        "Requisitos de puntaje de crédito",
        "Opciones de pago inicial",
        "Lista de documentos necesarios",
      ],
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Correo electrónico",
      phonePlaceholder: "Número de teléfono",
      languageLabel: "Idioma preferido",
      submit: "Obtener Mi Guía Gratis",
      success: "¡Revisa tu correo para la guía!",
      error: "Algo salió mal. Por favor intenta de nuevo.",
    },
  };

  const c = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission - replace with actual API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", language: lang });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-[#241C4F] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F36C37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFBA00]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#F36C37] text-white text-sm font-medium rounded-full mb-6">
              {c.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {c.title}
            </h2>
            <p className="text-xl text-white/80 mb-4">{c.subtitle}</p>
            <p className="text-white/60 mb-8">{c.description}</p>

            {/* Features */}
            <ul className="space-y-3">
              {c.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <svg className="w-5 h-5 text-[#FFBA00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#241C4F] mb-2">{c.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={c.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all text-[#241C4F]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={c.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all text-[#241C4F]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder={c.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E0DC] focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all text-[#241C4F]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#241C4F]/60 mb-2">{c.languageLabel}</label>
                  <div className="flex gap-4">
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
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">{c.error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-gradient-to-r from-[#FFBA00] to-[#F36C37] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#F36C37]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {lang === "en" ? "Sending..." : "Enviando..."}
                    </span>
                  ) : (
                    c.submit
                  )}
                </button>

                <p className="text-xs text-[#241C4F]/50 text-center">
                  {lang === "en"
                    ? "By submitting, you agree to receive communications from Primo Team. We respect your privacy."
                    : "Al enviar, aceptas recibir comunicaciones de Primo Team. Respetamos tu privacidad."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
