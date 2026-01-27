/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,       // ensures proper routing
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // remove basePath and assetPrefix
};
export default nextConfig;
