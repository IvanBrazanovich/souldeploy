/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/nextjs-pages",
  basePath: "/nextjs-pages",
};

export default nextConfig;
