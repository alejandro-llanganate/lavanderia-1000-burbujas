import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGithubPages ? "/lavanderia-1000-burbujas" : "");

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  ...(isGithubPages ? { output: "export" as const } : {}),
  basePath: basePath || undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "static.misionesonline.news" },
      { protocol: "https", hostname: "www.electroluxprofessional.com" },
      { protocol: "https", hostname: "inspiring.tonello.com" },
      {
        protocol: "https",
        hostname: "cl-cenco-pim-resizer.ecomm.cencosud.com",
      },
    ],
  },
};

export default nextConfig;
