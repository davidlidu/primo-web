import { TEAM } from "@/lib/constants";

interface TeamSectionProps {
  lang?: "en" | "es";
}

export default function TeamSection({ lang = "en" }: TeamSectionProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#241C4F]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#241C4F]/10 text-[#241C4F] text-sm font-medium rounded-full mb-4">
            {lang === "en" ? "Your Mortgage Experts" : "Tus Expertos Hipotecarios"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#241C4F] mb-4">
            {lang === "en" ? "Meet the Primo Team" : "Conoce al Equipo Primo"}
          </h2>
          <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
            {lang === "en"
              ? "We're Latino migrants from Colombia with 10+ years of combined mortgage experience. We understand your journey because we've lived it."
              : "Somos migrantes latinos de Colombia con más de 10 años de experiencia hipotecaria combinada. Entendemos tu camino porque lo hemos vivido."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Photo placeholder */}
              {/* TODO: Add individual team member social links when available */}
              <div className="relative mb-4 mx-auto w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8E0DC] to-[#E8E0DC]/50 group-hover:shadow-xl transition-shadow">
                {/* Placeholder avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#241C4F]/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#241C4F]/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-[#241C4F]">{member.name}</h3>
              <p className="text-sm text-[#F36C37] font-medium">{member.role}</p>
              <p className="text-xs text-[#241C4F]/50 mt-1">{member.nmls}</p>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="mt-12 text-center">
          <a
            href={lang === "en" ? "/about" : "/es/nosotros"}
            className="inline-flex items-center gap-2 text-[#241C4F] font-semibold hover:text-[#F36C37] transition-colors"
          >
            {lang === "en" ? "Learn more about our team" : "Conoce más sobre nuestro equipo"}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
