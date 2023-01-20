/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.datocms-assets.com', 'media.graphassets.com']
  },
  env: {
    NEXT_PUBLIC_DATO_CMS_READ_ONLY_API_TOKEN: process.env.DATO_CMS_READ_ONLY_API_TOKEN,
    NEXT_PUBLIC_DATO_CMS_FULL_ACCESS_API_TOKEN: process.env.DATO_CMS_FULL_ACCESS_API_TOKEN,
    NEXT_PUBLIC_GRAPHCMS_READ_ONLY_URI: process.env.GRAPHCMS_READ_ONLY_URI,
    NEXT_PUBLIC_GRAPHCMS_FULL_ACCESS_URI: process.env.GRAPHCMS_FULL_ACCESS_URI,
  },
}

module.exports = nextConfig
