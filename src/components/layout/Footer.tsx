import Link from "next/link";
import Image from "next/image";
import { BRAND, NAV_LINKS } from "@/lib/constants";

interface FooterProps {
  lang?: "en" | "es";
}

export default function Footer({ lang = "en" }: FooterProps) {
  const links = NAV_LINKS[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#241C4F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/primo-logo-white.svg"
              alt="Primo Team"
              width={140}
              height={50}
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {lang === "en"
                ? "Your trusted bilingual mortgage team. We guide you from dream to keys with clarity and confidence."
                : "Tu equipo hipotecario bilingüe de confianza. Te guiamos desde el sueño hasta las llaves con claridad y confianza."}
            </p>
            <div className="flex gap-4">
              {/* TODO: Replace with real Instagram URL */}
              <a
                href="https://instagram.com/primoteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F36C37] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                </svg>
              </a>
              {/* TODO: Replace with real TikTok URL */}
              <a
                href="https://tiktok.com/@primoteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F36C37] transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                </svg>
              </a>
              {/* TODO: Replace with real YouTube URL */}
              <a
                href="https://youtube.com/@primoteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F36C37] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* TODO: Replace with real WhatsApp number */}
              <a
                href="https://wa.me/1XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {lang === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h4>
            <ul className="space-y-3">
              {links.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#F36C37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {lang === "en" ? "Loan Programs" : "Programas de Préstamos"}
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href={lang === "en" ? "/loan-options" : "/es/opciones-de-prestamo"} className="hover:text-[#F36C37] transition-colors">
                  {lang === "en" ? "Conventional" : "Convencional"}
                </Link>
              </li>
              <li>
                <Link href={lang === "en" ? "/loan-options" : "/es/opciones-de-prestamo"} className="hover:text-[#F36C37] transition-colors">
                  FHA
                </Link>
              </li>
              <li>
                <Link href={lang === "en" ? "/loan-options" : "/es/opciones-de-prestamo"} className="hover:text-[#F36C37] transition-colors">
                  VA
                </Link>
              </li>
              <li>
                <Link href={lang === "en" ? "/bank-statement-loans" : "/es/prestamos-estados-de-cuenta"} className="hover:text-[#F36C37] transition-colors">
                  {lang === "en" ? "Bank Statement" : "Estados de Cuenta"}
                </Link>
              </li>
              <li>
                <Link href={lang === "en" ? "/dscr-investor-loans" : "/es/prestamos-inversionistas-dscr"} className="hover:text-[#F36C37] transition-colors">
                  {lang === "en" ? "DSCR" : "Inversionistas"}
                </Link>
              </li>
              <li>
                <Link href={lang === "en" ? "/loan-options" : "/es/opciones-de-prestamo"} className="hover:text-[#F36C37] transition-colors">
                  {lang === "en" ? "Foreign National" : "Extranjeros"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {lang === "en" ? "Contact Us" : "Contáctanos"}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F36C37] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white/70">{BRAND.phone}</p>
                  <p className="text-white/50 text-xs mt-1">
                    {lang === "en" ? "Call or text anytime" : "Llama o envía mensaje"}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F36C37] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-white/70">{BRAND.email}</p>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F36C37] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-white/70">
                  <p>{BRAND.address}</p>
                  <p className="text-white/50 text-xs mt-1">
                    {lang === "en" ? "Licensed in:" : "Licenciados en:"} Florida & North Carolina
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Equal Housing */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <svg className="w-8 h-8 text-[#241C4F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 2.84L18 11v8H6v-8l6-5.16z"/>
                  <path d="M8 14h8v1H8zm0 2h8v1H8z"/>
                </svg>
              </div>
              <span className="text-white/50 text-xs">Equal Housing Lender</span>
            </div>

            {/* NMLS Info */}
            <div className="text-center text-white/50 text-xs max-w-3xl">
              <p className="mb-2">
                {lang === "en"
                  ? "Primo Team is a team of licensed mortgage loan originators operating under Rize Mortgage, LLC. Primo Team is not a lender. All loan products and services are provided by Rize Mortgage. NMLS #1604663. Juan Velasquez NMLS #1284682. Licensed in Florida and North Carolina. All loans subject to credit and collateral review and approval. Programs, rates, terms, and conditions are subject to change without notice. This is not a commitment to lend. Equal Housing Lender."
                  : "Primo Team es un equipo de originadores de préstamos hipotecarios licenciados que operan bajo Rize Mortgage, LLC. Primo Team no es un prestamista. Todos los productos y servicios de préstamos son proporcionados por Rize Mortgage. NMLS #1604663. Juan Velasquez NMLS #1284682. Licenciado en Florida y Carolina del Norte. Todos los préstamos están sujetos a revisión y aprobación de crédito y garantía. Los programas, tasas, términos y condiciones están sujetos a cambio sin previo aviso. Esto no es un compromiso de préstamo. Prestamista de Igualdad de Vivienda."}
              </p>
              <p className="mt-2">
                <a
                  href="https://www.nmlsconsumeraccess.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 underline hover:text-white transition-colors"
                >
                  NMLS Consumer Access
                </a>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-white/50">
              <Link href={lang === "en" ? "/privacy" : "/es/privacidad"} className="hover:text-white transition-colors">
                {lang === "en" ? "Privacy Policy" : "Política de Privacidad"}
              </Link>
              <span>|</span>
              <Link href={lang === "en" ? "/terms" : "/es/terminos"} className="hover:text-white transition-colors">
                {lang === "en" ? "Terms of Use" : "Términos de Uso"}
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
            <p>© {currentYear} {BRAND.name}. {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
