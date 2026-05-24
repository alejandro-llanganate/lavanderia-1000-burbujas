# Despliegue con GitHub Actions

El sitio se publica automáticamente en **GitHub Pages** al hacer push a la rama `main`.

## URL del sitio

https://alejandro-llanganate.github.io/lavanderia-1000-burbujas/

## Activar GitHub Pages (solo la primera vez)


1. Ve al repositorio en GitHub: [lavanderia-1000-burbujas](https://github.com/alejandro-llanganate/lavanderia-1000-burbujas)
2. **Settings** → **Pages**
3. En **Build and deployment** → **Source**, elige **GitHub Actions**
4. Guarda. El workflow `Deploy GitHub Pages` se ejecutará en el próximo push a `main`

## Workflows

| Archivo | Qué hace |
|---------|----------|
| `.github/workflows/deploy.yml` | Build estático + despliegue a Pages |
| `.github/workflows/ci.yml` | Comprueba que compile en PRs |

## Despliegue manual

En GitHub: **Actions** → **Deploy GitHub Pages** → **Run workflow**

## Desarrollo local

```bash
npm install
npm run dev
```

## Probar build igual que en producción (Pages)

```bash
GITHUB_PAGES=true \
NEXT_PUBLIC_BASE_PATH=/lavanderia-1000-burbujas \
NEXT_PUBLIC_SITE_URL=https://alejandro-llanganate.github.io/lavanderia-1000-burbujas \
npm run build
```

Los archivos quedan en la carpeta `out/`. Puedes servirlos con:

```bash
npx serve out
```

## Dominio propio (opcional)

Si más adelante usas un dominio como `1000burbujas.ec`:

1. Configura el DNS/CNAME en GitHub Pages
2. Cambia `NEXT_PUBLIC_SITE_URL` en `deploy.yml` al dominio final
3. Si el sitio queda en la raíz del dominio, quita `NEXT_PUBLIC_BASE_PATH` y `GITHUB_PAGES` base path en `next.config.ts`

## Node.js

GitHub Actions usa **Node 20** (recomendado para Next.js 15).
