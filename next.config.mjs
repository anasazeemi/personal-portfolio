/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Ensures Next.js images work on GitHub Pages
    },
    basePath: "/personal-portfolio", // Helps with correct routing
    assetPrefix: "/personal-portfolio/",
  };
  
  export default nextConfig;
  