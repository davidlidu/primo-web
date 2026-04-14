module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const LOAN_SUB_LINKS = {
    en: [
        {
            label: "Bank Statement Loans",
            href: "/bank-statement-loans"
        },
        {
            label: "DSCR Investor Loans",
            href: "/dscr-investor-loans"
        }
    ],
    es: [
        {
            label: "Préstamos con Estados de Cuenta",
            href: "/es/prestamos-estados-de-cuenta"
        },
        {
            label: "Préstamos DSCR",
            href: "/es/prestamos-inversionistas-dscr"
        }
    ]
};
const LOAN_OPTIONS_HREF = {
    en: "/loan-options",
    es: "/es/opciones-de-prestamo"
};
function Header({ lang = "en" }) {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"][lang];
    const alternateLang = lang === "en" ? "es" : "en";
    const alternateHref = lang === "en" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTE_MAP"][pathname] ?? "/es" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTE_MAP_REVERSE"][pathname] ?? "/";
    const loanSubLinks = LOAN_SUB_LINKS[lang];
    const loanOptionsHref = LOAN_OPTIONS_HREF[lang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E0DC]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: lang === "en" ? "/" : "/es",
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/primo-logo-color.svg",
                                alt: "Primo Team",
                                width: 140,
                                height: 50,
                                className: "h-12 w-auto",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: links.map((link)=>{
                                const isLoanOptions = link.href === loanOptionsHref;
                                if (isLoanOptions) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "px-4 py-2 text-sm font-medium text-[#241C4F] hover:text-[#F36C37] transition-colors duration-200 relative inline-flex items-center gap-1",
                                                children: [
                                                    link.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3.5 h-3.5 transition-transform group-hover:rotate-180",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 9l-7 7-7-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute bottom-0 left-4 right-4 h-0.5 bg-[#F36C37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-xl shadow-lg border border-[#E8E0DC] py-2 min-w-[240px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: link.href,
                                                            className: "block px-4 py-2.5 text-sm text-[#241C4F] hover:bg-[#E8E0DC]/50 hover:text-[#F36C37] transition-colors font-medium",
                                                            children: lang === "en" ? "All Loan Options" : "Todas las Opciones"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t border-[#E8E0DC] my-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 25
                                                        }, this),
                                                        loanSubLinks.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: sub.href,
                                                                className: "block px-4 py-2.5 text-sm text-[#241C4F] hover:bg-[#E8E0DC]/50 hover:text-[#F36C37] transition-colors",
                                                                children: sub.label
                                                            }, sub.href, false, {
                                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 27
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "px-4 py-2 text-sm font-medium text-[#241C4F] hover:text-[#F36C37] transition-colors duration-200 relative group",
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-4 right-4 h-0.5 bg-[#F36C37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: alternateHref,
                                    className: "flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#241C4F] hover:text-[#F36C37] transition-colors border border-[#E8E0DC] rounded-full hover:border-[#F36C37]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        alternateLang === "es" ? "Español" : "English"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: lang === "en" ? "/contact" : "/es/contacto",
                                    className: "px-6 py-2.5 bg-[#F36C37] text-white font-semibold text-sm rounded-full hover:bg-[#241C4F] transition-all duration-300 shadow-lg shadow-[#F36C37]/20 hover:shadow-[#241C4F]/20",
                                    children: lang === "en" ? "Get Started" : "Comenzar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "lg:hidden p-2 text-[#241C4F]",
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            "aria-label": "Toggle menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden py-4 border-t border-[#E8E0DC]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-2",
                        children: [
                            links.map((link)=>{
                                const isLoanOptions = link.href === loanOptionsHref;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "px-4 py-3 text-[#241C4F] font-medium hover:bg-[#E8E0DC]/50 rounded-lg transition-colors block",
                                            onClick: ()=>setMobileMenuOpen(false),
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 161,
                                            columnNumber: 21
                                        }, this),
                                        isLoanOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-6 flex flex-col gap-1",
                                            children: loanSubLinks.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: sub.href,
                                                    className: "px-4 py-2 text-sm text-[#241C4F]/70 hover:text-[#F36C37] hover:bg-[#E8E0DC]/30 rounded-lg transition-colors",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: sub.label
                                                }, sub.href, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 169,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 19
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-4 pt-4 mt-2 border-t border-[#E8E0DC]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: alternateHref,
                                        className: "flex-1 py-3 text-center text-[#241C4F] font-medium border border-[#E8E0DC] rounded-full",
                                        children: alternateLang === "es" ? "Español" : "English"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: lang === "en" ? "/contact" : "/es/contacto",
                                        className: "flex-1 py-3 text-center bg-[#F36C37] text-white font-semibold rounded-full",
                                        children: lang === "en" ? "Get Started" : "Comenzar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__77571107._.js.map