/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['www.datocms-assets.com', 'lh3.googleusercontent.com']
  },
  env: {
    NEXT_PUBLIC_DATO_CMS_READ_ONLY_API_TOKEN: process.env.DATO_CMS_READ_ONLY_API_TOKEN,
    NEXT_PUBLIC_DATO_CMS_FULL_ACCESS_API_TOKEN: process.env.DATO_CMS_FULL_ACCESS_API_TOKEN,
  },
};
