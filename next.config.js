/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://dbProducts:f4H8FMgKeuWKQSrB@cluster0.n2vkkvk.mongodb.net/?retryWrites=true&w=majority"
  }
}
