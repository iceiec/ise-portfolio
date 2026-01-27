/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static export
  trailingSlash: true,     // ensures correct routing
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
};

export default nextConfig;
