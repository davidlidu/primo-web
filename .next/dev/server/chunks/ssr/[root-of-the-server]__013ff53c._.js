module.exports = [
"[next]/internal/font/google/poppins_ccfab241.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "poppins_ccfab241-module___H-5jG__className",
  "variable": "poppins_ccfab241-module___H-5jG__variable",
});
}),
"[next]/internal/font/google/poppins_ccfab241.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ccfab241$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_ccfab241.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ccfab241$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Poppins', 'Poppins Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ccfab241$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ccfab241$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "CONFORMING_PRODUCTS",
    ()=>CONFORMING_PRODUCTS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "NON_QM_PRODUCTS",
    ()=>NON_QM_PRODUCTS,
    "ROUTE_MAP",
    ()=>ROUTE_MAP,
    "ROUTE_MAP_REVERSE",
    ()=>ROUTE_MAP_REVERSE,
    "TEAM",
    ()=>TEAM
]);
const BRAND = {
    name: "Primo Team",
    tagline: "Powered by Rize Mortgage",
    phone: "(555) 123-4567",
    email: "info@primoteam.com",
    nmls: "NMLS #1604663",
    companyNmls: "Rize Mortgage NMLS #1604663",
    licensedStates: [
        "Florida",
        "North Carolina"
    ],
    address: "53 NW 100th Ave, Plantation, FL 33324"
};
const TEAM = [
    {
        name: "Juan Velasquez",
        role: "Branch Manager",
        nmls: "NMLS #1284682",
        image: "/images/team/juan-velasquez.jpg"
    },
    {
        name: "Andres Llanos",
        role: "Branch Manager",
        nmls: "NMLS #000000",
        image: "/images/team/andres-llanos.jpg"
    },
    {
        name: "Julian Avila",
        role: "Loan Officer",
        nmls: "NMLS #000000",
        image: "/images/team/julian-avila.jpg"
    },
    {
        name: "Apolonia Sanmartin",
        role: "Loan Officer",
        nmls: "NMLS #000000",
        image: "/images/team/apolonia-sanmartin.jpg"
    },
    {
        name: "Hernan Feria",
        role: "Loan Officer",
        nmls: "NMLS #000000",
        image: "/images/team/hernan-feria.jpg"
    }
];
const NAV_LINKS = {
    en: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Buy a Home",
            href: "/buy"
        },
        {
            label: "Refinance",
            href: "/refinance"
        },
        {
            label: "Loan Options",
            href: "/loan-options"
        },
        {
            label: "Resources",
            href: "/resources"
        },
        {
            label: "Calculator",
            href: "/calculator"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ],
    es: [
        {
            label: "Inicio",
            href: "/es"
        },
        {
            label: "Nosotros",
            href: "/es/nosotros"
        },
        {
            label: "Comprar",
            href: "/es/comprar"
        },
        {
            label: "Refinanciar",
            href: "/es/refinanciar"
        },
        {
            label: "Opciones",
            href: "/es/opciones-de-prestamo"
        },
        {
            label: "Recursos",
            href: "/es/recursos"
        },
        {
            label: "Calculadora",
            href: "/es/calculadora"
        },
        {
            label: "Contacto",
            href: "/es/contacto"
        }
    ]
};
const ROUTE_MAP = {
    "/": "/es",
    "/about": "/es/nosotros",
    "/buy": "/es/comprar",
    "/refinance": "/es/refinanciar",
    "/loan-options": "/es/opciones-de-prestamo",
    "/resources": "/es/recursos",
    "/contact": "/es/contacto",
    "/privacy": "/es/privacidad",
    "/terms": "/es/terminos",
    "/calculator": "/es/calculadora",
    "/bank-statement-loans": "/es/prestamos-estados-de-cuenta",
    "/dscr-investor-loans": "/es/prestamos-inversionistas-dscr"
};
const ROUTE_MAP_REVERSE = Object.fromEntries(Object.entries(ROUTE_MAP).map(([en, es])=>[
        es,
        en
    ]));
const CONFORMING_PRODUCTS = [
    {
        title: {
            en: "Conventional",
            es: "Convencional"
        },
        tagline: {
            en: "As low as 3% down | 620+ FICO | Up to 97% LTV",
            es: "Desde 3% de cuota inicial | 620+ FICO | Hasta 97% LTV"
        },
        description: {
            en: "Traditional financing with competitive rates. Best for buyers with good credit and stable income.",
            es: "Financiamiento tradicional con tasas competitivas. Ideal para compradores con buen crédito e ingreso estable."
        }
    },
    {
        title: {
            en: "FHA",
            es: "FHA"
        },
        tagline: {
            en: "3.5% down | 580+ FICO | Flexible DTI",
            es: "3.5% de cuota inicial | 580+ FICO | DTI flexible"
        },
        description: {
            en: "Government-backed loans with lower down payment and credit requirements. Great for first-time buyers.",
            es: "Préstamos respaldados por el gobierno con menor pago inicial y requisitos de crédito. Excelente para compradores primerizos."
        }
    },
    {
        title: {
            en: "VA",
            es: "VA"
        },
        tagline: {
            en: "0% down | No PMI | For veterans",
            es: "0% de cuota inicial | Sin PMI | Para veteranos"
        },
        description: {
            en: "Zero down payment and no mortgage insurance for eligible veterans and active-duty military.",
            es: "Cero pago inicial y sin seguro hipotecario para veteranos elegibles y militares en servicio activo."
        }
    },
    {
        title: {
            en: "Jumbo",
            es: "Jumbo"
        },
        tagline: {
            en: "Above conforming limits | Competitive rates",
            es: "Sobre los límites conformes | Tasas competitivas"
        },
        description: {
            en: "Financing for high-value properties that exceed conforming loan limits.",
            es: "Financiamiento para propiedades de alto valor que exceden los límites de préstamos conformes."
        }
    }
];
const NON_QM_PRODUCTS = [
    {
        title: {
            en: "Bank Statement Loans",
            es: "Préstamos con Estados de Cuenta"
        },
        tagline: {
            en: "Qualify using your bank deposits, not tax returns",
            es: "Califica usando tus depósitos bancarios, no declaraciones de impuestos"
        },
        highlights: {
            en: [
                "Min 620 FICO, up to 90% LTV",
                "12 or 24 months, business or personal",
                "Loan amounts up to $4M",
                "Non-permanent residents eligible",
                "50% standard expense ratio (10% with accountant letter)"
            ],
            es: [
                "Mín. 620 FICO, hasta 90% LTV",
                "12 o 24 meses, empresarial o personal",
                "Montos de préstamo hasta $4M",
                "Residentes no permanentes elegibles",
                "50% ratio de gastos estándar (10% con carta de contador)"
            ]
        },
        popular: true
    },
    {
        title: {
            en: "DSCR Investor Loans (1-4 Units)",
            es: "Préstamos DSCR para Inversionistas (1-4 Unidades)"
        },
        tagline: {
            en: "Qualify based on property rental income, not personal income",
            es: "Califica con el ingreso de renta de la propiedad, no tu ingreso personal"
        },
        highlights: {
            en: [
                "Min 620 FICO, up to 80% LTV",
                "No personal income documentation needed",
                "AirDNA & short-term rental income accepted",
                "Loan amounts up to $3.5M",
                "Vacant and rural properties allowed (up to 20 acres)"
            ],
            es: [
                "Mín. 620 FICO, hasta 80% LTV",
                "Sin documentación de ingreso personal",
                "Ingresos de AirDNA y alquiler a corto plazo aceptados",
                "Montos de préstamo hasta $3.5M",
                "Propiedades vacantes y rurales permitidas (hasta 20 acres)"
            ]
        },
        popular: true
    },
    {
        title: {
            en: "Foreign National",
            es: "Nacional Extranjero"
        },
        tagline: {
            en: "Own U.S. property without a U.S. credit history",
            es: "Compra propiedad en EE.UU. sin historial de crédito estadounidense"
        },
        highlights: {
            en: [
                "No FICO required (or 680+), up to 80% LTV",
                "No visa required, ITIN borrowers accepted",
                "No credit reference letters needed",
                "Bank statement and P&L options available",
                "Loan amounts up to $2M"
            ],
            es: [
                "Sin FICO requerido (o 680+), hasta 80% LTV",
                "Sin visa requerida, prestatarios ITIN aceptados",
                "Sin cartas de referencia de crédito necesarias",
                "Opciones de estados de cuenta y P&L disponibles",
                "Montos de préstamo hasta $2M"
            ]
        }
    },
    {
        title: {
            en: "P&L Only (Profit & Loss)",
            es: "Solo P&L (Pérdidas y Ganancias)"
        },
        tagline: {
            en: "A signed P&L statement is all you need",
            es: "Solo necesitas un estado de pérdidas y ganancias firmado"
        },
        highlights: {
            en: [
                "Min 660 FICO, up to 80% LTV",
                "No bank statements required",
                "12 or 24 months accepted",
                "CPA, EA, or CTEC can sign",
                "Loan amounts up to $3M"
            ],
            es: [
                "Mín. 660 FICO, hasta 80% LTV",
                "Sin estados de cuenta bancarios requeridos",
                "12 o 24 meses aceptados",
                "CPA, EA o CTEC pueden firmar",
                "Montos de préstamo hasta $3M"
            ]
        }
    },
    {
        title: {
            en: "1099 Only",
            es: "Solo 1099"
        },
        tagline: {
            en: "For independent contractors and freelancers",
            es: "Para contratistas independientes y freelancers"
        },
        highlights: {
            en: [
                "Min 620 FICO, up to 90% LTV",
                "1 or 2 years of 1099s or transcripts",
                "Loan amounts up to $4M",
                "Cash-out used for reserves"
            ],
            es: [
                "Mín. 620 FICO, hasta 90% LTV",
                "1 o 2 años de 1099s o transcripciones",
                "Montos de préstamo hasta $4M",
                "Cash-out utilizado para reservas"
            ]
        }
    },
    {
        title: {
            en: "DSCR (5-8 Units & Mixed Use)",
            es: "DSCR (5-8 Unidades y Uso Mixto)"
        },
        tagline: {
            en: "Scale your investment portfolio",
            es: "Escala tu portafolio de inversión"
        },
        highlights: {
            en: [
                "Min 700 FICO, up to 75% LTV",
                "Min DSCR of 1.0",
                "Commercial space under 50% allowed",
                "Loan amounts up to $2M"
            ],
            es: [
                "Mín. 700 FICO, hasta 75% LTV",
                "DSCR mínimo de 1.0",
                "Espacio comercial menor al 50% permitido",
                "Montos de préstamo hasta $2M"
            ]
        }
    },
    {
        title: {
            en: "Asset Utilization",
            es: "Utilización de Activos"
        },
        tagline: {
            en: "Use your assets instead of income to qualify",
            es: "Usa tus activos en lugar de ingresos para calificar"
        },
        highlights: {
            en: [
                "Min 640 FICO, up to 85% LTV",
                "100% of liquid assets, 70% of investments",
                "Divided by 84 months",
                "Loan amounts up to $4M"
            ],
            es: [
                "Mín. 640 FICO, hasta 85% LTV",
                "100% de activos líquidos, 70% de inversiones",
                "Dividido entre 84 meses",
                "Montos de préstamo hasta $4M"
            ]
        }
    },
    {
        title: {
            en: "Employment Verification Only",
            es: "Verificación de Empleo"
        },
        tagline: {
            en: "Qualify with just an employer verification letter",
            es: "Califica solo con una carta de verificación de tu empleador"
        },
        highlights: {
            en: [
                "Min 660 FICO, up to 80% LTV",
                "Employer verification letter only",
                "Loan amounts up to $3M"
            ],
            es: [
                "Mín. 660 FICO, hasta 80% LTV",
                "Solo carta de verificación de empleo",
                "Montos de préstamo hasta $3M"
            ]
        }
    },
    {
        title: {
            en: "Multi-Property (2-25 Properties)",
            es: "Varias Propiedades (de 2 a 25)"
        },
        tagline: {
            en: "Bundle 2 to 25 properties in a single loan",
            es: "Agrupa de 2 a 25 propiedades en un solo préstamo"
        },
        highlights: {
            en: [
                "Min 660 FICO, up to 70% LTV",
                "Min DSCR of 1.2",
                "2 to 25 properties",
                "Minimum $50K balance per property",
                "Cash-out up to 65% LTV"
            ],
            es: [
                "Mín. 660 FICO, hasta 70% LTV",
                "DSCR mínimo de 1.2",
                "De 2 a 25 propiedades",
                "Mínimo $50K de saldo por propiedad",
                "Cash-out hasta 65% LTV"
            ]
        }
    },
    {
        title: {
            en: "Second Lien Loan",
            es: "Préstamo en Segunda Posición"
        },
        tagline: {
            en: "Keep your low first mortgage rate and tap your equity with a second lien",
            es: "Mantén la tasa baja de tu primera hipoteca y accede a tu equity con un préstamo en segunda posición"
        },
        highlights: {
            en: [
                "Min 660 FICO, up to 90% CLTV",
                "Loan amounts up to $500K",
                "Multiple income doc types accepted",
                "Primary, second homes, and investment",
                "Ideal for homeowners with significant equity and a low interest rate on their first mortgage. Instead of refinancing and losing your rate, add a second lien to access cash."
            ],
            es: [
                "Mín. 660 FICO, hasta 90% CLTV",
                "Montos de préstamo hasta $500K",
                "Múltiples tipos de documentación de ingresos aceptados",
                "Primarias, segundas residencias e inversión",
                "Ideal para propietarios con equity significativo y una tasa de interés baja en su primera hipoteca. En lugar de refinanciar y perder tu tasa, agrega un préstamo en segunda posición para acceder a efectivo."
            ]
        }
    }
];
}),
"[project]/src/lib/metadata.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlternates",
    ()=>getAlternates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
function getAlternates(path) {
    const isSpanish = path.startsWith("/es");
    const enPath = isSpanish ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTE_MAP_REVERSE"][path] ?? "/" : path;
    const esPath = isSpanish ? path : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTE_MAP"][path] ?? "/es";
    return {
        languages: {
            en: enPath,
            es: esPath
        }
    };
}
}),
"[project]/src/components/ui/WhatsAppButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/WhatsAppButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/WhatsAppButton.tsx <module evaluation>", "default");
}),
"[project]/src/components/ui/WhatsAppButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/WhatsAppButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/WhatsAppButton.tsx", "default");
}),
"[project]/src/components/ui/WhatsAppButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WhatsAppButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/WhatsAppButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WhatsAppButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/WhatsAppButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WhatsAppButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ccfab241$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/poppins_ccfab241.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WhatsAppButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WhatsAppButton.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Primo Team | Powered by Rize Mortgage",
    description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina.",
    keywords: [
        "mortgage",
        "home loan",
        "bilingual",
        "Spanish",
        "Florida",
        "North Carolina",
        "first-time homebuyer"
    ],
    alternates: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAlternates"])("/"),
    openGraph: {
        title: "Primo Team | Powered by Rize Mortgage",
        description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina.",
        type: "website",
        locale: "en_US",
        siteName: "Primo Team"
    },
    twitter: {
        card: "summary",
        title: "Primo Team | Powered by Rize Mortgage",
        description: "Your trusted bilingual mortgage team. Buy your home with clarity and confidence. Serving Florida and North Carolina."
    }
};
async function RootLayout({ children }) {
    const headersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const lang = headersList.get("x-lang") || "en";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: lang,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {}, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_ccfab241$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} font-sans antialiased`,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WhatsAppButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        lang: lang
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__013ff53c._.js.map