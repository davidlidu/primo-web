"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface MortgageCalculatorProps {
  lang?: "en" | "es";
}

const content = {
  en: {
    badge: "Mortgage Calculator",
    title: "Estimate Your Monthly Payment",
    subtitle: "Adjust the inputs below to see how different scenarios affect your mortgage payment.",
    homePrice: "Home Price",
    downPayment: "Down Payment",
    loanTerm: "Loan Term",
    interestRate: "Interest Rate",
    propertyTax: "Property Tax (Annual %)",
    homeInsurance: "Home Insurance ($/mo)",
    years: "years",
    monthlyPayment: "Estimated Monthly Payment",
    breakdown: "Payment Breakdown",
    principalInterest: "Principal & Interest",
    propertyTaxLabel: "Property Tax",
    insuranceLabel: "Insurance",
    pmiLabel: "PMI",
    loanAmount: "Loan Amount",
    totalInterest: "Total Interest Paid",
    pmiNote: "PMI is automatically added when down payment is less than 20%. It goes away once you reach 20% equity.",
    ctaTitle: "Like what you see? Get pre-approved to lock in your rate.",
    ctaButton: "Get Pre-Approved",
    ctaHref: "/contact",
    disclaimer:
      "This calculator provides estimates only and does not constitute a loan offer or commitment to lend. Actual rates, payments, and terms may vary. Contact a Primo Team advisor for a personalized quote. Primo Team, powered by Rize Mortgage. NMLS #1604663.",
    year30: "30 years",
    year20: "20 years",
    year15: "15 years",
  },
  es: {
    badge: "Calculadora de Hipoteca",
    title: "Estima Tu Pago Mensual",
    subtitle: "Ajusta los valores a continuación para ver cómo diferentes escenarios afectan tu pago hipotecario.",
    homePrice: "Precio de la Vivienda",
    downPayment: "Cuota Inicial",
    loanTerm: "Plazo del Préstamo",
    interestRate: "Tasa de Interés",
    propertyTax: "Impuesto a la Propiedad (% Anual)",
    homeInsurance: "Seguro de Vivienda ($/mes)",
    years: "años",
    monthlyPayment: "Pago Mensual Estimado",
    breakdown: "Desglose del Pago",
    principalInterest: "Capital e Interés",
    propertyTaxLabel: "Impuesto",
    insuranceLabel: "Seguro",
    pmiLabel: "PMI",
    loanAmount: "Monto del Préstamo",
    totalInterest: "Interés Total Pagado",
    pmiNote: "El PMI se agrega automáticamente cuando la cuota inicial es menor al 20%. Se elimina al alcanzar el 20% de equidad.",
    ctaTitle: "¿Te gusta lo que ves? Obtén tu pre-aprobación para asegurar tu tasa.",
    ctaButton: "Obtener Pre-Aprobación",
    ctaHref: "/es/contacto",
    disclaimer:
      "Esta calculadora proporciona solo estimados y no constituye una oferta de préstamo ni un compromiso de préstamo. Las tasas, pagos y términos reales pueden variar. Contacta a un asesor de Primo Team para una cotización personalizada. Primo Team, impulsado por Rize Mortgage. NMLS #1604663.",
    year30: "30 años",
    year20: "20 años",
    year15: "15 años",
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

export default function MortgageCalculator({ lang = "en" }: MortgageCalculatorProps) {
  const c = content[lang];

  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentMode, setDownPaymentMode] = useState<"percent" | "dollar">("percent");
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [downPaymentDollar, setDownPaymentDollar] = useState(35000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.75);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.0);
  const [homeInsurance, setHomeInsurance] = useState(150);

  const downPaymentAmount = downPaymentMode === "percent"
    ? homePrice * (downPaymentPercent / 100)
    : downPaymentDollar;

  const downPaymentPct = downPaymentMode === "percent"
    ? downPaymentPercent
    : homePrice > 0 ? (downPaymentDollar / homePrice) * 100 : 0;

  const calculations = useMemo(() => {
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
    const monthlyInsurance = homeInsurance;
    const hasPMI = downPaymentPct < 20;
    const monthlyPMI = hasPMI ? (loanAmount * 0.005) / 12 : 0;

    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;
    const totalInterest = monthlyPI * totalPayments - loanAmount;

    return {
      loanAmount,
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      monthlyPMI,
      hasPMI,
      totalMonthly,
      totalInterest,
    };
  }, [homePrice, downPaymentAmount, downPaymentPct, interestRate, loanTerm, propertyTaxRate, homeInsurance]);

  const total = calculations.totalMonthly;
  const segments = [
    { label: c.principalInterest, value: calculations.monthlyPI, color: "#241C4F" },
    { label: c.propertyTaxLabel, value: calculations.monthlyTax, color: "#F36C37" },
    { label: c.insuranceLabel, value: calculations.monthlyInsurance, color: "#FFBA00" },
    ...(calculations.hasPMI
      ? [{ label: c.pmiLabel, value: calculations.monthlyPMI, color: "#E8E0DC" }]
      : []),
  ];

  function handleHomePriceSlider(val: number) {
    setHomePrice(val);
    if (downPaymentMode === "percent") {
      setDownPaymentDollar(val * (downPaymentPercent / 100));
    } else {
      setDownPaymentPercent(val > 0 ? (downPaymentDollar / val) * 100 : 0);
    }
  }

  function handleHomePriceInput(val: string) {
    const num = parseNumericInput(val);
    const clamped = Math.min(num, 2000000);
    setHomePrice(clamped);
    if (downPaymentMode === "percent") {
      setDownPaymentDollar(clamped * (downPaymentPercent / 100));
    } else {
      setDownPaymentPercent(clamped > 0 ? (downPaymentDollar / clamped) * 100 : 0);
    }
  }

  function handleDownPaymentSlider(val: number) {
    if (downPaymentMode === "percent") {
      setDownPaymentPercent(val);
      setDownPaymentDollar(homePrice * (val / 100));
    } else {
      setDownPaymentDollar(val);
      setDownPaymentPercent(homePrice > 0 ? (val / homePrice) * 100 : 0);
    }
  }

  function handleDownPaymentInput(val: string) {
    const num = parseNumericInput(val);
    if (downPaymentMode === "percent") {
      const clamped = Math.min(num, 100);
      setDownPaymentPercent(clamped);
      setDownPaymentDollar(homePrice * (clamped / 100));
    } else {
      const clamped = Math.min(num, homePrice);
      setDownPaymentDollar(clamped);
      setDownPaymentPercent(homePrice > 0 ? (clamped / homePrice) * 100 : 0);
    }
  }

  function toggleDownPaymentMode() {
    if (downPaymentMode === "percent") {
      setDownPaymentMode("dollar");
    } else {
      setDownPaymentMode("percent");
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#E8E0DC]/30 via-white to-[#E8E0DC]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#F36C37]/10 text-[#F36C37] text-sm font-medium rounded-full mb-6">
            {c.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241C4F] mb-4">
            {c.title}
          </h1>
          <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Inputs — left column */}
          <div className="lg:col-span-3 space-y-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8E0DC]/50">
            {/* Home Price */}
            <div>
              <label className="block text-sm font-semibold text-[#241C4F] mb-3">{c.homePrice}</label>
              <div className="flex items-center gap-4 mb-3">
                <input
                  type="text"
                  value={formatCurrency(homePrice)}
                  onChange={(e) => handleHomePriceInput(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold text-lg focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                />
              </div>
              <input
                type="range"
                min={50000}
                max={2000000}
                step={5000}
                value={homePrice}
                onChange={(e) => handleHomePriceSlider(Number(e.target.value))}
                className="w-full accent-[#F36C37] h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#241C4F]/40 mt-1">
                <span>$50K</span>
                <span>$2M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-[#241C4F]">{c.downPayment}</label>
                <button
                  onClick={toggleDownPaymentMode}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-[#F36C37] text-[#F36C37] hover:bg-[#F36C37] hover:text-white transition-colors"
                >
                  {downPaymentMode === "percent" ? "$ ⇄ %" : "% ⇄ $"}
                </button>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <input
                  type="text"
                  value={
                    downPaymentMode === "percent"
                      ? `${downPaymentPercent.toFixed(1)}%`
                      : formatCurrency(downPaymentDollar)
                  }
                  onChange={(e) => handleDownPaymentInput(e.target.value)}
                  className="w-full px-4 py-3 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold text-lg focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                />
              </div>
              <input
                type="range"
                min={0}
                max={downPaymentMode === "percent" ? 100 : homePrice}
                step={downPaymentMode === "percent" ? 0.5 : 1000}
                value={downPaymentMode === "percent" ? downPaymentPercent : downPaymentDollar}
                onChange={(e) => handleDownPaymentSlider(Number(e.target.value))}
                className="w-full accent-[#F36C37] h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-[#241C4F]/40 mt-1">
                <span>0%</span>
                <span>{downPaymentMode === "percent" ? "100%" : formatCurrency(homePrice)}</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-sm font-semibold text-[#241C4F] mb-3">{c.loanTerm}</label>
              <div className="grid grid-cols-3 gap-3">
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

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-semibold text-[#241C4F] mb-3">{c.interestRate}</label>
              <div className="relative">
                <input
                  type="number"
                  step={0.01}
                  min={0}
                  max={20}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-3 pr-10 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold text-lg focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#241C4F]/40 font-semibold">%</span>
              </div>
            </div>

            {/* Property Tax & Insurance Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#241C4F] mb-3">{c.propertyTax}</label>
                <div className="relative">
                  <input
                    type="number"
                    step={0.1}
                    min={0}
                    max={10}
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                    className="w-full px-4 py-3 pr-10 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold text-lg focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#241C4F]/40 font-semibold">%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#241C4F] mb-3">{c.homeInsurance}</label>
                <div className="relative">
                  <input
                    type="number"
                    step={10}
                    min={0}
                    max={2000}
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                    className="w-full px-4 py-3 pl-8 border border-[#E8E0DC] rounded-xl text-[#241C4F] font-semibold text-lg focus:border-[#F36C37] focus:ring-2 focus:ring-[#F36C37]/20 outline-none transition-all"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#241C4F]/40 font-semibold">$</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results — right column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly Payment Card */}
            <div className="bg-[#241C4F] rounded-2xl p-6 sm:p-8 text-white">
              <p className="text-white/60 text-sm font-medium mb-2">{c.monthlyPayment}</p>
              <p className="text-4xl sm:text-5xl font-bold mb-6">
                {formatCurrencyFull(calculations.totalMonthly)}
              </p>

              {/* Stacked bar chart */}
              <div className="h-4 rounded-full overflow-hidden flex mb-6">
                {segments.map((seg) => (
                  <div
                    key={seg.label}
                    style={{
                      width: `${total > 0 ? (seg.value / total) * 100 : 0}%`,
                      backgroundColor: seg.color,
                    }}
                    className="transition-all duration-500"
                  />
                ))}
              </div>

              {/* Breakdown legend */}
              <div className="space-y-3">
                {segments.map((seg) => (
                  <div key={seg.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: seg.color }}
                      />
                      <span className="text-sm text-white/80">{seg.label}</span>
                    </div>
                    <span className="text-sm font-semibold">{formatCurrencyFull(seg.value)}</span>
                  </div>
                ))}
              </div>

              {/* PMI note */}
              {calculations.hasPMI && (
                <div className="mt-4 p-3 bg-white/10 rounded-xl">
                  <p className="text-xs text-white/70 leading-relaxed">{c.pmiNote}</p>
                </div>
              )}
            </div>

            {/* Loan summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E0DC]/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#241C4F]/60">{c.loanAmount}</span>
                  <span className="font-bold text-[#241C4F]">{formatCurrency(calculations.loanAmount)}</span>
                </div>
                <div className="border-t border-[#E8E0DC]" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#241C4F]/60">{c.totalInterest}</span>
                  <span className="font-bold text-[#F36C37]">{formatCurrency(calculations.totalInterest)}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#F36C37] to-[#F36C37]/90 rounded-2xl p-6 text-white">
              <p className="text-sm font-medium mb-4 leading-relaxed">{c.ctaTitle}</p>
              <Link
                href={c.ctaHref}
                className="inline-block w-full text-center px-6 py-3 bg-white text-[#F36C37] font-bold rounded-xl hover:bg-[#241C4F] hover:text-white transition-colors"
              >
                {c.ctaButton}
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-[#E8E0DC]/30 rounded-xl">
          <p className="text-xs text-[#241C4F]/50 leading-relaxed text-center">
            {c.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
