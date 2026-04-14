"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, ROUTE_MAP, ROUTE_MAP_REVERSE } from "@/lib/constants";

interface HeaderProps {
  lang?: "en" | "es";
}

const LOAN_SUB_LINKS = {
  en: [
    { label: "Bank Statement Loans", href: "/bank-statement-loans" },
    { label: "DSCR Investor Loans", href: "/dscr-investor-loans" },
  ],
  es: [
    { label: "Préstamos con Estados de Cuenta", href: "/es/prestamos-estados-de-cuenta" },
    { label: "Préstamos DSCR", href: "/es/prestamos-inversionistas-dscr" },
  ],
};

const LOAN_OPTIONS_HREF = {
  en: "/loan-options",
  es: "/es/opciones-de-prestamo",
};

export default function Header({ lang = "en" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = NAV_LINKS[lang];
  const alternateLang = lang === "en" ? "es" : "en";
  const alternateHref =
    lang === "en"
      ? ROUTE_MAP[pathname] ?? "/es"
      : ROUTE_MAP_REVERSE[pathname] ?? "/";

  const loanSubLinks = LOAN_SUB_LINKS[lang];
  const loanOptionsHref = LOAN_OPTIONS_HREF[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E0DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={lang === "en" ? "/" : "/es"} className="flex-shrink-0">
            <Image
              src="/images/primo-logo-color.svg"
              alt="Primo Team"
              width={140}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isLoanOptions = link.href === loanOptionsHref;

              if (isLoanOptions) {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-sm font-medium text-[#241C4F] hover:text-[#F36C37] transition-colors duration-200 relative inline-flex items-center gap-1"
                    >
                      {link.label}
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#F36C37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-[#E8E0DC] py-2 min-w-[240px]">
                        <Link
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-[#241C4F] hover:bg-[#E8E0DC]/50 hover:text-[#F36C37] transition-colors font-medium"
                        >
                          {lang === "en" ? "All Loan Options" : "Todas las Opciones"}
                        </Link>
                        <div className="border-t border-[#E8E0DC] my-1" />
                        {loanSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-[#241C4F] hover:bg-[#E8E0DC]/50 hover:text-[#F36C37] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#241C4F] hover:text-[#F36C37] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#F36C37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              );
            })}
          </nav>

          {/* Right side - Language & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <Link
              href={alternateHref}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#241C4F] hover:text-[#F36C37] transition-colors border border-[#E8E0DC] rounded-full hover:border-[#F36C37]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {alternateLang === "es" ? "Español" : "English"}
            </Link>

            {/* CTA Button */}
            <Link
              href={lang === "en" ? "/contact" : "/es/contacto"}
              className="px-6 py-2.5 bg-[#F36C37] text-white font-semibold text-sm rounded-full hover:bg-[#241C4F] transition-all duration-300 shadow-lg shadow-[#F36C37]/20 hover:shadow-[#241C4F]/20"
            >
              {lang === "en" ? "Get Started" : "Comenzar"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#241C4F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E8E0DC]">
            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                const isLoanOptions = link.href === loanOptionsHref;
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="px-4 py-3 text-[#241C4F] font-medium hover:bg-[#E8E0DC]/50 rounded-lg transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {isLoanOptions && (
                      <div className="ml-6 flex flex-col gap-1">
                        {loanSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="px-4 py-2 text-sm text-[#241C4F]/70 hover:text-[#F36C37] hover:bg-[#E8E0DC]/30 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="flex items-center gap-3 px-4 pt-4 mt-2 border-t border-[#E8E0DC]">
                <Link
                  href={alternateHref}
                  className="flex-1 py-3 text-center text-[#241C4F] font-medium border border-[#E8E0DC] rounded-full"
                >
                  {alternateLang === "es" ? "Español" : "English"}
                </Link>
                <Link
                  href={lang === "en" ? "/contact" : "/es/contacto"}
                  className="flex-1 py-3 text-center bg-[#F36C37] text-white font-semibold rounded-full"
                >
                  {lang === "en" ? "Get Started" : "Comenzar"}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
