# Proyecto Primo Website

Este es el sitio web oficial de **Primo**, una plataforma enfocada en servicios hipotecarios y préstamos (Lending). El proyecto está construido con tecnologías modernas para ofrecer una experiencia rápida, bilingüe y optimizada para SEO.

## 🚀 Tecnologías Principales

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Despliegue Adaptado**: Configurado para `output: 'standalone'` (ideal para Docker/Dokploy).

## 📂 Estructura del Proyecto

- `src/app/`: Contiene las rutas y páginas de la aplicación.
  - `bank-statement-loans/`, `dscr-investor-loans/`: Páginas de servicios específicos.
  - `calculator/`: Herramientas de cálculo para usuarios.
  - `es/`: Soporte para idioma español.
- `src/components/`: Componentes reutilizables de UI.
- `public/`: Archivos estáticos como imágenes y favicon.

---

## 🛠️ Desarrollo Local

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:3000`.

3.  **Construir para producción:**
    ```bash
    npm run build
    npm run start
    ```

---

## 🛳️ Despliegue en Dokploy

Dokploy es una excelente opción para hostear este proyecto. Sigue estos pasos para subirlo:

### 1. Preparación en Dokploy
1. Accede a tu panel de Dokploy.
2. Crea un **Nuevo Proyecto** (ej. "Primo-Web").
3. Dentro del proyecto, añade un nuevo **Servicio de Aplicación**.

### 2. Configuración de Git
1. Conecta tu repositorio de GitHub/GitLab/Bitbucket.
2. Selecciona la rama principal (usualmente `main` o `master`).

### 3. Configuración del Build (Nixpacks vs Docker)
Dokploy detectará automáticamente que es un proyecto de Next.js. Tienes dos opciones principales:

#### Opción A: Nixpacks (Recomendado por simplicidad)
- En la configuración de la aplicación, selecciona **Nixpacks** como el "Build Pack".
- Dokploy detectará el `package.json` y ejecutará los comandos de instalación y construcción automáticamente.

#### Opción B: Dockerfile (Más control)
Si prefieres usar Docker, asegúrate de tener un `Dockerfile` en la raíz (ver ejemplo abajo). Dokploy lo detectará y usará para construir la imagen.

### 4. Variables de Entorno
Si el proyecto requiere variables (como APIs o Analytics), añádelas en la sección **Environment** de Dokploy:
- `PORT`: `3000` (Dokploy suele manejar esto, pero es bueno asegurarlo).

### 5. Dominios
En la pestaña **Domains**, añade el dominio final (ej. `www.primolending.com`) y genera el certificado SSL con un solo clic.

---

## 🐳 Archivo Dockerfile Sugerido (opcional)

Si decides usar Docker puro, crea un archivo llamado `Dockerfile` en la raíz con el siguiente contenido (basado en la guía oficial de Next.js):

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

---

## 📞 Soporte
Desarrollado por **Lidutech** para **CTA+**.
