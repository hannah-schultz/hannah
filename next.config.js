/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static export
  trailingSlash: true,     // ensures URLs end with '/'
  images: { unoptimized: true },  // disables image optimization for static deploys
  assetPrefix: '/',        // leading slash ensures CSS, JS, fonts load
};

module.exports = nextConfig;