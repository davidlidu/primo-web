interface TestimonialsProps {
  lang?: "en" | "es";
}

const testimonials = {
  en: [
    {
      quote: "Working with the Primo Team was an exceptional experience from start to finish. They made the entire mortgage process smooth, transparent, and stress-free. I always felt informed and supported.",
      author: "Gustavo C.",
      label: "Homebuyer",
      rating: 5,
    },
    {
      quote: "The team went above and beyond to find the best loan option for my situation. Communication was excellent throughout the process, and they closed faster than I expected.",
      author: "Arda S.",
      label: "Homebuyer",
      rating: 5,
    },
    {
      quote: "I was nervous as a first-time buyer, but Primo made everything so clear. They explained every step in plain language and were always available when I had questions.",
      author: "Danait P.",
      label: "First-Time Buyer",
      rating: 5,
    },
  ],
  es: [
    {
      quote: "Trabajar con Primo Team fue una experiencia excepcional de principio a fin. Hicieron todo el proceso hipotecario fluido, transparente y sin estrés. Siempre me sentí informado y apoyado.",
      author: "Gustavo C.",
      label: "Comprador",
      rating: 5,
    },
    {
      quote: "El equipo fue más allá para encontrar la mejor opción de préstamo para mi situación. La comunicación fue excelente durante todo el proceso, y cerraron más rápido de lo que esperaba.",
      author: "Arda S.",
      label: "Comprador",
      rating: 5,
    },
    {
      quote: "Estaba nervioso como comprador primerizo, pero Primo hizo todo muy claro. Explicaron cada paso en lenguaje simple y siempre estuvieron disponibles cuando tenía preguntas.",
      author: "Danait P.",
      label: "Comprador Primerizo",
      rating: 5,
    },
  ],
};

export default function Testimonials({ lang = "en" }: TestimonialsProps) {
  const items = testimonials[lang];

  return (
    <section className="py-20 bg-[#E8E0DC]/30 relative overflow-hidden">
      {/* Quote decoration */}
      <div className="absolute top-10 left-10 text-[#241C4F]/5 hidden lg:block">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#241C4F] mb-4">
            {lang === "en" ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes"}
          </h2>
          <p className="text-lg text-[#241C4F]/60 max-w-2xl mx-auto">
            {lang === "en"
              ? "Don't just take our word for it. Here's what families we've helped have to say."
              : "No solo tomes nuestra palabra. Esto es lo que dicen las familias que hemos ayudado."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFBA00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#241C4F]/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFBA00] to-[#F36C37] flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#241C4F]">{testimonial.author}</p>
                  <p className="text-sm text-[#241C4F]/60">{testimonial.label}</p>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="absolute top-4 right-4 text-[#F36C37]/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        {/* TODO: Replace href="#" with actual Google Business review link when available */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E8E0DC] rounded-full text-[#241C4F] font-medium hover:border-[#F36C37] hover:shadow-md transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {lang === "en" ? "Leave Us a Review" : "Déjanos una Reseña"}
          </a>
        </div>
      </div>
    </section>
  );
}
