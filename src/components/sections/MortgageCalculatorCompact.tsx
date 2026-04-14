"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface MortgageCalculatorCompactProps {
  lang?: "en" | "es";
}

const content = {
  en: {
    badge: "Quick Estimate",
    title: "What Could Your Payment Be?",
    subtitle: "Get a quick estimate in seconds. Adjust the values to explore your options.",
    homePrice: "Home Price",
    downPayment: "Down Payment",
    loanTerm: "Loan Term",
    years: "years",
    monthlyPayment: "Estimated Monthly Payment",
    seeFullBreakdown: "See full breakdown →",
    calculatorHref: "/calculator",
    disclaimer:
      "This calculator provides estimates only and does not constitute a loan offer or commitment to lend. Actual rates, payments, and terms may vary. Contact a Primo Team advisor for a personalized quote. Primo Team, powered by Rize Mortgage. NMLS #1604663.",
  },
  es: {
    badge: "Estimación Rápida",
    title: "¿Cuál Podría Ser Tu Pago?",
    subtitle: "Obtén un estimado rápido en segundos. Ajusta los valores para explorar tus opciones.",
    homePrice: "Precio de la Vivienda",
    downPayment: "Enganche",
    loanTerm: "Plazo del Préstamo",
    years: "años",
    monthlyPayment: "Pago Mensual Estimado",
    seeFullBreakdown: "Ver desglose completo →",
    calculatorHref: "/es/calculadora",
    disclaimer:
      "Esta calculadora proporciona solo estimados y no constituye una oferta de préstamo ni un compromiso de préstamo. Las tasas, pagos y términos reales pueden variar. Contacta a un asesor de Primo Team para una cotización personalizada. Primo Team, impulsado por Rize Mortgage. NMLS #1604663.",
  },
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyFull(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function parseNumericInput(value: string): number {
  return Number(value.replace(/[^0-9.]/g, "")) || 0;
}

export default function MortgageCalculatorCompact({ lang = "en" }: MortgageCalculatorCompactProps) {
  const c = content[lang];

  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [loanTerm, setLoanTerm] = useState(30);

  const interestRate = 6.75;
  const propertyTaxRate = 1.0;
  const homeInsurance = 150;

  const monthlyPayment = useMemo(() => {
    const downPaymentAmount = homePrice * (downPaymentPercent / 100);
    const loanAmount = Math.max(homePrice - downPaymentAmount, 0);
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;

    let monthlyPI = 0;
    if (monthlyRate > 0 && loanAmount > 0) {
      const factor = Math.pow(1 + monthlyRate, totalPayments);
      monthlyPI = loanAmount * (monthlyRate * factor) / (factor - 1);
    } else if (loanAmount > 0) {
      monthlyPI = loanAmount / totalPayments;
    }

    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const hasPMI = downPaymentPercent < 20;
    const monthlyPMI = hasPMI ? (loanAmount * 0.005) / 12 : 0;

    return monthlyPI + monthlyTax + homeInsurance + monthlyPMI;
  }, [homePrice, downPaymentPercent, loanTerm]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
            {c.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#241C4F] mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#E8E0DC]/30 to-white rounded-2xl p-6 sm:p-8 border border-[#E8E0DC]/50 shadow-sm">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {/* Home Price */}
              <div>
                <label className="block text-sm font-semibold text-[#241C4F] mb-2">{c.homePrice}</label>
                <input
                  type="text"
                  value={formatCurrency(homePrice)}
                  onChange={(e) => {
                    const num = parseNumericInput(e.target.value);
                    setHomePrice(Math.min(num, 2000000));
                  }}
                  className="w-full px-4 py-3 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                />
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={5000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-[#F36C37] h-2 rounded-full cursor-pointer mt-2"
                />
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-semibold text-[#241C4F] mb-2">{c.downPayment}</label>
                <input
                  type="text"
                  value={`${downPaymentPercent.toFixed(1)}%`}
                  onChange={(e) => {
                    const num = parseNumericInput(e.target.value);
                    setDownPaymentPercent(Math.min(num, 100));
                  }}
                  className="w-full px-4 py-3 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                />
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={0.5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#F36C37] h-2 rounded-full cursor-pointer mt-2"
                />
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-semibold text-[#241C4F] mb-2">{c.loanTerm}</label>
                <div className="grid grid-cols-3 gap-2">
                  {[30, 20, 15].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`py-3 rounded-xl font-semibold text-sm transition-all ${
                        loanTerm === term
                          ? "bg-[#241C4F] text-white shadow-lg"
                          : "bg-[#E8E0DC]/40 text-[#241C4F] hover:bg-[#E8E0DC]"
                      }`}
                    >
                      {term} {c.years}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-[#241C4F] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white/60 text-sm font-medium mb-1">{c.monthlyPayment}</p>
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  {formatCurrencyFull(monthlyPayment)}
                </p>
              </div>
              <Link
                href={c.calculatorHref}
                className="inline-block px-6 py-3 bg-[#F36C37] text-white font-semibold rounded-xl hover:bg-[#F36C37]/90 transition-colors whitespace-nowrap"
              >
                {c.seeFullBreakdown}
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6">
            <p className="text-xs text-[#241C4F]/40 leading-relaxed text-center">
              {c.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
